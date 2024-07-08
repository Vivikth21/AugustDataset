// import { createContext, useContext, useState } from 'react';

// // Create a context for managing edit status
// export const EditContext = createContext();

// // Custom hook to use EditContext
// export const useEditContext = () => useContext(EditContext);

// // Provider component to wrap your application with the context
// export const EditProvider = ({ children }) => {
//   const [editedRows, setEditedRows] = useState([]);

//   // Function to add a row to editedRows
//   const addEditedRow = (rowId) => {
//     if (!editedRows.includes(rowId)) {
//       setEditedRows([...editedRows, rowId]);
//     }
//   };

//   // Function to remove a row from editedRows
//   const removeEditedRow = (rowId) => {
//     setEditedRows(editedRows.filter(id => id !== rowId));
//   };

//   return (
//     <EditContext.Provider value={{ editedRows, addEditedRow, removeEditedRow }}>
//       {children}
//     </EditContext.Provider>
//   );
// };

import { createContext, useContext, useState, useEffect } from 'react';

// Create a context for managing edit status
export const EditContext = createContext();

// Custom hook to use EditContext
export const useEditContext = () => useContext(EditContext);

// Provider component to wrap your application with the context
export const EditProvider = ({ children }) => {
  const [editedRows, setEditedRows] = useState([]);

  // Initialize editedRows from localStorage on component mount
  useEffect(() => {
    const storedEditedRows = JSON.parse(localStorage.getItem('editedRows')) || [];
    setEditedRows(storedEditedRows);
  }, []);

  // Function to add a row to editedRows
  const addEditedRow = (rowId) => {
    if (!editedRows.includes(rowId)) {
      const newEditedRows = [...editedRows, rowId];
      setEditedRows(newEditedRows);
      localStorage.setItem('editedRows', JSON.stringify(newEditedRows)); // Update localStorage here
    }
  };

  // Function to remove a row from editedRows
  const removeEditedRow = (rowId) => {
    const newEditedRows = editedRows.filter(id => id !== rowId);
    setEditedRows(newEditedRows);
    localStorage.setItem('editedRows', JSON.stringify(newEditedRows)); // Update localStorage here
  };

  return (
    <EditContext.Provider value={{ editedRows, addEditedRow, removeEditedRow }}>
      {children}
    </EditContext.Provider>
  );
};
