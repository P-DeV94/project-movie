import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Movie from "./pages/Movie";
import SinglePage from "./pages/singlePage/SinglePage";
import Mode from "./components/mode/Mode";
import { useContext, createContext, useState, useEffect } from 'react';


const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

function App() {
  return (
    <ThemeProvider>
      <MainContent />
    </ThemeProvider>
  );
}

const MainContent = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme === 'dark' ? 'dark-mode' : 'light-mode'}>
      <BrowserRouter>
        <Mode />
        <Routes>
          <Route path="/" element={<Movie />} />
          <Route path="/:id" element={<SinglePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
