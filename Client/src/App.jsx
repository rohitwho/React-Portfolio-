import Socials from "./pages/Socials";
import Portfolio from "./Components/Main";
import { NextUIProvider } from "@nextui-org/react";
import { useState, useEffect } from "react";
import SetTheme from "./Components/Context/Theme";
import Project from './Components/projects/project'

import "./styles.css";

function App() {
  const [dayNight, setDayNight] = useState();

  const [mode, setMode] = useState("light");
  useEffect(() => {
    setMode(dayNight ? "dark" : "light");
  }, [dayNight]);

  return (
    <SetTheme.Provider value={{ dayNight, setDayNight }}>
      <main
        data-theme={`${mode}`}
        className={` wrappr ${mode} text-foreground bg-background`}
      >
        <NextUIProvider>
          <Portfolio />
          <Project/>

          <Socials />
        </NextUIProvider>
      </main>
    </SetTheme.Provider>
  );
}

export default App;
