import React from "react";
import fitzone from "../../assets/FitZone.png";
import rentix from "../../assets/Rentix.jpeg";
import bookSearch from "../../assets/Book-search.jpeg";
import techSavvy from "../../assets/TechSavvy.png";
import MusicIO from "../../assets/MusicIO.jpeg";
import ShopAll from '../../assets/ShopAll.png'
import {
  DiCss3Full,
  DiHtml5,
  DiJsBadge,
  DiHeroku,
  DiNodejs,
  DiNpm,
  DiReact,
  DiBootstrap,
  DiDatabase,
} from "react-icons/di";
import { motion,useViewportScroll } from "framer-motion"

import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import Project from '../Project-Component/Project'

export default function project() {

  const projects = [
    {
      key: "0",
      projectName: "Shop-All",
      gitHubUrl: "https://github.com/rohitwho/e-com",
      img: ShopAll,
      liveUrl: "https://shopall-7d84df423472.herokuapp.com/",
      description:
        "Welcome to Shop-All, your one-stop destination for all your online shopping needs. Discover a world of endless possibilities as you explore our wide range of products, from fashion and electronics to home decor and more. With easy navigation, secure payments, and lightning-fast delivery, we make your online shopping experience seamless and enjoyable. Shop with confidence and style at Shop-All today! ",
      technologiesUsed: [
        <DiReact />,
        <DiNodejs />,
        <DiHtml5 />,
        <DiCss3Full />,
        <DiJsBadge />,
        <DiDatabase />,
        <DiHeroku />,
        <DiBootstrap />,
      ],
    },
    {
      key: "1",
      projectName: "Music IO",
      gitHubUrl: "https://github.com/rohitwho/Rentix",
      img: MusicIO,
      liveUrl: "https://musicio0-b0f9cf42ed89.herokuapp.com/",
      description:
        "Music IO Beta is a  React web platform where people can Listen to the Latest Music and share their opinions about their favourite artists through the Chatbox Feature Powered by Socket IO and make new friends with common music interests and Chat with them. ",
      technologiesUsed: [
        <DiReact />,
        <DiNodejs />,
        <DiHtml5 />,
        <DiCss3Full />,
        <DiJsBadge />,
        <DiDatabase />,
        <DiHeroku />,
        <DiBootstrap />,
      ],
    },
    {
      key: "2",
      projectName: "FitZone",
      gitHubUrl: "https://github.com/rohitwho/Fit-Zone",
      liveUrl: "https://rohitwho.github.io/Fit-Zone/",
      img: fitzone,
      description:
        "Welcome to FitZone , your ultimate online workout trainer for all things fitness and wellness. At FitZone, we believe that everyone has the potential to become their best selves.",
      technologiesUsed: [
        <DiHtml5 />,
        <DiCss3Full />,
        <DiJsBadge />,
        <DiBootstrap />,
      ],
    },
    {
      key: "3",
      projectName: "Rentix",
      gitHubUrl: "https://github.com/rohitwho/Rentix",
      img: rentix,
      liveUrl: "https://rentix-429c622e6d31.herokuapp.com/",
      description:
        "At Rentix Customers can search and view available venues for their events. The API provides endpoints to retrieve details about each venue, including its capacity, amenities, and pricing.  ",
      technologiesUsed: [
        <DiHtml5 />,
        <DiCss3Full />,
        <DiJsBadge />,
        <DiBootstrap />,
      ],
    },

    {
      key: "4",
      projectName: "Book Search ",
      gitHubUrl: "https://github.com/rohitwho/Book-search-engine",
      img: bookSearch,
      liveUrl: "https://book-search-eng-a5e7ebcdafff.herokuapp.com/",
      description:
        " The book search engine allows users to search for books and provides the option to create a user account. When logged in, users can save and remove books from their account, view their saved books, and logout from the site. The interface is designed to make book searching and account management easy and convenient for users.",
      technologiesUsed: [
        <DiReact />,
        <DiNodejs />,
        <DiHtml5 />,
        <DiCss3Full />,
        <DiJsBadge />,
        <DiDatabase />,
        <DiHeroku />,
        <DiBootstrap />,
      ],
    },
    {
      key: "5",
      projectName: "Tech Savvy",
      gitHubUrl: "https://github.com/rohitwho/Tech-savvy",
      img: techSavvy,
      liveUrl: "https://tech-savvy-d98bc01a66cd.herokuapp.com/",
      description:
        "Tech Savvy is your Personal Space. User Can Feel free to blog about the latest trends and share their thoughts and views.  ",
      technologiesUsed: [
        <DiNodejs />,
        <DiHtml5 />,
        <DiCss3Full />,
        <DiJsBadge />,
        <DiDatabase />,
        <DiHeroku />,
      ],
    },
  ];

  return (
    <motion.div 
   id ="Project" className="Project-Wrapper">
      <aside>
        <h2 className="Project-Heading"> Featured Projects</h2>
      </aside>
      <div id="Projects" className="Project-Main">
        <section className="Primary-Project">
          {projects?.map((content) => (
            <Project
            key={content}
            Image={content.img} 
            ProjectHeading={content.projectName}
            ProjectName={content.projectName}
            ProjectInformation={content.description}
            TechUsed={content.technologiesUsed}
           Alt={content.projectName}
           ViewLive={content.liveUrl}
           SourceCode={content.gitHubUrl}
            />
            
          
          ))}
        </section>
      </div>
    </motion.div>
  );
}


