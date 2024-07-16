

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
//   const { rowId, file } = router.query;
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
//         alert('Change made successfully!');
//         router.back();
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

//   const renderFormFields = () => {
//     const category = editedData['IMAGE CLASSIFIER (p1)'];
//     const validity = editedData['VALID/INVALID'];
//     const type = editedData['BLD OR URINE/OTHER'];

//     return (
//       <>
//         <FormControl fullWidth margin="normal">
//           <InputLabel sx={{ fontSize: '25px', fontWeight: 'bold', color: darkMode ? '#fff' : '#000', position: 'absolute', top: '-20px', left: '-3px' }}>Category</InputLabel>
//           <Select
//             value={category}
//             onChange={(e) => handleChange('IMAGE CLASSIFIER (p1)', e.target.value)}
//             sx={{ height: '150px' }} // Adjust height as needed
//           >
//             <MenuItem value="FOOD">Food</MenuItem>
//             <MenuItem value="BODY PART">Body Part</MenuItem>
//             <MenuItem value="OTHER">Other</MenuItem>
//           </Select>
//         </FormControl>

//         {category === 'OTHER' && (
//           <FormControl fullWidth margin="normal">
//             <InputLabel sx={{ fontSize: '25px', fontWeight: 'bold', color: darkMode ? '#fff' : '#000', position: 'absolute', top: '-20px', left: '-3px' }}>Validity</InputLabel>
//             <Select
//               value={validity}
//               onChange={(e) => handleChange('VALID/INVALID', e.target.value)}
//               sx={{ height: '150px' }} // Adjust height as needed
//             >
//               <MenuItem value="VALID">Valid</MenuItem>
//               <MenuItem value="INVALID">Invalid</MenuItem>
//             </Select>
//           </FormControl>
//         )}

//         {category === 'OTHER' && validity === 'VALID' && (
//           <FormControl fullWidth margin="normal">
//             <InputLabel sx={{ fontSize: '25px', fontWeight: 'bold', color: darkMode ? '#fff' : '#000', position: 'absolute', top: '-20px', left: '-3px' }}>Type</InputLabel>
//             <Select
//               value={type}
//               onChange={(e) => handleChange('BLD OR URINE/OTHER', e.target.value)}
//               sx={{ height: '150px' }} // Adjust height as needed
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
//               <img src={`/${imageFileName}`} alt="/Food.jpg" style={{ maxWidth: '100%' }} />
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
//   const { rowId, file } = context.query;
//   const dataDirectory = path.join(process.cwd(), 'src', 'data2');
//   const csvFiles = [
//     'dataset.csv',
//     'food.csv',
//     'body.csv',
//     'other(p0).csv',
//     'valid.csv',
//     'invalid.csv',
//     'bld&urine.csv',
//     'other(p2).csv',
//   ];

//   let rowData = null;
//   let totalPages = 0;

//   // Determine the CSV file to read from based on the query parameter
//   const filePath = path.join(dataDirectory, file || 'dataset.csv');

//   // Search across the CSV file
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
//   const { rowId, file } = router.query;
//   const { darkMode } = useDarkMode();
//   const [editedData, setEditedData] = useState(row ? { ...row } : {});
//   const [oldData, setOldData] = useState(row ? { ...row } : {});

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
//           oldData: oldData, // Pass the old data for deletion
//         }),
//       });

//       if (response.ok) {
//         console.log('Row updated successfully');
//         alert('Change made successfully!');
//         router.back();
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

//   const renderFormFields = () => {
//     const category = editedData['IMAGE CLASSIFIER (p1)'];
//     const validity = editedData['VALID/INVALID'];
//     const type = editedData['BLD OR URINE/OTHER'];

//     return (
//       <>
//         <FormControl fullWidth margin="normal">
//           <InputLabel sx={{ fontSize: '25px', fontWeight: 'bold', color: darkMode ? '#fff' : '#000', position: 'absolute', top: '-20px', left: '-3px' }}>Category</InputLabel>
//           <Select
//             value={category}
//             onChange={(e) => handleChange('IMAGE CLASSIFIER (p1)', e.target.value)}
//             sx={{ height: '150px' }} // Adjust height as needed
//           >
//             <MenuItem value="FOOD">Food</MenuItem>
//             <MenuItem value="BODY PART">Body Part</MenuItem>
//             <MenuItem value="OTHER">Other</MenuItem>
//           </Select>
//         </FormControl>

