import  { createContext, useContext, useState } from 'react';

// Create a context
const DataContext = createContext();

// Custom hook to use the context
export const useData = () => useContext(DataContext);

// Data provider component
export const DataProvider = ({ children }) => {
  const [searchData, setSearchData] = useState(null);

  const setData = (data) => {
    setSearchData(data);
  };

  return (
    <DataContext.Provider value={{ searchData, setData }}>
      {children}
    </DataContext.Provider>
  );
};
