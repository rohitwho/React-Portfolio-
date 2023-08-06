
import Socials from "./pages/Socials";
import Portfolio from "./Components/Main";
import { NextUIProvider } from "@nextui-org/react";

import "./styles.css";

function App() {
  return (
    <div>
      <NextUIProvider>
        <Portfolio />

        <Socials />
      </NextUIProvider>
    </div>
  );
}

export default App;
