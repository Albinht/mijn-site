async function testLogin() {
  console.log('Testing login with credentials...\n');
  
  try {
    const response = await fetch('http://localhost:3000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: 'Niblah',
        password: 'Jukovic91!'
      })
    });
    
    const data = await response.json();
    
    if (response.ok) {
      console.log('✅ Login successful!');
      console.log('Response:', JSON.stringify(data, null, 2));
    } else {
      console.log('❌ Login failed!');
      console.log('Status:', response.status);
      console.log('Error:', data.error);
      if (data.remainingAttempts !== undefined) {
        console.log('Remaining attempts:', data.remainingAttempts);
      }
    }
  } catch (error) {
    console.error('Error testing login:', error.message);
    console.log('\nMake sure the development server is running with: npm run dev');
  }
}

testLogin();