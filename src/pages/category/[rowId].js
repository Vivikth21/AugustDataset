

// import { useState } from 'react';
// import { AppBar, Toolbar, Typography, Box, Card, CardContent, TextField, Button, CssBaseline, Container, IconButton } from '@mui/material';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { useRouter } from 'next/router';
// import fs from 'fs';
// import path from 'path';
// import csv from 'csv-parser';
// import Brightness4Icon from '@mui/icons-material/Brightness4';
// import Brightness7Icon from '@mui/icons-material/Brightness7';

// const PAGE_SIZE = 1; // Number of rows per page

// const RowDetails = ({ row, totalPages }) => {
//   const router = useRouter();
//   const { rowId } = router.query;

//   const [darkMode, setDarkMode] = useState(false);
//   const [editedData, setEditedData] = useState({ ...row });

//   const handleDarkModeToggle = () => {
//     setDarkMode(!darkMode);
//   };

//   const handleChange = (field, value) => {
//     setEditedData((prevData) => ({
//       ...prevData,
//       [field]: value,
//     }));
//   };

//   const handleSave = async () => {
//     const updateData = {
//       ...row,
//       ...editedData,
//     };

//     try {
//       const response = await fetch('/api/updateRow', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           rowId,
//           newData: updateData,
//         }),
//       });

//       if (response.ok) {
//         console.log('Row updated successfully');
//       } else {
//         console.error('Failed to update row');
//       }
//     } catch (error) {
//       console.error('Error updating row:', error);
//     }
//   };

//   const theme = createTheme({
//     palette: {
//       mode: darkMode ? 'dark' : 'light',
//     },
//   });

//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <AppBar position="static" sx={{ backgroundColor: '#000' }}>
//         <Toolbar>
//           <Typography variant="h6" sx={{ flexGrow: 1 }}>
//             Dataset Item
//           </Typography>
//           <IconButton color="inherit" onClick={handleDarkModeToggle}>
//             {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
//           </IconButton>
//         </Toolbar>
//       </AppBar>

//       <Box sx={{ display: 'flex', minHeight: '100vh', padding: '24px', backgroundColor: darkMode ? '#303030' : '#f4f6f8' }}>
//         <Card sx={{ flex: '1 1 45%', marginRight: '16px', backgroundColor: darkMode ? '#424242' : '#fff', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//           <CardContent>
//             <Typography variant="body1" sx={{ marginBottom: '8px', color: darkMode ? '#fff' : '#000' }}>
//               <strong>{Object.keys(row)[0]}:</strong> {row[Object.keys(row)[0]]}
//             </Typography>
//           </CardContent>
//         </Card>

//         <Box sx={{ flex: '1 1 45%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', paddingLeft: '16px', height: '80vh' }}>
//           {Object.keys(row)
//             .slice(1, 5)
//             .map((key, index) => (
//               <TextField
//                 key={index}
//                 fullWidth
//                 label={key}
//                 value={editedData[key]}
//                 onChange={(e) => handleChange(key, e.target.value)}
//                 InputProps={{ sx: { height: '15vh' } }}
//                 InputLabelProps={{ sx: { height: '20vh' } }}
//                 sx={{ marginBottom: index < 3 ? '16px' : '0' }}
//               />
//             ))}
//           <Button variant="contained" onClick={handleSave} sx={{ alignSelf: 'flex-start', marginTop: '16px' }}>
//             Save
//           </Button>
//         </Box>
//       </Box>
//     </ThemeProvider>
//   );
// };

// export async function getServerSideProps(context) {
//   const { rowId } = context.params;
//   const filePath = path.join(process.cwd(), 'src', 'data', 'data.csv');
//   let rowData = null;
//   let totalPages = 0;

//   try {
//     const fileStream = fs.createReadStream(filePath, 'utf8');
//     let rowNum = 0;
//     const startIdx = +rowId * PAGE_SIZE;
//     const endIdx = startIdx + PAGE_SIZE;

