import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import axios from 'axios';
import CardG from '../components/CardG';
import LoadingSpinner from '../UI/Loadingspinner';
import Footer from '../components/Footer';

const Games = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    let mounted = true;
    if (mounted) {
    axios.get('https://www.moogleapi.com/api/v1/games')
         .then((res) => {setData(res.data);
                      setIsLoading(false)});
         };

        return () => {
          mounted = false;
        }
  }, []);

  return (
  <div className="games">
    <Header />
    <div className='quote'>
    <p className='quote-text'><em>" I don't have what it takes to make an action game. I think I'm better at telling a story "</em></p>
    </div>
    <p className='author'><span className='author-name'>-Hironobu Sakaguchi,</span> creator of the Final Fantasy series</p>
    <div className='games-container'>
      {isLoading && <LoadingSpinner />}
    <ul className="card-list-below-quote">
      {data.map((game) => (<CardG game={game} key={game.gameId} url={game.picture} />))}
    </ul>
    </div>
    {!isLoading && <Footer />}
  </div>
)};

export default Games;
