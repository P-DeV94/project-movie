import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Movie from "./pages/Movie";
import SinglePage from "./pages/singlePage/SinglePage";
import Mode from "./components/mode/Mode";
import ThemeContext from "./store/themeContext";
import ThemeProvider from "./store/themeContext";
import { useContext } from 'react';

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
