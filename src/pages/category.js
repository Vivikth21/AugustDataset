

// import { useState, useEffect } from 'react';
// import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Paper, Link, Switch, IconButton, Select, MenuItem } from '@mui/material';
// import { styled } from '@mui/system';
// import fs from 'fs';
// import path from 'path';
// import csv from 'csv-parser';
// import { useRouter } from 'next/router';
// import Brightness4Icon from '@mui/icons-material/Brightness4';
// import Brightness7Icon from '@mui/icons-material/Brightness7';

// const PAGE_SIZES = [10, 20, 30, 40, 50]; // Options for rows per page
// const DEFAULT_PAGE_SIZE = 30; // Default number of items per page

// const CategoryPage = ({ data, columns, currentPage: initialPage, totalPages: initialTotalPages }) => {
//   const router = useRouter();
//   const [darkMode, setDarkMode] = useState(false);
//   const [rowsPerPage, setRowsPerPage] = useState(DEFAULT_PAGE_SIZE);
//   const [currentPage, setCurrentPage] = useState(initialPage);
//   const [totalPages, setTotalPages] = useState(initialTotalPages);

//   useEffect(() => {
//     setTotalPages(Math.ceil(data.length / rowsPerPage));
//   }, [rowsPerPage, data]);

//   const navigateToPage = (page) => {
//     router.push(`/category?page=${page}&rowsPerPage=${rowsPerPage}`);
//     setCurrentPage(page);
//   };

//   const goToFlowPage = () => {
//     router.push('/flow');
//   };

//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     const newRowsPerPage = parseInt(event.target.value, 10);
//     setRowsPerPage(newRowsPerPage);
//     navigateToPage(1); // Navigate to first page immediately after changing rows per page
//   };

//   const handleFirstPage = () => {
//     navigateToPage(1);
//   };

//   const handlePrevPage = () => {
//     navigateToPage(Math.max(currentPage - 1, 1));
//   };

//   const handleNextPage = () => {
//     navigateToPage(Math.min(currentPage + 1, totalPages));
//   };

//   const handleLastPage = () => {
//     navigateToPage(totalPages);
//   };

//   const renderPageLinks = () => {
//     return (
//       <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '16px', backgroundColor: darkMode ? '#333' : 'white', padding: '16px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
//         {currentPage > 1 && (
//           <>
//             <Button variant="outlined" onClick={handleFirstPage} sx={{ fontSize: '10px', maxWidth: '40px', marginRight: '8px' }}>««</Button>
//             <Button variant="outlined" onClick={handlePrevPage} sx={{ fontSize: '10px', maxWidth: '40px', marginRight: '8px' }}>«</Button>
//           </>
//         )}
//         <Typography variant="body1" sx={{ marginX: '8px' }}>Page {currentPage} of {totalPages}</Typography>
//         {currentPage < totalPages && (
//           <>
//             <Button variant="outlined" onClick={handleNextPage} sx={{ fontSize: '10px', maxWidth: '40px', marginRight: '8px' }}>»</Button>
//             <Button variant="outlined" onClick={handleLastPage} sx={{ fontSize: '10px', maxWidth: '40px' }}>»»</Button>
//           </>
//         )}
//       </Box>
//     );
//   };

//   return (
//     <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: darkMode ? '#121212' : '#f4f6f8' }}>
//       {/* App Bar */}
//       <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'black', padding: '16px' }}>
//         <Typography variant="h5" sx={{ color: 'white', marginLeft: '16px' }}>Categories</Typography>
//         <Box sx={{ display: 'flex', alignItems: 'center' }}>
//           <IconButton onClick={toggleDarkMode} sx={{ color: 'white', marginRight: '8px' }}>
//             {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
//           </IconButton>
//           <Button variant="outlined" onClick={goToFlowPage} sx={{ color: 'white', borderColor: 'white', fontSize: '12px', marginRight: '8px' }}>Home</Button>
//         </Box>
//       </Box>

