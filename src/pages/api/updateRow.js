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

// import fs from 'fs';
// import path from 'path';
// import csv from 'csv-parser';
// import { createObjectCsvWriter } from 'csv-writer';

// const filePath = path.join(process.cwd(), 'src', 'data2', 'dataset.csv');

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
//             // Replace the row with updated data
//             rows.push(newData);
//           } else {
//             // Keep other rows unchanged
//             rows.push(row);
//           }
//           rowNum++;
//         })
//         .on('end', () => resolve())
//         .on('error', (err) => reject(err));
//     });

//     // Write the updated rows back to CSV
//     const csvWriter = createObjectCsvWriter({
//       path: filePath,
//       header: Object.keys(rows[0]), // Use the keys of the first row for headers
//       append: false, // Ensure it overwrites the existing file
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

// export default async function handler(req, res) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ message: 'Method Not Allowed' });
//   }

//   const { rowId, newData } = req.body;

//   try {
//     const dataDirectory = path.join(process.cwd(), 'src', 'data2');
//     const csvFilesToUpdate = determineCSVFilesToUpdate(newData);

//     for (const csvFile of csvFilesToUpdate) {
//       const filePath = path.join(dataDirectory, csvFile);
//       const rows = [];

//       // Read existing CSV file
//       await new Promise((resolve, reject) => {
//         fs.createReadStream(filePath, 'utf8')
//           .pipe(csv())
//           .on('data', (row) => rows.push(row))
//           .on('end', () => resolve())
//           .on('error', (err) => reject(err));
//       });

//       // Find the row to update or append a new row
//       const rowIndex = rows.findIndex(row => row['ID'] === rowId);
//       if (rowIndex !== -1) {
//         rows[rowIndex] = { ...rows[rowIndex], ...newData };
//       } else {
//         rows.push({ ...newData });
//       }

//       // Write back to CSV file
//       const csvStream = fs.createWriteStream(filePath);
//       csvStream.write('ID,Image,IMAGE CLASSIFIER (p1),VALID/INVALID,BLD OR URINE/OTHER\n'); // Replace with your CSV headers
//       rows.forEach(row => csvStream.write(`${row['ID']},${row['Image']},${row['IMAGE CLASSIFIER (p1)']},${row['VALID/INVALID']},${row['BLD OR URINE/OTHER']}\n`));

//       csvStream.end();
//     }

//     res.status(200).json({ message: 'Row updated successfully' });
//   } catch (error) {
//     console.error('Error updating row:', error);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// }

// function determineCSVFilesToUpdate(newData) {
//   const { 'IMAGE CLASSIFIER (p1)': category, 'VALID/INVALID': validity, 'BLD OR URINE/OTHER': type } = newData;
//   const csvFilesToUpdate = [];

//   if (category === 'FOOD') {
//     csvFilesToUpdate.push('food.csv');
//   } else if (category === 'BODY PART') {
//     csvFilesToUpdate.push('bodypart.csv');
//   } else if (category === 'OTHER') {
//     csvFilesToUpdate.push('other(p0).csv');
//     if (validity === 'VALID') {
//       csvFilesToUpdate.push('valid.csv');
//       if (type === 'BLD OR URINE') {
//         csvFilesToUpdate.push('bldurine.csv');
//       } else if (type === 'OTHER') {
//         csvFilesToUpdate.push('other(p2).csv');
//       }
//     } else if (validity === 'INVALID') {
//       csvFilesToUpdate.push('invalid.csv');
//     }
//   }

//   return csvFilesToUpdate;
// }

// import fs from 'fs';
// import path from 'path';
// import csv from 'csv-parser';

// export default async function handler(req, res) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ message: 'Method Not Allowed' });
//   }

//   const { rowId, newData, oldData } = req.body;

//   try {
//     const dataDirectory = path.join(process.cwd(), 'src', 'data2');

//     const oldCSVFilesToDeleteFrom = determineCSVFilesToUpdate(oldData);
//     const newCSVFilesToAppendTo = determineCSVFilesToUpdate(newData);

//     // First, delete the row from the old CSV files
//     for (const oldCSVFile of oldCSVFilesToDeleteFrom) {
//       const oldFilePath = path.join(dataDirectory, oldCSVFile);
//       let oldRows = [];

//       // Read existing rows, excluding the row to delete
//       await new Promise((resolve, reject) => {
//         fs.createReadStream(oldFilePath, 'utf8')
//           .pipe(csv())
//           .on('data', (row) => {
//             if (row['ID'] !== rowId) {
//               oldRows.push(row);
//             }
//           })
//           .on('end', () => resolve())
//           .on('error', (err) => reject(err));
//       });

//       // Write back the remaining rows
//       const oldCsvStream = fs.createWriteStream(oldFilePath);
//       oldCsvStream.write('ID,Image,IMAGE CLASSIFIER (p1),VALID/INVALID,BLD OR URINE/OTHER\n'); // Replace with your CSV headers
//       oldRows.forEach(row => oldCsvStream.write(`${row['ID']},${row['Image']},${row['IMAGE CLASSIFIER (p1)']},${row['VALID/INVALID']},${row['BLD OR URINE/OTHER']}\n`));
//       oldCsvStream.end();
//     }

//     // Next, append or update the row in the new CSV files
//     for (const newCSVFile of newCSVFilesToAppendTo) {
//       const newFilePath = path.join(dataDirectory, newCSVFile);
//       const rows = [];

//       // Read existing CSV file
//       await new Promise((resolve, reject) => {
//         fs.createReadStream(newFilePath, 'utf8')
//           .pipe(csv())
//           .on('data', (row) => rows.push(row))
//           .on('end', () => resolve())
//           .on('error', (err) => reject(err));
//       });

//       // Find the row to update or append a new row
//       const rowIndex = rows.findIndex(row => row['ID'] === rowId);
//       if (rowIndex !== -1) {
//         rows[rowIndex] = { ...rows[rowIndex], ...newData };
//       } else {
//         rows.push({ ...newData });
//       }

//       // Write back to the CSV file
//       const csvStream = fs.createWriteStream(newFilePath);
//       csvStream.write('ID,Image,IMAGE CLASSIFIER (p1),VALID/INVALID,BLD OR URINE/OTHER\n'); // Replace with your CSV headers
//       rows.forEach(row => csvStream.write(`${row['ID']},${row['Image']},${row['IMAGE CLASSIFIER (p1)']},${row['VALID/INVALID']},${row['BLD OR URINE/OTHER']}\n`));
//       csvStream.end();
//     }

//     res.status(200).json({ message: 'Row updated successfully' });
//   } catch (error) {
//     console.error('Error updating row:', error);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// }

// function determineCSVFilesToUpdate(data) {
//   const { 'IMAGE CLASSIFIER (p1)': category, 'VALID/INVALID': validity, 'BLD OR URINE/OTHER': type } = data;
//   const csvFilesToUpdate = [];

