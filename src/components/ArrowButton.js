import React from 'react';
import { NavLink } from 'react-router-dom';

const ArrowButton = (props) => (
  <div className="arrow-bottom">
    <div className="main-arrow">
    {props.left && (
      <NavLink to={props.left} className="left hover">
        <span><i className="fas fa-chevron-left" /></span>
      </NavLink>
    )}

    {props.right && (
      <NavLink to={props.right} className="right hover">
        <span><i className="fas fa-chevron-right" /></span>
      </NavLink>
    )}
    </div>
  </div>
);

export default ArrowButton;