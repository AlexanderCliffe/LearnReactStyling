import React, { Component } from "react";
import "./css/style.css";
import TopNav from "./TopNav";
import exerciseArray from "../../exerciseData";
import todaylog from "./sampleData";
import Datepicker from "../datePicker/datePicker";
import * as Styled from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default class MainPage extends Component {
  state = {
    exerciseNameInput: false,
    exercises: exerciseArray,
    updatedExercises: exerciseArray,
    currentDayLog: todaylog,
    currentDayWrapper: "currentDay-log-wrapper",
    editIcon: "icon-edit",
    checkedIcon: "icon-checked-hide",
    exerciseName: "exercise-name",
    exerciseSets: "exercise-sets",
    exerciseWeight: "exercise-weight",
    exerciseReps: "exercise-reps",
    toggle: false
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

  onCalendar = calendarActive => {
    if (calendarActive) {
      this.setState({ currentDayWrapper: "currentDay-log-wrapper-hide" });
    } else {
      this.setState({ currentDayWrapper: "currentDay-log-wrapper" });
    }
  };

  toggleEdit = () => {
    this.setState({ toggle: !this.state.toggle });
    if (this.state.checkedIcon === "icon-checked-hide") {
      this.setState({ editIcon: "icon-edit-hide" });
      this.setState({ checkedIcon: "icon-checked" });
    } else {
      this.setState({ checkedIcon: "icon-checked-hide" });
      this.setState({ editIcon: "icon-edit" });
    }
  };

  changeInput = (e, key) => {
    // const workout = this.state.currentDayLog[key].exercise;

    // this.setState({ currentDayLog : update(this.state.currentDayLog, {key: {exercise: {$set: 'x'}}}) });

    console.log([e.target.value]);
    // console.log(e.target.value);
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
                      <label className="label-datePicker">Workout date:</label>
                      <Datepicker
                        onNewDate={this.onNewDate}
                        onCalendar={this.onCalendar}
                      />
                      <div className={this.state.currentDayWrapper}>
                        <table className="currentDay-log-list">
                          <thead>
                            <tr>
                              <th>Exercise</th>
                              <th>Sets</th>
                              <th>Weight</th>
                              <th>Reps</th>
                            </tr>
                          </thead>
                          <tbody>
                            {this.state.currentDayLog.map((workout, key) => {
                              return (
                                <tr>
                                  <td className="column-exercise">
                                    <input
                                      readOnly={!this.state.toggle}
                                      type="text"
                                      className={this.state.exerciseName}
                                      value={workout.exercise}
                                      onKeyUp={this.changeInput}
                                    />
                                  </td>
                                  <td
                                    className="column-sets"
                                    // className={this.state.exerciseSets}
                                  >
                                    {workout.sets}
                                  </td>
                                  <td
                                    className="column-weight"
                                    // className={this.state.exerciseWeight}
                                  >
                                    {workout.weight}
                                  </td>
                                  <td
                                    className="column-reps"
                                    // className={this.state.exerciseReps}
                                  >
                                    {workout.reps}
                                  </td>
                                  <td className="column-edit">
                                    <FontAwesomeIcon
                                      icon="edit"
                                      onClick={this.toggleEdit}
                                      className={this.state.editIcon}
                                    />
                                    <FontAwesomeIcon
                                      icon="check-square"
                                      onClick={this.toggleEdit}
                                      className={this.state.checkedIcon}
                                    />
                                  </td>
                                  <td className="column-delete">
                                    <FontAwesomeIcon
                                      icon="trash"
                                      className="icon-delete"
                                    />
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className="right-form-wrapper">
                    <div className="date-wrapper">
                      <label className="label-exerciseName">
                        Exercise Name:
                      </label>
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