//   if (category === 'FOOD') {
//     csvFilesToUpdate.push('food.csv');
//   } else if (category === 'BODY PART') {
//     csvFilesToUpdate.push('bodypart.csv');
//   } else if (category === 'OTHER') {
//     csvFilesToUpdate.push('other(p0).csv');
//     if (validity === 'VALID') {
//       csvFilesToUpdate.push('valid.csv');
//       if (type === 'BLD OR URINE') {
//         csvFilesToUpdate.push('bldurine.csv');
//       } else if (type === 'OTHER') {
//         csvFilesToUpdate.push('other(p2).csv');
//       }
//     } else if (validity === 'INVALID') {
//       csvFilesToUpdate.push('invalid.csv');
//     }
//   }

//   return csvFilesToUpdate;
// }

// import fs from 'fs';
// import path from 'path';
// import csv from 'csv-parser';
// import { parse } from 'json2csv';

// export default async function handler(req, res) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ message: 'Method Not Allowed' });
//   }

//   const { rowId, newData, oldData } = req.body;

//   try {
//     const dataDirectory = path.join(process.cwd(), 'src', 'data2');

//     const oldCSVFilesToDeleteFrom = determineCSVFilesToUpdate(oldData);
//     const newCSVFilesToAppendTo = determineCSVFilesToUpdate(newData);

//     // First, delete the row from the old CSV files
//     for (const oldCSVFile of oldCSVFilesToDeleteFrom) {
//       const oldFilePath = path.join(dataDirectory, oldCSVFile);
//       let oldRows = [];

//       // Read existing rows, excluding the row to delete
//       await new Promise((resolve, reject) => {
//         const readStream = fs.createReadStream(oldFilePath, 'utf8');
//         readStream
//           .pipe(csv())
//           .on('data', (row) => {
//             if (row['ID'] !== rowId) {
//               oldRows.push(row);
//             }
//           })
//           .on('end', () => {
//             readStream.close();
//             resolve();
//           })
//           .on('error', (err) => reject(err));
//       });
//       const csvStream = fs.createWriteStream(oldFilePath);
//       csvStream.write('ID,Image,IMAGE CLASSIFIER (p1),VALID/INVALID,BLD OR URINE/OTHER,Visited\n'); 
//       oldRows.forEach(row => {
//         if (row['ID'] === rowId) {
//           row['Visited'] = 'true'; 
//         }
//         const csvLine = `${row['ID']},${row['Image']},${row['IMAGE CLASSIFIER (p1)']},${row['VALID/INVALID']},${row['BLD OR URINE/OTHER']},${row['Visited']}\n`;
//         csvStream.write(csvLine);
//       });
//       csvStream.end();
//     }

//     for (const newCSVFile of newCSVFilesToAppendTo) {
//       const newFilePath = path.join(dataDirectory, newCSVFile);
//       const rows = [];
//       await new Promise((resolve, reject) => {
//         const readStream = fs.createReadStream(newFilePath, 'utf8');
//         readStream
//           .pipe(csv())
//           .on('data', (row) => rows.push(row))
//           .on('end', () => {
//             readStream.close();
//             resolve();
//           })
//           .on('error', (err) => reject(err));
//       });
//       const rowIndex = rows.findIndex(row => row['ID'] === rowId);
//       if (rowIndex !== -1) {
//         rows[rowIndex] = { ...rows[rowIndex], ...newData, 'Visited': 'true' };
//       } else {
//         newData['Visited'] = 'true';
//         rows.push({ ...newData });
//       }
//       const csvStream = fs.createWriteStream(newFilePath);
//       csvStream.write('ID,Image,IMAGE CLASSIFIER (p1),VALID/INVALID,BLD OR URINE/OTHER,Visited\n'); 
//       rows.forEach(row => {
//         const csvLine = `${row['ID']},${row['Image']},${row['IMAGE CLASSIFIER (p1)']},${row['VALID/INVALID']},${row['BLD OR URINE/OTHER']},${row['Visited']}\n`;
//         csvStream.write(csvLine);
//       });
//       csvStream.end();
//     }





//     res.status(200).json({ message: 'Row updated successfully' });
//   } catch (error) {
//     console.error('Error updating row:', error);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// }

// function determineCSVFilesToUpdate(data) {
//   const { 'IMAGE CLASSIFIER (p1)': category, 'VALID/INVALID': validity, 'BLD OR URINE/OTHER': type } = data;
//   const csvFilesToUpdate = [];

//   if (category === 'FOOD') {
//     csvFilesToUpdate.push('food.csv');
//   } else if (category === 'BODY PART') {
//     csvFilesToUpdate.push('bodypart.csv');
//   } else if (category === 'OTHER') {
//     csvFilesToUpdate.push('other(p0).csv');
//     if (validity === 'VALID') {
//       csvFilesToUpdate.push('valid.csv');
//       if (type === 'BLD OR URINE') {
//         csvFilesToUpdate.push('bldurine.csv');
//       } else if (type === 'OTHER') {
//         csvFilesToUpdate.push('other(p2).csv');
//       }
//     } else if (validity === 'INVALID') {
//       csvFilesToUpdate.push('invalid.csv');
//     }
//   }

//   return csvFilesToUpdate;
// }

// import fs from 'fs';
// import path from 'path';
// import csv from 'csv-parser';

// export default async function handler(req, res) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ message: 'Method Not Allowed' });
//   }

//   const { rowId, newData, oldData } = req.body;

//   try {
//     const dataDirectory = path.join(process.cwd(), 'src', 'data2');

//     const oldCSVFilesToDeleteFrom = determineCSVFilesToUpdate(oldData);
//     const newCSVFilesToAppendTo = determineCSVFilesToUpdate(newData);

//     // Update old CSV files
//     for (const oldCSVFile of oldCSVFilesToDeleteFrom) {
//       const oldFilePath = path.join(dataDirectory, oldCSVFile);
//       let oldRows = [];

//       // Read existing rows, excluding the row to delete
//       await new Promise((resolve, reject) => {
//         const readStream = fs.createReadStream(oldFilePath, 'utf8');
//         readStream
//           .pipe(csv())
//           .on('data', (row) => {
//             if (row['message_id_new'] !== rowId) {
//               oldRows.push(row);
//             }
//           })
//           .on('end', () => {
//             readStream.close();
//             resolve();
//           })
//           .on('error', (err) => reject(err));
//       });

//       // Write updated rows back to the CSV file
//       const csvStream = fs.createWriteStream(oldFilePath);
//       csvStream.write('message_id_new,user_id,output,task0,task1,task2\n');
//       oldRows.forEach(row => {
//         // if (row['message_id_new'] === rowId) {
//         //   row['Visited'] = 'true'; // Mark as visited
//         // }
//         const csvLine = `${row['message_id_new']},${row['user_id']},${row['output']},${row['task0']},${row['task1']},${row['task2']}\n`;
//         csvStream.write(csvLine);
//       });
//       csvStream.end();
//     }

//     // Append/update new CSV files
//     for (const newCSVFile of newCSVFilesToAppendTo) {
//       const newFilePath = path.join(dataDirectory, newCSVFile);
//       const rows = [];

//       // Read existing rows
//       await new Promise((resolve, reject) => {
//         const readStream = fs.createReadStream(newFilePath, 'utf8');
//         readStream
//           .pipe(csv())
//           .on('data', (row) => rows.push(row))
//           .on('end', () => {
//             readStream.close();
//             resolve();
//           })
//           .on('error', (err) => reject(err));
//       });

