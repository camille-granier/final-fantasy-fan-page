import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import axios from 'axios';
import CardG from '../components/CardG';
import LoadingSpinner from '../UI/Loadingspinner';

const Games = () => {
  const [data, setData] = useState([]);
  // eslint-disable-next-line
  const [playOnce, setPlayOnce] = useState(true);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    if (playOnce) {
    axios
        .get('https://www.moogleapi.com/api/v1/games')
        .then(res => {setData(res.data)})
        .then(res => setIsLoading(false))}
  }, [data, playOnce]);

  return (
  <div className="games">
    <Header />
    <div className="sort-container"></div>
    {isLoading && <LoadingSpinner />}
    <ul className="card-list">
      {data.map((game) => (<CardG game={game} key="game.gameId" url={game.picture} />))}
    </ul>
  </div>
)};

export default Games;
