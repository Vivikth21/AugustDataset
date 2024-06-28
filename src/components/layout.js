// import { useState } from 'react';
// import Head from 'next/head';
// import Link from 'next/link';
// import { AppBar, Toolbar, Typography, IconButton, Box, Switch } from '@mui/material';
// import Brightness4Icon from '@mui/icons-material/Brightness4';
// import Brightness7Icon from '@mui/icons-material/Brightness7';

// const Layout = ({ children, pageTitle }) => {
//   const [darkMode, setDarkMode] = useState(false);

//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//     // You can persist dark mode preference here using localStorage or cookies
//   };

//   return (
//     <>
//       <Head>
//         <title>{pageTitle}</title>
//         <meta name="viewport" content="initial-scale=1.0, width=device-width" />
//       </Head>
//       <AppBar position="static" sx={{ backgroundColor: darkMode ? '#333' : '#1976d2' }}>
//         <Toolbar>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             {pageTitle}
//           </Typography>
//           <Box sx={{ display: 'flex', alignItems: 'center' }}>
//             <IconButton onClick={toggleDarkMode} sx={{ color: 'inherit' }}>
//               {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
//             </IconButton>
//           </Box>
//         </Toolbar>
//       </AppBar>
//       <Box sx={{ marginTop: '64px' }}>
//         {children}
//       </Box>
//     </>
//   );
// };

// export default Layout;

// import { useState } from 'react';
// import Head from 'next/head';
// import Link from 'next/link';
// import { AppBar, Toolbar, Typography, IconButton, Box, Switch } from '@mui/material';
// import Brightness4Icon from '@mui/icons-material/Brightness4';
// import Brightness7Icon from '@mui/icons-material/Brightness7';

// const Layout = ({ children, pageTitle }) => {
//   const [darkMode, setDarkMode] = useState(false);

//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//     // You can persist dark mode preference here using localStorage or cookies
//   };

//   return (
//     <>
//       <Head>
//         <title>{pageTitle}</title>
//         <meta name="viewport" content="initial-scale=1.0, width=device-width" />
//       </Head>
//       <AppBar position="static" sx={{ backgroundColor: '#000000' }}>
//         <Toolbar>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             {pageTitle}
//           </Typography>
//           <Box sx={{ display: 'flex', alignItems: 'center' }}>
//             <IconButton onClick={toggleDarkMode} sx={{ color: 'inherit' }}>
//               {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
//             </IconButton>
//           </Box>
//         </Toolbar>
//       </AppBar>
//       <Box sx={{ marginTop: '64px', backgroundColor: darkMode ? '#333333' : '#ffffff', minHeight: 'calc(100vh - 64px)', transition: 'background-color 0.3s ease' }}>
//         {children}
//       </Box>
//     </>
//   );
// };

// export default Layout;

// import { useState } from 'react';
// import Head from 'next/head';
// import Link from 'next/link';
// import { AppBar, Toolbar, Typography, IconButton, Box, Switch } from '@mui/material';
// import Brightness4Icon from '@mui/icons-material/Brightness4';
// import Brightness7Icon from '@mui/icons-material/Brightness7';
// import { useDarkMode } from '@/contexts/darkModeContext';

// const Layout = ({ children, pageTitle }) => {
//   const {darkMode, toggleDarkMode} = useDarkMode()

// //   const toggleDarkMode = () => {
// //     setDarkMode(!darkMode);
// //     // You can persist dark mode preference here using localStorage or cookies
// //   };

//   return (
//     <>
//       <Head>
//         <title>{pageTitle}</title>
//         <meta name="viewport" content="initial-scale=1.0, width=device-width" />
//       </Head>
//       <AppBar position="static" sx={{ backgroundColor: '#000000' }}>
//         <Toolbar>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'white' }}>
//             {pageTitle}
//           </Typography>
//           <Box sx={{ display: 'flex', alignItems: 'center' }}>
//             <IconButton onClick={toggleDarkMode} sx={{ color: 'inherit' }}>
//               {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
//             </IconButton>
//           </Box>
//         </Toolbar>
//       </AppBar>
//       <Box sx={{ marginTop: '64px', backgroundColor: darkMode ? '#333333' : '#ffffff', minHeight: 'calc(100vh - 64px)', transition: 'background-color 0.3s ease' }}>
//         {children}
//       </Box>
//     </>
//   );
// };

// export default Layout;

// import { useState } from 'react';
// import Head from 'next/head';
// import { AppBar, Toolbar, Typography, IconButton, Box } from '@mui/material';
// import Brightness4Icon from '@mui/icons-material/Brightness4';
// import Brightness7Icon from '@mui/icons-material/Brightness7';
// import { useDarkMode } from '@/contexts/darkModeContext';
// import { useRouter } from 'next/router';

