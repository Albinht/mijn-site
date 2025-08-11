import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

// Use production database URL
const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL || "postgres://postgres.nldfmlhrxzijgpuuaffq:9M6rTs8BMECX1zyj@aws-0-us-east-1.pooler.supabase.com:5432/postgres?sslmode=require"
    }
  }
});

async function setupProductionUser() {
  console.log('=================================');
  console.log('PRODUCTION USER SETUP');
  console.log('=================================\n');
  
  try {
    // Step 1: Clear all login attempts
    console.log('1. Clearing any existing login attempts...');
    const deletedAttempts = await prisma.loginAttempt.deleteMany({});
    console.log(`   ✓ Cleared ${deletedAttempts.count} login attempts\n`);
    
    // Step 2: Clear existing sessions
    console.log('2. Clearing any existing sessions...');
    const deletedSessions = await prisma.session.deleteMany({});
    console.log(`   ✓ Cleared ${deletedSessions.count} sessions\n`);
    
    // Step 3: Create or update the Niblah user
    console.log('3. Setting up user Niblah...');
    const passwordHash = await bcrypt.hash('Jukovic91!', 10);
    
    // Check if user exists
    const existingUser = await prisma.user.findUnique({
      where: { username: 'Niblah' }
    });
    
    let user;
    if (existingUser) {
      // Update existing user
      console.log('   Found existing user, updating...');
      user = await prisma.user.update({
        where: { username: 'Niblah' },
        data: { 
          passwordHash: passwordHash,
          email: 'admin@admin.nl',
          role: 'ADMIN'
        }
      });
      console.log('   ✓ User updated successfully!');
    } else {
      // Create new user
      console.log('   Creating new user...');
      user = await prisma.user.create({
        data: {
          username: 'Niblah',
          email: 'admin@admin.nl',
          passwordHash: passwordHash,
          role: 'ADMIN'
        }
      });
      console.log('   ✓ User created successfully!');
    }
    
    console.log(`   Username: ${user.username}`);
    console.log(`   Email: ${user.email}`);
    console.log(`   Role: ${user.role}`);
    console.log(`   ID: ${user.id}\n`);
    
    // Step 4: Verify user can be found
    console.log('4. Verifying user setup...');
    const verifyUser = await prisma.user.findUnique({
      where: { username: 'Niblah' }
    });
    
    if (verifyUser) {
      console.log('   ✓ User verified in database\n');
    } else {
      throw new Error('User verification failed');
    }
    
    console.log('=================================');
    console.log('✅ PRODUCTION SETUP COMPLETED!');
    console.log('=================================');
    console.log('\nLogin credentials:');
    console.log('Username: Niblah');
    console.log('Password: Jukovic91!');
    console.log('\nDatabase: Supabase PostgreSQL');
    console.log('Ready for production deployment!');
    
  } catch (error) {
    console.error('\n❌ ERROR:', error.message);
    console.error(error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// Run the setup
setupProductionUser().catch((error) => {
  console.error('Failed to setup production user:', error);
  process.exit(1);
});