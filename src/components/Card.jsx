import React, { Component, useEffect, useState } from 'react';

function Card({ card, onClick, idx }) {
  const {
    word, definition,
  } = card;

  return (
    <div className="card">
      <div>
        Word:
        {' '}
        {word}
      </div>
      <div>
        Definition:
        {' '}
        {definition}
      </div>
      <button
        type="submit"
        className="delete"
        id={idx}
        onClick={onClick}

      >
        DELETE CARD
      </button>
    </div>
  );
}

export default Card;
