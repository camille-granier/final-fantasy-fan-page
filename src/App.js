import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Creatures from "./pages/Creatures";
import Games from "./pages/Games"
import LegalNotices from "./pages/LegalNotices";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/Creatures" element={ <Creatures/> } />
        <Route path="/Games" element={ <Games/> } />
        <Route path="/About" element={ <About/> } />
        <Route element={ <NotFound/> } />
        <Route path="/LegalNotices" element={ <LegalNotices/> } />
        <Route path="/PrivacyPolicy" element={ <PrivacyPolicy/> } />
      </Routes>
    </div>
  );
}

export default App;
