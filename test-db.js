import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function testAuth() {
  console.log('Testing database connection...\n');
  
  // Check if user exists
  const users = await prisma.user.findMany();
  console.log('Users in database:', users.length);
  
  if (users.length > 0) {
    console.log('\nExisting users:');
    users.forEach(user => {
      console.log(`- Username: ${user.username}, Email: ${user.email}`);
    });
  }
  
  // Test password for Niblah
  const niblah = await prisma.user.findUnique({
    where: { username: 'Niblah' }
  });
  
  if (niblah) {
    console.log('\nTesting password for Niblah:');
    const passwordMatch = await bcrypt.compare('Jukovic91!', niblah.passwordHash);
    console.log('Password "Jukovic91!" matches:', passwordMatch);
  } else {
    console.log('\nUser "Niblah" not found. Creating...');
    const passwordHash = await bcrypt.hash('Jukovic91!', 10);
    const newUser = await prisma.user.create({
      data: {
        username: 'Niblah',
        email: 'admin@admin.nl',
        passwordHash,
        role: 'ADMIN'
      }
    });
    console.log('Created user:', newUser.username);
  }
  
  // Check login attempts
  const attempts = await prisma.loginAttempt.findMany({
    orderBy: { attemptedAt: 'desc' },
    take: 10
  });
  
  console.log('\nRecent login attempts:', attempts.length);
  if (attempts.length > 0) {
    console.log('Latest attempts:');
    attempts.forEach(attempt => {
      console.log(`- IP: ${attempt.ipAddress}, Success: ${attempt.success}, Time: ${attempt.attemptedAt}`);
    });
  }
  
  await prisma.$disconnect();
}

testAuth().catch(console.error);