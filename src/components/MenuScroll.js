import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const MenuScroll = ({ChangeGame}) => {

    const games = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "X-2", "XII", "XIII", "XIII-2", "XV"];
    
    const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [scrollX, setScrollX] = useState(0);
  const [scrollEnd, setScrollEnd] = useState(false);
  const ref = useRef(0);


  useEffect(() => {
    let mounted = true;
    if (mounted) {
    axios
        .get('https://www.moogleapi.com/api/v1/games')
        .then((res) => {setData(res.data);
                      setIsLoading(false)});
                    }

        return () => {
            mounted = false;
        }
  }, []);

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
                    <input className={isLoading ? 'loading-button' : 'game-button'}
                            data-testid='loading-logo'
                            type="image"
                            onClick={((e) => ChangeGame(e.target.value))}
                            src="../../img/final-fantasy.jpg"  
                            value="All Games"
                            alt="game-logo">
                    </input>
                {data.map((game) => (
                    <input 
                        aria-label='button'
                        className={isLoading ? 'hidden-button' : 'game-button'}
                        onClick={((e) => ChangeGame(e.target.value))}
                        key={game.gameId}
                        type="image"
                        value=
                        {game.gameId === "8f24fe1b-0e23-47c3-bca1-08d712cd7324"
                        ? "Final Fantasy BE"
                        : `Final Fantasy ${games[data.indexOf(game)]}`
                        }
                            alt='game-logo'
                            src=
                        {game.gameId === "8f24fe1b-0e23-47c3-bca1-08d712cd7324"
                        ? "../../img/ffbrave.jpg"
                        : game.picture
                        }>
                    </input>))}
                 </div>
                 {!scrollEnd && <button className='next' onClick={() => slide(+350)}>
                     <FaAngleRight/>
                </button>}
           </div>
    
    );
};

export default MenuScroll;