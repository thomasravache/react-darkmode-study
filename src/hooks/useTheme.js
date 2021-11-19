import { useState, useEffect } from 'react';

const useTheme = () => {
  const [theme, setTheme] = useState();
  const rootElement = document.documentElement;

  const changeThemeTo = (toggleTheme) => {
    localStorage.setItem('theme', toggleTheme);
    setTheme(toggleTheme);
  }

  useEffect(() => {
    let localStorageTheme = localStorage.getItem('theme');
    if (localStorage === null) {
      localStorageTheme = localStorage.setItem('theme', 'light');
    }
    setTheme(localStorageTheme);
    rootElement.className = theme;
    rootElement.style = theme === 'dark' ? 'color-scheme: dark' : 'color-scheme: light';
  }, [theme, rootElement]);

  return { theme: theme, changeThemeTo };
};

export default useTheme;
