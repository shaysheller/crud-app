import React, { useEffect, useState } from 'react';
import Card from './Card.jsx';

function ViewCards() {
  const [cardArr, setCardArr] = useState([]);

  const onClick = async (e) => {
    const newArr = [...cardArr];
    const elem = newArr.splice(e.target.id, 1);
    setCardArr([...newArr]);
    const obj = {
      delete: elem[0].id,
    };
    await fetch('/card/delete/', {
      method: 'POST',
      body: JSON.stringify(obj),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

  // const cards = cardArr.map((card, i) => (

  //   <Card key={card.id} card={card} onClick={onClick} idx={i} />

  // ));

  useEffect(() => {
    async function fetchData() {
      let data = await fetch('/card');
      data = await data.json();
      setCardArr(data);
    }
    fetchData();
  }, []);

  return (

    <>

      <h1>ALL CARDS</h1>

      {cardArr.length ? () => cardArr.map((card, i) => (
        <Card key={card.id} card={card} onClick={onClick} idx={i} />
      )) : <div id="add-card-message">Go to Create Cards to add cards!</div>}

    </>

  );
}

export default ViewCards;
