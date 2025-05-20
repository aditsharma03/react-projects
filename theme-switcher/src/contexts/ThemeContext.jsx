import { createContext, useContext, useEffect, useState } from "react";


export const light = "light";
export const dark = "dark";


export const ThemeContext = createContext({
  theme: light,
  setDarkTheme: () => {},
  setLightTheme: () => {},
})



export const ThemeContextProvider = ({children}) => {

  const [theme, setTheme] = useState("light");

  const setLightTheme = () => {
    setTheme(light);
    console.log("light theme set");
  }
  const setDarkTheme = () => {
    setTheme(dark);
    console.log("dark theme set");
  }

  useEffect(() => {
    document.querySelector("html").classList.remove(light, dark);
    document.querySelector("html").classList.add(theme);
  }, [theme]);
  
  return (
  <>
      <ThemeContext.Provider value={{theme, setDarkTheme, setLightTheme}}>
        {
          children
        }
      </ThemeContext.Provider>
    </>
  )
}

export const useThemeContext = () => {
  const themeContext =  useContext(ThemeContext);
  return themeContext;
}

