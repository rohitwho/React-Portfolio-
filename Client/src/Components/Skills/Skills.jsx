import React from "react";
import Lottie from "lottie-react";
import Skill from "../../pages/About-Animation/animation4.json";
import { CircularProgress } from "@nextui-org/react";
import LinearProgress from "@mui/material/LinearProgress";

function Skills() {
  const skillsInfo = [
    { id: 1, Language: "Javascript", skillValue: "90" },
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
        <ul>
          {skillsInfo.map((info) => (
            <li
              key={info.id}
              style={{
                display: "inline-flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "20px",
              }}
            >
   
              {info.Language}
              <span>
       {info.skillValue}%
              </span>
              <LinearProgress variant="determinate" value={info.skillValue} />
            </li>
          ))}
        </ul>
        
      </aside>
    </section>
  );
}

export default Skills;
