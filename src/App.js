import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Creatures from "./pages/Creatures";
import Games from "./pages/Games"

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route exact path="/" element={ <Home/> } />
        <Route exact path="/Creatures" element={ <Creatures/> } />
        <Route exact path="/Games" element={ <Games/> } />
        <Route exact path="/About" element={ <About/> } />
        <Route element={ <NotFound/> } />
      </Routes>
    </div>
  );
}

export default App;
