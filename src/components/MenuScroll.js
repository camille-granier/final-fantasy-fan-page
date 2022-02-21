import React, {useState, useEffect} from 'react';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import axios from 'axios';
import GameButton from './GameButton';

const MenuScroll = () => {

    const games = ["All Games", "Final Fantasy I", "Final Fantasy BE", "Final Fantasy II", "Final Fantasy III", "Final Fantasy IV", "Final Fantasy V", "Final Fantasy VI", "Final Fantasy VII", "Final Fantasy VIII", "Final Fantasy IX", "Final Fantasy X", "Final Fantasy X-2", "Final Fantasy XII", "Final Fantasy XIII", "Final Fantasy XIII-2", "Final Fantasy XV"];
    
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
        <div>
            <div>
                {games.map((x) => (
                    <GameButton game={x} key={x} url={x.picture}/>
                ))}
            </div>
        </div>
    );
};

export default MenuScroll;