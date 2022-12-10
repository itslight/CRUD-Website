import React from 'react';
import './Header.css';
import NavButton from './NavButton';
import AccBox from './AccBox'
import { Link } from "react-router-dom";
// import { useEffect, useState } from 'react';

function Header() {
    let element = document.body;
    function clickme(){
        let scroll = element.scrollHeight - element.offsetHeight;
        console.log(scroll);}
    // if(scroll>2){
    //     document.getElementsByClassName("Header-Wrapper").style.backgroundColor = 'white';
    //     setScroll(element.scrollTop);    
    // }
    //   else{
    //     document.getElementById ("Header-Wrapper").style.backgroundColor = "transparent";
    //   }
    const showAccBox = () => {
        return (<AccBox/>)
    }
    
  return( 
      <>
        <div className='Header-Wrapper' onClick={clickme}>
            <div className='Shop-Name'>
                <a href='Home'>
                    iNKb.
                </a>
            </div>
            <NavButton />
            <div className='Header-items-list'>
            <div className='Header-items-list-left'>
                <div className='Header-items'>
                    <a href='Shop'>
                        Shop
                    </a> 
                </div>
                <div className='Header-items'>
                    <a href='Brands'>
                        All Brand
                    </a> 
                </div>
                <div className='Header-items'>
                    <a href='About'>
                        About
                    </a> 
                </div>
            </div>
            {/* <div>{scroll}</div> */}
            <div className='Header-items-list-right'>
                {/* <AccBox/> */}
                <div className='Header-items'>
                    <a href='Men'>
                        Men
                    </a> 
                </div>
                <div className='Header-items'>
                    <a href='Women'>
                        Women
                    </a> 
                </div>
                <div className='Header-items'>
                    <a href='Kids'>
                        Kids
                    </a> 
                </div>
                <div className='Header-items'>
                    <p onClick={()=>showAccBox()} >
                        Account
                    {/* <Link to="/SignUp">My Account</Link> */}
                    </p> 
                </div>
                {/* <AccBox/> */}
            </div>
            </div>
        </div>
    </>
    );
}

export default Header;
