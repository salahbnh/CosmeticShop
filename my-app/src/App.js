import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router ,Routes ,Route,Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import About from './components/pages/About';
import Signup from './components/pages/Signup';
import Footer from './components/Footer';


function App() {
  return (
<>  
    <div>
      <NavBar />
      <Home/>
    </div>
  </>
        
  );
}

export default App;
