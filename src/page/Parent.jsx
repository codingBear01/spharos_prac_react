import { React, useState } from 'react';
import Son from '../components/Son';
import Daughter from './../components/Daughter';

function Parent() {
  const [card, setCard] = useState(3000000);
  const [user, setUser] = useState('');

  const handleClick = (act) => {
    if (act === 'm') {
      setCard(card - 10000);
    } else {
      setCard(card + 10000);
    }
  };

  return (
    <div>
      <div>{card}</div>
      <div>
        <button onClick={() => handleClick('m')}>-</button>
        <button onClick={() => handleClick('p')}>+</button>
      </div>
      <div>카드를 쓴 범인은 바로! {user}</div>
      <Son card={card} setCard={setCard} setUser={setUser} />
      <Daughter card={card} setCard={setCard} setUser={setUser} />
    </div>
  );
}

export default Parent;
