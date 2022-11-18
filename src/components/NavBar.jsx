import React, { Component, useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Home from './Home.jsx';
import CreateCards from './CreateCards.jsx';

import Login from './Login.jsx';
import ViewCards from './viewCards.jsx';

function NavBar() {
  const pages = ['Home', 'Create Cards', 'View Cards', 'Testing', 'Logout'];
  const paths = ['/home', '/createCards', '/viewCards', '/testing', '/'];
  const navigate = useNavigate();

  const top = pages.map((element, i) => (
    <button key={element} type="submit" className="nav-button" onClick={() => navigate(paths[i])}>{element}</button>
  ));

  return (
    <div id="navbar">
      {top}
    </div>
  );
}

export default NavBar;