// const Layout = ({ children, pageTitle }) => {
//   const { darkMode, toggleDarkMode } = useDarkMode();
//   return (
//     <>
//       <Head>
//         <title>{pageTitle}</title>
//         <meta name="viewport" content="initial-scale=1.0, width=device-width" />
//       </Head>
//       <AppBar position="static" sx={{ backgroundColor: darkMode ? '#333' : '#1976d2' }}>
//         <Toolbar>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             {pageTitle}
//           </Typography>
//           <Box sx={{ display: 'flex', alignItems: 'center' }}>
//             <IconButton onClick={toggleDarkMode} sx={{ color: 'inherit' }}>
//               {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
//             </IconButton>
//           </Box>
//         </Toolbar>
//       </AppBar>
//       <Box sx={{ marginTop: '50px' }}>
//         {children}
//       </Box>
//     </>
//   );
// };

// export default Layout;

// import { useState, useEffect} from 'react';
// import Head from 'next/head';
// import { AppBar, Toolbar, Typography, IconButton, Box, Breadcrumbs, Link } from '@mui/material';
// import Brightness4Icon from '@mui/icons-material/Brightness4';
// import Brightness7Icon from '@mui/icons-material/Brightness7';
// import { useDarkMode } from '@/contexts/darkModeContext';
// import { useRouter } from 'next/router';

// const Layout = ({ children, pageTitle }) => {
//   const { darkMode, toggleDarkMode } = useDarkMode();
//   const router = useRouter();

//   const [breadcrumb, setBreadcrumb] = useState([]);

//   useEffect(() => {
//     const pathSegments = router.asPath.split('/').filter(segment => segment);
//     let breadcrumbItems = [];

//     if (pathSegments.length === 0) {
//       breadcrumbItems = [<Typography key="root">Flows and Datasets</Typography>];
//     } else if (pathSegments[0] === 'category' && pathSegments.length === 1) {
//       breadcrumbItems = [
//         <Link key="flow" href="/flow">Flows and Datasets</Link>,
//         <Typography key="category">Categories</Typography>
//       ];
//     } else if (pathSegments[0] === 'category' && pathSegments.length === 2) {
//       const rowId = pathSegments[1];
//       // Here we should fetch the content of the first column of the row with the given rowId.
//       // This example assumes the content is fetched and stored in `firstColumnContent`.
//       const firstColumnContent = "First Column Content"; // Replace this with actual fetch logic.

//       breadcrumbItems = [
//         <Link key="flow" href="/flow">Flows and Datasets</Link>,
//         <Link key="category" href="/category">Data</Link>,
//         <Typography key="row">{firstColumnContent}</Typography>
//       ];
//     } else {
//       breadcrumbItems = [<Typography key="root">Flows and Datasets</Typography>];
//     }

//     setBreadcrumb(breadcrumbItems);
//   }, [router.asPath]);

//   return (
//     <>
//       <Head>
//         <title>{pageTitle}</title>
//         <meta name="viewport" content="initial-scale=1.0, width=device-width" />
//       </Head>
//       <AppBar position="static" sx={{ backgroundColor: darkMode ? '#333' : '#1976d2' }}>
//         <Toolbar>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             {pageTitle}
//           </Typography>
//           <Box sx={{ display: 'flex', alignItems: 'center' }}>
//             <IconButton onClick={toggleDarkMode} sx={{ color: 'inherit' }}>
//               {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
//             </IconButton>
//           </Box>
//         </Toolbar>
//       </AppBar>
//       <Box sx={{ marginTop: '50px'}}>
//         <Breadcrumbs aria-label="breadcrumb" sx={{margin:'30px'}}>
//           {breadcrumb}
//         </Breadcrumbs>
//         {children}
//       </Box>
//     </>
//   );
// };

// export default Layout;

// import { useState, useEffect } from 'react';
// import Head from 'next/head';
// import { AppBar, Toolbar, Typography, IconButton, Box, Breadcrumbs, Link } from '@mui/material';
// import Brightness4Icon from '@mui/icons-material/Brightness4';
// import Brightness7Icon from '@mui/icons-material/Brightness7';
// import { useDarkMode } from '@/contexts/darkModeContext';
// import { useRouter } from 'next/router';

// const Layout = ({ children, pageTitle }) => {
//   const { darkMode, toggleDarkMode } = useDarkMode();
//   const router = useRouter();
//   const [isMounted, setIsMounted] = useState(false);

//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   const getBreadcrumbs = () => {
//     if (!isMounted) return null;

