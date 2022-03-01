import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios';
import GameButton from './GameButton';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const MenuScroll = () => {

    const games = ["All Games", "Final Fantasy I", "Final Fantasy BE", "Final Fantasy II", "Final Fantasy III", "Final Fantasy IV", "Final Fantasy V", "Final Fantasy VI", "Final Fantasy VII", "Final Fantasy VIII", "Final Fantasy IX", "Final Fantasy X", "Final Fantasy X-2", "Final Fantasy XII", "Final Fantasy XIII", "Final Fantasy XIII-2", "Final Fantasy XV"];
    
    const [data, setData] = useState([]);
  // eslint-disable-next-line
  const [playOnce, setPlayOnce] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const ref = useRef(0);


  useEffect(() => {
    if (playOnce) {
    axios
        .get('https://www.moogleapi.com/api/v1/games')
        .then(res => {setData(res.data)})
        .then(res => setIsLoading(false))}
  }, [data, playOnce]);

  const slide = (shift) => {
    ref.current.scrollLeft += shift;
  };

    return (
            <div className='scroll-menu'>
                <button className='prev' onClick={() => slide(-300)}>
                    <FaAngleLeft />
                </button>
                <div  ref={ref} className='button-container'>
                {data.map((game) => (
                    <GameButton game={game} key={game.gameId} url={game.picture}/>
                ))}
                 </div>
                 <button className='next' onClick={() => slide(+300)}>
                     <FaAngleRight/>
                </button>
           </div>
    
    );
};

export default MenuScroll;