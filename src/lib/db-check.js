import prisma from './prisma';

let isDbConnected = null;
let lastCheck = 0;
const CHECK_INTERVAL = 60000; // Check every minute

export async function checkDatabaseConnection() {
  const now = Date.now();
  
  // Use cached result if recent
  if (isDbConnected !== null && (now - lastCheck) < CHECK_INTERVAL) {
    return isDbConnected;
  }
  
  try {
    // Try a simple query
    await prisma.$queryRaw`SELECT 1`;
    isDbConnected = true;
    lastCheck = now;
    return true;
  } catch (error) {
    console.error('Database connection check failed:', error.message);
    isDbConnected = false;
    lastCheck = now;
    return false;
  }
}

export async function getDatabaseStatus() {
  const isConnected = await checkDatabaseConnection();
  
  if (!isConnected) {
    return {
      connected: false,
      error: 'Cannot connect to database',
      fallbackMode: true
    };
  }
  
  try {
    const userCount = await prisma.user.count();
    const clientCount = await prisma.client.count();
    
    return {
      connected: true,
      fallbackMode: false,
      stats: {
        users: userCount,
        clients: clientCount
      }
    };
  } catch (error) {
    return {
      connected: false,
      error: error.message,
      fallbackMode: true
    };
  }
}