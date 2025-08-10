async function testAPIs() {
  const baseUrl = 'http://localhost:3002';
  
  console.log('Testing Dashboard APIs...\n');
  
  // 1. Login first
  console.log('1. Testing Login...');
  const loginResponse = await fetch(`${baseUrl}/api/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: 'Niblah',
      password: 'Jukovic91!'
    })
  });
  
  const loginData = await loginResponse.json();
  console.log('Login response:', loginResponse.status, loginData.success ? '✅' : '❌');
  
  // Get all cookies from the response
  const setCookieHeader = loginResponse.headers.get('set-cookie');
  if (!setCookieHeader) {
    console.log('No cookies received from login!');
    return;
  }
  
  // Parse cookies - in Node.js fetch, we need to handle the raw cookie string
  const cookieString = setCookieHeader.split(',').map(cookie => {
    const match = cookie.match(/^([^=]+)=([^;]+)/);
    return match ? `${match[1]}=${match[2]}` : '';
  }).filter(Boolean).join('; ');
  
  console.log('Using cookies:', cookieString.substring(0, 50) + '...');
  
  // 2. Test Dashboard Stats
  console.log('\n2. Testing Dashboard Stats...');
  const statsResponse = await fetch(`${baseUrl}/api/dashboard/stats`, {
    headers: { 'Cookie': cookieString }
  });
  const statsData = await statsResponse.json();
  console.log('Dashboard stats:', statsResponse.status, statsData.success ? '✅' : '❌');
  if (statsData.success) {
    console.log('- Total articles:', statsData.data.content.articles.total);
    console.log('- Total pages:', statsData.data.content.pages.total);
    console.log('- Total views:', statsData.data.analytics.totalViews);
  }
  
  // 3. Test Content API
  console.log('\n3. Testing Content API...');
  const contentResponse = await fetch(`${baseUrl}/api/content?limit=5`);
  const contentData = await contentResponse.json();
  console.log('Content list:', contentResponse.status, contentData.success ? '✅' : '❌');
  if (contentData.success) {
    console.log('- Found', contentData.data.length, 'pages');
  }
  
  // 4. Test Articles API
  console.log('\n4. Testing Articles API...');
  const articlesResponse = await fetch(`${baseUrl}/api/articles?limit=5`);
  const articlesData = await articlesResponse.json();
  console.log('Articles list:', articlesResponse.status, articlesData.success ? '✅' : '❌');
  if (articlesData.success) {
    console.log('- Found', articlesData.data.length, 'articles');
  }
  
  // 5. Test Analytics Overview
  console.log('\n5. Testing Analytics Overview...');
  const analyticsResponse = await fetch(`${baseUrl}/api/analytics/overview?range=week`, {
    headers: { 'Cookie': cookieString }
  });
  const analyticsData = await analyticsResponse.json();
  console.log('Analytics overview:', analyticsResponse.status, analyticsData.success ? '✅' : '❌');
  if (analyticsData.success) {
    console.log('- Total views:', analyticsData.data.metrics.totalViews);
    console.log('- Unique visitors:', analyticsData.data.metrics.uniqueVisitors);
  }
  
  // 6. Test Settings API
  console.log('\n6. Testing Settings API...');
  const settingsResponse = await fetch(`${baseUrl}/api/settings`, {
    headers: { 'Cookie': cookieString }
  });
  const settingsData = await settingsResponse.json();
  console.log('Settings:', settingsResponse.status, settingsData.success ? '✅' : '❌');
  
  // 7. Test Activity Logs
  console.log('\n7. Testing Activity Logs...');
  const activityResponse = await fetch(`${baseUrl}/api/activity/recent?limit=5`, {
    headers: { 'Cookie': cookieString }
  });
  const activityData = await activityResponse.json();
  console.log('Recent activity:', activityResponse.status, activityData.success ? '✅' : '❌');
  if (activityData.success && activityData.data.length > 0) {
    console.log('- Latest:', activityData.data[0].description);
  }
  
  console.log('\n✅ API testing complete!');
}

testAPIs().catch(console.error);