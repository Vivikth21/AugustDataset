// // pages/datasets.js
// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';
// import Link from 'next/link';
// import { Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
// import Layout from '@/components/layout';
// import CreateDatasetModal from '@/components/datasetModal';
// import { useDarkMode } from '@/contexts/darkModeContext';

// const Datasets = () => {
//   const [datasets, setDatasets] = useState([]);
//   const [modalOpen, setModalOpen] = useState(false);
//   const { darkMode } = useDarkMode();
//   const router = useRouter();

//   useEffect(() => {
//     // Fetch the list of datasets on component mount
//     fetchDatasets();
//   }, []);

//   const fetchDatasets = async () => {
//     // Mock data for now
//     const mockDatasets = [
//       { id: 1, name: 'Dataset 1', createdAt: '2024-07-01T10:00:00Z' },
//       { id: 2, name: 'Dataset 2', createdAt: '2024-07-01T11:00:00Z' },
//     ];
//     setDatasets(mockDatasets);
//   };

//   const handleCreateDataset = async (name, file) => {
//     // Handle dataset creation logic here
//     // For now, mock dataset creation
//     const newDataset = {
//       id: datasets.length + 1,
//       name: name,
//       createdAt: new Date().toISOString(),
//     };
//     setDatasets([...datasets, newDataset]);
//   };

//   const handleRowClick = (datasetName) => {
//     router.push(`/category?file=${datasetName}.csv`);
//   };

//   return (
//     <Layout pageTitle="Datasets">
//       <Box sx={{ maxWidth: '2400px', margin: '0 auto', mt: '20px' }}>
//         <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: '10px' }}>
//           <Typography variant="h5" component="div">
//             Datasets
//           </Typography>
//           <Button variant="contained" color="primary" onClick={() => setModalOpen(true)}>+ New Dataset</Button>
//         </Box>
//         <CreateDatasetModal
//           open={modalOpen}
//           onClose={() => setModalOpen(false)}
//           onSubmit={handleCreateDataset}
//         />
//         <TableContainer component={Paper}>
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell>Serial No.</TableCell>
//                 <TableCell>Dataset Name</TableCell>
//                 <TableCell>Created At</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {datasets.length === 0 ? (
//                 <TableRow>
//                   <TableCell colSpan={3} align="center">No datasets found</TableCell>
//                 </TableRow>
//               ) : (
//                 datasets.map((dataset, index) => (
//                   <TableRow key={dataset.id} onClick={() => handleRowClick(dataset.name)}>
//                     <TableCell>{index + 1}</TableCell>
//                     <TableCell component="th" scope="row">
//                       <Link href={`/category?file=${dataset.name}.csv`} passHref>
//                         {dataset.name}
//                       </Link>
//                     </TableCell>
//                     <TableCell>{new Date(dataset.createdAt).toLocaleString()}</TableCell>
//                   </TableRow>
//                 ))
//               )}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </Box>
//     </Layout>
//   );
// };

// export default Datasets;

// pages/datasets.js
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import Layout from '@/components/layout';
import CreateDatasetModal from '@/components/datasetModal';
import { useDarkMode } from '@/contexts/darkModeContext';

