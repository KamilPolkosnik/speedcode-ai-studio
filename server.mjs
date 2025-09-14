// server.mjs  (ESM)
import 'dotenv/config';
import express from 'express';
import { google } from 'googleapis';

const app = express();
const PORT = process.env.SERVER_PORT || 3001;

app.use(express.urlencoded({ extended: true })); // x-www-form-urlencoded (zwykły <form>)
app.use(express.json());                          // JSON (na przyszłość)

function toUrlSafeBase64(input) {
  return Buffer.from(input)
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
}
function escapeHtml(s) {
  return String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

async function sendGmail({ subject, text, html }) {
  const jwt = new google.auth.JWT({
    email: process.env.SA_EMAIL,
    key: (process.env.SA_PRIVATE_KEY || '').replace(/\\n/g, '\n'),
    scopes: ['https://www.googleapis.com/auth/gmail.send'],
    subject: process.env.IMPERSONATE_USER, // np. sklep@kidco.pl
  });
  await jwt.authorize();
  const gmail = google.gmail({ version: 'v1', auth: jwt });

  const from = process.env.IMPERSONATE_USER;
  const to = process.env.MAIL_TO || from;

  const raw = toUrlSafeBase64(
    [
      `From: ${from}`,
      `To: ${to}`,
      `Subject: ${subject}`,
      'MIME-Version: 1.0',
      'Content-Type: multipart/alternative; boundary=boundary42',
      '',
      '--boundary42',
      'Content-Type: text/plain; charset=UTF-8',
      '',
      text,
      '--boundary42',
      'Content-Type: text/html; charset=UTF-8',
      '',
      html,
      '--boundary42--',
      '',
    ].join('\r\n')
  );

  await gmail.users.messages.send({ userId: 'me', requestBody: { raw } });
}

// proste healthcheck/ping:
app.get('/api/ping', (_req, res) => res.json({ ok: true }));

app.post('/api/contact', async (req, res) => {
  try {
    const f = req.body || {};
    const arr = (v) => (Array.isArray(v) ? v : v ? [v] : []);

    const firstName = f.firstName || '';
    const lastName  = f.lastName  || '';
    const email     = f.email     || '';
    const phone     = f.phone     || '';
    const company   = f.company   || '';
    const message   = f.message   || '';
    const budget    = f.budget    || '';
    const nda       = f.nda       || '';
    const challenges = arr(f.challenges);
    const consent1  = f.consent1 ? 'TAK' : 'NIE';
    const consent2  = f.consent2 ? 'TAK' : 'NIE';

    const subject = 'Nowe zgłoszenie ze strony';
    const text = `
Imię: ${firstName}
Nazwisko: ${lastName}
Email: ${email}
Telefon: ${phone}
Firma: ${company}
Budżet: ${budget}
NDA: ${nda === 'yes' ? 'TAK' : nda === 'no' ? 'NIE' : ''}
Wyzwania: ${challenges.join(', ')}
Zgoda RODO (podstawowa): ${consent1}
Zgoda marketingowa: ${consent2}

Wiadomość:
${message}
`.trim();

    const html = `
      <div style="font-family:system-ui,Segoe UI,Arial,sans-serif">
        <h2>Nowe zgłoszenie ze strony</h2>
        <ul>
          <li><b>Imię:</b> ${escapeHtml(firstName)}</li>
          <li><b>Nazwisko:</b> ${escapeHtml(lastName)}</li>
          <li><b>Email:</b> ${escapeHtml(email)}</li>
          <li><b>Telefon:</b> ${escapeHtml(phone)}</li>
          <li><b>Firma:</b> ${escapeHtml(company)}</li>
          <li><b>Budżet:</b> ${escapeHtml(budget)}</li>
          <li><b>NDA:</b> ${nda === 'yes' ? 'TAK' : nda === 'no' ? 'NIE' : ''}</li>
          <li><b>Wyzwania:</b> ${challenges.map(escapeHtml).join(', ')}</li>
          <li><b>Zgoda RODO (podstawowa):</b> ${consent1}</li>
          <li><b>Zgoda marketingowa:</b> ${consent2}</li>
        </ul>
        <h3>Wiadomość:</h3>
        <pre style="white-space:pre-wrap">${escapeHtml(message)}</pre>
      </div>
    `;

    await sendGmail({ subject, text, html });
    res.json({ ok: true });
  } catch (e) {
    console.error('MAIL ERROR:', e?.response?.data || e?.message || e);
    res.status(500).json({
      ok: false,
      error: e?.message || 'MAIL_SEND_FAILED',
      details: e?.response?.data || e?.stack || null,
    });
  }
});

app.listen(PORT, () => {
  console.log(`API listening on http://localhost:${PORT}`);
});