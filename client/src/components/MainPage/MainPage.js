import React, { Component } from "react";
import "./css/style.css";
import TopNav from "./TopNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import exerciseArray from "../../exercises";
export default class MainPage extends Component {
  state = {
    valueExerciseName: "",
    exerciseNameInput: false,
    exercises: exerciseArray,
    updatedExercises: exerciseArray,
    exerciseNameItem: ""
  };
  onFocus = e => {
    this.setState({ [e.target.name]: true });
  };
  onBlur = e => {
    this.setState({ [e.target.name]: false });
  };
  onClick = value => {
    this.setState({ valueExerciseName: value });
  };

  onChange = e => {
    this.setState({ valueExerciseName: e.target.value });
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
    //  console.log(this.state.exerciseNameItem);
    let exerciseNamesList = "list-exerciseName";
    let exerciseNameInput = "input-exerciseName";
    if (this.state.exerciseNameInput) {
      exerciseNamesList += "-active";

      //wrapInputExerciseName += " input-active";
      exerciseNameInput += " icon-active";
    }
    if (!this.state.exerciseNameInput) {
      // exerciseNamesList = "list-exerciseName";
      //wrapInputExerciseName += " input-active";
      //exerciseNameInput += "input-exerciseName";
    }
    return (
      <div>
        <TopNav />
        <div className="page-wrapper">
          <div className="content-wrapper">
            <div className="form-wrapper">
              <form className="form-addExercise">
                <span className="form-title">Add exercise</span>
                <div className="form-content-wrapper">
                  <div className="exerciseName-wrapper">
                    <div className="exerciseName-label-wrapper">
                      <label
                        htmlFor="exerciseName-input-wrapper"
                        className="input-label"
                      >
                        <FontAwesomeIcon
                          className="exerciseNameIcon"
                          icon="dumbbell"
                        />
                        Exercise Name
                      </label>
                    </div>
                    <div id="exerciseName-input-wrapper">
                      <input
                        className={exerciseNameInput}
                        name="exerciseNameInput"
                        type="text"
                        placeholder="Type to filter"
                        onKeyUp={this.filterExercises}
                        autoComplete="off"
                        onFocus={this.onFocus}
                        onBlur={this.onBlur}
                        value={this.state.valueExerciseName}
                        onChange={this.onChange}
                      />
                      <ul className={exerciseNamesList}>
                        {this.state.updatedExercises.map((exercise, key) => {
                          return (
                            <li
                              key={key}
                              value={exercise.name}
                              onMouseDown={this.onClick.bind(
                                this,
                                exercise.name
                              )}
                              name="exerciseNameItem"
                            >
                              {exercise.name}
                            </li>
                          );
                        })}
                        {/* onMouseDown function is triggered when the mouse button is held down
                      (onMouseUp function is triggered when the mouse button is released)
                      onMouseDown is used instead of onClick because onClick would be executed after
                      the onBlur of the input, meaning that it would never be executed. */}
                      </ul>
                    </div>
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
