// import Head from "next/head";
// import Image from "next/image";
// import { Inter } from "next/font/google";
// import styles from "@/styles/Home.module.css";

// const inter = Inter({ subsets: ["latin"] });

// export default function Home() {
//   return (
//     <>
//       Hello World
      
//     </>
//   );
// }
// import React from 'react';
// import { AppBar, Box, Button, Card, CardContent, Container, CssBaseline, Typography, useMediaQuery } from '@mui/material';
// import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
// import styled from '@emotion/styled';
// import { motion } from 'framer-motion';

// let theme = createTheme({
//   palette: {
//     mode: 'light',
//     primary: {
//       main: 'rgb(0, 46, 37)',
//       light: 'rgb(51, 97, 88)',
//       dark: 'rgb(0, 23, 18)',
//     },
//     secondary: {
//       main: 'rgb(255, 193, 7)',
//     },
//     background: {
//       default: '#f0f4f4',
//       paper: '#ffffff',
//     },
//     text: {
//       primary: 'rgb(0, 46, 37)',
//       secondary: 'rgb(102, 102, 102)',
//     },
//   },
//   typography: {
//     fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
//   },
// });

// theme = responsiveFontSizes(theme);

// // const StyledAppBar = styled(AppBar)(({ theme }) => ({
// //   backgroundColor: theme.palette.background.default,
// //   boxShadow: 'none',
// //   padding: '24px 0',
// // }));
// // const StyledAppBar = styled(AppBar)(({ theme }) => ({
// // //   background: `linear-gradient(45deg, #f9f5eb 25%, #f5f1e7 25%, #f5f1e7 50%, #f9f5eb 50%, #f9f5eb 75%, #f5f1e7 75%, #f5f1e7 100%)`,
// // //   backgroundSize: '40px 40px',
// // //   boxShadow: 'none',
// // //   padding: '24px 0',
// // //   borderBottom: '1px solid #e0e0e0',
// // // }));
// const StyledAppBar = styled(AppBar)(({ theme }) => ({
//   background: `linear-gradient(to right, #ffffff, #f8f9fa)`,
//   boxShadow: '0 2px 4px rgba(0,0,0,0.03)',
//   padding: '24px 0',
// }));
// const Logo = styled(Typography)(({ theme }) => ({
//   fontWeight: 800,
//   letterSpacing: 1.5,
//   color: theme.palette.primary.main,
// }));

// const Hero = styled(Box)(({ theme }) => ({
//   minHeight: '100vh',
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   justifyContent: 'center',
//   textAlign: 'center',
//   padding: theme.spacing(4),
//   backgroundColor: theme.palette.background.default,
// }));

// const HeroTitle = styled(Typography)(({ theme }) => ({
//   marginBottom: theme.spacing(4),
//   fontWeight: 800,
//   color: theme.palette.primary.main,
// }));

// const CardContainer = styled(Box)(({ theme }) => ({
//   display: 'flex',
//   flexWrap: 'wrap',
//   justifyContent: 'center',
//   gap: theme.spacing(4),
//   marginTop: theme.spacing(6),
//   [theme.breakpoints.up('md')]: {
//     flexWrap: 'nowrap',
//   },
// }));

// const StyledCard = styled(Card)(({ theme }) => ({
//   width: '100%',
//   maxWidth: 340,
//   backgroundColor: theme.palette.background.paper,
//   borderRadius: theme.spacing(2),
//   overflow: 'hidden',
//   transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
//   border: `2px solid ${theme.palette.primary.light}`,
//   '&:hover': {
//     transform: 'translateY(-8px)',
//     boxShadow: '0 12px 20px rgba(0, 46, 37, 0.2)',
//   },
// }));

// const StyledCardContent = styled(CardContent)(({ theme }) => ({
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   padding: theme.spacing(4),
// }));

// const CardTitle = styled(Typography)(({ theme }) => ({
//   marginBottom: theme.spacing(2),
//   fontWeight: 700,
//   color: theme.palette.primary.main,
// }));

// const StyledButton = styled(Button)(({ theme }) => ({
//   marginTop: theme.spacing(2),
//   padding: theme.spacing(1.5, 4),
//   borderRadius: 30,
//   fontWeight: 600,
//   textTransform: 'none',
//   backgroundColor: theme.palette.primary.main,
//   color: theme.palette.background.paper,
//   transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
//   '&:hover': {
//     backgroundColor: theme.palette.primary.dark,
//     transform: 'scale(1.05)',
//     boxShadow: '0 5px 15px rgba(0, 46, 37, 0.3)',
//   },
// }));

