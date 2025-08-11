import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function fixLogin() {
  console.log('Fixing login for user Niblah...\n');
  
  // Step 1: Clear all login attempts to reset the counter
  console.log('1. Clearing all login attempts...');
  await prisma.loginAttempt.deleteMany({});
  console.log('   ✓ All login attempts cleared!\n');
  
  // Step 2: Update the password for user Niblah
  console.log('2. Updating password for user Niblah...');
  const passwordHash = await bcrypt.hash('Jukovic91!', 10);
  
  try {
    const updatedUser = await prisma.user.update({
      where: { username: 'Niblah' },
      data: { 
        passwordHash: passwordHash,
        email: 'admin@admin.nl'
      }
    });
    console.log('   ✓ Password updated successfully!');
    console.log(`   User: ${updatedUser.username}`);
    console.log(`   Email: ${updatedUser.email}\n`);
  } catch (error) {
    // If user doesn't exist, create it
    if (error.code === 'P2025') {
      console.log('   User Niblah not found. Creating new user...');
      const newUser = await prisma.user.create({
        data: {
          username: 'Niblah',
          email: 'admin@admin.nl',
          passwordHash: passwordHash,
          role: 'ADMIN'
        }
      });
      console.log('   ✓ User created successfully!');
      console.log(`   User: ${newUser.username}`);
      console.log(`   Email: ${newUser.email}\n`);
    } else {
      throw error;
    }
  }
  
  // Step 3: Clear any existing sessions
  console.log('3. Clearing existing sessions...');
  await prisma.session.deleteMany({});
  console.log('   ✓ All sessions cleared!\n');
  
  console.log('=================================');
  console.log('✅ Login fix completed!');
  console.log('=================================');
  console.log('\nYou can now login with:');
  console.log('Username: Niblah');
  console.log('Password: Jukovic91!');
  console.log('\nThe attempts counter has been reset.');
  
  await prisma.$disconnect();
}

fixLogin().catch((error) => {
  console.error('Error:', error);
  prisma.$disconnect();
  process.exit(1);
});