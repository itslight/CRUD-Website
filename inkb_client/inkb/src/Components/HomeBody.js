import React from 'react';
import './HomeBody.css';
import { useEffect, useState } from 'react';
import Axios from 'axios';
import Cards from './Cards';
import Banner from './Banner';
import AccBox from './AccBox';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './HomeBody.css';

export default function HomeBody() {
  const [popularList, setPopularList] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3001/api/get/popular_items').then((response) => {
      setPopularList(response.data);
    });
  }, []);

  const settings = {
    backgroundColor: "black",  
    className: "center",
    centerMode: false,
    infinite: false,
    centerPadding: "100px",
    slidesToShow: 6,
    speed: 500
  };

  return (
      <div className='Home'>
        <Banner/>
        <AccBox/>
        <div className='Popular-Cards'>
          <text className='Cards-Heading'>POPULAR ITEMS</text>
        <li className='cards__item'>
        <Slider {...settings}>
        {
          popularList.map((val)=>{
            return <Cards key ={val.id} image_name={val.image_name} image_text={val.image_text} Offer={val.offers}/>
          })
        }
        </Slider>
        </li>
        </div>
      </div>
    );
}