// // import fs from 'fs';
// // import path from 'path';
// // import formidable from 'formidable';

// // export const config = {
// //   api: {
// //     bodyParser: false,
// //   },
// // };

// // export default async function handler(req, res) {
// //   if (req.method === 'POST') {
// //     const form = new formidable.IncomingForm();
// //     form.parse(req, (err, fields, files) => {
// //       if (err) {
// //         res.status(500).json({ message: 'Failed to parse form data' });
// //         return;
// //       }
// //       const { name } = fields;
// //       const { file } = files;
// //       const dataDirectory = path.join(process.cwd(), 'src', 'data2');
// //       const newFilePath = path.join(dataDirectory, `${name}.csv`);

// //       fs.rename(file.path, newFilePath, (err) => {
// //         if (err) {
// //           res.status(500).json({ message: 'Failed to save file' });
// //           return;
// //         }
// //         res.status(200).json({ message: 'Dataset created successfully' });
// //       });
// //     });
// //   } else {
// //     res.status(405).json({ message: 'Method Not Allowed' });
// //   }
// // }

// import fs from 'fs';
// import path from 'path';
// import formidable from 'formidable';

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     const form = new formidable.IncomingForm();
    
//     form.parse(req, async (err, fields, files) => {
//       if (err) {
//         return res.status(500).json({ message: 'Failed to parse form data' });
//       }

//       const { name } = fields;
//       const { file } = files;

//       try {
//         // Ensure the data directory exists
//         const dataDirectory = path.join(process.cwd(), 'src', 'data2');
//         if (!fs.existsSync(dataDirectory)) {
//           fs.mkdirSync(dataDirectory, { recursive: true });
//         }

//         const newFilePath = path.join(dataDirectory, `${name}.csv`);

//         // Move the uploaded file to the new path
//         fs.renameSync(file.path, newFilePath);

//         // Respond with success message
//         return res.status(200).json({ message: 'Dataset created successfully' });
//       } catch (error) {
//         console.error('Failed to save file:', error);
//         return res.status(500).json({ message: 'Failed to save file' });
//       }
//     });
//   } else {
//     res.setHeader('Allow', ['POST']);
//     res.status(405).json({ message: 'Method Not Allowed' });
//   }
// }

// import fs from 'fs';
// import path from 'path';
// import multer from 'multer';

// // Define storage for uploaded files
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     const dataDirectory = path.join(process.cwd(), 'src', 'data2'); // Adjust as per your directory structure
//     cb(null, dataDirectory);
//   },
//   filename: (req, file, cb) => {
//     cb(null, `${file.originalname}`); // Use original file name or customize as needed
//   },
// });

// // Initialize multer instance with storage options
// const upload = multer({ storage });

// // API handler function
// export const config = {
//   api: {
//     bodyParser: false, // Disable default bodyParser as multer handles it
//   },
// };

// export default function handler(req, res) {
//   if (req.method === 'POST') {
//     // Use `upload.single('file')` middleware to handle single file uploads
//     upload.single('file')(req, res, (err) => {
//       if (err instanceof multer.MulterError) {
//         // A Multer error occurred when uploading
//         return res.status(500).json({ message: 'Failed to upload file' });
//       } else if (err) {
//         // An unknown error occurred
//         return res.status(500).json({ message: 'Unknown error occurred' });
//       }

//       // File uploaded successfully, handle other form data
//       const { name } = req.body;
//       const { file } = req;

//       if (!name || !file) {
//         return res.status(400).json({ message: 'Missing name or file' });
//       }

//       // Optionally, you can rename the file or handle other logic here
//       // Example renaming file:
//       // const newFilePath = path.join(process.cwd(), 'src', 'data2', `${name}.csv`);
//       // fs.renameSync(file.path, newFilePath);

//       res.status(200).json({ message: 'Dataset created successfully' });
//     });
//   } else {
//     res.setHeader('Allow', ['POST']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }
// import fs from 'fs';
// import path from 'path';
// import multer from 'multer';

