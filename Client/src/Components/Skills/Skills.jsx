import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import Skill from "../../pages/About-Animation/animation4.json";
import LinearProgress from "@mui/material/LinearProgress";

function Skills() {
  const skillsInfo = [
    { id: 1, Language: "Javascript", skillValue: 90 },
    { id: 2, Language: "React", skillValue: 95 },
    { id: 3, Language: "MongoDb", skillValue: 90 },
    { id: 4, Language: "MySql", skillValue: 87 },
    { id: 5, Language: "HTML5", skillValue: 95 },
    { id: 6, Language: "CSS3", skillValue: 95 },
    { id: 7, Language: "GraphQl", skillValue: 80 },
    { id: 8, Language: "Express", skillValue: 85 },
  ];

  return (
  
    <main className="Skills-Wrapper">
      <h1 className="Skill-H1"> SkillSet</h1>
      <section className="Skills-Container">
        <main className="Skills-Animation">
          <Lottie animationData={Skill}></Lottie>
        </main>
        <aside className="skills-Technical">
            {skillsInfo.map((info) => (
          <ul key={info.id}  className="Skill-UnorderdList">
              <li  className="Skill-List">
             
                <span >
               {info.Language}
                </span>
                <span>
                {info.skillValue}%
                </span>
              </li>
              <LinearProgress  sx={{borderRadius:"10px",height:"4px"} } variant="determinate" value={info.skillValue} />
      
      
          </ul>
            ))}
        </aside>
      </section>
    </main>
  );
}

export default Skills;
