import React, { Component } from 'react'
import './Banner.css';

export default class Banner extends Component {
  render() {
    return (
      <div className='Banner-Wrapper'>
          <div className='Banner-Image-Wrapper'>
            <img alt='banner' src='sunbrella-fabric.jpg' className='Banner-Image'></img>
          </div>
      </div>
    )
  }
}
