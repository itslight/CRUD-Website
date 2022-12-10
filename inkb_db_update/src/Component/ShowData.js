import React from 'react'
import Axios from 'axios';
import { useState, useEffect } from 'react';

export default function ShowData() {

  const [popularList, setPopularList] = useState([]);
  // const [table, setTable] = useState("popular_items");
  // const [imageName, setImageName] = useState('');
  // const [id, setId] = useState('');

  useEffect(() => {
    Axios.get('http://localhost:3001/api/get/popular_items').then((response) => {
      setPopularList(response.data);
    });
  }, []);

  const DeleteData = (id) =>{
    Axios.post(`http://localhost:3001/api/delete/popular_items/${id}`);
  };

  return (
    <div>
        {
          popularList.map((val)=>{
            return (
              <>
            <h1>ImageName: {val.image_name} | imageText: {val.image_text} | offers: {val.offers}</h1>
              <button onClick={()=>DeleteData(val.id)}>Delete</button>
              </>)
          })
        }
    </div>
  )
}
