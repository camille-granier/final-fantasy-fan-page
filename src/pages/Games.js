import React, {useState, useEffect} from 'react';
import Navigation from '../components/Navigation.js';
import axios from 'axios';
import CardG from '../components/CardG.js';
import Logo from '../components/Logo.js';

const Games = () => {
  const [data, setData] = useState([]);
  // eslint-disable-next-line
  const [playOnce, setPlayOnce] = useState(true);


  useEffect(() => {
    if (playOnce) {
    axios
        .get('https://www.moogleapi.com/api/v1/games')
        .then(res => {setData(res.data)})}
  }, [data, playOnce]);

  return (
  <div className="games">
    <div className="header">
      <Logo />
      <Navigation />
    </div>
    <div className="sort-container-g"></div>
    <ul className="card-list">
      {data.map((game) => (<CardG game={game} key="game.gameId" url={game.picture} />))}
    </ul>
  </div>
)};

export default Games;
