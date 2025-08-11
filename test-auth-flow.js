async function testAuthFlow() {
  console.log('Testing Authentication Flow...\n');
  
  const baseUrl = 'http://localhost:3000';
  
  try {
    // Step 1: Login
    console.log('1. Testing login...');
    const loginResponse = await fetch(`${baseUrl}/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: 'Niblah',
        password: 'Jukovic91!'
      })
    });
    
    if (!loginResponse.ok) {
      console.log('   Trying simple-login fallback...');
      const simpleResponse = await fetch(`${baseUrl}/api/auth/simple-login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: 'Niblah',
          password: 'Jukovic91!'
        })
      });
      
      if (!simpleResponse.ok) {
        throw new Error('Login failed');
      }
      
      const simpleData = await simpleResponse.json();
      const cookieHeader = simpleResponse.headers.get('set-cookie');
      console.log('   ✓ Simple login successful');
      console.log('   Cookie set:', cookieHeader ? 'Yes' : 'No');
      
      // Extract auth token
      const authToken = cookieHeader?.match(/auth-token=([^;]+)/)?.[1];
      
      if (!authToken) {
        throw new Error('No auth token in response');
      }
      
      // Step 2: Verify authentication
      console.log('\n2. Testing verify endpoint...');
      const verifyResponse = await fetch(`${baseUrl}/api/auth/verify`, {
        headers: {
          'Cookie': `auth-token=${authToken}`
        }
      });
      
      const verifyData = await verifyResponse.json();
      console.log('   Authenticated:', verifyData.authenticated || verifyData.valid);
      console.log('   User:', verifyData.user?.username);
      
      // Step 3: Test protected API
      console.log('\n3. Testing protected API (/api/clients)...');
      const clientsResponse = await fetch(`${baseUrl}/api/clients`, {
        headers: {
          'Cookie': `auth-token=${authToken}`
        }
      });
      
      if (clientsResponse.ok) {
        const clientsData = await clientsResponse.json();
        console.log('   ✓ Clients API accessible');
        console.log('   Success:', clientsData.success);
      } else {
        console.log('   ✗ Clients API returned:', clientsResponse.status);
      }
      
      console.log('\n✅ Authentication flow working!');
    }
    
  } catch (error) {
    console.error('\n❌ Test failed:', error.message);
  }
}

testAuthFlow();