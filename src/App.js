
import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';



import 'bootstrap/dist/css/bootstrap.min.css';

//components
import Header from './components/Header';
import Footer from './components/Footer';
import Admin from './components/Admin'
import User from './components/User'

//context
import SimpleContext from './components/context/SimpleContext';




function App() {

  const [ text , setText] = useState('We Can Do It :)')



  


  return (

    

      

          
    <div className='App'>
      
      <SimpleContext.Provider className='text' value={{text}}>
          <Header/>
          
          <Routes>
            
            <Route exact path='/admin' element={< Admin />}></Route>
            <Route exact path='/'  element={< User />}></Route>
          </Routes>
          <Footer/>
          </SimpleContext.Provider>
      
    </div>



   
  );
}

export default App;
