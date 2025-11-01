import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY);

const LENGTH_SPECS = {
  short: 'Vat de tekst samen in 50-80 woorden. Zeer beknopt, focus op absolute kernpunten.',
  medium: 'Vat de tekst samen in 100-150 woorden. Balans tussen detail en beknoptheid.',
  long: 'Vat de tekst samen in 200-300 woorden. Comprehensive overview met belangrijkste details.',
};

export async function POST(request) {
  try {
    const { text, length = 'medium' } = await request.json();

    if (!text?.trim()) {
      return NextResponse.json({ 
        success: false,
        error: 'Tekst is verplicht' 
      }, { status: 400 });
    }

    const wordCount = text.trim().split(/\s+/).length;
    if (wordCount < 200) {
      return NextResponse.json({ 
        success: false,
        error: 'Voer minimaal 200 woorden in voor een goede samenvatting' 
      }, { status: 400 });
    }

    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    const lengthSpec = LENGTH_SPECS[length] || LENGTH_SPECS.medium;

    const prompt = `${lengthSpec}

Originele tekst:
${text}

Belangrijke regels:
- Behoud alle essentiële informatie en key points
- Schrijf in natuurlijk, vloeiend Nederlands
- Gebruik duidelijke, directe taal
- Geen "dit artikel behandelt" of meta-commentary
- Focus op de feitelijke content
- Maak het leesbaar en engaging
- Geef ALLEEN de samenvatting terug, geen uitleg

Samenvatting:`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const summary = response.text().trim();

    if (!summary || summary.length < 50) {
      return NextResponse.json({ 
        success: false,
        error: 'Kon geen geldige samenvatting genereren' 
      }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      summary,
      originalWordCount: wordCount,
      summaryWordCount: summary.split(/\s+/).length,
      length
    });

  } catch (error) {
    console.error('Content summarization error:', error);
    return NextResponse.json({ 
      success: false,
      error: 'Er ging iets fout bij het samenvatten. Probeer het later opnieuw.' 
    }, { status: 500 });
  }
}
