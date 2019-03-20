import React, { Component } from "react";
import Login from "./components/Login";
//import Navbar from "./components/Navbar";
import MainPage from "./components/MainPage/MainPage";
//import datepicker from "./components/datePicker/datePicker";
//import test from "./components/tester/index";
//import Calendar from "./components/Calendar/index";
//import ExampleBlur from "./components/ExampleBlur/ExampleBlur";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUnlock,
  faUser,
  faAddressCard,
  faInfoCircle,
  faDumbbell,
  faCalendar,
  faCubes,
  faWeight,
  faClock,
  faRedoAlt
} from "@fortawesome/fontawesome-free-solid";
import { faSquare, faCheckSquare } from "@fortawesome/fontawesome-free-regular";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
library.add(
  faUnlock,
  faUser,
  faSquare,
  faCheckSquare,
  faAddressCard,
  faInfoCircle,
  faDumbbell,
  faCalendar,
  faCubes,
  faWeight,
  faClock,
  faRedoAlt
);
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={MainPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
