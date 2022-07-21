import React from 'react';
import './nav.css';
import {Link} from 'react-router-dom';

function nav() {
  return (
    
     <div class="navo">
   <h1> LOGO</h1>
      <ul className='listi'>
     <Link to='/about'> <li className='lis'>About</li></Link>
     <Link to='/shop'><li className='lis'>Shop</li></Link>
    
      
      </ul>
      </div>
  
  );
}

export default nav;
