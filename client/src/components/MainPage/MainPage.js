import React, { Component } from "react";
import "./css/style.css";
import TopNav from "./TopNav";
import exerciseArray from "../../exercises";
import todaylog from "./sampleData";
import Datepicker from "../datePicker/datePicker";
export default class MainPage extends Component {
  state = {
    exerciseNameInput: false,
    exercises: exerciseArray,
    updatedExercises: exerciseArray,
    currentDayLog: todaylog
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

  onNewDate = newDate => {
    console.log(newDate);
  };

  render() {
    let exerciseNamesList = "list-exerciseName";
    let exerciseNameInput = "input-exerciseName";
    exerciseNamesList += "-active";
    //wrapInputExerciseName += " input-active";
    exerciseNameInput += " icon-active";

    return (
      <div>
        <TopNav />
        <div className="page-wrapper">
          <div className="content-wrapper">
            <div className="form-wrapper">
              <form className="form-addExercise">
                <span className="form-title">Add exercise</span>
                <div className="form-content-wrapper">
                  <div className="left-form-wrapper">
                    <div className="date-wrapper">
                      <label className="label-datePicker">Workout Date:</label>
                      <Datepicker onNewDate={this.onNewDate} />
                      {/* <div className="currentDay-log-wrapper">
                      <ul className="currentDay-log-list">
                        {this.state.currentDayLog.map((workout, key) => {
                          return (
                            <li key={key} value={workout.exercise}>
                              {workout.exercise}
                            </li>
                          );
                        })}
                      </ul>
                    </div> */}
                    </div>
                  </div>
                  <div className="right-form-wrapper">
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
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
