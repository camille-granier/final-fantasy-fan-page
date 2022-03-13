import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import axios from 'axios';
import CardC from '../components/CardC';
import LoadingSpinner from '../UI/Loadingspinner';
import Footer from '../components/Footer';

const Creatures = () => {
  const [data, setData] = useState([]);
  // eslint-disable-next-line
  const [playOnce, setPlayOnce] = useState(true);
  // eslint-disable-next-line
  const [isLoading, setIsLoading] = useState(true);

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
    <div className='quote'>
    <p className='quote-text'><em>" Kweh! "</em></p>
    </div>
    <p className='author'>-Present Day Chocobos</p>
    {isLoading && <LoadingSpinner />}
    <ul className="card-list-below-quote">
      {
      data.map((crea) => (<CardC crea={crea} 
                                  key="crea.monsterId" 
                                  url={crea.picture ? crea.picture : "./img/final-fantasy.jpg"} />))
      }
    </ul>
    {!isLoading && <Footer />}
  </div>
)};

export default Creatures;
