import React, { Component } from "react";
import Child from "./Child";

export default class Parent extends Component {
  clicky = e => {
    console.log("x");
  };
  render() {
    return (
      <div>
        <Child clack={this.clicky} />
      </div>
    );
  }
}
