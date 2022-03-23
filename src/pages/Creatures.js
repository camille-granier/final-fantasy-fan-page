import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import axios from 'axios';
import CardC from '../components/CardC';
import LoadingSpinner from '../UI/Loadingspinner';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';

const Creatures = () => {
  const [data, setData] = useState([]);
  // eslint-disable-next-line
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    if (mounted) {
    axios.get('https://www.moogleapi.com/api/v1/monsters')
         .then((res) => {setData(res.data);
                        setIsLoading(false)});
         }
        return () => {
          mounted = false;
        }
  }, []);

  return (
  <div className="creatures">
    <Helmet>
      <html lang="en" />
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta
        name="description"
        content="Discover Final Fantasy Creatures"/>
      <title>Creatures</title>
      </Helmet>
    <Header />
    <div className='quote'>
    <p className='quote-text'><em>" Kweh! "</em></p>
    </div>
    <p className='author'>-Present Day Chocobos</p>
    {isLoading && <LoadingSpinner />}
    <ul className="card-list-below-quote">
      {
      data.map((crea) => (<CardC crea={crea} 
                                  key={crea.monsterId}
                                  url={crea.picture ? crea.picture : "./img/final-fantasy.jpg"} />))
      }
    </ul>
    {!isLoading && <Footer />}
  </div>
)};

export default Creatures;
