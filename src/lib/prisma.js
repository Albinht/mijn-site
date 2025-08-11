import { PrismaClient } from '@prisma/client';

let prisma;

const prismaOptions = {
  log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  errorFormat: 'pretty',
};

// Add connection pool settings for production
if (process.env.NODE_ENV === 'production') {
  prismaOptions.datasources = {
    db: {
      url: process.env.DATABASE_URL || process.env.POSTGRES_PRISMA_URL
    }
  };
}

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient(prismaOptions);
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient(prismaOptions);
  }
  prisma = global.prisma;
}

// Ensure connection on module load in production
if (process.env.NODE_ENV === 'production') {
  prisma.$connect()
    .then(() => console.log('Prisma connected to database'))
    .catch((e) => console.error('Failed to connect to database:', e));
}

export default prisma;