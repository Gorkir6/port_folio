import React from 'react';
import { useState, useEffect } from 'react';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
function Card(params){
    const { height, width } = useWindowDimensions();
    return(
        <div className='card'>
         <h2>{params.name}</h2>
         <p>{params.resume}</p>
         <a href={params.link} className="card_link"><img src={params.source} alt="xd" width={width}></img></a>
        </div>
    );
}
export default Card;