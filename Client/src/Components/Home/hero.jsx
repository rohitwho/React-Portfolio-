import React from "react";
import resume from "./RohitNayyarResume.pdf";
import { Button, Link } from "@nextui-org/react";
import heroimg from "../../assets/hero.gif"

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
        <div className=" flex gap-4"> 
          <Button color="primary" onClick={dowloadPdf} className="Download">
            Download CV &#8595;
          </Button>
          <Button color="success"  className="Download"> <a href = "#Project">My Work &#8599;</a></Button>
        </div>
      </section>
      <section className="Hero-image">
        <img className="hero-img" src={heroimg} alt="A GUY ON COMPUTER" />
      </section>
    </main>
  );
}
