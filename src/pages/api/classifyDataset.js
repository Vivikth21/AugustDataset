// import fs from 'fs';
// import path from 'path';
// import csv from 'csv-parser';

// const flowFileMap = {
//   A: 'A.csv',
//   B: 'B.csv',
//   C: 'bodypart.csv',
//   D: 'food.csv',
//   E: 'E.csv',
//   Other_task0: 'other(p0).csv',
//   Valid: 'valid.csv',
//   Invalid: 'invalid.csv',
//   'Blood & Urine': 'bldurine.csv',
//   Other_task2: 'other(p2).csv',
// };

// const classifyRow = (row, flowFiles) => {
//   const { task0, task1, task2 } = row;

// //   if (flowFileMap[task0]) {
// //     flowFiles[flowFileMap[task0]].push(row);
// //   }
// //   if (flowFileMap[task1]) {
// //     flowFiles[flowFileMap[task1]].push(row);
// //   }
// //   if (flowFileMap[task2]) {
// //     flowFiles[flowFileMap[task2]].push(row);
// //   }

// if (flowFileMap[task0]) {
//     flowFiles[flowFileMap[task0]].push(row);
//   } else if (task0 === 'Other') {
//     flowFiles[flowFileMap['Other_task0']].push(row);
//   }else if(task0 === '-'){
//     flowFiles[flowFileMap['Other_task0']].push(row);
//   }
  
//   if (flowFileMap[task1]) {
//     flowFiles[flowFileMap[task1]].push(row);
//   }

//   if (flowFileMap[task2]) {
//     flowFiles[flowFileMap[task2]].push(row);
//   } else if (task2 === 'Other') {
//     flowFiles[flowFileMap['Other_task2']].push(row);
//   }

// };

// const writeToFile = (filePath, rows) => {
//   const csvHeaders = 'message_id_new,user_id,task0,task1,task2,meta_fileURI,output0,output1,output2\n';
//   const csvRows = rows.map(row => Object.values(row).join(',')).join('\n');
//   fs.appendFileSync(filePath, csvHeaders + csvRows + '\n');
// };

// export default function handler(req, res) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ message: 'Method not allowed' });
//   }

//   const filePath = req.body.filePath;

//   if (!filePath) {
//     return res.status(400).json({ message: 'File path is required' });
//   }

//   const flowFiles = Object.keys(flowFileMap).reduce((acc, key) => {
//     const fileName = flowFileMap[key];
//     acc[fileName] = [];
//     return acc;
//   }, {});

//   fs.createReadStream(path.join(process.cwd(), filePath))
//     .pipe(csv())
//     .on('data', (row) => classifyRow(row, flowFiles))
//     .on('end', () => {
//       Object.keys(flowFiles).forEach(fileName => {
//         const rows = flowFiles[fileName];
//         if (rows.length > 0) {
//           writeToFile(path.join(process.cwd(), 'src', 'data2', fileName), rows);
//         }
//       });
//       res.status(200).json({ message: 'File classified and appended successfully' });
//     });
// }

// import fs from 'fs';
// import path from 'path';
// import csv from 'csv-parser';

// export default function handler(req, res) {
//   if (req.method === 'POST') {
//     const { filePath } = req.body;
//     if (!filePath) {
//       return res.status(400).json({ message: 'File path is missing' });
//     }

//     const dataDirectory = path.join(process.cwd(), 'src', 'data2');

//     const classifyRow = (row) => {
//       const { task0, task1, task2 } = row;
//       const filesToAppend = [];

//       // Classify based on task0
//       switch (task0) {
//         case 'A':
//           filesToAppend.push('A.csv');
//           break;
//         case 'B':
//           filesToAppend.push('B.csv');
//           break;
//         case 'C':
//           filesToAppend.push('bodypart.csv');
//           break;
//         case 'D':
//           filesToAppend.push('food.csv');
//           break;
//         case 'E':
//           filesToAppend.push('E.csv');
//           break;
//         case 'Other':
//         case '-':
//           filesToAppend.push('other(p0).csv');
//           break;
//       }

