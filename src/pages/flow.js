
// import { Box, Card, CardContent, Typography, Divider, Container, Grid, CssBaseline } from '@mui/material';
// import { styled } from '@mui/system';
// import Link from 'next/link';
// import FolderIcon from '@mui/icons-material/Folder';
// import VerifiedIcon from '@mui/icons-material/Verified';
// import CategoryIcon from '@mui/icons-material/Category';

// const Flow = () => {
//   return (
//     <Box sx={{ display: 'flex', minHeight: '100vh' }}>
//       <CssBaseline />
//       <Box sx={{ flexGrow: 1, backgroundColor: '#f4f6f8' }}>
//         <Box sx={{ backgroundColor: 'white', padding: '16px', color: 'green', textAlign: 'left', width: '100%', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
//           <Typography variant="h4" sx={{ marginLeft: '16px' }}>August Ai</Typography>
//         </Box>

//         <Box sx={{ display: 'flex' }}>
//           <Box sx={{ width: '200px', backgroundColor: '#ffffff', padding: '24px', marginTop: '16px', borderRadius: '8px' }}>
//             <Typography variant="h5" sx={{ fontWeight: 'bold' }}>Flows and Datasets</Typography>
//           </Box>

//           <Container maxWidth="lg" sx={{ padding: '24px', backgroundColor: '#fff', borderRadius: '8px', marginTop: '16px', marginLeft: '16px' }}>
//             <Section title="File" icon={FolderIcon} cards={["Food", "Body Part", "Other"]} />
//             <Section title="Relevancy" icon={VerifiedIcon} cards={["Valid", "Invalid"]} />
//             <Section title="Type" icon={CategoryIcon} cards={["Blood/Urine", "Others"]} />
//           </Container>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// const Section = ({ title, icon: Icon, cards }) => (
//   <Box sx={{ marginBottom: '40px' }}>
//     <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
//       <Icon sx={{ marginRight: '8px' }} />
//       <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{title}</Typography>
//     </Box>
//     <Divider sx={{ marginBottom: '24px', backgroundColor: 'rgba(0, 0, 0, 0.2)' }} />
//     <Grid container spacing={3}>
//       {cards.map((cardTitle, index) => (
//         <Grid item xs={12} sm={6} md={4} key={index}>
//           <CardComponent title={cardTitle} />
//         </Grid>
//       ))}
//     </Grid>
//   </Box>
// );

// const CardComponent = ({ title }) => {
//   const StyledCard = styled(Card)(({ theme }) => ({
//     borderRadius: '16px',
//     height: '200px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#f9f9f9',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//     transition: 'transform 0.3s ease',
//     '&:hover': {
//       transform: 'translateY(-4px)',
//       cursor: 'pointer',
//     },
//   }));

//   return (
//     // <Link href={`/home/${encodeURIComponent(title.toLowerCase())}`} passHref>
//     // <Link href={`/home`} passHref>
//     <Link href={`/category`} passHref>
//       <StyledCard component="a">
//         <CardContent>
//           <Typography variant="h8" sx={{ textAlign: 'center', fontWeight: 'bold' }}>{title}</Typography>
//         </CardContent>
//       </StyledCard>
//     </Link>
//   );
// };

// export default Flow;
// import { Box, Card, CardContent, Typography, Divider, Container, Grid, CssBaseline } from '@mui/material';
// import { styled } from '@mui/system';
// import Link from 'next/link';
// import FolderIcon from '@mui/icons-material/Folder';
// import VerifiedIcon from '@mui/icons-material/Verified';
// import CategoryIcon from '@mui/icons-material/Category';
// import Layout from '@/components/layout';

// // const Flow = () => {
// //   return (
// //     <Box sx={{ display: 'flex', minHeight: '100vh' }}>
// //       <CssBaseline />
// //       <Box sx={{ flexGrow: 1, backgroundColor: '#f4f6f8', display: 'flex', flexDirection: 'column' }}>
// //         <Box sx={{ backgroundColor: 'white', padding: '16px', color: 'green', textAlign: 'left', width: '100%', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
// //           <Typography variant="h4" sx={{ marginLeft: '16px' }}>August Ai</Typography>
// //         </Box>

