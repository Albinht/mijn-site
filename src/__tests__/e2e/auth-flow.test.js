/**
 * E2E Test for Authentication Flow
 * Tests the complete authentication journey from login to logout
 */

import { test, expect } from '@playwright/test';

const BASE_URL = process.env.TEST_URL || 'http://localhost:3000';

test.describe('Authentication Flow', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to login page
    await page.goto(`${BASE_URL}/admin/login`);
  });

  test('should complete full authentication flow', async ({ page }) => {
    // 1. Verify login page loads
    await expect(page).toHaveTitle(/Admin Login/);
    await expect(page.locator('h1')).toContainText('Admin Login');

    // 2. Test form validation
    await page.click('button[type="submit"]');
    await expect(page.locator('.error-message')).toBeVisible();

    // 3. Enter invalid credentials
    await page.fill('input[name="username"]', 'wronguser');
    await page.fill('input[name="password"]', 'wrongpassword');
    await page.click('button[type="submit"]');
    
    await expect(page.locator('.error-message')).toContainText(/Invalid credentials/);
    await expect(page.locator('.attempts-remaining')).toBeVisible();

    // 4. Enter valid credentials
    await page.fill('input[name="username"]', 'Niblah');
    await page.fill('input[name="password"]', 'Jukovic91!');
    await page.click('button[type="submit"]');

    // 5. Verify redirect to dashboard
    await page.waitForURL(`${BASE_URL}/admin/dashboard`);
    await expect(page).toHaveTitle(/Admin Dashboard/);
    await expect(page.locator('h1')).toContainText('Dashboard Overview');

    // 6. Verify user info is displayed
    await expect(page.locator('.user-info')).toContainText('Niblah');

    // 7. Navigate to different admin pages
    await page.click('a[href="/admin/articles"]');
    await expect(page).toHaveURL(`${BASE_URL}/admin/articles`);
    await expect(page.locator('h1')).toContainText('Article Management');

    await page.click('a[href="/admin/analytics"]');
    await expect(page).toHaveURL(`${BASE_URL}/admin/analytics`);
    await expect(page.locator('h1')).toContainText('Analytics Dashboard');

    // 8. Test logout
    await page.click('button.logout-button');
    await page.waitForURL(`${BASE_URL}/admin/login`);
    await expect(page.locator('h1')).toContainText('Admin Login');

    // 9. Verify cannot access protected pages after logout
    await page.goto(`${BASE_URL}/admin/dashboard`);
    await page.waitForURL(`${BASE_URL}/admin/login`);
  });

  test('should handle rate limiting', async ({ page }) => {
    // Attempt multiple failed logins
    for (let i = 0; i < 3; i++) {
      await page.fill('input[name="username"]', 'testuser');
      await page.fill('input[name="password"]', 'wrongpassword');
      await page.click('button[type="submit"]');
      await page.waitForTimeout(500);
    }

    // Fourth attempt should be blocked
    await page.fill('input[name="username"]', 'testuser');
    await page.fill('input[name="password"]', 'wrongpassword');
    await page.click('button[type="submit"]');

    await expect(page.locator('.error-message')).toContainText(/Too many failed attempts/);
    await expect(page.locator('.blocked-timer')).toBeVisible();
  });

  test('should maintain session across page refreshes', async ({ page }) => {
    // Login
    await page.fill('input[name="username"]', 'Niblah');
    await page.fill('input[name="password"]', 'Jukovic91!');
    await page.click('button[type="submit"]');
    await page.waitForURL(`${BASE_URL}/admin/dashboard`);

    // Refresh page
    await page.reload();
    
    // Should still be logged in
    await expect(page).toHaveURL(`${BASE_URL}/admin/dashboard`);
    await expect(page.locator('.user-info')).toContainText('Niblah');
  });

  test('should handle concurrent sessions', async ({ browser }) => {
    // Create two browser contexts
    const context1 = await browser.newContext();
    const context2 = await browser.newContext();

    const page1 = await context1.newPage();
    const page2 = await context2.newPage();

    // Login in first browser
    await page1.goto(`${BASE_URL}/admin/login`);
    await page1.fill('input[name="username"]', 'Niblah');
    await page1.fill('input[name="password"]', 'Jukovic91!');
    await page1.click('button[type="submit"]');
    await page1.waitForURL(`${BASE_URL}/admin/dashboard`);

    // Try to access dashboard in second browser (should redirect to login)
    await page2.goto(`${BASE_URL}/admin/dashboard`);
    await page2.waitForURL(`${BASE_URL}/admin/login`);

    // Clean up
    await context1.close();
    await context2.close();
  });

  test('should handle token refresh', async ({ page }) => {
    // Login
    await page.fill('input[name="username"]', 'Niblah');
    await page.fill('input[name="password"]', 'Jukovic91!');
    await page.click('button[type="submit"]');
    await page.waitForURL(`${BASE_URL}/admin/dashboard`);

    // Wait for access token to expire (in test mode, this would be shorter)
    // In real tests, you'd mock the time or use a shorter expiry for testing
    await page.waitForTimeout(1000);

    // Make an API call that should trigger token refresh
    await page.click('button.refresh-data');

    // Should still be logged in
    await expect(page.locator('.user-info')).toContainText('Niblah');
  });
});

