import React from 'react';
import { NavLink } from 'react-router-dom';

const ScrollButton = (props) => (
  <div className="scroll-bottom">
    <div className="sb-main">
      {props.left && (
        <NavLink to={props.left} className="left hover">
          <span><i className="fas fa-chevron-left" /></span>
        </NavLink>
      )}
      <p className="center">scroll</p>
      {props.right && (
        <NavLink to={props.right} className="right hover">
          <span><i className="fas fa-chevron-right" /></span>
        </NavLink>
      )}
    </div>
  </div>
);

export default ScrollButton;