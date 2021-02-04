import React, { createContext } from "react";
import useToggleState from "../hooks/useToggleState";
export const ThemeContext = createContext();

export function ThemeProvider(props) {
  const [isDarkMode, toggleDarkMode] = useToggleState(false);
  const toggleTheme = () => {
    toggleDarkMode();
  };
  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
