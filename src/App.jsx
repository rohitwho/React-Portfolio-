
import Socials from "./pages/Socials";
import Portfolio from "./Components/Main";
import { NextUIProvider } from "@nextui-org/react";


import "./styles.css";
import { useState } from "react";

function App() {
const [mode, setMode] = useState("light")

// "dark text-foreground bg-background"
function handleTheme (){
  setMode("light")
}


  return (
    <div>
           <main className= {`${mode } text-foreground bg-background` }>
      <NextUIProvider >
        <Portfolio />

        <Socials />
      </NextUIProvider>
      </main>
    </div>
  );
}

export default App;
