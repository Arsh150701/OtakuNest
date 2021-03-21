import React from "react";
import { useContext, createContext } from "react";

const ThemeContext = createContext({});

export const useThemeContext = () => {
  return useContext(ThemeContext);
};

type Props = {
  children: JSX.Element;
};

const ThemeProvider = ({ children }: Props) => {
  const theme = {};

  const value = { theme };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
