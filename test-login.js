async function testLogin() {
  console.log('Testing login API...\n');
  
  // Test with correct credentials
  console.log('Test 1: Correct credentials');
  const response1 = await fetch('http://localhost:3002/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: 'Niblah',
      password: 'Jukovic91!'
    })
  });
  
  const data1 = await response1.json();
  console.log('Response:', response1.status, data1);
  
  // Test with wrong password
  console.log('\nTest 2: Wrong password');
  const response2 = await fetch('http://localhost:3002/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: 'Niblah',
      password: 'wrongpassword'
    })
  });
  
  const data2 = await response2.json();
  console.log('Response:', response2.status, data2);
}

testLogin().catch(console.error);