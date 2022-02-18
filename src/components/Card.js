import React from 'react';
const Card = ({char, url, des}) => {

  let description = "";

  if (des !== null) {
     let arr = des.split('.', 3);
     if (!arr[2]) {
       description = description = arr[0] + "." + arr[1] + "."; 
     } else {
     description = arr[0] + "." + arr[1] + "." + arr[2] + ".";
     }
  }

  return (
  <div className="flip-card">
    <div className="flip-card-inner">
      <li className="flip-card-front" key={char.index}>
        <img src={url} alt="char-pic" />
         <ul>
           <li>{char.name.toUpperCase()}</li>
            {(/[^?]/.test(char.age)? <li>Age: {char.age}</li>:"")}
           <li>{char.origin}</li>
        </ul>
      </li>
      <div className="flip-card-back">
        {char.description === null 
        ? <h5>{char.race} character from {char.origin}</h5> 
        : <h6>{description}</h6>}
      </div>
    </div>
  </div>
)};

export default Card;
