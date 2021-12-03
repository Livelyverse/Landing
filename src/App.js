import React from 'react';
import Home from './pages/Home';

import Utitlity from './pages/Utility';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
            <Route path="/Utility">
                <Utitlity />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
      </div>
    </Router>
  );
}

