import React from 'react';
import {Col , Row , Container} from 'react-bootstrap'

import teamimage from '../assets/team1.png'

import './User.css'

import { useContext } from 'react';
import SimpleContext from './context/SimpleContext';

const User = () => {
   
   const context = useContext(SimpleContext)
  
   console.log(context.text);


    return (
        <div>

        <div className='main'>
           
           <img className='teameimgae1' src={teamimage} />

           {context.text} 
       </div>
        </div>
    );
};

export default User;