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
    editToggle: false,
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

  deleteRow(index) {
    this.state.currentDayLog.splice(index, 1);
    this.setState({
      currentDayLog: this.state.currentDayLog
    });
  }

  changeInput(e, index) {
    let currentDayExercises = this.state.currentDayLog;
    currentDayExercises[index].exercise = e.target.value;
    this.setState({
      currentDayLog: currentDayExercises
    });
  }

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
                            {this.state.currentDayLog.map((workout, index) => {
                              return (
                                <tr key={index}>
                                  <Styled.ColumnWithoutOverflow>
                                    <Styled.ExerciseColumn>
                                      <Styled.ExerciseColumnInput
                                        readOnly={!this.state.editToggle}
                                        type="text"
                                        value={workout.exercise}
                                        onChange={e =>
                                          this.changeInput(e, index)
                                        }
                                      />
                                    </Styled.ExerciseColumn>
                                  </Styled.ColumnWithoutOverflow>
                                  <Styled.ColumnWithoutOverflow>
                                    <Styled.SetsColumn>
                                      {workout.sets}
                                    </Styled.SetsColumn>
                                  </Styled.ColumnWithoutOverflow>
                                  <Styled.ColumnWithoutOverflow>
                                    <Styled.WeightColumn>
                                      {workout.weight}
                                    </Styled.WeightColumn>
                                  </Styled.ColumnWithoutOverflow>
                                  <Styled.ColumnWithoutOverflow>
                                    <Styled.RepsColumn>
                                      {workout.reps}
                                    </Styled.RepsColumn>
                                  </Styled.ColumnWithoutOverflow>
                                  <Styled.ColumnWithoutOverflow>
                                    <Styled.EditColumn>
                                      <Styled.ToggleEditIcon
                                        onClick={this.toggleEdit}
                                        toggle={!this.state.editToggle}
                                      />
                                    </Styled.EditColumn>
                                  </Styled.ColumnWithoutOverflow>
                                  <Styled.ColumnWithoutOverflow>
                                    <Styled.DeleteColumn>
                                      <Styled.TrashIcon
                                        icon="trash"
                                        onClick={e => this.deleteRow(e, index)}
                                      />
                                    </Styled.DeleteColumn>
                                  </Styled.ColumnWithoutOverflow>
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
