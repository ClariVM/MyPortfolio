import React from 'react';
import { FaGithub } from "react-icons/fa6";
import { GrReactjs } from "react-icons/gr";
import { SiJavascript } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiSpringboot } from "react-icons/si";
import { SiApachemaven } from "react-icons/si";
import { SiGradle } from "react-icons/si";


const TechnologyList = () => {
  const technologies = [
    { icon: <FaGithub />, name: 'Github' },
    { icon: <GrReactjs />, name: 'React Js' },
    { icon: <SiJavascript />, name: 'JavaScript' },
    { icon: <FaJava />, name: 'Java' },
    { icon: <FaCss3Alt />, name: 'CSS' },
    { icon: <FaHtml5 />, name: 'Html' },
    { icon: <FaBootstrap />, name: 'Bootstrap' },
    { icon: <BiLogoPostgresql />, name: 'PostgreSQL' },
    { icon: <SiGradle />, name: 'Gradle' },
    { icon: <SiSpringboot />, name: 'SpringBoot' },
    { icon: <SiApachemaven />, name: 'Maven' }
  ];

  return (
    <div className='container-tec'>
      {technologies.map((tech, index) => (
        <div key={index} className='icon-tec'>
          <div>{tech.icon}</div>
          <h3>{tech.name}</h3>
        </div>
      ))}
    </div>
  );
}
  
  export default TechnologyList;