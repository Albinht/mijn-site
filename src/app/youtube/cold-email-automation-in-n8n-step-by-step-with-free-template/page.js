import YouTubeArticleTemplate from '../_components/YouTubeArticleTemplate';

const page = {
  title: 'Cold Email Automation in N8N',
  description:
    'A practical breakdown for building a repeatable cold email workflow with Google Sheets, templates, personalization and send logging.',
  videoId: '4k7Zd4A0WzQ',
  publishDate: '2025-01-25',
  readTime: '20 min read',
  category: 'Email automation',
  tags: ['N8N', 'Cold email', 'Google Sheets', 'Automation'],
  tocItems: [
    { id: 'why-n8n', label: 'Why N8N works', level: 2 },
    { id: 'what-you-build', label: 'What you build', level: 2 },
    { id: 'code-snippets', label: 'Code snippets', level: 2 },
    { id: 'random-template', label: 'Random template', level: 3 },
    { id: 'personalization', label: 'Personalization', level: 3 },
    { id: 'send-logging', label: 'Send logging', level: 3 },
    { id: 'expected-results', label: 'Expected results', level: 2 },
  ],
};

export const metadata = {
  title: `${page.title} | Niblah YouTube`,
  description: page.description,
};

export default function ColdEmailAutomationPage() {
  return (
    <YouTubeArticleTemplate {...page}>
      <h2 id="why-n8n">Why N8N works for cold email automation</h2>
      <p>
        N8N gives you enough control to build a real outbound system without locking the workflow inside a heavy sales platform. You can pull lead data from sheets, rotate templates, personalize copy and write the final send status back into your source of truth.
      </p>
      <p>
        The important part is structure. Cold email breaks when every step becomes manual or when every recipient gets the same message. This workflow keeps the process consistent while still giving each email enough variation to feel specific.
      </p>

      <h2 id="what-you-build">What you build in this tutorial</h2>
      <p>
        The workflow starts with leads and templates in Google Sheets. N8N picks a template, combines it with lead fields, sends the email, waits between sends and logs the result.
      </p>
      <ul>
        <li>Pull leads from a Google Sheet.</li>
        <li>Pick a rotating template for each lead.</li>
        <li>Personalize the subject and body with lead data.</li>
        <li>Send through Gmail or SMTP.</li>
        <li>Log the timestamp and status after each send.</li>
      </ul>

      <h2 id="code-snippets">Core code snippets</h2>
      <p>
        These are the core JavaScript blocks used inside the workflow. Keep them small and explicit so they are easy to debug when the sheet structure changes.
      </p>

      <h3 id="random-template">Pick a random template</h3>
      <p>
        This block selects one template from the template sheet and converts line breaks into HTML-safe breaks.
      </p>
      <pre>
        <code>{`const templates = items.map(item => item.json);

if (!templates || templates.length === 0) {
  throw new Error('No templates found');
}

const index = Math.floor(Math.random() * templates.length);
const template = templates[index];

return [
  {
    json: {
      subject: template.Subject,
      body: template.Body.replace(/\\n/g, '<br>')
    }
  }
];`}</code>
      </pre>

      <h3 id="personalization">Personalize the email</h3>
      <p>
        This block merges the selected template with the lead fields from your source sheet.
      </p>
      <pre>
        <code>{`const lead = items[0].json;
const template = items[1].json;

let body = template.body.replace(/{{firstName}}/g, lead.FirstName || '');
body = body.replace(/{{companyName}}/g, lead.Company || '');

return [
  {
    json: {
      ...lead,
      subject: template.subject,
      body
    }
  }
];`}</code>
      </pre>

      <h3 id="send-logging">Log send status</h3>
      <p>
        After the send step, write the result back to the row so you can see exactly what happened.
      </p>
      <pre>
        <code>{`const lead = items[0].json;
const timestamp = new Date().toISOString();

return [
  {
    json: {
      Email: lead.Email,
      Status: 'Sent',
      SentAt: timestamp
    }
  }
];`}</code>
      </pre>

      <h2 id="expected-results">Expected results</h2>
      <p>
        A clean version of this system saves the repetitive work: selecting leads, writing from scratch, tracking sends and updating sheets. The leverage comes from making the workflow repeatable before you scale volume.
      </p>
      <p>
        Start with a small batch, review the replies manually and only increase volume once the targeting and message quality are proven.
      </p>
    </YouTubeArticleTemplate>
  );
}
