import React from 'react';
import Logo from '../components/Logo';
import Mouse from '../components/Mouse';
import Navigation from '../components/Navigation';
import Project from '../components/Project';
import ScrollButton from '../components/ScrollButton';

export const Project1 = () => (
  <main>
    <Mouse />
    <div className="project">
      <Navigation />
      <Logo />
      <Project projectNumber={0} />
      <ScrollButton left={"/"} right={"/projet-2"} />
    </div>
  </main>
);


export const Project2 = () => (
  <main>
    <Mouse />
    <div className="project">
      <Navigation />
      <Logo />
      <Project projectNumber={1} />
      <ScrollButton left={"/projet-1"} right={"/projet-3"} />
    </div>
  </main>
);

export const Project3 = () => (
  <main>
    <Mouse />
    <div className="project">
      <Navigation />
      <Logo />
      <Project projectNumber={2} />
      <ScrollButton left={"/projet-2"} right={"/contact"} />
    </div>
  </main>
);