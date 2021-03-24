import React from "react";
import './App.css';
import Home from "./Home";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Movies from "./Movies";

function App() {
  return (
    <Router>
       <div className="App">
          <Switch>
             <Route exact path="/">
                 <Home />
             </Route>
             <Route exact path="/Movies">
                 <Movies />
             </Route>
          </Switch>
       </div>
    </Router>
  );
}

export default App;
