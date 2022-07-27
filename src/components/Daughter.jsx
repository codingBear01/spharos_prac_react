import React from 'react';

function Daughter({ card, setCard, setUser }) {
  const handleClick = () => {
    setCard(card - 10000);
    setUser('딸');
  };

  return (
    <div>
      딸<button onClick={handleClick}>카드 쓰기</button>
    </div>
  );
}

export default Daughter;