// //         <Box sx={{ display: 'flex', flexGrow: 1 }}>
// //           {/* <Box sx={{ width: '200px', backgroundColor: '#ffffff', padding: '24px', marginTop: '16px', borderRadius: '8px', height: '100%' }}>
// //             <Typography variant="h5" sx={{ fontWeight: 'bold' }}>Flows and Datasets</Typography>
// //           </Box> */}

// //           <Container maxWidth={false} sx={{ padding: '24px', backgroundColor: '#fff', borderRadius: '8px', marginTop: '16px', marginLeft: '16px', flexGrow: 1 }}>
// //             <Section title="File" icon={FolderIcon} cards={["Food", "Body Part", "Other"]} />
// //             <Section title="Relevancy" icon={VerifiedIcon} cards={["Valid", "Invalid"]} />
// //             <Section title="Type" icon={CategoryIcon} cards={["Blood/Urine", "Others"]} />
// //           </Container>
// //         </Box>
// //       </Box>
// //     </Box>
// //   );
// // };

// const Flow = () => {
//   return (
//     <Layout pageTitle="Flows and Datasets">
//       <Container maxWidth={false} sx={{ padding: '24px', backgroundColor: '#fff', borderRadius: '8px', marginTop: '16px', marginLeft: '16px', flexGrow: 1 }}>
//         <Section title="File" icon={FolderIcon} cards={["Food", "Body Part", "Other"]} />
//         <Section title="Relevancy" icon={VerifiedIcon} cards={["Valid", "Invalid"]} />
//         <Section title="Type" icon={CategoryIcon} cards={["Blood/Urine", "Others"]} />
//       </Container>
//     </Layout>
//   );
// };

// const Section = ({ title, icon: Icon, cards }) => (
//   <Box sx={{ marginBottom: '40px' }}>
//     <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
//       <Icon sx={{ marginRight: '8px' }} />
//       <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{title}</Typography>
//     </Box>
//     <Divider sx={{ marginBottom: '24px', backgroundColor: 'rgba(0, 0, 0, 0.2)' }} />
//     <Grid container spacing={3}>
//       {cards.map((cardTitle, index) => (
//         <Grid item xs={12} sm={6} md={4} key={index}>
//           <CardComponent title={cardTitle} />
//         </Grid>
//       ))}
//     </Grid>
//   </Box>
// );

// const CardComponent = ({ title }) => {
//   const StyledCard = styled(Card)(({ theme }) => ({
//     borderRadius: '16px',
//     height: '300px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#f9f9f9',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//     transition: 'transform 0.3s ease',
//     '&:hover': {
//       transform: 'translateY(-4px)',
//       cursor: 'pointer',
//     },
//   }));

//   return (
//     <Link href={`/category`} passHref>
//       <StyledCard component="a">
//         <CardContent>
//           <Typography variant="h8" sx={{ textAlign: 'center', fontWeight: 'bold' }}>{title}</Typography>
//         </CardContent>
//       </StyledCard>
//     </Link>
//   );
// };




// export default Flow;

// import { Box, Card, CardContent, Typography, Divider, Container, Grid, CssBaseline } from '@mui/material';
// import { styled } from '@mui/system';
// import Link from 'next/link';
// import FolderIcon from '@mui/icons-material/Folder';
// import VerifiedIcon from '@mui/icons-material/Verified';
// import CategoryIcon from '@mui/icons-material/Category';
// import Layout from '@/components/layout';
// import { useDarkMode } from '@/contexts/darkModeContext';

// const Flow = () => {
//   const { darkMode } = useDarkMode();

