'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Button from '../../../components/Button';
import authorImage from '../../../assets/author.png';
import credentialsImage from '../../../assets/credentials.jpeg';

// CodeBlock component with copy functionality
function CodeBlock({ children, title }) {
  const [copied, setCopied] = useState(false);
  
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(children);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };
  
  return (
    <div className="relative bg-gray-900 rounded-lg overflow-hidden my-6">
      {title && (
        <div className="bg-gray-800 px-4 py-2 text-sm text-gray-300 border-b border-gray-700">
          {title}
        </div>
      )}
      <div className="relative">
        <pre className="p-4 text-sm text-gray-100 overflow-x-auto">
          <code>{children}</code>
        </pre>
        <button
          onClick={copyToClipboard}
          className="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded text-xs transition-colors"
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
    </div>
  );
}

// Content component
function BlogContent() {
  return (
    <>
      <h2>🔐 Why Google API Credentials Matter for Automation</h2>
      <p>If you're building any kind of automation workflow that needs to interact with Google services - whether that's <Link href="/youtube/google-search-console-auto-indexer" className="text-blue-600 hover:text-blue-800">automated indexing with Google Search Console</Link>, managing Google Sheets data, or accessing Google Analytics - you'll need proper API credentials.</p>
      <p>Google API credentials serve as your digital key to access Google's services programmatically. Without proper setup, your <Link href="/tools" className="text-blue-600 hover:text-blue-800">automation workflows</Link> simply won't work. This tutorial covers everything you need to know to set up these credentials correctly the first time.</p>
      
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
        <div className="flex">
          <div className="ml-3">
            <p className="text-sm text-blue-700">
              <strong>Pro Tip:</strong> This setup is essential for most N8N automation workflows that interact with Google services. Get this right once, and you'll save hours of troubleshooting later.
            </p>
          </div>
        </div>
      </div>

      <h2>🎯 What You'll Learn in This Tutorial</h2>
      <p>By the end of this comprehensive guide, you'll have:</p>
      <ul>
        <li><strong>A Google Cloud Project</strong> configured specifically for API access</li>
        <li><strong>OAuth 2.0 credentials</strong> set up with proper security settings</li>
        <li><strong>API access enabled</strong> for the services you need</li>
        <li><strong>Consent screen configured</strong> for smooth authorization flows</li>
        <li><strong>Best practices knowledge</strong> for maintaining secure credentials</li>
      </ul>

      <h2>🔧 Prerequisites and Requirements</h2>
      <p>Before we start, make sure you have:</p>
      <ul>
        <li><strong>Google Account</strong> with access to Google Cloud Console</li>
        <li><strong>Domain ownership</strong> (if setting up for production use)</li>
        <li><strong>N8N instance</strong> or automation platform ready for integration</li>
        <li><strong>Basic understanding</strong> of OAuth 2.0 concepts (we'll explain as we go)</li>
      </ul>
      
      <h3>Understanding OAuth 2.0 Flow</h3>
      <p>OAuth 2.0 is the industry standard for authorization. Here's what happens in simple terms:</p>
      <ol>
        <li><strong>Your application</strong> requests access to Google services</li>
        <li><strong>Google</strong> shows a consent screen to the user</li>
        <li><strong>User grants permission</strong> for specific scopes</li>
        <li><strong>Google</strong> provides access tokens to your application</li>
        <li><strong>Your application</strong> uses these tokens to make API calls</li>
      </ol>

      <h2>☁️ Step 1: Creating Your Google Cloud Project</h2>
      <h3>Accessing Google Cloud Console</h3>
      <p>First, navigate to the Google Cloud Console at <strong>console.cloud.google.com</strong>. If this is your first time, Google will walk you through some initial setup steps.</p>
      
      <h3>Creating a New Project</h3>
      <p>Follow these steps to create a dedicated project for your API credentials:</p>
      <ol>
        <li>Click the project dropdown at the top of the page</li>
        <li>Select "New Project" from the modal that appears</li>
        <li>Give your project a descriptive name (e.g., "My Website Automation")</li>
        <li>Choose your organization (if applicable)</li>
        <li>Click "Create" and wait for the project to be set up</li>
      </ol>
      
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
        <div className="flex">
          <div className="ml-3">
            <p className="text-sm text-yellow-700">
              <strong>Important:</strong> Make sure to select your new project before proceeding with the next steps. The project name should appear in the top navigation bar.
            </p>
          </div>
        </div>
      </div>

      <h2>🔌 Step 2: Enabling Required APIs</h2>
      <p>Before you can create credentials, you need to enable the specific Google APIs you'll be using. The most common APIs for automation include:</p>
      
      <h3>Google Sheets API</h3>
      <p>Essential for most automation workflows that involve data storage and manipulation:</p>
      <ol>
        <li>In the Google Cloud Console, navigate to "APIs & Services" {'>'} "Library"</li>
        <li>Search for "Google Sheets API"</li>
        <li>Click on the API and then click "Enable"</li>
        <li>Wait for the API to be enabled (usually takes a few seconds)</li>
      </ol>

      <h3>Other Common APIs to Enable</h3>
      <ul>
        <li><strong>Google Search Console API</strong> - For <Link href="/youtube/google-search-console-auto-indexer" className="text-blue-600 hover:text-blue-800">indexing automation</Link></li>
        <li><strong>Google Analytics API</strong> - For traffic and performance data</li>
        <li><strong>Gmail API</strong> - For email automation workflows</li>
        <li><strong>Google Drive API</strong> - For file storage and sharing</li>
      </ul>
      
      <p>Enable any APIs you plan to use in your automation workflows. You can always come back and enable more later.</p>

      <h2>🛡️ Step 3: Configuring the OAuth Consent Screen</h2>
      <p>The consent screen is what users see when your application requests permission to access their Google data. Even if you're the only user, this step is required.</p>

      <h3>Basic Consent Screen Setup</h3>
      <ol>
        <li>Go to "APIs & Services" {'>'} "OAuth consent screen"</li>
        <li>Choose "External" for user type (unless you have Google Workspace)</li>
        <li>Click "Create" to proceed</li>
      </ol>

      <h3>Required Information Fields</h3>
      <p>Fill out the OAuth consent screen with the following information:</p>
      
      <CodeBlock title="Consent Screen Configuration">
{`App name: Your Website/App Name
User support email: your-email@domain.com
Developer contact information: your-email@domain.com

Optional but recommended:
App domain: https://yourdomain.com
Privacy policy: https://yourdomain.com/privacy
Terms of service: https://yourdomain.com/terms`}
      </CodeBlock>

      <h3>Scopes Configuration</h3>
      <p>Scopes define what permissions your application is requesting. Add only the scopes you actually need:</p>
      <ul>
        <li><strong>../auth/spreadsheets</strong> - Full access to Google Sheets</li>
        <li><strong>../auth/webmasters</strong> - Access to Search Console data</li>
        <li><strong>../auth/webmasters.readonly</strong> - Read-only Search Console access</li>
        <li><strong>../auth/analytics.readonly</strong> - Read-only Analytics access</li>
      </ul>

      <h2>🔑 Step 4: Creating OAuth 2.0 Credentials</h2>
      <p>Now comes the main event - creating your actual API credentials that your automation will use.</p>

      <h3>Creating the Credential</h3>
      <ol>
        <li>Navigate to "APIs & Services" {'>'} "Credentials"</li>
        <li>Click "Create Credentials" and select "OAuth 2.0 Client IDs"</li>
        <li>Choose "Web application" as the application type</li>
        <li>Give your OAuth client a descriptive name</li>
      </ol>

      <h3>Authorized Redirect URIs</h3>
      <p>This is crucial for N8N integration. You need to add the correct redirect URIs:</p>
      
      <CodeBlock title="N8N Redirect URIs">
{`For N8N Cloud:
https://[your-instance].app.n8n.cloud/rest/oauth2-credential/callback

For Self-hosted N8N:
https://your-n8n-domain.com/rest/oauth2-credential/callback

For local development:
http://localhost:5678/rest/oauth2-credential/callback`}
      </CodeBlock>

      <div className="bg-red-50 border-l-4 border-red-400 p-4 my-6">
        <div className="flex">
          <div className="ml-3">
            <p className="text-sm text-red-700">
              <strong>Critical:</strong> The redirect URI must match exactly. Any mismatch will cause authentication to fail. Make sure to include the protocol (https:// or http://) and the correct path.
            </p>
          </div>
        </div>
      </div>

      <h3>Authorized JavaScript Origins</h3>
      <p>Add the domains where your application will be running:</p>
      <ul>
        <li>Your N8N instance URL (without the path)</li>
        <li>Your website domain (if the automation is triggered from your site)</li>
        <li>Localhost for development (http://localhost:5678)</li>
      </ul>

      <h2>👥 Step 5: Managing Test Users</h2>
      <p>Since you're likely setting this up for your own use initially, you'll need to add yourself as a test user.</p>

      <h3>Adding Test Users</h3>
      <ol>
        <li>Go back to "OAuth consent screen"</li>
        <li>Scroll down to "Test users" section</li>
        <li>Click "Add Users"</li>
        <li>Add your email address and any other users who need access</li>
        <li>Click "Save"</li>
      </ol>

      <div className="bg-green-50 border-l-4 border-green-400 p-4 my-6">
        <div className="flex">
          <div className="ml-3">
            <p className="text-sm text-green-700">
              <strong>Test User Limits:</strong> You can add up to 100 test users. This is usually sufficient for personal projects and small business automation.
            </p>
          </div>
        </div>
      </div>

      <h2>📥 Step 6: Downloading Your Credentials</h2>
      <p>Once your OAuth client is created, you'll need to download the credentials file:</p>
      <ol>
        <li>From the "Credentials" page, find your newly created OAuth 2.0 Client ID</li>
        <li>Click the download button (it looks like a down arrow)</li>
        <li>Save the JSON file securely - this contains your Client ID and Client Secret</li>
        <li>Never commit this file to version control or share it publicly</li>
      </ol>

      <h3>Understanding the Credentials File</h3>
      <p>The downloaded JSON file contains key information you'll need for N8N:</p>
      <CodeBlock title="Credentials File Structure">
{`{
  "web": {
    "client_id": "your-client-id.apps.googleusercontent.com",
    "project_id": "your-project-id",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "client_secret": "your-client-secret",
    "redirect_uris": ["your-redirect-uri"]
  }
}`}
      </CodeBlock>

      <h2>🔧 Step 7: Integration with N8N</h2>
      <p>Now that your Google credentials are set up, here's how to use them in N8N:</p>

      <h3>Creating N8N Credential</h3>
      <ol>
        <li>In N8N, go to "Settings" {'>'} "Credentials"</li>
        <li>Click "Create New" and search for "Google OAuth2 API"</li>
        <li>Enter your Client ID and Client Secret from the JSON file</li>
        <li>Set the scope based on what APIs you enabled</li>
        <li>Click "Connect my account" to authorize</li>
      </ol>

      <h3>Common Scopes for N8N</h3>
      <CodeBlock title="Google API Scopes">
{`For Google Sheets automation:
https://www.googleapis.com/auth/spreadsheets

For Search Console automation:
https://www.googleapis.com/auth/webmasters

For read-only access:
https://www.googleapis.com/auth/webmasters.readonly

Multiple scopes (space-separated):
https://www.googleapis.com/auth/spreadsheets https://www.googleapis.com/auth/webmasters`}
      </CodeBlock>

      <h2>🏠 Self-Hosted N8N Considerations</h2>
      <p>If you're running N8N on your own server, there are additional considerations:</p>

      <h3>SSL Certificate Requirements</h3>
      <ul>
        <li><strong>HTTPS is required</strong> for OAuth redirects (except localhost)</li>
        <li>Use Let's Encrypt or another SSL certificate provider</li>
        <li>Ensure your domain resolves properly to your server</li>
      </ul>

      <h3>Firewall and Network Configuration</h3>
      <ul>
        <li>Port 443 (HTTPS) must be open and accessible</li>
        <li>Your N8N instance must be reachable from the internet</li>
        <li>Consider using a reverse proxy like Nginx for SSL termination</li>
      </ul>

      <h2>🛡️ Security Best Practices</h2>
      <p>Protecting your Google API credentials is crucial for maintaining security:</p>

      <h3>Credential Storage</h3>
      <ul>
        <li><strong>Never hardcode</strong> credentials in your code</li>
        <li><strong>Use environment variables</strong> or secure credential stores</li>
        <li><strong>Rotate credentials</strong> regularly for production systems</li>
        <li><strong>Limit scope</strong> to only what your application needs</li>
      </ul>

      <h3>Access Control</h3>
      <ul>
        <li>Use the principle of least privilege</li>
        <li>Regularly review and remove unused credentials</li>
        <li>Monitor API usage for unusual activity</li>
        <li>Set up alerts for high API usage</li>
      </ul>

      <h2>🚨 Common Mistakes to Avoid</h2>
      <h3>Redirect URI Mismatches</h3>
      <p>The most common error when setting up OAuth credentials is redirect URI mismatches:</p>
      <ul>
        <li><strong>Exact match required</strong> - URLs must match exactly</li>
        <li><strong>Include protocol</strong> - Don't forget https:// or http://</li>
        <li><strong>Check trailing slashes</strong> - Some systems are sensitive to this</li>
        <li><strong>Case sensitivity</strong> - URLs are case-sensitive</li>
      </ul>

      <h3>Scope Configuration Errors</h3>
      <ul>
        <li><strong>Too broad scopes</strong> - Request only what you need</li>
        <li><strong>Missing scopes</strong> - Ensure all required permissions are included</li>
        <li><strong>Scope format</strong> - Use the exact Google-specified scope URLs</li>
      </ul>

      <h3>Test User Limitations</h3>
      <ul>
        <li>Remember to add all users who will use the system</li>
        <li>Test users have full access during development</li>
        <li>Plan for production publishing when ready to scale</li>
      </ul>

      <h2>🔍 Troubleshooting Common Issues</h2>
      <h3>"Access blocked" Error</h3>
      <p>If users see an "Access blocked" error during OAuth flow:</p>
      <ol>
        <li>Check that the user is added to the test users list</li>
        <li>Verify the OAuth consent screen is properly configured</li>
        <li>Ensure all required fields are filled in the consent screen</li>
        <li>Check that the correct scopes are configured</li>
      </ol>

      <h3>"Redirect URI Mismatch" Error</h3>
      <p>This error indicates a configuration problem:</p>
      <ol>
        <li>Double-check the redirect URI in Google Cloud Console</li>
        <li>Verify the URI matches exactly what N8N is sending</li>
        <li>Check for typos, missing protocols, or incorrect paths</li>
        <li>Test with the exact URL structure N8N expects</li>
      </ol>

      <h3>Token Expiration Issues</h3>
      <p>OAuth tokens expire and need to be refreshed:</p>
      <ul>
        <li><strong>Access tokens</strong> typically expire after 1 hour</li>
        <li><strong>Refresh tokens</strong> are used to get new access tokens</li>
        <li><strong>N8N handles this automatically</strong> in most cases</li>
        <li><strong>Manual refresh</strong> may be needed if automation fails</li>
      </ul>

      <h2>📊 Monitoring and Maintenance</h2>
      <h3>API Quota Monitoring</h3>
      <p>Keep track of your API usage to avoid hitting limits:</p>
      <ul>
        <li>Check the Google Cloud Console "APIs & Services" {'>'} "Quotas" section</li>
        <li>Set up alerts for high usage</li>
        <li>Optimize your workflows to minimize API calls</li>
        <li>Consider caching frequently accessed data</li>
      </ul>

      <h3>Credential Rotation</h3>
      <p>Regularly update your credentials for security:</p>
      <ul>
        <li>Create new OAuth clients periodically</li>
        <li>Update N8N with new credentials</li>
        <li>Test thoroughly before removing old credentials</li>
        <li>Document the rotation process for your team</li>
      </ul>

      <h2>🚀 Advanced Configuration Options</h2>
      <h3>Custom Consent Screen Branding</h3>
      <p>For production applications, consider customizing your consent screen:</p>
      <ul>
        <li>Add your company logo</li>
        <li>Include privacy policy and terms of service</li>
        <li>Use a professional app description</li>
        <li>Configure proper support contact information</li>
      </ul>

      <h3>Domain Verification</h3>
      <p>For production use, verify your domain ownership:</p>
      <ol>
        <li>Go to Google Search Console</li>
        <li>Add and verify your property</li>
        <li>Use the verified domain in your OAuth consent screen</li>
        <li>This enables broader scopes and removes some limitations</li>
      </ol>

      <h2>🔗 Integration with Marketing Automation</h2>
      <p>These Google API credentials are the foundation for powerful <Link href="/services" className="text-blue-600 hover:text-blue-800">marketing automation workflows</Link>:</p>
      
      <h3>SEO Automation Opportunities</h3>
      <ul>
        <li><strong><Link href="/youtube/google-search-console-auto-indexer" className="text-blue-600 hover:text-blue-800">Auto-indexing workflows</Link></strong> - Speed up content discovery</li>
        <li><strong>Keyword rank tracking</strong> - Monitor performance automatically</li>
        <li><strong>Technical SEO monitoring</strong> - Track crawl errors and issues</li>
        <li><strong>Content gap analysis</strong> - Identify opportunities with API data</li>
      </ul>

      <h3>Data-Driven Marketing</h3>
      <ul>
        <li><strong>Automated reporting</strong> - Pull Google Analytics data to <Link href="/tools" className="text-blue-600 hover:text-blue-800">custom dashboards</Link></li>
        <li><strong>Lead scoring</strong> - Combine multiple data sources for better insights</li>
        <li><strong>Campaign optimization</strong> - Use real-time data to adjust strategies</li>
        <li><strong>Performance tracking</strong> - Monitor <Link href="/blueprints/seo" className="text-blue-600 hover:text-blue-800">SEO campaigns</Link> automatically</li>
      </ul>

      <h2>📈 Scaling Your Google API Usage</h2>
      <h3>Production Environment Setup</h3>
      <p>When you're ready to move beyond testing:</p>
      <ol>
        <li>Submit your OAuth consent screen for verification</li>
        <li>This removes the "unverified app" warning</li>
        <li>Allows unlimited users (not just test users)</li>
        <li>Enables higher API quotas in some cases</li>
      </ol>

      <h3>Multi-Environment Management</h3>
      <p>For complex setups, consider separate projects for:</p>
      <ul>
        <li><strong>Development</strong> - Testing and experimentation</li>
        <li><strong>Staging</strong> - Pre-production validation</li>
        <li><strong>Production</strong> - Live automation workflows</li>
      </ul>

      <h2>💡 Pro Tips for Success</h2>
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-8">
        <h3 className="text-lg font-semibold mb-4">Expert Recommendations</h3>
        <ul className="space-y-2">
          <li><strong>Start simple:</strong> Enable only the APIs you need initially</li>
          <li><strong>Test thoroughly:</strong> Use test users to validate your setup</li>
          <li><strong>Document everything:</strong> Keep track of your configuration for future reference</li>
          <li><strong>Monitor usage:</strong> Set up alerts for API quota consumption</li>
          <li><strong>Plan for scale:</strong> Consider production requirements early</li>
        </ul>
      </div>

      <h2>🎁 Ready-to-Use Templates</h2>
      <p>Want to jump straight into automation? Check out these resources:</p>
      <ul>
        <li><strong><Link href="/youtube/google-search-console-auto-indexer" className="text-blue-600 hover:text-blue-800">Auto-indexing workflow template</Link></strong> - Complete N8N setup</li>
        <li><strong><Link href="/blueprints/seo" className="text-blue-600 hover:text-blue-800">SEO automation blueprint</Link></strong> - Strategic implementation guide</li>
        <li><strong><Link href="/tools" className="text-blue-600 hover:text-blue-800">Marketing automation tools</Link></strong> - Ready-made solutions</li>
      </ul>

      <h2>📺 Watch the Complete Tutorial</h2>
      <p>This video tutorial walks through the entire Google API credential setup process step-by-step. You'll see:</p>
      <ul>
        <li><strong>Live Google Cloud Console navigation</strong> - No guesswork needed</li>
        <li><strong>Real-time troubleshooting</strong> - See how to fix common issues</li>
        <li><strong>N8N integration demonstration</strong> - Complete workflow setup</li>
        <li><strong>Security best practices</strong> - Protect your credentials properly</li>
      </ul>
      <p>Perfect for visual learners who want to follow along with the exact process.</p>

      <h2>🤝 Need Help with Implementation?</h2>
      <p>Setting up Google API credentials is just the beginning. If you want complete automation workflows built and optimized for your business, I offer <Link href="/services" className="text-blue-600 hover:text-blue-800">done-for-you automation services</Link> including:</p>
      <ul>
        <li><strong>Complete workflow development</strong> - Custom N8N automations</li>
        <li><strong>Google API integration</strong> - Secure credential setup and testing</li>
        <li><strong>Performance optimization</strong> - Efficient, reliable automation</li>
        <li><strong>Ongoing maintenance</strong> - Updates and troubleshooting support</li>
      </ul>
      
      <p>Let's turn this technical setup into powerful marketing automation that drives real business results.</p>
    </>
  );
}

const post = {
  id: 12,
  title: "How to Set Up Google API Credentials for N8N Automation - Complete Guide",
  description: "Learn the complete process of setting up Google API credentials for automation workflows. From Google Cloud Console configuration to OAuth setup, consent screen management, and N8N integration - everything you need for secure, reliable API access.",
  videoId: "8HtX1jUnKKk",
  publishDate: "2025-08-10",
  readTime: "18 min read",
  category: "API Setup",
  thumbnail: credentialsImage,
  tags: ["Google API", "OAuth", "N8N", "Automation", "Google Cloud", "API Credentials", "Setup", "Tutorial"]
};

function TableOfContents() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const headings = document.querySelectorAll('h2, h3');
    headings.forEach((heading) => {
      if (!heading.id) {
        heading.id = heading.textContent.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      }
      observer.observe(heading);
    });

    return () => observer.disconnect();
  }, []);

  const sections = [
    { id: 'why-google-api-credentials-matter-for-automation', title: '🔐 Why Google API Credentials Matter', level: 2 },
    { id: 'what-youll-learn-in-this-tutorial', title: '🎯 What You\'ll Learn', level: 2 },
    { id: 'prerequisites-and-requirements', title: '🔧 Prerequisites and Requirements', level: 2 },
    { id: 'understanding-oauth-20-flow', title: 'Understanding OAuth 2.0 Flow', level: 3 },
    { id: 'step-1-creating-your-google-cloud-project', title: '☁️ Step 1: Creating Google Cloud Project', level: 2 },
    { id: 'accessing-google-cloud-console', title: 'Accessing Google Cloud Console', level: 3 },
    { id: 'creating-a-new-project', title: 'Creating a New Project', level: 3 },
    { id: 'step-2-enabling-required-apis', title: '🔌 Step 2: Enabling Required APIs', level: 2 },
    { id: 'google-sheets-api', title: 'Google Sheets API', level: 3 },
    { id: 'other-common-apis-to-enable', title: 'Other Common APIs', level: 3 },
    { id: 'step-3-configuring-the-oauth-consent-screen', title: '🛡️ Step 3: OAuth Consent Screen', level: 2 },
    { id: 'basic-consent-screen-setup', title: 'Basic Consent Screen Setup', level: 3 },
    { id: 'required-information-fields', title: 'Required Information Fields', level: 3 },
    { id: 'scopes-configuration', title: 'Scopes Configuration', level: 3 },
    { id: 'step-4-creating-oauth-20-credentials', title: '🔑 Step 4: Creating OAuth Credentials', level: 2 },
    { id: 'creating-the-credential', title: 'Creating the Credential', level: 3 },
    { id: 'authorized-redirect-uris', title: 'Authorized Redirect URIs', level: 3 },
    { id: 'authorized-javascript-origins', title: 'Authorized JavaScript Origins', level: 3 },
    { id: 'step-5-managing-test-users', title: '👥 Step 5: Managing Test Users', level: 2 },
    { id: 'adding-test-users', title: 'Adding Test Users', level: 3 },
    { id: 'step-6-downloading-your-credentials', title: '📥 Step 6: Downloading Credentials', level: 2 },
    { id: 'understanding-the-credentials-file', title: 'Understanding the Credentials File', level: 3 },
    { id: 'step-7-integration-with-n8n', title: '🔧 Step 7: N8N Integration', level: 2 },
    { id: 'creating-n8n-credential', title: 'Creating N8N Credential', level: 3 },
    { id: 'common-scopes-for-n8n', title: 'Common Scopes for N8N', level: 3 },
    { id: 'self-hosted-n8n-considerations', title: '🏠 Self-Hosted N8N Considerations', level: 2 },
    { id: 'ssl-certificate-requirements', title: 'SSL Certificate Requirements', level: 3 },
    { id: 'firewall-and-network-configuration', title: 'Network Configuration', level: 3 },
    { id: 'security-best-practices', title: '🛡️ Security Best Practices', level: 2 },
    { id: 'credential-storage', title: 'Credential Storage', level: 3 },
    { id: 'access-control', title: 'Access Control', level: 3 },
    { id: 'common-mistakes-to-avoid', title: '🚨 Common Mistakes to Avoid', level: 2 },
    { id: 'redirect-uri-mismatches', title: 'Redirect URI Mismatches', level: 3 },
    { id: 'scope-configuration-errors', title: 'Scope Configuration Errors', level: 3 },
    { id: 'test-user-limitations', title: 'Test User Limitations', level: 3 },
    { id: 'troubleshooting-common-issues', title: '🔍 Troubleshooting Common Issues', level: 2 },
    { id: 'access-blocked-error', title: '"Access blocked" Error', level: 3 },
    { id: 'redirect-uri-mismatch-error', title: '"Redirect URI Mismatch" Error', level: 3 },
    { id: 'token-expiration-issues', title: 'Token Expiration Issues', level: 3 },
    { id: 'monitoring-and-maintenance', title: '📊 Monitoring and Maintenance', level: 2 },
    { id: 'api-quota-monitoring', title: 'API Quota Monitoring', level: 3 },
    { id: 'credential-rotation', title: 'Credential Rotation', level: 3 },
    { id: 'advanced-configuration-options', title: '🚀 Advanced Configuration', level: 2 },
    { id: 'custom-consent-screen-branding', title: 'Custom Consent Screen Branding', level: 3 },
    { id: 'domain-verification', title: 'Domain Verification', level: 3 },
    { id: 'integration-with-marketing-automation', title: '🔗 Marketing Automation Integration', level: 2 },
    { id: 'seo-automation-opportunities', title: 'SEO Automation Opportunities', level: 3 },
    { id: 'data-driven-marketing', title: 'Data-Driven Marketing', level: 3 },
    { id: 'scaling-your-google-api-usage', title: '📈 Scaling Your API Usage', level: 2 },
    { id: 'production-environment-setup', title: 'Production Environment Setup', level: 3 },
    { id: 'multi-environment-management', title: 'Multi-Environment Management', level: 3 },
    { id: 'pro-tips-for-success', title: '💡 Pro Tips for Success', level: 2 },
    { id: 'ready-to-use-templates', title: '🎁 Ready-to-Use Templates', level: 2 },
    { id: 'watch-the-complete-tutorial', title: '📺 Watch the Complete Tutorial', level: 2 },
    { id: 'need-help-with-implementation', title: '🤝 Need Help with Implementation?', level: 2 }
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
      <h3 className="text-lg font-semibold mb-4 text-gray-900">Table of Contents</h3>
      <nav className="space-y-2">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={`block text-sm transition-colors ${
              activeSection === section.id
                ? 'text-blue-600 font-medium'
                : 'text-gray-600 hover:text-gray-900'
            } ${section.level === 3 ? 'ml-4' : ''}`}
          >
            {section.title}
          </a>
        ))}
      </nav>
    </div>
  );
}

