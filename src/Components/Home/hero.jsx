import React from "react";
import resume from "./resume.pdf";
import { Button } from "@nextui-org/react";

export default function hero() {
  function dowloadPdf() {
    fetch(resume).then((res) => {
      res.blob().then((blob) => {
        const url = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = url;
        alink.download = "resume.pdf";
        alink.click();
      });
    });
  }
  return (
    <main className="Hero-Main">
      <section className="Hero-section">
        <h1 className="Hero-Writing">
          Hello,My Name is Rohit<br></br>
          <span className="span">I am a Full stack Developer</span>
        </h1>
        <Button color="primary" onClick={dowloadPdf} className="Download">
          Download CV &#8595;
        </Button>
      </section>
      <section className="Hero-image">
        <img className="hero-img" src="./React-Portfolio-/src/assets/hero.gif" alt="A GUY ON COMPUTER" />
      </section>
    </main>
  );
}