//   return (
//     <Layout pageTitle="Flows and Datasets">
//       <Container
//         maxWidth={false}
//         sx={{
//           padding: '24px',
//           backgroundColor: darkMode ? '#333' : '#fff',
//           borderRadius: '8px',
//           marginTop: '16px',
//           marginLeft: '16px',
//           flexGrow: 1
//         }}
//       >
//         <Section title="File" icon={FolderIcon} cards={["Food", "Body Part", "Other"]} />
//         <Section title="Relevancy" icon={VerifiedIcon} cards={["Valid", "Invalid"]} />
//         <Section title="Type" icon={CategoryIcon} cards={["Blood/Urine", "Others"]} />
//       </Container>
//     </Layout>
//   );
// };

// const Section = ({ title, icon: Icon, cards }) => {
//   const { darkMode } = useDarkMode();

//   return (
//     <Box sx={{ marginBottom: '40px' }}>
//       <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
//         <Icon sx={{ marginRight: '8px', color: darkMode ? '#fff' : '#000' }} />
//         <Typography variant="h6" sx={{ fontWeight: 'bold', color: darkMode ? '#fff' : '#000' }}>{title}</Typography>
//       </Box>
//       <Divider sx={{ marginBottom: '24px', backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)' }} />
//       <Grid container spacing={3}>
//         {cards.map((cardTitle, index) => (
//           <Grid item xs={12} sm={6} md={4} key={index}>
//             <CardComponent title={cardTitle} />
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// const CardComponent = ({ title }) => {
//   const { darkMode } = useDarkMode();

//   const StyledCard = styled(Card)(({ theme }) => ({
//     borderRadius: '16px',
//     height: '300px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: darkMode ? '#444' : '#f9f9f9',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//     transition: 'transform 0.3s ease',
//     '&:hover': {
//       transform: 'translateY(-4px)',
//       cursor: 'pointer',
//     },
//   }));

//   return (
//     <Link href={`/category`} passHref>
//       <StyledCard component="a">
//         <CardContent>
//           <Typography variant="h8" sx={{ textAlign: 'center', fontWeight: 'bold', color: darkMode ? '#fff' : '#000' }}>{title}</Typography>
//         </CardContent>
//       </StyledCard>
//     </Link>
//   );
// };

// export default Flow;

// import { Box, Card, CardContent, Typography, Divider, Container, Grid, CssBaseline } from '@mui/material';
// import { styled } from '@mui/system';
// import Link from 'next/link';
// import FolderIcon from '@mui/icons-material/Folder';
// import VerifiedIcon from '@mui/icons-material/Verified';
// import CategoryIcon from '@mui/icons-material/Category';
// import Layout from '@/components/layout';
// import { useDarkMode } from '@/contexts/darkModeContext';

// const Flow = () => {
//   const { darkMode } = useDarkMode();

//   return (
//     <Layout pageTitle="Flows and Datasets">
//       <Container
//         maxWidth={false}
//         sx={{
//           padding: '24px',
//           backgroundColor: darkMode ? '#333' : '#fff',
//           borderRadius: '0px',
//           marginTop: '0px',
//           marginLeft: '0px',
//           flexGrow: 1
//         }}
//       >
//         <Section title="File" icon={FolderIcon} cards={[{title:"A",file:"A.csv"},{title:"B",file:"B.csv"},{title: "C (Body Part)", file: "bodypart.csv"},{title: "D (Food) ", file: "food.csv"},{title: "E", file: "E.csv"},  {title: "Other", file: "other(p0).csv"}]}/>
//         <Section title="Relevancy" icon={VerifiedIcon} cards={[{title: "Valid", file: "valid.csv"}, {title: "Invalid", file: "invalid.csv"}]} />
//         <Section title="Type" icon={CategoryIcon} cards={[{title: "Blood/Urine", file: "bldurine.csv"}, {title: "Others", file: "other(p2).csv"}]} />
//       </Container>
//     </Layout>
//   );
// };

// const Section = ({ title, icon: Icon, cards }) => {
//   const { darkMode } = useDarkMode();

