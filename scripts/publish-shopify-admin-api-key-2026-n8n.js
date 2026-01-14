const fs = require('fs')
const path = require('path')

function isValidPostgresUrl(value) {
  return typeof value === 'string' && (value.startsWith('postgres://') || value.startsWith('postgresql://'))
}

function loadDatabaseUrl() {
  if (isValidPostgresUrl(process.env.DATABASE_URL)) return

  const candidates = ['.env.local', '.env']
  for (const filename of candidates) {
    const filePath = path.join(process.cwd(), filename)
    if (!fs.existsSync(filePath)) continue

    const env = fs.readFileSync(filePath, 'utf8')
    const match = env.match(/^\s*DATABASE_URL\s*=\s*"?([^"\n]+)"?\s*$/m)
    if (match) {
      process.env.DATABASE_URL = match[1]
      return
    }
  }

  if (process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL was found but is not a valid Postgres URL (expected postgres:// or postgresql://)')
  }

  throw new Error('DATABASE_URL not found in process.env, .env.local, or .env')
}

loadDatabaseUrl()

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const fence = '```'

const article = {
  slug: 'shopify-admin-api-key-2026-n8n',
  topic: 'Shopify',
  status: 'PUBLISHED',
  title: 'How to Get the Shopify Admin API Key in 2026 (Client Credentials) for n8n',
  content: `
## Shopify changed the “API key” flow

If you used the old “custom app development” option inside Shopify settings, you’ve probably noticed the flow has changed. In 2026, Shopify pushes app creation through the Shopify Dev Dashboard.

You still end up with the same three things you need for automation:
- \`client_id\`
- \`client_secret\`
- a short-lived Admin API \`access_token\`

This guide shows the exact steps to get that token and use it in n8n.

## What you need before you start

- Admin access to the Shopify store
- The Admin API scopes you need (products, orders, customers, etc.)
- Postman (or curl) to make one POST request
- A secure place to store the secret (n8n credentials / environment variables)

## Step 1 — Create an app in the Shopify Dev Dashboard

1. Open your Shopify store admin.
2. Click the **Dev dashboard** link (top right).
3. Click **Create an app** and give it a name (for example: “n8n automation”).

## Step 2 — Choose the Admin API scopes

In the app settings, add only the scopes you need. Examples for common n8n automations:

- Read products: \`read_products\`
- Create/update products: \`write_products\`
- Read orders: \`read_orders\`
- Fulfill orders: \`write_fulfillments\`

## Step 3 — Release and install the app

- Click **Release**.
- Install the app on your store.

After installation you’ll see a **Client ID** and **Client secret** in the app settings.

## Step 4 — Copy your \`{shop}.myshopify.com\` domain

In Shopify go to **Settings → Domains** and copy your \`{shop}.myshopify.com\` domain.

You’ll use that in the token request URL.

## Step 5 — Request the Admin API access token

### Option A: Postman

1. Create a new request and set the method to **POST**.
2. URL:
\`https://{shop}.myshopify.com/admin/oauth/access_token\`
3. Body → **x-www-form-urlencoded**:
- \`grant_type\` = \`client_credentials\`
- \`client_id\` = your Client ID
- \`client_secret\` = your Client secret
4. Click **Send**.

You’ll get a JSON response with \`access_token\`, \`scope\`, and \`expires_in\` (usually \`86400\` seconds = 24 hours).

### Option B: curl

${fence}bash
curl -X POST "https://{shop}.myshopify.com/admin/oauth/access_token" \\
  -H "Content-Type: application/x-www-form-urlencoded" \\
  --data "grant_type=client_credentials&client_id=YOUR_CLIENT_ID&client_secret=YOUR_CLIENT_SECRET"
${fence}

## Step 6 — Use the token in n8n

### Shopify node

If you use the Shopify node in n8n, paste the \`access_token\` into the credential field and set the shop domain.

### HTTP Request node (quick test)

Make any Admin API request and add this header:
- \`X-Shopify-Access-Token: <access_token>\`

A simple test endpoint that returns your granted scopes:

${fence}bash
curl -X GET "https://{shop}.myshopify.com/admin/oauth/access_scopes.json" \\
  -H "X-Shopify-Access-Token: YOUR_ACCESS_TOKEN"
${fence}

## Token expiry (important)

This token is short-lived. When \`expires_in\` is \`86400\`, it expires after 24 hours.

- If you see 401/403 errors the next day, generate a new token the same way.
- For automation, consider an n8n workflow that refreshes the token on a schedule and stores it in a credential/environment variable.

## Troubleshooting

- **401 “invalid_client”**: wrong \`client_id\` or \`client_secret\`
- **404**: wrong \`{shop}.myshopify.com\` domain
- **405**: request method is not POST on the token endpoint
- **403 “access denied”**: missing scopes or app not installed

## Security notes

- Treat \`client_secret\` like a password.
- Never commit tokens or secrets to Git.
- Keep scopes minimal and rotate credentials if exposed.
`.trim(),
  translations: {
    nl: {
      title: 'Shopify Admin API key ophalen in 2026 (Client Credentials) voor n8n',
      topic: 'Shopify',
      metaTitle: 'Shopify Admin API key in 2026 ophalen (n8n)',
      metaDescription: 'Maak een Shopify-app in de Dev Dashboard, kopieer client ID/secret, vraag /admin/oauth/access_token op en gebruik de 24-uurs token in n8n.',
      content: `
## Shopify heeft de “API key” flow aangepast

Als je de oude “custom app development” optie gebruikte in Shopify-instellingen, dan heb je waarschijnlijk gezien dat de flow is veranderd. In 2026 verloopt app creatie via de Shopify Dev Dashboard.

Je krijgt nog steeds dezelfde drie dingen die je nodig hebt voor automation:
- \`client_id\`
- \`client_secret\`
- een kortlevende Admin API \`access_token\`

In deze handleiding vind je de exacte stappen om die token te krijgen en te gebruiken in n8n.

## Wat je nodig hebt voordat je start

- Admin toegang tot de Shopify store
- De juiste Admin API scopes (producten, orders, klanten, etc.)
- Postman (of curl) om één POST request te doen
- Een veilige plek om je secret op te slaan (n8n credentials / environment variables)

## Stap 1 — Maak een app in de Shopify Dev Dashboard

1. Open je Shopify admin.
2. Klik op **Dev dashboard** (rechtsboven).
3. Klik **Create an app** en geef je app een naam (bijv. “n8n automation”).

## Stap 2 — Kies de Admin API scopes

Voeg in de app-instellingen alleen de scopes toe die je écht nodig hebt. Voorbeelden:

- Producten lezen: \`read_products\`
- Producten aanmaken/bijwerken: \`write_products\`
- Orders lezen: \`read_orders\`
- Orders fulfillen: \`write_fulfillments\`

## Stap 3 — Release en installeer de app

- Klik **Release**.
- Installeer de app op je store.

Na installatie zie je een **Client ID** en **Client secret** in de app-instellingen.

## Stap 4 — Kopieer je \`{shop}.myshopify.com\` domein

Ga in Shopify naar **Instellingen → Domeinen** en kopieer je \`{shop}.myshopify.com\` domein.

Die heb je nodig in de token URL.

## Stap 5 — Vraag de Admin API access token op

### Optie A: Postman

1. Maak een nieuw request en zet de methode op **POST**.
2. URL:
\`https://{shop}.myshopify.com/admin/oauth/access_token\`
3. Body → **x-www-form-urlencoded**:
- \`grant_type\` = \`client_credentials\`
- \`client_id\` = je Client ID
- \`client_secret\` = je Client secret
4. Klik **Send**.

Je krijgt een JSON response met \`access_token\`, \`scope\` en \`expires_in\` (meestal \`86400\` seconden = 24 uur).

### Optie B: curl

${fence}bash
curl -X POST "https://{shop}.myshopify.com/admin/oauth/access_token" \\
  -H "Content-Type: application/x-www-form-urlencoded" \\
  --data "grant_type=client_credentials&client_id=YOUR_CLIENT_ID&client_secret=YOUR_CLIENT_SECRET"
${fence}

## Stap 6 — Gebruik de token in n8n

### Shopify node

Gebruik je de Shopify node in n8n? Plak dan de \`access_token\` in je credentials en zet je shop domein goed.

### HTTP Request node (snelle test)

Voeg deze header toe:
- \`X-Shopify-Access-Token: <access_token>\`

Test endpoint om je scopes te checken:

${fence}bash
curl -X GET "https://{shop}.myshopify.com/admin/oauth/access_scopes.json" \\
  -H "X-Shopify-Access-Token: YOUR_ACCESS_TOKEN"
${fence}

## Token verloop (belangrijk)

Deze token is kortlevend. Als \`expires_in\` \`86400\` is, verloopt hij na 24 uur.

- Zie je de volgende dag 401/403 errors? Genereer dan opnieuw een token op dezelfde manier.
- Voor automatisering kun je in n8n een workflow plannen die de token automatisch ververst en opslaat.

## Troubleshooting

- **401 “invalid_client”**: verkeerde \`client_id\` of \`client_secret\`
- **404**: verkeerd \`{shop}.myshopify.com\` domein
- **405**: methode staat niet op POST bij de token endpoint
- **403 “access denied”**: scopes missen of app is niet geïnstalleerd

## Security notes

- Behandel \`client_secret\` als een wachtwoord.
- Commit nooit tokens of secrets naar Git.
- Houd scopes minimaal en roteer credentials als ze gelekt zijn.
`.trim(),
    },
    de: {
      title: 'Shopify Admin API Key in 2026 erhalten (Client Credentials) für n8n',
      topic: 'Shopify',
      metaTitle: 'Shopify Admin API Key 2026 (n8n)',
      metaDescription: 'Erstelle eine Shopify-App im Dev Dashboard, kopiere Client ID/Secret, rufe /admin/oauth/access_token ab und nutze das 24-Stunden-Token in n8n.',
      content: `
## Shopify hat den “API-Key” Ablauf geändert

Wenn du früher die alte Option “custom app development” in den Shopify-Einstellungen genutzt hast, ist dir sicher aufgefallen, dass sich der Ablauf geändert hat. In 2026 läuft die App-Erstellung über das Shopify Dev Dashboard.

Du bekommst weiterhin die drei Dinge, die du für Automationen brauchst:
- \`client_id\`
- \`client_secret\`
- ein kurzlebiges Admin API \`access_token\`

Diese Anleitung zeigt dir die Schritte, um das Token zu erhalten und in n8n zu verwenden.

## Voraussetzungen

- Admin-Zugriff auf den Shopify Store
- Die benötigten Admin API Scopes (Produkte, Bestellungen, Kunden, usw.)
- Postman (oder curl) für einen POST Request
- Einen sicheren Ort für Secrets (n8n Credentials / Environment Variables)

## Schritt 1 — App im Shopify Dev Dashboard erstellen

1. Öffne dein Shopify Admin.
2. Klicke oben rechts auf **Dev dashboard**.
3. Klicke **Create an app** und gib der App einen Namen (z.B. “n8n automation”).

## Schritt 2 — Admin API Scopes auswählen

Füge nur die Scopes hinzu, die du wirklich brauchst. Beispiele:

- Produkte lesen: \`read_products\`
- Produkte erstellen/ändern: \`write_products\`
- Bestellungen lesen: \`read_orders\`
- Fulfillments schreiben: \`write_fulfillments\`

## Schritt 3 — App releasen und installieren

- Klicke **Release**.
- Installiere die App in deinem Store.

Nach der Installation siehst du **Client ID** und **Client secret** in den App-Einstellungen.

## Schritt 4 — \`{shop}.myshopify.com\` Domain kopieren

In Shopify: **Einstellungen → Domains** und dort deine \`{shop}.myshopify.com\` Domain kopieren.

Diese Domain brauchst du für die Token-URL.

## Schritt 5 — Admin API Access Token anfordern

### Option A: Postman

1. Neues Request erstellen, Methode **POST**.
2. URL:
\`https://{shop}.myshopify.com/admin/oauth/access_token\`
3. Body → **x-www-form-urlencoded**:
- \`grant_type\` = \`client_credentials\`
- \`client_id\` = deine Client ID
- \`client_secret\` = dein Client secret
4. **Send** klicken.

Du erhältst eine JSON-Antwort mit \`access_token\`, \`scope\` und \`expires_in\` (meist \`86400\` Sekunden = 24 Stunden).

### Option B: curl

${fence}bash
curl -X POST "https://{shop}.myshopify.com/admin/oauth/access_token" \\
  -H "Content-Type: application/x-www-form-urlencoded" \\
  --data "grant_type=client_credentials&client_id=YOUR_CLIENT_ID&client_secret=YOUR_CLIENT_SECRET"
${fence}

## Schritt 6 — Token in n8n verwenden

### Shopify Node

Wenn du den Shopify Node in n8n nutzt, trage das \`access_token\` in den Credentials ein und setze die Shop-Domain.

### HTTP Request Node (schneller Test)

Header:
- \`X-Shopify-Access-Token: <access_token>\`

Test-Endpoint, um die Scopes zu prüfen:

${fence}bash
curl -X GET "https://{shop}.myshopify.com/admin/oauth/access_scopes.json" \\
  -H "X-Shopify-Access-Token: YOUR_ACCESS_TOKEN"
${fence}

## Token-Ablauf (wichtig)

Dieses Token ist kurzlebig. Wenn \`expires_in\` \`86400\` ist, läuft es nach 24 Stunden ab.

- Wenn du am nächsten Tag 401/403 Fehler siehst, generiere ein neues Token auf die gleiche Weise.
- Für Automationen kannst du in n8n einen geplanten Workflow bauen, der das Token regelmäßig neu erstellt und sicher speichert.

## Troubleshooting

- **401 “invalid_client”**: falsche \`client_id\` oder \`client_secret\`
- **404**: falsche \`{shop}.myshopify.com\` Domain
- **405**: Methode ist nicht POST am Token-Endpoint
- **403 “access denied”**: Scopes fehlen oder App nicht installiert

## Sicherheitshinweise

- Behandle \`client_secret\` wie ein Passwort.
- Tokens/Secrets niemals in Git committen.
- Scopes minimal halten und Credentials rotieren, wenn sie geleakt sind.
`.trim(),
    },
    sv: {
      title: 'Så hämtar du Shopify Admin API-nyckeln 2026 (Client Credentials) för n8n',
      topic: 'Shopify',
      metaTitle: 'Shopify Admin API-nyckel 2026 (n8n)',
      metaDescription: 'Skapa en Shopify-app i Dev Dashboard, kopiera Client ID/Secret, hämta /admin/oauth/access_token och använd 24-timmars-token i n8n.',
      content: `
## Shopify har ändrat “API key”-flödet

Om du använde den gamla “custom app development”-vägen i Shopify-inställningarna har du säkert märkt att flödet har ändrats. Under 2026 sker app-skapandet via Shopify Dev Dashboard.

Du behöver fortfarande tre saker för automation:
- \`client_id\`
- \`client_secret\`
- en kortlivad Admin API \`access_token\`

Här är stegen för att hämta token och använda den i n8n.

## Innan du börjar

- Adminåtkomst till Shopify-butiken
- Rätt Admin API-scopes (produkter, ordrar, kunder, osv.)
- Postman (eller curl) för en POST request
- En säker plats för hemligheter (n8n credentials / environment variables)

## Steg 1 — Skapa en app i Shopify Dev Dashboard

1. Öppna Shopify admin.
2. Klicka på **Dev dashboard** (uppe till höger).
3. Klicka **Create an app** och ge appen ett namn (t.ex. “n8n automation”).

## Steg 2 — Välj Admin API-scopes

Lägg bara till scopes du faktiskt behöver. Exempel:

- Läs produkter: \`read_products\`
- Skapa/uppdatera produkter: \`write_products\`
- Läs ordrar: \`read_orders\`
- Fulfillments: \`write_fulfillments\`

## Steg 3 — Release och installera appen

- Klicka **Release**.
- Installera appen i din butik.

Efter installationen ser du **Client ID** och **Client secret** i appens inställningar.

## Steg 4 — Kopiera din \`{shop}.myshopify.com\` domän

I Shopify: **Settings → Domains** och kopiera din \`{shop}.myshopify.com\` domän.

Den använder du i token-URL:en.

## Steg 5 — Hämta Admin API access token

### Alternativ A: Postman

1. Skapa en ny request och välj **POST**.
2. URL:
\`https://{shop}.myshopify.com/admin/oauth/access_token\`
3. Body → **x-www-form-urlencoded**:
- \`grant_type\` = \`client_credentials\`
- \`client_id\` = din Client ID
- \`client_secret\` = din Client secret
4. Klicka **Send**.

Du får en JSON med \`access_token\`, \`scope\` och \`expires_in\` (oftast \`86400\` sekunder = 24 timmar).

### Alternativ B: curl

${fence}bash
curl -X POST "https://{shop}.myshopify.com/admin/oauth/access_token" \\
  -H "Content-Type: application/x-www-form-urlencoded" \\
  --data "grant_type=client_credentials&client_id=YOUR_CLIENT_ID&client_secret=YOUR_CLIENT_SECRET"
${fence}

## Steg 6 — Använd token i n8n

### Shopify node

Använder du Shopify node i n8n? Klistra in \`access_token\` i credentials och ange shop-domänen.

### HTTP Request node (snabbt test)

Header:
- \`X-Shopify-Access-Token: <access_token>\`

Test-endpoint för att se dina scopes:

${fence}bash
curl -X GET "https://{shop}.myshopify.com/admin/oauth/access_scopes.json" \\
  -H "X-Shopify-Access-Token: YOUR_ACCESS_TOKEN"
${fence}

## Token giltighet (viktigt)

Token är kortlivad. Om \`expires_in\` är \`86400\` går den ut efter 24 timmar.

- Får du 401/403 dagen efter? Skapa en ny token på samma sätt.
- För automation: bygg ett schemalagt n8n-flöde som förnyar token och sparar den säkert.

## Troubleshooting

- **401 “invalid_client”**: fel \`client_id\` eller \`client_secret\`
- **404**: fel \`{shop}.myshopify.com\` domän
- **405**: metoden är inte POST för token-endpointen
- **403 “access denied”**: scopes saknas eller appen är inte installerad

## Säkerhet

- Behandla \`client_secret\` som ett lösenord.
- Commit:a aldrig tokens eller secrets till Git.
- Håll scopes minimala och rotera credentials om de läcker.
`.trim(),
    },
    da: {
      title: 'Sådan får du Shopify Admin API-nøglen i 2026 (Client Credentials) til n8n',
      topic: 'Shopify',
      metaTitle: 'Shopify Admin API-nøgle 2026 (n8n)',
      metaDescription: 'Opret en Shopify-app i Dev Dashboard, kopiér Client ID/Secret, hent /admin/oauth/access_token og brug 24-timers token i n8n.',
      content: `
## Shopify har ændret “API key”-flowet

Hvis du brugte den gamle “custom app development”-mulighed i Shopify-indstillingerne, har du sikkert set at flowet har ændret sig. I 2026 sker app-oprettelse via Shopify Dev Dashboard.

Du ender stadig med de tre ting, du skal bruge til automation:
- \`client_id\`
- \`client_secret\`
- en kortlivet Admin API \`access_token\`

Her er trinene til at hente token og bruge den i n8n.

## Før du starter

- Admin-adgang til Shopify-butikken
- De nødvendige Admin API scopes (produkter, ordrer, kunder, osv.)
- Postman (eller curl) til én POST request
- Et sikkert sted at gemme secrets (n8n credentials / environment variables)

## Trin 1 — Opret en app i Shopify Dev Dashboard

1. Åbn Shopify admin.
2. Klik på **Dev dashboard** (øverst til højre).
3. Klik **Create an app** og giv appen et navn (fx “n8n automation”).

## Trin 2 — Vælg Admin API scopes

Tilføj kun de scopes du faktisk har brug for. Eksempler:

- Læs produkter: \`read_products\`
- Opret/opdater produkter: \`write_products\`
- Læs ordrer: \`read_orders\`
- Fulfillments: \`write_fulfillments\`

## Trin 3 — Release og installér appen

- Klik **Release**.
- Installér appen på din butik.

Efter installationen kan du se **Client ID** og **Client secret** i appens indstillinger.

## Trin 4 — Kopiér dit \`{shop}.myshopify.com\` domæne

I Shopify: **Settings → Domains** og kopiér dit \`{shop}.myshopify.com\` domæne.

Det bruger du i token-URL’en.

## Trin 5 — Hent Admin API access token

### Mulighed A: Postman

1. Lav et nyt request og vælg **POST**.
2. URL:
\`https://{shop}.myshopify.com/admin/oauth/access_token\`
3. Body → **x-www-form-urlencoded**:
- \`grant_type\` = \`client_credentials\`
- \`client_id\` = din Client ID
- \`client_secret\` = din Client secret
4. Klik **Send**.

Du får en JSON med \`access_token\`, \`scope\` og \`expires_in\` (typisk \`86400\` sekunder = 24 timer).

### Mulighed B: curl

${fence}bash
curl -X POST "https://{shop}.myshopify.com/admin/oauth/access_token" \\
  -H "Content-Type: application/x-www-form-urlencoded" \\
  --data "grant_type=client_credentials&client_id=YOUR_CLIENT_ID&client_secret=YOUR_CLIENT_SECRET"
${fence}

## Trin 6 — Brug token i n8n

### Shopify node

Bruger du Shopify node i n8n? Indsæt \`access_token\` i credentials og angiv shop-domænet.

### HTTP Request node (hurtig test)

Header:
- \`X-Shopify-Access-Token: <access_token>\`

Test-endpoint til at se dine scopes:

${fence}bash
curl -X GET "https://{shop}.myshopify.com/admin/oauth/access_scopes.json" \\
  -H "X-Shopify-Access-Token: YOUR_ACCESS_TOKEN"
${fence}

## Token udløb (vigtigt)

Token er kortlivet. Hvis \`expires_in\` er \`86400\`, udløber den efter 24 timer.

- Ser du 401/403 dagen efter? Generér en ny token på samme måde.
- Til automation kan du bygge et planlagt n8n-flow, der fornyer token og gemmer den sikkert.

## Troubleshooting

- **401 “invalid_client”**: forkert \`client_id\` eller \`client_secret\`
- **404**: forkert \`{shop}.myshopify.com\` domæne
- **405**: metoden er ikke POST på token-endpoint
- **403 “access denied”**: scopes mangler eller appen er ikke installeret

## Sikkerhed

- Behandl \`client_secret\` som et password.
- Commit aldrig tokens eller secrets til Git.
- Hold scopes minimale og rotér credentials hvis de lækker.
`.trim(),
    },
    fr: {
      title: 'Comment obtenir la clé Shopify Admin API en 2026 (Client Credentials) pour n8n',
      topic: 'Shopify',
      metaTitle: 'Clé Shopify Admin API 2026 (n8n)',
      metaDescription: 'Créez une app Shopify dans le Dev Dashboard, copiez Client ID/Secret, récupérez /admin/oauth/access_token et utilisez le token 24h dans n8n.',
      content: `
## Shopify a changé le flux “API key”

Si vous utilisiez l’ancienne option “custom app development” dans les paramètres Shopify, vous avez sûrement remarqué que le flux a changé. En 2026, la création d’app passe par le Shopify Dev Dashboard.

Vous obtenez toujours les trois éléments nécessaires à l’automatisation :
- \`client_id\`
- \`client_secret\`
- un \`access_token\` Admin API à durée de vie courte

Voici les étapes pour récupérer ce token et l’utiliser dans n8n.

## Avant de commencer

- Accès admin à la boutique Shopify
- Les scopes Admin API nécessaires (produits, commandes, clients, etc.)
- Postman (ou curl) pour un POST request
- Un endroit sécurisé pour stocker les secrets (n8n credentials / variables d’environnement)

## Étape 1 — Créer une app dans le Shopify Dev Dashboard

1. Ouvrez Shopify admin.
2. Cliquez sur **Dev dashboard** (en haut à droite).
3. Cliquez **Create an app** et donnez un nom (ex : “n8n automation”).

## Étape 2 — Choisir les scopes Admin API

Ajoutez uniquement les scopes dont vous avez besoin. Exemples :

- Lire les produits : \`read_products\`
- Créer/mettre à jour des produits : \`write_products\`
- Lire les commandes : \`read_orders\`
- Fulfillments : \`write_fulfillments\`

## Étape 3 — Release et installer l’app

- Cliquez **Release**.
- Installez l’app sur votre boutique.

Après l’installation, vous verrez **Client ID** et **Client secret** dans les paramètres de l’app.

## Étape 4 — Copier votre domaine \`{shop}.myshopify.com\`

Dans Shopify : **Settings → Domains** puis copiez votre domaine \`{shop}.myshopify.com\`.

Vous l’utiliserez dans l’URL de récupération du token.

## Étape 5 — Récupérer l’Admin API access token

### Option A : Postman

1. Créez une nouvelle requête et choisissez **POST**.
2. URL :
\`https://{shop}.myshopify.com/admin/oauth/access_token\`
3. Body → **x-www-form-urlencoded** :
- \`grant_type\` = \`client_credentials\`
- \`client_id\` = votre Client ID
- \`client_secret\` = votre Client secret
4. Cliquez **Send**.

Vous obtenez un JSON avec \`access_token\`, \`scope\` et \`expires_in\` (souvent \`86400\` secondes = 24h).

### Option B : curl

${fence}bash
curl -X POST "https://{shop}.myshopify.com/admin/oauth/access_token" \\
  -H "Content-Type: application/x-www-form-urlencoded" \\
  --data "grant_type=client_credentials&client_id=YOUR_CLIENT_ID&client_secret=YOUR_CLIENT_SECRET"
${fence}

## Étape 6 — Utiliser le token dans n8n

### Shopify node

Si vous utilisez le Shopify node dans n8n, collez \`access_token\` dans les credentials et renseignez le domaine de la boutique.

### HTTP Request node (test rapide)

Header :
- \`X-Shopify-Access-Token: <access_token>\`

Endpoint simple pour vérifier les scopes :

${fence}bash
curl -X GET "https://{shop}.myshopify.com/admin/oauth/access_scopes.json" \\
  -H "X-Shopify-Access-Token: YOUR_ACCESS_TOKEN"
${fence}

## Expiration du token (important)

Le token est temporaire. Si \`expires_in\` vaut \`86400\`, il expire après 24h.

- Si vous voyez des erreurs 401/403 le lendemain, générez un nouveau token de la même manière.
- Pour automatiser, créez un workflow n8n planifié qui renouvelle le token et le stocke de façon sécurisée.

## Dépannage

- **401 “invalid_client”** : \`client_id\` ou \`client_secret\` incorrect
- **404** : mauvais domaine \`{shop}.myshopify.com\`
- **405** : la méthode n’est pas POST sur l’endpoint de token
- **403 “access denied”** : scopes manquants ou app non installée

## Sécurité

- Traitez \`client_secret\` comme un mot de passe.
- Ne versionnez jamais tokens/secrets dans Git.
- Gardez les scopes au minimum et faites tourner les credentials en cas de fuite.
`.trim(),
    },
    it: {
      title: 'Come ottenere la chiave Shopify Admin API nel 2026 (Client Credentials) per n8n',
      topic: 'Shopify',
      metaTitle: 'Chiave Shopify Admin API 2026 (n8n)',
      metaDescription: 'Crea un’app Shopify nel Dev Dashboard, copia Client ID/Secret, richiedi /admin/oauth/access_token e usa il token da 24 ore in n8n.',
      content: `
## Shopify ha cambiato il flusso “API key”

Se usavi la vecchia opzione “custom app development” nelle impostazioni Shopify, avrai notato che il flusso è cambiato. Nel 2026 la creazione dell’app passa dal Shopify Dev Dashboard.

Ti servono ancora tre cose per l’automazione:
- \`client_id\`
- \`client_secret\`
- un \`access_token\` Admin API a breve durata

Ecco i passaggi per ottenere il token e usarlo in n8n.

## Prima di iniziare

- Accesso admin allo store Shopify
- I giusti scope Admin API (prodotti, ordini, clienti, ecc.)
- Postman (o curl) per una richiesta POST
- Un posto sicuro dove salvare i secret (n8n credentials / variabili d’ambiente)

## Step 1 — Crea un’app nel Shopify Dev Dashboard

1. Apri Shopify admin.
2. Clicca **Dev dashboard** (in alto a destra).
3. Clicca **Create an app** e dai un nome (es: “n8n automation”).

## Step 2 — Seleziona gli scope Admin API

Aggiungi solo gli scope necessari. Esempi:

- Leggi prodotti: \`read_products\`
- Crea/aggiorna prodotti: \`write_products\`
- Leggi ordini: \`read_orders\`
- Fulfillments: \`write_fulfillments\`

## Step 3 — Release e installa l’app

- Clicca **Release**.
- Installa l’app sul tuo store.

Dopo l’installazione vedrai **Client ID** e **Client secret** nelle impostazioni dell’app.

## Step 4 — Copia il dominio \`{shop}.myshopify.com\`

In Shopify: **Settings → Domains** e copia il dominio \`{shop}.myshopify.com\`.

Ti serve per la URL del token.

## Step 5 — Richiedi l’Admin API access token

### Opzione A: Postman

1. Crea una nuova request e imposta **POST**.
2. URL:
\`https://{shop}.myshopify.com/admin/oauth/access_token\`
3. Body → **x-www-form-urlencoded**:
- \`grant_type\` = \`client_credentials\`
- \`client_id\` = la tua Client ID
- \`client_secret\` = il tuo Client secret
4. Clicca **Send**.

Riceverai un JSON con \`access_token\`, \`scope\` e \`expires_in\` (spesso \`86400\` secondi = 24 ore).

### Opzione B: curl

${fence}bash
curl -X POST "https://{shop}.myshopify.com/admin/oauth/access_token" \\
  -H "Content-Type: application/x-www-form-urlencoded" \\
  --data "grant_type=client_credentials&client_id=YOUR_CLIENT_ID&client_secret=YOUR_CLIENT_SECRET"
${fence}

## Step 6 — Usa il token in n8n

### Shopify node

Se usi il Shopify node in n8n, incolla \`access_token\` nei credentials e imposta il dominio dello shop.

### HTTP Request node (test rapido)

Header:
- \`X-Shopify-Access-Token: <access_token>\`

Endpoint semplice per verificare gli scope:

${fence}bash
curl -X GET "https://{shop}.myshopify.com/admin/oauth/access_scopes.json" \\
  -H "X-Shopify-Access-Token: YOUR_ACCESS_TOKEN"
${fence}

## Scadenza del token (importante)

Il token è temporaneo. Se \`expires_in\` è \`86400\`, scade dopo 24 ore.

- Se il giorno dopo vedi errori 401/403, genera un nuovo token allo stesso modo.
- Per automazione, crea un workflow n8n schedulato che rinnova il token e lo salva in modo sicuro.

## Troubleshooting

- **401 “invalid_client”**: \`client_id\` o \`client_secret\` errati
- **404**: dominio \`{shop}.myshopify.com\` errato
- **405**: metodo non POST sull’endpoint del token
- **403 “access denied”**: scope mancanti o app non installata

## Sicurezza

- Tratta \`client_secret\` come una password.
- Non committare mai token o secret su Git.
- Mantieni gli scope minimi e ruota i credentials se esposti.
`.trim(),
    },
  },
}

async function publishArticle() {
  try {
    console.log('📝 Publishing Shopify Admin API (n8n) article to database...')

    const result = await prisma.article.upsert({
      where: { slug: article.slug },
      update: {
        title: article.title,
        topic: article.topic,
        content: article.content,
        translations: article.translations,
        status: article.status,
        publishedAt: new Date(),
      },
      create: {
        title: article.title,
        slug: article.slug,
        content: article.content,
        topic: article.topic,
        status: article.status,
        translations: article.translations,
        source: 'manual',
        publishedAt: new Date(),
      },
    })

    console.log('✅ Article published successfully!')
    console.log(`📍 URL: /blog/${result.slug}`)
    console.log(`📊 ID: ${result.id}`)
  } catch (error) {
    console.error('❌ Error publishing article:', error)
    process.exitCode = 1
  } finally {
    await prisma.$disconnect()
  }
}

publishArticle()
