import React, { useState } from 'react';
import './App.scss';

const deck: number[] = [3, 5, 2, 4, 6];

function App() {
  const [cardIndex, setCardIndex] = useState(0);
  const card = deck[cardIndex];
  return (
    <div className="App">
      <header className="App-header">
        <p>Phase 10 Game</p>
      </header>
      <body className="App-body">
        <button className="buttons">Shuffle Deck</button>
        <button className="buttons" onClick={() => setCardIndex(onDrawCard())}>
          Draw Card
        </button>
        <div>
          <p>Card</p>
          {card}
        </div>
      </body>
    </div>
  );
}

const onDrawCard = () => {
  const index = Math.floor(Math.random() * 4) + 1;
  return index;
};

export default App;
