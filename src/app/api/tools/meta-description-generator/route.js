import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY);

export async function POST(request) {
  try {
    const { pageTitle, pageContent, targetKeywords, tone, callToAction } = await request.json();

    if (!pageTitle?.trim()) {
      return NextResponse.json({ error: 'Page title is required' }, { status: 400 });
    }

    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

    const prompt = `Create 5 different meta descriptions for a webpage with the following information:

Page Title: ${pageTitle}
${pageContent ? `Page Content: ${pageContent}` : ''}
${targetKeywords ? `Target Keywords: ${targetKeywords}` : ''}
Tone: ${tone}
${callToAction ? `Call to Action: ${callToAction}` : ''}

Requirements:
- Each meta description should be 150-160 characters long (optimal for SEO)
- Include the target keywords naturally if provided
- Match the specified tone of voice
- Be compelling and encourage clicks
- Include the call to action if provided
- Each should be unique and offer different approaches
- Focus on benefits and value proposition
- Be accurate to what the page likely contains

Return exactly 5 meta descriptions, one per line, without numbering or bullet points.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    // Split the response into individual descriptions
    const descriptions = text
      .split('\n')
      .filter(line => line.trim())
      .map(line => line.trim())
      .filter(line => line.length > 50) // Filter out very short lines
      .slice(0, 5); // Take only first 5

    if (descriptions.length === 0) {
      return NextResponse.json({ error: 'Failed to generate meta descriptions' }, { status: 500 });
    }

    return NextResponse.json({ descriptions });

  } catch (error) {
    console.error('Meta description generation error:', error);
    
    // Fallback descriptions if API fails
    const fallbackDescriptions = [
      `Discover ${pageTitle.toLowerCase()} with expert solutions. ${targetKeywords ? `Professional ${targetKeywords.split(',')[0]} services` : 'Premium services'} designed for your success. ${callToAction || 'Get started today'}.`,
      `${pageTitle} - your trusted partner for ${targetKeywords ? targetKeywords.split(',')[0] : 'professional services'}. Quality results, competitive pricing. ${callToAction || 'Learn more'}.`,
      `Expert ${pageTitle.toLowerCase()} solutions tailored to your needs. ${targetKeywords ? `Specializing in ${targetKeywords.split(',')[0]}` : 'Professional expertise'} with proven results. ${callToAction || 'Contact us'}.`,
      `Get ${pageTitle.toLowerCase()} from industry leaders. ${targetKeywords ? `${targetKeywords.split(',')[0]} expertise` : 'Professional services'} you can trust. ${callToAction || 'Start now'}.`,
      `${pageTitle} services that deliver results. ${targetKeywords ? `Professional ${targetKeywords.split(',')[0]}` : 'Expert solutions'} for your business growth. ${callToAction || 'Discover more'}.`
    ];

    return NextResponse.json({ descriptions: fallbackDescriptions });
  }
}