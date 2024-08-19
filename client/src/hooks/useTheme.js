import { useState, useEffect } from "react";

const useTheme = () => {
  const getPreferredTheme = () =>
    window.matchMedia &&
    window.matchMedia("(prefers-color-schema:dark)").matches
      ? "dark"
      : "light";

  const initializeTheme = () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme;
    const preferredTheme = getPreferredTheme();
    localStorage.setItem("theme", preferredTheme);
    return preferredTheme;
  };

  const [theme, setTheme] = useState(initializeTheme);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return { theme, toggleTheme };
};

export default useTheme;
