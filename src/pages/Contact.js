import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';
import Mouse from '../components/Mouse';
import Navigation from '../components/Navigation';
import ArrowButton from '../components/ArrowButton';
import SocialNetwork from '../components/SocialNetwork';

const Contact = () => {

  const variants = {
    in: {
      opacity: 1,
      x: 0,
    },
    out: { 
      opacity: 0,
      x: 300,
    }
  };

  const transition = {
    ease: [.03, .87, .73, .9],
    duration: .6,
  };

  return (
    <main>
      <Mouse />
      <motion.div 
        className="contact"
        initial="out"
        animate="in"
        exit="out"
        variants={variants}
        transition={transition}
      >
        <Navigation />
        <ContactForm />
        <SocialNetwork />
        <div className="credits">
          <p>Diane Bodin - 2021</p>
        </div>
        <ArrowButton left={"/projet-3"} />
      </motion.div>
    </main>
  );
};

export default Contact;