//       // Classify based on task1
//       if (task1 === 'Valid') {
//         filesToAppend.push('valid.csv');
//       } else if (task1 === 'Invalid') {
//         filesToAppend.push('invalid.csv');
//       }

//       // Classify based on task2
//       switch (task2) {
//         case 'Blood&Urine':
//           filesToAppend.push('bldurine.csv');
//           break;
//         case 'Other':
//           filesToAppend.push('other(p2).csv');
//           break;
//       }

//       return filesToAppend;
//     };

//     const appendRowToFile = (fileName, row) => {
//       const filePath = path.join(dataDirectory, fileName);
//       const rowContent = Object.values(row).join(',') + '\n';
//       fs.appendFileSync(filePath, rowContent, 'utf8');
//     };

//     const filePathToRead = path.join(process.cwd(), filePath);
//     const rows = [];

//     fs.createReadStream(filePathToRead)
//       .pipe(csv())
//       .on('data', (row) => {
//         rows.push(row);
//       })
//       .on('end', () => {
//         rows.forEach((row) => {
//           const filesToAppend = classifyRow(row);
//           filesToAppend.forEach((fileName) => {
//             appendRowToFile(fileName, row);
//           });
//         });

//         res.status(200).json({ message: 'Dataset classified successfully' });
//       })
//       .on('error', (err) => {
//         console.error('Error reading CSV file:', err);
//         res.status(500).json({ message: 'Failed to read CSV file' });
//       });
//   } else {
//     res.setHeader('Allow', ['POST']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }

// import fs from 'fs';
// import path from 'path';
// import csv from 'csv-parser';

// export default function handler(req, res) {
//   if (req.method === 'POST') {
//     const { filePath } = req.body;
//     if (!filePath) {
//       return res.status(400).json({ message: 'File path is missing' });
//     }

//     const dataDirectory = path.join(process.cwd(), 'src', 'data2');

//     const classifyRow = (row) => {
//       const { task0, task1, task2 } = row;
//       const filesToAppend = [];

//       // Classify based on task0
//       switch (task0) {
//         case 'A':
//           filesToAppend.push('A.csv');
//           break;
//         case 'B':
//           filesToAppend.push('B.csv');
//           break;
//         case 'C':
//           filesToAppend.push('bodypart.csv');
//           break;
//         case 'D':
//           filesToAppend.push('food.csv');
//           break;
//         case 'E':
//           filesToAppend.push('E.csv');
//           break;
//         case 'Other':
//         case '-':
//           filesToAppend.push('other(p0).csv');
//           break;
//       }

//       // Classify based on task1
//       if (task1 === 'Valid') {
//         filesToAppend.push('valid.csv');
//       } else if (task1 === 'Invalid') {
//         filesToAppend.push('invalid.csv');
//       }

//       // Classify based on task2
//       switch (task2) {
//         case 'Blood & Urine':
//           filesToAppend.push('bldurine.csv');
//           break;
//         case 'Other':
//           filesToAppend.push('other(p2).csv');
//           break;
//       }

//       return filesToAppend;
//     };

//     const appendRowToFile = (fileName, row, headers) => {
//       const filePath = path.join(dataDirectory, fileName);
//       const rowContent = Object.values(row).join(',') + '\n';

//       if (!fs.existsSync(filePath)) {
//         // Write headers if the file does not exist
//         const headerContent = headers.join(',') + '\n';
//         fs.writeFileSync(filePath, headerContent, 'utf8');
//       }

//       fs.appendFileSync(filePath, rowContent, 'utf8');
//     };

//     const filePathToRead = path.join(process.cwd(), filePath);
//     const rows = [];
//     let headers = [];

//     fs.createReadStream(filePathToRead)
//       .pipe(csv())
//       .on('headers', (headerList) => {
//         headers = headerList;
//       })
//       .on('data', (row) => {
//         rows.push(row);
//       })
//       .on('end', () => {
//         rows.forEach((row) => {
//           const filesToAppend = classifyRow(row);
//           filesToAppend.forEach((fileName) => {
//             appendRowToFile(fileName, row, headers);
//           });
//         });