// const Home = () => {
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <StyledAppBar position="static">
//         <Container maxWidth="lg">
//           <Logo variant="h4">
//             August
//           </Logo>
//         </Container>
//       </StyledAppBar>
//       <Hero>
//         <Container maxWidth="lg">
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <HeroTitle variant={isMobile ? 'h3' : 'h2'} component="h1">
//               Dataset Engineering Platform
//             </HeroTitle>
//           </motion.div>
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.4, duration: 0.8 }}
//           >
//             <CardContainer>
//               {['Explore Flows', 'Datasets'].map((title, index) => (
//                 <StyledCard key={index}>
//                   <StyledCardContent>
//                     <CardTitle variant="h5" component="h2">
//                       {title}
//                     </CardTitle>
//                     <StyledButton
//                       variant="contained"
//                       href={title === 'Explore Flows' ? '/flow' : '/datasets'}
//                     >
//                       {title === 'Explore Flows' ? 'Explore' : 'View Datasets'}
//                     </StyledButton>
//                   </StyledCardContent>
//                 </StyledCard>
//               ))}
//             </CardContainer>
//           </motion.div>
//         </Container>
//       </Hero>
//     </ThemeProvider>
//   );
// };

// export default Home;

import React from 'react';
import { AppBar, Box, Button, Card, CardContent, Container, CssBaseline, Typography, useMediaQuery, IconButton } from '@mui/material';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useDarkMode } from '@/contexts/darkModeContext';
import { useMemo ,useEffect} from 'react';

const getTheme = (darkMode) => {
  let theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: darkMode ? '#6f7b8f' : 'rgb(0, 46, 37)',
        light: darkMode ? '#8e98aa' : 'rgb(51, 97, 88)',
        dark: darkMode ? '#515d74' : 'rgb(0, 23, 18)',
      },
      secondary: {
        main: darkMode ? '#a0acc0' : 'rgb(255, 193, 7)',
      },
      background: {
        default: darkMode ? '#000000' : '#f0f4f4',
        paper: darkMode ? '#121212' : '#ffffff',
      },
      text: {
        primary: darkMode ? '#ffffff' : 'rgb(0, 46, 37)',
        secondary: darkMode ? '#b0bec5' : 'rgb(102, 102, 102)',
      },
    },
    typography: {
      fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    },
  });

  return responsiveFontSizes(theme);
};

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: theme.palette.mode === 'dark'
    ? `linear-gradient(to right, #000000, #121212)`
    : `linear-gradient(to right, #ffffff, #f8f9fa)`,
  boxShadow: theme.palette.mode === 'dark'
    ? '0 2px 4px rgba(255,255,255,0.1)'
    : '0 2px 4px rgba(0,0,0,0.03)',
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
  backgroundColor: theme.palette.mode === 'dark' ? '#1e1e1e' : theme.palette.background.paper,
  borderRadius: theme.spacing(2),
  overflow: 'hidden',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  border: `2px solid ${theme.palette.primary.main}`,
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: theme.palette.mode === 'dark'
      ? '0 12px 20px rgba(111, 123, 143, 0.2)'
      : '0 12px 20px rgba(0, 46, 37, 0.2)',
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
  color: theme.palette.mode === 'dark' ? '#000000' : theme.palette.background.paper,
  transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
    transform: 'scale(1.05)',
    boxShadow: theme.palette.mode === 'dark'
      ? '0 5px 15px rgba(111, 123, 143, 0.3)'
      : '0 5px 15px rgba(0, 46, 37, 0.3)',
  },
}));


const Home = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const theme = React.useMemo(() => getTheme(darkMode), [darkMode]);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    document.body.style.backgroundColor = theme.palette.background.default;
  }, [theme]);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <StyledAppBar position="static">
        <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Logo variant="h4">
            August
          </Logo>
          <IconButton 
            onClick={toggleDarkMode} 
            sx={{ 
              color: theme.palette.mode === 'dark' ? 'white' : 'black',
            }}
          >
            {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
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

export default Home;