//     await new Promise((resolve, reject) => {
//       fileStream.pipe(csv())
//         .on('data', (row) => {
//           if (rowNum === +rowId) {
//             rowData = {
//               [Object.keys(row)[0]]: row[Object.keys(row)[0]],
//               [Object.keys(row)[1]]: row[Object.keys(row)[1]],
//               [Object.keys(row)[2]]: row[Object.keys(row)[2]],
//               [Object.keys(row)[3]]: row[Object.keys(row)[3]],
//               [Object.keys(row)[4]]: row[Object.keys(row)[4]],
//             };
//           }
//           rowNum++;
//         })
//         .on('end', () => {
//           totalPages = Math.ceil(rowNum / PAGE_SIZE);
//           resolve();
//         })
//         .on('error', (err) => reject(err));
//     });
//   } catch (error) {
//     console.error('Error reading or parsing CSV file:', error);
//   }

//   return {
//     props: {
//       row: rowData,
//       totalPages,
//     },
//   };
// }

// export default RowDetails;


// import { useState } from 'react';
// import { AppBar, Toolbar, Typography, Box, Card, CardContent, TextField, Button, CssBaseline, IconButton } from '@mui/material';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { useRouter } from 'next/router';
// import fs from 'fs';
// import path from 'path';
// import csv from 'csv-parser';
// import Brightness4Icon from '@mui/icons-material/Brightness4';
// import Brightness7Icon from '@mui/icons-material/Brightness7';
// import { useDarkMode } from '@/contexts/darkModeContext';
// import Layout from '@/components/layout';

// const PAGE_SIZE = 1; // Number of rows per page

// const RowDetails = ({ row, totalPages }) => {
//   const router = useRouter();
//   const { rowId } = router.query;

//   const {darkMode} = useDarkMode();
//   const [editedData, setEditedData] = useState({ ...row });

//   // const handleDarkModeToggle = () => {
//   //   setDarkMode(!darkMode);
//   // };

//   const handleChange = (field, value) => {
//     setEditedData((prevData) => ({
//       ...prevData,
//       [field]: value,
//     }));
//   };

//   const handleSave = async () => {
//     const updateData = {
//       ...row,
//       ...editedData,
//     };

//     try {
//       const response = await fetch('/api/updateRow', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           rowId,
//           newData: updateData,
//         }),
//       });

//       if (response.ok) {
//         console.log('Row updated successfully');
//       } else {
//         console.error('Failed to update row');
//       }
//     } catch (error) {
//       console.error('Error updating row:', error);
//     }
//   };

//   const theme = createTheme({
//     palette: {
//       mode: darkMode ? 'dark' : 'light',
//     },
//   });

//   return (
    
//     <ThemeProvider theme={theme}>
//       <Layout pageTitle="Item">
//       <CssBaseline />
//       {/* <AppBar position="static" sx={{ backgroundColor: '#000' }}>
//         <Toolbar>
//           <Typography variant="h6" sx={{ flexGrow: 1 }}>
//             Dataset Item
//           </Typography>
//           <IconButton color="inherit" onClick={handleDarkModeToggle}>
//             {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
//           </IconButton>
//         </Toolbar>
//       </AppBar> */}

//       <Box sx={{ display: 'flex', minHeight: '100vh', padding: '24px', backgroundColor: darkMode ? '#303030' : '#f4f6f8' }}>
//         <Card sx={{ flex: '1 1 45%', marginRight: '16px', backgroundColor: darkMode ? '#424242' : '#fff', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//           <CardContent>
//             <Typography variant="body1" sx={{ marginBottom: '8px', color: darkMode ? '#fff' : '#000' }}>
//               <strong>{Object.keys(row)[0]}:</strong> {row[Object.keys(row)[0]]}
//             </Typography>
//           </CardContent>
//         </Card>

//         <Box sx={{ flex: '1 1 45%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', paddingLeft: '16px', height: '80vh' }}>
//           {Object.keys(row)
//             .slice(1, 5)
//             .map((key, index) => (
//               <TextField
//                 key={index}
//                 fullWidth
//                 label={key}
//                 value={editedData[key]}
//                 onChange={(e) => handleChange(key, e.target.value)}
//                 InputProps={{ sx: { height: '15vh' } }}
//                 InputLabelProps={{ sx: { height: '20vh' } }}
//                 sx={{ marginBottom: index < 3 ? '16px' : '0' }}
//               />
//             ))}
//           <Button variant="contained" onClick={handleSave} sx={{ alignSelf: 'flex-start', marginTop: '16px' }}>
//             Save
//           </Button>
//         </Box>
//       </Box>
//       </Layout>
//     </ThemeProvider>
    
