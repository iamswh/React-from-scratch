import { useState, useEffect } from "react";
import LetterCard from "./components/LetterCard";
import ModeButton from "./components/ModeButton";
import { ThemeContextProvider } from "./contexts/theme";
// import { useEffect } from "react";

function App() {
  const [themeMode, setThemeMode] = useState();

  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeContextProvider value={{ themeMode, lightTheme, darkTheme }}>
      <h1 className="text-3xl py-7">LightMode DarkMode Practice</h1>
      <ModeButton />
      <LetterCard />
    </ThemeContextProvider>
  );
}

export default App;
