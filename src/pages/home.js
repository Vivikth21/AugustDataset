
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
// import React from 'react';
// import { AppBar, Box, Button, Card, CardContent, Container, CssBaseline, Typography } from '@mui/material';
// import { createTheme, ThemeProvider } from '@mui/material/styles';

// const theme = createTheme({
//   palette: {
//     background: {
//       default: '#f4f6f8',
//       paper: '#fff',
//     },
//     primary: {
//       main: '#1976d2',
//     },
//   },
// });

// const HomePage = () => {
//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <AppBar position="static" style={{ backgroundColor: theme.palette.background.paper, boxShadow: 'none', padding: '16px 0' }}>
//         <Container maxWidth="lg">
//           <Typography variant="h6" color="black" >
//             <center>August</center>
//           </Typography>
//         </Container>
//       </AppBar>
//       <Container maxWidth="lg" style={{ textAlign: 'center', marginTop: '40px' }}>
//         <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh' }}>
//           <Typography variant="h2" component="h1" gutterBottom>
//             Dataset Engineering Platform
//           </Typography>
//           <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '40px', gap: '40px' }}>
//             <Card style={{ minWidth: '275px', maxWidth: '300px' }}>
//               <CardContent>
//                 <Typography variant="h5" component="h2">
//                   Explore Flows
//                 </Typography>
//                 <Button variant="contained" color="primary" href="/flow" style={{ marginTop: '16px' }}>
//                   Explore
//                 </Button>
//               </CardContent>
//             </Card>
//             <Card style={{ minWidth: '275px', maxWidth: '300px' }}>
//               <CardContent>
//                 <Typography variant="h5" component="h2">
//                   Datasets
//                 </Typography>
//                 <Button variant="contained" color="primary" href="/datasets" style={{ marginTop: '16px' }}>
//                   View Datasets
//                 </Button>
//               </CardContent>
//             </Card>
//           </Box>
//         </Box>
//       </Container>
//     </ThemeProvider>
//   );
// };

// export default HomePage;

import React from 'react';
import { AppBar, Box, Button, Card, CardContent, Container, CssBaseline, Typography, useMediaQuery } from '@mui/material';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

let theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: 'rgb(0, 46, 37)',
      light: 'rgb(51, 97, 88)',
      dark: 'rgb(0, 23, 18)',
    },
    secondary: {
      main: 'rgb(255, 193, 7)',
    },
    background: {
      default: '#f0f4f4',
      paper: '#ffffff',
    },
    text: {
      primary: 'rgb(0, 46, 37)',
      secondary: 'rgb(102, 102, 102)',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  },
});

theme = responsiveFontSizes(theme);

// const StyledAppBar = styled(AppBar)(({ theme }) => ({
//   backgroundColor: theme.palette.background.default,
//   boxShadow: 'none',
//   padding: '24px 0',
// }));
// const StyledAppBar = styled(AppBar)(({ theme }) => ({
// //   background: `linear-gradient(45deg, #f9f5eb 25%, #f5f1e7 25%, #f5f1e7 50%, #f9f5eb 50%, #f9f5eb 75%, #f5f1e7 75%, #f5f1e7 100%)`,
// //   backgroundSize: '40px 40px',
// //   boxShadow: 'none',
// //   padding: '24px 0',
// //   borderBottom: '1px solid #e0e0e0',
// // }));
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: `linear-gradient(to right, #ffffff, #f8f9fa)`,
  boxShadow: '0 2px 4px rgba(0,0,0,0.03)',
  padding: '24px 0',
}));
const Logo = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  letterSpacing: 1.5,
  color: theme.palette.primary.main,
}));

const Hero = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  padding: theme.spacing(4),
  backgroundColor: theme.palette.background.default,
}));

const HeroTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  fontWeight: 800,
  color: theme.palette.primary.main,
}));

const CardContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: theme.spacing(4),
  marginTop: theme.spacing(6),
  [theme.breakpoints.up('md')]: {
    flexWrap: 'nowrap',
  },
}));

const StyledCard = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: 340,
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.spacing(2),
  overflow: 'hidden',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  border: `2px solid ${theme.palette.primary.light}`,
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 12px 20px rgba(0, 46, 37, 0.2)',
  },
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(4),
}));

const CardTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  fontWeight: 700,
  color: theme.palette.primary.main,
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  padding: theme.spacing(1.5, 4),
  borderRadius: 30,
  fontWeight: 600,
  textTransform: 'none',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.background.paper,
  transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
    transform: 'scale(1.05)',
    boxShadow: '0 5px 15px rgba(0, 46, 37, 0.3)',
  },
}));

const HomePage = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <StyledAppBar position="static">
        <Container maxWidth="lg">
          <Logo variant="h4">
            August
          </Logo>
        </Container>
      </StyledAppBar>
      <Hero>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <HeroTitle variant={isMobile ? 'h3' : 'h2'} component="h1">
              Dataset Engineering Platform
            </HeroTitle>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <CardContainer>
              {['Explore Flows', 'Datasets'].map((title, index) => (
                <StyledCard key={index}>
                  <StyledCardContent>
                    <CardTitle variant="h5" component="h2">
                      {title}
                    </CardTitle>
                    <StyledButton
                      variant="contained"
                      href={title === 'Explore Flows' ? '/flow' : '/datasets'}
                    >
                      {title === 'Explore Flows' ? 'Explore' : 'View Datasets'}
                    </StyledButton>
                  </StyledCardContent>
                </StyledCard>
              ))}
            </CardContainer>
          </motion.div>
        </Container>
      </Hero>
    </ThemeProvider>
  );
};

export default HomePage;