//   return (
//     <Box sx={{ margin: '40px' }}>
//       <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
//         <Icon sx={{ marginRight: '8px', color: darkMode ? '#fff' : '#000' }} />
//         <Typography variant="h6" sx={{ fontWeight: 'bold', color: darkMode ? '#fff' : '#000' }}>{title}</Typography>
//       </Box>
//       <Divider sx={{ marginBottom: '24px', backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)' }} />
//       <Grid container spacing={3}>
//         {cards.map((card, index) => (
//           <Grid item xs={12} sm={6} md={4} key={index}>
//             <CardComponent title={card.title} file={card.file} />
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// const CardComponent = ({ title, file }) => {
//   const { darkMode } = useDarkMode();

//   const StyledCard = styled(Card)(({ theme }) => ({
//     borderRadius: '16px',
//     height: '300px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: darkMode ? '#444' : '#f9f9f9',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//     transition: 'transform 0.3s ease',
//     '&:hover': {
//       transform: 'translateY(-4px)',
//       cursor: 'pointer',
//     },
//   }));

//   return (
//     <Link href={`/category?file=${file}`} passHref>
//       <StyledCard component="a">
//         <CardContent>
//           <Typography variant="h8" sx={{ textAlign: 'center', fontWeight: 'bold', color: darkMode ? '#fff' : '#000' }}>{title}</Typography>
//         </CardContent>
//       </StyledCard>
//     </Link>
//   );
// };

// export default Flow;

// import React, { useState, useEffect } from 'react';
// import { Box, Card, CardContent, Typography, Divider, Container, Grid, CssBaseline } from '@mui/material';
// import { styled } from '@mui/system';
// import { useRouter } from 'next/router';
// import FolderIcon from '@mui/icons-material/Folder';
// import VerifiedIcon from '@mui/icons-material/Verified';
// import CategoryIcon from '@mui/icons-material/Category';
// import Layout from '@/components/layout';
// import { useDarkMode } from '@/contexts/darkModeContext';

// const StyledCard = styled(Card)(({ theme, isDarkMode }) => ({
//   borderRadius: '16px',
//   height: '300px',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   backgroundColor: isDarkMode ? '#444' : '#f9f9f9',
//   boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//   transition: 'transform 0.3s ease',
//   '&:hover': {
//     transform: 'translateY(-4px)',
//     cursor: 'pointer',
//   },
// }));

