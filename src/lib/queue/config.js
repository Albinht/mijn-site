import Queue from 'bull';
import Redis from 'ioredis';

// Redis configuration
const redisConfig = {
  host: process.env.REDIS_HOST || 'localhost',
  port: process.env.REDIS_PORT || 6379,
  maxRetriesPerRequest: null,
  enableReadyCheck: false
};

// Create Redis clients for Bull
const createRedisClient = () => {
  return new Redis(redisConfig);
};

// Queue options
const defaultQueueOptions = {
  defaultJobOptions: {
    removeOnComplete: 100, // Keep last 100 completed jobs
    removeOnFail: 50, // Keep last 50 failed jobs
    attempts: 3,
    backoff: {
      type: 'exponential',
      delay: 2000
    }
  }
};

// Create queues
export const articleQueue = new Queue('article-generation', {
  redis: redisConfig,
  ...defaultQueueOptions
});

export const analyticsQueue = new Queue('analytics-processing', {
  redis: redisConfig,
  ...defaultQueueOptions
});

export const emailQueue = new Queue('email-notifications', {
  redis: redisConfig,
  ...defaultQueueOptions
});

export const cleanupQueue = new Queue('cleanup-tasks', {
  redis: redisConfig,
  ...defaultQueueOptions
});

// Queue event handlers
articleQueue.on('completed', (job, result) => {
  console.log(`Article generation job ${job.id} completed`);
});

articleQueue.on('failed', (job, err) => {
  console.error(`Article generation job ${job.id} failed:`, err);
});

analyticsQueue.on('completed', (job) => {
  console.log(`Analytics job ${job.id} completed`);
});

cleanupQueue.on('completed', (job) => {
  console.log(`Cleanup job ${job.id} completed`);
});

// Export all queues
export const queues = {
  articleQueue,
  analyticsQueue,
  emailQueue,
  cleanupQueue
};