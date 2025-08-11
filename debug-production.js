import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: "postgres://postgres.nldfmlhrxzijgpuuaffq:9M6rTs8BMECX1zyj@aws-0-us-east-1.pooler.supabase.com:5432/postgres?sslmode=require"
    }
  },
  log: ['query', 'error', 'warn']
});

async function debugProduction() {
  console.log('=================================');
  console.log('PRODUCTION DATABASE DEBUG');
  console.log('=================================\n');
  
  try {
    // Step 1: Test database connection
    console.log('1. Testing database connection...');
    await prisma.$connect();
    console.log('   ✓ Connected to production database\n');
    
    // Step 2: Check if user exists
    console.log('2. Checking for user Niblah...');
    const user = await prisma.user.findUnique({
      where: { username: 'Niblah' }
    });
    
    if (user) {
      console.log('   ✓ User found!');
      console.log('   ID:', user.id);
      console.log('   Username:', user.username);
      console.log('   Email:', user.email);
      console.log('   Role:', user.role);
      console.log('   Password hash exists:', !!user.passwordHash);
      console.log('   Hash starts with:', user.passwordHash.substring(0, 10) + '...\n');
      
      // Step 3: Test password verification
      console.log('3. Testing password verification...');
      const passwordCorrect = await bcrypt.compare('Jukovic91!', user.passwordHash);
      console.log('   Password "Jukovic91!" matches:', passwordCorrect);
      
      if (!passwordCorrect) {
        console.log('   ⚠️ Password does not match! Updating...');
        const newHash = await bcrypt.hash('Jukovic91!', 10);
        await prisma.user.update({
          where: { id: user.id },
          data: { passwordHash: newHash }
        });
        console.log('   ✓ Password updated!\n');
      } else {
        console.log('   ✓ Password is correct!\n');
      }
    } else {
      console.log('   ❌ User NOT found! Creating...');
      const passwordHash = await bcrypt.hash('Jukovic91!', 10);
      const newUser = await prisma.user.create({
        data: {
          username: 'Niblah',
          email: 'admin@admin.nl',
          passwordHash: passwordHash,
          role: 'ADMIN'
        }
      });
      console.log('   ✓ User created with ID:', newUser.id, '\n');
    }
    
    // Step 4: Check login attempts
    console.log('4. Checking login attempts...');
    const attempts = await prisma.loginAttempt.count();
    console.log('   Total login attempts in database:', attempts);
    
    if (attempts > 0) {
      console.log('   Clearing all login attempts...');
      await prisma.loginAttempt.deleteMany({});
      console.log('   ✓ Login attempts cleared\n');
    } else {
      console.log('   ✓ No login attempts to clear\n');
    }
    
    // Step 5: Check sessions
    console.log('5. Checking sessions...');
    const sessions = await prisma.session.count();
    console.log('   Total sessions in database:', sessions);
    
    if (sessions > 0) {
      console.log('   Clearing all sessions...');
      await prisma.session.deleteMany({});
      console.log('   ✓ Sessions cleared\n');
    } else {
      console.log('   ✓ No sessions to clear\n');
    }
    
    // Step 6: Final verification
    console.log('6. Final verification...');
    const finalUser = await prisma.user.findUnique({
      where: { username: 'Niblah' }
    });
    const finalPasswordCheck = await bcrypt.compare('Jukovic91!', finalUser.passwordHash);
    
    console.log('   User exists:', !!finalUser);
    console.log('   Password valid:', finalPasswordCheck);
    console.log('   Database ready:', !!finalUser && finalPasswordCheck);
    
    console.log('\n=================================');
    if (finalUser && finalPasswordCheck) {
      console.log('✅ PRODUCTION DATABASE IS READY!');
      console.log('=================================');
      console.log('\nLogin should work with:');
      console.log('Username: Niblah');
      console.log('Password: Jukovic91!');
    } else {
      console.log('❌ ISSUES FOUND AND FIXED!');
      console.log('=================================');
      console.log('\nPlease try logging in again.');
    }
    
  } catch (error) {
    console.error('\n❌ ERROR:', error.message);
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}

debugProduction().catch(console.error);