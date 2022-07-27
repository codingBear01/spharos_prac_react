import React from 'react';

function Son({ card, setCard, setUser }) {
  const handleClick = () => {
    setCard(card - 10000);
    setUser('아들');
  };

  return (
    <div>
      아들
      <button onClick={handleClick}>카드 쓰기</button>
    </div>
  );
}

export default Son;
