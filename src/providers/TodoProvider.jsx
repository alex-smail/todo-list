import { createContext } from 'react';
import { useTodos } from '../hooks';

export const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const store = useTodos();

  return <AppContext.Provider value={store}>{children}</AppContext.Provider>;
};
