import Link from 'next/link'
import CodeBlock from '@/components/CodeBlock'

const copy = {
  en: {
    title: 'Get a Permanent Shopify Admin API Key (Long‑Lived Access Token)',
    description:
      'Create a Shopify app, capture the OAuth code with webhook.site, and exchange it in Postman to get a long‑lived Admin API access token.',
    summaryTitle: 'What you’ll end up with',
    summaryItems: [
      'A long‑lived Admin API access token (often called a “permanent API key”)',
      'The exact scopes you approved (so your token can only do what you allowed)',
    ],
    importantTitle: 'Important',
    importantBody:
      '“Permanent” means: no expiry timestamp. The token can still be revoked (uninstall the app, rotate credentials, remove access, change scopes). Treat it like a password.',
    prerequisitesTitle: 'Prerequisites',
    prerequisites: [
      'A Shopify Partners account (to create an app)',
      'A store to install the app on (dev store is perfect)',
      'Postman (or another HTTP client)',
      'A webhook.site URL (to capture the redirect + code)',
    ],
    stepsTitle: 'Step‑by‑step (manual OAuth)',
    steps: [
      {
        title: 'Create an app in the Shopify dev dashboard',
        body: (
          <>
            <p>
              Go to your Shopify <strong>Partners</strong> dashboard, create a new app, and give it a name (for example{' '}
              <strong>Do not delete</strong>).
            </p>
            <p>Select the scopes you need. Example: read/write products.</p>
          </>
        ),
      },
      {
        title: 'Set a redirect URL using webhook.site',
        body: (
          <>
            <p>
              Open <strong>webhook.site</strong> and copy your unique URL. Add that URL under your app’s{' '}
              <strong>Redirect URLs</strong>.
            </p>
            <p>
              The redirect URI must match <em>exactly</em> between your app settings and the OAuth URL you build later.
            </p>
          </>
        ),
      },
      {
        title: 'Release & install the app on your store',
        body: (
          <>
            <p>
              Release the app (so it’s installable), then install it on the store you want to access. After installing,
              open the app settings and copy:
            </p>
            <ul>
              <li>
                <strong>Client ID</strong>
              </li>
              <li>
                <strong>Client secret</strong>
              </li>
            </ul>
          </>
        ),
      },
      {
        title: 'Build the Shopify OAuth authorization URL',
        body: (
          <>
            <p>
              Take your store domain (the part before <code>.myshopify.com</code>) and build an authorization URL like
              this:
            </p>
            <CodeBlock title="Authorize URL template">
              {`https://{shop}.myshopify.com/admin/oauth/authorize?client_id={client_id}&scope={scopes}&redirect_uri={redirect_uri}&state={random_string}`}
            </CodeBlock>
            <ul>
              <li>
                <code>{'{shop}'}</code>: e.g. <code>your-store</code> (from <code>your-store.myshopify.com</code>)
              </li>
              <li>
                <code>{'{scopes}'}</code>: comma‑separated, e.g. <code>read_products,write_products</code>
              </li>
              <li>
                <code>{'{redirect_uri}'}</code>: your webhook.site URL (URL‑encoded if needed)
              </li>
              <li>
                <code>state</code>: any random value (recommended; in real apps you must validate it)
              </li>
            </ul>
            <div className="bg-amber-50 border-l-4 border-amber-400 p-4 my-6">
              <p className="text-sm text-amber-800">
                <strong>Tip:</strong> If you want a long‑lived (offline) token, don’t request an online token. In Shopify
                OAuth, that means you should <strong>not</strong> add <code>grant_options[]=per-user</code>.
              </p>
            </div>
          </>
        ),
      },
      {
        title: 'Open the URL, approve access, copy the code',
        body: (
          <>
            <p>
              Paste the authorization URL into your browser. You’ll be asked to approve the scopes for your app. After
              approval, Shopify redirects to webhook.site.
            </p>
            <p>
              In webhook.site, look at the query string parameters. Copy the value of <code>code</code>.
            </p>
          </>
        ),
      },
      {
        title: 'Exchange the code for the long‑lived access token (Postman)',
        body: (
          <>
            <p>Create a POST request in Postman:</p>
            <CodeBlock title="Access token endpoint">{`https://{shop}.myshopify.com/admin/oauth/access_token`}</CodeBlock>
            <p>
              Set Body → <strong>x-www-form-urlencoded</strong>:
            </p>
            <CodeBlock title="Form fields (x-www-form-urlencoded)">
              {`client_id:     {client_id}
client_secret: {client_secret}
code:          {code_from_webhook_site}`}
            </CodeBlock>
            <p>
              Send the request. The response contains <code>access_token</code> and <code>scope</code>. Save the{' '}
              <code>access_token</code> securely — that’s your “permanent Admin API key”.
            </p>
          </>
        ),
      },
    ],
    usageTitle: 'Use the token (quick examples)',
    usageRestTitle: 'REST',
    usageGraphqlTitle: 'GraphQL',
    restExampleTitle: 'REST request',
    graphqlExampleTitle: 'GraphQL request',
    securityTitle: 'Security notes',
    securityPoints: [
      'Never commit the token/client secret to git.',
      'Use the minimum scopes possible.',
      'If you change scopes, you’ll need to re-authorize and generate a new token.',
      'For real apps: validate the state param and handle redirects on your own domain — webhook.site is for quick testing.',
    ],
    backLinksTitle: 'Related',
    backToYoutube: 'Back to YouTube',
    backToResources: 'Back to Resources',
  },
  nl: {
    title: 'Zo krijg je een permanente Shopify Admin API key (lang‑levende access token)',
    description:
      'Maak een Shopify app aan, vang de OAuth code met webhook.site en wissel die in Postman om voor een lang‑levende Admin API access token.',
    summaryTitle: 'Wat je uiteindelijk hebt',
    summaryItems: [
      'Een lang‑levende Admin API access token (vaak “permanente API key” genoemd)',
      'De exacte scopes die je hebt goedgekeurd (dus alleen de rechten die je toestaat)',
    ],
    importantTitle: 'Belangrijk',
    importantBody:
      '“Permanent” betekent: geen verloopdatum. De token kan wél worden ingetrokken (app verwijderen, rechten aanpassen, scopes wijzigen). Behandel dit als een wachtwoord.',
    prerequisitesTitle: 'Benodigdheden',
    prerequisites: [
      'Een Shopify Partners account (om een app te maken)',
      'Een store waarop je de app installeert (dev store is ideaal)',
      'Postman (of een andere HTTP client)',
      'Een webhook.site URL (om de redirect + code te onderscheppen)',
    ],
    stepsTitle: 'Stap‑voor‑stap (handmatige OAuth)',
    steps: [
      {
        title: 'Maak een app in het Shopify dev dashboard',
        body: (
          <>
            <p>
              Ga naar je Shopify <strong>Partners</strong> dashboard, maak een nieuwe app en geef ’m een naam (bijvoorbeeld{' '}
              <strong>Do not delete</strong>).
            </p>
            <p>Selecteer de scopes die je nodig hebt. Voorbeeld: products lezen/schrijven.</p>
          </>
        ),
      },
      {
        title: 'Stel de redirect URL in via webhook.site',
        body: (
          <>
            <p>
              Open <strong>webhook.site</strong> en kopieer je unieke URL. Voeg die URL toe bij de{' '}
              <strong>Redirect URLs</strong> van je app.
            </p>
            <p>
              De redirect URI moet <em>exact</em> overeenkomen tussen je app-instellingen en de OAuth URL die je straks
              maakt.
            </p>
          </>
        ),
      },
      {
        title: 'Release & installeer de app op je store',
        body: (
          <>
            <p>
              Release de app (zodat hij installeerbaar is) en installeer hem daarna op de store die je wilt koppelen.
              Open daarna de app-instellingen en kopieer:
            </p>
            <ul>
              <li>
                <strong>Client ID</strong>
              </li>
              <li>
                <strong>Client secret</strong>
              </li>
            </ul>
          </>
        ),
      },
      {
        title: 'Maak de Shopify OAuth authorize URL',
        body: (
          <>
            <p>
              Pak je store domein (het deel vóór <code>.myshopify.com</code>) en bouw een authorize URL zoals deze:
            </p>
            <CodeBlock title="Authorize URL template">
              {`https://{shop}.myshopify.com/admin/oauth/authorize?client_id={client_id}&scope={scopes}&redirect_uri={redirect_uri}&state={random_string}`}
            </CodeBlock>
            <ul>
              <li>
                <code>{'{shop}'}</code>: bijv. <code>jouw-store</code> (van <code>jouw-store.myshopify.com</code>)
              </li>
              <li>
                <code>{'{scopes}'}</code>: komma-gescheiden, bijv. <code>read_products,write_products</code>
              </li>
              <li>
                <code>{'{redirect_uri}'}</code>: je webhook.site URL (URL-encoded indien nodig)
              </li>
              <li>
                <code>state</code>: willekeurige waarde (aanrader; in echte apps moet je dit valideren)
              </li>
            </ul>
            <div className="bg-amber-50 border-l-4 border-amber-400 p-4 my-6">
              <p className="text-sm text-amber-800">
                <strong>Tip:</strong> Wil je een lang‑levende (offline) token, vraag dan geen online token aan. In Shopify
                OAuth betekent dat meestal dat je <strong>geen</strong> <code>grant_options[]=per-user</code> toevoegt.
              </p>
            </div>
          </>
        ),
      },
      {
        title: 'Open de URL, keur toegang goed en kopieer de code',
        body: (
          <>
            <p>
              Plak de authorize URL in je browser. Je krijgt een scherm om de scopes goed te keuren. Na akkoord redirect
              Shopify naar webhook.site.
            </p>
            <p>
              In webhook.site zie je query parameters. Kopieer de waarde van <code>code</code>.
            </p>
          </>
        ),
      },
      {
        title: 'Wissel de code om voor de lang‑levende access token (Postman)',
        body: (
          <>
            <p>Maak een POST request in Postman:</p>
            <CodeBlock title="Access token endpoint">{`https://{shop}.myshopify.com/admin/oauth/access_token`}</CodeBlock>
            <p>
              Kies Body → <strong>x-www-form-urlencoded</strong>:
            </p>
            <CodeBlock title="Form velden (x-www-form-urlencoded)">
              {`client_id:     {client_id}
client_secret: {client_secret}
code:          {code_van_webhook_site}`}
            </CodeBlock>
            <p>
              Verstuur het request. In de response staat <code>access_token</code> en <code>scope</code>. Bewaar de{' '}
              <code>access_token</code> veilig — dat is je “permanente Admin API key”.
            </p>
          </>
        ),
      },
    ],
    usageTitle: 'Token gebruiken (snelle voorbeelden)',
    usageRestTitle: 'REST',
    usageGraphqlTitle: 'GraphQL',
    restExampleTitle: 'REST request',
    graphqlExampleTitle: 'GraphQL request',
    securityTitle: 'Security notes',
    securityPoints: [
      'Commit nooit je token/client secret naar git.',
      'Gebruik zo min mogelijk scopes.',
      'Als je scopes wijzigt, moet je opnieuw autoriseren en een nieuwe token genereren.',
      'Voor echte apps: valideer de state param en gebruik je eigen redirect domein — webhook.site is voor snelle tests.',
    ],
    backLinksTitle: 'Gerelateerd',
    backToYoutube: 'Terug naar YouTube',
    backToResources: 'Terug naar Resources',
  },
}