//         res.status(200).json({ message: 'Dataset classified successfully' });
//       })
//       .on('error', (err) => {
//         console.error('Error reading CSV file:', err);
//         res.status(500).json({ message: 'Failed to read CSV file' });
//       });
//   } else {
//     res.setHeader('Allow', ['POST']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }
// import fs from 'fs';
// import path from 'path';
// import csv from 'csv-parser';

// const flowFileMap = {
//   A: 'A.csv',
//   B: 'B.csv',
//   C: 'bodypart.csv',
//   D: 'food.csv',
//   E: 'E.csv',
//   Other_task0: 'other(p0).csv',
//   Valid: 'valid.csv',
//   Invalid: 'invalid.csv',
//   'Blood & Urine': 'bldurine.csv',
//   Other_task2: 'other(p2).csv',
// };

// const sanitizeRow = (row) => {
//   const sanitizedRow = { ...row };
//   if (sanitizedRow.output1) {
//     sanitizedRow.output1 = sanitizedRow.output1.replace(/,/g, ' ');
//   }
//   if (sanitizedRow.output2) {
//     sanitizedRow.output2 = sanitizedRow.output2.replace(/,/g, ' ');
//   }
//   return sanitizedRow;
// };

// const classifyRow = (row, flowFiles) => {
//   const sanitizedRow = sanitizeRow(row);
//   const { task0, task1, task2 } = sanitizedRow;

//   if (flowFileMap[task0]) {
//     flowFiles[flowFileMap[task0]].push(sanitizedRow);
//   } else if (task0 === 'Other') {
//     flowFiles[flowFileMap['Other_task0']].push(sanitizedRow);
//   } else if(task0 === '-'){
//     flowFiles[flowFileMap['Other_task0']].push(sanitizedRow);
//   }
  
//   if (flowFileMap[task1]) {
//     flowFiles[flowFileMap[task1]].push(sanitizedRow);
//   }

//   if (flowFileMap[task2]) {
//     flowFiles[flowFileMap[task2]].push(sanitizedRow);
//   } else if (task2 === 'Other') {
//     flowFiles[flowFileMap['Other_task2']].push(sanitizedRow);
//   }
// };

// const writeToFile = (filePath, rows) => {
//   const csvHeaders = 'message_id_new,user_id,task0,task1,task2,meta_fileURI,output0,output1,output2\n';
//   const csvRows = rows.map(row => Object.values(row).join(',')).join('\n');

//   if (!fs.existsSync(filePath)) {
//     // Write headers if the file does not exist
//     fs.writeFileSync(filePath, csvHeaders + csvRows + '\n');
//   } else {
//     fs.appendFileSync(filePath, csvRows + '\n');
//   }
// };

// export default function handler(req, res) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ message: 'Method not allowed' });
//   }

//   const filePath = req.body.filePath;

//   if (!filePath) {
//     return res.status(400).json({ message: 'File path is required' });
//   }

//   const flowFiles = Object.keys(flowFileMap).reduce((acc, key) => {
//     const fileName = flowFileMap[key];
//     acc[fileName] = [];
//     return acc;
//   }, {});

//   let headers = [];

//   fs.createReadStream(path.join(process.cwd(), filePath))
//     .pipe(csv())
//     .on('headers', (headerList) => {
//       headers = headerList;
//     })
//     .on('data', (row) => classifyRow(row, flowFiles))
//     .on('end', () => {
//       Object.keys(flowFiles).forEach(fileName => {
//         const rows = flowFiles[fileName];
//         if (rows.length > 0) {
//           writeToFile(path.join(process.cwd(), 'src', 'data2', fileName), rows);
//         }
//       });
//       res.status(200).json({ message: 'File classified and appended successfully' });
//     });
// }

// import fs from 'fs';
// import path from 'path';
// import csv from 'csv-parser';

// const flowFileMap = {
//   A: 'A.csv',
//   B: 'B.csv',
//   C: 'bodypart.csv',
//   D: 'food.csv',
//   E: 'E.csv',
//   Other_task0: 'other(p0).csv',
//   '-': 'other(p0).csv',
//   Valid: 'valid.csv',
//   Invalid: 'invalid.csv',
//   'Blood & Urine': 'bldurine.csv',
//   Other_task2: 'other(p2).csv',
// };