//       // Find index of the row to update or append new row
//       const rowIndex = rows.findIndex(row => row['message_id_new'] === rowId);
//       if (rowIndex !== -1) {
//         rows[rowIndex] = { ...rows[rowIndex], ...newData};
//       } else {
//         // newData['Visited'] = 'true';
//         rows.push({ ...newData });
//       }

//       // Write updated rows back to the CSV file
//       const csvStream = fs.createWriteStream(newFilePath);
//       csvStream.write('message_id_new,user_id,output,task0,task1,task2,Visited\n');
//       rows.forEach(row => {
//         const csvLine = `${row['message_id_new']},${row['user_id']},${row['output']},${row['task0']},${row['task1']},${row['task2']}\n`;
//         csvStream.write(csvLine);
//       });
//       csvStream.end();
//     }

//     res.status(200).json({ message: 'Row updated successfully' });
//   } catch (error) {
//     console.error('Error updating row:', error);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// }

// function determineCSVFilesToUpdate(data) {
//   const { task0: category, task1: validity, task2: type,output: output} = data;
//   const csvFilesToUpdate = [];

//   if (category === 'Food') {
//     csvFilesToUpdate.push('food.csv');
//   } else if (category === 'Body Part') {
//     csvFilesToUpdate.push('bodypart.csv');
//   } else if (category === 'Other') {
//     csvFilesToUpdate.push('other(p0).csv');
//     if (validity === 'Valid') {
//       csvFilesToUpdate.push('valid.csv');
//       if (type === 'Blood & Urine') {
//         csvFilesToUpdate.push('bldurine.csv');
//       } else if (type === 'Other') {
//         csvFilesToUpdate.push('other(p2).csv');
//       }
//     } else if (validity === 'Invalid') {
//       csvFilesToUpdate.push('invalid.csv');
//     }
//   }

//   return csvFilesToUpdate;
// }

// import fs from 'fs';
// import path from 'path';
// import csv from 'csv-parser';

// export default async function handler(req, res) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ message: 'Method Not Allowed' });
//   }

//   const { rowId, newData, oldData } = req.body;

//   try {
//     const dataDirectory = path.join(process.cwd(), 'src', 'data2');

//     const oldCSVFilesToDeleteFrom = determineCSVFilesToUpdate(oldData);
//     const newCSVFilesToAppendTo = determineCSVFilesToUpdate(newData);

//     // Update old CSV files
//     for (const oldCSVFile of oldCSVFilesToDeleteFrom) {
//       const oldFilePath = path.join(dataDirectory, oldCSVFile);
//       let oldRows = [];

//       // Read existing rows, excluding the row to delete
//       await new Promise((resolve, reject) => {
//         const readStream = fs.createReadStream(oldFilePath, 'utf8');
//         readStream
//           .pipe(csv())
//           .on('data', (row) => {
//             if (row['message_id_new'] !== rowId) {
//               oldRows.push(row);
//             }
//           })
//           .on('end', () => {
//             readStream.close();
//             resolve();
//           })
//           .on('error', (err) => reject(err));
//       });

//       // Write updated rows back to the CSV file
//       const csvStream = fs.createWriteStream(oldFilePath);
//       csvStream.write('message_id_new,user_id,output,task0,task1,task2\n');
//       oldRows.forEach(row => {
//         const csvLine = `${row['message_id_new']},${row['user_id']},${escapeNewLines(row['output'])},${row['task0']},${row['task1']},${row['task2']}\n`;
//         csvStream.write(csvLine);
//       });
//       csvStream.end();
//     }

//     // Append/update new CSV files
//     for (const newCSVFile of newCSVFilesToAppendTo) {
//       const newFilePath = path.join(dataDirectory, newCSVFile);
//       const rows = [];

//       // Read existing rows
//       await new Promise((resolve, reject) => {
//         const readStream = fs.createReadStream(newFilePath, 'utf8');
//         readStream
//           .pipe(csv())
//           .on('data', (row) => rows.push(row))
//           .on('end', () => {
//             readStream.close();
//             resolve();
//           })
//           .on('error', (err) => reject(err));
//       });

//       // Find index of the row to update or append new row
//       const rowIndex = rows.findIndex(row => row['message_id_new'] === rowId);
//       if (rowIndex !== -1) {
//         rows[rowIndex] = { ...rows[rowIndex], ...newData};
//       } else {
//         rows.push({ ...newData });
//       }

//       // Write updated rows back to the CSV file
//       const csvStream = fs.createWriteStream(newFilePath);
//       csvStream.write('message_id_new,user_id,output,task0,task1,task2,Visited\n');
//       rows.forEach(row => {
//         const csvLine = `${row['message_id_new']},${row['user_id']},${escapeNewLines(row['output'])},${row['task0']},${row['task1']},${row['task2']}\n`;
//         csvStream.write(csvLine);
//       });
//       csvStream.end();
//     }

//     res.status(200).json({ message: 'Row updated successfully' });
//   } catch (error) {
//     console.error('Error updating row:', error);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// }

// function determineCSVFilesToUpdate(data) {
//   const { task0: category, task1: validity, task2: type, output } = data;
//   const csvFilesToUpdate = [];

//   if (category === 'Food') {
//     csvFilesToUpdate.push('food.csv');
//   } else if (category === 'Body Part') {
//     csvFilesToUpdate.push('bodypart.csv');
//   } else if (category === 'Other') {
//     csvFilesToUpdate.push('other(p0).csv');
//     if (validity === 'Valid') {
//       csvFilesToUpdate.push('valid.csv');
//       if (type === 'Blood & Urine') {
//         csvFilesToUpdate.push('bldurine.csv');
//       } else if (type === 'Other') {
//         csvFilesToUpdate.push('other(p2).csv');
//       }
//     } else if (validity === 'Invalid') {
//       csvFilesToUpdate.push('invalid.csv');
//     }
//   }

//   return csvFilesToUpdate;
// }

// function escapeNewLines(text) {
//   return text ? text.replace(/\n/g, '\\n') : '';
// }

// function unescapeNewLines(text) {
//   return text ? text.replace(/\\n/g, '\n') : '';
// }

// import fs from 'fs';
// import path from 'path';
// import csv from 'csv-parser';

// export default async function handler(req, res) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ message: 'Method Not Allowed' });
//   }

//   const { rowId, newData, oldData } = req.body;

//   try {
//     const dataDirectory = path.join(process.cwd(), 'src', 'data2');

//     const oldCSVFilesToDeleteFrom = determineCSVFilesToUpdate(oldData);
//     const newCSVFilesToAppendTo = determineCSVFilesToUpdate(newData);

//     // Update old CSV files
//     for (const oldCSVFile of oldCSVFilesToDeleteFrom) {
//       const oldFilePath = path.join(dataDirectory, oldCSVFile);
//       let oldRows = [];

//       // Read existing rows, excluding the row to delete
//       await new Promise((resolve, reject) => {
//         const readStream = fs.createReadStream(oldFilePath, 'utf8');
//         readStream
//           .pipe(csv())
//           .on('data', (row) => {
//             if (row['message_id_new'] !== rowId) {
//               oldRows.push(row);
//             }
//           })
//           .on('end', () => {
//             readStream.close();
//             resolve();
//           })
//           .on('error', (err) => reject(err));
//       });

