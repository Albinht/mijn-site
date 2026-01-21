import Link from 'next/link'
import CodeBlock from '@/components/CodeBlock'

const meta = {
  en: {
    title: 'Get a Permanent Shopify Admin API Key (Long‑Lived Access Token)',
    description:
      'Turn your Shopify app install into a long‑lived Admin API access token (often called a “permanent API key”).',
  },
  nl: {
    title: 'Zo krijg je een permanente Shopify Admin API key (lang‑levende access token)',
    description:
      'Maak van je Shopify app-installatie een lang‑levende Admin API access token (vaak “permanente API key” genoemd).',
  },
}

function pickLocale(locale) {
  return locale === 'nl' ? 'nl' : 'en'
}

export function getPermanentShopifyAdminApiKeyMeta(locale) {
  return meta[pickLocale(locale)]
}

function Toc({ title, items }) {
  return (
    <div className="not-prose bg-gray-50 border border-gray-200 rounded-lg p-5 my-6">
      <div className="text-sm font-semibold text-gray-900 mb-3">{title}</div>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.href}>
            <a href={item.href} className="text-sm text-[#1795FF] hover:underline">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

function ArticleEn() {
  return (
    <>
      <p className="text-xl text-gray-600 leading-relaxed">
        This guide shows the fastest way to get a <strong>long‑lived (offline)</strong> Shopify Admin API access token
        for your store. People often call this a “permanent Shopify API key”, but technically it’s an{' '}
        <strong>access token</strong> (usually starting with <code>shpat_</code>).
      </p>

      <Toc
        title="Contents"
        items={[
          { href: '#what-you-get', label: 'What you’ll get' },
          { href: '#what-permanent-means', label: 'What “permanent” means' },
          { href: '#prerequisites', label: 'Prerequisites' },
          { href: '#step-by-step', label: 'Step-by-step' },
          { href: '#test-token', label: 'Test the token' },
          { href: '#troubleshooting', label: 'Troubleshooting' },
          { href: '#security', label: 'Security checklist' },
        ]}
      />

      <h2 id="what-you-get">What you’ll get</h2>
      <ul>
        <li>A long‑lived Admin API access token (offline token)</li>
        <li>The exact scopes you approved (least privilege)</li>
      </ul>

      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
        <p className="text-sm text-blue-700">
          <strong id="what-permanent-means">Important:</strong> “Permanent” means there’s no expiry timestamp. The token
          can still be revoked (uninstall the app, rotate credentials, or change scopes). Treat it like a password.
        </p>
      </div>

      <h2 id="prerequisites">Prerequisites</h2>
      <ul>
        <li>A Shopify Partners account (to create an app)</li>
        <li>A store to install the app on (dev store is perfect)</li>
        <li>Postman (or any HTTP client)</li>
        <li>
          A <strong>webhook.site</strong> URL (used as a quick redirect URI to capture the <code>code</code>)
        </li>
      </ul>

      <h2 id="step-by-step">Step-by-step (manual OAuth)</h2>

      <h3 id="create-app">1) Create an app + choose scopes</h3>
      <p>
        In your Shopify <strong>Partners</strong> dashboard, create an app and choose the scopes you need (example:{' '}
        <code>read_products</code>, <code>write_products</code>). Keep scopes minimal.
      </p>

      <h3 id="redirect-uri">2) Set the redirect URI (webhook.site)</h3>
      <p>
        Open <strong>webhook.site</strong> and copy your unique URL. Add that URL under your app’s{' '}
        <strong>Redirect URLs</strong>.
      </p>
      <p>
        The redirect URI must match <em>exactly</em> between your app settings and the authorize URL you build later.
      </p>

      <h3 id="install-app">3) Release and install the app</h3>
      <p>
        Release the app so it becomes installable, then install it on your target store. After installing, open the app
        settings and copy:
      </p>
      <ul>
        <li>
          <strong>Client ID</strong>
        </li>
        <li>
          <strong>Client secret</strong>
        </li>
      </ul>

      <h3 id="authorize-url">4) Build the authorize URL</h3>
      <p>Use your store domain (the part before <code>.myshopify.com</code>) and build this URL:</p>
      <CodeBlock title="Authorize URL template">
        {`https://{shop}.myshopify.com/admin/oauth/authorize?client_id={client_id}&scope={scopes}&redirect_uri={redirect_uri}&state={random_string}`}
      </CodeBlock>
      <ul>
        <li>
          <code>{'{shop}'}</code>: for example <code>your-store</code>
        </li>
        <li>
          <code>{'{scopes}'}</code>: comma-separated, for example <code>read_products,write_products</code>
        </li>
        <li>
          <code>{'{redirect_uri}'}</code>: your webhook.site URL (URL-encode if needed)
        </li>
        <li>
          <code>state</code>: random value (recommended; real apps must validate it)
        </li>
      </ul>
      <div className="bg-amber-50 border-l-4 border-amber-400 p-4 my-6">
        <p className="text-sm text-amber-800">
          <strong>Tip:</strong> For a long‑lived <strong>offline</strong> token, don’t request a per‑user token. In
          practice: don’t add <code>grant_options[]=per-user</code>.
        </p>
      </div>

      <h3 id="get-code">5) Approve access and copy the code</h3>
      <p>
        Open the authorize URL in your browser and approve the scopes. Shopify redirects to webhook.site. In the request
        URL (query string), copy the value of <code>code</code>.
      </p>

      <h3 id="exchange-token">6) Exchange code for the access token (Postman)</h3>
      <p>Create a POST request in Postman:</p>
      <CodeBlock title="Access token endpoint">{`https://{shop}.myshopify.com/admin/oauth/access_token`}</CodeBlock>

      <p>
        Body → <strong>x-www-form-urlencoded</strong>:
      </p>
      <CodeBlock title="Form fields (x-www-form-urlencoded)">
        {`client_id:     {client_id}
client_secret: {client_secret}
code:          {code_from_webhook_site}`}
      </CodeBlock>

      <p>
        Send the request. The response returns <code>access_token</code> and <code>scope</code>. Store the{' '}
        <code>access_token</code> securely.
      </p>

      <h2 id="test-token">Test the token</h2>
      <p>
        Use your token in REST or GraphQL (replace <code>{'{api_version}'}</code> with the version you’re using):
      </p>

      <h3>REST</h3>
      <CodeBlock title="REST request">
        {`GET https://{shop}.myshopify.com/admin/api/{api_version}/products.json
X-Shopify-Access-Token: {access_token}`}
      </CodeBlock>

      <h3>GraphQL</h3>
      <CodeBlock title="GraphQL request">
        {`POST https://{shop}.myshopify.com/admin/api/{api_version}/graphql.json
Content-Type: application/json
X-Shopify-Access-Token: {access_token}

{"query":"{ shop { name } }"}`}
      </CodeBlock>

      <h2 id="troubleshooting">Troubleshooting</h2>
      <ul>
        <li>
          <strong>redirect_uri mismatch</strong>: ensure the redirect URI is identical (and URL-encoded when needed).
        </li>
        <li>
          <strong>invalid_scope</strong>: your scopes must be valid and comma-separated; re-authorize after changing
          scopes.
        </li>
        <li>
          <strong>invalid code</strong>: the authorization code can only be exchanged once; restart from the authorize
          URL.
        </li>
        <li>
          <strong>401/403 on API calls</strong>: token revoked, app uninstalled, or missing scopes.
        </li>
      </ul>

      <h2 id="security">Security checklist</h2>
      <ul>
        <li>Never commit the token or client secret to git.</li>
        <li>Use the minimum scopes possible.</li>
        <li>If you change scopes, re-authorize and generate a new token.</li>
        <li>For production apps: validate the state parameter and use a redirect URI you control (webhook.site is for quick testing).</li>
      </ul>

      <h2>Related</h2>
      <ul>
        <li>
          <Link href="/youtube/permanent-shopify-admin-api-key" className="text-blue-600 hover:text-blue-800">
            Watch the video tutorial
          </Link>
        </li>
        <li>
          <Link href="/resources/ecommerce" className="text-blue-600 hover:text-blue-800">
            E-commerce resources
          </Link>
        </li>
      </ul>
    </>
  )
}