//   );
// };

// export async function getServerSideProps(context) {
//   const { rowId } = context.params;
//   const filePath = path.join(process.cwd(), 'src', 'data', 'data.csv');
//   let rowData = null;
//   let totalPages = 0;

//   try {
//     const fileStream = fs.createReadStream(filePath, 'utf8');
//     let rowNum = 0;
//     const startIdx = +rowId * PAGE_SIZE;
//     const endIdx = startIdx + PAGE_SIZE;

//     await new Promise((resolve, reject) => {
//       fileStream.pipe(csv())
//         .on('data', (row) => {
//           if (rowNum === +rowId) {
//             rowData = {
//               [Object.keys(row)[0]]: row[Object.keys(row)[0]],
//               [Object.keys(row)[1]]: row[Object.keys(row)[1]],
//               [Object.keys(row)[2]]: row[Object.keys(row)[2]],
//               [Object.keys(row)[3]]: row[Object.keys(row)[3]],
//               [Object.keys(row)[4]]: row[Object.keys(row)[4]],
//             };
//           }
//           rowNum++;
//         })
//         .on('end', () => {
//           totalPages = Math.ceil(rowNum / PAGE_SIZE);
//           resolve();
//         })
//         .on('error', (err) => reject(err));
//     });
//   } catch (error) {
//     console.error('Error reading or parsing CSV file:', error);
//   }

//   return {
//     props: {
//       row: rowData,
//       totalPages,
//     },
//   };
// }

// export default RowDetails;

// import { useState, useEffect } from 'react';
// import { AppBar, Toolbar, Typography, Box, Card, CardContent, TextField, Button, CssBaseline, IconButton, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { useRouter } from 'next/router';
// import fs from 'fs';
// import path from 'path';
// import csv from 'csv-parser';
// import Brightness4Icon from '@mui/icons-material/Brightness4';
// import Brightness7Icon from '@mui/icons-material/Brightness7';
// import { useDarkMode } from '@/contexts/darkModeContext';
// import Layout from '@/components/layout';


// const RowDetails = ({ row, totalPages }) => {
//   const router = useRouter();
//   const { rowId } = router.query;
//   const { darkMode } = useDarkMode();
//   const [editedData, setEditedData] = useState(row ? { ...row } : {});

//   const getImageFileName = (rowId) => {
//     switch (rowId) {
//       case '1':
//         return '1.jpg';
//       case '2':
//         return '2.jpg';
//       case '3':
//         return '3.jpg';
//       case '4':
//         return '4.jpg';
//       case '5':
//         return '5.jpg';
//       default:
//         return 'default.jpg'; // Provide a default image if rowId doesn't match
//     }
//   };

//   const imageFileName = getImageFileName(rowId);

//   const handleChange = (field, value) => {
//     setEditedData((prevData) => ({
//       ...prevData,
//       [field]: value,
//     }));
//   };

//   const handleSave = async () => {
//     const updateData = {
//       ...row,
//       ...editedData,
//     };

//     try {
//       const response = await fetch('/api/updateRow', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           rowId,
//           newData: updateData,
//         }),
//       });

//       if (response.ok) {
//         console.log('Row updated successfully');
//       } else {
//         console.error('Failed to update row');
//       }
//     } catch (error) {
//       console.error('Error updating row:', error);
//     }
//   };

//   const theme = createTheme({
//     palette: {
//       mode: darkMode ? 'dark' : 'light',
//     },
//   });

//   if (!row) {
//     return (
//       <ThemeProvider theme={theme}>
//         <Layout pageTitle="Item Not Found">
//           <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', padding: '24px', backgroundColor: darkMode ? '#303030' : '#f4f6f8' }}>
//             <Typography variant="h4" sx={{ color: darkMode ? '#fff' : '#000' }}>
//               Row not found
//             </Typography>
//           </Box>
//         </Layout>
//       </ThemeProvider>
//     );
//   }

//   // const renderFormFields = () => {
//   //   const category = editedData['IMAGE CLASSIFIER (p1)'];
//   //   const validity = editedData['VALID/INVALID'];
//   //   const type = editedData['BLD OR URINE/OTHER'];

