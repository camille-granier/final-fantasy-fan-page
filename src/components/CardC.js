import React from 'react';

const CardC = ({crea, url}) => {

  let description = "";

  if (crea.description !== null) {
    let arr = crea.description.split(".", 2);

    if (!crea.description[1]) {
      description = arr[0] + ".";
    } else {
      description = arr[0] + "." + arr[1] + ".";
    } 
  }

  return (
  <div className='flip-card'
        role='listitem'>
    <div className='flip-card-inner'>
    <li className="flip-card-front" key={crea.monsterId}>
      <img src={url} alt="creature-pic" />
      <ul>
       <li>{crea.name.toUpperCase()}</li>
       <li>{crea.game}</li>
     </ul>
    </li>
    <div className="flip-card-back">
      {crea.description === null
      ? <h5>{crea.name} from {crea.game}</h5>
      : <h6>{description}</h6>}
      </div>
    </div>
  </div>
)};

export default CardC;
