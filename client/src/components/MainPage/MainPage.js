import React, { Component, Fragment } from "react";
import TopNav from "./TopNav";
import exerciseArray from "../../exerciseData";
import todaylog from "./sampleData";
import Datepicker from "../datePicker/datePicker";
import * as Styled from "./styles";

export default class MainPage extends Component {
  state = {
    exerciseNameInput: false,
    exerciseNameValue: "",
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
    toggle: false,
    showExerciseList: false,
    setsValue: 1,
    repsValue: 1,
    weightValue: 1
  };
  onFocus = e => {
    this.setState({ [e.target.name]: true });
    this.setState({ showExerciseList: true });
  };
  onBlur = e => {
    this.setState({ [e.target.name]: false });
    this.setState({ showExerciseList: false });
  };
  onClickExerciseName = value => {
    this.setState({ exerciseNameValue: value });
    this.setState({ showExerciseList: false });

    const filter = value.toLowerCase();
    var updatedList = this.state.exercises;

    updatedList = updatedList.filter(item => {
      if (item.name.toLowerCase().includes(filter)) {
        return item;
      }
    });
    this.setState({ updatedExercises: updatedList });
  };
  onChange = e => {
    this.setState({ exerciseNameValue: e.target.value });
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
  };

  onChangeInputValues = e => {
    this.setState({ [e.target.name]: e.target.value });
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

  onIncrementSets = () => {
    this.setState({ setsValue: this.state.setsValue + 1 });
  };

  onDecrementSets = () => {
    if (this.state.setsValue > 1) {
      this.setState({ setsValue: this.state.setsValue - 1 });
    }
  };

  onIncrementReps = () => {
    this.setState({ repsValue: this.state.repsValue + 1 });
  };

  onDecrementReps = () => {
    if (this.state.repsValue > 1) {
      this.setState({ repsValue: this.state.repsValue - 1 });
    }
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
                        //onKeyUp={this.filterExercises}
                        autoComplete="off"
                        onFocus={this.onFocus}
                        onBlur={this.onBlur}
                        value={this.state.exerciseNameValue}
                        onChange={this.onChange}
                      />
                      <Styled.ExerciseList show={this.state.showExerciseList}>
                        {this.state.updatedExercises.map((exercise, key) => {
                          return (
                            <Styled.ExerciseListItem
                              key={key}
                              value={exercise.name}
                              onMouseDown={this.onClickExerciseName.bind(
                                this,
                                exercise.name
                              )}
                            >
                              {/* onMouseDown function is triggered when the mouse button is held down
                      (onMouseUp function is triggered when the mouse button is released)
                      onMouseDown is used instead of onClick because onClick would be executed after
                      the onBlur of the input, meaning that it would never be executed. */}
                              {exercise.name}
                            </Styled.ExerciseListItem>
                          );
                        })}
                      </Styled.ExerciseList>
                      <Styled.SetsRepsWrapper>
                        <Styled.SetsWrapper>
                          <Styled.SetsInputWrapper>
                            <Styled.SetsLabel>Sets</Styled.SetsLabel>
                            <Styled.SetsInput
                              type="number"
                              value={this.state.setsValue}
                              onChange={this.onChangeInputValues}
                              name="setsValue"
                            />
                          </Styled.SetsInputWrapper>
                          <Styled.CustomSpinBox
                            onAdd={this.onIncrementSets}
                            onMinus={this.onDecrementSets}
                          />
                        </Styled.SetsWrapper>
                        <Styled.RepsWrapper>
                          <Styled.RepsInputWrapper>
                            <Styled.RepsLabel>Reps</Styled.RepsLabel>
                            <Styled.RepsInput
                              type="number"
                              value={this.state.repsValue}
                              onChange={this.onChangeInputValues}
                              name="repsValue"
                            />
                          </Styled.RepsInputWrapper>
                          <Styled.CustomSpinBox
                            onAdd={this.onIncrementReps}
                            onMinus={this.onDecrementReps}
                          />
                        </Styled.RepsWrapper>
                      </Styled.SetsRepsWrapper>
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
