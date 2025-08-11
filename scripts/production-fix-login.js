// Production Login Fix Script
// This script should be run on your production server or with production database access

import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

// Use production database URL
const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL
    }
  }
});

async function fixProductionLogin() {
  console.log('=================================');
  console.log('PRODUCTION LOGIN FIX');
  console.log('=================================\n');
  
  try {
    // Step 1: Clear all login attempts to reset the counter
    console.log('1. Clearing all login attempts...');
    const deletedAttempts = await prisma.loginAttempt.deleteMany({});
    console.log(`   ✓ Cleared ${deletedAttempts.count} login attempts!\n`);
    
    // Step 2: Update or create the user Niblah
    console.log('2. Updating user Niblah...');
    const passwordHash = await bcrypt.hash('Jukovic91!', 10);
    
    try {
      // Try to update existing user
      const updatedUser = await prisma.user.update({
        where: { username: 'Niblah' },
        data: { 
          passwordHash: passwordHash,
          email: 'admin@admin.nl',
          role: 'ADMIN'
        }
      });
      console.log('   ✓ User updated successfully!');
      console.log(`   Username: ${updatedUser.username}`);
      console.log(`   Email: ${updatedUser.email}`);
      console.log(`   Role: ${updatedUser.role}\n`);
    } catch (error) {
      // If user doesn't exist, create it
      if (error.code === 'P2025') {
        console.log('   User not found. Creating new user...');
        const newUser = await prisma.user.create({
          data: {
            username: 'Niblah',
            email: 'admin@admin.nl',
            passwordHash: passwordHash,
            role: 'ADMIN'
          }
        });
        console.log('   ✓ User created successfully!');
        console.log(`   Username: ${newUser.username}`);
        console.log(`   Email: ${newUser.email}`);
        console.log(`   Role: ${newUser.role}\n`);
      } else {
        throw error;
      }
    }
    
    // Step 3: Clear existing sessions for a fresh start
    console.log('3. Clearing existing sessions...');
    const deletedSessions = await prisma.session.deleteMany({});
    console.log(`   ✓ Cleared ${deletedSessions.count} sessions!\n`);
    
    console.log('=================================');
    console.log('✅ PRODUCTION FIX COMPLETED!');
    console.log('=================================');
    console.log('\nLogin credentials:');
    console.log('Username: Niblah');
    console.log('Password: Jukovic91!');
    console.log('\nThe login attempts counter has been reset.');
    
  } catch (error) {
    console.error('\n❌ ERROR:', error.message);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// Run the fix
fixProductionLogin().catch((error) => {
  console.error('Failed to fix production login:', error);
  process.exit(1);
});