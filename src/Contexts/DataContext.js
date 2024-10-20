import React, { createContext, useState } from 'react';

const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  const [productData, setProductdata] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch('https://cloud.toddleapp.com/assets/mobile/hiring_material/ekart_data_26.json');
      const data = await response.json();
      setProductdata(data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <DataContext.Provider value={{ productData, isLoading, fetchData }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataContextProvider };