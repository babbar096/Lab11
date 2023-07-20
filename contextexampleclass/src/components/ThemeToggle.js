import { useContext } from "react";
import ThemeContext from "../ThemeContext";

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

export default ThemeToggler;