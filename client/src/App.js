import React, { Component } from "react";
import Login from "./components/Login";
import Login2 from "./components/login2";
//import Navbar from "./components/Navbar";
import MainPage from "./components/MainPage/MainPage";
import GlobalStyle from "./globalStyle";
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
  faRedoAlt,
  faEdit,
  faTrash,
  faExclamationTriangle
} from "@fortawesome/fontawesome-free-solid";
import {
  faSquare,
  faCheckSquare,
  faCaretSquareUp,
  faCaretSquareDown
} from "@fortawesome/fontawesome-free-regular";
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
  faRedoAlt,
  faEdit,
  faTrash,
  faCaretSquareUp,
  faCaretSquareDown,
  faExclamationTriangle
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <GlobalStyle />
        <Router>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/login2" component={Login2} />
            <Route exact path="/" component={MainPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
