
// import { useState } from 'react';
// import { Button, Grid, Card, CardContent, Typography, Box, Dialog, TextField } from '@mui/material';
// import { UploadFile } from '@mui/icons-material';

// export default function Home() {
//   const [files, setFiles] = useState([]);
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [dialogOpen, setDialogOpen] = useState(false);

//   const handleFileUpload = (event) => {
//     const newFiles = Array.from(event.target.files).map((file) => ({
//       name: file.name,
//       type: file.type,
//       url: URL.createObjectURL(file),
//       customName: '',
//     }));
//     setFiles((prevFiles) => [...prevFiles, ...newFiles]);
//   };

//   const handleCardClick = (file) => {
//     setSelectedFile(file);
//     setDialogOpen(true);
//   };

//   const handleCloseDialog = () => {
//     setDialogOpen(false);
//     setSelectedFile(null);
//   };

//   const handleCustomNameChange = (index, event) => {
//     const newFiles = [...files];
//     newFiles[index].customName = event.target.value;
//     setFiles(newFiles);
//   };

//   return (
//     <Box sx={{ display: 'flex', flexDirection: 'column', minheight: '100vh', backgroundColor: '#ffffff' }}>
//       <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px', backgroundColor: '#f5f4ed' }}>
//         <Typography variant="h6" sx={{ color: 'green' }}>
//           August AI
//         </Typography>
//         <Button
//           variant="contained"
//           component="label"
//           startIcon={<UploadFile />}
//         >
//           Upload
//           <input
//             type="file"
//             hidden
//             accept=".pdf, .jpg"
//             multiple
//             onChange={handleFileUpload}
//           />
//         </Button>
//       </Box>

//       <Box sx={{ display: 'flex', flexGrow: 1 }}>
//         <Box sx={{ width: '200px', borderRight: '1px solid #ddd', padding: '16px' ,flexShrink:'0'}}>
//           <Typography variant="h6" sx={{ color: 'black' }}>
//             Dashboard
//           </Typography>
//         </Box>

//         <Box sx={{ flexGrow: 1, padding: '16px', backgroundColor: '#ffffff' }}>
//           <Grid container spacing={2}>
//             {files.map((file, index) => (
//               <Grid item xs={12} sm={6} md={3} key={index}>
//                 <Card
//                   sx={{
//                     height: 'auto',
//                     display: 'flex',
//                     flexDirection: 'column',
//                     justifyContent: 'space-between',
//                     borderRadius: '16px',
//                     width: '100%',
//                     cursor: 'pointer',
//                     '&:hover': {
//                       boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
//                     },
//                   }}
//                   onClick={() => handleCardClick(file)}
//                 >
//                   <CardContent>
//                     {file.type === 'application/pdf' ? (
//                       <embed src={file.url} type="application/pdf" width="100%" height="200px" />
//                     ) : (
//                       <img src={file.url} alt={`Uploaded file ${index + 1}`} style={{ width: '100%' }} />
//                     )}
//                   </CardContent>
//                   <CardContent>
//                     <TextField
//                       fullWidth
//                       label="Custom Name"
//                       variant="outlined"
//                       value={file.customName}
//                       onChange={(event) => handleCustomNameChange(index, event)}
//                     />
//                     <Typography variant="body2" sx={{ mt: 1 }}>
//                       Custom Name: {file.customName || 'N/A'}
//                     </Typography>
//                     <Typography variant="body2">
//                       File Name: {file.name}
//                     </Typography>
//                   </CardContent>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </Box>
//       </Box>

//       <Dialog open={dialogOpen} onClose={handleCloseDialog} maxWidth="md" fullWidth>
//         <Box sx={{ padding: '16px' }}>
//           {selectedFile && (
//             <>
//               {selectedFile.type === 'application/pdf' ? (
//                 <embed src={selectedFile.url} type="application/pdf" width="100%" height="600px" />
//               ) : (
//                 <img src={selectedFile.url} alt="Selected file" style={{ width: '100%' }} />
//               )}
//             </>
//           )}
//         </Box>
//       </Dialog>
//     </Box>
//   );
// }

// src/pages/index.js
import React from 'react';
import { AppBar, Box, Button, Card, CardContent, Container, CssBaseline, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    background: {
      default: '#f4f6f8',
      paper: '#fff',
    },
    primary: {
      main: '#1976d2',
    },
  },
});

const HomePage = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static" style={{ backgroundColor: theme.palette.background.paper, boxShadow: 'none', padding: '16px 0' }}>
        <Container maxWidth="lg">
          <Typography variant="h6" color="black" noWrap>
            August
          </Typography>
        </Container>
      </AppBar>
      <Container maxWidth="lg" style={{ textAlign: 'center', marginTop: '40px' }}>
        <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh' }}>
          <Typography variant="h2" component="h1" gutterBottom>
            Dataset Engineering Platform
          </Typography>
          <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '40px', gap: '40px' }}>
            <Card style={{ minWidth: '275px', maxWidth: '300px' }}>
              <CardContent>
                <Typography variant="h5" component="h2">
                  Explore Flows
                </Typography>
                <Button variant="contained" color="primary" href="/flow" style={{ marginTop: '16px' }}>
                  Explore
                </Button>
              </CardContent>
            </Card>
            <Card style={{ minWidth: '275px', maxWidth: '300px' }}>
              <CardContent>
                <Typography variant="h5" component="h2">
                  Datasets
                </Typography>
                <Button variant="contained" color="primary" href="/datasets" style={{ marginTop: '16px' }}>
                  View Datasets
                </Button>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default HomePage;
