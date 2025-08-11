# Webhook Debug Documentation

## Overzicht
Dit document bevat alle informatie over het webhook systeem voor article generation.

## Webhook URLs Configureren

### Stap 1: Open Articles Dashboard
1. Ga naar `/admin/dashboard/articles`
2. Klik op de "Webhook Settings" knop rechtsboven

### Stap 2: Voer Webhook URLs in
Voor elke form (SHIPSQUARED, Jillrocket.nl, Bia-finance.nl):
1. Plak de n8n webhook URL in het veld
2. Zorg dat de URL begint met `https://`
3. Klik op "Save Webhook Settings"

### Voorbeeld n8n Webhook URL:
```
https://n8n-n8n.42giwj.easypanel.host/webhook/[webhook-id]
```

## Webhook Payload Format

De webhook stuurt de volgende JSON payload naar n8n:

```json
{
  "articleId": "uuid-van-artikel",
  "topic": "Het onderwerp van het artikel",
  "timestamp": "2024-01-10T12:00:00.000Z",
  "source": "shipsquared/jillrocket/biafinance",
  "userId": "user-id-of-null"
}
```

## n8n Webhook Configuratie

### Stap 1: Maak een Webhook Node
1. Open n8n workflow
2. Voeg een "Webhook" node toe
3. Stel in op "POST" method
4. Kopieer de webhook URL

### Stap 2: Response Format
n8n moet reageren met een van deze formats:

**Optie 1: JSON Response**
```json
{
  "Blogpost": "De gegenereerde artikel content...",
  "content": "Of gebruik dit veld voor de content"
}
```

**Optie 2: Plain Text Response**
```
De artikel content als plain text...
```

## Webhook Testen

### Via Test Knop
1. Configureer eerst de webhook URL
2. Klik op "Test Webhook" knop bij de form
3. Check de response in de popup

### Via Webhook Logs Dashboard
1. Ga naar `/admin/dashboard/webhook-logs`
2. Bekijk alle webhook pogingen
3. Check status codes en responses

## Troubleshooting

### Webhook wordt niet ontvangen in n8n
1. **Check URL**: Zorg dat de URL correct is en begint met https://
2. **Check n8n status**: Is de workflow actief?
3. **Check firewall**: Staat n8n open voor externe requests?
4. **Check logs**: Kijk in webhook-logs dashboard voor errors

### Webhook timeout errors
- Default timeout is 120 seconden
- Als n8n langer nodig heeft, krijg je een timeout
- Oplossing: Maak n8n workflow sneller of gebruik async processing

### Article blijft op PROCESSING status
Dit gebeurt als:
- Webhook fails (check logs)
- n8n geeft geen response
- Response format is incorrect

### Common Error Messages

| Error | Oorzaak | Oplossing |
|-------|---------|-----------|
| "Webhook timeout" | n8n reageert niet binnen 120 sec | Check of n8n workflow actief is |
| "Invalid URL" | URL format incorrect | Zorg dat URL begint met https:// |
| "Connection refused" | n8n niet bereikbaar | Check n8n server status |
| "Invalid response" | n8n response format fout | Check response format in n8n |

## Webhook Flow Diagram

```
1. User enters topic in form
2. Clicks "Generate Article"
3. Frontend sends to API:
   - topic
   - source (which form)
   - webhook URL
4. API creates article (status: PROCESSING)
5. API sends webhook to n8n
6. n8n processes and returns content
7. API updates article with content (status: PUBLISHED)
8. Article appears in list
```

## Security Notes

- Webhook URLs worden lokaal opgeslagen in browser (localStorage)
- Geen gevoelige data in webhook payload
- Alle webhooks worden gelogd in database
- Webhook logs zijn alleen zichtbaar voor admins

## Contact Support

Bij problemen:
1. Check eerst deze documentatie
2. Kijk in webhook-logs dashboard
3. Test de webhook met test knop
4. Check n8n workflow logs