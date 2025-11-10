# Contactformulier SMTP Setup

Het contactformulier is nu geconfigureerd om emails te versturen via je eigen SMTP server.

## 🚀 Quick Setup

### 1. Vul je SMTP gegevens in `.env.local`

Open `.env.local` en vul je SMTP gegevens in:

```env
SMTP_HOST="smtp.jouwprovider.nl"
SMTP_PORT="587"
SMTP_SECURE="false"
SMTP_USER="jouw@email.nl"
SMTP_PASSWORD="jouw-wachtwoord"
SMTP_FROM="noreply@niblah.com"
CONTACT_EMAIL_TO="info@niblah.com"
```

### 2. SMTP Providers - Voorbeelden

#### Gmail
```env
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_SECURE="false"
SMTP_USER="jouw@gmail.com"
SMTP_PASSWORD="app-specifiek-wachtwoord"  # Maak dit aan via Google Account settings
```

⚠️ **Let op**: Voor Gmail moet je een [App Password](https://support.google.com/accounts/answer/185833) aanmaken.

#### Office 365 / Outlook
```env
SMTP_HOST="smtp.office365.com"
SMTP_PORT="587"
SMTP_SECURE="false"
SMTP_USER="jouw@outlook.com"
SMTP_PASSWORD="jouw-wachtwoord"
```

#### TransIP (Nederlandse hosting)
```env
SMTP_HOST="smtp.transip.email"
SMTP_PORT="587"
SMTP_SECURE="false"
SMTP_USER="jouw@domein.nl"
SMTP_PASSWORD="jouw-email-wachtwoord"
```

#### DirectAdmin / cPanel hosting
```env
SMTP_HOST="mail.jouwdomein.nl"
SMTP_PORT="587"
SMTP_SECURE="false"
SMTP_USER="info@jouwdomein.nl"
SMTP_PASSWORD="jouw-email-wachtwoord"
```

### 3. Herstart development server

```bash
npm run dev
```

## 📧 Email Template

Alle contactformulier submissions worden verstuurd naar het email adres in `CONTACT_EMAIL_TO`.

De email bevat:
- ✅ Naam van de afzender
- ✅ Email adres (als reply-to)
- ✅ Telefoonnummer (optioneel)
- ✅ Bericht
- ✅ Timestamp
- ✅ Professional HTML styling met Niblah branding

## 🔒 Security

- Alle SMTP credentials worden veilig opgeslagen in `.env.local`
- `.env.local` staat in `.gitignore` en wordt NOOIT gecommit
- Email validatie gebeurt server-side
- Error handling voorkomt dat sensitive info gelekt wordt

## 🧪 Testen

1. Open je website: `http://localhost:3000`
2. Scroll naar het contactformulier (boven de footer)
3. Vul het formulier in en verzend
4. Check je inbox op het email adres in `CONTACT_EMAIL_TO`

## 🐛 Troubleshooting

### "Email verzenden mislukt"
- ✅ Check of je SMTP credentials correct zijn
- ✅ Controleer of `SMTP_HOST` en `SMTP_PORT` kloppen
- ✅ Voor Gmail: gebruik App Password, geen normaal wachtwoord
- ✅ Check firewall/hosting: port 587 moet open staan
- ✅ Kijk in de console logs voor specifieke error messages

### Emails komen niet aan
- ✅ Check spam folder
- ✅ Controleer `CONTACT_EMAIL_TO` is correct ingevuld
- ✅ Verify `SMTP_FROM` is een geldig email adres van je domein

### SSL/TLS errors
- Voor port **587**: gebruik `SMTP_SECURE="false"` (STARTTLS)
- Voor port **465**: gebruik `SMTP_SECURE="true"` (SSL)

## 📁 Bestanden

- **`/src/components/ContactForm.js`** - Het contactformulier component
- **`/src/app/api/contact/route.js`** - API route die form data verwerkt
- **`/src/lib/email.js`** - Email service met SMTP configuratie
- **`/src/app/layout.js`** - ContactForm is toegevoegd boven Footer

## 🔄 Productie Deploy

Bij deployen naar Vercel/Netlify/etc:

1. Voeg alle SMTP environment variables toe in je hosting dashboard
2. Voor Vercel: Settings → Environment Variables
3. Test het formulier op je live site

## 💡 Tips

- Gebruik een dedicated email zoals `noreply@jouwdomein.nl` voor `SMTP_FROM`
- Stel SPF/DKIM records in op je domein voor betere email deliverability
- Overweeg een transactional email service (SendGrid, Mailgun) voor productie met hoge volumes