//         {category === 'OTHER' && (
//           <FormControl fullWidth margin="normal">
//             <InputLabel sx={{ fontSize: '25px', fontWeight: 'bold', color: darkMode ? '#fff' : '#000', position: 'absolute', top: '-20px', left: '-3px' }}>Validity</InputLabel>
//             <Select
//               value={validity}
//               onChange={(e) => handleChange('VALID/INVALID', e.target.value)}
//               sx={{ height: '150px' }} // Adjust height as needed
//             >
//               <MenuItem value="VALID">Valid</MenuItem>
//               <MenuItem value="INVALID">Invalid</MenuItem>
//             </Select>
//           </FormControl>
//         )}

//         {category === 'OTHER' && validity === 'VALID' && (
//           <FormControl fullWidth margin="normal">
//             <InputLabel sx={{ fontSize: '25px', fontWeight: 'bold', color: darkMode ? '#fff' : '#000', position: 'absolute', top: '-20px', left: '-3px' }}>Type</InputLabel>
//             <Select
//               value={type}
//               onChange={(e) => handleChange('BLD OR URINE/OTHER', e.target.value)}
//               sx={{ height: '150px' }} // Adjust height as needed
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
//               <img src={`/${imageFileName}`} alt="/Food.jpg" style={{ maxWidth: '100%' }} />
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
//   const { rowId, file } = context.query;
//   const dataDirectory = path.join(process.cwd(), 'src', 'data2');
//   const csvFiles = [
//     'dataset.csv',
//     'food.csv',
//     'body.csv',
//     'other(p0).csv',
//     'valid.csv',
//     'invalid.csv',
//     'bld&urine.csv',
//     'other(p2).csv',
//   ];

//   let rowData = null;
//   let totalPages = 0;

//   // Determine the CSV file to read from based on the query parameter
//   const filePath = path.join(dataDirectory, file || 'dataset.csv');

//   // Search across the CSV file
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
//   const { rowId, file } = router.query;
//   const { darkMode } = useDarkMode();
//   const [editedData, setEditedData] = useState(row ? { ...row } : {});
//   const [oldData, setOldData] = useState(row ? { ...row } : {});

//   useEffect(() => {
//     if (row) {
//       setEditedData((prevData) => ({
//         ...prevData,
//         Visited: true, // Set Visited to true
//       }));
//     }
//   }, [row]);

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
//           oldData: oldData, // Pass the old data for deletion
//         }),
//       });

//       if (response.ok) {
//         console.log('Row updated successfully');
//         alert('Change made successfully!');
//         router.back();
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

//   const renderFormFields = () => {
//     const category = editedData['IMAGE CLASSIFIER (p1)'];
//     const validity = editedData['VALID/INVALID'];
//     const type = editedData['BLD OR URINE/OTHER'];

//     return (
//       <>
//         <FormControl fullWidth margin="normal">
//           <InputLabel sx={{ fontSize: '25px', fontWeight: 'bold', color: darkMode ? '#fff' : '#000', position: 'absolute', top: '-20px', left: '-3px' }}>Category</InputLabel>
//           <Select
//             value={category}
//             onChange={(e) => handleChange('IMAGE CLASSIFIER (p1)', e.target.value)}
//             sx={{ height: '150px' }} // Adjust height as needed
//           >
//             <MenuItem value="FOOD">Food</MenuItem>
//             <MenuItem value="BODY PART">Body Part</MenuItem>
//             <MenuItem value="OTHER">Other</MenuItem>
//           </Select>
//         </FormControl>

//         {category === 'OTHER' && (
//           <FormControl fullWidth margin="normal">
//             <InputLabel sx={{ fontSize: '25px', fontWeight: 'bold', color: darkMode ? '#fff' : '#000', position: 'absolute', top: '-20px', left: '-3px' }}>Validity</InputLabel>
//             <Select
//               value={validity}
//               onChange={(e) => handleChange('VALID/INVALID', e.target.value)}
//               sx={{ height: '150px' }} // Adjust height as needed
//             >
//               <MenuItem value="VALID">Valid</MenuItem>
//               <MenuItem value="INVALID">Invalid</MenuItem>
//             </Select>
//           </FormControl>
//         )}

