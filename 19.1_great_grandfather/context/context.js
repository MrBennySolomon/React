import { useState, createContext, useContext } from 'react';

const AppContext = createContext([]);

const AppProvider = ({ children }) => {
  const [presents, setPresents] = useState([]);

  const addPresents = (array) => {
    setPresents(...presents,array);
  }

  return (
    <AppContext.Provider
      value={{
        presents,
        addPresents
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
