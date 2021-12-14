import React from 'react';

const CardG = ({game, url}) => {

  let description = "";

  if (game.description !== null) {
     let arr = game.description.split('.', 3);
     if (!arr[2]) {
       description = description = arr[0] + "." + arr[1] + "."; 
     } else {
     description = arr[0] + "." + arr[1] + "." + arr[2] + ".";
     }
  }

  return (
    <div className='flip-card'>
    <div className='flip-card-inner'>
    <li className="flip-card-front" key={game.index}>
      <img className="game-picture" src={url} alt="game-pic" />
      <ul>
       <li>{game.title}</li>
     </ul>
    </li>
    <div className="flip-card-back">
      {game.description === null
      ? <h5>{game.name}</h5>
      : <h6>{description}</h6>}
      </div>
    </div>
  </div>
)};

export default CardG;
