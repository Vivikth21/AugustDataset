

// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';
// import Link from 'next/link';
// import { Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Fade, useTheme } from '@mui/material';
// import AddIcon from '@mui/icons-material/Add';
// import Layout from '@/components/layout';
// import CreateDatasetModal from '@/components/datasetModal';
// import { useDarkMode } from '@/contexts/darkModeContext';

// const Datasets = () => {
//   const [datasets, setDatasets] = useState([]);
//   const [modalOpen, setModalOpen] = useState(false);
//   const { darkMode } = useDarkMode();
//   const router = useRouter();
//   const theme = useTheme();

//   useEffect(() => {
//     fetchDatasets();
//   }, []);

//   const fetchDatasets = async () => {
//     try {
//       const response = await fetch('/api/datasets');
//       const data = await response.json();
//       setDatasets(data.datasets);
//     } catch (error) {
//       console.error('Failed to fetch datasets', error);
//     }
//   };

//   const handleCreateDataset = async (name, file) => {
//     const formData = new FormData();
//     formData.append('name', name);
//     formData.append('file', file);
  
//     try {
//       const response = await fetch('/api/createDataset', {
//         method: 'POST',
//         body: formData,
//       });
  
//       if (response.ok) {
//         const data = await response.json();
//         const fileLocation = data.fileLocation;
  
//         const classifyResponse = await fetch('/api/classifyDataset', {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify({ fileLocation }),
//         });
  
//         if (classifyResponse.ok) {
//           // Create a new dataset object
//           const newDataset = {
//             id: Date.now(), // Use a temporary ID
//             name: name,
//             createdAt: new Date().toISOString()
//           };
          
//           // Update the datasets state locally
//           setDatasets(prevDatasets => [...prevDatasets, newDataset]);
          
//           setModalOpen(false); // Close modal after dataset creation
//         } else {
//           console.error('Failed to classify dataset');
//         }
//       } else {
//         console.error('Failed to create dataset');
//       }
//     } catch (error) {
//       console.error('Failed to create dataset', error);
//     }
//   };

//   const handleRowClick = (datasetName) => {
//     router.push(`/category?file=${datasetName}`);
//   };
  