//   //   return (
//   //     <>
//   //       <FormControl fullWidth margin="normal">
//   //         <InputLabel>Category</InputLabel>
//   //         <Select value={category} onChange={(e) => handleChange('IMAGE CLASSIFIER (p1)', e.target.value)}>
//   //           <MenuItem value="FOOD">Food</MenuItem>
//   //           <MenuItem value="BODY PART">Body Part</MenuItem>
//   //           <MenuItem value="OTHER">Other</MenuItem>
//   //         </Select>
//   //       </FormControl>

//   //       {category === 'OTHER' && (
//   //         <FormControl fullWidth margin="normal">
//   //           <InputLabel>Validity</InputLabel>
//   //           <Select value={validity} onChange={(e) => handleChange('VALID/INVALID', e.target.value)}>
//   //             <MenuItem value="VALID">Valid</MenuItem>
//   //             <MenuItem value="INVALID">Invalid</MenuItem>
//   //           </Select>
//   //         </FormControl>
//   //       )}

//   //       {category === 'OTHER' && validity === 'VALID' && (
//   //         <FormControl fullWidth margin="normal">
//   //           <InputLabel>Type</InputLabel>
//   //           <Select value={type} onChange={(e) => handleChange('BLD OR URINE/OTHER', e.target.value)}>
//   //             <MenuItem value="BLD OR URINE">Blood/Urine</MenuItem>
//   //             <MenuItem value="OTHER">Other</MenuItem>
//   //           </Select>
//   //         </FormControl>
//   //       )}
//   //     </>
//   //   );
//   // };
//   const renderFormFields = () => {
//     const category = editedData['IMAGE CLASSIFIER (p1)'];
//     const validity = editedData['VALID/INVALID'];
//     const type = editedData['BLD OR URINE/OTHER'];
  
//     return (
//       <>
//         <FormControl fullWidth margin="normal">
//           <InputLabel sx={{ fontSize: '25px', fontWeight: 'bold', color: darkMode ? '#fff' : '#000',position: 'absolute', top: '-20px', left: '-3px'  }}>Category</InputLabel>
//           <Select
//             value={category}
//             onChange={(e) => handleChange('IMAGE CLASSIFIER (p1)', e.target.value)}
//             sx={{ height: '250px' }} // Adjust height as needed
//           >
//             <MenuItem value="FOOD">Food</MenuItem>
//             <MenuItem value="BODY PART">Body Part</MenuItem>
//             <MenuItem value="OTHER">Other</MenuItem>
//           </Select>
//         </FormControl>
  
//         {category === 'OTHER' && (
//           <FormControl fullWidth margin="normal">
//             <InputLabel sx={{ fontSize: '25px', fontWeight: 'bold', color: darkMode ? '#fff' : '#000',position: 'absolute', top: '-20px', left: '-3px' }}>Validity</InputLabel>
//             <Select
//               value={validity}
//               onChange={(e) => handleChange('VALID/INVALID', e.target.value)}
//               sx={{ height: '250px' }} // Adjust height as needed
//             >
//               <MenuItem value="VALID">Valid</MenuItem>
//               <MenuItem value="INVALID">Invalid</MenuItem>
//             </Select>
//           </FormControl>
//         )}
  
//         {category === 'OTHER' && validity === 'VALID' && (
//           <FormControl fullWidth margin="normal">
//             <InputLabel sx={{ fontSize: '25px', fontWeight: 'bold', color: darkMode ? '#fff' : '#000',position: 'absolute', top: '-20px', left: '-3px' }}>Type</InputLabel>
//             <Select
//               value={type}
//               onChange={(e) => handleChange('BLD OR URINE/OTHER', e.target.value)}
//               sx={{ height: '250px' }} // Adjust height as needed
//             >
//               <MenuItem value="BLD OR URINE">Blood/Urine</MenuItem>
//               <MenuItem value="OTHER">Other</MenuItem>
//             </Select>
//           </FormControl>
//         )}
//       </>
//     );
//   };
  
