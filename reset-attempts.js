import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function resetAttempts() {
  console.log('Clearing all login attempts...');
  
  await prisma.loginAttempt.deleteMany({});
  
  console.log('All login attempts cleared!');
  
  await prisma.$disconnect();
}

resetAttempts().catch(console.error);