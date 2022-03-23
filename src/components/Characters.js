import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Card from './Card';
import LoadingSpinner from '../UI/Loadingspinner';
import MenuScroll from './MenuScroll';
import Footer from './Footer';

const Characters = () => {
  const [data, setData] = useState([]);
  // eslint-disable-next-line
  const [selectedGame, setSelectedGame] = useState('');
  const [isLoading, setIsLoading] = useState(true);
 

  const ChangeGame = (e) => {
    setSelectedGame(e);
  }

  useEffect(() => {
    let mounted = true;
    if (mounted) {
    axios
        .get('https://www.moogleapi.com/api/v1/characters')
        .then((res) => {setData(res.data);
                      setIsLoading(false)});
        };
        return () => {
          mounted = false;
        }
  }, []);

  return (
  <div className="characters">
    <MenuScroll ChangeGame={ChangeGame}/>
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
    {!isLoading && <Footer />}
  </div>
)};

export default Characters;
