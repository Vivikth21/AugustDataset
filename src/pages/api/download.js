import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const { file } = req.query;
  const filePath = path.join(process.cwd(), 'src', 'data2', file);

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.status(500).json({ error: 'Failed to read file' });
      return;
    }

    res.setHeader('Content-Disposition', `attachment; filename=${file}`);
    res.setHeader('Content-Type', 'text/csv');
    res.send(data);
  });
}
