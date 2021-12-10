import React from 'react';

const CardG = ({game, url}) => {


  return (
  <li className="card" key={game.index}>
  <img className="game-picture" src={url} alt="game-pic" />
    <ul>
      <li>{game.title}</li>
      <li></li>
    </ul>
  </li>
)};

export default CardG;