function ArticleNl() {
  return (
    <>
      <p className="text-xl text-gray-600 leading-relaxed">
        In deze guide laat ik je zien hoe je snel een <strong>lang‑levende (offline)</strong> Shopify Admin API access
        token krijgt voor je store. Dit wordt vaak een “permanente Shopify API key” genoemd, maar technisch gezien is
        het een <strong>access token</strong> (meestal beginnend met <code>shpat_</code>).
      </p>

      <Toc
        title="Inhoud"
        items={[
          { href: '#wat-je-krijgt', label: 'Wat je krijgt' },
          { href: '#wat-permanent-betekent', label: 'Wat “permanent” betekent' },
          { href: '#benodigdheden', label: 'Benodigdheden' },
          { href: '#stap-voor-stap', label: 'Stap-voor-stap' },
          { href: '#token-testen', label: 'Token testen' },
          { href: '#problemen-oplossen', label: 'Problemen oplossen' },
          { href: '#security-checklist', label: 'Security checklist' },
        ]}
      />

      <h2 id="wat-je-krijgt">Wat je krijgt</h2>
      <ul>
        <li>Een lang‑levende Admin API access token (offline token)</li>
        <li>Exact de scopes die je hebt goedgekeurd (least privilege)</li>
      </ul>

      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
        <p className="text-sm text-blue-700">
          <strong id="wat-permanent-betekent">Belangrijk:</strong> “Permanent” betekent dat er geen verloopdatum is. De
          token kan wel worden ingetrokken (app verwijderen, credentials roteren of scopes wijzigen). Behandel dit als
          een wachtwoord.
        </p>
      </div>

      <h2 id="benodigdheden">Benodigdheden</h2>
      <ul>
        <li>Een Shopify Partners account (om een app te maken)</li>
        <li>Een store om de app op te installeren (dev store is ideaal)</li>
        <li>Postman (of een andere HTTP client)</li>
        <li>
          Een <strong>webhook.site</strong> URL (als snelle redirect URI om de <code>code</code> te vangen)
        </li>
      </ul>

      <h2 id="stap-voor-stap">Stap-voor-stap (handmatige OAuth)</h2>

      <h3 id="app-maken">1) App maken + scopes kiezen</h3>
      <p>
        Maak in je Shopify <strong>Partners</strong> dashboard een app aan en kies alleen de scopes die je echt nodig
        hebt (bijvoorbeeld <code>read_products</code>, <code>write_products</code>).
      </p>

      <h3 id="redirect-instellen">2) Redirect URI instellen (webhook.site)</h3>
      <p>
        Open <strong>webhook.site</strong>, kopieer je unieke URL en zet die bij de <strong>Redirect URLs</strong> van je
        app.
      </p>
      <p>
        De redirect URI moet <em>exact</em> matchen met de authorize URL die je straks bouwt.
      </p>

      <h3 id="app-installeren">3) Release en installeer de app</h3>
      <p>
        Release de app zodat je hem kunt installeren. Installeer hem daarna op je store. Kopieer daarna uit de app
        instellingen:
      </p>
      <ul>
        <li>
          <strong>Client ID</strong>
        </li>
        <li>
          <strong>Client secret</strong>
        </li>
      </ul>

      <h3 id="authorize-url-maken">4) Authorize URL maken</h3>
      <p>Gebruik je store domein (het deel vóór <code>.myshopify.com</code>) en bouw deze URL:</p>
      <CodeBlock title="Authorize URL template">
        {`https://{shop}.myshopify.com/admin/oauth/authorize?client_id={client_id}&scope={scopes}&redirect_uri={redirect_uri}&state={random_string}`}
      </CodeBlock>
      <ul>
        <li>
          <code>{'{shop}'}</code>: bijvoorbeeld <code>jouw-store</code>
        </li>
        <li>
          <code>{'{scopes}'}</code>: komma-gescheiden, bijvoorbeeld <code>read_products,write_products</code>
        </li>
        <li>
          <code>{'{redirect_uri}'}</code>: je webhook.site URL (URL-encode indien nodig)
        </li>
        <li>
          <code>state</code>: willekeurige waarde (aanrader; echte apps moeten dit valideren)
        </li>
      </ul>
      <div className="bg-amber-50 border-l-4 border-amber-400 p-4 my-6">
        <p className="text-sm text-amber-800">
          <strong>Tip:</strong> Voor een lang‑levende <strong>offline</strong> token: vraag geen per‑user token aan. In
          praktijk: voeg geen <code>grant_options[]=per-user</code> toe.
        </p>
      </div>

      <h3 id="code-kopieren">5) Toegang goedkeuren en code kopiëren</h3>
      <p>
        Open de authorize URL in je browser en keur de scopes goed. Shopify redirect naar webhook.site. Kopieer in de
        query string de waarde van <code>code</code>.
      </p>

      <h3 id="token-omwisselen">6) Code omwisselen voor access token (Postman)</h3>
      <p>Maak een POST request in Postman:</p>
      <CodeBlock title="Access token endpoint">{`https://{shop}.myshopify.com/admin/oauth/access_token`}</CodeBlock>

      <p>
        Body → <strong>x-www-form-urlencoded</strong>:
      </p>
      <CodeBlock title="Form velden (x-www-form-urlencoded)">
        {`client_id:     {client_id}
client_secret: {client_secret}
code:          {code_van_webhook_site}`}
      </CodeBlock>

      <p>
        Verstuur het request. In de response staan <code>access_token</code> en <code>scope</code>. Bewaar de{' '}
        <code>access_token</code> veilig.
      </p>

      <h2 id="token-testen">Token testen</h2>
      <p>
        Gebruik je token in REST of GraphQL (vervang <code>{'{api_version}'}</code> door de versie die je gebruikt):
      </p>

      <h3>REST</h3>
      <CodeBlock title="REST request">
        {`GET https://{shop}.myshopify.com/admin/api/{api_version}/products.json
X-Shopify-Access-Token: {access_token}`}
      </CodeBlock>

      <h3>GraphQL</h3>
      <CodeBlock title="GraphQL request">
        {`POST https://{shop}.myshopify.com/admin/api/{api_version}/graphql.json
Content-Type: application/json
X-Shopify-Access-Token: {access_token}

{"query":"{ shop { name } }"}`}
      </CodeBlock>

      <h2 id="problemen-oplossen">Problemen oplossen</h2>
      <ul>
        <li>
          <strong>redirect_uri mismatch</strong>: zorg dat de redirect URI identiek is (en URL-encoded indien nodig).
        </li>
        <li>
          <strong>invalid_scope</strong>: scopes moeten valide zijn en komma-gescheiden; na scope-wijziging opnieuw autoriseren.
        </li>
        <li>
          <strong>invalid code</strong>: een code kun je maar 1x omwisselen; start opnieuw vanaf de authorize URL.
        </li>
        <li>
          <strong>401/403 bij API calls</strong>: token ingetrokken, app gedeïnstalleerd of scopes missen.
        </li>
      </ul>

      <h2 id="security-checklist">Security checklist</h2>
      <ul>
        <li>Commit nooit je token of client secret naar git.</li>
        <li>Gebruik zo min mogelijk scopes.</li>
        <li>Als je scopes wijzigt: opnieuw autoriseren en een nieuwe token maken.</li>
        <li>Voor productie: valideer de state parameter en gebruik een redirect URI die je zelf beheert (webhook.site is voor snelle tests).</li>
      </ul>

      <h2>Gerelateerd</h2>
      <ul>
        <li>
          <Link href="/youtube/permanent-shopify-admin-api-key" className="text-blue-600 hover:text-blue-800">
            Bekijk de video tutorial
          </Link>
        </li>
        <li>
          <Link href="/resources/ecommerce" className="text-blue-600 hover:text-blue-800">
            E-commerce resources
          </Link>
        </li>
      </ul>
    </>
  )
}

export default function PermanentShopifyAdminApiKeyArticle({ locale = 'en' }) {
  const activeLocale = pickLocale(locale)

  return (
    <div className="prose prose-lg max-w-none text-gray-800">
      {activeLocale === 'nl' ? <ArticleNl /> : <ArticleEn />}
    </div>
  )
}
