import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Contact from './pages/Contact';
import Home from './pages/Home';
import { Project1, Project2, Project3, Project4 } from './pages/Projects';
import { AnimatePresence } from 'framer-motion';

const App = () => (
  <AnimatePresence>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/projet-1" component={Project1} />
      <Route path="/projet-2" component={Project2} />
      <Route path="/projet-3" component={Project3} />
      <Route path="/projet-4" component={Project4} />
      <Route path="/contact" component={Contact} />
      <Redirect to='/' />
    </Switch>
  </AnimatePresence>
);

export default App;