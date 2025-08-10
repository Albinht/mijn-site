import prisma from '@/lib/prisma';
import { articleQueue } from '../config';

// Process article generation jobs
articleQueue.process('generate', async (job) => {
  const { articleId, topic, userId } = job.data;
  
  try {
    // Update article status to processing
    await prisma.article.update({
      where: { id: articleId },
      data: { status: 'PROCESSING' }
    });
    
    // Call webhook for article generation
    const webhookUrl = process.env.WEBHOOK_URL || 'https://n8n-n8n.42giwj.easypanel.host/webhook-test/2f67b999-ee19-471a-9911-054d76177650';
    
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        articleId,
        topic,
        userId,
        timestamp: new Date().toISOString()
      })
    });
    
    if (response.ok) {
      // Simulate article content generation (in real app, this would come from webhook response)
      const generatedContent = `
# ${topic}

This is an automatically generated article about ${topic}.

## Introduction
Lorem ipsum dolor sit amet, consectetur adipiscing elit.

## Main Content
Detailed content about ${topic} would go here.

## Conclusion
Summary and final thoughts about ${topic}.
      `;
      
      // Update article with generated content
      await prisma.article.update({
        where: { id: articleId },
        data: {
          content: generatedContent,
          status: 'PUBLISHED',
          publishedAt: new Date()
        }
      });
      
      // Log success
      await prisma.activityLog.create({
        data: {
          action: 'ARTICLE_GENERATED',
          entity: 'article',
          entityId: articleId,
          userId,
          metadata: { topic },
          createdAt: new Date()
        }
      });
      
      return { success: true, articleId };
    } else {
      throw new Error('Webhook failed');
    }
  } catch (error) {
    // Update article status to failed
    await prisma.article.update({
      where: { id: articleId },
      data: { status: 'DRAFT' }
    });
    
    // Log error
    await prisma.activityLog.create({
      data: {
        action: 'ARTICLE_GENERATION_FAILED',
        entity: 'article',
        entityId: articleId,
        userId,
        metadata: { error: error.message },
        createdAt: new Date()
      }
    });
    
    throw error;
  }
});

// Process article publishing
articleQueue.process('publish', async (job) => {
  const { articleId } = job.data;
  
  const article = await prisma.article.update({
    where: { id: articleId },
    data: {
      status: 'PUBLISHED',
      publishedAt: new Date()
    }
  });
  
  return { success: true, article };
});

// Process article archiving
articleQueue.process('archive', async (job) => {
  const { articleId } = job.data;
  
  const article = await prisma.article.update({
    where: { id: articleId },
    data: {
      status: 'ARCHIVED'
    }
  });
  
  return { success: true, article };
});

export default articleQueue;