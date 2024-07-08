import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method === 'GET') {
    const dataDirectory = path.join(process.cwd(), 'src', 'data2');
    const datasets = fs.readdirSync(dataDirectory)
      .filter(file => file.endsWith('.csv'))
      .map((file, index) => ({
        id: index + 1,
        name: file.replace('.csv', ''),
        createdAt: fs.statSync(path.join(dataDirectory, file)).birthtime.toISOString(),
      }));
    res.status(200).json({ datasets });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