const Datasets = () => {
  const [datasets, setDatasets] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const { darkMode } = useDarkMode();
  const router = useRouter();

  useEffect(() => {
    // Fetch the list of datasets on component mount
    fetchDatasets();
  }, []);

  // const fetchDatasets = async () => {
  //   // Mock data for now
  //   const mockDatasets = [
  //     { id: 1, name: 'Dataset 1', createdAt: '2024-07-01T10:00:00Z' },
  //     { id: 2, name: 'Dataset 2', createdAt: '2024-07-01T11:00:00Z' },
  //   ];
  //   setDatasets(mockDatasets);
  // };
  const fetchDatasets = async () => {
    try {
      const response = await fetch('/api/datasets');
      const data = await response.json();
      setDatasets(data.datasets);
    } catch (error) {
      console.error('Failed to fetch datasets', error);
    }
  };
  

  // const handleCreateDataset = async (name, file) => {
  //   // Handle dataset creation logic here
  //   // For now, mock dataset creation
  //   const newDataset = {
  //     id: datasets.length + 1,
  //     name: name,
  //     createdAt: new Date().toISOString(),
  //   };
  //   setDatasets([...datasets, newDataset]);
  //   setModalOpen(false); // Close modal after dataset creation
  // };
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
        fetchDatasets(); // Refresh the datasets list
        setModalOpen(false); // Close modal after dataset creation
      } else {
        console.error('Failed to create dataset');
      }
    } catch (error) {
      console.error('Failed to create dataset', error);
    }
  };
  
  // const handleRowClick = (datasetName) => {
  //   router.push(`/category?file=${datasetName}.csv`);
  // };
  const handleRowClick = (datasetName) => {
    router.push(`/category?file=${datasetName}`);
  };
  
  return (
    <Layout pageTitle="Datasets">
      <Box
        sx={{
          width: '98.5%', // Take full width of the screen
          minHeight: '100vh', // Take full height of the viewport
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          bgcolor: darkMode ? '#333' : '#fff',
          color: darkMode ? '#fff' : '#000',
          p: '20px',
        }}
      >
        <Box sx={{ width: '1350px', mt: '20px' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: '10px' }}>
            <Typography variant="h5" component="div">
              Datasets
            </Typography>
            <Button variant="contained" color="primary" onClick={() => setModalOpen(true)}>+ New Dataset</Button>
          </Box>
          <CreateDatasetModal
            open={modalOpen}
            onClose={() => setModalOpen(false)}
            onSubmit={handleCreateDataset}
          />
          <TableContainer component={Paper} sx={{ width: '100%', backgroundColor: darkMode ? '#333' : 'white' }}>
            <Table>
              <TableHead sx={{ backgroundColor: darkMode ? '#444' : 'white' }}>
                <TableRow >
                  <TableCell sx={{ color: darkMode ? 'white' : 'black', backgroundColor: darkMode ? '#444' : 'white', fontSize: '16px', fontWeight: 'bold' }}>Serial No.</TableCell>
                  <TableCell sx={{ color: darkMode ? 'white' : 'black', backgroundColor: darkMode ? '#444' : 'white', fontSize: '16px', fontWeight: 'bold' }}>Dataset Name</TableCell>
                  <TableCell sx={{ color: darkMode ? 'white' : 'black', backgroundColor: darkMode ? '#444' : 'white', fontSize: '16px', fontWeight: 'bold' }}>Created At</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {datasets.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={3} align="center">No datasets found</TableCell>
                  </TableRow>
                ) : (
                  datasets.map((dataset, index) => (
                    <TableRow
                      key={dataset.id}
                      onClick={() => handleRowClick(dataset.name)}
                      style={{
                        cursor: 'pointer',
                        '&:hover': {
                          bgcolor: darkMode ? '#555' : '#e0e0e0',
                        },
                      } }
                    >
                      <TableCell sx={{ color: darkMode ? 'white' : 'black', backgroundColor: darkMode ? '#444' : 'white', fontSize: '14px' }}>{index + 1}</TableCell>
                      <TableCell component="th" scope="row" sx={{ color: darkMode ? 'white' : 'black', backgroundColor: darkMode ? '#444' : 'white', fontSize: '14px' }}>
                        {/* <Link href={`/category?file=${dataset.name}.csv`} passHref> */}
                        {/* <a style={{ color: 'red' }}>{dataset.name}</a> */}
                          {/* {dataset.name} */}
                        {/* </Link> */}
                        <Typography variant="body1" component="span" sx={{ color: 'white', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                        <Link href={`/category?file=${encodeURIComponent(dataset.name)}.csv`} passHref>
                          {dataset.name}
                        </Link>
                        </Typography>
                      </TableCell>
                      <TableCell sx={{ color: darkMode ? 'white' : 'black', backgroundColor: darkMode ? '#444' : 'white', fontSize: '14px'}}>{new Date(dataset.createdAt).toLocaleString()}</TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Layout>
  );
};

export default Datasets;