//       // Write updated rows back to the CSV file
//       const csvStream = fs.createWriteStream(oldFilePath);
//       csvStream.write('message_id_new,user_id,output,task0,task1,task2\n');
//       oldRows.forEach(row => {
//         const csvLine = formatCSVLine(row);
//         csvStream.write(csvLine);
//       });
//       csvStream.end();
//     }

//     // Append/update new CSV files
//     for (const newCSVFile of newCSVFilesToAppendTo) {
//       const newFilePath = path.join(dataDirectory, newCSVFile);
//       const rows = [];

//       // Read existing rows
//       await new Promise((resolve, reject) => {
//         const readStream = fs.createReadStream(newFilePath, 'utf8');
//         readStream
//           .pipe(csv())
//           .on('data', (row) => rows.push(row))
//           .on('end', () => {
//             readStream.close();
//             resolve();
//           })
//           .on('error', (err) => reject(err));
//       });

//       // Find index of the row to update or append new row
//       const rowIndex = rows.findIndex(row => row['message_id_new'] === rowId);
//       if (rowIndex !== -1) {
//         rows[rowIndex] = { ...rows[rowIndex], ...newData };
//       } else {
//         rows.push({ ...newData });
//       }

//       // Write updated rows back to the CSV file
//       const csvStream = fs.createWriteStream(newFilePath);
//       csvStream.write('message_id_new,user_id,output,task0,task1,task2\n');
//       rows.forEach(row => {
//         const csvLine = formatCSVLine(row);
//         csvStream.write(csvLine);
//       });
//       csvStream.end();
//     }

//     res.status(200).json({ message: 'Row updated successfully' });
//   } catch (error) {
//     console.error('Error updating row:', error);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// }

// function determineCSVFilesToUpdate(data) {
//   const { task0: category, task1: validity, task2: type, output } = data;
//   const csvFilesToUpdate = [];

//   if (category === 'Food') {
//     csvFilesToUpdate.push('food.csv');
//   } else if (category === 'Body Part') {
//     csvFilesToUpdate.push('bodypart.csv');
//   } else if (category === 'Other') {
//     csvFilesToUpdate.push('other(p0).csv');
//     if (validity === 'Valid') {
//       csvFilesToUpdate.push('valid.csv');
//       if (type === 'Blood & Urine') {
//         csvFilesToUpdate.push('bldurine.csv');
//       } else if (type === 'Other') {
//         csvFilesToUpdate.push('other(p2).csv');
//       }
//     } else if (validity === 'Invalid') {
//       csvFilesToUpdate.push('invalid.csv');
//     }
//   }

//   return csvFilesToUpdate;
// }

// function escapeField(text) {
//   if (text && (text.includes(',') || text.includes('\n'))) {
//     return `"${text.replace(/"/g, '""')}"`;
//   }
//   return text;
// }

// function formatCSVLine(row) {
//   const fields = ['message_id_new', 'user_id', 'output', 'task0', 'task1', 'task2'];
//   return fields.map(field => escapeField(row[field])).join(',') + '\n';
// }

// import fs from 'fs';
// import path from 'path';
// import csv from 'csv-parser';

// export default async function handler(req, res) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ message: 'Method Not Allowed' });
//   }

//   const { rowId, newData, oldData, currentFile } = req.body;

//   try {
//     const dataDirectory = path.join(process.cwd(), 'src', 'data2');

//     const oldCSVFilesToDeleteFrom = determineCSVFilesToUpdate(oldData);
//     const newCSVFilesToAppendTo = determineCSVFilesToUpdate(newData);

//     // Update old CSV files
//     for (const oldCSVFile of oldCSVFilesToDeleteFrom) {
//       const oldFilePath = path.join(dataDirectory, oldCSVFile);
//       let oldRows = [];

//       // Read existing rows, excluding the row to delete
//       await new Promise((resolve, reject) => {
//         const readStream = fs.createReadStream(oldFilePath, 'utf8');
//         readStream
//           .pipe(csv())
//           .on('data', (row) => {
//             if (row['message_id_new'] !== rowId) {
//               oldRows.push(row);
//             }
//           })
//           .on('end', () => {
//             readStream.close();
//             resolve();
//           })
//           .on('error', (err) => reject(err));
//       });

//       // Write updated rows back to the CSV file
//       const csvStream = fs.createWriteStream(oldFilePath);
//       csvStream.write('message_id_new,user_id,output,task0,task1,task2\n');
//       oldRows.forEach(row => {
//         const csvLine = formatCSVLine(row);
//         csvStream.write(csvLine);
//       });
//       csvStream.end();
//     }

//     // Append/update new CSV files
//     for (const newCSVFile of newCSVFilesToAppendTo) {
//       const newFilePath = path.join(dataDirectory, newCSVFile);
//       const rows = [];

//       // Read existing rows
//       await new Promise((resolve, reject) => {
//         const readStream = fs.createReadStream(newFilePath, 'utf8');
//         readStream
//           .pipe(csv())
//           .on('data', (row) => rows.push(row))
//           .on('end', () => {
//             readStream.close();
//             resolve();
//           })
//           .on('error', (err) => reject(err));
//       });

//       // Find index of the row to update or append new row
//       const rowIndex = rows.findIndex(row => row['message_id_new'] === rowId);
//       if (rowIndex !== -1) {
//         rows[rowIndex] = { ...rows[rowIndex], ...newData };
//       } else {
//         rows.push({ ...newData });
//       }

//       // Write updated rows back to the CSV file
//       const csvStream = fs.createWriteStream(newFilePath);
//       csvStream.write('message_id_new,user_id,output,task0,task1,task2\n');
//       rows.forEach(row => {
//         const csvLine = formatCSVLine(row);
//         csvStream.write(csvLine);
//       });
//       csvStream.end();
//     }

//     // Update the current file with the new data
//     const currentFilePath = path.join(dataDirectory, currentFile);
//     const currentFileRows = [];

//     // Read existing rows from the current file
//     await new Promise((resolve, reject) => {
//       const readStream = fs.createReadStream(currentFilePath, 'utf8');
//       readStream
//         .pipe(csv())
//         .on('data', (row) => currentFileRows.push(row))
//         .on('end', () => {
//           readStream.close();
//           resolve();
//         })
//         .on('error', (err) => reject(err));
//     });

//     // Find index of the row to update or append new row
//     const currentRowIndex = currentFileRows.findIndex(row => row['message_id_new'] === rowId);
//     if (currentRowIndex !== -1) {
//       currentFileRows[currentRowIndex] = { ...currentFileRows[currentRowIndex], ...newData };
//     } else {
//       currentFileRows.push({ ...newData });
//     }

//     // Write updated rows back to the current CSV file
//     const currentFileStream = fs.createWriteStream(currentFilePath);
//     currentFileStream.write('message_id_new,user_id,output,task0,task1,task2\n');
//     currentFileRows.forEach(row => {
//       const csvLine = formatCSVLine(row);
//       currentFileStream.write(csvLine);
//     });
//     currentFileStream.end();

