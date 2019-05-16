import React, { Component, Fragment } from "react";
import TopNav from "./TopNav";
import exerciseArray from "../../exerciseData";
import todaylog from "./sampleData";
import Datepicker from "../datePicker/datePicker";
import * as Styled from "./styles";

export default class MainPage extends Component {
  state = {
    //UI dependancies
    exerciseNameInput: false,
    exercises: exerciseArray,
    updatedExercises: exerciseArray,
    currentDayLog: todaylog,
    hideDayLog: false,
    showExerciseList: false,
    warningMessage: false,

    //Values
    exerciseNameValue: "",
    dateValue: "",
    setsValue: "1",
    repsValue: "1",
    weightValue: "0",
    //0 = none, 1 = bands, 2 = chains
    selectedEquipment: 0,
    //true = kg, false = lbs
    weightUnit: true,

    //String Literals
    //TODO: Move
    options: ["None", "Bands", "Chains"]
  };
  onFocus = e => {
    this.setState({ [e.target.name]: true });
    this.setState({ showExerciseList: true });
    this.selectAllText(e);
  };

  selectAllText = e => {
    e.target.select();
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
      return null;
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
        return null;
      });
      this.setState({ updatedExercises: updatedList });
    } else {
      this.setState({ updatedExercises: exerciseArray });
    }
  };

  //TODO: reformat?
  onChangeInputValues = async e => {
    const numberRegex = RegExp("[0-9]", "g");
    if (
      e.target.value === undefined ||
      e.target.value === null ||
      e.target.value === ""
    ) {
      await this.setState({ [e.target.name]: e.target.min.toString() });
    } else if (numberRegex.test(e.target.value.charAt(0))) {
      if (e.target.value.length > 1) {
        if (e.target.value.charAt(0) === "0" && e.target.min === "0") {
        } else if (parseInt(e.target.value.charAt(0)) < e.target.min) {
        } else {
          await this.setState({ [e.target.name]: e.target.value.toString() });
        }
      } else {
        if (e.target.value === "0") {
          await this.setState({ [e.target.name]: e.target.min.toString() });
        } else {
          await this.setState({ [e.target.name]: e.target.value.toString() });
        }
      }
    }
  };

  onNewDate = newDate => {
    this.setState({ dateValue: newDate });
  };

  onCalendar = calendarActive => {
    if (calendarActive) {
      this.setState({ hideDayLog: true });
    } else {
      this.setState({ hideDayLog: false });
    }
  };

  deleteRow(e, exercise, setIndex) {
    for (let i = 0; i < this.state.currentDayLog.length; i++) {
      if (this.state.currentDayLog[i] === exercise) {
        this.state.currentDayLog[i].sets.splice(setIndex, 1);
        this.setState({
          currentDayLog: this.state.currentDayLog
        });
      }
    }
  }

  onIncrementSets = () => {
    this.setState({ setsValue: parseInt(this.state.setsValue) + 1 });
  };

  onDecrementSets = () => {
    if (this.state.setsValue > 1) {
      this.setState({ setsValue: parseInt(this.state.setsValue) - 1 });
    }
  };

  onIncrementReps = () => {
    this.setState({ repsValue: parseInt(this.state.repsValue) + 1 });
  };

  onDecrementReps = () => {
    if (this.state.repsValue > 1) {
      this.setState({ repsValue: parseInt(this.state.repsValue) - 1 });
    }
  };

  onClickEquipmentType = e => {
    if (e.target.name === "optionNone") {
      this.setState({ selectedEquipment: 0 });
    } else if (e.target.name === "optionBands") {
      this.setState({ selectedEquipment: 1 });
    } else if (e.target.name === "optionChains") {
      this.setState({ selectedEquipment: 2 });
    }
  };

  addExercise = e => {
    e.preventDefault();

    for (
      let exericiseIndex = 0;
      exericiseIndex < this.state.updatedExercises.length;
      exericiseIndex++
    ) {
      if (
        this.state.updatedExercises[exericiseIndex].name !==
        this.state.exerciseNameValue
      ) {
        console.log("x");
        this.setState({ warningMessage: true });
      }
    }

    const setObject = {
      reps: this.state.repsValue,
      weight: this.state.weightValue,
      unit: this.state.weightUnit
    };

    //first loop the array of exercise to check if this exercise is already included
    let exerciseFound = false;
    for (let i = 0; i < this.state.currentDayLog.length; i++) {
      // if the exercise does exist
      if (this.state.exerciseNameValue === this.state.currentDayLog[i].name) {
        exerciseFound = true;
        for (let setNumber = 0; setNumber < this.state.setsValue; setNumber++) {
          this.state.currentDayLog[i].sets.push(setObject);
        }
      }
    }
    //if it's not included, add a new one
    if (exerciseFound === false) {
      let setsArray = [];
      for (let setNumber = 0; setNumber < this.state.setsValue; setNumber++) {
        setsArray.push(setObject);
      }
      const addedExercise = {
        name: this.state.exerciseNameValue,
        sets: setsArray
      };
      this.state.currentDayLog.push(addedExercise);
    }
    this.setState({
      currentDayLog: this.state.currentDayLog
    });
  };

  onSelectEquipment = selectedEquipment => {
    this.setState({ selectedEquipment });
  };

  toggleWeightUnit = () => {
    this.setState({ weightUnit: !this.state.weightUnit });
  };

  render() {
    return (
      <Fragment>
        <TopNav />
        <Styled.PageWrapper>
          <Styled.ContentWrapper>
            <Styled.FormWrapper>
              <Styled.ExerciseForm>
                {/* <Styled.FormTitle /> */}
                <Styled.FormContentWrapper>
                  <Styled.LeftPanelWrapper>
                    <Styled.DateLabel>Workout date</Styled.DateLabel>
                    <Styled.DatepickerWrapper>
                      <Datepicker
                        onNewDate={this.onNewDate}
                        onCalendar={this.onCalendar}
                      />
                    </Styled.DatepickerWrapper>
                    <Styled.DayWrapper hide={this.state.hideDayLog}>
                      {this.state.currentDayLog.map((exercise, index) => {
                        return (
                          <Styled.DayLogExercise key={index}>
                            <Styled.DayLogExerciseName>
                              {exercise.name}
                            </Styled.DayLogExerciseName>
                            <Styled.DayLogTable>
                              <tbody>
                                {exercise.sets.map((set, setIndex) => {
                                  return (
                                    <tr key={setIndex}>
                                      <td>
                                        <Styled.RepsColumn>
                                          {set.reps}
                                        </Styled.RepsColumn>
                                      </td>
                                      <td> x </td>
                                      <td>
                                        <Styled.WeightColumn>
                                          {set.weight} {set.unit}
                                        </Styled.WeightColumn>
                                      </td>
                                      <td>
                                        <Styled.DeleteColumn>
                                          <Styled.TrashIcon
                                            icon="trash"
                                            onClick={e =>
                                              this.deleteRow(
                                                e,
                                                exercise,
                                                setIndex
                                              )
                                            }
                                          />
                                        </Styled.DeleteColumn>
                                      </td>
                                    </tr>
                                  );
                                })}
                              </tbody>
                            </Styled.DayLogTable>
                          </Styled.DayLogExercise>
                        );
                      })}
                    </Styled.DayWrapper>
                  </Styled.LeftPanelWrapper>

                  <Styled.RightPanelWrapper>
                    <Styled.ExerciseNameLabel>
                      Exercise Name
                    </Styled.ExerciseNameLabel>
                    <Styled.ExerciseNameWrapper>
                      <Styled.ExerciseNameInput
                        name="exerciseNameInput"
                        type="text"
                        autoComplete="off"
                        onFocus={this.onFocus}
                        onBlur={this.onBlur}
                        value={this.state.exerciseNameValue}
                        onChange={this.onChange}
                      />
                      <Styled.ExerciseNameWarning
                        warning={this.state.warningMessage}
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
                    </Styled.ExerciseNameWrapper>

                    <Styled.WorkoutMetricsWrapper>
                      <Styled.WorkoutMetricWrapper>
                        <Styled.WorkoutMetricInfoWrapper>
                          <Styled.WorkoutMetricLabel>
                            Sets
                          </Styled.WorkoutMetricLabel>
                          <Styled.WorkoutMetricInput
                            min="1"
                            type="number"
                            value={this.state.setsValue.toString()}
                            onChange={this.onChangeInputValues}
                            name="setsValue"
                            onFocus={this.selectAllText}
                          />
                        </Styled.WorkoutMetricInfoWrapper>
                        <Styled.CustomSpinBox
                          onAdd={this.onIncrementSets}
                          onMinus={this.onDecrementSets}
                        />
                      </Styled.WorkoutMetricWrapper>

                      <Styled.WorkoutMetricWrapper>
                        <Styled.WorkoutMetricInfoWrapper>
                          <Styled.WorkoutMetricLabel>
                            Reps
                          </Styled.WorkoutMetricLabel>
                          <Styled.WorkoutMetricInput
                            min="1"
                            type="number"
                            value={this.state.repsValue.toString()}
                            onChange={this.onChangeInputValues}
                            name="repsValue"
                            onFocus={this.selectAllText}
                          />
                        </Styled.WorkoutMetricInfoWrapper>
                        <Styled.CustomSpinBox
                          onAdd={this.onIncrementReps}
                          onMinus={this.onDecrementReps}
                        />
                      </Styled.WorkoutMetricWrapper>

                      <Styled.WorkoutMetricWrapper>
                        <Styled.WorkoutMetricInfoWrapper>
                          <Styled.WorkoutMetricLabel>
                            Weight
                          </Styled.WorkoutMetricLabel>
                          <Styled.WorkoutMetricInput
                            min="0"
                            type="number"
                            value={this.state.weightValue.toString()}
                            onChange={this.onChangeInputValues}
                            name="weightValue"
                            onFocus={this.selectAllText}
                          />
                        </Styled.WorkoutMetricInfoWrapper>
                        <Styled.WeightUnitPicker
                          selectedWeightUnit={this.state.weightUnit}
                          toggleWeightUnit={this.toggleWeightUnit}
                        />
                      </Styled.WorkoutMetricWrapper>
                    </Styled.WorkoutMetricsWrapper>

                    <Styled.EquipmentWrapper>
                      <Styled.EquipmentOptionLabel>
                        Extra Equipment
                      </Styled.EquipmentOptionLabel>
                      <Styled.EquipmentOptionsWrapper>
                        {this.state.options.map((option, i) => {
                          if (i === this.state.selectedEquipment) {
                            let selectedOption = (
                              <Styled.SelectedOption key={i}>
                                {option}
                              </Styled.SelectedOption>
                            );
                            return selectedOption;
                          } else {
                            let unselectedOption = (
                              <Styled.Option
                                key={i}
                                name={i}
                                onClick={this.onSelectEquipment.bind(this, i)}
                                value={i}
                              >
                                {option}
                              </Styled.Option>
                            );
                            return unselectedOption;
                          }
                        })}
                      </Styled.EquipmentOptionsWrapper>
                    </Styled.EquipmentWrapper>

                    <Styled.AddExerciseButton onClick={this.addExercise}>
                      + Add Exercise
                    </Styled.AddExerciseButton>
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