//       {/* Main Content Area */}
//       <Box sx={{ flexGrow: 1, padding: '24px', display: 'flex', justifyContent: 'center', alignItems: 'center', overflowY: 'auto' }}>
//         <TableContainer component={Paper} sx={{ width: '100%', backgroundColor: darkMode ? '#333' : 'white' }}>
//           <Table stickyHeader>
//             <TableHead sx={{ backgroundColor: darkMode ? '#333' : 'white' }}>
//               <TableRow>
//                 {columns.map((column, index) => (
//                   <TableCell key={index} sx={{ color: darkMode ? 'white' : 'black', backgroundColor: darkMode ? '#333' : 'white', fontSize: '16px', fontWeight: 'bold' }}>{column}</TableCell>
//                 ))}
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {data.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage).map((row, rowIndex) => (
//                 <StyledTableRow key={rowIndex} darkMode={darkMode}>
//                   {columns.map((column, colIndex) => (
//                     <TableCell key={colIndex} sx={{ color: darkMode ? 'white' : 'black' }}>
//                       {colIndex === 0 ? (
//                         <Link href={`/category/${(currentPage - 1) * rowsPerPage + rowIndex}`} passHref>
//                           <Button variant="text" sx={{ padding: 0, color: darkMode ? 'lightblue' : 'blue' }}>{row[column]}</Button>
//                         </Link>
//                       ) : (
//                         row[column]
//                       )}
//                     </TableCell>
//                   ))}
//                 </StyledTableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </Box>

//       {/* Rows per page selector */}
//       <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '16px' }}>
//         <Typography variant="body1" sx={{ marginRight: '8px' }}>Rows per page:</Typography>
//         <Select
//           value={rowsPerPage}
//           onChange={handleChangeRowsPerPage}
//           sx={{ minWidth: '80px', marginRight: '16px' }}
//         >
//           {PAGE_SIZES.map((size) => (
//             <MenuItem key={size} value={size}>{size}</MenuItem>
//           ))}
//         </Select>
//         <Typography variant="body1" sx={{ marginRight: '8px' }}>Showing {Math.min(((currentPage - 1) * rowsPerPage) + 1, data.length)}-{Math.min(currentPage * rowsPerPage, data.length)} of {data.length}</Typography>
//       </Box>

//       {/* Pagination */}
//       {renderPageLinks()}
//     </Box>
//   );
// };

// const StyledTableRow = styled(TableRow)(({ darkMode }) => ({
//   '&:hover': {
//     backgroundColor: darkMode ? '#444' : '#f5f5f5',
//   },
// }));

// export async function getServerSideProps(context) {
//   const { page = 1, rowsPerPage = DEFAULT_PAGE_SIZE } = context.query; // Default to page 1 and DEFAULT_PAGE_SIZE if no query params are provided
//   const filePath = path.join(process.cwd(), 'src', 'data', 'data.csv');
//   const data = [];
//   let columns = [];
//   let totalPages = 1;

//   try {
//     const fileStream = fs.createReadStream(filePath, 'utf8');
//     let rowNum = 0;

//     await new Promise((resolve, reject) => {
//       fileStream.pipe(csv())
//         .on('data', (row) => {
//           if (rowNum === 0) {
//             // Get column names from the first row
//             columns = Object.keys(row).slice(0,10);
//           }
//           data.push(row); // Push the entire row
//           rowNum++;
//         })
//         .on('end', () => {
//           console.log('CSV file successfully processed');
//           totalPages = Math.ceil(data.length / rowsPerPage);
//           resolve();
//         })
//         .on('error', (err) => reject(err));
//     });
//   } catch (error) {
//     console.error('Error reading or parsing CSV file:', error);
//   }

//   return {
//     props: {
//       data,
//       columns,
//       currentPage: +page,
//       totalPages,
//     },
//   };
// }

// export default CategoryPage;

// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Paper, Switch, IconButton, Select, MenuItem } from '@mui/material';
// import { styled } from '@mui/system';
// import fs from 'fs';
// import path from 'path';
// import csv from 'csv-parser';
// import { useRouter } from 'next/router';
// import Brightness4Icon from '@mui/icons-material/Brightness4';
// import Brightness7Icon from '@mui/icons-material/Brightness7';
// import Layout from '@/components/layout';
// import { useDarkMode } from '@/contexts/darkModeContext';


// const PAGE_SIZES = [10, 20, 30, 40, 50]; // Options for rows per page
// const DEFAULT_PAGE_SIZE = 30; // Default number of items per page

// const CategoryPage = ({ data, columns, currentPage: initialPage, totalPages: initialTotalPages }) => {
//   const router = useRouter();
//   // const [darkMode, setDarkMode] = useState(false);
//   const {darkMode} = useDarkMode()
//   const [rowsPerPage, setRowsPerPage] = useState(DEFAULT_PAGE_SIZE);
//   const [currentPage, setCurrentPage] = useState(initialPage);
//   const [totalPages, setTotalPages] = useState(initialTotalPages);

//   useEffect(() => {
//     setTotalPages(Math.ceil(data.length / rowsPerPage));
//   }, [rowsPerPage, data]);

//   const navigateToPage = (page) => {
//     router.push(`/category?page=${page}&rowsPerPage=${rowsPerPage}`);
//     setCurrentPage(page);
//   };

//   const goToFlowPage = () => {
//     router.push('/flow');
//   };

//   // const toggleDarkMode = () => {
//   //   setDarkMode(!darkMode);
//   // };

//   const handleChangeRowsPerPage = (event) => {
//     const newRowsPerPage = parseInt(event.target.value, 10);
//     setRowsPerPage(newRowsPerPage);
//     navigateToPage(1); // Navigate to first page immediately after changing rows per page
//   };

//   const handleFirstPage = () => {
//     navigateToPage(1);
//   };

//   const handlePrevPage = () => {
//     navigateToPage(Math.max(currentPage - 1, 1));
//   };

//   const handleNextPage = () => {
//     navigateToPage(Math.min(currentPage + 1, totalPages));
//   };

//   const handleLastPage = () => {
//     navigateToPage(totalPages);
//   };

//   const renderPageLinks = () => {
//     return (
//       <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '16px', backgroundColor: darkMode ? '#333' : 'white', padding: '16px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
//         {currentPage > 1 && (
//           <>
//             <Button variant="outlined" onClick={handleFirstPage} sx={{ fontSize: '10px', maxWidth: '40px', marginRight: '8px', color: darkMode ? 'white' : 'black' }}>««</Button>
//             <Button variant="outlined" onClick={handlePrevPage} sx={{ fontSize: '10px', maxWidth: '40px', marginRight: '8px', color: darkMode ? 'white' : 'black' }}>«</Button>
//           </>
//         )}
//         <Typography variant="body1" sx={{ marginX: '8px', color: darkMode ? 'white' : 'black' }}>Page {currentPage} of {totalPages}</Typography>
//         {currentPage < totalPages && (
//           <>
//             <Button variant="outlined" onClick={handleNextPage} sx={{ fontSize: '10px', maxWidth: '40px', marginRight: '8px', color: darkMode ? 'white' : 'black' }}>»</Button>
//             <Button variant="outlined" onClick={handleLastPage} sx={{ fontSize: '10px', maxWidth: '40px', color: darkMode ? 'white' : 'black' }}>»»</Button>
//           </>
//         )}
//       </Box>
//     );
//   };

//   return (
//     <Layout pageTitle="Data">
//     <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: darkMode ? '#121212' : '#f4f6f8' }}>
//       {/* App Bar */}
//       {/* <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'black', padding: '16px' }}>
//         <Typography variant="h5" sx={{ color: 'white', marginLeft: '16px' }}>Categories</Typography>
//         <Box sx={{ display: 'flex', alignItems: 'center' }}>
//           <IconButton onClick={toggleDarkMode} sx={{ color: 'white', marginRight: '8px' }}>
//             {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
//           </IconButton>
//           <Button variant="outlined" onClick={goToFlowPage} sx={{ color: 'white', borderColor: 'white', fontSize: '12px', marginRight: '8px' }}>Home</Button>
//         </Box>
//       </Box> */}

//       {/* Main Content Area */}
//       <Box sx={{ flexGrow: 1, padding: '24px', display: 'flex', justifyContent: 'center', alignItems: 'center', overflowY: 'auto' }}>
//         <TableContainer component={Paper} sx={{ width: '100%', backgroundColor: darkMode ? '#333' : 'white' }}>
//           <Table stickyHeader>
//             <TableHead sx={{ backgroundColor: darkMode ? '#333' : 'white' }}>
//               <TableRow>
//                 {columns.map((column, index) => (
//                   <TableCell key={index} sx={{ color: darkMode ? 'white' : 'black', backgroundColor: darkMode ? '#333' : 'white', fontSize: '16px', fontWeight: 'bold' }}>{column}</TableCell>
//                 ))}
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {data.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage).map((row, rowIndex) => (
//                 <StyledTableRow key={rowIndex} darkMode={darkMode}>
//                   {columns.map((column, colIndex) => (
//                     <TableCell key={colIndex} sx={{ color: darkMode ? 'white' : 'black' }}>
//                       {colIndex === 0 ? (
//                         // <Link href={`/category/${(currentPage - 1) * rowsPerPage + rowIndex}`} passHref>
//                         <Link href={`/category/${(currentPage - 1) * rowsPerPage + rowIndex + 1}`} passHref>
//                           <Button variant="text" sx={{ padding: 0, color: darkMode ? 'lightblue' : 'blue' }}>{row[column]}</Button>
//                         </Link>
//                       ) : (
//                         row[column]
//                       )}
//                     </TableCell>
//                   ))}
//                 </StyledTableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </Box>

//       {/* Rows per page selector */}
//       <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '16px' }}>
//         <Typography variant="body1" sx={{ marginRight: '8px', color: darkMode ? 'white' : 'black' }}>Rows per page:</Typography>
//         <Select
//           value={rowsPerPage}
//           onChange={handleChangeRowsPerPage}
//           sx={{ minWidth: '80px', marginRight: '16px', color: darkMode ? 'white' : 'black', '&:before': { borderColor: darkMode ? 'white' : 'black' }, '&:after': { borderColor: darkMode ? 'white' : 'black' }, '&:hover:not(.Mui-disabled):before': { borderColor: darkMode ? 'white' : 'black' }, '& .MuiSelect-icon': { color: darkMode ? 'white' : 'black' }, backgroundColor: darkMode ? '#555' : 'white', }}
//         >
//           {PAGE_SIZES.map((size) => (
//             <MenuItem key={size} value={size}>{size}</MenuItem>
//           ))}
//         </Select>
//         <Typography variant="body1" sx={{ marginRight: '8px', color: darkMode ? 'white' : 'black' }}>Showing {Math.min(((currentPage - 1) * rowsPerPage) + 1, data.length)}-{Math.min(currentPage * rowsPerPage, data.length)} of {data.length}</Typography>
//       </Box>

//       {/* Pagination */}
//       {renderPageLinks()}
//     </Box>
//     </Layout>
//   );
// };

// const StyledTableRow = styled(TableRow)(({ darkMode }) => ({
//   '&:hover': {
//     backgroundColor: darkMode ? '#444' : '#f5f5f5',
//   },
// }));

// export async function getServerSideProps(context) {
//   const { page = 1, rowsPerPage = DEFAULT_PAGE_SIZE } = context.query; // Default to page 1 and DEFAULT_PAGE_SIZE if no query params are provided
//   const filePath = path.join(process.cwd(), 'src', 'data2', 'dataset.csv');
//   const data = [];
//   let columns = [];
//   let totalPages = 1;

//   try {
//     const fileStream = fs.createReadStream(filePath, 'utf8');
//     let rowNum = 0;

//     await new Promise((resolve, reject) => {
//       fileStream.pipe(csv())
//         .on('data', (row) => {
//           if (rowNum === 0) {
//             // Get column names from the first row
//             columns = Object.keys(row);
//           }
//           data.push(row); // Push the entire row
//           rowNum++;
//         })
//         .on('end', () => {
//           console.log('CSV file successfully processed');
//           totalPages = Math.ceil
//           (data.length / rowsPerPage);
//           resolve();
//         })
//         .on('error', (err) => reject(err));
//     });
//   } catch (error) {
//     console.error('Error reading or parsing CSV file:', error);
//   }

//   return {
//     props: {
//       data,
//       columns,
//       currentPage: +page,
//       totalPages,
//     },
//   };
// }

// export default CategoryPage;

// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Paper, Select, MenuItem } from '@mui/material';
// import { styled } from '@mui/system';
// import fs from 'fs';
// import path from 'path';
// import csv from 'csv-parser';
// import { useRouter } from 'next/router';
// import Layout from '@/components/layout';
// import { useDarkMode } from '@/contexts/darkModeContext';
// import Image from 'next/image'; // Import Image component from next/image

// const PAGE_SIZES = [10, 20, 30, 40, 50]; // Options for rows per page
// const DEFAULT_PAGE_SIZE = 30; // Default number of items per page

// const CategoryPage = ({ data, columns, currentPage: initialPage, totalPages: initialTotalPages }) => {
//   const router = useRouter();
//   const { darkMode } = useDarkMode();
//   const [rowsPerPage, setRowsPerPage] = useState(DEFAULT_PAGE_SIZE);
//   const [currentPage, setCurrentPage] = useState(initialPage);
//   const [totalPages, setTotalPages] = useState(initialTotalPages);

//   useEffect(() => {
//     setTotalPages(Math.ceil(data.length / rowsPerPage));
//   }, [rowsPerPage, data]);

//   const navigateToPage = (page) => {
//     router.push(`/category?page=${page}&rowsPerPage=${rowsPerPage}`);
//     setCurrentPage(page);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     const newRowsPerPage = parseInt(event.target.value, 10);
//     setRowsPerPage(newRowsPerPage);
//     navigateToPage(1); // Navigate to first page immediately after changing rows per page
//   };

//   const handleFirstPage = () => {
//     navigateToPage(1);
//   };

//   const handlePrevPage = () => {
//     navigateToPage(Math.max(currentPage - 1, 1));
//   };

//   const handleNextPage = () => {
//     navigateToPage(Math.min(currentPage + 1, totalPages));
//   };

//   const handleLastPage = () => {
//     navigateToPage(totalPages);
//   };

//   const renderPageLinks = () => {
//     return (
//       <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '16px', backgroundColor: darkMode ? '#333' : 'white', padding: '16px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
//         {currentPage > 1 && (
//           <>
//             <Button variant="outlined" onClick={handleFirstPage} sx={{ fontSize: '10px', maxWidth: '40px', marginRight: '8px', color: darkMode ? 'white' : 'black' }}>««</Button>
//             <Button variant="outlined" onClick={handlePrevPage} sx={{ fontSize: '10px', maxWidth: '40px', marginRight: '8px', color: darkMode ? 'white' : 'black' }}>«</Button>
//           </>
//         )}
//         <Typography variant="body1" sx={{ marginX: '8px', color: darkMode ? 'white' : 'black' }}>Page {currentPage} of {totalPages}</Typography>
//         {currentPage < totalPages && (
//           <>
//             <Button variant="outlined" onClick={handleNextPage} sx={{ fontSize: '10px', maxWidth: '40px', marginRight: '8px', color: darkMode ? 'white' : 'black' }}>»</Button>
//             <Button variant="outlined" onClick={handleLastPage} sx={{ fontSize: '10px', maxWidth: '40px', color: darkMode ? 'white' : 'black' }}>»»</Button>
//           </>
//         )}
//       </Box>
//     );
//   };

//   return (
//     <Layout pageTitle="Data">
//       <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: darkMode ? '#121212' : '#f4f6f8' }}>
//         {/* Main Content Area */}
//         <Box sx={{ flexGrow: 1, padding: '24px', display: 'flex', justifyContent: 'center', alignItems: 'center', overflowY: 'auto' }}>
//           <TableContainer component={Paper} sx={{ width: '100%', backgroundColor: darkMode ? '#333' : 'white' }}>
//             <Table stickyHeader>
//               <TableHead sx={{ backgroundColor: darkMode ? '#333' : 'white' }}>
//                 <TableRow>
//                   {columns.map((column, index) => (
//                     <TableCell key={index} sx={{ color: darkMode ? 'white' : 'black', backgroundColor: darkMode ? '#333' : 'white', fontSize: '16px', fontWeight: 'bold' }}>{column}</TableCell>
//                   ))}
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {data.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage).map((row, rowIndex) => (
//                   <StyledTableRow key={rowIndex} darkMode={darkMode}>
//                     {columns.map((column, colIndex) => (
//                       <TableCell key={colIndex} sx={{ color: darkMode ? 'white' : 'black' }}>
//                         {colIndex === 0 ? (
//                           <Box style={{ display: 'flex', alignItems: 'center' }}>
//                             <Link href={`/category/${(currentPage - 1) * rowsPerPage + rowIndex + 1}`} passHref>
//                               <Button variant="text" sx={{ padding: 0, color: darkMode ? 'lightblue' : 'blue', marginLeft: '8px' }}>{row[column]}</Button>
//                             </Link>
//                             <Image
//                               src={`/${row.ID}.jpg`} // Assuming images are named 1.jpg, 2.jpg, etc., in the public folder
//                               alt="Image"
//                               width={50}
//                               height={50}
//                             />
//                           </Box>
//                         ) : (
//                           row[column]
//                         )}
//                       </TableCell>
//                     ))}
//                   </StyledTableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         </Box>

//         {/* Rows per page selector */}
//         <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '16px' }}>
//           <Typography variant="body1" sx={{ marginRight: '8px', color: darkMode ? 'white' : 'black' }}>Rows per page:</Typography>
//           <Select
//             value={rowsPerPage}
//             onChange={handleChangeRowsPerPage}
//             sx={{ minWidth: '80px', marginRight: '16px', color: darkMode ? 'white' : 'black', '&:before': { borderColor: darkMode ? 'white' : 'black' }, '&:after': { borderColor: darkMode ? 'white' : 'black' }, '&:hover:not(.Mui-disabled):before': { borderColor: darkMode ? 'white' : 'black' }, '& .MuiSelect-icon': { color: darkMode ? 'white' : 'black' }, backgroundColor: darkMode ? '#555' : 'white', }}
//           >
//             {PAGE_SIZES.map((size) => (
//               <MenuItem key={size} value={size}>{size}</MenuItem>
//             ))}
//           </Select>
//           <Typography variant="body1" sx={{ marginRight: '8px', color: darkMode ? 'white' : 'black' }}>Showing {Math.min(((currentPage - 1) * rowsPerPage) + 1, data.length)}-{Math.min(currentPage * rowsPerPage, data.length)} of {data.length}</Typography>
//         </Box>

//         {/* Pagination */}
//         {renderPageLinks()}
//       </Box>
//     </Layout>
//   );
// };

// const StyledTableRow = styled(TableRow)(({ darkMode }) => ({
//   '&:hover': {
//     backgroundColor: darkMode ? '#444' : '#f5f5f5',
//   },
// }));

// // export async function getServerSideProps(context) {
// //   const { page = 1, rowsPerPage = DEFAULT_PAGE_SIZE } = context.query; // Default to page 1 and DEFAULT_PAGE_SIZE if no query params are provided
// //   const filePath = path.join(process.cwd(), 'src', 'data2', 'dataset.csv'); // Update the path to your CSV file
// //   const data = [];
// //   let columns = [];
// //   let totalPages = 1;

// //   try {
// //     const fileStream = fs.createReadStream(filePath, 'utf8');
// //     let rowNum = 0;

// //     await new Promise((resolve, reject) => {
// //       fileStream.pipe(csv())
// //         .on('data', (row) => {
// //           if (rowNum === 0) {
// //             // Get column names from the first row
// //             columns = Object.keys(row);
// //           }
// //           data.push(row); // Push the entire row
// //           rowNum++;
// //         })
// //         .on('end', () => {
// //           console.log('CSV file successfully processed');
// //           totalPages = Math.ceil(data.length / rowsPerPage);
// //           resolve();
// //         })
// //         .on('error', (err) => reject(err));
// //     });
// //   } catch (error) {
// //     console.error('Error reading or parsing CSV file:', error);
// //   }

// //   return {
// //     props: {
// //       data,
// //       columns,
// //       currentPage: +page,
// //       totalPages,
// //     },
// //   };
// // }

// // export default CategoryPage;
// export async function getServerSideProps(context) {
//   const { query } = context;
//   const file = query.file || 'dataset.csv';
//   const rowsPerPage = parseInt(query.rowsPerPage, 10) || DEFAULT_PAGE_SIZE;
//   const currentPage = parseInt(query.page, 10) || 1;

//   const dataDirectory = path.join(process.cwd(), 'src', 'data2');
//   const filePath = path.join(dataDirectory, file);

//   const data = [];
//   const columns = new Set();

//   await new Promise((resolve, reject) => {
//     fs.createReadStream(filePath)
//       .pipe(csv())
//       .on('data', (row) => {
//         data.push(row);
//         Object.keys(row).forEach((column) => columns.add(column));
//       })
//       .on('end', resolve)
//       .on('error', reject);
//   });

//   const totalPages = Math.ceil(data.length / rowsPerPage);
//   return {
//     props: {
//       data,
//       columns: Array.from(columns),
//       currentPage,
//       totalPages,
//     },
//   };
// }

// export default CategoryPage;

// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Paper, Select, MenuItem } from '@mui/material';
// import { styled } from '@mui/system';
// import fs from 'fs';
// import path from 'path';
// import csv from 'csv-parser';
// import { useRouter } from 'next/router';
// import Layout from '@/components/layout';
// import { useDarkMode } from '@/contexts/darkModeContext';
// import Image from 'next/image'; // Import Image component from next/image

// const PAGE_SIZES = [10, 20, 30, 40, 50]; // Options for rows per page
// const DEFAULT_PAGE_SIZE = 30; // Default number of items per page

// const CategoryPage = ({ data, columns, currentPage: initialPage, totalPages: initialTotalPages }) => {
//   const router = useRouter();
//   const { file } = router.query;
//   const { darkMode } = useDarkMode();
//   const [rowsPerPage, setRowsPerPage] = useState(DEFAULT_PAGE_SIZE);
//   const [currentPage, setCurrentPage] = useState(initialPage);
//   const [totalPages, setTotalPages] = useState(initialTotalPages);

//   useEffect(() => {
//     setTotalPages(Math.ceil(data.length / rowsPerPage));
//   }, [rowsPerPage, data]);

//   const navigateToPage = (page) => {
//     router.push(`/category?file=${file}&page=${page}&rowsPerPage=${rowsPerPage}`);
//     setCurrentPage(page);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     const newRowsPerPage = parseInt(event.target.value, 10);
//     setRowsPerPage(newRowsPerPage);
//     navigateToPage(1); // Navigate to first page immediately after changing rows per page
//   };

//   const handleFirstPage = () => {
//     navigateToPage(1);
//   };

//   const handlePrevPage = () => {
//     navigateToPage(Math.max(currentPage - 1, 1));
//   };

//   const handleNextPage = () => {
//     navigateToPage(Math.min(currentPage + 1, totalPages));
//   };

//   const handleLastPage = () => {
//     navigateToPage(totalPages);
//   };

//   const renderPageLinks = () => {
//     return (
//       <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '16px', backgroundColor: darkMode ? '#333' : 'white', padding: '16px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
//         {currentPage > 1 && (
//           <>
//             <Button variant="outlined" onClick={handleFirstPage} sx={{ fontSize: '10px', maxWidth: '40px', marginRight: '8px', color: darkMode ? 'white' : 'black' }}>««</Button>
//             <Button variant="outlined" onClick={handlePrevPage} sx={{ fontSize: '10px', maxWidth: '40px', marginRight: '8px', color: darkMode ? 'white' : 'black' }}>«</Button>
//           </>
//         )}
//         <Typography variant="body1" sx={{ marginX: '8px', color: darkMode ? 'white' : 'black' }}>Page {currentPage} of {totalPages}</Typography>
//         {currentPage < totalPages && (
//           <>
//             <Button variant="outlined" onClick={handleNextPage} sx={{ fontSize: '10px', maxWidth: '40px', marginRight: '8px', color: darkMode ? 'white' : 'black' }}>»</Button>
//             <Button variant="outlined" onClick={handleLastPage} sx={{ fontSize: '10px', maxWidth: '40px', color: darkMode ? 'white' : 'black' }}>»»</Button>
//           </>
//         )}
//       </Box>
//     );
//   };

//   return (
//     <Layout pageTitle="Data">
//       <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: darkMode ? '#121212' : '#f4f6f8' }}>
//         {/* Main Content Area */}
//         <Box sx={{ flexGrow: 1, padding: '24px', display: 'flex', justifyContent: 'center', alignItems: 'center', overflowY: 'auto' }}>
//           <TableContainer component={Paper} sx={{ width: '100%', backgroundColor: darkMode ? '#333' : 'white' }}>
//             <Table stickyHeader>
//               <TableHead sx={{ backgroundColor: darkMode ? '#333' : 'white' }}>
//                 <TableRow>
//                   {columns.map((column, index) => (
//                     <TableCell key={index} sx={{ color: darkMode ? 'white' : 'black', backgroundColor: darkMode ? '#333' : 'white', fontSize: '16px', fontWeight: 'bold' }}>{column}</TableCell>
//                   ))}
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {data.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage).map((row, rowIndex) => (
//                   <StyledTableRow key={rowIndex} darkMode={darkMode}>
//                     {columns.map((column, colIndex) => (
//                       <TableCell key={colIndex} sx={{ color: darkMode ? 'white' : 'black' }}>
//                         {colIndex === 0 ? (
//                           <Box style={{ display: 'flex', alignItems: 'center' }}>
//                             <Link href={`/category/${(currentPage - 1) * rowsPerPage + rowIndex + 1}?file=${file}`} passHref>
//                               <Button variant="text" sx={{ padding: 0, color: darkMode ? 'lightblue' : 'blue', marginLeft: '8px' }}>{row[column]}</Button>
//                             </Link>
//                             <Image
//                               src={`/${row.ID}.jpg`} // Assuming images are named 1.jpg, 2.jpg, etc., in the public folder
//                               alt="Image"
//                               width={50}
//                               height={50}
//                             />
//                           </Box>
//                         ) : (
//                           row[column]
//                         )}
//                       </TableCell>
//                     ))}
//                   </StyledTableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         </Box>

//         {/* Rows per page selector */}
//         <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '16px' }}>
//           <Typography variant="body1" sx={{ marginRight: '8px', color: darkMode ? 'white' : 'black' }}>Rows per page:</Typography>
//           <Select
//             value={rowsPerPage}
//             onChange={handleChangeRowsPerPage}
//             sx={{ minWidth: '80px', marginRight: '16px', color: darkMode ? 'white' : 'black', '&:before': { borderColor: darkMode ? 'white' : 'black' }, '&:after': { borderColor: darkMode ? 'white' : 'black' }, '&:hover:not(.Mui-disabled):before': { borderColor: darkMode ? 'white' : 'black' }, '& .MuiSelect-icon': { color: darkMode ? 'white' : 'black' }, backgroundColor: darkMode ? '#555' : 'white', }}
//           >
//             {PAGE_SIZES.map((size) => (
//               <MenuItem key={size} value={size}>{size}</MenuItem>
//             ))}
//           </Select>
//           <Typography variant="body1" sx={{ marginRight: '8px', color: darkMode ? 'white' : 'black' }}>Showing {Math.min(((currentPage - 1) * rowsPerPage) + 1, data.length)}-{Math.min(currentPage * rowsPerPage, data.length)} of {data.length}</Typography>
//         </Box>

//         {/* Pagination */}
//         {renderPageLinks()}
//       </Box>
//     </Layout>
//   );
// };

// const StyledTableRow = styled(TableRow)(({ darkMode }) => ({
//   '&:hover': {
//     backgroundColor: darkMode ? '#444' : '#f5f5f5',
//   },
// }));

// export async function getServerSideProps(context) {
//   const { query } = context;
//   const file = query.file || 'dataset.csv';
//   const rowsPerPage = parseInt(query.rowsPerPage, 10) || DEFAULT_PAGE_SIZE;
//   const currentPage = parseInt(query.page, 10) || 1;

//   const dataDirectory = path.join(process.cwd(), 'src', 'data2');
//   const filePath = path.join(dataDirectory, file);

//   const data = [];
//   const columns = new Set();

//   await new Promise((resolve, reject) => {
//     fs.createReadStream(filePath)
//       .pipe(csv())
//       .on('data', (row) => {
//         data.push(row);
//         Object.keys(row).forEach((column) => columns.add(column));
//       })
//       .on('end', resolve)
//       .on('error', reject);
//   });

//   const totalPages = Math.ceil(data.length / rowsPerPage);
//   return {
//     props: {
//       data,
//       columns: Array.from(columns),
//       currentPage,
//       totalPages,
//     },
//   };
// }

// export default CategoryPage;

// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Paper, Select, MenuItem } from '@mui/material';
// import { styled } from '@mui/system';
// import fs from 'fs';
// import path from 'path';
// import csv from 'csv-parser';
// import { useRouter } from 'next/router';
// import Layout from '@/components/layout';
// import { useDarkMode } from '@/contexts/darkModeContext';
// import Image from 'next/image'; // Import Image component from next/image

// const PAGE_SIZES = [10, 20, 30, 40, 50]; // Options for rows per page
// const DEFAULT_PAGE_SIZE = 30; // Default number of items per page

// const CategoryPage = ({ data, columns, currentPage: initialPage, totalPages: initialTotalPages }) => {
//   const router = useRouter();
//   const { file } = router.query;
//   const { darkMode } = useDarkMode();
//   const [rowsPerPage, setRowsPerPage] = useState(DEFAULT_PAGE_SIZE);
//   const [currentPage, setCurrentPage] = useState(initialPage);
//   const [totalPages, setTotalPages] = useState(initialTotalPages);

//   useEffect(() => {
//     setTotalPages(Math.ceil(data.length / rowsPerPage));
//   }, [rowsPerPage, data]);

//   const navigateToPage = (page) => {
//     router.push(`/category?file=${file}&page=${page}&rowsPerPage=${rowsPerPage}`);
//     setCurrentPage(page);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     const newRowsPerPage = parseInt(event.target.value, 10);
//     setRowsPerPage(newRowsPerPage);
//     navigateToPage(1); // Navigate to first page immediately after changing rows per page
//   };

//   const handleFirstPage = () => {
//     navigateToPage(1);
//   };

//   const handlePrevPage = () => {
//     navigateToPage(Math.max(currentPage - 1, 1));
//   };

//   const handleNextPage = () => {
//     navigateToPage(Math.min(currentPage + 1, totalPages));
//   };

//   const handleLastPage = () => {
//     navigateToPage(totalPages);
//   };

//   const renderPageLinks = () => {
//     return (
//       <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '16px', backgroundColor: darkMode ? '#333' : 'white', padding: '16px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
//         {currentPage > 1 && (
//           <>
//             <Button variant="outlined" onClick={handleFirstPage} sx={{ fontSize: '10px', maxWidth: '40px', marginRight: '8px', color: darkMode ? 'white' : 'black' }}>««</Button>
//             <Button variant="outlined" onClick={handlePrevPage} sx={{ fontSize: '10px', maxWidth: '40px', marginRight: '8px', color: darkMode ? 'white' : 'black' }}>«</Button>
//           </>
//         )}
//         <Typography variant="body1" sx={{ marginX: '8px', color: darkMode ? 'white' : 'black' }}>Page {currentPage} of {totalPages}</Typography>
//         {currentPage < totalPages && (
//           <>
//             <Button variant="outlined" onClick={handleNextPage} sx={{ fontSize: '10px', maxWidth: '40px', marginRight: '8px', color: darkMode ? 'white' : 'black' }}>»</Button>
//             <Button variant="outlined" onClick={handleLastPage} sx={{ fontSize: '10px', maxWidth: '40px', color: darkMode ? 'white' : 'black' }}>»»</Button>
//           </>
//         )}
//       </Box>
//     );
//   };

//   return (
//     <Layout pageTitle="Data">
//       <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: darkMode ? '#121212' : '#f4f6f8' }}>
//         {/* Main Content Area */}
//         <Box sx={{ flexGrow: 1, padding: '24px', display: 'flex', justifyContent: 'center', alignItems: 'center', overflowY: 'auto' }}>
//           <TableContainer component={Paper} sx={{ width: '100%', backgroundColor: darkMode ? '#333' : 'white' }}>
//             <Table stickyHeader>
//               <TableHead sx={{ backgroundColor: darkMode ? '#333' : 'white' }}>
//                 <TableRow>
//                   {columns.map((column, index) => (
//                     <TableCell key={index} sx={{ color: darkMode ? 'white' : 'black', backgroundColor: darkMode ? '#333' : 'white', fontSize: '16px', fontWeight: 'bold' }}>{column}</TableCell>
//                   ))}
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {data.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage).map((row, rowIndex) => (
//                   <StyledTableRow key={rowIndex} darkMode={darkMode}>
//                     {columns.map((column, colIndex) => (
//                       <TableCell key={colIndex} sx={{ color: darkMode ? 'white' : 'black' }}>
//                         {colIndex === 0 ? (
//                           <Box style={{ display: 'flex', alignItems: 'center' }}>
//                             <Link href={`/category/${row.ID}?file=${file}`} passHref>
//                               <Button variant="text" sx={{ padding: 0, color: darkMode ? 'lightblue' : 'blue', marginLeft: '8px' }}>{row[column]}</Button>
//                             </Link>
//                             {/* Displaying image using next/image */}
//                             <Image
//                               src={`/${row.ID}.jpg`} // Assuming images are named 1.jpg, 2.jpg, etc., in the public folder
//                               alt="Image"
//                               width={50}
//                               height={50}
//                             />
//                           </Box>
//                         ) : (
//                           row[column]
//                         )}
//                       </TableCell>
//                     ))}
//                   </StyledTableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         </Box>

//         {/* Rows per page selector */}
//         <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '16px' }}>
//           <Typography variant="body1" sx={{ marginRight: '8px', color: darkMode ? 'white' : 'black' }}>Rows per page:</Typography>
//           <Select
//             value={rowsPerPage}
//             onChange={handleChangeRowsPerPage}
//             sx={{ minWidth: '80px', marginRight: '16px', color: darkMode ? 'white' : 'black', '&:before': { borderColor: darkMode ? 'white' : 'black' }, '&:after': { borderColor: darkMode ? 'white' : 'black' }, '&:hover:not(.Mui-disabled):before': { borderColor: darkMode ? 'white' : 'black' }, '& .MuiSelect-icon': { color: darkMode ? 'white' : 'black' }, backgroundColor: darkMode ? '#555' : 'white', }}
//           >
//             {PAGE_SIZES.map((size) => (
//               <MenuItem key={size} value={size}>{size}</MenuItem>
//             ))}
//           </Select>
//           <Typography variant="body1" sx={{ marginRight: '8px', color: darkMode ? 'white' : 'black' }}>Showing {Math.min(((currentPage - 1) * rowsPerPage) + 1, data.length)}-{Math.min(currentPage * rowsPerPage, data.length)} of {data.length}</Typography>
//         </Box>

//         {/* Pagination */}
//         {renderPageLinks()}
//       </Box>
//     </Layout>
//   );
// };

// const StyledTableRow = styled(TableRow)(({ darkMode }) => ({
//   '&:hover': {
//     backgroundColor: darkMode ? '#444' : '#f5f5f5',
//   },
// }));

// export async function getServerSideProps(context) {
//   const { query } = context;
//   const file = query.file || 'dataset.csv';
//   const rowsPerPage = parseInt(query.rowsPerPage, 10) || DEFAULT_PAGE_SIZE;
//   const currentPage = parseInt(query.page, 10) || 1;

//   const dataDirectory = path.join(process.cwd(), 'src', 'data2');
//   const filePath = path.join(dataDirectory, file);

//   const data = [];
//   const columns = new Set();

//   await new Promise((resolve, reject) => {
//     fs.createReadStream(filePath)
//       .pipe(csv())
//       .on('data', (row) => {
//         // Extract ID from the first column and store it in the row object
//         row.ID = row['ID']; // Assuming the ID column name is 'ID'
//         data.push(row);
//         Object.keys(row).forEach((column) => columns.add(column));
//       })
//       .on('end', resolve)
//       .on('error', reject);
//   });

//   const totalPages = Math.ceil(data.length / rowsPerPage);
//   return {
//     props: {
//       data,
//       columns: Array.from(columns),
//       currentPage,
//       totalPages,
//     },
//   };
// }

// export default CategoryPage;

// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Paper, Select, MenuItem, TextField } from '@mui/material';
// import { styled } from '@mui/system';
// import fs from 'fs';
// import path from 'path';
// import csv from 'csv-parser';
// import { useRouter } from 'next/router';
// import Layout from '@/components/layout';
// import { useDarkMode } from '@/contexts/darkModeContext';
// import Image from 'next/image'; // Import Image component from next/image

// const PAGE_SIZES = [10, 20, 30, 40, 50]; // Options for rows per page
// const DEFAULT_PAGE_SIZE = 30; // Default number of items per page

// const CategoryPage = ({ data, columns, currentPage: initialPage, totalPages: initialTotalPages }) => {
//   const router = useRouter();
//   const { file } = router.query;
//   const { darkMode } = useDarkMode();
//   const [rowsPerPage, setRowsPerPage] = useState(DEFAULT_PAGE_SIZE);
//   const [currentPage, setCurrentPage] = useState(initialPage);
//   const [totalPages, setTotalPages] = useState(initialTotalPages);
//   const [searchTerm, setSearchTerm] = useState(''); // State for search term

//   useEffect(() => {
//     setTotalPages(Math.ceil(data.length / rowsPerPage));
//   }, [rowsPerPage, data]);

//   const navigateToPage = (page) => {
//     router.push(`/category?file=${file}&page=${page}&rowsPerPage=${rowsPerPage}`);
//     setCurrentPage(page);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     const newRowsPerPage = parseInt(event.target.value, 10);
//     setRowsPerPage(newRowsPerPage);
//     navigateToPage(1); // Navigate to first page immediately after changing rows per page
//   };

//   const handleFirstPage = () => {
//     navigateToPage(1);
//   };

//   const handlePrevPage = () => {
//     navigateToPage(Math.max(currentPage - 1, 1));
//   };

//   const handleNextPage = () => {
//     navigateToPage(Math.min(currentPage + 1, totalPages));
//   };

//   const handleLastPage = () => {
//     navigateToPage(totalPages);
//   };

//   const renderPageLinks = () => {
//     return (
//       <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '16px', backgroundColor: darkMode ? '#333' : 'white', padding: '16px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
//         {currentPage > 1 && (
//           <>
//             <Button variant="outlined" onClick={handleFirstPage} sx={{ fontSize: '10px', maxWidth: '40px', marginRight: '8px', color: darkMode ? 'white' : 'black' }}>««</Button>
//             <Button variant="outlined" onClick={handlePrevPage} sx={{ fontSize: '10px', maxWidth: '40px', marginRight: '8px', color: darkMode ? 'white' : 'black' }}>«</Button>
//           </>
//         )}
//         <Typography variant="body1" sx={{ marginX: '8px', color: darkMode ? 'white' : 'black' }}>Page {currentPage} of {totalPages}</Typography>
//         {currentPage < totalPages && (
//           <>
//             <Button variant="outlined" onClick={handleNextPage} sx={{ fontSize: '10px', maxWidth: '40px', marginRight: '8px', color: darkMode ? 'white' : 'black' }}>»</Button>
//             <Button variant="outlined" onClick={handleLastPage} sx={{ fontSize: '10px', maxWidth: '40px', color: darkMode ? 'white' : 'black' }}>»»</Button>
//           </>
//         )}
//       </Box>
//     );
//   };

//   // Filter data based on search term
//   const filteredData = data.filter((row) =>
//     row['ID'].toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <Layout pageTitle="Data">
//       <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: darkMode ? '#121212' : '#f4f6f8' }}>
//         {/* Breadcrumb and Search Bar Container */}
//         <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px' }}>
//           <Typography variant="h6" sx={{ color: darkMode ? 'white' : 'black' }}></Typography> 
//           <TextField
//             label="Search by ID"
//             variant="outlined"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             sx={{ marginBottom: '16px', backgroundColor: darkMode ? '#333' : 'white', borderRadius: '8px' }}
//           />
//         </Box>

//         {/* Main Content Area */}
//         <Box sx={{ flexGrow: 1, padding: '24px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', overflowY: 'auto' }}>
//           <TableContainer component={Paper} sx={{ width: '100%', backgroundColor: darkMode ? '#333' : 'white' }}>
//             <Table stickyHeader>
//               <TableHead sx={{ backgroundColor: darkMode ? '#333' : 'white' }}>
//                 <TableRow>
//                   {columns.map((column, index) => (
//                     <TableCell key={index} sx={{ color: darkMode ? 'white' : 'black', backgroundColor: darkMode ? '#333' : 'white', fontSize: '16px', fontWeight: 'bold' }}>{column}</TableCell>
//                   ))}
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {filteredData.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage).map((row, rowIndex) => (
//                   <StyledTableRow key={rowIndex} darkMode={darkMode}>
//                     {columns.map((column, colIndex) => (
//                       <TableCell key={colIndex} sx={{ color: darkMode ? 'white' : 'black' }}>
//                         {colIndex === 0 ? (
//                           <Box style={{ display: 'flex', alignItems: 'center' }}>
//                             <Link href={`/category/${row.ID}?file=${file}`} passHref>
//                               <Button variant="text" sx={{ padding: 0, color: darkMode ? 'lightblue' : 'blue', marginLeft: '8px' }}>{row[column]}</Button>
//                             </Link>
//                             {/* Displaying image using next/image */}
//                             <Image
//                               src={`/${row.ID}.jpg`} // Assuming images are named 1.jpg, 2.jpg, etc., in the public folder
//                               alt="Image"
//                               width={50}
//                               height={50}
//                             />
//                           </Box>
//                         ) : (
//                           row[column]
//                         )}
//                       </TableCell>
//                     ))}
//                   </StyledTableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         </Box>

//         {/* Rows per page selector */}
//         <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '16px' }}>
//           <Typography variant="body1" sx={{ marginRight: '8px', color: darkMode ? 'white' : 'black' }}>Rows per page:</Typography>
//           <Select
//             value={rowsPerPage}
//             onChange={handleChangeRowsPerPage}
//             sx={{ minWidth: '80px', marginRight: '16px', color: darkMode ? 'white' : 'black', '&:before': { borderColor: darkMode ? 'white' : 'black' }, '&:after': { borderColor: darkMode ? 'white' : 'black' }, '&:hover:not(.Mui-disabled):before': { borderColor: darkMode ? 'white' : 'black' }, '& .MuiSelect-icon': { color: darkMode ? 'white' : 'black' }, backgroundColor: darkMode ? '#555' : 'white', }}
//           >
//             {PAGE_SIZES.map((size) => (
//               <MenuItem key={size} value={size}>{size}</MenuItem>
//             ))}
//           </Select>
//           <Typography variant="body1" sx={{ marginRight: '8px', color: darkMode ? 'white' : 'black' }}>Showing {Math.min(((currentPage - 1) * rowsPerPage) + 1, filteredData.length)}-{Math.min(currentPage * rowsPerPage, filteredData.length)} of {filteredData.length}</Typography>
//         </Box>

//         {/* Pagination */}
//         {renderPageLinks()}
//       </Box>
//     </Layout>
//   );
// };

// const StyledTableRow = styled(TableRow)(({ darkMode }) => ({
//   '&:hover': {
//     backgroundColor: darkMode ? '#444' : '#f5f5f5',
//   },
// }));

// export async function getServerSideProps(context) {
//   const { query } = context;
//   const file = query.file || 'dataset.csv';
//   const rowsPerPage = parseInt(query.rowsPerPage, 10) || DEFAULT_PAGE_SIZE;
//   const currentPage = parseInt(query.page, 10) || 1;

//   const dataDirectory = path.join(process.cwd(), 'src', 'data2');
//   const filePath = path.join(dataDirectory, file);

//   const data = [];
//   const columns = new Set();

//   await new Promise((resolve, reject) => {
//     fs.createReadStream(filePath)
//       .pipe(csv())
//       .on('data', (row) => {
//         // Extract ID from the first column and store it in the row object
//         row.ID = row['ID']; // Assuming the ID column name is 'ID'
//         data.push(row);
//         Object.keys(row).forEach((column) => columns.add(column));
//       })
//       .on('end', resolve)
//       .on('error', reject);
//   });

//   const totalPages = Math.ceil(data.length / rowsPerPage);
//   return {
//     props: {
//       data,
//       columns: Array.from(columns),
//       currentPage,
//       totalPages,
//     },
//   };
// }

// export default CategoryPage;

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Paper, Select, MenuItem, TextField,IconButton ,FormControl ,InputLabel} from '@mui/material';
import { styled } from '@mui/system';
import path from 'path';
import csv from 'csv-parser';
import { useRouter } from 'next/router';
import Layout from '@/components/layout';
import { useDarkMode } from '@/contexts/darkModeContext';
import { EditProvider, useEditContext } from '@/contexts/editContext';
import FlagIcon from '@mui/icons-material/Flag';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import AWS from 'aws-sdk';

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION
});

const s3 = new AWS.S3();

const PAGE_SIZES = [10, 20, 30, 40, 50]; // Options for rows per page
const DEFAULT_PAGE_SIZE = 30; // Default number of items per page

const CategoryPage = ({ data, columns, currentPage: initialPage, totalPages: initialTotalPages }) => {
  const router = useRouter();
  const { file } = router.query;
  const { darkMode } = useDarkMode();
  const { editedRows } = useEditContext();
  const [rowsPerPage, setRowsPerPage] = useState(DEFAULT_PAGE_SIZE);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [totalPages, setTotalPages] = useState(initialTotalPages);
  const [searchTerm, setSearchTerm] = useState(''); // State for search term
  const [flaggedRows, setFlaggedRows] = useState(() => {
    // Load flagged rows from localStorage on initial render
    if (typeof window !== 'undefined') {
      const storedFlaggedRows = localStorage.getItem('flaggedRows');
      return storedFlaggedRows ? JSON.parse(storedFlaggedRows) : [];
    }
    return [];
  });
  const [filterOption, setFilterOption] = useState(''); 
  const [localEditedRows, setLocalEditedRows] = useState(() => {
    // Load edited rows from localStorage on initial render
    if (typeof window !== 'undefined') {
      const storedEditedRows = localStorage.getItem('editedRows');
      return storedEditedRows ? JSON.parse(storedEditedRows) : [];
    }
    return [];
  });

  useEffect(() => {
    setTotalPages(Math.ceil(data.length / rowsPerPage));
  }, [rowsPerPage, data]);

  useEffect(() => {
    // Update localStorage when flaggedRows state changes
    localStorage.setItem('flaggedRows', JSON.stringify(flaggedRows));
  }, [flaggedRows]);

  useEffect(() => {
    const handleRouteChange = () => {
      const updatedEditedRows = JSON.parse(localStorage.getItem('editedRows') || '[]');
      setLocalEditedRows(updatedEditedRows);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  const toggleFlag = (messageId) => {
    setFlaggedRows((prev) => {
      if (prev.includes(messageId)) {
        return prev.filter(id => id !== messageId);
      } else {
        return [...prev, messageId];
      }
    });
    console.log("The flagged and edited rows are ",flaggedRows,editedRows);
  };

  const navigateToPage = (page) => {
    router.push(`/category?file=${file}&page=${page}&rowsPerPage=${rowsPerPage}`);
    setCurrentPage(page);
  };

  const handleChangeRowsPerPage = (event) => {
    const newRowsPerPage = parseInt(event.target.value, 10); 
    setRowsPerPage(newRowsPerPage);
    navigateToPage(1); // Navigate to first page immediately after changing rows per page
  };

  const handleFirstPage = () => {
    navigateToPage(1);
  };

  const handlePrevPage = () => {
    navigateToPage(Math.max(currentPage - 1, 1));
  };

  const handleNextPage = () => {
    navigateToPage(Math.min(currentPage + 1, totalPages));
  };

  const handleLastPage = () => {
    navigateToPage(totalPages);
  };

  const renderPageLinks = () => {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '16px', backgroundColor: darkMode ? '#333' : 'white', padding: '16px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
        {currentPage > 1 && (
          <>
            <Button variant="outlined" onClick={handleFirstPage} sx={{ fontSize: '10px', maxWidth: '40px', marginRight: '8px', color: darkMode ? 'white' : 'black' }}>««</Button>
            <Button variant="outlined" onClick={handlePrevPage} sx={{ fontSize: '10px', maxWidth: '40px', marginRight: '8px', color: darkMode ? 'white' : 'black' }}>«</Button>
          </>
        )}
        <Typography variant="body1" sx={{ marginX: '8px', color: darkMode ? 'white' : 'black' }}>Page {currentPage} of {totalPages}</Typography>
        {currentPage < totalPages && (
          <>
            <Button variant="outlined" onClick={handleNextPage} sx={{ fontSize: '10px', maxWidth: '40px', marginRight: '8px', color: darkMode ? 'white' : 'black' }}>»</Button>
            <Button variant="outlined" onClick={handleLastPage} sx={{ fontSize: '10px', maxWidth: '40px', color: darkMode ? 'white' : 'black' }}>»»</Button>
          </>
        )}
      </Box>
    );
  };

  const filteredData = data.filter((row) =>
  row['message_id_new'].toLowerCase().includes(searchTerm.toLowerCase()) &&
  (filterOption === '' || (filterOption === 'edited' && localEditedRows.includes(row.message_id_new)) ||
    (filterOption === 'flagged' && flaggedRows.includes(row.message_id_new)))
);
  const downloadCSV = async () => {
    const res = await fetch(`/api/download?file=${file}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ filterOption, flaggedRows, localEditedRows, searchTerm }),
    });
    const blob = await res.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = file;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <Layout pageTitle="Data">
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: darkMode ? '#121212' : '#f4f6f8' }}>
        {/* Breadcrumb and Search Bar Container */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px' }}>
          {/* <Typography variant="h6" sx={{ color: darkMode ? 'white' : 'black' }}></Typography>  */}
          <TextField
            label="Search by message ID"
            variant="outlined"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{ marginBottom: '16px', backgroundColor: darkMode ? '#333' : 'white', borderRadius: '8px', width: '200px',   '& .MuiInputLabel-root': {
              color: darkMode ? 'white' : 'black',fontSize:'14px'
            },     '& .MuiInputBase-input': {
              color: darkMode ? 'white' : 'black',
              fontSize: '12px', // Adjust font size as needed
            },}}
          />
                    <FormControl variant="outlined" sx={{ marginBottom: '16px', minWidth: '120px'}}>
            <InputLabel id="filter-label" sx={{ color: darkMode ? '#fff' : '#000'}}>Filter</InputLabel>
            <Select
              labelId="filter-label"
              value={filterOption}
              onChange={(e) => setFilterOption(e.target.value)}
              label="Filter"
              sx={{
                '& .MuiOutlinedInput-input': { color: darkMode ? 'white' : 'black' },
                '& .MuiSelect-icon': { color: darkMode ? 'white' : 'black' },
                '& .MuiOutlinedInput-notchedOutline': { borderColor: darkMode ? '#fff' : '#000' }
              }}
            >
              <MenuItem value="">None</MenuItem>
              <MenuItem value="edited">Edited</MenuItem>
              <MenuItem value="flagged">Flagged</MenuItem>
            </Select>
          </FormControl>
          <Button variant="contained" onClick={downloadCSV} sx={{ marginBottom: '16px', backgroundColor: '#007bff', color: 'white' }}>Download CSV</Button>
        </Box>

        {/* Main Content Area */}
        <Box sx={{ flexGrow: 1, padding: '24px', display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', flexDirection: 'column', overflowY: 'auto' }}>
          <TableContainer component={Paper} sx={{ width: '100%', backgroundColor: darkMode ? '#333' : 'white' }}>
            <Table stickyHeader>
              <TableHead sx={{ backgroundColor: darkMode ? '#333' : 'white' }}>
                <TableRow>
                  {columns.map((column, index) => (
                    <TableCell key={index} sx={{ color: darkMode ? 'white' : 'black', backgroundColor: darkMode ? '#333' : 'white', fontSize: '16px', fontWeight: 'bold' }}>{column}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredData.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage).map((row, rowIndex) => (
                  <StyledTableRow
                  key={rowIndex}
                  darkMode={darkMode}
                  edited={localEditedRows.includes(row.message_id_new)}
                  flagged={flaggedRows.includes(row.message_id_new)}
                >
                  <TableCell sx={{ color: darkMode ? 'white' : 'black', display: 'flex', alignItems: 'center' }}>
                    {flaggedRows.includes(row.message_id_new) && (
                      <Box sx={{ width: '4px', height: '100%', backgroundColor: '#9d46b3', marginRight: '8px' }} />
                    )}
                    <Link href={`/category/${row.message_id_new}?file=${file}`} passHref>
                      <Button variant="text" sx={{ padding: 0, color: darkMode ? 'lightblue' : 'blue' }}>{row['message_id_new']}</Button>
                    </Link>
                  </TableCell>
                  <TableCell sx={{ color: darkMode ? 'white' : 'black' }}>{row['user_id']}</TableCell>
                  <TableCell sx={{ color: darkMode ? 'white' : 'black' }}>{row['task0']}</TableCell>
                  <TableCell sx={{ color: darkMode ? 'white' : 'black' }}>{row['task1']}</TableCell>
                  <TableCell sx={{ color: darkMode ? 'white' : 'black' }}>{row['task2']}</TableCell>
                  <TableCell sx={{ color: darkMode ? 'white' : 'black' }}>{row['comment'] ? row['comment'] : '-'}</TableCell>
                  <IconButton onClick={() => toggleFlag(row.message_id_new)} sx={{ marginLeft: 'auto', color: flaggedRows.includes(row.message_id_new) ? '#9d46b3' : darkMode ? 'white' : 'black' }}>
                      {flaggedRows.includes(row.message_id_new) ? <FlagIcon /> : <FlagOutlinedIcon />}
                    </IconButton>
                </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        {/* Rows per page selector */}
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '16px' }}>
          <Typography variant="body1" sx={{ marginRight: '8px', color: darkMode ? 'white' : 'black' }}>Rows per page:</Typography>
          <Select
            value={rowsPerPage}
            onChange={handleChangeRowsPerPage}
            sx={{ minWidth: '80px', marginRight: '16px', color: darkMode ? 'white' : 'black', '&:before': { borderColor: darkMode ? 'white' : 'black' }, '&:after': { borderColor: darkMode ? 'white' : 'black' }, '&:hover:not(.Mui-disabled):before': { borderColor: darkMode ? 'white' : 'black' }, '& .MuiSelect-icon': { color: darkMode ? 'white' : 'black' }, backgroundColor: darkMode ? '#555' : 'white', }}
          >
            {PAGE_SIZES.map((size) => (
              <MenuItem key={size} value={size}>{size}</MenuItem>
            ))}
          </Select>
          <Typography variant="body1" sx={{ marginRight: '8px', color: darkMode ? 'white' : 'black' }}>Showing {Math.min(((currentPage - 1) * rowsPerPage) + 1, filteredData.length)}-{Math.min(currentPage * rowsPerPage, filteredData.length)} of {filteredData.length}</Typography>
        </Box>

        {/* Pagination */}
        {renderPageLinks()}
      </Box>
    </Layout>
  );
};

const StyledTableRow = styled(TableRow)(({ darkMode, edited, flagged }) => ({
  '&:hover': {
    backgroundColor: darkMode ? '#444' : '#f5f5f5',
  },
  ...(edited && flagged && {
    position: 'relative',
    '& td:first-of-type::before': {
      content: '""',
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      width: '6px',
      backgroundColor: '#9d46b3', // Red background on the left
    },
    '& td:last-of-type::after': {
      content: '""',
      position: 'absolute',
      right: 0,
      top: 0,
      bottom: 0,
      width: '6px',
      backgroundColor: 'green', // Green background on the right
    },
  }),
  ...(edited && !flagged && {
    position: 'relative',
    '& td:first-of-type::before': {
      content: '""',
      position: 'absolute',
      right: 0,
      top: 0,
      bottom: 0,
      width: '6px',
      backgroundColor: 'green', // Green background on the right only
    },
  }),
  ...(flagged && !edited && {
    position: 'relative',
    '& td:first-of-type::before': {
      content: '""',
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      width: '6px',
      backgroundColor: '#9d46b3', // Red background on the left only 7715c2
    },
  }),
  
}));

// export async function getServerSideProps(context) {
//   const { query } = context;
//   const file = query.file || 'dataset.csv';
//   const rowsPerPage = parseInt(query.rowsPerPage, 10) || DEFAULT_PAGE_SIZE;
//   const currentPage = parseInt(query.page, 10) || 1;

//   const dataDirectory = path.join(process.cwd(), 'src', 'data2');
//   const filePath = path.join(dataDirectory, file);

//   const data = [];
//   const columns = ['message_id_new', 'user_id', 'task0', 'task1', 'task2','comment']; // Specify columns to use

//   await new Promise((resolve, reject) => {
//     fs.createReadStream(filePath)
//       .pipe(csv())
//       .on('data', (row) => {
//         // Extract necessary fields and store them
//         const { message_id_new, user_id, task0, task1, task2 } = row;
//         const comment = row.comment || '';
//         data.push({ message_id_new, user_id, task0, task1, task2, comment});
//       })
//       .on('end', resolve)
//       .on('error', reject);
//   });

//   const totalPages = Math.ceil(data.length / rowsPerPage);
//   return {
//     props: {
//       data,
//       columns,
//       currentPage,
//       totalPages,
//     },
//   };
// }
// export async function getServerSideProps(context) {
//   const { query } = context;
//   const file = query.file;
//   const rowsPerPage = parseInt(query.rowsPerPage, 10) || DEFAULT_PAGE_SIZE;
//   const currentPage = parseInt(query.page, 10) || 1;

//   const bucketName = process.env.S3_BUCKET_NAME;
//   const key = `datasets/${file}`;

//   const data = [];
//   const columns = ['message_id_new', 'user_id', 'task0', 'task1', 'task2', 'comment'];

//   try {
//     const s3Object = await s3.getObject({ Bucket: bucketName, Key: key }).promise();
//     const csvContent = s3Object.Body.toString('utf-8');
    
//     await new Promise((resolve, reject) => {
//       csv()
//         .on('data', (row) => {
//           const { message_id_new, user_id, task0, task1, task2 } = row;
//           const comment = row.comment || '';
//           data.push({ message_id_new, user_id, task0, task1, task2, comment });
//         })
//         .on('end', resolve)
//         .on('error', reject)
//         .write(csvContent);
//     });

//     const totalPages = Math.ceil(data.length / rowsPerPage);

//     return {
//       props: {
//         data,
//         columns,
//         currentPage,
//         totalPages,
//       },
//     };
//   } catch (error) {
//     console.error('Error fetching data from S3:', error);
//     return {
//       props: {
//         data: [],
//         columns,
//         currentPage: 1,
//         totalPages: 0,
//         error: 'Failed to fetch data from S3'
//       },
//     };
//   }
// }

// export default CategoryPage;
export async function getServerSideProps(context) {
  console.log('Starting getServerSideProps');
  const { query } = context;
  const file = query.file;
  console.log(`File requested: ${file}`);

  const rowsPerPage = parseInt(query.rowsPerPage, 10) || DEFAULT_PAGE_SIZE;
  const currentPage = parseInt(query.page, 10) || 1;

  const bucketName = process.env.S3_BUCKET_NAME;
  const key = `datasets/${file}`;
  console.log(`Bucket: ${bucketName}, Key: ${key}`);

  const data = [];
  const columns = ['message_id_new', 'user_id', 'task0', 'task1', 'task2', 'comment'];

  try {
    console.log('Attempting to fetch from S3');
    const s3Object = await s3.getObject({ Bucket: bucketName, Key: key }).promise();
    console.log('S3 object fetched successfully');
    const csvContent = s3Object.Body.toString('utf-8');
    console.log('CSV content converted to string');
    
    console.log('Starting CSV parsing');
    await new Promise((resolve, reject) => {
      csv()
        .on('data', (row) => {
          const { message_id_new, user_id, task0, task1, task2 } = row;
          const comment = row.comment || '';
          data.push({ message_id_new, user_id, task0, task1, task2, comment });
        })
        .on('end', () => {
          console.log(`CSV parsing complete. Total rows: ${data.length}`);
          resolve();
        })
        .on('error', (error) => {
          console.error('Error parsing CSV:', error);
          reject(error);
        })
        .write(csvContent);
    });

    const totalPages = Math.ceil(data.length / rowsPerPage);
    console.log(`Total pages: ${totalPages}`);

    return {
      props: {
        data,
        columns,
        currentPage,
        totalPages,
      },
    };
  } catch (error) {
    console.error('Error in getServerSideProps:', error);
    return {
      props: {
        data: [],
        columns,
        currentPage: 1,
        totalPages: 0,
        error: 'Failed to fetch data from S3'
      },
    };
  }
}

export default CategoryPage;