import React, { Dispatch, SetStateAction, useState, useMemo } from 'react';
import { ThemeType } from '../themes';
import { getInitialTheme } from '../utils';

interface ThemeContextProps {
  theme: ThemeType;
  setTheme: Dispatch<SetStateAction<ThemeType>>;
}

interface ThemeProviderProps {
  children: React.ReactNode;
}

const initialTheme = getInitialTheme();
const ThemeContext = React.createContext({} as ThemeContextProps);

function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<ThemeType>(initialTheme);

  const providerValue = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={providerValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => React.useContext(ThemeContext);
export default ThemeProvider;
