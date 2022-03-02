import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Card from './Card';
import LoadingSpinner from '../UI/Loadingspinner';
import MenuScroll from './MenuScroll';

const Characters = () => {
  const [data, setData] = useState([]);
  // eslint-disable-next-line
  const [playOnce, setPlayOnce] = useState(true);
  // eslint-disable-next-line
  const [selectedGame, setSelectedGame] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  // eslint-disable-next-line
  const [isActive, setIsActive] = useState(false)
  // eslint-disable-next-line

  const ChangeGame = (e) => {
    setSelectedGame(e);
    console.log(selectedGame)
  }

  useEffect(() => {
    if (playOnce) {
    axios
        .get('https://www.moogleapi.com/api/v1/characters')
        .then(res => {setData(res.data)})
        .then(res => setIsLoading(false))}
  }, [data, playOnce]);

  return (
  <div className="characters">
    <MenuScroll ChangeGame={ChangeGame}/>
    {/*sort container
    <div className="sort-container">
      <button className="menu-trigger" onClick= {((e) => setIsActive(true))}>
      Choose game<div className="arrow"></div></button>
      {
        isActive
      ? (
        <div className={`menu ${isActive ? 'active' : 'inactive'}`}
             ref={dropdownRef}>
            {games.map((game) => {
                return (
                  <button
                    className="menu-button"
                    onClick={((e) => setSelectedGame(e.target.value))}
                    id={game.index}
                    value={game}>
                    {game}
                  </button>)})}</div>)
      :(null)}
                </div>*/}
    {isLoading && <LoadingSpinner />}
    <ul className="card-list">
      {(selectedGame === "All Games" || selectedGame === "")?
        data.map((char) => (<Card 
          char={char} 
          key={char.id} 
          des={char.description}
          url={char.pictures.length === 0 
            ? "./img/final-fantasy.jpg" 
            : (char.pictures).map((x) => (x.url))} />))
        :
        selectedGame === "Final Fantasy I"?
        data
        .filter((char) => (char.origin === "Final Fantasy"))
        .map((char) => (<Card 
          char={char} 
          key={char.id}
          des={char.description}
          url={char.pictures.length === 0 
            ? "./img/final-fantasy.jpg" 
            : (char.pictures).map((x) => (x.url))} />))
        :
        data
          .filter((char) => char.origin === selectedGame)
          .map((char) => (<Card 
          char={char}
          key={char.id} 
          des={char.description}
          url={char.pictures.length === 0 
          ? "./img/final-fantasy.jpg" 
          : char.pictures.map((x) => (x.url))} />))}
    </ul>
  </div>
)};

export default Characters;
