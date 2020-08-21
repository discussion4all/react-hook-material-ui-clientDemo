import React from 'react';
import { BrowserRouter } from 'react-router-dom'; 
import Router from './Router';
import Nav from './Nav';
import './App.css';
import Footer from './Footer';

function App() {
  return (    
    <BrowserRouter>
    <div className="App">
        <Nav/>
        <Router/>
        <Footer/>
    </div>
    </BrowserRouter>
  );
  
}

export default App;
