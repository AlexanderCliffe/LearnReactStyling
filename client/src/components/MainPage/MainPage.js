import React, { Component } from "react";
import "./css/style.css";
import TopNav from "./TopNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import exerciseArray from "../../exercises";
export default class MainPage extends Component {
  state = {
    exerciseNameInput: false,
    exercises: exerciseArray,
    updatedExercises: exerciseArray
  };
  onFocus = e => {
    this.setState({ [e.target.name]: true });
  };
  onBlur = e => {
    this.setState({ [e.target.name]: false });
  };
  onClick = e => {
    this.setState({ rememberMe: !this.state.rememberMe });
  };

  filterExercises = e => {
    const filter = e.target.value.toLowerCase();
    var updatedList = this.state.exercises;
    if (e.target.value !== "") {
      updatedList = updatedList.filter(item => {
        if (item.name.toLowerCase().includes(filter)) {
          return item;
        }
      });
      this.setState({ updatedExercises: updatedList });
    } else {
      this.setState({ updatedExercises: exerciseArray });
    }
    // Set the filtered state based on what our rules added to newList
    // this.setState({ exercises: updatedList });
  };

  render() {
    let exerciseNamesList = "list-exerciseName";
    let exerciseNameInput = "input-exerciseName";
    if (this.state.exerciseNameInput) {
      exerciseNamesList += "-active";
      //wrapInputExerciseName += " input-active";
      exerciseNameInput += " icon-active";
    }
    if (!this.state.exerciseNameInput) {
      exerciseNamesList = "list-exerciseName";
      //wrapInputExerciseName += " input-active";
      exerciseNameInput += "input-exerciseName";
    }
    return (
      <div>
        <TopNav />
        <div className="page-wrapper">
          <div className="content-wrapper">
            <div className="form-wrapper">
              <form className="form-addExercise">
                <span className="form-title">Add exercise</span>
                <div className="x">
                  {/* <label htmlFor="exerciseNameInput" className="input-label">
                    <FontAwesomeIcon
                      className={exerciseNameIcon}
                      icon="dumbbell"
                    />
                    Exercise Name
                  </label> */}
                  <div>
                    <input
                      className={exerciseNameInput}
                      name="exerciseNameInput"
                      type="text"
                      placeholder="Type to filter"
                      onKeyUp={this.filterExercises}
                      autoComplete="off"
                      onFocus={this.onFocus}
                      onBlur={this.onBlur}
                    />
                    <ul className={exerciseNamesList}>
                      {this.state.updatedExercises.map((exercise, key) => {
                        return (
                          <li key={key} value={exercise.name}>
                            {exercise.name}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