// const sanitizeRow = (row) => {
//   const sanitizedRow = { ...row };
//   if (sanitizedRow.output1) {
//     sanitizedRow.output1 = sanitizedRow.output1.replace(/,/g, ' ');
//   }
//   if (sanitizedRow.output2) {
//     sanitizedRow.output2 = sanitizedRow.output2.replace(/,/g, ' ');
//   }
//   return sanitizedRow;
// };

// const classifyRow = (row, flowFiles) => {
//   const sanitizedRow = sanitizeRow(row);
//   const { task0, task1, task2 } = sanitizedRow;

//   if (flowFileMap[task0]) {
//     flowFiles[flowFileMap[task0]].push(sanitizedRow);
//   } else if (task0 === 'Other') {
//     flowFiles[flowFileMap['Other_task0']].push(sanitizedRow);
//   }
  
//   if (flowFileMap[task1]) {
//     flowFiles[flowFileMap[task1]].push(sanitizedRow);
//   }

//   if (flowFileMap[task2]) {
//     flowFiles[flowFileMap[task2]].push(sanitizedRow);
//   } else if (task2 === 'Other') {
//     flowFiles[flowFileMap['Other_task2']].push(sanitizedRow);
//   }
// };

// const writeToFile = (filePath, rows) => {
//   const csvHeaders = 'message_id_new,user_id,task0,task1,task2,meta_fileURI,output0,output1,output2\n';
//   let csvRows = rows.map(row => Object.values(row).join(',')).join('\n');
  
//   // Check if the file exists
//   const fileExists = fs.existsSync(filePath);

//   if (!fileExists) {
//     // Write headers if the file does not exist
//     fs.writeFileSync(filePath, csvHeaders);
//     fs.appendFileSync(filePath, csvRows + '\n');
//   } else {
//     // Append rows to existing file, skip headers
//     fs.appendFileSync(filePath, csvRows + '\n');
//   }
// };

// export default function handler(req, res) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ message: 'Method not allowed' });
//   }

//   const filePath = req.body.filePath;

//   if (!filePath) {
//     return res.status(400).json({ message: 'File path is required' });
//   }

//   const flowFiles = Object.keys(flowFileMap).reduce((acc, key) => {
//     const fileName = flowFileMap[key];
//     acc[fileName] = [];
//     return acc;
//   }, {});

//   fs.createReadStream(path.join(process.cwd(), filePath))
//     .pipe(csv())
//     .on('data', (row) => classifyRow(row, flowFiles))
//     .on('end', () => {
//       Object.keys(flowFiles).forEach(fileName => {
//         const rows = flowFiles[fileName];
//         if (rows.length > 0) {
//           writeToFile(path.join(process.cwd(), 'src', 'data2', fileName), rows);
//         }
//       });
//       res.status(200).json({ message: 'File classified and appended successfully' });
//     });
// }

// import fs from 'fs';
// import path from 'path';
// import csv from 'csv-parser';

// const flowFileMap = {
//   A: 'A.csv',
//   B: 'B.csv',
//   C: 'bodypart.csv',
//   D: 'food.csv',
//   E: 'E.csv',
//   Other_task0: 'other(p0).csv',
//   '-': 'other(p0).csv',
//   Valid: 'valid.csv',
//   Invalid: 'invalid.csv',
//   'Blood & Urine': 'bldurine.csv',
//   Other_task2: 'other(p2).csv',
// };

// const sanitizeFields = (row) => {
//   // Replace commas with spaces in output1 and output2 fields
//   if (row.output1) {
//     row.output1 = row.output1.replace(/,/g, ' ');
//   }
//   if (row.output2) {
//     row.output2 = row.output2.replace(/,/g, ' ');
//   }
// };

// const classifyRow = (row, flowFiles) => {
//   const { task0, task1, task2 } = row;

//   if (flowFileMap[task0]) {
//     flowFiles[flowFileMap[task0]].push(row);
//   } else if (task0 === 'Other' || task0 === '-') {
//     flowFiles[flowFileMap['Other_task0']].push(row);
//   }
  