//     res.status(200).json({ message: 'Row updated successfully' });
//   } catch (error) {
//     console.error('Error updating row:', error);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// }

// function determineCSVFilesToUpdate(data) {
//   const { task0: category, task1: validity, task2: type } = data;
//   const csvFilesToUpdate = [];

//   if (category === 'Food') {
//     csvFilesToUpdate.push('food.csv');
//   } else if (category === 'Body Part') {
//     csvFilesToUpdate.push('bodypart.csv');
//   } else if (category === 'Other') {
//     csvFilesToUpdate.push('other(p0).csv');
//     if (validity === 'Valid') {
//       csvFilesToUpdate.push('valid.csv');
//       if (type === 'Blood & Urine') {
//         csvFilesToUpdate.push('bldurine.csv');
//       } else if (type === 'Other') {
//         csvFilesToUpdate.push('other(p2).csv');
//       }
//     } else if (validity === 'Invalid') {
//       csvFilesToUpdate.push('invalid.csv');
//     }
//   }

//   return csvFilesToUpdate;
// }

// function escapeField(text) {
//   if (text && (text.includes(',') || text.includes('\n'))) {
//     return `"${text.replace(/"/g, '""')}"`;
//   }
//   return text;
// }

// function formatCSVLine(row) {
//   const fields = ['message_id_new', 'user_id', 'output', 'task0', 'task1', 'task2'];
//   return fields.map(field => escapeField(row[field])).join(',') + '\n';
// }

// import fs from 'fs';
// import path from 'path';
// import csv from 'csv-parser';

// export default async function handler(req, res) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ message: 'Method Not Allowed' });
//   }

//   const { rowId, newData, oldData, currentFile } = req.body;

//   try {
//     const dataDirectory = path.join(process.cwd(), 'src', 'data2');

//     const oldCSVFilesToDeleteFrom = determineCSVFilesToUpdate(oldData);
//     const newCSVFilesToAppendTo = determineCSVFilesToUpdate(newData);

//     // Update old CSV files
//     for (const oldCSVFile of oldCSVFilesToDeleteFrom) {
//       const oldFilePath = path.join(dataDirectory, oldCSVFile);
//       let oldRows = [];

//       // Read existing rows, excluding the row to delete
//       await new Promise((resolve, reject) => {
//         const readStream = fs.createReadStream(oldFilePath, 'utf8');
//         readStream
//           .pipe(csv())
//           .on('data', (row) => {
//             if (row['message_id_new'] !== rowId) {
//               oldRows.push(row);
//             }
//           })
//           .on('end', () => {
//             readStream.close();
//             resolve();
//           })
//           .on('error', (err) => reject(err));
//       });

//       // Write updated rows back to the CSV file
//       const csvStream = fs.createWriteStream(oldFilePath);
//       csvStream.write('message_id_new,user_id,task0,task1,task2,meta_fileURI,output0,output1,output2,comment\n');
//       oldRows.forEach(row => {
//         const csvLine = formatCSVLine(row);
//         csvStream.write(csvLine);
//       });
//       csvStream.end();
//     }

//     // Append/update new CSV files
//     for (const newCSVFile of newCSVFilesToAppendTo) {
//       const newFilePath = path.join(dataDirectory, newCSVFile);
//       const rows = [];

//       // Read existing rows
//       await new Promise((resolve, reject) => {
//         const readStream = fs.createReadStream(newFilePath, 'utf8');
//         readStream
//           .pipe(csv())
//           .on('data', (row) => rows.push(row))
//           .on('end', () => {
//             readStream.close();
//             resolve();
//           })
//           .on('error', (err) => reject(err));
//       });

//       // Find index of the row to update or append new row
//       const rowIndex = rows.findIndex(row => row['message_id_new'] === rowId);
//       if (rowIndex !== -1) {
//         // Check if task0 is changing and reset task1 and task2 accordingly
//         if (oldData.task0 !== newData.task0 || oldData.task1!== newData.task1) {
//           newData.task1 = getUpdatedTask1(newData);
//           newData.task2 = getUpdatedTask2(newData);
//         }
//         rows[rowIndex] = { ...rows[rowIndex], ...newData , comment: newData.comment || '-' };
//       } else {
//         // Check if task0 is changing and reset task1 and task2 accordingly
//         if (oldData.task0 !== newData.task0 || oldData.task1!== newData.task1) {
//           newData.task1 = getUpdatedTask1(newData);
//           newData.task2 = getUpdatedTask2(newData);
//         }
//         rows.push({ ...newData , comment: newData.comment || '-' });
//       }

//       // Write updated rows back to the CSV file
//       const csvStream = fs.createWriteStream(newFilePath);
//       csvStream.write('message_id_new,user_id,task0,task1,task2,meta_fileURI,output0,output1,output2,comment\n');
//       rows.forEach(row => {
//         const csvLine = formatCSVLine(row);
//         csvStream.write(csvLine);
//       });
//       csvStream.end();
//     }

//     // Update the current file with the new data
//     const currentFilePath = path.join(dataDirectory, currentFile);
//     const currentFileRows = [];

//     // Read existing rows from the current file
//     await new Promise((resolve, reject) => {
//       const readStream = fs.createReadStream(currentFilePath, 'utf8');
//       readStream
//         .pipe(csv())
//         .on('data', (row) => currentFileRows.push(row))
//         .on('end', () => {
//           readStream.close();
//           resolve();
//         })
//         .on('error', (err) => reject(err));
//     });

//     // Find index of the row to update or append new row
//     const currentRowIndex = currentFileRows.findIndex(row => row['message_id_new'] === rowId);
//     if (currentRowIndex !== -1) {
//       // Check if task0 is changing and reset task1 and task2 accordingly
//       if (oldData.task0 !== newData.task0 || oldData.task1!=newData.task1) {
//         newData.task1 = getUpdatedTask1(newData);
//         newData.task2 = getUpdatedTask2(newData);
//       }
//       currentFileRows[currentRowIndex] = { ...currentFileRows[currentRowIndex], ...newData, comment: newData.comment || '-'  };
//     } else {
//       // Check if task0 is changing and reset task1 and task2 accordingly
//       if (oldData.task0 !== newData.task0 || oldData.task1!=newData.task1) {
//         newData.task1 = getUpdatedTask1(newData);
//         newData.task2 = getUpdatedTask2(newData);
//       }
//       currentFileRows.push({ ...newData, comment: newData.comment || '-'  });
//     }

//     // Write updated rows back to the current CSV file
//     const currentFileStream = fs.createWriteStream(currentFilePath);
//     currentFileStream.write('message_id_new,user_id,task0,task1,task2,meta_fileURI,output0,output1,output2,comment\n');
//     currentFileRows.forEach(row => {
//       const csvLine = formatCSVLine(row);
//       currentFileStream.write(csvLine);
//     });
//     currentFileStream.end();

//     res.status(200).json({ message: 'Row updated successfully' });
//   } catch (error) {
//     console.error('Error updating row:', error);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// }

// function determineCSVFilesToUpdate(data) {
//   const { task0: category, task1: validity, task2: type } = data;
//   const csvFilesToUpdate = [];

