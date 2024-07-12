import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const { filePath } = req.query;
  const fullPath = path.join(process.cwd(), 'public', filePath);
  
  fs.access(fullPath, fs.constants.F_OK, (err) => {
    if (err) {
      res.status(404).json({ exists: false });
    } else {
      res.status(200).json({ exists: true });
    }
  });
}
