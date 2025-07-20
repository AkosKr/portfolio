import { useEffect, useState } from "react";


export function useTheme() {
  const [theme, setTheme] = useState<'light'| 'dark'>(() => {
    return localStorage.getItem('theme') === 'dark' ? 'dark' : 'light';
  })
  
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove(theme === 'dark' ? 'light' : 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);
  
  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))

  return {theme, toggleTheme};
}
