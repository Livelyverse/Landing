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
import Transaction from './pages/Transaction';
import ScrollToTop from './Components/Basic/ScrollToTop';

export default function App() {
  return (
    <Router>
      <ScrollToTop>
        <Switch>
            <Route  path="/partners" component={Partners} /> 
            <Route  path="/partner/:name" component={Partner}/>
            <Route  path="/team" component={Team} />
            <Route  path="/transaction" component={Transaction} />
            <Route  path="/" component={Home} />
        </Switch>
      </ScrollToTop>
    </Router>
  );
}