//   if(category=== 'A'){
//     csvFilesToUpdate.push('A.csv');
//     if (validity === 'Valid') {
//       csvFilesToUpdate.push('valid.csv');
//       if (type === 'Blood & Urine') {
//         csvFilesToUpdate.push('bldurine.csv');
//       } else if (type === 'Other') {
//         csvFilesToUpdate.push('other(p2).csv');
//       }
//     } else if (validity === 'Invalid') {
//       csvFilesToUpdate.push('invalid.csv');
//     }
//   }
//   else if (category === 'B') {
//     csvFilesToUpdate.push('B.csv');
//     if (validity === 'Valid') {
//       csvFilesToUpdate.push('valid.csv');
//       if (type === 'Blood & Urine') {
//         csvFilesToUpdate.push('bldurine.csv');
//       } else if (type === 'Other') {
//         csvFilesToUpdate.push('other(p2).csv');
//       }
//     } else if (validity === 'Invalid') {
//       csvFilesToUpdate.push('invalid.csv');
//     }
//   } else if (category === 'C') {
//     csvFilesToUpdate.push('bodypart.csv');
//   } else if (category === 'D') {
//     csvFilesToUpdate.push('food.csv');
//   } else if (category === 'E') {
//     csvFilesToUpdate.push('E.csv');
//     if (validity === 'Valid') {
//       csvFilesToUpdate.push('valid.csv');
//       if (type === 'Blood & Urine') {
//         csvFilesToUpdate.push('bldurine.csv');
//       } else if (type === 'Other') {
//         csvFilesToUpdate.push('other(p2).csv');
//       }
//     } else if (validity === 'Invalid') {
//       csvFilesToUpdate.push('invalid.csv');
//     }
//   }
//   else if (category === 'Other') {
//     csvFilesToUpdate.push('other(p0).csv');
//     if (validity === 'Valid') {
//       csvFilesToUpdate.push('valid.csv');
//       if (type === 'Blood & Urine') {
//         csvFilesToUpdate.push('bldurine.csv');
//       } else if (type === 'Other') {
//         csvFilesToUpdate.push('other(p2).csv');
//       }
//     } else if (validity === 'Invalid') {
//       csvFilesToUpdate.push('invalid.csv');
//     }
//   }

//   return csvFilesToUpdate;
// }

// function escapeField(text) {
//   if (text && (text.includes(',') || text.includes('\n'))) {
//     return `"${text.replace(/"/g, '""')}"`;
//   }
//   return text;
// }

// // function formatCSVLine(row) {
// //   const fields = ['message_id_new', 'user_id', 'task0', 'task1', 'task2','meta_fileURI','output0','output1','output2','comment'];
// //   return fields.map(field => escapeField(row[field])).join(',') + '\n';
// // }
// function formatCSVLine(row) {
//   const fields = ['message_id_new', 'user_id', 'task0', 'task1', 'task2', 'meta_fileURI', 'output0', 'output1', 'output2', 'comment'];
//   const values = fields.map(field => {
//     if (field === 'comment') {
//       return escapeField(row.comment || '-'); // Ensure comment field is properly handled
//     }
//     return escapeField(row[field] || ''); // Ensure other fields are properly handled
//   });
//   return values.join(',') + '\n';
// }

// function getUpdatedTask1(data) {
//   if (data.task0 === 'Body Part' || data.task0 === 'Food') {
//     return '-';
//   }
//   return data.task1;
// }

// function getUpdatedTask2(data) {
//   if (data.task0 === 'Body Part' || data.task0 === 'Food') {
//     return '-';
//   } else if (data.task0 === 'Other' && data.task1 === 'Invalid') {
//     return '-';
//   }
//   return data.task2;
// }

// import AWS from 'aws-sdk';
// import { parse, stringify } from 'csv-parse/sync';

// // Configure AWS SDK
// AWS.config.update({
//   accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//   secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//   region: process.env.AWS_REGION
// });

// const s3 = new AWS.S3();
// const BUCKET_NAME = process.env.S3_BUCKET_NAME;

// export default async function handler(req, res) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ message: 'Method Not Allowed' });
//   }

//   const { rowId, newData, oldData, currentFile } = req.body;

//   try {
//     const oldCSVFilesToDeleteFrom = determineCSVFilesToUpdate(oldData);
//     const newCSVFilesToAppendTo = determineCSVFilesToUpdate(newData);

//     // Update old CSV files
//     for (const oldCSVFile of oldCSVFilesToDeleteFrom) {
//       await updateS3File(oldCSVFile, (rows) => rows.filter(row => row['message_id_new'] !== rowId));
//     }

//     // Append/update new CSV files
//     for (const newCSVFile of newCSVFilesToAppendTo) {
//       await updateS3File(newCSVFile, (rows) => {
//         const rowIndex = rows.findIndex(row => row['message_id_new'] === rowId);
//         if (rowIndex !== -1) {
//           if (oldData.task0 !== newData.task0 || oldData.task1 !== newData.task1) {
//             newData.task1 = getUpdatedTask1(newData);
//             newData.task2 = getUpdatedTask2(newData);
//           }
//           rows[rowIndex] = { ...rows[rowIndex], ...newData, comment: newData.comment || '-' };
//         } else {
//           if (oldData.task0 !== newData.task0 || oldData.task1 !== newData.task1) {
//             newData.task1 = getUpdatedTask1(newData);
//             newData.task2 = getUpdatedTask2(newData);
//           }
//           rows.push({ ...newData, comment: newData.comment || '-' });
//         }
//         return rows;
//       });
//     }

//     // Update the current file
//     await updateS3File(currentFile, (rows) => {
//       const rowIndex = rows.findIndex(row => row['message_id_new'] === rowId);
//       if (rowIndex !== -1) {
//         if (oldData.task0 !== newData.task0 || oldData.task1 !== newData.task1) {
//           newData.task1 = getUpdatedTask1(newData);
//           newData.task2 = getUpdatedTask2(newData);
//         }
//         rows[rowIndex] = { ...rows[rowIndex], ...newData, comment: newData.comment || '-' };
//       } else {
//         if (oldData.task0 !== newData.task0 || oldData.task1 !== newData.task1) {
//           newData.task1 = getUpdatedTask1(newData);
//           newData.task2 = getUpdatedTask2(newData);
//         }
//         rows.push({ ...newData, comment: newData.comment || '-' });
//       }
//       return rows;
//     });

//     res.status(200).json({ message: 'Row updated successfully' });
//   } catch (error) {
//     console.error('Error updating row:', error);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// }

// async function updateS3File(fileName, updateFunction) {
//   const params = {
//     Bucket: BUCKET_NAME,
//     Key: `datasets/${fileName}`
//   };

//   const data = await s3.getObject(params).promise();
//   const content = data.Body.toString('utf-8');
//   const rows = parse(content, { columns: true, skip_empty_lines: true });

//   const updatedRows = updateFunction(rows);

//   const csvContent = stringify(updatedRows, { header: true });

//   await s3.putObject({
//     Bucket: BUCKET_NAME,
//     Key: `datasets/${fileName}`,
//     Body: csvContent,
//     ContentType: 'text/csv'
//   }).promise();
// }

// function determineCSVFilesToUpdate(data) {
//   const { task0: category, task1: validity, task2: type } = data;
//   const csvFilesToUpdate = [];

