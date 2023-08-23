import React from "react";
import fitzone from "../../assets/FitZone.png";
import rentix from "../../assets/Rentix.jpeg";
import bookSearch from "../../assets/Book-search.jpeg";
import techSavvy from "../../assets/TechSavvy.png";
import MusicIO from "../../assets/Music.jpeg";
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

import { Card, CardFooter, Image, Button } from "@nextui-org/react";

export default function project() {
  const projects = [
    {
      key: "1",
      projectName: "Music IO",
      gitHubUrl: "https://github.com/rohitwho/Rentix",
      img: MusicIO,
      liveUrl: "https://musicio-d325003c7109.herokuapp.com/",
      description:
        "Music IO is a platform where people can Listen to the Latest Music and share their opinions about their favourite artists and make new friends with common music interests and Chat with them. ",
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
      liveUrl: "https://rentixx-64a3fa155998.herokuapp.com/",
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
    <div className="Project-Wrapper">
      <h2 className="About-Me">Projects</h2>
      <div id="Projects" className="Project-Main">
        <section className=" Primary-Project">
          {projects?.map((content) => (
            <div className="Project-Media"
              style={{
                display: "block",
                borderBottom: "inset",

                margin: "2%",
                width: "70%",
               
              }}
              key={content.key}
            >
              <Card
                isFooterBlurred
                className=" w-50 h-[100px] col-span-12 sm:col-span-5 m-unit-xl"
              >
                <Image
                  removeWrapper
                  alt="Fit Zone"
                  className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                  src={content.img}
                />
                <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-red-100/50 z-10 justify-between">
                  <div>
                    <p className="text-white  underline  text-large ">
                      {content.projectName}
                    </p>
                  </div>
                </CardFooter>
              </Card>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
padding:"1%",

                  width: "100%",
                }}
              >
                <h1
                  style={{
                    fontFamily: "Caveat",
                    fontSize: "2.7rem",
                    borderBottom: "inset",
                  }}
                >
                  {content.projectName}
                </h1>

                <p
                  style={{
                    paddingInline: "1%",
                    margin: "2%",
                  }}
                >
                  {content.description}
                </p>

                <div>
                  <h3
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "10px",
                    }}
                  >
                    Tech Used :{content.technologiesUsed}
                  </h3>
                </div>

                <div
                  style={{
                    margin: "2%",
                    display: "flex",
padding:"5%",
                    gap: "10px",
                  }}
                >
                  <Button color="primary" variant="ghost">
                    <a target="_blank" href={content.gitHubUrl}>
                      Source Code.
                    </a>
                  </Button>

                  <Button color="warning" variant="ghost">
                    <a target="_blank" href={content.liveUrl}>
                      View Live
                    </a>
                  </Button>
                </div>
              </div>


              
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
