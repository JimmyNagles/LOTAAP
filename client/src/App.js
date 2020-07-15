import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavMobil from "./Components/Nav/NavMobil";

import Home from "./Pages/Home";
import NoMatch from "./Pages/NoMatch";
function App() {
  return (
    <Router>
      <div>
        <NavMobil />
        <Switch>
          <Route exact path="/" component={Home} />

          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
