import Socials from "./pages/Socials";
import Portfolio from "./Components/Main";
import { NextUIProvider } from "@nextui-org/react";
import { useState, useEffect } from "react";
import SetTheme from "./Components/Context/Theme";
import Project from './Components/projects/project'
import Section from "./Components/About/About";

import "./styles.css";
// import About from "./pages/About-Me";
import Skills from "./Components/Skills/Skills";
import Footer from "./Components/Footer/Footer";

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
          <Section/>

          <Project/>
          <Skills/>


        <Footer/>
        </NextUIProvider>
      </main>
    </SetTheme.Provider>
  );
}

export default App;
