import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { data } from '../data';

const Project = (props) => {

  const [currentProject] = useState(data);
  const project = currentProject[props.projectNumber];

  let left = Math.floor(Math.random() * 200 + 700) + "px";
  let top = Math.floor(Math.random() * 200 + 150) + "px";
  let transform = "scale(" + (Math.random() + 0.7) + ")";

  const variants = {
    initial: {
      opacity: 0,
      transition: { duration: 0.5 },
      x: 200,
    },
    visible: { 
      opacity: 1,
      x: 0,
    }
  };

  const transition = {
    ease: [.03, .87, .73, .9],
    duration: .6,
  };

  let plusOrMinus = Math.random() > 0.4 ? 1 : -1;
  let imgX = Math.random() * 350 * plusOrMinus;
  let imgY = Math.random() * 120 * plusOrMinus;
  const imgAnimation = {
    initial: {
      opacity: 0,
      x: imgX,
      y: imgY,
    },
    visible: { 
      opacity: 1,
      x: 0,
      y: 0,
    }
  };

  return (
    <motion.div 
      className="project-main"
      initial="initial"
      animate="visible"
      variants={variants}
      transition={transition}
    >
      <div className="project-content">
        <h1>{project.title}</h1>
        <p>{project.date}</p>
        <ul className="languages">
          {project.languages.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <motion.div 
        className="img-content"
        initial="initial"
        animate="visible"
        variants={imgAnimation}
        transition={{ duration: 1.2 }}
      >  
        <div className="img-container hover">
          <span>
            <h3>{project.title}</h3>
            <p>{project.infos}</p>  
          </span>
          <img src={project.img} alt={project.title} />
        </div>
        <div className="button-container">
          <a 
            href={project.link} 
            target="_blank"
            rel="noopener noreferrer"
            className="hover"
          >
            <span className="button">voir le site</span>
          </a>
        </div>
      </motion.div>

      <span className="random-circle" style={{ left, top, transform }} />
    </motion.div>
  );
};

export default Project;