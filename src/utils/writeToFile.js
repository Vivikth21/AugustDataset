// utils/writeToFile.js
import fs from 'fs';

const writeEditedRowsToFile = (editedRows) => {
  const filePath = './src/data/editedRows.json'; // Adjust the file path as needed
  fs.writeFileSync(filePath, JSON.stringify(editedRows, null, 2));
};

export default writeEditedRowsToFile;
