import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY);

const MODE_PROMPTS = {
  detailed: 'Breid de tekst uit met veel meer specifieke details, cijfers, specificaties en granulaire informatie. Maak het zeer gedetailleerd.',
  contextual: 'Breid de tekst uit met relevante achtergrond, context, en uitleg over waarom dit belangrijk is. Geef het grotere plaatje.',
  examples: 'Breid de tekst uit met praktische voorbeelden, use cases, scenario\'s en concrete situaties die het concept illustreren.',
  technical: 'Breid de tekst uit met technische diepgang, vakjargon waar gepast, en geavanceerde concepten voor een expert audience.',
};

export async function POST(request) {
  try {
    const { text, mode = 'detailed' } = await request.json();

    if (!text?.trim()) {
      return NextResponse.json({ 
        success: false,
        error: 'Tekst is verplicht' 
      }, { status: 400 });
    }

    const wordCount = text.trim().split(/\s+/).length;
    if (wordCount < 20) {
      return NextResponse.json({ 
        success: false,
        error: 'Voer minimaal 20 woorden in voor betere resultaten' 
      }, { status: 400 });
    }

    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

    const modeInstruction = MODE_PROMPTS[mode] || MODE_PROMPTS.detailed;

    const prompt = `${modeInstruction}

Originele tekst:
${text}

Belangrijke regels:
- Behoud de kernboodschap en betekenis van de originele tekst
- Voeg substantiële nieuwe informatie toe (minimaal 3-5x zo lang)
- Schrijf in natuurlijk, vloeiend Nederlands
- Behoud dezelfde tone en stijl als het origineel
- Voeg geen marketing fluff of clichés toe
- Maak het informatief en waardevol
- Structureer met duidelijke paragrafen waar nodig
- Geef ALLEEN de uitgebreide tekst terug, geen uitleg of commentaar

Uitgebreide tekst:`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const expandedText = response.text().trim();

    if (!expandedText || expandedText.length < 100) {
      return NextResponse.json({ 
        success: false,
        error: 'Kon geen geldige uitbreiding genereren' 
      }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      expandedText,
      originalWordCount: wordCount,
      expandedWordCount: expandedText.split(/\s+/).length,
      mode
    });

  } catch (error) {
    console.error('Content expansion error:', error);
    return NextResponse.json({ 
      success: false,
      error: 'Er ging iets fout bij het uitbreiden. Probeer het later opnieuw.' 
    }, { status: 500 });
  }
}
