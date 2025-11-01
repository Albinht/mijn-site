import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY);

export async function POST(request) {
  try {
    const { mainTopic, industry } = await request.json();

    if (!mainTopic?.trim()) {
      return NextResponse.json({ 
        success: false,
        error: 'Hoofd topic is verplicht' 
      }, { status: 400 });
    }

    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

    const industryContext = industry ? `in de ${industry} industry` : '';

    const prompt = `Genereer een complete topic cluster structuur voor SEO content strategie.

Main Topic: ${mainTopic} ${industryContext}

Creëer:
1. Een pillar page titel en description (broad, comprehensive overview van het topic)
2. 10-12 cluster topics die elk een specifiek aspect van het main topic diep behandelen
3. Voor elk topic: suggested target keywords (3-5 keywords)

Format je antwoord als JSON:
{
  "pillarPage": {
    "title": "...",
    "description": "...",
    "keywords": ["keyword1", "keyword2", ...]
  },
  "clusterTopics": [
    {
      "title": "...",
      "description": "...",
      "keywords": ["keyword1", "keyword2", ...]
    }
  ]
}

Regels:
- Pillar moet comprehensive zijn maar niet te breed
- Elk cluster topic moet distinct zijn (geen overlap)
- Keywords moeten realistic search terms zijn
- Nederlandse keywords als main topic Nederlands is
- Focus op actionable, valuable subtopics
- Denk aan search intent per cluster (informational, transactional, etc.)

Geef ALLEEN de JSON terug, geen extra tekst.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    let text = response.text().trim();

    // Extract JSON from response (sometimes AI adds markdown)
    if (text.includes('```json')) {
      text = text.split('```json')[1].split('```')[0].trim();
    } else if (text.includes('```')) {
      text = text.split('```')[1].split('```')[0].trim();
    }

    const cluster = JSON.parse(text);

    // Validate structure
    if (!cluster.pillarPage || !cluster.clusterTopics || cluster.clusterTopics.length < 6) {
      return NextResponse.json({ 
        success: false,
        error: 'Kon geen valide cluster structuur genereren' 
      }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      cluster
    });

  } catch (error) {
    console.error('Topic cluster generation error:', error);
    return NextResponse.json({ 
      success: false,
      error: 'Er ging iets fout bij het genereren. Probeer het later opnieuw.' 
    }, { status: 500 });
  }
}
