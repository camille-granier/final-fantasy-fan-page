import React from 'react';

const LoadingSpinner = () => {
  return (
  <div className='loading-spinner-container'
        data-testid='loading'>
    <div className="lds-ripple"><div></div><div></div></div>
  </div>
)};

export default LoadingSpinner;