//   return (
//     <ThemeProvider theme={theme}>
//       <Layout pageTitle="Item">
//         <CssBaseline />
//         <Box sx={{ display: 'flex', minHeight: '100vh', padding: '24px', backgroundColor: darkMode ? '#303030' : '#f4f6f8' }}>
//           <Card sx={{ flex: '1 1 45%', marginRight: '16px', backgroundColor: darkMode ? '#424242' : '#fff', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//             <CardContent>
//               <Typography variant="body1" sx={{ marginBottom: '8px', color: darkMode ? '#fff' : '#000' }}>
//                 <strong>ID:</strong> {row['ID']}
//               </Typography>
//               {/* <img src={row['Image'].replace('/view?usp=drive_link', '/preview')} alt="Image" style={{ maxWidth: '100%' }} /> */}
//               <img src = {`/${imageFileName}`} alt="/Food.jpg" style={{ maxWidth: '100%' }} />

//             </CardContent>
//           </Card>

//           <Box sx={{ flex: '1 1 45%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', paddingLeft: '16px', height: '80vh' }}>
//             {renderFormFields()}
//             <Button variant="contained" onClick={handleSave} sx={{ alignSelf: 'flex-start', marginTop: '16px' }}>
//               Save
//             </Button>
//           </Box>
//         </Box>
//       </Layout>
//     </ThemeProvider>
//   );
// };

// export async function getServerSideProps(context) {
//   const { rowId } = context.params;
//   const filePath = path.join(process.cwd(), 'src', 'data2', 'dataset.csv');
//   let rowData = null;
//   let totalPages = 0;

//   try {
//     const fileStream = fs.createReadStream(filePath, 'utf8');
//     let rowNum = 0;

//     await new Promise((resolve, reject) => {
//       fileStream.pipe(csv())
//         .on('data', (row) => {
//           if (row['ID'] === rowId) {
//             rowData = row;
//           }
//           rowNum++;
//         })
//         .on('end', () => {
//           totalPages = rowNum; // Assuming each row is a unique page for simplicity
//           resolve();
//         })
//         .on('error', (err) => reject(err));
//     });
//   } catch (error) {
//     console.error('Error reading or parsing CSV file:', error);
//   }

//   return {
//     props: {
//       row: rowData,
//       totalPages,
//     },
//   };
// }

// export default RowDetails;

import { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Box, Card, CardContent, TextField, Button, CssBaseline, IconButton, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useRouter } from 'next/router';
import fs from 'fs';
import path from 'path';
import csv from 'csv-parser';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useDarkMode } from '@/contexts/darkModeContext';
import Layout from '@/components/layout';

