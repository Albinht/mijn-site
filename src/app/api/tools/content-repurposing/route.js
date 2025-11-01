import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY);

const FORMAT_PROMPTS = {
  'social-post': 'Maak een engaging social media post (150-250 woorden) geschikt voor LinkedIn, Twitter of Facebook. Gebruik een hook, key takeaways en een CTA.',
  'email': 'Maak een email newsletter versie met pakkende subject line suggestie, korte intro met urgentie, highlights van de content en een duidelijke CTA.',
  'video-script': 'Schrijf een conversational video script voor YouTube of TikTok met opening hook, main content in scenes, en outro met CTA. Voeg [SCENE] markers toe.',
  'infographic': 'Extract de key data points, statistieken en listicle items als gestructureerde text perfect voor een infographic design (bullet points, short descriptions).',
  'tweet-thread': 'Maak een Twitter thread van 8-12 tweets. Tweet 1 is de hook, middle tweets zijn insights (elk standalone), laatste tweet is conclusie + CTA.',
  'linkedin-article': 'Schrijf een long-form LinkedIn artikel (800-1200 woorden) met personal tone, storytelling, en thought leadership. Include paragr breaks.',
};

export async function POST(request) {
  try {
    const { content, formats } = await request.json();

    if (!content?.trim()) {
      return NextResponse.json({ 
        success: false,
        error: 'Content is verplicht' 
      }, { status: 400 });
    }

    const wordCount = content.trim().split(/\s+/).length;
    if (wordCount < 100) {
      return NextResponse.json({ 
        success: false,
        error: 'Voer minimaal 100 woorden in voor betere resultaten' 
      }, { status: 400 });
    }

    if (!formats || formats.length === 0) {
      return NextResponse.json({ 
        success: false,
        error: 'Selecteer minimaal één formaat' 
      }, { status: 400 });
    }

    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    const repurposedContent = {};

    // Process each format
    for (const format of formats) {
      const formatInstruction = FORMAT_PROMPTS[format];
      if (!formatInstruction) continue;

      const prompt = `${formatInstruction}

Originele content:
${content}

Belangrijke regels:
- Behoud de kernboodschap van het origineel
- Pas de tone en style aan voor het specifieke platform
- Maak het engaging en actionable
- Gebruik natuurlijk Nederlands
- Optimaliseer voor het platform (hashtags voor Twitter, professional tone voor LinkedIn, etc.)
- Geef ALLEEN de gerepurposede versie terug, geen uitleg

Gerepurposede content:`;

      try {
        const result = await model.generateContent(prompt);
        const response = await result.response;
        repurposedContent[format] = response.text().trim();
      } catch (error) {
        console.error(`Error repurposing format ${format}:`, error);
        repurposedContent[format] = `Kon ${format} niet genereren. Probeer het opnieuw.`;
      }
    }

    return NextResponse.json({
      success: true,
      repurposedContent,
      formatsGenerated: Object.keys(repurposedContent).length
    });

  } catch (error) {
    console.error('Content repurposing error:', error);
    return NextResponse.json({ 
      success: false,
      error: 'Er ging iets fout bij het hergebruiken. Probeer het later opnieuw.' 
    }, { status: 500 });
  }
}
