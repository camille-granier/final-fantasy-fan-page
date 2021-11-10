import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import NotFound from "./pages/NotFound.js";
import Creatures from "./pages/Creatures.js";
import Games from "./pages/Games.js"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Creatures" component={Creatures} />
        <Games exact path="/Games" component={Games} />
        <Route exact path="/About" component={About} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
