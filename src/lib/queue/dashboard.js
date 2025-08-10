import { articleQueue, analyticsQueue, emailQueue, cleanupQueue } from './config';

// Get queue statistics
export async function getQueueStats() {
  const queues = {
    article: articleQueue,
    analytics: analyticsQueue,
    email: emailQueue,
    cleanup: cleanupQueue
  };
  
  const stats = {};
  
  for (const [name, queue] of Object.entries(queues)) {
    const [
      waiting,
      active,
      completed,
      failed,
      delayed,
      paused
    ] = await Promise.all([
      queue.getWaitingCount(),
      queue.getActiveCount(),
      queue.getCompletedCount(),
      queue.getFailedCount(),
      queue.getDelayedCount(),
      queue.isPaused()
    ]);
    
    stats[name] = {
      waiting,
      active,
      completed,
      failed,
      delayed,
      paused,
      total: waiting + active + completed + failed + delayed
    };
  }
  
  return stats;
}

// Get recent jobs
export async function getRecentJobs(queueName, status = 'completed', limit = 10) {
  const queues = {
    article: articleQueue,
    analytics: analyticsQueue,
    email: emailQueue,
    cleanup: cleanupQueue
  };
  
  const queue = queues[queueName];
  if (!queue) {
    throw new Error(`Queue ${queueName} not found`);
  }
  
  let jobs = [];
  
  switch (status) {
    case 'waiting':
      jobs = await queue.getWaiting(0, limit - 1);
      break;
    case 'active':
      jobs = await queue.getActive(0, limit - 1);
      break;
    case 'completed':
      jobs = await queue.getCompleted(0, limit - 1);
      break;
    case 'failed':
      jobs = await queue.getFailed(0, limit - 1);
      break;
    case 'delayed':
      jobs = await queue.getDelayed(0, limit - 1);
      break;
    default:
      jobs = await queue.getJobs(['waiting', 'active', 'completed', 'failed'], 0, limit - 1);
  }
  
  return jobs.map(job => ({
    id: job.id,
    name: job.name,
    data: job.data,
    progress: job.progress(),
    attemptsMade: job.attemptsMade,
    failedReason: job.failedReason,
    finishedOn: job.finishedOn,
    processedOn: job.processedOn,
    timestamp: job.timestamp,
    returnvalue: job.returnvalue,
    stacktrace: job.stacktrace
  }));
}

// Retry failed job
export async function retryJob(queueName, jobId) {
  const queues = {
    article: articleQueue,
    analytics: analyticsQueue,
    email: emailQueue,
    cleanup: cleanupQueue
  };
  
  const queue = queues[queueName];
  if (!queue) {
    throw new Error(`Queue ${queueName} not found`);
  }
  
  const job = await queue.getJob(jobId);
  if (!job) {
    throw new Error(`Job ${jobId} not found`);
  }
  
  await job.retry();
  return { success: true, jobId };
}

// Remove job
export async function removeJob(queueName, jobId) {
  const queues = {
    article: articleQueue,
    analytics: analyticsQueue,
    email: emailQueue,
    cleanup: cleanupQueue
  };
  
  const queue = queues[queueName];
  if (!queue) {
    throw new Error(`Queue ${queueName} not found`);
  }
  
  const job = await queue.getJob(jobId);
  if (!job) {
    throw new Error(`Job ${jobId} not found`);
  }
  
  await job.remove();
  return { success: true, jobId };
}

// Pause/resume queue
export async function pauseQueue(queueName) {
  const queues = {
    article: articleQueue,
    analytics: analyticsQueue,
    email: emailQueue,
    cleanup: cleanupQueue
  };
  
  const queue = queues[queueName];
  if (!queue) {
    throw new Error(`Queue ${queueName} not found`);
  }
  
  await queue.pause();
  return { success: true, paused: true };
}

export async function resumeQueue(queueName) {
  const queues = {
    article: articleQueue,
    analytics: analyticsQueue,
    email: emailQueue,
    cleanup: cleanupQueue
  };
  
  const queue = queues[queueName];
  if (!queue) {
    throw new Error(`Queue ${queueName} not found`);
  }
  
  await queue.resume();
  return { success: true, paused: false };
}

// Clean queue
export async function cleanQueue(queueName, grace = 0, limit = 0, status = 'completed') {
  const queues = {
    article: articleQueue,
    analytics: analyticsQueue,
    email: emailQueue,
    cleanup: cleanupQueue
  };
  
  const queue = queues[queueName];
  if (!queue) {
    throw new Error(`Queue ${queueName} not found`);
  }
  
  const removed = await queue.clean(grace, status, limit);
  return { success: true, removed };
}

// Get queue health
export async function getQueueHealth() {
  const stats = await getQueueStats();
  const health = {};
  
  for (const [name, stat] of Object.entries(stats)) {
    let status = 'healthy';
    let issues = [];
    
    // Check for issues
    if (stat.failed > 10) {
      status = 'warning';
      issues.push(`${stat.failed} failed jobs`);
    }
    
    if (stat.waiting > 100) {
      status = 'warning';
      issues.push(`${stat.waiting} jobs waiting`);
    }
    
    if (stat.paused) {
      status = 'paused';
      issues.push('Queue is paused');
    }
    
    if (stat.failed > 50 || stat.waiting > 500) {
      status = 'critical';
    }
    
    health[name] = {
      status,
      issues,
      stats: stat
    };
  }
  
  return health;
}