// const Flow = () => {
//   const { darkMode } = useDarkMode();
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) {
//     return null;
//   }

//   return (
//     <Layout pageTitle="Flows and Datasets">
//       <Container
//         maxWidth={false}
//         sx={{
//           padding: '24px',
//           backgroundColor: darkMode ? '#333' : '#fff',
//           borderRadius: '0px',
//           marginTop: '0px',
//           marginLeft: '0px',
//           flexGrow: 1
//         }}
//       >
//         <Section 
//           title="File" 
//           icon={FolderIcon} 
//           cards={[
//             {title:"A",file:"A.csv"},
//             {title:"B",file:"B.csv"},
//             {title: "C (Body Part)", file: "bodypart.csv"},
//             {title: "D (Food) ", file: "food.csv"},
//             {title: "E", file: "E.csv"},
//             {title: "Other", file: "other(p0).csv"}
//           ]}
//           darkMode={darkMode}
//         />
//         <Section 
//           title="Relevancy" 
//           icon={VerifiedIcon} 
//           cards={[
//             {title: "Valid", file: "valid.csv"}, 
//             {title: "Invalid", file: "invalid.csv"}
//           ]} 
//           darkMode={darkMode}
//         />
//         <Section 
//           title="Type" 
//           icon={CategoryIcon} 
//           cards={[
//             {title: "Blood/Urine", file: "bldurine.csv"}, 
//             {title: "Others", file: "other(p2).csv"}
//           ]} 
//           darkMode={darkMode}
//         />
//       </Container>
//     </Layout>
//   );
// };

// const Section = ({ title, icon: Icon, cards, darkMode }) => {
//   return (
//     <Box sx={{ margin: '40px' }}>
//       <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
//         <Icon sx={{ marginRight: '8px', color: darkMode ? '#fff' : '#000' }} />
//         <Typography variant="h6" sx={{ fontWeight: 'bold', color: darkMode ? '#fff' : '#000' }}>{title}</Typography>
//       </Box>
//       <Divider sx={{ marginBottom: '24px', backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)' }} />
//       <Grid container spacing={3}>
//         {cards.map((card, index) => (
//           <Grid item xs={12} sm={6} md={4} key={index}>
//             <CardComponent title={card.title} file={card.file} darkMode={darkMode} />
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// const CardComponent = ({ title, file, darkMode }) => {
//   const router = useRouter();

//   const handleClick = () => {
//     router.push(`/category?file=${file}`);
//   };

//   return (
//     <StyledCard onClick={handleClick} isDarkMode={darkMode}>
//       <CardContent>
//         <Typography variant="subtitle1" sx={{ textAlign: 'center', fontWeight: 'bold', color: darkMode ? '#fff' : '#000' }}>
//           {title}
//         </Typography>
//       </CardContent>
//     </StyledCard>
//   );
// };

// export default Flow;

// import React, { useState, useEffect } from 'react';
// import { Box, Card, CardContent, Typography, Divider, Container, Grid, CssBaseline } from '@mui/material';
// import { styled, keyframes } from '@mui/system';
// import { useRouter } from 'next/router';
// import FolderIcon from '@mui/icons-material/Folder';
// import VerifiedIcon from '@mui/icons-material/Verified';
// import CategoryIcon from '@mui/icons-material/Category';
// import Layout from '@/components/layout';
// import { useDarkMode } from '@/contexts/darkModeContext';

// const fadeIn = keyframes`
//   from { opacity: 0; transform: translateY(20px); }
//   to { opacity: 1; transform: translateY(0); }
// `;

// const StyledCard = styled(Card)(({ theme, isDarkMode }) => ({
//   borderRadius: '16px',
//   height: '300px',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   backgroundColor: isDarkMode ? '#444' : '#f9f9f9',
//   boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//   transition: 'transform 0.3s ease, box-shadow 0.3s ease',
//   '&:hover': {
//     transform: 'translateY(-4px)',
//     boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
//     cursor: 'pointer',
//   },
//   animation: `${fadeIn} 0.5s ease-out`,
// }));

// const AnimatedSection = styled(Box)(({ theme }) => ({
//   animation: `${fadeIn} 0.5s ease-out`,
// }));

// const Flow = () => {
//   const { darkMode } = useDarkMode();
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) {
//     return null;
//   }

//   const sections = [
//     {
//       title: "File",
//       icon: FolderIcon,
//       cards: [
//         {title:"A",file:"A.csv"},
//         {title:"B",file:"B.csv"},
//         {title: "C (Body Part)", file: "bodypart.csv"},
//         {title: "D (Food) ", file: "food.csv"},
//         {title: "E", file: "E.csv"},
//         {title: "Other", file: "other(p0).csv"}
//       ]
//     },
//     {
//       title: "Relevancy",
//       icon: VerifiedIcon,
//       cards: [
//         {title: "Valid", file: "valid.csv"}, 
//         {title: "Invalid", file: "invalid.csv"}
//       ]
//     },
//     {
//       title: "Type",
//       icon: CategoryIcon,
//       cards: [
//         {title: "Blood/Urine", file: "bldurine.csv"}, 
//         {title: "Others", file: "other(p2).csv"}
//       ]
//     }
//   ];

//   return (
//     <Layout pageTitle="Flows and Datasets">
//       <Container
//         maxWidth={false}
//         sx={{
//           padding: '24px',
//           backgroundColor: darkMode ? '#333' : '#fff',
//           borderRadius: '0px',
//           marginTop: '0px',
//           marginLeft: '0px',
//           flexGrow: 1
//         }}
//       >
//         {sections.map((section, index) => (
//           <Section 
//             key={index}
//             title={section.title} 
//             icon={section.icon} 
//             cards={section.cards}
//             darkMode={darkMode}
//           />
//         ))}
//       </Container>
//     </Layout>
//   );
// };

// const Section = ({ title, icon: Icon, cards, darkMode }) => {
//   return (
//     <AnimatedSection sx={{ margin: '40px' }}>
//       <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
//         <Icon sx={{ marginRight: '8px', color: darkMode ? '#fff' : '#000' }} />
//         <Typography variant="h6" sx={{ fontWeight: 'bold', color: darkMode ? '#fff' : '#000' }}>{title}</Typography>
//       </Box>
//       <Divider sx={{ marginBottom: '24px', backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)' }} />
//       <Grid container spacing={3}>
//         {cards.map((card, index) => (
//           <Grid item xs={12} sm={6} md={4} key={index}>
//             <CardComponent title={card.title} file={card.file} darkMode={darkMode} />
//           </Grid>
//         ))}
//       </Grid>
//     </AnimatedSection>
//   );
// };

// const CardComponent = ({ title, file, darkMode }) => {
//   const router = useRouter();

//   const handleClick = () => {
//     router.push(`/category?file=${file}`);
//   };

//   return (
//     <StyledCard onClick={handleClick} isDarkMode={darkMode}>
//       <CardContent>
//         <Typography variant="subtitle1" sx={{ textAlign: 'center', fontWeight: 'bold', color: darkMode ? '#fff' : '#000' }}>
//           {title}
//         </Typography>
//       </CardContent>
//     </StyledCard>
//   );
// };

// export default Flow;

// import React, { useState, useEffect } from 'react';
// import { Box, Card, CardContent, Typography, Container, Grid, Button, IconButton } from '@mui/material';
// import { styled, keyframes } from '@mui/system';
// import { useRouter } from 'next/router';
// import FolderIcon from '@mui/icons-material/Folder';
// import VerifiedIcon from '@mui/icons-material/Verified';
// import CategoryIcon from '@mui/icons-material/Category';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import Layout from '@/components/layout';
// import { useDarkMode } from '@/contexts/darkModeContext';

// const fadeIn = keyframes`
//   from { opacity: 0; transform: translateY(20px); }
//   to { opacity: 1; transform: translateY(0); }
// `;

// const StyledCard = styled(Card)(({ theme, isDarkMode }) => ({
//   borderRadius: '12px',
//   height: '100%',
//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'space-between',
//   backgroundColor: isDarkMode ? '#2a2a2a' : '#ffffff',
//   boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
//   transition: 'all 0.3s ease',
//   '&:hover': {
//     transform: 'translateY(-4px)',
//     boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
//   },
//   animation: `${fadeIn} 0.5s ease-out`,
// }));

// const SectionTitle = styled(Typography)(({ theme, isDarkMode }) => ({
//   fontSize: '28px',
//   fontWeight: 'bold',
//   marginBottom: '24px',
//   color: isDarkMode ? '#ffffff' : '#333333',
//   display: 'flex',
//   alignItems: 'center',
//   '& .MuiSvgIcon-root': {
//     marginRight: '12px',
//     fontSize: '32px',
//   },
// }));

// const Flow = () => {
//   const { darkMode } = useDarkMode();
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) {
//     return null;
//   }

//   const sections = [
//     {
//       title: "File",
//       icon: FolderIcon,
//       cards: [
//         {title:"A",file:"A.csv"},
//         {title:"B",file:"B.csv"},
//         {title: "C (Body Part)", file: "bodypart.csv"},
//         {title: "D (Food) ", file: "food.csv"},
//         {title: "E", file: "E.csv"},
//         {title: "Other", file: "other(p0).csv"}
//       ]
//     },
//     {
//       title: "Relevancy",
//       icon: VerifiedIcon,
//       cards: [
//         {title: "Valid", file: "valid.csv"}, 
//         {title: "Invalid", file: "invalid.csv"}
//       ]
//     },
//     {
//       title: "Type",
//       icon: CategoryIcon,
//       cards: [
//         {title: "Blood/Urine", file: "bldurine.csv"}, 
//         {title: "Others", file: "other(p2).csv"}
//       ]
//     }
//   ];

//   return (
//     <Layout pageTitle="Flows and Datasets">
//       <Container
//         maxWidth={false}
//         sx={{
//           padding: '40px',
//           backgroundColor: darkMode ? '#1a1a1a' : '#f5f5f5',
//           borderRadius: '0px',
//           marginTop: '0px',
//           marginLeft: '0px',
//           flexGrow: 1
//         }}
//       >
//         {sections.map((section, index) => (
//           <Section 
//             key={index}
//             title={section.title} 
//             icon={section.icon} 
//             cards={section.cards}
//             darkMode={darkMode}
//           />
//         ))}
//       </Container>
//     </Layout>
//   );
// };

// const Section = ({ title, icon: Icon, cards, darkMode }) => {
//   return (
//     <Box sx={{ marginBottom: '48px' }}>
//       <SectionTitle variant="h2" isDarkMode={darkMode}>
//         <Icon />
//         {title}
//       </SectionTitle>
//       <Grid container spacing={3}>
//         {cards.map((card, index) => (
//           <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
//             <CardComponent title={card.title} file={card.file} darkMode={darkMode} />
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// const CardComponent = ({ title, file, darkMode }) => {
//   const router = useRouter();

//   const handleClick = () => {
//     router.push(`/category?file=${file}`);
//   };

//   return (
//     <StyledCard isDarkMode={darkMode}>
//       <CardContent sx={{ flexGrow: 1 }}>
//         <Typography variant="h6" sx={{ 
//           fontWeight: 'bold', 
//           color: darkMode ? '#ffffff' : '#333333',
//           marginBottom: '12px'
//         }}>
//           {title}
//         </Typography>
//         <Typography variant="body2" sx={{ 
//           color: darkMode ? '#cccccc' : '#666666',
//           marginBottom: '16px'
//         }}>
//           File: {file}
//         </Typography>
//       </CardContent>
//       <Box sx={{ padding: '16px', textAlign: 'right' }}>
//         <Button
//           variant="contained"
//           color="primary"
//           endIcon={<ArrowForwardIcon />}
//           onClick={handleClick}
//           sx={{
//             borderRadius: '20px',
//             textTransform: 'none',
//             boxShadow: 'none',
//             '&:hover': {
//               boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//             },
//           }}
//         >
//           View
//         </Button>
//       </Box>
//     </StyledCard>
//   );
// };

// export default Flow;

import React, { useState, useEffect } from 'react';
import { Box, Card, CardContent, Typography, Container, Grid, Button } from '@mui/material';
import { styled, keyframes } from '@mui/system';
import { useRouter } from 'next/router';
import FolderIcon from '@mui/icons-material/Folder';
import VerifiedIcon from '@mui/icons-material/VerifiedUser';
import CategoryIcon from '@mui/icons-material/Category';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Layout from '@/components/layout';
import { useDarkMode } from '@/contexts/darkModeContext';

const fadeInUp = keyframes`
  from { 
    opacity: 0; 
    transform: translateY(20px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
`;

const StyledCard = styled(Card)(({ theme, isDarkMode, markerColor }) => ({
  borderRadius: '12px',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  backgroundColor: isDarkMode ? '#2a2a2a' : '#ffffff',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
  position: 'relative',
  overflow: 'hidden',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.15)',
  },
  animation: `${fadeInUp} 0.6s ease-out backwards`,
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '4px',
    height: '100%',
    backgroundColor: markerColor,
  },
}));

