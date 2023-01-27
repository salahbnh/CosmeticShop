import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router ,Routes ,Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import About from './components/pages/About';
import Signup from './components/pages/Signup';


function App() {
  return (
<>  
    <Router>
      <NavBar />
      <Home />
      <Routes>
        <Route path='/' exact component= {Home} />
        <Route path='/Products' exact component= {Products} />
        <Route path='/about' exact component= {About} />
        <Route path='/signup' exact component= {Signup} />
      </Routes>
      
    </Router>
  </>
        
  );
}

export default App;
