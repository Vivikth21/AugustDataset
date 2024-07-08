
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

import { Box, Card, CardContent, Typography, Divider, Container, Grid, CssBaseline } from '@mui/material';
import { styled } from '@mui/system';
import Link from 'next/link';
import FolderIcon from '@mui/icons-material/Folder';
import VerifiedIcon from '@mui/icons-material/Verified';
import CategoryIcon from '@mui/icons-material/Category';
import Layout from '@/components/layout';
import { useDarkMode } from '@/contexts/darkModeContext';

const Flow = () => {
  const { darkMode } = useDarkMode();

  return (
    <Layout pageTitle="Flows and Datasets">
      <Container
        maxWidth={false}
        sx={{
          padding: '24px',
          backgroundColor: darkMode ? '#333' : '#fff',
          borderRadius: '0px',
          marginTop: '0px',
          marginLeft: '0px',
          flexGrow: 1
        }}
      >
        <Section title="File" icon={FolderIcon} cards={[{title:"A",file:"A.csv"},{title:"B",file:"B.csv"},{title: "C (Body Part)", file: "bodypart.csv"},{title: "D (Food) ", file: "food.csv"},{title: "E", file: "E.csv"},  {title: "Other", file: "other(p0).csv"}]}/>
        <Section title="Relevancy" icon={VerifiedIcon} cards={[{title: "Valid", file: "valid.csv"}, {title: "Invalid", file: "invalid.csv"}]} />
        <Section title="Type" icon={CategoryIcon} cards={[{title: "Blood/Urine", file: "bldurine.csv"}, {title: "Others", file: "other(p2).csv"}]} />
      </Container>
    </Layout>
  );
};

const Section = ({ title, icon: Icon, cards }) => {
  const { darkMode } = useDarkMode();

  return (
    <Box sx={{ margin: '40px' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
        <Icon sx={{ marginRight: '8px', color: darkMode ? '#fff' : '#000' }} />
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: darkMode ? '#fff' : '#000' }}>{title}</Typography>
      </Box>
      <Divider sx={{ marginBottom: '24px', backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)' }} />
      <Grid container spacing={3}>
        {cards.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <CardComponent title={card.title} file={card.file} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

const CardComponent = ({ title, file }) => {
  const { darkMode } = useDarkMode();

  const StyledCard = styled(Card)(({ theme }) => ({
    borderRadius: '16px',
    height: '300px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: darkMode ? '#444' : '#f9f9f9',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'translateY(-4px)',
      cursor: 'pointer',
    },
  }));

  return (
    <Link href={`/category?file=${file}`} passHref>
      <StyledCard component="a">
        <CardContent>
          <Typography variant="h8" sx={{ textAlign: 'center', fontWeight: 'bold', color: darkMode ? '#fff' : '#000' }}>{title}</Typography>
        </CardContent>
      </StyledCard>
    </Link>
  );
};

export default Flow;