//         {category === 'OTHER' && validity === 'VALID' && (
//           <FormControl fullWidth margin="normal">
//             <InputLabel sx={{ fontSize: '25px', fontWeight: 'bold', color: darkMode ? '#fff' : '#000', position: 'absolute', top: '-20px', left: '-3px' }}>Type</InputLabel>
//             <Select
//               value={type}
//               onChange={(e) => handleChange('BLD OR URINE/OTHER', e.target.value)}
//               sx={{ height: '150px' }} // Adjust height as needed
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
//               <img src={`/${imageFileName}`} alt="/Food.jpg" style={{ maxWidth: '100%' }} />
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
//   const { rowId, file } = context.query;
//   const dataDirectory = path.join(process.cwd(), 'src', 'data2');
//   const csvFiles = [
//     'dataset.csv',
//     'food.csv',
//     'body.csv',
//     'other(p0).csv',
//     'valid.csv',
//     'invalid.csv',
//     'bld&urine.csv',
//     'other(p2).csv',
//   ];

//   let rowData = null;
//   let totalPages = 0;

//   // Determine the CSV file to read from based on the query parameter
//   const filePath = path.join(dataDirectory, file || 'dataset.csv');

//   // Search across the CSV file
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

//   // Ensure the Visited field exists and is set to false if not already present
//   if (rowData && !('Visited' in rowData)) {
//     rowData['Visited'] = false;
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
// import { EditProvider,useEditContext } from '@/contexts/editContext';

// const RowDetails = ({ row, totalPages }) => {
//   const router = useRouter();
//   const { rowId, file } = router.query;
//   const { darkMode } = useDarkMode();
//   const { editedRows,addEditedRow } = useEditContext();
//   const [editedData, setEditedData] = useState(row ? { ...row } : {});
//   const [oldData, setOldData] = useState(row ? { ...row } : {});
//   console.log("Old data: ",oldData);
//   console.log("Edited Data",editedData);

//   useEffect(() => {
//     if (row) {
//       setEditedData((prevData) => ({
//         ...prevData,
//         // Visited: true, // Set Visited to true
//       }));
//     }
//   }, [row]);

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
//         return '1.jpg'; // Provide a default image if rowId doesn't match
//     }
//   };

//   const imageFileName = getImageFileName(rowId);

//   // const handleChange = (field, value) => {
//   //   setEditedData((prevData) => ({
//   //     ...prevData,
//   //     [field]: value,
//   //   }));
//   // };
//   const handleChange = (field, value) => {
//     setEditedData((prevData) => ({
//       ...prevData,
//       [field]: value,
//       // Visited: true
//     }));
//     addEditedRow(rowId);
//     // const editedRows = JSON.parse(localStorage.getItem('editedRows')) || [];
//     // if (!editedRows.includes(rowId)) {
//     //   localStorage.setItem('editedRows', JSON.stringify([...editedRows, rowId]));
//     // }
//     // console.log("Rows pushed",editedRows);
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
//           rowId: rowId,
//           newData: updateData,
//           oldData: oldData,
//           currentFile: file // Pass the old data for deletion
//         }),
//       });

//       if (response.ok) {
//         console.log('Row updated successfully');
//         console.log("Rows pushed",editedRows);
//         alert('Change made successfully!');
//         router.back();
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

//   const renderFormFields = () => {
//     const category = editedData['task0'];
//     console.log("Category",category);
//     const validity = editedData['task1'];
//     const type = editedData['task2'];
//     const output = editedData['output']

//     return (
//       <>
//         {/* <TextField
//           fullWidth
//           margin="normal"
//           label="Output"
//           value={editedData.output || ''}
//           onChange={(e) => handleChange('output', e.target.value)}
//           sx={{ fontSize: '12px', fontWeight: 'bold', color: darkMode ? '#fff' : '#000' ,height:'200px',marginBottom:'20px'}}
//           InputProps={{
//             sx: {
//               fontSize: '14px', // Adjust the font size as needed to decrease text size
//             },
//           }}
        