//   if (flowFileMap[task1]) {
//     flowFiles[flowFileMap[task1]].push(row);
//   }

//   if (flowFileMap[task2]) {
//     flowFiles[flowFileMap[task2]].push(row);
//   } else if (task2 === 'Other') {
//     flowFiles[flowFileMap['Other_task2']].push(row);
//   }
// };

// const writeToFile = (filePath, rows) => {
//   const csvHeaders = 'message_id_new,user_id,task0,task1,task2,meta_fileURI,output0,output1,output2\n';
//   const csvRows = rows.map(row => Object.values(row).join(',')).join('\n');
//   fs.appendFileSync(filePath, csvHeaders + csvRows + '\n');
// };

// export default function handler(req, res) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ message: 'Method not allowed' });
//   }

//   const filePath = req.body.filePath;

//   if (!filePath) {
//     return res.status(400).json({ message: 'File path is required' });
//   }

//   const flowFiles = Object.keys(flowFileMap).reduce((acc, key) => {
//     const fileName = flowFileMap[key];
//     acc[fileName] = [];
//     return acc;
//   }, {});

//   fs.createReadStream(path.join(process.cwd(), filePath))
//     .pipe(csv())
//     .on('data', (row) => {
//       sanitizeFields(row); // Sanitize output1 and output2 fields
//       classifyRow(row, flowFiles);
//     })
//     .on('end', () => {
//       Object.keys(flowFiles).forEach(fileName => {
//         const rows = flowFiles[fileName];
//         if (rows.length > 0) {
//           writeToFile(path.join(process.cwd(), 'src', 'data2', fileName), rows);
//         }
//       });
//       res.status(200).json({ message: 'File classified and appended successfully' });
//     });
// }

// import fs from 'fs';
// import path from 'path';
// import csv from 'csv-parser';

// const flowFileMap = {
//   A: 'A.csv',
//   B: 'B.csv',
//   C: 'bodypart.csv',
//   D: 'food.csv',
//   E: 'E.csv',
//   Other_task0: 'other(p0).csv',
//   Valid: 'valid.csv',
//   Invalid: 'invalid.csv',
//   'Blood & Urine': 'bldurine.csv',
//   Other_task2: 'other(p2).csv',
// };

// const sanitizeFields = (row) => {
//   // Replace commas with spaces in output1 and output2 fields
//   if (row.output1) {
//     row.output1 = row.output1.replace(/,/g, ' ');
//     row.output1 = row.output1.replace(/\n/g, ' '); // Replace new lines with spaces
//   }
//   if (row.output2) {
//     row.output2 = row.output2.replace(/,/g, ' ');
//     row.output2 = row.output2.replace(/\n/g, ' '); // Replace new lines with spaces
//   }
// };

// const classifyRow = (row, flowFiles) => {
//   const { task0, task1, task2 } = row;

//   if (flowFileMap[task0]) {
//     flowFiles[flowFileMap[task0]].push(row);
//   } else if (task0 === 'Other' || task0 === '-') {
//     flowFiles[flowFileMap['Other_task0']].push(row);
//   }
  
//   if (flowFileMap[task1]) {
//     flowFiles[flowFileMap[task1]].push(row);
//   }

//   if (flowFileMap[task2]) {
//     flowFiles[flowFileMap[task2]].push(row);
//   } else if (task2 === 'Other') {
//     flowFiles[flowFileMap['Other_task2']].push(row);
//   }
// };

// const writeToFile = (filePath, rows) => {
//   const csvHeaders = 'message_id_new,user_id,task0,task1,task2,meta_fileURI,output0,output1,output2\n';
//   rows.forEach(row => {
//     // Handle multi-line content in output1 and output2
//     if (row.output1) {
//       row.output1 = row.output1.replace(/\n/g, ' '); // Replace new lines with spaces
//     }
//     if (row.output2) {
//       row.output2 = row.output2.replace(/\n/g, ' '); // Replace new lines with spaces
//     }
//   });

//   // Use Node.js fs module to append data to the CSV file
//   fs.appendFileSync(filePath, csvHeaders);

