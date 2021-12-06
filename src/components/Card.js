import React from 'react';
const Card = ({char, url}) => {

  return (
  <li className="card" key={char.index}>
   <img src={url} alt="char-pic" />
    <ul>
      <li>{char.name}</li>
      {(/[^?]/.test(char.age)? <li>Age: {char.age}</li>:"")}
      {(/[^?]/.test(char.race)? <li>{char.race}</li>:"")}
      <li>{char.origin}</li>
    </ul>
  </li>
)};

export default Card;
