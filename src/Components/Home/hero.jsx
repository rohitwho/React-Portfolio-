import React from 'react'
import resume from "./resume.pdf"
// import img from "src/assets/img.jpg"
export default function hero() {
    function dowloadPdf(){
    fetch(resume).then(res =>{
        res.blob().then (blob =>{
const url = window.URL.createObjectURL(blob)
let alink = document.createElement('a');
                alink.href = url;
                alink.download = 'resume.pdf';
                alink.click();
        })
    })
    }
  return (
    <main className='Hero-Main'>
        <section className='Hero-section'>
            <h1>Hello,I am Rohit .< br></br>I am Full stack Developer</h1>
            <button onClick ={dowloadPdf} className="Download">Download CV</button>
        
        
          </section>
          <section className="Hero-image"><img  className = "hero-img" src= "src/assets/img.jpg" alt="" />
        
          
          </section>
    </main>
  )
}