//         /> */}
//         <TextField
//   label="Output"
//   multiline
//   rows={15} // Adjust the number of rows as needed to increase height
//   value={editedData.output}
//   onChange={(e) => handleChange('output', e.target.value)}
//   fullWidth
//   variant="outlined"
//   InputProps={{
//     sx: {
//       fontSize: '12px', // Adjust the font size as needed to decrease text size
//     },
//   }}
//   sx={{ marginBottom: '16px' }} // Adjust margin bottom as needed
// />
//         <FormControl fullWidth margin="normal">
//           <InputLabel sx={{ fontSize: '25px', fontWeight: 'bold', color: darkMode ? '#fff' : '#000', position: 'absolute', top: '-20px', left: '-3px' }}>Category</InputLabel>
//           <Select
//             value={category}
//             onChange={(e) => handleChange('task0', e.target.value)}
//             sx={{ height: '100px' }} // Adjust height as needed
//           >
//             <MenuItem value="Food">Food</MenuItem>
//             <MenuItem value="Body Part">Body Part</MenuItem>
//             <MenuItem value="Other">Other</MenuItem>
//           </Select>
//         </FormControl>

//         {category === 'Other' && (
//           <FormControl fullWidth margin="normal">
//             <InputLabel sx={{ fontSize: '25px', fontWeight: 'bold', color: darkMode ? '#fff' : '#000', position: 'absolute', top: '-20px', left: '-3px' }}>Validity</InputLabel>
//             <Select
//               value={validity}
//               onChange={(e) => handleChange('task1', e.target.value)}
//               sx={{ height: '100px' }} // Adjust height as needed
//             >
//               <MenuItem value="Valid">Valid</MenuItem>
//               <MenuItem value="Invalid">Invalid</MenuItem>
//             </Select>
//           </FormControl>
//         )}

//         {category === 'Other' && validity === 'Valid' && (
//           <FormControl fullWidth margin="normal">
//             <InputLabel sx={{ fontSize: '25px', fontWeight: 'bold', color: darkMode ? '#fff' : '#000', position: 'absolute', top: '-20px', left: '-3px' }}>Type</InputLabel>
//             <Select
//               value={type}
//               onChange={(e) => handleChange('task2', e.target.value)}
//               sx={{ height: '100px' }} // Adjust height as needed
//             >
//               <MenuItem value="Blood & Urine">Blood/Urine</MenuItem>
//               <MenuItem value="Other">Other</MenuItem>
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
//                 <strong>ID:</strong> {row['message_id_new']}
//               </Typography>
//               <img src={`/${imageFileName}`} alt="Image" style={{ maxWidth: '100%' }} />
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
//   console.log("hello");
//   const { rowId, file } = context.query;
//   const dataDirectory = path.join(process.cwd(), 'src', 'data2');
//   // const csvFiles = [
//   //   'dataset.csv',
//   //   'food.csv',
//   //   'body.csv',
//   //   'other(p0).csv',
//   //   'valid.csv',
//   //   'invalid.csv',
//   //   'bld&urine.csv',
//   //   'other(p2).csv',
//   // ];

//   let rowData = null;
//   let totalPages = 0;
//   console.log('file:', file);
//   // Determine the CSV file to read from based on the query parameter
//   const filePath = path.join(dataDirectory, file || 'dataset.csv');
//   console.log('file:', file);
//   console.log('filePath:', filePath);
  
//   // Search across the CSV file
//   try {
//     const fileStream = fs.createReadStream(filePath, 'utf8');
//     let rowNum = 0;

//     await new Promise((resolve, reject) => {
//       fileStream.pipe(csv())
//         .on('data', (row) => {
//           if (row['message_id_new'] === rowId) {
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

//   console.log(rowData);
//   // Ensure the Visited field exists and is set to false if not already present
//   // if (rowData && !('Visited' in rowData)) {
//   //   rowData['Visited'] = false;
//   // }

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
import path from 'path';
import csv from 'csv-parser';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useDarkMode } from '@/contexts/darkModeContext';
import Layout from '@/components/layout';
import { EditProvider, useEditContext } from '@/contexts/editContext';
import AWS from 'aws-sdk';

