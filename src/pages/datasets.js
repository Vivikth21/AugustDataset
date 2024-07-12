

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

//   // const handleCreateDataset = async (name, file) => {
//   //   // ... (keep the existing handleCreateDataset function)
//   // };
//     const handleCreateDataset = async (name, file) => {
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
//         const filePath = data.filePath;
  
//         const classifyResponse = await fetch('/api/classifyDataset', {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify({ filePath }),
//         });
  
//         if (classifyResponse.ok) {
//           fetchDatasets(); // Refresh the datasets list
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
import { Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Fade, useTheme } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Layout from '@/components/layout';
import CreateDatasetModal from '@/components/datasetModal';
import { useDarkMode } from '@/contexts/darkModeContext';
import AWS from 'aws-sdk';

const Datasets = () => {
  const [datasets, setDatasets] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
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
    }
  };

  const handleCreateDataset = async (name, file) => {
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
        const filePath = data.filePath;

        // Handle AWS S3 upload
        const s3 = new AWS.S3({
          accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
          secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        });

        const uploadParams = {
          Bucket: 'your-bucket-name',
          Key: `datasets/${file.name}`, // Adjust the Key as per your bucket structure
          Body: file,
        };

        s3.upload(uploadParams, (err, data) => {
          if (err) {
            console.error('Failed to upload file to S3', err);
          } else {
            console.log('File uploaded successfully to S3', data);
          }
        });

        fetchDatasets(); // Refresh the datasets list
        setModalOpen(false); // Close modal after dataset creation
      } else {
        console.error('Failed to create dataset');
      }
    } catch (error) {
      console.error('Failed to create dataset', error);
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
              New Dataset
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
                            // href={`/category?file=${encodeURIComponent(dataset.name)}.csv`}
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
    </Layout>
  );
};

export default Datasets;