function pickLocale(locale) {
  return locale === 'nl' ? 'nl' : 'en'
}

export function getPermanentShopifyAdminApiKeyMeta(locale) {
  const t = copy[pickLocale(locale)]
  return { title: t.title, description: t.description }
}

export default function PermanentShopifyAdminApiKeyArticle({ locale = 'en' }) {
  const t = copy[pickLocale(locale)]

  return (
    <div className="prose prose-lg max-w-none text-gray-800">
      <p className="text-xl text-gray-600 leading-relaxed">{t.description}</p>

      <h2>{t.summaryTitle}</h2>
      <ul>
        {t.summaryItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
        <p className="text-sm text-blue-700">
          <strong>{t.importantTitle}:</strong> {t.importantBody}
        </p>
      </div>

      <h2>{t.prerequisitesTitle}</h2>
      <ul>
        {t.prerequisites.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h2>{t.stepsTitle}</h2>
      <ol>
        {t.steps.map((step) => (
          <li key={step.title}>
            <strong>{step.title}</strong>
            {step.body}
          </li>
        ))}
      </ol>

      <h2>{t.usageTitle}</h2>
      <h3>{t.usageRestTitle}</h3>
      <CodeBlock title={t.restExampleTitle}>
        {`GET https://{shop}.myshopify.com/admin/api/2025-01/products.json
X-Shopify-Access-Token: {access_token}`}
      </CodeBlock>
      <h3>{t.usageGraphqlTitle}</h3>
      <CodeBlock title={t.graphqlExampleTitle}>
        {`POST https://{shop}.myshopify.com/admin/api/2025-01/graphql.json
Content-Type: application/json
X-Shopify-Access-Token: {access_token}

{"query":"{ shop { name } }"}`}
      </CodeBlock>

      <h2>{t.securityTitle}</h2>
      <ul>
        {t.securityPoints.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h2>{t.backLinksTitle}</h2>
      <ul>
        <li>
          <Link href="/youtube" className="text-blue-600 hover:text-blue-800">
            {t.backToYoutube}
          </Link>
        </li>
        <li>
          <Link href="/resources" className="text-blue-600 hover:text-blue-800">
            {t.backToResources}
          </Link>
        </li>
      </ul>
    </div>
  )
}

