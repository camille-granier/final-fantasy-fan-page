import React from 'react';

const GameButton = ({game, url}) => {


    return (
        <button className='game-button'><img width='100' className='game-picture' src={url} value={game} alt="game-logo" /></button>
    );
};

export default GameButton;