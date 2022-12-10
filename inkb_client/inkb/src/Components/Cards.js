import React from 'react';
import './Cards.css';

export default function Cards(props) {
  return (
      <div className='Card'>
        <div className='Overlay-On-Image'>
            <div className='Card-Text'>
                <div className='Card-Desc'>
                    {props.image_text}
                </div>
                <div className='Card-Offer'>
                    {props.Offer}
                </div>
            </div>
        </div>
        <img className='Card-Image' alt='card-img' src={props.image_name}>
        </img>
      </div>
    );
}