//   rows.forEach(row => {
//     const values = Object.values(row).map(value => {
//       // Ensure each value is properly CSV-escaped
//       if (typeof value === 'string') {
//         return `"${value.replace(/"/g, '""')}"`; // Double quotes for CSV format
//       }
//       return value;
//     }).join(',');
//     fs.appendFileSync(filePath, values + '\n');
//   });
// };

// export default function handler(req, res) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ message: 'Method not allowed' });
//   }

//   const filePath = req.body.filePath;

//   if (!filePath) {
//     return res.status(400).json({ message: 'File path is required' });
//   }

//   const flowFiles = Object.keys(flowFileMap).reduce((acc, key) => {
//     const fileName = flowFileMap[key];
//     acc[fileName] = [];
//     return acc;
//   }, {});

//   fs.createReadStream(path.join(process.cwd(), filePath))
//     .pipe(csv())
//     .on('data', (row) => {
//       sanitizeFields(row); // Sanitize output1 and output2 fields
//       classifyRow(row, flowFiles);
//     })
//     .on('end', () => {
//       Object.keys(flowFiles).forEach(fileName => {
//         const rows = flowFiles[fileName];
//         if (rows.length > 0) {
//           writeToFile(path.join(process.cwd(), 'src', 'data2', fileName), rows);
//         }
//       });
//       res.status(200).json({ message: 'File classified and appended successfully' });
//     });
// }

// import fs from 'fs';
// import path from 'path';
// import csv from 'csv-parser';

// const flowFileMap = {
//   A: 'A.csv',
//   B: 'B.csv',
//   C: 'bodypart.csv',
//   D: 'food.csv',
//   E: 'E.csv',
//   Other_task0: 'other(p0).csv',
//   Valid: 'valid.csv',
//   Invalid: 'invalid.csv',
//   'Blood & Urine': 'bldurine.csv',
//   Other_task2: 'other(p2).csv',
// };

// const sanitizeFields = (row) => {
//   // Replace commas with spaces in output1 and output2 fields
//   if (row.output1) {
//     row.output1 = row.output1.replace(/,/g, ' ');
//   }
//   if (row.output2) {
//     row.output2 = row.output2.replace(/,/g, ' ');
//   }
// };

// const classifyRow = (row, flowFiles) => {
//   const { task0, task1, task2 } = row;

//   if (flowFileMap[task0]) {
//     flowFiles[flowFileMap[task0]].push(row);
//   } else if (task0 === 'Other' || task0 === '-') {
//     flowFiles[flowFileMap['Other_task0']].push(row);
//   }
  
//   if (flowFileMap[task1]) {
//     flowFiles[flowFileMap[task1]].push(row);
//   }

//   if (flowFileMap[task2]) {
//     flowFiles[flowFileMap[task2]].push(row);
//   } else if (task2 === 'Other') {
//     flowFiles[flowFileMap['Other_task2']].push(row);
//   }
// };

// const formatField = (value) => {
//   if (value && (value.includes(',') || value.includes('\n'))) {
//     // Enclose in double quotes and escape existing double quotes
//     return `"${value.replace(/"/g, '""')}"`;
//   }
//   return value;
// };

// const writeToFile = (filePath, rows) => {
//   const csvHeaders = 'message_id_new,user_id,task0,task1,task2,meta_fileURI,output0,output1,output2\n';

//   const formattedRows = rows.map(row => {
//     const formattedValues = Object.values(row).map(value => formatField(value));
//     return formattedValues.join(',');
//   });

//   fs.appendFileSync(filePath, csvHeaders);
//   fs.appendFileSync(filePath, formattedRows.join('\n') + '\n');
// };

// export default function handler(req, res) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ message: 'Method not allowed' });
//   }

//   const filePath = req.body.filePath;

//   if (!filePath) {
//     return res.status(400).json({ message: 'File path is required' });
//   }

//   const flowFiles = Object.keys(flowFileMap).reduce((acc, key) => {
//     const fileName = flowFileMap[key];
//     acc[fileName] = [];
//     return acc;
//   }, {});

