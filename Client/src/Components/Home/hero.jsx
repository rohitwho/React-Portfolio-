import React from "react";
import resume from "./RohitNayyarResume.pdf";
import { Button, Link } from "@nextui-org/react";
import heroimg from "../../assets/hero.gif"
import Socials from "../../pages/Socials";
import Hero from "../../pages/About-Animation/hero.json";
import Lottie from "lottie-react";

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
      Full stack Developer<br></br>
          <span className="span"> From Pixels to Products: Building the Web One Line at a Time!</span>
         
        </h1>
        <div className=" flex  justify-between gap-4 "> 
    
            <Button color="primary" onClick={dowloadPdf} className="Download">
              Download CV &#8595;
            </Button>
         
          <Button color="success"  className="Download"> <a href = "#Project">My Work &#8599;</a></Button>
        </div>
        <div className=" pt-5"><Socials/></div>
      </section>
      <section className="Hero-image">
        <Lottie animationData={Hero}></Lottie>
        {/* <img className="hero-img" src={Hero} alt="A GUY ON COMPUTER" /> */}
      </section>
    </main>
  );
}
