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
  const [scrollX, setScrollX] = useState(0);
  const [scrollEnd, setScrollEnd] = useState(false)
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
    setScrollX(scrollX + shift);

  if (Math.floor(ref.current.scrollWidth - ref.current.scrollLeft <= ref.current.offsetWidth)) {
      setScrollEnd(true)
  } else {
      setScrollEnd(false);
  }
};

  const scrollCheck = () => {
    setScrollX(ref.current.scrollLeft);
    if (Math.floor(ref.current.scrollWidth - ref.current.scrollLeft <= ref.current.offsetWidth)) {
        setScrollEnd(true);
    } else {
        setScrollEnd(false);
    }
;}


    return (
            <div className='scroll-menu'>
                {scrollX !==0 && <button className='prev' onClick={() => slide(-350)}>
                    <FaAngleLeft />
                </button>}
                <div  ref={ref} onScroll={scrollCheck} className='button-container'>
                {data.map((game) => (
                    <GameButton game={game} key={game.gameId} url={game.picture}/>
                ))}
                 </div>
                 {!scrollEnd && <button className='next' onClick={() => slide(+350)}>
                     <FaAngleRight/>
                </button>}
           </div>
    
    );
};

export default MenuScroll;