//     const pathSegments = router.asPath.split('/').filter(segment => segment);
//     let breadcrumbs = [];

//     // Root breadcrumb (always "Flows and Datasets")
//     breadcrumbs.push(
//       <Typography
//         key="root"
//         onClick={() => router.push('/flow')}
//         sx={{ cursor: 'pointer', textDecoration: 'underline' }}
//       >
//         Flows and Datasets
//       </Typography>
//     );

//     if (pathSegments.length === 0) {
//       return breadcrumbs;
//     }

//     if (pathSegments[0] === 'category' && pathSegments.length === 1) {
//       breadcrumbs.push(
//         <Typography key="category">Categories</Typography>
//       );
//     } else if (pathSegments[0] === 'category' && pathSegments.length === 2) {
//       const rowId = pathSegments[1];
//       const firstColumnContent = "First Column Content"; // Replace with actual fetch logic.

//       breadcrumbs.push(
//         <Link key="category" href="/category">
//           Categories
//         </Link>,
//         <Typography key="row">{firstColumnContent}</Typography>
//       );
//     }

//     return breadcrumbs;
//   };

//   return (
//     <>
//       <Head>
//         <title>{pageTitle}</title>
//         <meta name="viewport" content="initial-scale=1.0, width=device-width" />
//       </Head>
//       <AppBar position="static" sx={{ backgroundColor: darkMode ? '#333' : '#1976d2' }}>
//         <Toolbar>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             {pageTitle}
//           </Typography>
//           <Box sx={{ display: 'flex', alignItems: 'center' }}>
//             <IconButton onClick={toggleDarkMode} sx={{ color: 'inherit' }}>
//               {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
//             </IconButton>
//           </Box>
//         </Toolbar>
//       </AppBar>
//       <Box sx={{ marginTop: '40px' }}>
//         <Breadcrumbs aria-label="breadcrumb" sx={{marginLeft:'30px'}}>
//           {getBreadcrumbs()}
//         </Breadcrumbs>
//         {children}
//       </Box>
//     </>
//   );
// };

// export default Layout;



// import { useState, useEffect } from 'react';
// import Head from 'next/head';
// import { AppBar, Toolbar, Typography, IconButton, Box, Breadcrumbs, Link } from '@mui/material';
// import Brightness4Icon from '@mui/icons-material/Brightness4';
// import Brightness7Icon from '@mui/icons-material/Brightness7';
// import { useDarkMode } from '@/contexts/darkModeContext';
// import { useRouter } from 'next/router';

// const Layout = ({ children, pageTitle }) => {
//   const { darkMode, toggleDarkMode } = useDarkMode();
//   const router = useRouter();
//   const [isMounted, setIsMounted] = useState(false);

//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   const getBreadcrumbs = () => {
//     if (!isMounted) return null;

//     const pathSegments = router.asPath.split('/').filter(segment => segment);
//     let breadcrumbs = [];

//     // Root breadcrumb (always "Flows and Datasets")
//     breadcrumbs.push(
//       <Typography
//         key="root"
//         onClick={() => router.push('/flow')}
//         sx={{
//           cursor: 'pointer',
//           textDecoration: 'underline',
//           color: darkMode ? '#fff' : '#000'
//         }}
//       >
//         Flows and Datasets
//       </Typography>
//     );

//     if (pathSegments.length === 0) {
//       return breadcrumbs;
//     }

//     if (pathSegments[0] === 'category' && pathSegments.length === 1) {
//       breadcrumbs.push(
//         <Typography key="category" sx={{ color: darkMode ? '#fff' : '#000' }}>
//           Data
//         </Typography>
//       );
//     } else if (pathSegments[0] === 'category' && pathSegments.length === 2) {
//       const rowId = pathSegments[1];
//       const firstColumnContent = "First Column Content"; // Replace with actual fetch logic.

//       breadcrumbs.push(
//         <Link key="category" href="/category" sx={{ color: darkMode ? '#fff' : '#000' }}>
//           Data
//         </Link>,
//         <Typography key="row" sx={{ color: darkMode ? '#fff' : '#000' }}>
//           {firstColumnContent}
//         </Typography>
//       );
//     }

//     return breadcrumbs;
//   };

