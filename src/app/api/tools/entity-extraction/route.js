import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY);

export async function POST(request) {
  try {
    const { text } = await request.json();

    if (!text?.trim()) {
      return NextResponse.json({ 
        success: false,
        error: 'Tekst is verplicht' 
      }, { status: 400 });
    }

    const wordCount = text.trim().split(/\s+/).length;
    if (wordCount < 50) {
      return NextResponse.json({ 
        success: false,
        error: 'Voer minimaal 50 woorden in voor betere resultaten' 
      }, { status: 400 });
    }

    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

    const prompt = `Extract all named entities from the following text and categorize them.

Text:
${text}

Identify and categorize entities into these types:
- PERSON: Names of people
- ORGANIZATION: Companies, institutions, brands, teams
- LOCATION: Cities, countries, places, addresses
- DATE: Dates, times, time periods, events with dates
- OTHER: Products, technologies, events, concepts

Format your response as JSON:
{
  "PERSON": ["name1", "name2", ...],
  "ORGANIZATION": ["org1", "org2", ...],
  "LOCATION": ["loc1", "loc2", ...],
  "DATE": ["date1", "date2", ...],
  "OTHER": ["other1", "other2", ...]
}

Rules:
- Only include unique entities (no duplicates)
- Use the most complete form of names (e.g., "Elon Musk" not just "Musk")
- Be accurate with categorization
- Return empty arrays for categories with no entities
- Return ONLY the JSON, no explanation

JSON:`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    let entityText = response.text().trim();

    // Extract JSON from response
    if (entityText.includes('```json')) {
      entityText = entityText.split('```json')[1].split('```')[0].trim();
    } else if (entityText.includes('```')) {
      entityText = entityText.split('```')[1].split('```')[0].trim();
    }

    const entities = JSON.parse(entityText);

    // Ensure all categories exist
    const fullEntities = {
      PERSON: entities.PERSON || [],
      ORGANIZATION: entities.ORGANIZATION || [],
      LOCATION: entities.LOCATION || [],
      DATE: entities.DATE || [],
      OTHER: entities.OTHER || []
    };

    const totalEntities = Object.values(fullEntities).reduce((sum, arr) => sum + arr.length, 0);

    return NextResponse.json({
      success: true,
      entities: fullEntities,
      totalEntities
    });

  } catch (error) {
    console.error('Entity extraction error:', error);
    return NextResponse.json({ 
      success: false,
      error: 'Er ging iets fout bij het extracten. Probeer het later opnieuw.' 
    }, { status: 500 });
  }
}
