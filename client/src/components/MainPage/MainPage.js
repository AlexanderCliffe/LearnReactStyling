import React, { Component, Fragment } from "react";
import TopNav from "./TopNav";
import exerciseArray from "../../exerciseData";
import todaylog from "./sampleData";
import Datepicker from "../datePicker/datePicker";
import * as Styled from "./styles";

export default class MainPage extends Component {
  state = {
    exerciseNameInput: false,
    exercises: exerciseArray,
    updatedExercises: exerciseArray,
    currentDayLog: todaylog,
    hideDayLog: false,
    editIcon: "icon-edit",
    editToggle: true,
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
      this.setState({ hideDayLog: true });
    } else {
      this.setState({ hideDayLog: false });
    }
  };

  toggleEdit = () => {
    this.setState({ editToggle: !this.state.editToggle });
  };

  changeInput = (e, key) => {
    // const workout = this.state.currentDayLog[key].exercise;

    // this.setState({ currentDayLog : update(this.state.currentDayLog, {key: {exercise: {$set: 'x'}}}) });

    console.log([e.target.value]);
    // console.log(e.target.value);
  };

  render() {
    return (
      <Fragment>
        <TopNav />
        <Styled.PageWrapper>
          <Styled.ContentWrapper>
            <Styled.FormWrapper>
              <Styled.ExerciseForm>
                <Styled.FormTitle>Add exercise</Styled.FormTitle>
                <Styled.FormContentWrapper>
                  <Styled.LeftPanelWrapper>
                    <Styled.DateWrapper>
                      <Styled.DateLabel>Workout date:</Styled.DateLabel>
                      <Datepicker
                        onNewDate={this.onNewDate}
                        onCalendar={this.onCalendar}
                      />
                      <Styled.DayWrapper hide={this.state.hideDayLog}>
                        <Styled.DayLogTable>
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
                                  <Styled.ExerciseColumn>
                                    <Styled.ExerciseColumnInput
                                      readOnly={!this.state.toggle}
                                      type="text"
                                      value={workout.exercise}
                                      onKeyUp={this.changeInput}
                                    />
                                  </Styled.ExerciseColumn>

                                  <Styled.SetsColumn>
                                    {workout.sets}
                                  </Styled.SetsColumn>

                                  <Styled.WeightColumn>
                                    {workout.weight}
                                  </Styled.WeightColumn>

                                  <Styled.RepsColumn>
                                    {workout.reps}
                                  </Styled.RepsColumn>

                                  <Styled.EditColumn>
                                    <Styled.ToggleEditIcon
                                      onClick={this.toggleEdit}
                                      toggle={this.state.editToggle}
                                    />
                                  </Styled.EditColumn>

                                  <Styled.DeleteColumn>
                                    <Styled.TrashIcon icon="trash" />
                                  </Styled.DeleteColumn>
                                </tr>
                              );
                            })}
                          </tbody>
                        </Styled.DayLogTable>
                      </Styled.DayWrapper>
                    </Styled.DateWrapper>
                  </Styled.LeftPanelWrapper>

                  <Styled.RightPanelWrapper>
                    <Styled.ExerciseWrapper>
                      <Styled.ExerciseNameLabel>
                        Exercise Name:
                      </Styled.ExerciseNameLabel>
                      <Styled.ExerciseInput
                        name="exerciseNameInput"
                        type="text"
                        placeholder="Type to filter"
                        onKeyUp={this.filterExercises}
                        autoComplete="off"
                        onFocus={this.onFocus}
                        onBlur={this.onBlur}
                      />
                      <Styled.ExerciseList>
                        {this.state.updatedExercises.map((exercise, key) => {
                          return (
                            <Styled.ExerciseListItem
                              key={key}
                              value={exercise.name}
                            >
                              {exercise.name}
                            </Styled.ExerciseListItem>
                          );
                        })}
                      </Styled.ExerciseList>
                    </Styled.ExerciseWrapper>
                  </Styled.RightPanelWrapper>
                </Styled.FormContentWrapper>
              </Styled.ExerciseForm>
            </Styled.FormWrapper>
          </Styled.ContentWrapper>
        </Styled.PageWrapper>
      </Fragment>
    );
  }
}
