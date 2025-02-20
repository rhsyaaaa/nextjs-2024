/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
 
// contexts/AppContext.tsx
import { createContext, useState, ReactNode, useContext } from 'react';
 
// Tentukan tipe untuk nilai yang disediakan oleh konteks
interface AppContextType {
  theme: string;
  toggleTheme: () => void;
 
}
 
// Buat nilai default untuk konteks
const defaultContextValue: AppContextType = {
  theme: 'light',
  toggleTheme: () => {},
 
};
 
// Buat context dengan nilai default yang valid
export const AppContext = createContext<AppContextType>(defaultContextValue);
 
interface AppProviderProps {
  children: ReactNode;
}
 
export function AppProvider({ children }: AppProviderProps) {
  const [theme, setTheme] = useState<string>('light');
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
 
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };
 
 
 
  return (
    <AppContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
}