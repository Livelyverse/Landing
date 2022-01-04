import React from 'react';
import Home from './pages/Home';

import Team from './pages/Team';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Partners from './pages/Partners';
import Partner from './pages/Partner';

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
            <Route exact path="/partners" component={Partners} /> 
            <Route exact path="/partner/:name" component={Partner}/>
            <Route exact path="/team" component={Team} />
            <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

