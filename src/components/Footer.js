import React from 'react';
import './Footer.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';



const Footer = () => {
    return (
        <>
         {/* <footer className='footer'>
             <p>
             <Link className='link1' to="/">go to user</Link>
             <br></br>
             <Link className='link2' to="admin">go to admin</Link></p>
          </footer>  */}










          <Card className='footer'>
           <Card.Body className='footerBody'>
           <Card.Text className='footerLink1'  ><Link  className='link1 footerText1' to="/">go to user</Link></Card.Text>
           <Card.Text className='footerLink2'><Link  className='link2 footerText2' to="admin">go to admin</Link></Card.Text>
           </Card.Body>
          </Card>
        </>
    );
};

export default Footer;