const SectionTitle = styled(Typography)(({ isDarkMode }) => ({
  fontSize: '24px',
  fontWeight: 700,
  marginBottom: '24px',
  color: isDarkMode ? '#ffffff' : '#333333',
  display: 'flex',
  alignItems: 'center',
  '& .MuiSvgIcon-root': {
    marginRight: '12px',
    fontSize: '28px',
  },
  textTransform: 'uppercase',
  letterSpacing: '1px',
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-6px',
    left: '0',
    width: '40px',
    height: '3px',
    backgroundColor: '#1976d2',
  },
}));

const Flow = () => {
  const { darkMode } = useDarkMode();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const sections = [
    {
      title: "File",
      icon: FolderIcon,
      cards: [
        {title:"A", file:"A.csv", color: "#FF6B6B"},
        {title:"B", file:"B.csv", color: "#4ECDC4"},
        {title: "C (Body Part)", file: "bodypart.csv", color: "#45B7D1"},
        {title: "D (Food)", file: "food.csv", color: "#FFA07A"},
        {title: "E", file: "E.csv", color: "#98D8C8"},
        {title: "Other", file: "other(p0).csv", color: "#F7B801"}
      ]
    },
    {
      title: "Relevancy",
      icon: VerifiedIcon,
      cards: [
        {title: "Valid", file: "valid.csv", color: "#66BB6A"}, 
        {title: "Invalid", file: "invalid.csv", color: "#EF5350"}
      ]
    },
    {
      title: "Type",
      icon: CategoryIcon,
      cards: [
        {title: "Blood/Urine", file: "bldurine.csv", color: "#AB47BC"}, 
        {title: "Others", file: "other(p2).csv", color: "#7E57C2"}
      ]
    }
  ];

  // return (
  //   <Layout pageTitle="Flows and Datasets">
  //     <Container
  //       maxWidth={false}
  //       sx={{
  //         padding: '48px',
  //         backgroundColor: darkMode ? '#121212' : '#f8f9fa',
  //         borderRadius: '0px',
  //         marginTop: '0px',
  //         marginLeft: '0px',
  //         flexGrow: 1
  //       }}
  //     >
  //       {sections.map((section, index) => (
  //         <Section 
  //           key={index}
  //           title={section.title} 
  //           icon={section.icon} 
  //           cards={section.cards}
  //           darkMode={darkMode}
  //           index={index}
  //         />
  //       ))}
  //     </Container>
  //   </Layout>
  // );
  return (
    <Layout pageTitle="Flows and Datasets">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh', // Ensure minimum height is full viewport
          backgroundColor: darkMode ? '#121212' : '#f8f9fa',
        }}
      >
        <Container
          maxWidth={false}
          sx={{
            padding: '48px',
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {sections.map((section, index) => (
            <Section 
              key={index}
              title={section.title} 
              icon={section.icon} 
              cards={section.cards}
              darkMode={darkMode}
              index={index}
            />
          ))}
        </Container>
      </Box>
    </Layout>
  );
};

