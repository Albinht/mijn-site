import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY);

export async function POST(request) {
  const { seedKeyword, industry, targetAudience, keywordType } = await request.json();

  if (!seedKeyword?.trim()) {
    return NextResponse.json({ error: 'Seed keyword is required' }, { status: 400 });
  }

  try {
    // Check if API key is available
    if (!process.env.GOOGLE_AI_API_KEY) {
      throw new Error('Google AI API key not configured');
    }

    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

    const prompt = `Generate comprehensive keyword suggestions for SEO based on the following:

Seed Keyword: ${seedKeyword}
${industry ? `Industry: ${industry}` : ''}
${targetAudience ? `Target Audience: ${targetAudience}` : ''}
Keyword Focus: ${keywordType}

Please provide keywords organized into the following categories:

1. **Primary Keywords** - Main variations of the seed keyword (5-8 keywords)
2. **Long-tail Keywords** - 3-5 word phrases with lower competition (8-10 keywords)
3. **Question Keywords** - What, how, why, when questions related to the topic (6-8 keywords)
4. **Commercial Keywords** - Buying intent keywords (6-8 keywords)
5. **Related Keywords** - Semantically related terms (8-10 keywords)

For each keyword provide:
- The keyword phrase
- Search intent (Informational, Navigational, Commercial, or Transactional)
- Competition level (Low, Medium, High)
- 2-3 content ideas for that keyword

Also provide 5-7 SEO tips specific to this keyword and industry.

Format the response as JSON with this structure:
{
  "keywords": {
    "primary": [{"keyword": "", "searchIntent": "", "competition": "", "contentIdeas": []}],
    "longTail": [...],
    "questions": [...],
    "commercial": [...],
    "related": [...]
  },
  "seoTips": [],
  "totalKeywords": number
}

Focus on practical, actionable keywords that have real search potential.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    let text = response.text();

    // Clean up the response to extract JSON
    text = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
    
    try {
      const keywordData = JSON.parse(text);
      
      // Calculate total keywords
      let totalKeywords = 0;
      Object.values(keywordData.keywords).forEach(category => {
        if (Array.isArray(category)) {
          totalKeywords += category.length;
        }
      });
      keywordData.totalKeywords = totalKeywords;

      return NextResponse.json({
        success: true,
        ...keywordData
      });
    } catch (parseError) {
      console.error('JSON parsing failed, using fallback keywords');
      
      // Fallback keywords if AI response parsing fails
      const fallbackKeywords = generateFallbackKeywords(seedKeyword, industry, keywordType);
      return NextResponse.json({
        success: true,
        ...fallbackKeywords
      });
    }

  } catch (error) {
    console.error('Keyword generation error:', error);
    
    // Fallback keywords if API fails completely
    const fallbackKeywords = generateFallbackKeywords(seedKeyword, industry, keywordType);
    return NextResponse.json({
      success: true,
      ...fallbackKeywords
    });
  }
}

function generateFallbackKeywords(seedKeyword, industry, keywordType) {
  const baseKeyword = seedKeyword.toLowerCase().trim();
  
  const keywords = {
    primary: [
      { keyword: baseKeyword, searchIntent: 'Informational', competition: 'Medium', contentIdeas: [`What is ${baseKeyword}?`, `${baseKeyword} guide`, `${baseKeyword} basics`] },
      { keyword: `${baseKeyword} tips`, searchIntent: 'Informational', competition: 'Low', contentIdeas: [`Top ${baseKeyword} tips`, `${baseKeyword} best practices`, `${baseKeyword} advice`] },
      { keyword: `${baseKeyword} guide`, searchIntent: 'Informational', competition: 'Medium', contentIdeas: [`Complete ${baseKeyword} guide`, `${baseKeyword} tutorial`, `${baseKeyword} walkthrough`] },
      { keyword: `best ${baseKeyword}`, searchIntent: 'Commercial', competition: 'High', contentIdeas: [`Best ${baseKeyword} options`, `Top ${baseKeyword} recommendations`, `${baseKeyword} comparison`] },
      { keyword: `${baseKeyword} services`, searchIntent: 'Commercial', competition: 'Medium', contentIdeas: [`Professional ${baseKeyword} services`, `${baseKeyword} service providers`, `${baseKeyword} companies`] }
    ],
    longTail: [
      { keyword: `how to improve ${baseKeyword}`, searchIntent: 'Informational', competition: 'Low', contentIdeas: [`${baseKeyword} improvement strategies`, `Enhance ${baseKeyword} performance`, `${baseKeyword} optimization tips`] },
      { keyword: `${baseKeyword} for small business`, searchIntent: 'Commercial', competition: 'Medium', contentIdeas: [`Small business ${baseKeyword} solutions`, `${baseKeyword} for startups`, `Affordable ${baseKeyword} services`] },
      { keyword: `${baseKeyword} cost calculator`, searchIntent: 'Commercial', competition: 'Low', contentIdeas: [`${baseKeyword} pricing tool`, `${baseKeyword} budget planner`, `${baseKeyword} cost estimator`] },
      { keyword: `${baseKeyword} mistakes to avoid`, searchIntent: 'Informational', competition: 'Low', contentIdeas: [`Common ${baseKeyword} errors`, `${baseKeyword} pitfalls`, `${baseKeyword} warning signs`] },
      { keyword: `${baseKeyword} trends 2024`, searchIntent: 'Informational', competition: 'Medium', contentIdeas: [`Latest ${baseKeyword} trends`, `${baseKeyword} industry insights`, `Future of ${baseKeyword}`] }
    ],
    questions: [
      { keyword: `what is ${baseKeyword}`, searchIntent: 'Informational', competition: 'Low', contentIdeas: [`${baseKeyword} definition`, `${baseKeyword} explained simply`, `Understanding ${baseKeyword}`] },
      { keyword: `how does ${baseKeyword} work`, searchIntent: 'Informational', competition: 'Low', contentIdeas: [`${baseKeyword} process explanation`, `${baseKeyword} step by step`, `${baseKeyword} mechanics`] },
      { keyword: `why is ${baseKeyword} important`, searchIntent: 'Informational', competition: 'Low', contentIdeas: [`Benefits of ${baseKeyword}`, `${baseKeyword} importance`, `Value of ${baseKeyword}`] },
      { keyword: `when to use ${baseKeyword}`, searchIntent: 'Informational', competition: 'Low', contentIdeas: [`${baseKeyword} timing`, `${baseKeyword} use cases`, `${baseKeyword} scenarios`] },
      { keyword: `where to find ${baseKeyword}`, searchIntent: 'Commercial', competition: 'Medium', contentIdeas: [`${baseKeyword} providers`, `${baseKeyword} locations`, `${baseKeyword} sources`] }
    ],
    commercial: [
      { keyword: `buy ${baseKeyword}`, searchIntent: 'Transactional', competition: 'High', contentIdeas: [`${baseKeyword} purchase guide`, `${baseKeyword} buying tips`, `${baseKeyword} shopping advice`] },
      { keyword: `${baseKeyword} price`, searchIntent: 'Commercial', competition: 'Medium', contentIdeas: [`${baseKeyword} pricing guide`, `${baseKeyword} cost analysis`, `${baseKeyword} price comparison`] },
      { keyword: `${baseKeyword} reviews`, searchIntent: 'Commercial', competition: 'Medium', contentIdeas: [`${baseKeyword} user reviews`, `${baseKeyword} testimonials`, `${baseKeyword} ratings`] },
      { keyword: `${baseKeyword} comparison`, searchIntent: 'Commercial', competition: 'Medium', contentIdeas: [`${baseKeyword} vs alternatives`, `${baseKeyword} feature comparison`, `${baseKeyword} pros and cons`] },
      { keyword: `affordable ${baseKeyword}`, searchIntent: 'Commercial', competition: 'Medium', contentIdeas: [`Budget ${baseKeyword} options`, `Cheap ${baseKeyword} solutions`, `${baseKeyword} deals`] }
    ],
    related: [
      { keyword: `${baseKeyword} software`, searchIntent: 'Commercial', comparison: 'Medium', contentIdeas: [`${baseKeyword} tools`, `${baseKeyword} platforms`, `${baseKeyword} applications`] },
      { keyword: `${baseKeyword} strategy`, searchIntent: 'Informational', competition: 'Low', contentIdeas: [`${baseKeyword} planning`, `${baseKeyword} approach`, `${baseKeyword} methodology`] },
      { keyword: `${baseKeyword} consultant`, searchIntent: 'Commercial', competition: 'Medium', contentIdeas: [`${baseKeyword} expert services`, `${baseKeyword} professional help`, `${baseKeyword} consulting`] },
      { keyword: `${baseKeyword} training`, searchIntent: 'Commercial', competition: 'Medium', contentIdeas: [`${baseKeyword} courses`, `${baseKeyword} education`, `${baseKeyword} certification`] },
      { keyword: `${baseKeyword} analytics`, searchIntent: 'Informational', competition: 'Low', contentIdeas: [`${baseKeyword} metrics`, `${baseKeyword} measurement`, `${baseKeyword} tracking`] }
    ]
  };

  const seoTips = [
    `Focus on long-tail variations of "${baseKeyword}" for easier ranking`,
    `Create comprehensive content that covers multiple aspects of ${baseKeyword}`,
    `Use semantic keywords related to ${baseKeyword} throughout your content`,
    `Target question-based keywords to capture voice search traffic`,
    `Build topic clusters around ${baseKeyword} to establish topical authority`,
    `Include local modifiers if targeting local ${baseKeyword} searches`
  ];

  if (industry) {
    seoTips.push(`Incorporate ${industry} industry terms with ${baseKeyword} for niche targeting`);
  }

  // Calculate total keywords
  let totalKeywords = 0;
  Object.values(keywords).forEach(category => {
    totalKeywords += category.length;
  });

  return {
    keywords,
    seoTips,
    totalKeywords
  };
}