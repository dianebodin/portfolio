import React from 'react';
import Logo from '../components/Logo';
import Mouse from '../components/Mouse';
import Navigation from '../components/Navigation';
import Project from '../components/Project';
import ArrowButton from '../components/ArrowButton';

export const Project1 = () => (
  <main>
    <Mouse />
    <div className="project">
      <Navigation />
      <Logo />
      <Project projectNumber={0} />
      <ArrowButton left={"/"} right={"/projet-2"} />
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
      <ArrowButton left={"/projet-1"} right={"/projet-3"} />
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
      <ArrowButton left={"/projet-2"} right={"/projet-4"} />
    </div>
  </main>
);

export const Project4 = () => (
  <main>
    <Mouse />
    <div className="project">
      <Navigation />
      <Logo />
      <Project projectNumber={3} />
      <ArrowButton left={"/projet-3"} right={"/contact"} />
    </div>
  </main>
);