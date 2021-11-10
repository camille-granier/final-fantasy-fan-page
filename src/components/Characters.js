import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Card from './Card.js';

const Characters = () => {
  const [data, setData] = useState([]);
  // eslint-disable-next-line
  const [playOnce, setPlayOnce] = useState(true);
  // eslint-disable-next-line
  const [selectedGame, setSelectedGame] = useState('');
  const games = ["All Games", "Final Fantasy I", "Final Fantasy BE", "Final Fantasy II", "Final Fantasy III", "Final Fantasy IV", "Final Fantasy V", "Final Fantasy VI", "Final Fantasy VII", "Final Fantasy VIII", "Final Fantasy IX", "Final Fantasy X", "Final Fantasy X-2", "Final Fantasy XII", "Final Fantasy XIII", "Final Fantasy XIII-2", "Final Fantasy XV"];

  useEffect(() => {
    if (playOnce) {
    axios
        .get('https://www.moogleapi.com/api/v1/characters')
        .then(res => {setData(res.data)})}
  }, [data, playOnce]);

  return (
  <div className="characters">
    <div className="sort-container">
      <select
              name="game-select"
              onChange={((e) => setSelectedGame(e.target.value))}>
        {games.map((game) => {
          return (
            <option
                    id={game.index}
                    value={game}
                    >{game}</option>
                  )})}
      </select>
    </div>
    <ul className="card-list">
      {(selectedGame === "All Games" || selectedGame === "")?
        data.map((char) => (<Card char={char} key="char.id" url={(char.pictures).map((x) => (x.url))} />))
        :
        selectedGame === "Final Fantasy I"?
        data
        .filter((char) => (char.origin === "Final Fantasy"))
        .map((char) => (<Card char={char} key="char.id" url={(char.pictures).map((x) => (x.url))} />))
        :
        data
          .filter((char) => char.origin === selectedGame)
          .map((char) => (<Card char={char} key="char.id" url={(char.pictures).map((x) => (x.url))} />))}
    </ul>
  </div>
)};

export default Characters;
