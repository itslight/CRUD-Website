import React from 'react'
import { useState, useEffect } from 'react';
import './form.css';
import Axios from 'axios';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

export default function Form() {
  const [table, setTable] = useState("popular_items");
  const [imageName, setImageName] = useState('');
  const [imageText, setImageText] = useState('');
  const [offer, setOffer] = useState('');
  const [popularList, setPopularList] = useState([]);

  const createNotification = (type) => {
    return () => {
      switch (type) {
        case 'info':
          NotificationManager.info('Info message');
          break;
        case 'success':
          NotificationManager.success('Data Submitted', 'Well Done');
          break;
        case 'warning':
          NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
          break;
        case 'error':
            NotificationManager.error('Error message', 'Click me!', 5000, () => {
                alert('callback');
              });
          break;
          default:
            NotificationManager.error('Error message', 'Click me!', 5000, () => {
                alert('callback');
              });
      }
    };
  };

  useEffect(() => {
    Axios.get('http://localhost:3001/api/get/popular_items').then((response) => {
      setPopularList(response.data);
    });
  }, []);

  const submitData = () =>{
    Axios.post('http://localhost:3001/api/insert', {table: table, imageName: imageName, imageText: imageText, offer: offer
  })
  createNotification('success');
  };

  return (
    <div  className='dataEntry'>
        <img alt='background' src='db_img.png' className='bg-img'></img>
        <h1>iNKb DATA ENTRY</h1>
        <div className='form-items'>
            <div className='Labels'>
                <div className='label-item'>
                    Table Name:
                </div>
                <div className='label-item'>
                    Image Name:
                </div>
                <div className='label-item'>
                    Image Text:
                </div>
                <div className='label-item'>
                    Offer(Optional):
                </div>
            </div>
            <div className='inputs'>
            <div className='input-item'>
                    <select name="TableNames" id="TableNames" onChange={(e)=>{
                      setTable(e.target.value)
                    }}>
                        <option value="popular_items">Popular</option>
                        <option value="Women">Women</option>
                        <option value="Men">Men</option>
                        <option value="Kids">Kids</option>
                    </select>
                </div>
                <div className='input-item'>
                    <input onChange={(e)=>{
                      setImageName(e.target.value)
                    }}/>
                </div>
                <div className='input-item'>
                    <input onChange={(e)=>{
                      setImageText(e.target.value)
                    }}/>
                </div>
                <div className='input-item'>
                    <input onChange={(e)=>{
                      setOffer(e.target.value)
                    }}/>
                </div>
            </div>
        </div>
        {/* <button className='Submit-button' onClick={createNotification('success')}>Submit</button> */}
        <button className='Submit-button' onClick={submitData}>Submit</button>
        <NotificationContainer/>

        {
          popularList.map((val)=>{
            return <h1>ImageName: {val.image_name} | imageText: {val.image_text} | offers: {val.offers}</h1>
          })
        }

    </div>
  )
}
