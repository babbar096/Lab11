import "./App.css";
import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  return (
    <>
      Current Theme : {theme}
      <ThemeContext.Provider value={{ theme, setTheme }}>
        {children}
      </ThemeContext.Provider>
    </>
  );
};

const ThemeToggler = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  // const nextTheme = (theme = "light" ? "dark" : "light");

  return (
    <button
      onClick={() => {
        if (theme === "light") {
          setTheme("dark");
          document.documentElement.setAttribute("data-theme", "dark");
          return;
        }
        if (theme === "dark") {
          setTheme("light");
          document.documentElement.setAttribute("data-theme", "light");
          return;
        }
        setTheme(theme === "light" ? "dark" : "light");
      }}
    >
      Change Theme
    </button>
  );
};

function App() {
  return (
    <ThemeProvider>
      <ThemeToggler />
    </ThemeProvider>
  );
}

export default App;