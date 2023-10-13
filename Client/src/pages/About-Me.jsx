// import React from "react";
// import { Progress } from "@nextui-org/react";
// import Animation from "./About-Animation/Ani.json";
// import Lottie from "lottie-react";

// export default function About() {
//   return (
//     <div id="About" className="About-Container">
//       {" "}
//       <h1 className="About-Me">About Me</h1>
//       <p className="About-Para">
//         Welcome! I'm<span className="Hero-Writing"> Rohit</span>, a passionate
//         web development wizard. With HTML, CSS, and JavaScript as my spells, I
//         craft captivating and responsive user interfaces. My design artistry
//         ensures stunning visuals and delightful user experiences. Fearless in
//         the face of challenges, I conquer bugs and optimize projects for blazing
//         success. Let's collaborate and weave magic together. Explore my
//         portfolio and unleash the digital wonders!
//       </p>
//       <div
//         style={{
//           display: "flex",
  
//           width: "100%",
//           justifyContent: "space-around",
//           margin: "1%",

//           alignItems: "center",
//         }}
//       >
//         <div
//           style={{
//             width: "40%",
//           }}
//         >
//           <Lottie animationData={Animation} />
//         </div>
//         <section className="Skills-Main">
//           <h1 className="About-Me">Skills</h1>
//           <div className="define">
//             <h1 className="Sills-h1">Languages</h1>
//             <div className="skills-tech">
//               <ul className="ul">
//                 <Progress
//                   size="sm"
//                   radius="sm"
//                   classNames={{
//                     base: "max-w-md",
//                     track: "drop-shadow-md border border-default",
//                     indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
//                     label: "tracking-wider font-medium text-default-100 ",
//                     value: "text-foreground/60",
//                   }}
//                   label="Javascript"
//                   value={87}
//                   showValueLabel={true}
//                 />
//                 <Progress
//                   size="sm"
//                   radius="sm"
//                   classNames={{
//                     base: "max-w-md",
//                     track: "drop-shadow-md border border-default",
//                     indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
//                     label: "tracking-wider font-medium text-default-100",
//                     value: "text-foreground/60",
//                   }}
//                   label="Html"
//                   value={95}
//                   showValueLabel={true}
//                 />
//                 <Progress
//                   size="sm"
//                   radius="sm"
//                   classNames={{
//                     base: "max-w-md",
//                     track: "drop-shadow-md border border-default",
//                     indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
//                     label: "tracking-wider font-medium text-default-100",
//                     value: "text-foreground/60",
//                   }}
//                   label="Css"
//                   value={95}
//                   showValueLabel={true}
//                 />
//               </ul>
//             </div>
//           </div>
//           <div className="define">
//             <h1 className="Sills-h1"> Framewoks</h1>
//             <div className="skills-tech">
//               <ul className="ul">
//                 <Progress
//                   size="sm"
//                   radius="sm"
//                   classNames={{
//                     base: "max-w-md",
//                     track: "drop-shadow-md border border-default",
//                     indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
//                     label: "tracking-wider font-medium text-default-100",
//                     value: "text-foreground/60",
//                   }}
//                   label="React"
//                   value={80}
//                   showValueLabel={true}
//                 />
//                 <Progress
//                   size="sm"
//                   radius="sm"
//                   classNames={{
//                     base: "max-w-md",
//                     track: "drop-shadow-md border border-default",
//                     indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
//                     label: "tracking-wider font-medium text-default-100",
//                     value: "text-foreground/60",
//                   }}
//                   label="J-Query"
//                   value={90}
//                   showValueLabel={true}
//                 />
//                 <li>
//                   {" "}
//                   <Progress
//                     size="sm"
//                     radius="sm"
//                     classNames={{
//                       base: "max-w-md",
//                       track: "drop-shadow-md border border-default",
//                       indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
//                       label: "tracking-wider font-medium text-default-100",
//                       value: "text-foreground/60",
//                     }}
//                     label="BootStrap"
//                     value={90}
//                     showValueLabel={true}
//                   />
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <div className="define">
//             <h1 className="Sills-h1">Database</h1>
//             <div className="skills-tech">
//               <ul className="ul">
//                 <li>
//                   {" "}
//                   <Progress
//                     size="sm"
//                     radius="sm"
//                     classNames={{
//                       base: "max-w-md",
//                       track: "drop-shadow-md border border-default",
//                       indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
//                       label: "tracking-wider font-medium text-default-100",
//                       value: "text-foreground/60",
//                     }}
//                     label="Mongoose"
//                     value={80}
//                     showValueLabel={true}
//                   />
//                 </li>
//                 <li>
//                   {" "}
//                   <Progress
//                     size="sm"
//                     radius="sm"
//                     classNames={{
//                       base: "max-w-md",
//                       track: "drop-shadow-md border border-default",
//                       indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
//                       label: "tracking-wider font-medium text-default-100",
//                       value: "text-foreground/60",
//                     }}
//                     label="My Sql"
//                     value={85}
//                     showValueLabel={true}
//                   />
//                 </li>
//                 <li>
//                   {" "}
//                   <Progress
//                     size="sm"
//                     radius="sm"
//                     classNames={{
//                       base: "max-w-md",
//                       track: "drop-shadow-md border border-default",
//                       indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
//                       label: "tracking-wider font-medium text-default-100",
//                       value: "text-foreground/60",
//                     }}
//                     label="Sequelize"
//                     value={90}
//                     showValueLabel={true}
//                   />
//                 </li>
//                 <li>
//                   {" "}
//                   <Progress
//                     size="sm"
//                     radius="sm"
//                     classNames={{
//                       base: "max-w-md",
//                       track: "drop-shadow-md border border-default",
//                       indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
//                       label: "tracking-wider font-medium text-default-100",
//                       value: "text-foreground/60",
//                     }}
//                     label="GraphQl"
//                     value={90}
//                     showValueLabel={true}
//                   />
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// }
