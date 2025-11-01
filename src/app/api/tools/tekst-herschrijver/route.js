import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY);

const STYLE_PROMPTS = {
  standard: 'Herschrijf de tekst met andere woorden maar behoud de betekenis en toon. Zorg dat het natuurlijk Nederlands blijft.',
  formal: 'Herschrijf de tekst in formele, professionele taal geschikt voor zakelijke communicatie. Gebruik beleefde formuleringen.',
  casual: 'Herschrijf de tekst in casual, vriendelijke taal. Maak het toegankelijk en conversationeel alsof je met een vriend praat.',
  creative: 'Herschrijf de tekst op een creatieve, originele manier. Gebruik interessante formuleringen en metaforen waar passend.',
  shorter: 'Herschrijf de tekst korter en beknopter. Verwijder overbodige woorden maar behoud de kernboodschap.',
  longer: 'Herschrijf de tekst uitgebreider met meer details, voorbeelden en context. Maak het informatief en compleet.',
};

export async function POST(request) {
  try {
    const { text, style = 'standard' } = await request.json();

    if (!text?.trim()) {
      return NextResponse.json({ 
        success: false,
        error: 'Tekst is verplicht' 
      }, { status: 400 });
    }

    const wordCount = text.trim().split(/\s+/).length;
    if (wordCount < 10) {
      return NextResponse.json({ 
        success: false,
        error: 'Voer minimaal 10 woorden in' 
      }, { status: 400 });
    }

    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

    const styleInstruction = STYLE_PROMPTS[style] || STYLE_PROMPTS.standard;

    const prompt = `${styleInstruction}

Originele tekst:
${text}

Belangrijk:
- Behoud alle feiten, cijfers en belangrijke informatie
- Zorg dat de herschreven versie natuurlijk Nederlands is
- Vermijd plagiaat door significante herschrijving
- Behoud de structuur (paragrafen) van de originele tekst
- Geef ALLEEN de herschreven tekst terug, geen uitleg of commentaar

Herschreven tekst:`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const rewrittenText = response.text().trim();

    if (!rewrittenText || rewrittenText.length < 50) {
      return NextResponse.json({ 
        success: false,
        error: 'Kon geen geldige herschreven tekst genereren' 
      }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      rewrittenText,
      originalWordCount: wordCount,
      rewrittenWordCount: rewrittenText.split(/\s+/).length,
      style
    });

  } catch (error) {
    console.error('Text rewrite error:', error);
    return NextResponse.json({ 
      success: false,
      error: 'Er ging iets fout bij het herschrijven. Probeer het later opnieuw.' 
    }, { status: 500 });
  }
}
