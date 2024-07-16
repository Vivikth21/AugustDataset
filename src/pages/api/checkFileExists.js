// import fs from 'fs';
// import path from 'path';

// export default function handler(req, res) {
//   const { filePath } = req.query;
//   const fullPath = path.join(process.cwd(), 'public', filePath);
  
//   fs.access(fullPath, fs.constants.F_OK, (err) => {
//     if (err) {
//       res.status(404).json({ exists: false });
//     } else {
//       res.status(200).json({ exists: true });
//     }
//   });
// }
// pages/api/checkFileExists.js
import AWS from 'aws-sdk';

export default async function handler(req, res) {
  const { filePath } = req.query;

  AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
  });

  const s3 = new AWS.S3();

  const params = {
    Bucket: process.env.S3_BUCKET_NAME,
    Key: filePath,
  };

  try {
    await s3.headObject(params).promise();
    res.status(200).json({ exists: true });
  } catch (error) {
    if (error.code === 'NotFound') {
      res.status(404).json({ exists: false });
    } else {
      console.error('Error checking file existence:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}