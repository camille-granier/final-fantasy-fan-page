import React from 'react';

const CardC = ({crea, url}) => {


  return (
  <li className="card" key={crea.index}>
  <img src={url} alt="creature-pic" />
    <ul>
      <li>{crea.name}</li>
      <li>{crea.game}</li>
    </ul>
  </li>
)};

export default CardC;
