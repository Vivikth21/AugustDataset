// import fs from 'fs';
// import path from 'path';

// export default function handler(req, res) {
//   if (req.method === 'GET') {
//     const dataDirectory = path.join(process.cwd(), 'src', 'data2');
//     const datasets = fs.readdirSync(dataDirectory)
//       .filter(file => file.endsWith('.csv'))
//       .map((file, index) => ({
//         id: index + 1,
//         name: file.replace('.csv', ''),
//         createdAt: fs.statSync(path.join(dataDirectory, file)).birthtime.toISOString(),
//       }));
//     res.status(200).json({ datasets });
//   } else {
//     res.status(405).json({ message: 'Method Not Allowed' });
//   }
// }

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      console.log('Starting to fetch datasets');
      console.log('S3 Bucket Name:', process.env.S3_BUCKET_NAME);
      console.log('Dataset Prefix:', datasetPrefix);

      const params = {
        Bucket: process.env.S3_BUCKET_NAME,
        Prefix: datasetPrefix,
      };

      console.log('Params:', JSON.stringify(params));

      const s3Response = await s3.listObjectsV2(params).promise();

      console.log('S3 Response:', JSON.stringify(s3Response, null, 2));

      // ... rest of your code ...

    } catch (error) {
      console.error('Error fetching datasets:', error);
      console.error('Error stack:', error.stack);
      console.error('Error details:', JSON.stringify(error, null, 2));
      res.status(500).json({ message: 'Error fetching datasets', error: error.message, stack: error.stack });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
// import fs from 'fs';
// import path from 'path';
// import AWS from 'aws-sdk';
// import multer from 'multer';

// const storage = multer.memoryStorage();
// const upload = multer({ storage });

// const s3 = new AWS.S3({
//   accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//   secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
// });

// export const config = {
//   api: {
//     bodyParser: false, // Disable default bodyParser as multer handles it
//   },
// };

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     upload.single('file')(req, res, (err) => {
//       if (err instanceof multer.MulterError) {
//         return res.status(500).json({ message: 'Failed to upload file' });
//       } else if (err) {
//         return res.status(500).json({ message: 'Unknown error occurred' });
//       }

//       const { name } = req.body;
//       const { file } = req;

//       if (!name || !file) {
//         return res.status(400).json({ message: 'Missing name or file' });
//       }

//       const params = {
//         Bucket: 'your-bucket-name',
//         Key: `datasets/${file.originalname}`, // Adjust the Key as per your bucket structure
//         Body: file.buffer,
//       };

//       s3.upload(params, (s3Err, data) => {
//         if (s3Err) {
//           console.error('Error uploading to S3', s3Err);
//           return res.status(500).json({ message: 'Failed to upload file to S3' });
//         }

//         const filePath = data.Location; // Store the S3 file path for response

//         res.status(200).json({ message: 'Dataset created successfully', filePath });
//       });
//     });
//   } else {
//     res.setHeader('Allow', ['POST']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }
