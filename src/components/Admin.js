import React from 'react';
import './Admin.css'

import team2 from '../assets/team2.png'

const Admin = () => {
    return (
        <div className='first'>
           
          <div className='second'>
          <img className='imgteam2' src={team2} />
            <p className='padmin'>How can we help?</p>
          </div>
        </div>
    );
};

export default Admin;