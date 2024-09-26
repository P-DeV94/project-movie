import './mode.css';
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa6";
import { ThemeContext } from "../../store/themeContext";
import { useContext } from "react";

const Mode = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button className="mode" onClick={toggleTheme}>
      {theme === 'dark' ? <FaMoon color="#fff" /> : <FaSun color="#fff" />}
    </button>
  );
};

export default Mode;