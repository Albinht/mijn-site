import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY);

export async function POST(request) {
  try {
    const { keywords } = await request.json();

    if (!keywords || keywords.length === 0) {
      return NextResponse.json({ 
        success: false,
        error: 'Minimaal één keyword is verplicht' 
      }, { status: 400 });
    }

    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

    const prompt = `Analyze the search intent for these keywords and classify each one.

Keywords:
${keywords.map((k, i) => `${i+1}. ${k}`).join('\n')}

For each keyword, determine:
1. Intent type: informational, navigational, transactional, or commercial
2. Confidence level (0-100%)
3. Brief explanation why this intent
4. Content recommendation for this intent

Intent definitions:
- Informational: User wants to learn, understand, find answers (how, what, why, guide, tips)
- Navigational: User wants specific website/brand (brand names, login, specific sites)
- Transactional: User ready to buy/act (buy, order, download, signup, price)
- Commercial: User researching before buying (best, review, vs, comparison, top)

Return as JSON array:
[
  {
    "keyword": "...",
    "intent": "informational|navigational|transactional|commercial",
    "confidence": 85,
    "explanation": "...",
    "contentRecommendation": "..."
  }
]

Return ONLY the JSON array, no explanation.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    let text = response.text().trim();

    if (text.includes('```json')) {
      text = text.split('```json')[1].split('```')[0].trim();
    } else if (text.includes('```')) {
      text = text.split('```')[1].split('```')[0].trim();
    }

    const predictions = JSON.parse(text);

    return NextResponse.json({
      success: true,
      predictions,
      totalAnalyzed: predictions.length
    });

  } catch (error) {
    console.error('User intent prediction error:', error);
    return NextResponse.json({ 
      success: false,
      error: 'Er ging iets fout bij het analyseren. Probeer het later opnieuw.' 
    }, { status: 500 });
  }
}
