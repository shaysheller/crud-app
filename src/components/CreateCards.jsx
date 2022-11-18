import React, { Component, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateCards() {
  const [cardDetails, setCardDetails] = useState(['', '']);
  const [valid, setValid] = useState(true);
  const [previousCard, setPreviousCard] = useState('');

  const formSubmit = async (e) => {
    e.preventDefault();

    const obj = {
      word: cardDetails[0],
      definition: cardDetails[1],
    };

    const result = await fetch('/card/add', {
      method: 'POST',
      body: JSON.stringify(obj),
      headers: {
        'Content-Type': 'application/json',
      },
    });
      // e.preventDefault();
    if (result.status === 200) {
      setPreviousCard(cardDetails[0]);
      setValid(true);
      setCardDetails(['', '']);
    } else {
      setValid(false);
    }
  };

  return (

    <>
      <div>CREATE CARDS</div>
      <form type="submit" onSubmit={formSubmit}>
        <input
          type="text"
          placeholder="word"
          value={cardDetails[0]}
          onChange={(e) => setCardDetails([e.target.value, cardDetails[1]])}
        />
        <input
          type="text"
          placeholder="definition"
          value={cardDetails[1]}
          onChange={(e) => setCardDetails([cardDetails[0], e.target.value])}
        />
        <button type="submit" disabled={!cardDetails[0] && !cardDetails[1]}>SUBMIT</button>
      </form>
      {!valid && <p>Duplicate word. Please update word to submit!</p>}
      {previousCard && (
      <p>
        Successfully added the word
        {' '}
        {previousCard}
      </p>
      )}

    </>
  );
}

export default CreateCards;
