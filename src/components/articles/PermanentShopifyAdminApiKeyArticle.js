import Link from 'next/link'
import CodeBlock from '@/components/CodeBlock'

const meta = {
  title: 'Zo krijg je een permanente Shopify Admin API key (lang-levende access token)',
  description:
    'Maak van je Shopify app-installatie een lang-levende Admin API access token (vaak “permanente API key” genoemd).',
}

export function getPermanentShopifyAdminApiKeyMeta() {
  return meta
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

export default function PermanentShopifyAdminApiKeyArticle() {
  return (
    <div className="prose prose-lg max-w-none text-gray-800">
      <ArticleNl />
    </div>
  )
}
