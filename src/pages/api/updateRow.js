// import fs from 'fs';
// import path from 'path';
// import csv from 'csv-parser';

// const filePath = path.join(process.cwd(), 'src', 'data', 'data.csv');

// export default async function handler(req, res) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ message: 'Method Not Allowed' });
//   }

//   const { rowId, newData } = req.body;

//   try {
//     const rows = [];
//     let rowNum = 0;

//     // Read existing CSV file
//     const fileStream = fs.createReadStream(filePath, 'utf8');
//     await new Promise((resolve, reject) => {
//       fileStream.pipe(csv())
//         .on('data', (row) => {
//           if (rowNum === +rowId) {
//             // Update the specific row with new data
//             Object.keys(newData).forEach((key) => {
//               if (newData[key] !== undefined) {
//                 row[key] = newData[key];
//               }
//             });
//           }
//           rows.push(row);
//           rowNum++;
//         })
//         .on('end', () => {
//           resolve();
//         })
//         .on('error', (err) => reject(err));
//     });

//     // Write updated data back to the CSV file
//     const writableStream = fs.createWriteStream(filePath);
//     rows.forEach((row) => {
//       const csvRow = Object.values(row).join(',') + '\n';
//       writableStream.write(csvRow);
//     });
//     writableStream.end();

//     res.status(200).json({ message: 'Row updated successfully' });
//   } catch (error) {
//     console.error('Error updating row:', error);
//     res.status(500).json({ message: 'Error updating row' });
//   }
// }

// import fs from 'fs';
// import path from 'path';
// import csv from 'csv-parser';
// import { stringify } from 'csv-stringify/sync';

// const filePath = path.join(process.cwd(), 'src', 'data', 'data.csv');

// export default async function handler(req, res) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ message: 'Method not allowed' });
//   }

//   const { rowId, newData } = req.body;

//   try {
//     const fileStream = fs.createReadStream(filePath, 'utf8');
//     let rows = [];
//     let rowNum = 0;

//     await new Promise((resolve, reject) => {
//       fileStream.pipe(csv())
//         .on('data', (row) => {
//           if (rowNum === +rowId) {
//             rows.push(newData);
//           } else {
//             rows.push(row);
//           }
//           rowNum++;
//         })
//         .on('end', () => resolve())
//         .on('error', (err) => reject(err));
//     });

//     const csvData = stringify(rows, { header: true });
//     fs.writeFileSync(filePath, csvData, 'utf8');

//     return res.status(200).json({ message: 'Row updated successfully' });
//   } catch (error) {
//     console.error('Error updating row:', error);
//     return res.status(500).json({ message: 'Internal server error' });
//   }
// }

// import fs from 'fs';
// import path from 'path';
// import csv from 'csv-parser';
// import { createObjectCsvWriter } from 'csv-writer';

// const filePath = path.join(process.cwd(), 'src', 'data', 'data.csv');

// export default async function handler(req, res) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ message: 'Method not allowed' });
//   }

//   const { rowId, newData } = req.body;

//   try {
//     const fileStream = fs.createReadStream(filePath, 'utf8');
//     let rows = [];
//     let rowNum = 0;

//     await new Promise((resolve, reject) => {
//       fileStream.pipe(csv())
//         .on('data', (row) => {
//           if (rowNum === +rowId) {
//             rows.push(newData);
//           } else {
//             rows.push(row);
//           }
//           rowNum++;
//         })
//         .on('end', () => resolve())
//         .on('error', (err) => reject(err));
//     });

//     const csvWriter = createObjectCsvWriter({
//       path: filePath,
//       header: Object.keys(rows[0]), // Assuming rows[0] exists and has headers
//     });

//     await csvWriter.writeRecords(rows);

//     return res.status(200).json({ message: 'Row updated successfully' });
//   } catch (error) {
//     console.error('Error updating row:', error);
//     return res.status(500).json({ message: 'Internal server error' });
//   }
// }

// import fs from 'fs';
// import path from 'path';
// import csv from 'csv-parser';
// import { createObjectCsvWriter } from 'csv-writer';

// const filePath = path.join(process.cwd(), 'src', 'data', 'data.csv');

// export default async function handler(req, res) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ message: 'Method not allowed' });
//   }

//   const { rowId, newData } = req.body;

//   try {
//     // Read existing rows from CSV
//     const rows = [];
//     let rowNum = 0;

//     await new Promise((resolve, reject) => {
//       fs.createReadStream(filePath, 'utf8')
//         .pipe(csv())
//         .on('data', (row) => {
//           if (rowNum === +rowId) {
//             rows.push(newData); // Replace the row with updated data
//           } else {
//             rows.push(row); // Keep other rows unchanged
//           }
//           rowNum++;
//         })
//         .on('end', () => resolve())
//         .on('error', (err) => reject(err));
//     });

//     // Write the updated rows back to CSV
//     const csvWriter = createObjectCsvWriter({
//       path: filePath,
//       header: Object.keys(rows[0]), // Assuming rows[0] exists and has headers
//       append: false, // Ensure it overwrites the existing file
//     });

//     await csvWriter.writeRecords(rows);

//     return res.status(200).json({ message: 'Row updated successfully' });
//   } catch (error) {
//     console.error('Error updating row:', error);
//     return res.status(500).json({ message: 'Internal server error' });
//   }
// }

import fs from 'fs';
import path from 'path';
import csv from 'csv-parser';
import { createObjectCsvWriter } from 'csv-writer';

const filePath = path.join(process.cwd(), 'src', 'data2', 'dataset.csv');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { rowId, newData } = req.body;

  try {
    // Read existing rows from CSV
    const rows = [];
    let rowNum = 0;

    await new Promise((resolve, reject) => {
      fs.createReadStream(filePath, 'utf8')
        .pipe(csv())
        .on('data', (row) => {
          if (rowNum === +rowId) {
            // Replace the row with updated data
            rows.push(newData);
          } else {
            // Keep other rows unchanged
            rows.push(row);
          }
          rowNum++;
        })
        .on('end', () => resolve())
        .on('error', (err) => reject(err));
    });

    // Write the updated rows back to CSV
    const csvWriter = createObjectCsvWriter({
      path: filePath,
      header: Object.keys(rows[0]), // Use the keys of the first row for headers
      append: false, // Ensure it overwrites the existing file
    });

    await csvWriter.writeRecords(rows);

    return res.status(200).json({ message: 'Row updated successfully' });
  } catch (error) {
    console.error('Error updating row:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
