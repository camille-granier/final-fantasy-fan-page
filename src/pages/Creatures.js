import React, {useState, useEffect} from 'react';
import Navigation from '../components/Navigation.js';
import axios from 'axios';
import CardC from '../components/CardC.js';
import Logo from '../components/Logo.js';
const Creatures = () => {
  const [data, setData] = useState([]);
  // eslint-disable-next-line
  const [playOnce, setPlayOnce] = useState(true);
  // eslint-disable-next-line
  const [selectedGame, setSelectedGame] = useState('');
  const games = ["All Games", "Final Fantasy 01", "Final Fantasy BE", "Final Fantasy 02", "Final Fantasy 03", "Final Fantasy 04", "Final Fantasy 05", "Final Fantasy 06", "Final Fantasy 07", "Final Fantasy 08", "Final Fantasy 09", "Final Fantasy 10", "Final Fantasy 10-2", "Final Fantasy 12", "Final Fantasy 13", "Final Fantasy 13-2", "Final Fantasy 15"];


  useEffect(() => {
    if (playOnce) {
    axios
        .get('https://www.moogleapi.com/api/v1/monsters')
        .then(res => {setData(res.data)})}
  }, [data, playOnce]);

  return (
  <div className="creatures">
    <div className="header">
      <Logo />
      <Navigation />
      </div>
    <div className="sort-container">
    <select name="game-select"
            onChange={((e) => setSelectedGame(e.target.value))}>
      {games.map((game) => {
        return (
          <option id={game.index}
                  value={game}
                  >{game}</option>
                )})}
    </select>
    </div>
    <ul className="card-list">
      {(selectedGame === "All Games" || selectedGame === "")?
      data.map((crea) => (<CardC crea={crea} key="crea.monsterId" url={crea.picture} />))
      :
        selectedGame === "Final Fantasy I"?
          data
            .filter((crea) => (crea.game === "Final Fantasy"))
            .map((crea) => (<CardC crea={crea} key="crea.monsterId" url={crea.picture} />))
        :
          data
            .filter((crea) => crea.game === selectedGame)
            .map((crea) => (<CardC crea={crea} key="crea.monsterId" url={crea.picture} />))}
    </ul>
  </div>
)};

export default Creatures;
