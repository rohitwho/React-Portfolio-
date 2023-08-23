import React, { useState } from "react";
import Header from "./Home/header";
import Hero from "./Home/hero";
import Project from "./projects/project";
import About from "../pages/About-Me";

import Contact from "./contact/contact";

export default function Portfolio() {
  const [currentPage, setCurrentPage] = React.useState("Home");

  const servePage = () => {
    if (currentPage === "Home") {
      return <Hero />;
    }
    if (currentPage === "project") {
      return <Project />;
    }
    if (currentPage === "about") {
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

      {servePage()}
    </div>
  );
}