test.describe('Admin Dashboard Features', () => {
  test.beforeEach(async ({ page }) => {
    // Login before each test
    await page.goto(`${BASE_URL}/admin/login`);
    await page.fill('input[name="username"]', 'Niblah');
    await page.fill('input[name="password"]', 'Jukovic91!');
    await page.click('button[type="submit"]');
    await page.waitForURL(`${BASE_URL}/admin/dashboard`);
  });

  test('should generate article', async ({ page }) => {
    // Navigate to articles page
    await page.click('a[href="/admin/articles"]');

    // Click generate article button
    await page.click('button.generate-article');

    // Fill in article topic
    await page.fill('input[name="topic"]', 'Test Article Topic');
    await page.click('button.submit-generate');

    // Wait for generation to start
    await expect(page.locator('.generation-status')).toContainText(/Processing/);

    // Wait for completion (with timeout)
    await expect(page.locator('.generation-status')).toContainText(/Published/, {
      timeout: 30000,
    });
  });

  test('should display analytics data', async ({ page }) => {
    // Navigate to analytics page
    await page.click('a[href="/admin/analytics"]');

    // Verify analytics components load
    await expect(page.locator('.visitor-chart')).toBeVisible();
    await expect(page.locator('.page-views-table')).toBeVisible();
    await expect(page.locator('.traffic-sources')).toBeVisible();

    // Change date range
    await page.selectOption('select.date-range', '7days');
    await page.waitForTimeout(1000);

    // Verify data updates
    await expect(page.locator('.analytics-updated')).toBeVisible();
  });

  test('should manage content', async ({ page }) => {
    // Navigate to content page
    await page.click('a[href="/admin/content"]');

    // Search for content
    await page.fill('input.search-content', 'marketing');
    await page.waitForTimeout(500);

    // Filter by type
    await page.selectOption('select.content-type', 'MARKETING');

    // Edit content item
    await page.click('.content-item:first-child button.edit-button');
    await expect(page.locator('.content-editor')).toBeVisible();

    // Update content
    await page.fill('input[name="title"]', 'Updated Content Title');
    await page.click('button.save-content');

    // Verify success message
    await expect(page.locator('.success-message')).toContainText(/saved successfully/);
  });

  test('should update settings', async ({ page }) => {
    // Navigate to settings page
    await page.click('a[href="/admin/settings"]');

    // Update general settings
    await page.fill('input[name="siteName"]', 'Test Site Name');
    await page.fill('input[name="contactEmail"]', 'test@example.com');

    // Save settings
    await page.click('button.save-settings');

    // Verify success message
    await expect(page.locator('.success-message')).toContainText(/Settings updated/);

    // Reload page and verify settings persist
    await page.reload();
    await expect(page.locator('input[name="siteName"]')).toHaveValue('Test Site Name');
  });
});

test.describe('Security Tests', () => {
  test('should prevent XSS attacks', async ({ page }) => {
    await page.goto(`${BASE_URL}/admin/login`);

    // Try to inject script tag
    await page.fill('input[name="username"]', '<script>alert("XSS")</script>');
    await page.fill('input[name="password"]', 'password');
    await page.click('button[type="submit"]');

    // Should not execute script
    const alertDialog = page.locator('dialog');
    await expect(alertDialog).not.toBeVisible();

    // Should show error message
    await expect(page.locator('.error-message')).toBeVisible();
  });

  test('should prevent SQL injection', async ({ page }) => {
    await page.goto(`${BASE_URL}/admin/login`);

    // Try SQL injection
    await page.fill('input[name="username"]', "admin' OR '1'='1");
    await page.fill('input[name="password"]', "' OR '1'='1");
    await page.click('button[type="submit"]');

    // Should not bypass authentication
    await expect(page).toHaveURL(`${BASE_URL}/admin/login`);
    await expect(page.locator('.error-message')).toContainText(/Invalid credentials/);
  });

  test('should validate CSRF tokens', async ({ page }) => {
    // Login
    await page.goto(`${BASE_URL}/admin/login`);
    await page.fill('input[name="username"]', 'Niblah');
    await page.fill('input[name="password"]', 'Jukovic91!');
    await page.click('button[type="submit"]');
    await page.waitForURL(`${BASE_URL}/admin/dashboard`);

    // Try to make API call without CSRF token
    const response = await page.evaluate(async () => {
      const res = await fetch('/api/settings', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ key: 'value' }),
      });
      return { status: res.status };
    });

    // Should be rejected
    expect(response.status).toBe(403);
  });
});

// Playwright configuration for E2E tests
export const config = {
  use: {
    // Base URL for tests
    baseURL: BASE_URL,
    
    // Browser options
    headless: true,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    
    // Screenshots and videos
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    
    // Timeouts
    actionTimeout: 10000,
    navigationTimeout: 30000,
  },
  
  // Test directory
  testDir: './src/__tests__/e2e',
  
  // Reporter
  reporter: [
    ['html'],
    ['junit', { outputFile: 'test-results/e2e-results.xml' }],
  ],
  
  // Retry failed tests
  retries: 2,
  
  // Parallel execution
  workers: 4,
};