const RowDetails = ({ row, totalPages }) => {
  const router = useRouter();
  const { rowId, file } = router.query;
  const { darkMode } = useDarkMode();
  const [editedData, setEditedData] = useState(row ? { ...row } : {});

  const getImageFileName = (rowId) => {
    switch (rowId) {
      case '1':
        return '1.jpg';
      case '2':
        return '2.jpg';
      case '3':
        return '3.jpg';
      case '4':
        return '4.jpg';
      case '5':
        return '5.jpg';
      default:
        return 'default.jpg'; // Provide a default image if rowId doesn't match
    }
  };

  const imageFileName = getImageFileName(rowId);

  const handleChange = (field, value) => {
    setEditedData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSave = async () => {
    const updateData = {
      ...row,
      ...editedData,
    };

    try {
      const response = await fetch('/api/updateRow', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          rowId,
          newData: updateData,
        }),
      });

      if (response.ok) {
        console.log('Row updated successfully');
      } else {
        console.error('Failed to update row');
      }
    } catch (error) {
      console.error('Error updating row:', error);
    }
  };

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  if (!row) {
    return (
      <ThemeProvider theme={theme}>
        <Layout pageTitle="Item Not Found">
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', padding: '24px', backgroundColor: darkMode ? '#303030' : '#f4f6f8' }}>
            <Typography variant="h4" sx={{ color: darkMode ? '#fff' : '#000' }}>
              Row not found
            </Typography>
          </Box>
        </Layout>
      </ThemeProvider>
    );
  }

  const renderFormFields = () => {
    const category = editedData['IMAGE CLASSIFIER (p1)'];
    const validity = editedData['VALID/INVALID'];
    const type = editedData['BLD OR URINE/OTHER'];

    return (
      <>
        <FormControl fullWidth margin="normal">
          <InputLabel sx={{ fontSize: '25px', fontWeight: 'bold', color: darkMode ? '#fff' : '#000', position: 'absolute', top: '-20px', left: '-3px' }}>Category</InputLabel>
          <Select
            value={category}
            onChange={(e) => handleChange('IMAGE CLASSIFIER (p1)', e.target.value)}
            sx={{ height: '250px' }} // Adjust height as needed
          >
            <MenuItem value="FOOD">Food</MenuItem>
            <MenuItem value="BODY PART">Body Part</MenuItem>
            <MenuItem value="OTHER">Other</MenuItem>
          </Select>
        </FormControl>

        {category === 'OTHER' && (
          <FormControl fullWidth margin="normal">
            <InputLabel sx={{ fontSize: '25px', fontWeight: 'bold', color: darkMode ? '#fff' : '#000', position: 'absolute', top: '-20px', left: '-3px' }}>Validity</InputLabel>
            <Select
              value={validity}
              onChange={(e) => handleChange('VALID/INVALID', e.target.value)}
              sx={{ height: '250px' }} // Adjust height as needed
            >
              <MenuItem value="VALID">Valid</MenuItem>
              <MenuItem value="INVALID">Invalid</MenuItem>
            </Select>
          </FormControl>
        )}

        {category === 'OTHER' && validity === 'VALID' && (
          <FormControl fullWidth margin="normal">
            <InputLabel sx={{ fontSize: '25px', fontWeight: 'bold', color: darkMode ? '#fff' : '#000', position: 'absolute', top: '-20px', left: '-3px' }}>Type</InputLabel>
            <Select
              value={type}
              onChange={(e) => handleChange('BLD OR URINE/OTHER', e.target.value)}
              sx={{ height: '250px' }} // Adjust height as needed
            >
              <MenuItem value="BLD OR URINE">Blood/Urine</MenuItem>
              <MenuItem value="OTHER">Other</MenuItem>
            </Select>
          </FormControl>
        )}
      </>
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <Layout pageTitle="Item">
        <CssBaseline />
        <Box sx={{ display: 'flex', minHeight: '100vh', padding: '24px', backgroundColor: darkMode ? '#303030' : '#f4f6f8' }}>
          <Card sx={{ flex: '1 1 45%', marginRight: '16px', backgroundColor: darkMode ? '#424242' : '#fff', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <CardContent>
              <Typography variant="body1" sx={{ marginBottom: '8px', color: darkMode ? '#fff' : '#000' }}>
                <strong>ID:</strong> {row['ID']}
              </Typography>
              <img src={`/${imageFileName}`} alt="/Food.jpg" style={{ maxWidth: '100%' }} />
            </CardContent>
          </Card>

          <Box sx={{ flex: '1 1 45%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', paddingLeft: '16px', height: '80vh' }}>
            {renderFormFields()}
            <Button variant="contained" onClick={handleSave} sx={{ alignSelf: 'flex-start', marginTop: '16px' }}>
              Save
            </Button>
          </Box>
        </Box>
      </Layout>
    </ThemeProvider>
  );
};

export async function getServerSideProps(context) {
  const { rowId, file } = context.query;
  const dataDirectory = path.join(process.cwd(), 'src', 'data2');
  const csvFiles = [
    'dataset.csv',
    'food.csv',
    'body.csv',
    'other(p0).csv',
    'valid.csv',
    'invalid.csv',
    'bld&urine.csv',
    'other(p2).csv',
  ];

  let rowData = null;
  let totalPages = 0;

  // Determine the CSV file to read from based on the query parameter
  const filePath = path.join(dataDirectory, file || 'dataset.csv');

  // Search across the CSV file
  try {
    const fileStream = fs.createReadStream(filePath, 'utf8');
    let rowNum = 0;

    await new Promise((resolve, reject) => {
      fileStream.pipe(csv())
        .on('data', (row) => {
          if (row['ID'] === rowId) {
            rowData = row;
          }
          rowNum++;
        })
        .on('end', () => {
          totalPages = rowNum; // Assuming each row is a unique page for simplicity
          resolve();
        })
        .on('error', (err) => reject(err));
    });
  } catch (error) {
    console.error('Error reading or parsing CSV file:', error);
  }

  return {
    props: {
      row: rowData,
      totalPages,
    },
  };
}

export default RowDetails;
