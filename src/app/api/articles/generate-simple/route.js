import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { generateSlug, formatResponse, formatError } from '@/lib/utils';
import { verifyAuth } from '@/lib/auth-utils';

// POST /api/articles/generate-simple - Generate article without webhook
export async function POST(request) {
  try {
    // Verify authentication
    const user = await verifyAuth(request);
    if (!user) {
      return NextResponse.json(
        formatError('Unauthorized', 401),
        { status: 401 }
      );
    }
    
    const body = await request.json();
    
    // Validate input
    if (!body.topic) {
      return NextResponse.json(
        formatError('Topic is required', 400),
        { status: 400 }
      );
    }
    
    // Generate simple placeholder content
    const generatedContent = `
# ${body.topic}

## Introduction
This article explores the topic of ${body.topic}. In today's digital landscape, understanding ${body.topic} is crucial for business success.

## Key Points

### Understanding ${body.topic}
${body.topic} plays a vital role in modern business strategies. Companies that master ${body.topic} often see significant improvements in their performance metrics.

### Benefits
- Improved efficiency and productivity
- Better customer engagement
- Enhanced competitive advantage
- Increased ROI and revenue growth

### Implementation Strategy
To successfully implement ${body.topic}, consider these steps:

1. **Assessment**: Evaluate your current situation
2. **Planning**: Develop a comprehensive strategy
3. **Execution**: Implement with clear milestones
4. **Monitoring**: Track progress and adjust
5. **Optimization**: Continuously improve

## Best Practices

When working with ${body.topic}, keep these best practices in mind:

- Start with clear objectives
- Focus on measurable outcomes
- Iterate based on feedback
- Stay updated with industry trends
- Invest in the right tools and training

## Common Challenges

Organizations often face these challenges:
- Resource constraints
- Technical complexity
- Change management
- Measuring success
- Scaling effectively

## Conclusion

${body.topic} represents a significant opportunity for growth and innovation. By following the strategies outlined in this article, you can position your organization for success.

Remember: Success with ${body.topic} requires commitment, the right approach, and continuous learning.

---

*This article was generated to provide initial content. Consider expanding with specific examples, case studies, and data relevant to your industry.*
    `.trim();
    
    // Create article in database
    const articleData = {
      topic: body.topic,
      title: body.title || `Complete Guide to ${body.topic}`,
      content: generatedContent,
      status: 'DRAFT', // Set as DRAFT so user can review/edit
      slug: generateSlug(body.title || body.topic),
      views: 0,
      source: body.source || 'simple'
    };
    
    // Only add authorId if we have a valid session with userId
    if (user.userId && user.userId !== 'hardcoded-user-id') {
      const userExists = await prisma.user.findUnique({
        where: { id: user.userId }
      });
      if (userExists) {
        articleData.authorId = user.userId;
      }
    }
    
    const article = await prisma.article.create({
      data: articleData
    });
    
    // Log activity
    if (user.userId && user.userId !== 'hardcoded-user-id') {
      await prisma.activityLog.create({
        data: {
          userId: user.userId,
          action: 'GENERATE_ARTICLE_SIMPLE',
          entity: 'article',
          entityId: article.id,
          metadata: { topic: article.topic, source: 'simple' },
          ipAddress: request.headers.get('x-forwarded-for') || 'unknown'
        }
      }).catch(console.error);
    }
    
    return NextResponse.json(formatResponse({
      article,
      message: 'Article template created successfully. You can now edit it to add specific content.'
    }), { status: 201 });
    
  } catch (error) {
    console.error('Error generating simple article:', error);
    return NextResponse.json(
      formatError('Failed to generate article'),
      { status: 500 }
    );
  }
}