//   return (
//     <Layout pageTitle="Datasets">
//       <Box
//         sx={{
//           width: '100%',
//           minHeight: '100vh',
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           bgcolor: darkMode ? '#1a1a1a' : '#f5f5f5',
//           color: darkMode ? '#fff' : '#000',
//           transition: 'background-color 0.3s, color 0.3s',
//           p: '40px 20px',
//         }}
//       >
//         <Box sx={{ width: '100%', maxWidth: '1350px', mt: '20px' }}>
//           <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: '30px' }}>
//             <Typography variant="h4" component="div" sx={{ fontWeight: 'bold' }}>
//               Datasets
//             </Typography>
//             <Button 
//               variant="contained" 
//               color="primary" 
//               onClick={() => setModalOpen(true)}
//               startIcon={<AddIcon />}
//               sx={{
//                 borderRadius: '20px',
//                 textTransform: 'none',
//                 px: 3,
//                 py: 1,
//                 boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
//                 transition: 'all 0.2s',
//                 '&:hover': {
//                   transform: 'translateY(-2px)',
//                   boxShadow: '0 6px 8px rgba(0, 0, 0, 0.15)',
//                 },
//               }}
//             >
//               New Dataset
//             </Button>
//           </Box>
//           <CreateDatasetModal
//             open={modalOpen}
//             onClose={() => setModalOpen(false)}
//             onSubmit={handleCreateDataset}
//           />
//           <Fade in={true} timeout={500}>
//             <TableContainer 
//               component={Paper} 
//               sx={{ 
//                 width: '100%', 
//                 backgroundColor: 'transparent',
//                 borderRadius: '12px',
//                 overflow: 'hidden',
//                 boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
//               }}
//             >
//               <Table>
//                 <TableHead>
//                   <TableRow sx={{ backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)' }}>
//                     <TableCell sx={{ color: darkMode ? '#fff' : '#000', fontSize: '16px', fontWeight: 'bold', py: 3 }}>Serial No.</TableCell>
//                     <TableCell sx={{ color: darkMode ? '#fff' : '#000', fontSize: '16px', fontWeight: 'bold', py: 3 }}>Dataset Name</TableCell>
//                     <TableCell sx={{ color: darkMode ? '#fff' : '#000', fontSize: '16px', fontWeight: 'bold', py: 3 }}>Created At</TableCell>
//                   </TableRow>
//                 </TableHead>
//                 <TableBody>
//                   {datasets.length === 0 ? (
//                     <TableRow>
//                       <TableCell colSpan={3} align="center" sx={{ py: 4 }}>No datasets found</TableCell>
//                     </TableRow>
//                   ) : (
//                     datasets.map((dataset, index) => (
//                       <TableRow
//                         key={dataset.id}
//                         onClick={() => handleRowClick(dataset.name)}
//                         sx={{
//                           cursor: 'pointer',
//                           transition: 'all 0.2s',
//                           '&:hover': {
//                             backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)',
//                             transform: 'translateY(-2px)',
//                             boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//                           },
//                         }}
//                       >
//                         <TableCell sx={{ color: darkMode ? '#ddd' : '#333', fontSize: '14px', py: 3 }}>{index + 1}</TableCell>
//                         <TableCell component="th" scope="row" sx={{ py: 3 }}>
//                           <Link 
//                             // href={`/category?file=${encodeURIComponent(dataset.name)}.csv`}
//                             href={`/category?file=${encodeURIComponent(dataset.name)}.csv&from=datasets`}
//                             passHref
//                             style={{ textDecoration: 'none' }}
//                           >
//                             <Typography 
//                               variant="body1" 
//                               component="span" 
//                               sx={{ 
//                                 color: darkMode ? theme.palette.primary.light : theme.palette.primary.main,
//                                 transition: 'color 0.2s',
//                                 '&:hover': { 
//                                   color: darkMode ? theme.palette.primary.main : theme.palette.primary.dark,
//                                 } 
//                               }}
//                             >
//                               {dataset.name}
//                             </Typography>
//                           </Link>
//                         </TableCell>
//                         <TableCell sx={{ color: darkMode ? '#ddd' : '#333', fontSize: '14px', py: 3 }}>
//                           {new Date(dataset.createdAt).toLocaleString()}
//                         </TableCell>
//                       </TableRow>
//                     ))
//                   )}
//                 </TableBody>
//               </Table>
//             </TableContainer>
//           </Fade>
//         </Box>
//       </Box>
//     </Layout>
//   );
// };

// export default Datasets;

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Fade, useTheme, CircularProgress, Snackbar } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Layout from '@/components/layout';
import CreateDatasetModal from '@/components/datasetModal';
import { useDarkMode } from '@/contexts/darkModeContext';

