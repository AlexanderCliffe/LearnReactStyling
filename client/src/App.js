import React, { Component } from "react";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
//import AHomepage from "./components/Homepage/AHomepage";
import ExampleBlur from "./components/ExampleBlur/ExampleBlur";
import { library } from "@fortawesome/fontawesome-svg-core";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faIgloo } from "@fortawesome/free-solid-svg-icons";
import {
  faUnlock,
  faUser,
  faAddressCard,
  faInfoCircle
} from "@fortawesome/fontawesome-free-solid";
import { faSquare, faCheckSquare } from "@fortawesome/fontawesome-free-regular";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";
library.add(
  faUnlock,
  faUser,
  faSquare,
  faCheckSquare,
  faAddressCard,
  faInfoCircle
);
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={ExampleBlur} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
