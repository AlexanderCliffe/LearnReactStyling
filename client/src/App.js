import React, { Component } from "react";
import Login from "./components/Login";
import { library } from "@fortawesome/fontawesome-svg-core";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faIgloo } from "@fortawesome/free-solid-svg-icons";
import { faUnlock, faUser } from "@fortawesome/fontawesome-free-solid";
import { faSquare, faCheckSquare } from "@fortawesome/fontawesome-free-regular";
library.add(faUnlock, faUser, faSquare, faCheckSquare);
class App extends Component {
  render() {
    return (
      <div className="App">
        <Login />
      </div>
    );
  }
}

export default App;
