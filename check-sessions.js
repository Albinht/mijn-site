import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function checkSessions() {
  console.log('Checking sessions in database...\n');
  
  const sessions = await prisma.session.findMany({
    include: {
      user: {
        select: {
          username: true,
          email: true
        }
      }
    }
  });
  
  console.log(`Found ${sessions.length} sessions:\n`);
  
  sessions.forEach(session => {
    console.log(`Session: ${session.id}`);
    console.log(`  User: ${session.user.username}`);
    console.log(`  Token: ${session.token.substring(0, 20)}...`);
    console.log(`  Created: ${session.createdAt}`);
    console.log(`  Expires: ${session.expiresAt}`);
    console.log(`  Expired: ${new Date() > session.expiresAt ? 'Yes ❌' : 'No ✅'}`);
    console.log('');
  });
  
  await prisma.$disconnect();
}

checkSessions().catch(console.error);