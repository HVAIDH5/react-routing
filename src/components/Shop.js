import React, { useState, useEffect } from 'react';
import './shop.css'

function Shop() {
  
  const fetchitems= async()=>{
    const data= await fetch('https://fortnite-api.com/v2/shop/br');
    
    const item= await data.json();
    console.log(item);
  };



  useEffect(()=>{
     fetchitems();
  },[]);

 
  
  return (
    <div >
      <h1 className="sh">Shop</h1>
    </div>
  );
}

export default Shop;