// // Define storage for uploaded files
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     const dataDirectory = path.join(process.cwd(), 'src', 'data2'); // Adjust as per your directory structure
//     cb(null, dataDirectory);
//   },
//   filename: (req, file, cb) => {
//     cb(null, `${file.originalname}`); // Use original file name or customize as needed
//   },
// });

// // Initialize multer instance with storage options
// const upload = multer({ storage });

// // API handler function
// export const config = {
//   api: {
//     bodyParser: false, // Disable default bodyParser as multer handles it
//   },
// };

// export default function handler(req, res) {
//   if (req.method === 'POST') {
//     // Use `upload.single('file')` middleware to handle single file uploads
//     upload.single('file')(req, res, (err) => {
//       if (err instanceof multer.MulterError) {
//         // A Multer error occurred when uploading
//         return res.status(500).json({ message: 'Failed to upload file' });
//       } else if (err) {
//         // An unknown error occurred
//         return res.status(500).json({ message: 'Unknown error occurred' });
//       }

//       // File uploaded successfully, handle other form data
//       const { name } = req.body;
//       const { file } = req;

//       if (!name || !file) {
//         return res.status(400).json({ message: 'Missing name or file' });
//       }

//       // Return the file path in the response
//       const filePath = path.join('src', 'data2', `${file.originalname}`);

//       res.status(200).json({ message: 'Dataset created successfully', filePath });
//     });
//   } else {
//     res.setHeader('Allow', ['POST']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }

import AWS from 'aws-sdk';
import multer from 'multer';
import { Readable } from 'stream';

// Configure AWS
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

const s3 = new AWS.S3();

// Configure multer for memory storage
const upload = multer({ storage: multer.memoryStorage() });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default function handler(req, res) {
  if (req.method === 'POST') {
    upload.single('file')(req, res, async (err) => {
      if (err) {
        return res.status(500).json({ message: 'Failed to process file', error: err.message });
      }

      const { name } = req.body;
      const { file } = req;

      if (!name || !file) {
        return res.status(400).json({ message: 'Missing name or file' });
      }

      try {
        // Upload file to S3
        const params = {
          Bucket: process.env.S3_BUCKET_NAME,
          Key: `datasets/${file.originalname}`,
          Body: Readable.from(file.buffer),
          ContentType: file.mimetype,
        };

        const uploadResult = await s3.upload(params).promise();

        // Return the S3 file location
        const fileLocation = uploadResult.Location;

        res.status(200).json({ message: 'Dataset created successfully', fileLocation });
      } catch (error) {
        console.error('S3 upload error:', error);
        res.status(500).json({ message: 'Failed to upload file to S3', error: error.message });
      }
    });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

// import AWS from 'aws-sdk';
// import multer from 'multer';
// import multerS3 from 'multer-s3';

// // Configure AWS
// AWS.config.update({
//   accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//   secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//   region: process.env.AWS_REGION,
// });

// const s3 = new AWS.S3();

// // Configure multer for S3 upload
// const upload = multer({
//   storage: multerS3({
//     s3: s3,
//     bucket: process.env.S3_BUCKET_NAME,
//     acl: 'private',
//     key: function (req, file, cb) {
//       cb(null, `datasets/${file.originalname}`);
//     },
//   }),
// });

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

// export default function handler(req, res) {
//   if (req.method === 'POST') {
//     upload.single('file')(req, res, (err) => {
//       if (err) {
//         return res.status(500).json({ message: 'Failed to upload file', error: err.message });
//       }

//       const { name } = req.body;
//       const { file } = req;

//       if (!name || !file) {
//         return res.status(400).json({ message: 'Missing name or file' });
//       }

//       // Return the S3 file location
//       const fileLocation = file.location;

//       res.status(200).json({ message: 'Dataset created successfully', fileLocation });
//     });
//   } else {
//     res.setHeader('Allow', ['POST']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }