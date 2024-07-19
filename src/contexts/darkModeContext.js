// import React, { createContext, useContext, useState } from 'react';

// const DarkModeContext = createContext();

// export const DarkModeProvider = ({ children }) => {
//   const [darkMode, setDarkMode] = useState(false);

//   const toggleDarkMode = () => {
//     setDarkMode((prevDarkMode) => !prevDarkMode);
//     // You can also persist the dark mode preference here using localStorage or cookies
//   };

//   return (
//     <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
//       {children}
//     </DarkModeContext.Provider>
//   );
// };

// export const useDarkMode = () => useContext(DarkModeContext);
// import React, { createContext, useContext, useState, useEffect } from 'react';

// const DarkModeContext = createContext();

// export const DarkModeProvider = ({ children }) => {
//   const [darkMode, setDarkMode] = useState(() => {
//     if (typeof window !== 'undefined') {
//       const savedMode = localStorage.getItem('darkMode');
//       return savedMode ? JSON.parse(savedMode) : false;
//     }
//     return false;
//   });

//   useEffect(() => {
//     localStorage.setItem('darkMode', JSON.stringify(darkMode));
//   }, [darkMode]);

//   const toggleDarkMode = () => {
//     setDarkMode((prevDarkMode) => !prevDarkMode);
//   };

//   return (
//     <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
//       {children}
//     </DarkModeContext.Provider>
//   );
// };

// export const useDarkMode = () => useContext(DarkModeContext);

import React, { createContext, useContext, useState, useEffect } from 'react';

const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    // Move this logic to a separate function
    return getInitialMode();
  });

  function getInitialMode() {
    if (typeof window !== 'undefined') {
      const savedMode = localStorage.getItem('darkMode');
      if (savedMode !== null) {
        return JSON.parse(savedMode);
      }
    }
    // Default to false if no saved mode or not in browser
    return false;
  }

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem('darkMode', JSON.stringify(newMode));
      return newMode;
    });
  };

  // Force a re-render on initial client-side load
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => useContext(DarkModeContext);