export default function BlogPostPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1 lg:w-2/3">
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                <Link href="/youtube" className="hover:text-blue-600 transition-colors">
                  YouTube
                </Link>
                <span>•</span>
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-medium">
                  {post.category}
                </span>
                <span>•</span>
                <span>{post.publishDate}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                {post.title}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {post.description}
              </p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-6">
                {post.tags.map((tag) => (
                  <span key={tag} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            {/* YouTube Video */}
            <div className="mb-8 relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe 
                src={`https://www.youtube.com/embed/${post.videoId}`}
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                title="How to Set Up Google API Credentials for N8N Automation - Complete Guide"
              ></iframe>
            </div>
            
            {/* Blog Content */}
            <div className="prose prose-lg max-w-none text-gray-800 mb-12 blog-content">
              <BlogContent />
            </div>
            
            <style jsx>{`
              .blog-content :global(h2) {
                font-size: 1.875rem !important;
                font-weight: 700 !important;
                color: #1f2937 !important;
                margin-top: 2.5rem !important;
                margin-bottom: 1.25rem !important;
                line-height: 1.2 !important;
                border-bottom: 2px solid #e5e7eb !important;
                padding-bottom: 0.5rem !important;
              }
              .blog-content :global(h3) {
                font-size: 1.5rem !important;
                font-weight: 600 !important;
                color: #374151 !important;
                margin-top: 2rem !important;
                margin-bottom: 1rem !important;
                line-height: 1.3 !important;
              }
              .blog-content :global(h2:first-of-type) {
                margin-top: 1rem !important;
              }
              .blog-content :global(a) {
                color: #2563eb !important;
                text-decoration: underline !important;
              }
              .blog-content :global(a:hover) {
                color: #1d4ed8 !important;
              }
            `}</style>
            
            {/* Author Bio */}
            <div className="p-6 bg-gray-50 rounded-lg flex items-center gap-6">
              <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                <Image src={authorImage} alt="Albin Hot" width={80} height={80} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2 text-black">About the Author</h3>
                <h4 className="text-lg font-medium mb-3 text-gray-800">Albin Hot</h4>
                <p className="text-gray-700 mb-4">
                  I am a 23 year old entrepreneur with multiple successful online ecommerce stores built through SEO. 
                  I am now helping others achieve the same success through my digital marketing expertise and proven strategies.
                </p>
                <div className="flex gap-3">
                  <Button as={Link} href="/work-with-me" className="text-sm">Work with me</Button>
                  <Button as={Link} href="/youtube" variant="secondary" className="text-sm">More Articles</Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sidebar - Table of Contents */}
          <div className="hidden lg:block w-1/3">
            <div className="sticky top-8">
              <TableOfContents />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}