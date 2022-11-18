import React, { Component } from 'react';
import {
  BrowserRouter, Routes, Route, Links,
} from 'react-router-dom';
import Login from './Login.jsx';
import Home from './Home.jsx';
import Signup from './Signup.jsx';
import CreateCards from './CreateCards.jsx';
import ViewCards from './viewCards.jsx';
import NavBar from './NavBar.jsx';
import Testing from './Testing.jsx';

function App() {
  return (
    <>

      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<Login />}
        />
        <Route
          path="/signup"
          element={<Signup />}
        />
        <Route
          path="/home"
          element={<Home />}
        />
        <Route
          path="/createCards"
          element={<CreateCards />}
        />
        <Route
          path="/viewCards"
          element={<ViewCards />}
        />
        <Route
          path="/testing"
          element={<Testing />}
        />
      </Routes>
    </>
  );
}

export default App;