//   if(category=== 'A'){
//     csvFilesToUpdate.push('A.csv');
//     if (validity === 'Valid') {
//       csvFilesToUpdate.push('valid.csv');
//       if (type === 'Blood & Urine') {
//         csvFilesToUpdate.push('bldurine.csv');
//       } else if (type === 'Other') {
//         csvFilesToUpdate.push('other(p2).csv');
//       }
//     } else if (validity === 'Invalid') {
//       csvFilesToUpdate.push('invalid.csv');
//     }
//   }
//   else if (category === 'B') {
//     csvFilesToUpdate.push('B.csv');
//     if (validity === 'Valid') {
//       csvFilesToUpdate.push('valid.csv');
//       if (type === 'Blood & Urine') {
//         csvFilesToUpdate.push('bldurine.csv');
//       } else if (type === 'Other') {
//         csvFilesToUpdate.push('other(p2).csv');
//       }
//     } else if (validity === 'Invalid') {
//       csvFilesToUpdate.push('invalid.csv');
//     }
//   } else if (category === 'C') {
//     csvFilesToUpdate.push('bodypart.csv');
//   } else if (category === 'D') {
//     csvFilesToUpdate.push('food.csv');
//   } else if (category === 'E') {
//     csvFilesToUpdate.push('E.csv');
//     if (validity === 'Valid') {
//       csvFilesToUpdate.push('valid.csv');
//       if (type === 'Blood & Urine') {
//         csvFilesToUpdate.push('bldurine.csv');
//       } else if (type === 'Other') {
//         csvFilesToUpdate.push('other(p2).csv');
//       }
//     } else if (validity === 'Invalid') {
//       csvFilesToUpdate.push('invalid.csv');
//     }
//   }
//   else if (category === 'Other') {
//     csvFilesToUpdate.push('other(p0).csv');
//     if (validity === 'Valid') {
//       csvFilesToUpdate.push('valid.csv');
//       if (type === 'Blood & Urine') {
//         csvFilesToUpdate.push('bldurine.csv');
//       } else if (type === 'Other') {
//         csvFilesToUpdate.push('other(p2).csv');
//       }
//     } else if (validity === 'Invalid') {
//       csvFilesToUpdate.push('invalid.csv');
//     }
//   }

//   return csvFilesToUpdate;
// }

// function getUpdatedTask1(data) {
//   if (data.task0 === 'Body Part' || data.task0 === 'Food') {
//     return '-';
//   }
//   return data.task1;
// }

// function getUpdatedTask2(data) {
//   if (data.task0 === 'Body Part' || data.task0 === 'Food') {
//     return '-';
//   } else if (data.task0 === 'Other' && data.task1 === 'Invalid') {
//     return '-';
//   }
//   return data.task2;
// }

import AWS from 'aws-sdk';
import { parse } from 'csv-parse/sync';

// Configure AWS SDK
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION
});

const s3 = new AWS.S3();
const BUCKET_NAME = process.env.S3_BUCKET_NAME;

export default async function handler(req, res) {
  const validFiles = ['A.csv', 'B.csv', 'bodypart.csv', 'food.csv', 'E.csv', 'other(p0).csv', 'valid.csv', 'invalid.csv', 'bldurine.csv', 'other(p2).csv'];
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { rowId, newData, oldData, currentFile, sourceFile } = req.body;
  if (!sourceFile && validFiles.includes(currentFile)) {
    return res.status(400).json({ message: 'Source file is missing' });
  }else if(!sourceFile){
    sourceFile = currentFile;
  }
  try {
    console.log('Processing update for rowId:', rowId);
    console.log('Source file:', sourceFile);
    const oldCSVFilesToDeleteFrom = determineCSVFilesToUpdate(oldData);
    const newCSVFilesToAppendTo = determineCSVFilesToUpdate(newData);

    console.log('Old CSV files to delete from:', oldCSVFilesToDeleteFrom);
    console.log('New CSV files to append to:', newCSVFilesToAppendTo);

    // Update old CSV files
    for (const oldCSVFile of oldCSVFilesToDeleteFrom) {
      console.log('Updating old CSV file:', oldCSVFile);
      await updateS3File(oldCSVFile, (rows) => rows.filter(row => row['message_id_new'] !== rowId));
    }

    // Append/update new CSV files
    for (const newCSVFile of newCSVFilesToAppendTo) {
      console.log('Updating new CSV file:', newCSVFile);
      await updateS3File(newCSVFile, (rows) => {
        const rowIndex = rows.findIndex(row => row['message_id_new'] === rowId);
        if (rowIndex !== -1) {
          if (oldData.task0 !== newData.task0 || oldData.task1 !== newData.task1) {
            newData.task1 = getUpdatedTask1(newData);
            newData.task2 = getUpdatedTask2(newData);
          }
          // rows[rowIndex] = { ...rows[rowIndex], ...newData, comment: newData.comment || '-' };
          rows[rowIndex] = { ...rows[rowIndex], ...newData, comment: newData.comment || '-', sourceFile: sourceFile};
        } else {
          if (oldData.task0 !== newData.task0 || oldData.task1 !== newData.task1) {
            newData.task1 = getUpdatedTask1(newData);
            newData.task2 = getUpdatedTask2(newData);
          }
          // rows.push({ ...newData, comment: newData.comment || '-' });
          rows.push({ ...newData, comment: newData.comment || '-', sourceFile: sourceFile });
        }
        return rows;
      });
    }



    
if (!validFiles.includes(currentFile)) {
      console.log('Updating current file:', currentFile);
    await updateS3File(currentFile, (rows) => {
      const rowIndex = rows.findIndex(row => row['message_id_new'] === rowId);
      if (rowIndex !== -1) {
        if (oldData.task0 !== newData.task0 || oldData.task1 !== newData.task1) {
          newData.task1 = getUpdatedTask1(newData);
          newData.task2 = getUpdatedTask2(newData);
        }
        // rows[rowIndex] = { ...rows[rowIndex], ...newData, comment: newData.comment || '-' };
        rows[rowIndex] = { ...rows[rowIndex], ...newData, comment: newData.comment || '-'};
      } else {
        if (oldData.task0 !== newData.task0 || oldData.task1 !== newData.task1) {
          newData.task1 = getUpdatedTask1(newData);
          newData.task2 = getUpdatedTask2(newData);
        }
        // rows.push({ ...newData, comment: newData.comment || '-' });
        rows.push({ ...newData, comment: newData.comment || '-'});
      }
      return rows;
    });
  }else{
      // Update the source file
      console.log('Updating source file:', sourceFile);
      await updateS3File(sourceFile, (rows) => {
        const rowIndex = rows.findIndex(row => row['message_id_new'] === rowId);
        if (rowIndex !== -1) {
          if (oldData.task0 !== newData.task0 || oldData.task1 !== newData.task1) {
            newData.task1 = getUpdatedTask1(newData);
            newData.task2 = getUpdatedTask2(newData);
          }
          rows[rowIndex] = { ...rows[rowIndex], ...newData, comment: newData.comment || '-', sourceFile };
        }
        return rows;
      });
    }
  
      console.log('Update completed successfully');
      res.status(200).json({ message: 'Row updated successfully' });
    } catch (error) {
      console.error('Error updating row:', error);
      res.status(500).json({ message: 'Internal Server Error', error: error.message, stack: error.stack });
    }
  }



