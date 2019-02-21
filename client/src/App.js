import React, { Component } from "react";
import Login from "./components/Login";
import Navbar from "./components/Navbar";

import { library } from "@fortawesome/fontawesome-svg-core";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faIgloo } from "@fortawesome/free-solid-svg-icons";
import { faUnlock, faUser } from "@fortawesome/fontawesome-free-solid";
import { faSquare, faCheckSquare } from "@fortawesome/fontawesome-free-regular";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
library.add(faUnlock, faUser, faSquare, faCheckSquare);
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        {/* <Router>
          <Navbar />
          <Switch>
            <Route exact path="/login" component={Login} />
          </Switch>
        </Router> */}
      </div>
    );
  }
}

export default App;
