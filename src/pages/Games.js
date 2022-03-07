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
    <div className='quote'>
    <p className='quote-text'><em>" I don't have what it takes to make an action game. I think I'm better at telling a story "</em></p>
    </div>
    <p className='author'><span className='author-name'>-Hironobu Sakaguchi,</span> creator of the Final Fantasy series</p>
    {isLoading && <LoadingSpinner />}
    <ul className="card-list-below-quote">
      {data.map((game) => (<CardG game={game} key={game.gameId} url={game.picture} />))}
    </ul>
  </div>
)};

export default Games;
