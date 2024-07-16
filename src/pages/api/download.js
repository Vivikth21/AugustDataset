// import fs from 'fs';
// import path from 'path';

// export default function handler(req, res) {
//   const { file } = req.query;
//   const filePath = path.join(process.cwd(), 'src', 'data2', file);

//   fs.readFile(filePath, (err, data) => {
//     if (err) {
//       res.status(500).json({ error: 'Failed to read file' });
//       return;
//     }

//     res.setHeader('Content-Disposition', `attachment; filename=${file}`);
//     res.setHeader('Content-Type', 'text/csv');
//     res.send(data);
//   });
// }
// import fs from 'fs';
// import path from 'path';
// import { parse } from 'json2csv';
// import csv from 'csv-parser';

// export default async (req, res) => {
//   if (req.method === 'POST') {
//     const { file } = req.query;
//     const { filterOption, flaggedRows, localEditedRows, searchTerm } = req.body;
//     const filePath = path.join(process.cwd(), 'src', 'data2', file);

//     const rows = [];
    
//     // Read and parse the CSV file
//     await new Promise((resolve, reject) => {
//       fs.createReadStream(filePath)
//         .pipe(csv())
//         .on('data', (data) => rows.push(data))
//         .on('end', resolve)
//         .on('error', reject);
//     });

//     // Filter the data based on the filter option
//     const filteredData = rows.filter((row) =>
//       row['message_id_new'].toLowerCase().includes(searchTerm.toLowerCase()) &&
//       (filterOption === '' || (filterOption === 'edited' && localEditedRows.includes(row.message_id_new)) ||
//         (filterOption === 'flagged' && flaggedRows.includes(row.message_id_new)))
//     );

//     // Convert the filtered data to CSV format
//     const csvString = parse(filteredData);

//     // Send the CSV file as a response
//     res.setHeader('Content-Type', 'text/csv');
//     res.setHeader('Content-Disposition', `attachment; filename=${file}`);
//     res.status(200).send(csvString);
//   } else {
//     res.status(405).send('Method Not Allowed');
//   }
// };

import { parse } from 'json2csv';
import { parse as csvParse } from 'csv-parse/sync';
import AWS from 'aws-sdk';

// Configure AWS SDK
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION
});

const s3 = new AWS.S3();

export default async (req, res) => {
  if (req.method === 'POST') {
    const { file } = req.query;
    const { filterOption, flaggedRows, localEditedRows, searchTerm } = req.body;

    const bucketName = process.env.S3_BUCKET_NAME;
    const key = `datasets/${file}`;

    try {
      // Fetch the file from S3
      const s3Params = { Bucket: bucketName, Key: key };
      const s3Object = await s3.getObject(s3Params).promise();
      const csvContent = s3Object.Body.toString('utf-8');

      // Parse the CSV content
      const rows = csvParse(csvContent, {
        columns: true,
        skip_empty_lines: true,
        trim: true
      });

      // Filter the data based on the filter option
      const filteredData = rows.filter((row) =>
        row['message_id_new'].toLowerCase().includes(searchTerm.toLowerCase()) &&
        (filterOption === '' || 
         (filterOption === 'edited' && localEditedRows.includes(row.message_id_new)) ||
         (filterOption === 'flagged' && flaggedRows.includes(row.message_id_new)))
      );

      // If no filter is applied, use all rows
      const dataToDownload = filterOption === '' && searchTerm === '' ? rows : filteredData;

      // Convert the data to CSV format
      const csvString = parse(dataToDownload);

      // Send the CSV file as a response
      res.setHeader('Content-Type', 'text/csv');
      res.setHeader('Content-Disposition', `attachment; filename=${file}`);
      res.status(200).send(csvString);
    } catch (error) {
      console.error('Error fetching or processing file:', error);
      res.status(500).json({ error: 'Error processing the file' });
    }
  } else {
    res.status(405).send('Method Not Allowed');
  }
};