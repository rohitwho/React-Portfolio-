import React, { useState } from "react";
import Header from "./Home/header";
import Hero from "./Home/hero";
import Project from "./projects/project";
import About from "../pages/About-Me";

import Contact from "./contact/contact";

export default function Portfolio() {
  const [currentPage, setCurrentPage] = useState("Home");

  const servePage = () => {
    if (currentPage === "Home") {
      return <Hero />;
    }
    if (currentPage === "Projects") {
      return <Project />;
    }
    if (currentPage === "About") {
      return <About />;
    }

    if (currentPage === "Contact") {
      return <Contact />;
    }
  };
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header handlePageChange={handlePageChange} />

      {servePage() }
    </div>
  );
}