//   fs.createReadStream(path.join(process.cwd(), filePath))
//     .pipe(csv())
//     .on('data', (row) => {
//       sanitizeFields(row); // Sanitize output1 and output2 fields
//       classifyRow(row, flowFiles);
//     })
//     .on('end', () => {
//       Object.keys(flowFiles).forEach(fileName => {
//         const rows = flowFiles[fileName];
//         if (rows.length > 0) {
//           writeToFile(path.join(process.cwd(), 'src', 'data2', fileName), rows);
//         }
//       });
//       res.status(200).json({ message: 'File classified and appended successfully' });
//     });
// }

import AWS from 'aws-sdk';
import csv from 'csv-parser';
import { Readable } from 'stream';

// Configure AWS
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

const s3 = new AWS.S3();

const flowFileMap = {
  A: 'A.csv',
  B: 'B.csv',
  C: 'bodypart.csv',
  D: 'food.csv',
  E: 'E.csv',
  Other_task0: 'other(p0).csv',
  Valid: 'valid.csv',
  Invalid: 'invalid.csv',
  'Blood & Urine': 'bldurine.csv',
  Other_task2: 'other(p2).csv',
};

const sanitizeFields = (row) => {
  if (row.output1) {
    row.output1 = row.output1.replace(/,/g, ' ');
  }
  if (row.output2) {
    row.output2 = row.output2.replace(/,/g, ' ');
  }
};

const classifyRow = (row, flowFiles) => {
  const { task0, task1, task2 } = row;

  if (flowFileMap[task0]) {
    flowFiles[flowFileMap[task0]].push(row);
  } else if (task0 === 'Other' || task0 === '-') {
    flowFiles[flowFileMap['Other_task0']].push(row);
  }
  
  if (flowFileMap[task1]) {
    flowFiles[flowFileMap[task1]].push(row);
  }

  if (flowFileMap[task2]) {
    flowFiles[flowFileMap[task2]].push(row);
  } else if (task2 === 'Other') {
    flowFiles[flowFileMap['Other_task2']].push(row);
  }
};

const formatField = (value) => {
  if (value && (value.includes(',') || value.includes('\n'))) {
    return `"${value.replace(/"/g, '""')}"`;
  }
  return value;
};

const writeToS3 = async (fileName, rows) => {
  const csvHeaders = 'message_id_new,user_id,task0,task1,task2,meta_fileURI,output0,output1,output2\n';

  const formattedRows = rows.map(row => {
    const formattedValues = Object.values(row).map(value => formatField(value));
    return formattedValues.join(',');
  });

  const content = csvHeaders + formattedRows.join('\n') + '\n';

  const params = {
    Bucket: process.env.S3_BUCKET_NAME,
    Key: `data2/${fileName}`,
    Body: content,
    ContentType: 'text/csv',
  };

  try {
    await s3.putObject(params).promise();
  } catch (error) {
    console.error(`Error writing to S3: ${error}`);
    throw error;
  }
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { fileLocation } = req.body;

  if (!fileLocation) {
    return res.status(400).json({ message: 'File location is required' });
  }

  const flowFiles = Object.keys(flowFileMap).reduce((acc, key) => {
    const fileName = flowFileMap[key];
    acc[fileName] = [];
    return acc;
  }, {});

  try {
    const params = {
      Bucket: process.env.S3_BUCKET_NAME,
      Key: fileLocation.replace(`https://${process.env.S3_BUCKET_NAME}.s3.amazonaws.com/`, ''),
    };

    const s3Stream = s3.getObject(params).createReadStream();

    await new Promise((resolve, reject) => {
      s3Stream
        .pipe(csv())
        .on('data', (row) => {
          sanitizeFields(row);
          classifyRow(row, flowFiles);
        })
        .on('end', resolve)
        .on('error', reject);
    });

    for (const [fileName, rows] of Object.entries(flowFiles)) {
      if (rows.length > 0) {
        await writeToS3(fileName, rows);
      }
    }

    res.status(200).json({ message: 'File classified and appended successfully' });
  } catch (error) {
    console.error('Error processing file:', error);
    res.status(500).json({ message: 'Error processing file', error: error.message });
  }
}