//   return (
//     <>
//       {/* <Head>
//         <title>{pageTitle}</title>
//         <meta name="viewport" content="initial-scale=1.0, width=device-width" />
//       </Head> */}
//       <AppBar position="static" sx={{ backgroundColor: darkMode ? '#000000' : '#1976d2' }}>
//         <Toolbar>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1,marginLeft:'7px'}}>
//             {pageTitle}
//           </Typography>
//           <Box sx={{ display: 'flex', alignItems: 'center' }}>
//             <IconButton onClick={toggleDarkMode} sx={{ color: 'inherit' }}>
//               {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
//             </IconButton>
//           </Box>
//         </Toolbar>
//       </AppBar>
//       <Box sx={{ marginTop: '0px', backgroundColor: darkMode ? '#222' : '#fff',}}>
//         <Breadcrumbs aria-label="breadcrumb" sx={{marginLeft:'30px',color:darkMode? "fff" : '#000'}}>
//           {getBreadcrumbs()}
//         </Breadcrumbs>
//         {children}
//       </Box>
//     </>
//   );
// };

// export default Layout;

// import { useState, useEffect } from 'react';
// import Head from 'next/head';
// import { AppBar, Toolbar, Typography, IconButton, Box, Breadcrumbs, Link } from '@mui/material';
// import Brightness4Icon from '@mui/icons-material/Brightness4';
// import Brightness7Icon from '@mui/icons-material/Brightness7';
// import { useDarkMode } from '@/contexts/darkModeContext';
// import { useRouter } from 'next/router';

// const Layout = ({ children, pageTitle }) => {
//   const { darkMode, toggleDarkMode } = useDarkMode();
//   const router = useRouter();
//   const [isMounted, setIsMounted] = useState(false);

//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   const getBreadcrumbs = () => {
//     if (!isMounted) return null;

//     const pathSegments = router.asPath.split('/').filter(segment => segment);
//     let breadcrumbs = [];

//     // Root breadcrumb (always "Flows and Datasets")
//     breadcrumbs.push(
//       <Typography
//         key="root"
//         onClick={() => router.push('/flow')}
//         sx={{
//           cursor: 'pointer',
//           textDecoration: 'underline',
//           color: darkMode ? '#fff' : '#000'
//         }}
//       >
//         Flows and Datasets
//       </Typography>
//     );

//     if (pathSegments.length === 0) {
//       return breadcrumbs;
//     }

//     if (pathSegments[0] === 'category' && pathSegments.length === 1) {
//       breadcrumbs.push(
//         <Typography key="category" sx={{ color: darkMode ? '#fff' : '#000' }}>
//           Data
//         </Typography>
//       );
//     } else if (pathSegments[0] === 'category' && pathSegments.length === 2) {
//       const rowId = pathSegments[1];

//       breadcrumbs.push(
//         <Link key="category" href="/category" sx={{ color: darkMode ? '#fff' : '#000' }}>
//           Data
//         </Link>,
//         <Typography key="row" sx={{ color: darkMode ? '#fff' : '#000' }}>
//           {rowId}
//         </Typography>
//       );
//     }

//     return breadcrumbs;
//   };

//   return (
//     <>
//       <Head>
//         <title>{pageTitle}</title>
//         <meta name="viewport" content="initial-scale=1.0, width=device-width" />
//       </Head>
//       <AppBar position="static" sx={{ backgroundColor: darkMode ? '#000000' : '#1976d2' }}>
//         <Toolbar>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginLeft: '7px' }}>
//             {pageTitle}
//           </Typography>
//           <Box sx={{ display: 'flex', alignItems: 'center' }}>
//             <IconButton onClick={toggleDarkMode} sx={{ color: 'inherit' }}>
//               {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
//             </IconButton>
//           </Box>
//         </Toolbar>
//       </AppBar>
//       <Box sx={{ marginTop: '0px', backgroundColor: darkMode ? '#222' : '#fff' }}>
//         <Breadcrumbs aria-label="breadcrumb" sx={{ marginLeft: '30px', color: darkMode ? '#fff' : '#000' }}>
//           {getBreadcrumbs()}
//         </Breadcrumbs>
//         {children}
//       </Box>
//     </>
//   );
// };

// export default Layout;

// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import Head from 'next/head';
// import { AppBar, Toolbar, Typography, IconButton, Box, Breadcrumbs} from '@mui/material';
// import Brightness4Icon from '@mui/icons-material/Brightness4';
// import Brightness7Icon from '@mui/icons-material/Brightness7';
// import { useDarkMode } from '@/contexts/darkModeContext';
// import { useRouter } from 'next/router';

// const Layout = ({ children, pageTitle }) => {
//   const { darkMode, toggleDarkMode } = useDarkMode();
//   const router = useRouter();
//   const [isMounted, setIsMounted] = useState(false);

//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   const getBreadcrumbs = () => {
//     if (!isMounted) return null;

//     const pathSegments = router.asPath.split('/').filter(segment => segment);
//     let breadcrumbs = [];