const Section = ({ title, icon: Icon, cards, darkMode, index }) => {
  return (
    <Box sx={{ marginBottom: '48px' }}>
      <SectionTitle variant="h2" isDarkMode={darkMode}>
        <Icon />
        {title}
      </SectionTitle>
      <Grid container spacing={3}>
        {cards.map((card, cardIndex) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={cardIndex}>
            <CardComponent 
              title={card.title} 
              file={card.file} 
              markerColor={card.color}
              darkMode={darkMode} 
              delay={cardIndex * 0.1 + index * 0.3}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

const CardComponent = ({ title, file, markerColor, darkMode, delay }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/category?file=${file}`);
  };

  return (
    <StyledCard isDarkMode={darkMode} markerColor={markerColor} sx={{ animationDelay: `${delay}s` }}>
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" sx={{ 
          fontWeight: 'bold', 
          color: darkMode ? '#ffffff' : '#333333',
          marginBottom: '12px',
          fontSize: '18px'
        }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ 
          color: darkMode ? '#cccccc' : '#666666',
          marginBottom: '16px'
        }}>
          File: {file}
        </Typography>
      </CardContent>
      <Box sx={{ padding: '16px', textAlign: 'right' }}>
        <Button
          variant="contained"
          color="primary"
          endIcon={<ArrowForwardIcon />}
          onClick={handleClick}
          sx={{
            borderRadius: '20px',
            textTransform: 'none',
            boxShadow: 'none',
            padding: '6px 16px',
            '&:hover': {
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            },
          }}
        >
          View
        </Button>
      </Box>
    </StyledCard>
  );
};

export default Flow;