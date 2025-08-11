import bcrypt from 'bcryptjs';

async function generateHash() {
  const password = 'Jukovic91!';
  const hash = await bcrypt.hash(password, 10);
  console.log('Password:', password);
  console.log('Hash:', hash);
  
  // Verify it works
  const matches = await bcrypt.compare(password, hash);
  console.log('Verification:', matches ? '✓ Correct' : '✗ Failed');
}

generateHash();