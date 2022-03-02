import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const MenuScroll = () => {

    const games = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "X-2", "XII", "XIII", "XIII-2", "XV"];
    
    const [data, setData] = useState([]);
  // eslint-disable-next-line
  const [playOnce, setPlayOnce] = useState(true);
  const [scrollX, setScrollX] = useState(0);
  const [scrollEnd, setScrollEnd] = useState(false);
  const [selectedGame, setSelectedGame] = useState('');
  const ref = useRef(0);


  useEffect(() => {
    if (playOnce) {
    axios
        .get('https://www.moogleapi.com/api/v1/games')
        .then(res => {setData(res.data)})}
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
                    <button className='game-button' 
                            value="All Games">
                                <img className='picture-button' 
                                     src="../../img/final-fantasy.jpg" 
                                     alt="game-logo" />
                    </button>
                {data.map((game) => (
                    <button 
                        className='game-button'
                        value=
                        {game.gameId === "8f24fe1b-0e23-47c3-bca1-08d712cd7324"
                        ? "Final Fantasy BE"
                        : `Final Fantasy ${games[data.indexOf(game)]}`
                        }>
                        <img 
                            className='picture-button'
                            alt='game-logo'
                            src=
                        {game.gameId === "8f24fe1b-0e23-47c3-bca1-08d712cd7324"
                        ? "../../img/ffbrave.jpg"
                        : game.picture
                        }/>
                    </button>))}
                 </div>
                 {!scrollEnd && <button className='next' onClick={() => slide(+350)}>
                     <FaAngleRight/>
                </button>}
           </div>
    
    );
};

export default MenuScroll;