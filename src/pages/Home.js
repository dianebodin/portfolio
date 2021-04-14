import React from 'react';
import { motion } from 'framer-motion';
import DynamicText from '../components/DynamicText';
import Mouse from '../components/Mouse';
import Navigation from '../components/Navigation';
import ArrowButton from '../components/ArrowButton';
import SocialNetwork from '../components/SocialNetwork';

const Home = () => {

  const variants = {
    initial: {
      opacity: 0,
      transition: { duration: 0.5 },
      x: 120,
    },
    visible: { 
      opacity: 1,
      x: 0,
    }
  };

  return (
    <main>
      <Mouse />
      <motion.div 
        className="home"
        initial="initial"
        animate="visible"
        variants={variants}
        transition={{ duration: 0.8 }}
      >
      <div className="home">
        <Navigation />
        <SocialNetwork />
        <div className="home-main">
          <div className="main-content">
            <h1>DIANE BODIN</h1>
            <h2><DynamicText /></h2>
          </div>
        </div>
        <ArrowButton right="/projet-1" />
      </div>
      </motion.div>
    </main>
  );
};

export default Home;