//     // Root breadcrumb (always "Flows and Datasets")
//     breadcrumbs.push(
//       <Typography
//         key="root"
//         onClick={() => router.push('/flow')}
//         sx={{
//           cursor: 'pointer',
//           textDecoration: 'underline',
//           color: darkMode ? '#fff' : '#000'
//         }}
//       >
//         Flows and Datasets
//       </Typography>
//     );

//     if (pathSegments.length === 0) {
//       return breadcrumbs;
//     }

//     if (pathSegments[0] === 'category' && pathSegments.length === 1) {
//       breadcrumbs.push(
//         <Typography key="category" sx={{ color: darkMode ? '#fff' : '#000' }}>
//           Data
//         </Typography>
//       );
//     } else if (pathSegments[0] === 'category' && pathSegments.length === 2) {
//       const rowId = pathSegments[1];

//       breadcrumbs.push(
//         <Link key="category" href="/category" sx={{ color: darkMode ? '#fff' : '#000' }}>
//           Data
//         </Link>,
//         <Typography key="row" sx={{ color: darkMode ? '#fff' : '#000' }}>
//           {rowId}
//         </Typography>
//       );
//     }

//     return breadcrumbs;
//   };

//   return (
//     <>
//       <Head>
//         <title>{pageTitle}</title>
//         <meta name="viewport" content="initial-scale=1.0, width=device-width" />
//       </Head>
//       <AppBar position="static" sx={{ backgroundColor: darkMode ? '#000000' : '#1976d2' }}>
//         <Toolbar sx={{ justifyContent: 'space-between' }}>
//           <Typography variant="h4" sx={{ marginRight: 'auto',marginLeft:'8px' ,color:darkMode?'#366e50' : '#000000'}}>
//             .august
//           </Typography>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
//             {pageTitle}
//           </Typography>
//           <Box sx={{ display: 'flex', alignItems: 'center' }}>
//             <IconButton onClick={toggleDarkMode} sx={{ color: 'inherit' }}>
//               {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
//             </IconButton>
//           </Box>
//         </Toolbar>
//       </AppBar>
//       <Box sx={{ marginTop: '0px', backgroundColor: darkMode ? '#222' : '#fff', }}>
//         <Breadcrumbs aria-label="breadcrumb" sx={{ marginLeft: '30px', color: darkMode ? '#fff' : '#000' }}>
//           {getBreadcrumbs()}
//         </Breadcrumbs>
//         {children}
//       </Box>
//     </>
//   );
// };

// export default Layout;

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { AppBar, Toolbar, Typography, IconButton, Box, Breadcrumbs } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useDarkMode } from '@/contexts/darkModeContext';
import { useRouter } from 'next/router';

const Layout = ({ children, pageTitle }) => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const getBreadcrumbs = () => {
    if (!isMounted) return null;

    const pathSegments = router.asPath.split('/').filter(segment => segment);
    let breadcrumbs = [];


    breadcrumbs.push(
      <Typography
        key="root"
        onClick={() => router.push('/flow')}
        sx={{
          cursor: 'pointer',
          textDecoration: 'underline',
          color: darkMode ? '#fff' : '#000'
        }}
      >
        Flows and Datasets
      </Typography>
    );
    const queryParams = router.query;
    if (queryParams.file) {
      const fileName = queryParams.file.replace('.csv', '');
      breadcrumbs.push(
        <Link key={fileName} href={`/category?file=${queryParams.file}`} passHref>
          <Typography sx={{ color: darkMode ? '#fff' : '#000', marginRight: '8px', cursor: 'pointer' }}>
            {fileName}
          </Typography>
        </Link>
      );
    }
    const rowId = pathSegments[1];
    if (rowId && pathSegments[0] === 'category') {
      breadcrumbs.push(
        <Typography key={rowId} sx={{ color: darkMode ? '#fff' : '#000' }}>
          {rowId[0]}
        </Typography>
      );
    }

    return breadcrumbs;
  };

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <AppBar position="static" sx={{ backgroundColor: darkMode ? '#000000' : '#1976d2' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h4" sx={{ marginRight: 'auto', marginLeft: '8px', color: darkMode ? '#366e50' : '#000000' }}>
            .august
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
            {pageTitle}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton onClick={toggleDarkMode} sx={{ color: 'inherit' }}>
              {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Box sx={{ marginTop: '0px', backgroundColor: darkMode ? '#222' : '#fff' }}>
        <Breadcrumbs aria-label="breadcrumb" sx={{ marginLeft: '30px', color: darkMode ? '#fff' : '#000' }}>
          {getBreadcrumbs()}
        </Breadcrumbs>
        {children}
      </Box>
    </>
  );
};

export default Layout;