// async function updateS3File(fileName, updateFunction) {
//   const params = {
//     Bucket: BUCKET_NAME,
//     Key: `datasets/${fileName}`
//   };
//   const data = await s3.getObject(params).promise();
//   const content = data.Body.toString('utf-8');
//   const rows = parse(content, { columns: true, skip_empty_lines: true });

//   const updatedRows = updateFunction(rows);

//   const csvContent = 'message_id_new,user_id,task0,task1,task2,meta_fileURI,output0,output1,output2,comment,sourceFile\n' +
//     updatedRows.map(formatCSVLine).join('');

//   await s3.putObject({
//     Bucket: BUCKET_NAME,
//     Key: `datasets/${fileName}`,
//     Body: csvContent,
//     ContentType: 'text/csv'
//   }).promise();
// }
// async function updateS3File(fileName, updateFunction) {
//   const params = {
//     Bucket: BUCKET_NAME,
//     Key: `datasets/${fileName}`
//   };
//   try {
//     console.log(`Fetching file: ${fileName}`);
//     const data = await s3.getObject(params).promise();
//     const content = data.Body.toString('utf-8');
//     const rows = parse(content, { columns: true, skip_empty_lines: true });

//     console.log(`Updating rows for file: ${fileName}`);
//     const updatedRows = updateFunction(rows);

//     const csvContent = 'message_id_new,user_id,task0,task1,task2,meta_fileURI,output0,output1,output2,comment,sourceFile\n' +
//       updatedRows.map(formatCSVLine).join('');

//     console.log(`Uploading updated file: ${fileName}`);
//     await s3.putObject({
//       Bucket: BUCKET_NAME,
//       Key: `datasets/${fileName}`,
//       Body: csvContent,
//       ContentType: 'text/csv'
//     }).promise();
//     console.log(`File updated successfully: ${fileName}`);
//   } catch (error) {
//     console.error(`Error updating file ${fileName}:`, error);
//     throw error;
//   }
// }

async function updateS3File(fileName, updateFunction) {
  if (!fileName) {
    console.error('File name is undefined');
    throw new Error('File name is undefined');
  }

  const params = {
    Bucket: BUCKET_NAME,
    Key: `datasets/${fileName}`
  };

  try {
    console.log(`Fetching file: ${fileName}`);
    const data = await s3.getObject(params).promise();
    const content = data.Body.toString('utf-8');
    const rows = parse(content, { columns: true, skip_empty_lines: true });

    console.log(`Updating rows for file: ${fileName}`);
    const updatedRows = updateFunction(rows);

    const csvContent = 'message_id_new,user_id,task0,task1,task2,meta_fileURI,output0,output1,output2,comment,sourceFile\n' +
      updatedRows.map(formatCSVLine).join('');

    console.log(`Uploading updated file: ${fileName}`);
    await s3.putObject({
      Bucket: BUCKET_NAME,
      Key: `datasets/${fileName}`,
      Body: csvContent,
      ContentType: 'text/csv'
    }).promise();
    console.log(`File updated successfully: ${fileName}`);
  } catch (error) {
    console.error(`Error updating file ${fileName}:`, error);
    throw error;
  }
}

function determineCSVFilesToUpdate(data) {
  const { task0: category, task1: validity, task2: type } = data;
  const csvFilesToUpdate = [];

  if(category=== 'A'){
    csvFilesToUpdate.push('A.csv');
    if (validity === 'Valid') {
      csvFilesToUpdate.push('valid.csv');
      if (type === 'Blood & Urine') {
        csvFilesToUpdate.push('bldurine.csv');
      } else if (type === 'Other') {
        csvFilesToUpdate.push('other(p2).csv');
      }
    } else if (validity === 'Invalid') {
      csvFilesToUpdate.push('invalid.csv');
    }
  }
  else if (category === 'B') {
    csvFilesToUpdate.push('B.csv');
    if (validity === 'Valid') {
      csvFilesToUpdate.push('valid.csv');
      if (type === 'Blood & Urine') {
        csvFilesToUpdate.push('bldurine.csv');
      } else if (type === 'Other') {
        csvFilesToUpdate.push('other(p2).csv');
      }
    } else if (validity === 'Invalid') {
      csvFilesToUpdate.push('invalid.csv');
    }
  } else if (category === 'C') {
    csvFilesToUpdate.push('bodypart.csv');
  } else if (category === 'D') {
    csvFilesToUpdate.push('food.csv');
  } else if (category === 'E') {
    csvFilesToUpdate.push('E.csv');
    if (validity === 'Valid') {
      csvFilesToUpdate.push('valid.csv');
      if (type === 'Blood & Urine') {
        csvFilesToUpdate.push('bldurine.csv');
      } else if (type === 'Other') {
        csvFilesToUpdate.push('other(p2).csv');
      }
    } else if (validity === 'Invalid') {
      csvFilesToUpdate.push('invalid.csv');
    }
  }
  else if (category === 'Other') {
    csvFilesToUpdate.push('other(p0).csv');
    if (validity === 'Valid') {
      csvFilesToUpdate.push('valid.csv');
      if (type === 'Blood & Urine') {
        csvFilesToUpdate.push('bldurine.csv');
      } else if (type === 'Other') {
        csvFilesToUpdate.push('other(p2).csv');
      }
    } else if (validity === 'Invalid') {
      csvFilesToUpdate.push('invalid.csv');
    }
  }

  return csvFilesToUpdate;
}

function getUpdatedTask1(data) {
  if (data.task0 === 'Body Part' || data.task0 === 'Food') {
    return '-';
  }
  return data.task1;
}

function getUpdatedTask2(data) {
  if (data.task0 === 'Body Part' || data.task0 === 'Food') {
    return '-';
  } else if (data.task0 === 'Other' && data.task1 === 'Invalid') {
    return '-';
  }
  return data.task2;
}
function escapeField(text) {
  if (text && (text.includes(',') || text.includes('\n') || text.includes('"'))) {
    return `"${text.replace(/"/g, '""')}"`;
  }
  return text;
}

// function formatCSVLine(row) {
//   const fields = ['message_id_new', 'user_id', 'task0', 'task1', 'task2', 'meta_fileURI', 'output0', 'output1', 'output2', 'comment'];
//   const values = fields.map(field => {
//     if (field === 'comment') {
//       return escapeField(row.comment || '-'); // Ensure comment field is properly handled
//     }
//     return escapeField(row[field] || ''); // Ensure other fields are properly handled
//   });
//   return values.join(',') + '\n';
// }
function formatCSVLine(row) {
  const fields = ['message_id_new', 'user_id', 'task0', 'task1', 'task2', 'meta_fileURI', 'output0', 'output1', 'output2', 'comment', 'sourceFile'];
  const values = fields.map(field => {
    if (field === 'comment') {
      return escapeField(row.comment || '-');
    }
    if (field === 'sourceFile') {
      return escapeField(row.sourceFile || '');
    }
    return escapeField(row[field] || '');
  });
  return values.join(',') + '\n';
}