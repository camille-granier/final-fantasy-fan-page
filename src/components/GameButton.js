import React from 'react';

const GameButton = ({game, url}) => {


    return (
        <button className='game-button'>
        {game.gameId === "8f24fe1b-0e23-47c3-bca1-08d712cd7324"
        ? <div className='button-title'>{game.title}</div>
        : <img className='picture-button' src={url} value={game} alt="game-logo" />
        }
        </button>
        );
};

export default GameButton;