const RowDetails = ({ row, totalPages ,rowIndex,rows}) => {
  const router = useRouter();
  const { rowId, file } = router.query;
  const { darkMode } = useDarkMode();
  const { editedRows, addEditedRow } = useEditContext();
  const [editedData, setEditedData] = useState(row ? { ...row } : {});
  const [oldData, setOldData] = useState(row ? { ...row } : {});
  const [fileName, setFileName] = useState('');
  const [showCommentField, setShowCommentField] = useState(!!(row.comment && row.comment !== '-'));
  const [comment, setComment] = useState(row ? row.comment || '' : '');
  console.log("Old data: ", oldData);
  console.log("Edited Data", editedData);

  // useEffect(() => {
  //   if (row) {
  //     setEditedData((prevData) => ({
  //       ...prevData,
  //       // Visited: true, // Set Visited to true
  //     }));
  //     setComment(row.comment || '');
  //   }
  //   const getFileName = async (rowId) => {
  //     try {
  //       const imageResponse = await fetch(`/api/checkFileExists?filePath=images/${rowId}.jpg`);
  //       if (imageResponse.ok) {
  //         setFileName(`images/${rowId}.jpg`);
  //       } else {
  //         const pdfResponse = await fetch(`/api/checkFileExists?filePath=pdfs/${rowId}.pdf`);
  //         if (pdfResponse.ok) {
  //           setFileName(`pdfs/${rowId}.pdf`);
  //         } else {
  //           setFileName('');
  //         }
  //       }
  //     } catch (error) {
  //       console.error('Error checking file existence:', error);
  //       setFileName('');
  //     }
  //   };
  //   getFileName(rowId);
  // }, [row,rowId]);
  useEffect(() => {
    if (row) {
      setEditedData((prevData) => ({
        ...prevData,
        // Visited: true, // Set Visited to true
      }));
      setComment(row.comment || '');
    }
    
    const getFileName = async (messageId) => {
      try {
        const imageResponse = await fetch(`/api/checkFileExists?filePath=images/${messageId}.jpg`);
        if (imageResponse.ok) {
          setFileName(`images/${messageId}.jpg`);
        } else {
          const pdfResponse = await fetch(`/api/checkFileExists?filePath=pdfs/${messageId}.pdf`);
          if (pdfResponse.ok) {
            setFileName(`pdfs/${messageId}.pdf`);
          } else {
            setFileName('');
          }
        }
      } catch (error) {
        console.error('Error checking file existence:', error);
        setFileName('');
      }
    };
  
    if (rowId) {
      getFileName(rowId);
    }
  }, [row, rowId]);

  const isPdf = fileName.endsWith('.pdf');

  const handleChange = (field, value) => {
    setEditedData((prevData) => ({
      ...prevData,
      [field]: value,
      // Visited: true
    }));
    // addEditedRow(rowId);
  };
  const handleCommentChange = (value) => {
    setComment(value);
    setEditedData((prevData) => ({
      ...prevData,
      comment: value,
    }));
  };
  const handlePrevious = () => {
    if (rowIndex > 0) {
      const previousRowId = rows[rowIndex - 1].message_id_new;
      router.push(`/category/${previousRowId}?file=${file}`);
    }
  };

  const handleNext = () => {
    if (rowIndex < rows.length - 1) {
      const nextRowId = rows[rowIndex + 1].message_id_new;
      router.push(`/category/${nextRowId}?file=${file}`);
    }
  };
  
  // const handleSave = async () => {
  //   const updateData = {
  //     ...row,
  //     ...editedData,
  //     comment: comment || '',
  //   };

    const handleConditionalFields = (data) => {
      const newData = { ...data };
    
      // if (!(newData.task0 === 'Other' || newData.task0 === 'A' || newData.task0 === 'B' || newData.task0 === 'E') || newData.task1 !== 'Valid') {
      //   newData.task2 = '-';
      // }
      if(newData.task0==='C' || newData.task1==='D'){
        newData.task1 = '-'
        newData.task2= '-'
      }else if((newData.task0 === 'Other' || newData.task0 === 'A' || newData.task0 === 'B' || newData.task0 === 'E') && newData.task1 === 'Invalid'){
        newData.task2 = '-'
      }

      return newData;
    };
    
    const handleSave = async () => {
      const updateData = handleConditionalFields({
        ...row,
        ...editedData,
        comment: comment || '',
      });


    try {
      const response = await fetch('/api/updateRow', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          rowId: rowId,
          newData: updateData,
          oldData: oldData,
          currentFile: file // Pass the old data for deletion
        }),
      });

      if (response.ok) {
        addEditedRow(rowId);
        console.log('Row updated successfully');
        console.log("Rows pushed", editedRows);
        alert('Change made successfully!');
        router.back();
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
    const task0 = editedData['task0'];
    const task1 = editedData['task1'];
    const task2 = editedData['task2'];
    const output0 = editedData['output0'];
    const output1 = editedData['output1'];
    const output2 = editedData['output2'];

    return (
      <>
        <FormControl fullWidth margin="normal">
          <InputLabel sx={{ fontSize: '14px', fontWeight: 'bold', color: darkMode ? '#fff' : '#000' }}>Task0</InputLabel>
          <Select
            value={task0}
            onChange={(e) => handleChange('task0', e.target.value)}
          >
            <MenuItem value = "A">A </MenuItem>
            <MenuItem value = "B">B </MenuItem>
            <MenuItem value = "C">C </MenuItem>
            <MenuItem value = "D">D </MenuItem>
            <MenuItem value = "E">E </MenuItem>
            <MenuItem value="Other">Other</MenuItem>
          </Select>
        </FormControl>
{/* 
        <TextField
          label="image-classifier"
          multiline
          rows={2}
          value={output0}
          onChange={(e) => handleChange('output0', e.target.value)}
          fullWidth
          margin="normal"
          variant="outlined"
          sx={{marginTop:'1px'}}
          InputProps={{
            sx: {
              fontSize: '14px',
            },
          }}
        /> */}
        {(task0 === 'Other' || task0==='A' || task0==='B' || task0==='E') && (
        <FormControl fullWidth margin="normal">
          <InputLabel sx={{ fontSize: '14px', fontWeight: 'bold', color: darkMode ? '#fff' : '#000' }}>Task1</InputLabel>
          <Select
            value={task1}
            onChange={(e) => handleChange('task1', e.target.value)}
          >
            <MenuItem value="Valid">Valid</MenuItem>
            <MenuItem value="Invalid">Invalid</MenuItem>
          </Select>
        </FormControl>
        )}

        <TextField
          label="text_extraction / pdf_text_extraction"
          multiline
          rows={12}
          value={output1}
          onChange={(e) => handleChange('output1', e.target.value)}
          fullWidth
          margin="normal"
          variant="outlined"
          sx={{marginTop:'1px'}}
          InputProps={{
            sx: {
              fontSize: '14px',
              minHeight:'200px'
            },
          }}
        />
  {(task0 === 'Other' || task0==='A' || task0==='B' || task0==='E') && task1 === 'Valid' && (
        <FormControl fullWidth margin="normal">
          <InputLabel sx={{ fontSize: '14px', fontWeight: 'bold', color: darkMode ? '#fff' : '#000' }}>Task2</InputLabel>
          <Select
            value={task2}
            onChange={(e) => handleChange('task2', e.target.value)}
          >
            <MenuItem value="Blood & Urine">Blood/Urine</MenuItem>
            <MenuItem value="Other">Other</MenuItem>
          </Select>
        </FormControl>
  )}
        <TextField
          label="get_document_type / image_descriptor_without_highlight"
          multiline
          rows={12}
          value={output2}
          onChange={(e) => handleChange('output2', e.target.value)}
          fullWidth
          margin="normal"
          variant="outlined"
          sx={{marginTop:'1px'}}
          InputProps={{
            sx: {
              fontSize: '14px',
              minHeight:'200px'
            },
          }}
        />
      </>
    );
  };
    return (
      <ThemeProvider theme={theme}>
        <Layout pageTitle="Item">
          <CssBaseline />
          <Box sx={{ display: 'flex', minHeight: '80vh', padding: '24px', backgroundColor: darkMode ? '#303030' : '#f4f6f8' }}>
            <Card sx={{ flex: '1 1 30%', marginRight: '16px', backgroundColor: darkMode ? '#424242' : '#fff', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
              <CardContent>
                {/* Display image or PDF */}
                {/* {isPdf ? (
                  <iframe src={`/${fileName}`} alt="pdf" style={{ maxWidth: '100%', height: '1000px', width: '600px' }} />
                ) : (
                  <img src={`/${fileName}`} alt="Image" style={{ maxWidth: '110%', height: '1000px' }} />
                )} */}
                {/* {isPdf ? (
  <iframe 
    src={`https://${process.env.S3_BUCKET_NAME}.s3.amazonaws.com/${fileName}`} 
    alt="pdf" 
    style={{ maxWidth: '100%', height: '1000px', width: '600px' }} 
  />
) : (
  <img 
    src={`https://${process.env.S3_BUCKET_NAME}.s3.amazonaws.com/${fileName}`} 
    alt="Image" 
    style={{ maxWidth: '110%', height: '1000px' }} 
  />
)} */}
{fileName && (
  fileName.endsWith('.pdf') ? (
    <iframe 
      src={`/api/getFile?messageId=${rowId}`}
      title="PDF Viewer"
      style={{ maxWidth: '100%', height: '1000px', width: '600px'  }} 
    />
  ) : (
    <img 
      src={`/api/getFile?messageId=${rowId}`}
      alt="Image" 
      style={{ maxWidth: '100%', maxHeight: '1000px', objectFit: 'contain' }} 
    />
  )
)}
              </CardContent>
            </Card>
    
            <Box sx={{ flex: '1 1 45%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', paddingLeft: '16px', height: '128vh' }}>
              {/* Render form fields */}
              {renderFormFields()}
    
              {/* Add comment section */}
              {showCommentField ? (
                <>
                  <TextField
                    label="Comment"
                    value={comment}
                    onChange={(e) => handleCommentChange(e.target.value)}
                    fullWidth
                    multiline
                    rows={4}
                    margin="normal"
                    variant="outlined"
                    sx={{ marginTop: '1px' }}
                    InputProps={{
                      sx: {
                        fontSize: '14px',
                        minHeight: '100px'
                      },
                    }}
                  />
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => {
                      setShowCommentField(false);
                      setComment('');
                    }}
                  >
                    Cancel
                  </Button>
                </>
              ) : (
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => setShowCommentField(true)}
                >
                  + Add Comment
                </Button>
              )}
    
              {/* Save and Reset buttons */}
              <Box sx={{ display: 'flex', justifyContent: 'flex-start', marginTop: '16px', gap: '8px' }}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSave}
                >
                  Save
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => {setEditedData({ ...oldData }),setShowCommentField(false),
                  setComment('')}}
                >
                  Reset
                </Button>
              </Box>
    
              {/* Back and Previous buttons */}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '16px', gap: '8px' }}>
                {rowIndex > 0 && (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handlePrevious}
                    sx={{height:'25px',width:'50px',fontSize:'10px'}}
                  >
                    Previous
                  </Button>
                )}
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                  sx={{height:'25px',width:'50px',fontSize:'10px'}}
                >
                  Next
                </Button>
              </Box>
            </Box>
          </Box>
        </Layout>
      </ThemeProvider>
    );
    
  // );
};





