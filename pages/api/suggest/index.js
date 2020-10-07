import { google } from 'googleapis';

export default async function (req, res) {
  const { firstName, lastName, email, source, suggestion } = req.body;
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      client_id: process.env.GOOGLE_CLIENT_ID,
      private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/gm, '\n'),
    },
    scopes: [
      'https://www.googleapis.com/auth/drive',
      'https://www.googleapis.com/auth/drive.file',
      'https://www.googleapis.com/auth/spreadsheets',
    ],
  });

  const sheets = google.sheets({
    auth,
    version: 'v4',
  });

  const response = await sheets.spreadsheets.values.append({
    spreadsheetId: '1OZUiNRsGLPWh5O5cjJhC58JERhlwChDVqdxxRign3PA',
    range: 'A1:E1',
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: [[firstName, lastName, email, source, suggestion]],
    },
  });

  return res.status(201).json({
    data: response.data,
  });
}
