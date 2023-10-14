import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import Skill from "../../pages/About-Animation/animation4.json";
import { CircularProgress } from "@nextui-org/react";
// import LinearProgress from "@mui/material/LinearProgress";
import LinearProgress from "@mui/material/LinearProgress";
import { color } from "framer-motion";

function Skills() {
  const skillsInfo = [
    { id: 1, Language: "Javascript", skillValue: 90 },
    { id: 2, Language: "React", skillValue: "95" },
    { id: 3, Language: "MongoDb", skillValue: "95" },
    { id: 4, Language: "MySql", skillValue: "95" },
    { id: 5, Language: "HTML5", skillValue: "95" },
    { id: 6, Language: "CSS3", skillValue: "95" },
    { id: 7, Language: "GraphQl", skillValue: "95" },
    { id: 8, Language: "Express", skillValue: "95" },
  ];

  return (
  
    <section className="Skills-Container">

      <main className="Skills-Animation">
        <Lottie animationData={Skill}></Lottie>
      </main>
      <aside className="skills-Technical">
        <ul className="Skill-UnorderdList">
          {skillsInfo.map((info) => (
            <li key={info.id}  className="Skill-List">
              {info.Language}
              <span >
                {info.skillValue}%
              </span>
              <LinearProgress  sx={{borderRadius:"10px",height:"10px"} } variant="determinate" value={info.skillValue} />
            </li>
            
            
          ))}
        </ul>
      </aside>
    </section>
  );
}

export default Skills;
