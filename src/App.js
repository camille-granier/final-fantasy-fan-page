import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Creatures from "./pages/Creatures";
import Games from "./pages/Games"

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
