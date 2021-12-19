import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import signin from "./components/signin/Signin";
import signup from "./components/signup/Signup";
import Deshboard from "./components/Deshboard";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {

  return (
    <div className="App">
      <Router>
      <Switch>
      <Route exact path="/" component={signin} />
        
          <Route exact path="/Deshboard" component={Deshboard} />
          
          <Route exact path="/signup" component={signup} />
        
        </Switch>
      </Router>
    </div>
  );
}

export default App;