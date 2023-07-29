import React ,{useState}from "react"; 
import Header from  "./Home/header";
import Hero from "./Home/hero";
import Projects from "./projects/project";
import Contact from "./contact/contact";
import About from "../pages/About-Me";




export default function Portfolio(){

    const [currentPage,setCurrentPage ]= React.useState("Home")



    const servePage=()=>{
        if(currentPage === "Home"){
            return <Hero/>
        }
      
        if(currentPage === "Contact"){
            return <Contact/>
        }
       
    }
    const handlePageChange = (page) => setCurrentPage(page);

return<div>
<Header handlePageChange={handlePageChange} />
    
    
     {servePage()}</div>




}



