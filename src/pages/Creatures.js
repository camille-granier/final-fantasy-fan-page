import React, {useState, useEffect,useRef} from 'react';
import Header from '../components/Header';
import axios from 'axios';
import CardC from '../components/CardC';
import LoadingSpinner from '../UI/Loadingspinner';

const Creatures = () => {
  const [data, setData] = useState([]);
  // eslint-disable-next-line
  const [playOnce, setPlayOnce] = useState(true);
  // eslint-disable-next-line
  const [selectedGame, setSelectedGame] = useState('');
  // eslint-disable-next-line
  const [isLoading, setIsLoading] = useState(true);
  const [isActive, setIsActive] = useState(false);
  // eslint-disable-next-line
  const dropdownRef = useRef(null);
  const games = ["All Games", "Final Fantasy 01", "Final Fantasy BE", "Final Fantasy 02", "Final Fantasy 03", "Final Fantasy 04", "Final Fantasy 05", "Final Fantasy 06", "Final Fantasy 07", "Final Fantasy 08", "Final Fantasy 09", "Final Fantasy 10", "Final Fantasy 10-2", "Final Fantasy 12", "Final Fantasy 13", "Final Fantasy 13-2", "Final Fantasy 15"];

  useEffect(() => {
    const pageClickEvent = (e) => {
      if(dropdownRef.current !== null && !dropdownRef.current.contains(e.target)) {
        setIsActive(!isActive)
      }
    }
    if(isActive) {
      window.addEventListener('click', pageClickEvent)
    }
    return () => {
      window.removeEventListener('click', pageClickEvent)
    }
  }, [isActive]);


  useEffect(() => {
    if (playOnce) {
    axios
        .get('https://www.moogleapi.com/api/v1/monsters')
        .then(res => {setData(res.data)})
        .then(res => setIsLoading(false))}
  }, [data, playOnce]);

  return (
  <div className="creatures">
    <Header />
    <div className="sort-container">
      <button className="menu-trigger"
            onClick={((e) => setIsActive(true))}
          >Choose Game<div className="arrow"></div>
      </button>
      {
        isActive
        ? (<div className={`menu ${isActive ? 'active' : 'inactive'}`}
                ref={dropdownRef}>
              {games.map((game) => {
              return (
              <button
                className="menu-button"
                onClick={((e) => setSelectedGame(e.target.value))}
                id={game.index}
                value={game}
                >{game}
              </button>)})}</div>)
        :(null)}
    </div>
    {isLoading && <LoadingSpinner />}
    <ul className="card-list">
      {(selectedGame === "All Games" || selectedGame === "")?
      data.map((crea) => (<CardC crea={crea} key="crea.monsterId" url={crea.picture ? crea.picture : "./img/final-fantasy.jpg"} />))
      :
        selectedGame === "Final Fantasy 01"?
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
