import React, { Component, useEffect, useState } from 'react';
import { json, useNavigate } from 'react-router-dom';
// import MainContainer from './containers/MainContainer';
import axios from 'axios';

function Signup() {
  const navigate = useNavigate();
  const [loginDetails, setLoginDetails] = useState(['', '']);
  const [authorized, setAuthorized] = useState(true);

  const goToHome = () => {
    navigate('/home');
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setAuthorized(true);

    const obj = {
      username: loginDetails[0],
      password: loginDetails[1],
    };

    const result = await fetch('/', {
      method: 'POST',
      body: JSON.stringify(obj),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    // e.preventDefault();
    if (result.status === 200) goToHome();
    else {
      setLoginDetails(['', '']);
      setAuthorized(false);
    }
  };

  return (
    <>
      <div>SIGNUP</div>

      <form type="onSubmit" onSubmit={onSubmit}>
        <input type="text" placeholder="username" value={loginDetails[0]} onChange={(e) => setLoginDetails([e.target.value, loginDetails[1]])} />
        <input type="password" placeholder="password" value={loginDetails[1]} onChange={(e) => setLoginDetails([loginDetails[0], e.target.value])} />
        <button type="submit" disabled={!loginDetails[0] || !loginDetails[1]}>SIGNUP</button>
        {!authorized
        && <p>Please enter a unique username!</p>}

      </form>

    </>

  );
}

export default Signup;