const Datasets = () => {
  const [datasets, setDatasets] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const { darkMode } = useDarkMode();
  const router = useRouter();
  const theme = useTheme();

  useEffect(() => {
    fetchDatasets();
  }, []);

  const fetchDatasets = async () => {
    try {
      const response = await fetch('/api/datasets');
      const data = await response.json();
      setDatasets(data.datasets);
    } catch (error) {
      console.error('Failed to fetch datasets', error);
      setSnackbarMessage('Failed to fetch datasets. Please try again.');
      setSnackbarOpen(true);
    }
  };

  const handleCreateDataset = async (name, file) => {
    setIsLoading(true);
    setSnackbarMessage('Dataset uploaded. Classification in progress...');
    setSnackbarOpen(true);

    const formData = new FormData();
    formData.append('name', name);
    formData.append('file', file);
  
    try {
      const response = await fetch('/api/createDataset', {
        method: 'POST',
        body: formData,
      });
  
      if (response.ok) {
        const data = await response.json();
        const fileLocation = data.fileLocation;
  
        const classifyResponse = await fetch('/api/classifyDataset', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ fileLocation }),
        });
  
        if (classifyResponse.ok) {
          setSnackbarMessage('Dataset successfully classified!');
          setSnackbarOpen(true);
          await fetchDatasets(); // Fetch updated dataset list
        } else {
          setSnackbarMessage('Failed to classify dataset. Please try again.');
          setSnackbarOpen(true);
        }
      } else {
        setSnackbarMessage('Failed to create dataset. Please try again.');
        setSnackbarOpen(true);
      }
    } catch (error) {
      console.error('Failed to create dataset', error);
      setSnackbarMessage('An error occurred. Please try again.');
      setSnackbarOpen(true);
    } finally {
      setIsLoading(false);
      setModalOpen(false);
    }
  };

  const handleRowClick = (datasetName) => {
    router.push(`/category?file=${datasetName}`);
  };
  
  return (
    <Layout pageTitle="Datasets">
      <Box
        sx={{
          width: '100%',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          bgcolor: darkMode ? '#1a1a1a' : '#f5f5f5',
          color: darkMode ? '#fff' : '#000',
          transition: 'background-color 0.3s, color 0.3s',
          p: '40px 20px',
        }}
      >
        <Box sx={{ width: '100%', maxWidth: '1350px', mt: '20px' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: '30px' }}>
            <Typography variant="h4" component="div" sx={{ fontWeight: 'bold' }}>
              Datasets
            </Typography>
            <Button 
              variant="contained" 
              color="primary" 
              onClick={() => setModalOpen(true)}
              startIcon={<AddIcon />}
              disabled={isLoading}
              sx={{
                borderRadius: '20px',
                textTransform: 'none',
                px: 3,
                py: 1,
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.2s',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 8px rgba(0, 0, 0, 0.15)',
                },
              }}
            >
              {isLoading ? <CircularProgress size={24} color="inherit" /> : 'New Dataset'}
            </Button>
          </Box>
          <CreateDatasetModal
            open={modalOpen}
            onClose={() => setModalOpen(false)}
            onSubmit={handleCreateDataset}
          />
          <Fade in={true} timeout={500}>
            <TableContainer 
              component={Paper} 
              sx={{ 
                width: '100%', 
                backgroundColor: 'transparent',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              }}
            >
              <Table>
                <TableHead>
                  <TableRow sx={{ backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)' }}>
                    <TableCell sx={{ color: darkMode ? '#fff' : '#000', fontSize: '16px', fontWeight: 'bold', py: 3 }}>Serial No.</TableCell>
                    <TableCell sx={{ color: darkMode ? '#fff' : '#000', fontSize: '16px', fontWeight: 'bold', py: 3 }}>Dataset Name</TableCell>
                    <TableCell sx={{ color: darkMode ? '#fff' : '#000', fontSize: '16px', fontWeight: 'bold', py: 3 }}>Created At</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {datasets.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={3} align="center" sx={{ py: 4 }}>No datasets found</TableCell>
                    </TableRow>
                  ) : (
                    datasets.map((dataset, index) => (
                      <TableRow
                        key={dataset.id}
                        onClick={() => handleRowClick(dataset.name)}
                        sx={{
                          cursor: 'pointer',
                          transition: 'all 0.2s',
                          '&:hover': {
                            backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)',
                            transform: 'translateY(-2px)',
                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                          },
                        }}
                      >
                        <TableCell sx={{ color: darkMode ? '#ddd' : '#333', fontSize: '14px', py: 3 }}>{index + 1}</TableCell>
                        <TableCell component="th" scope="row" sx={{ py: 3 }}>
                          <Link 
                            href={`/category?file=${encodeURIComponent(dataset.name)}.csv&from=datasets`}
                            passHref
                            style={{ textDecoration: 'none' }}
                          >
                            <Typography 
                              variant="body1" 
                              component="span" 
                              sx={{ 
                                color: darkMode ? theme.palette.primary.light : theme.palette.primary.main,
                                transition: 'color 0.2s',
                                '&:hover': { 
                                  color: darkMode ? theme.palette.primary.main : theme.palette.primary.dark,
                                } 
                              }}
                            >
                              {dataset.name}
                            </Typography>
                          </Link>
                        </TableCell>
                        <TableCell sx={{ color: darkMode ? '#ddd' : '#333', fontSize: '14px', py: 3 }}>
                          {new Date(dataset.createdAt).toLocaleString()}
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </Fade>
        </Box>
      </Box>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackbarOpen(false)}
        message={snackbarMessage}
      />
    </Layout>
  );
};

export default Datasets;