export async function getServerSideProps(context) {
  const { rowId, file } = context.query;

  // Configure AWS SDK
  AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
  });

  const s3 = new AWS.S3();

  try {
    // Fetch CSV file from S3
    const params = {
      Bucket: process.env.S3_BUCKET_NAME,
      Key: `datasets/${file}`
    };

    const s3Object = await s3.getObject(params).promise();
    const csvContent = s3Object.Body.toString('utf-8');

    // Parse CSV content
    const rows = await new Promise((resolve) => {
      const results = [];
      const parser = csv();
      parser.on('data', (data) => results.push(data));
      parser.on('end', () => {
        const rowIndex = results.findIndex((row) => row.message_id_new === rowId);
        const row = results[rowIndex] || null;
        resolve({ rows: results, row, rowIndex });
      });
      parser.write(csvContent);
      parser.end();
    });

    return {
      props: {
        row: rows.row,
        rowIndex: rows.rowIndex,
        rows: rows.rows,
        totalPages: rows.rows.length,
      },
    };
  } catch (error) {
    console.error('Error reading CSV file from S3:', error);
    return {
      notFound: true,
    };
  }
}

const RowDetailsPage = (props) => (
  <EditProvider>
    <RowDetails {...props} />
  </EditProvider>
);

export default RowDetailsPage;
