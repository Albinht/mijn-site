import Queue from 'bull';

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

const redisUrl = process.env.REDIS_URL;
const redisHost = process.env.REDIS_HOST;
const redisPort = process.env.REDIS_PORT ? Number(process.env.REDIS_PORT) : undefined;
const redisPassword = process.env.REDIS_PASSWORD;
const hasRedisConfig = Boolean(redisUrl || redisHost || redisPort);

function createNoopQueue(queueName) {
  const resolvedCounts = () => Promise.resolve(0);
  const resolvedFalse = () => Promise.resolve(false);
  const resolvedEmptyArray = () => Promise.resolve([]);
  const resolvedNull = () => Promise.resolve(null);
  const resolvedVoid = () => Promise.resolve();

  return {
    name: queueName,
    on: () => undefined,
    process: () => undefined,
    add: async () => ({ id: `noop-${queueName}-${Date.now()}` }),
    getWaitingCount: resolvedCounts,
    getActiveCount: resolvedCounts,
    getCompletedCount: resolvedCounts,
    getFailedCount: resolvedCounts,
    getDelayedCount: resolvedCounts,
    isPaused: resolvedFalse,
    getWaiting: resolvedEmptyArray,
    getActive: resolvedEmptyArray,
    getCompleted: resolvedEmptyArray,
    getFailed: resolvedEmptyArray,
    getDelayed: resolvedEmptyArray,
    getJobs: resolvedEmptyArray,
    getJob: resolvedNull,
    pause: resolvedVoid,
    resume: resolvedVoid,
    clean: resolvedEmptyArray,
  };
}

function createQueue(queueName) {
  if (!hasRedisConfig) return createNoopQueue(queueName);

  if (redisUrl) {
    return new Queue(queueName, redisUrl, defaultQueueOptions);
  }

  return new Queue(queueName, {
    redis: {
      host: redisHost || 'localhost',
      port: redisPort || 6379,
      password: redisPassword || undefined,
      maxRetriesPerRequest: null,
      enableReadyCheck: false,
    },
    ...defaultQueueOptions,
  });
}

// Create queues (falls back to no-op queues when Redis is not configured)
export const articleQueue = createQueue('article-generation');
export const analyticsQueue = createQueue('analytics-processing');
export const emailQueue = createQueue('email-notifications');
export const cleanupQueue = createQueue('cleanup-tasks');

if (hasRedisConfig) {
  articleQueue.on('completed', (job) => {
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
}

// Export all queues
export const queues = {
  articleQueue,
  analyticsQueue,
  emailQueue,
  cleanupQueue
};
