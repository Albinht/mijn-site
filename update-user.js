import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function updateUser() {
  console.log('Updating user email...');
  
  const updated = await prisma.user.update({
    where: { username: 'Niblah' },
    data: { email: 'admin@admin.nl' }
  });
  
  console.log('Updated user:', updated.username, '->', updated.email);
  
  await prisma.$disconnect();
}

updateUser().catch(console.error);