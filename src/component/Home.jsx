import React from 'react'
import { Products } from './Products';
import {MyCarousel} from './MyCarousel'

export const Home = () => {
  return (
    <div className='hero'>
      <div className="card text-white border-0">
        <MyCarousel />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
            <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0"> LATEST TRENDY ARRIVALS </h5>
            <p className="card-text lead fs-2">
              CHECK OUT OUR LATEST COLLECTIONS
             </p>
            
            </div>
        
        </div>
      </div>      
      <Products />
    </div>
  );
};


