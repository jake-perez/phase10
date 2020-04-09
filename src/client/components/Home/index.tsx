import React, { useState } from 'react';
import './index.scss';

const deck: number[] = [3, 5, 2, 4, 6];

function Home() {
  const [cardIndex, setCardIndex] = useState(0);
  const card = deck[cardIndex];

  return (
    <div className="Home">
      <header className="Home-header">
        <p>Phase 10 Game</p>
      </header>
      <div className="Home-div">
        <button className="buttons">Shuffle Deck</button>
        <button className="buttons" onClick={() => setCardIndex(onDrawCard())}>
          Draw Card
        </button>
        <div>
          <p>Card</p>
          {card}
        </div>
      </div>{' '}
    </div>
  );
}

const onDrawCard = () => {
  const index = Math.floor(Math.random() * 4) + 1;
  return index;
};

export default Home;
