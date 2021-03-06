import React, { Component } from "react";
import { isDate, getDateISO } from "../../helpers/calendar";
import * as Styled from "../datePicker/styles";
import Calendar from "../Calendar";

export default class Child extends Component {
  state = {
    date: getDateISO(new Date()),
    calendarOpen: false
  };

  toggleCalendar = () =>
    this.setState({ calendarOpen: !this.state.calendarOpen });

  handleChange = evt => evt.preventDefault();

  handleDateChange = date => {
    const { onDateChanged } = this.props;
    const { date: currentDate } = this.state;
    const newDate = date ? getDateISO(date) : null;

    currentDate !== newDate &&
      this.setState({ date: newDate, calendarOpen: false }, () => {
        typeof onDateChanged === "function" && onDateChanged(this.state.date);
      });
    this.props.clack();
  };

  componentDidMount() {
    const { value: date } = this.props;
    const newDate = date && new Date(date);

    isDate(newDate) && this.setState({ date: getDateISO(newDate) });
  }

  componentDidUpdate(prevProps) {
    const { value: date } = this.props;
    const { value: prevDate } = prevProps;
    const dateISO = getDateISO(new Date(date));
    const prevDateISO = getDateISO(new Date(prevDate));

    dateISO !== prevDateISO && this.setState({ date: dateISO });
  }

  transformDate(date) {
    const dateVals = date.split("-");
    return dateVals[2] + " / " + dateVals[1] + " / " + dateVals[0];
  }

  render() {
    const { label } = this.props;
    const { date, calendarOpen } = this.state;
    return (
      <Styled.DatePickerContainer>
        {!calendarOpen && (
          <Styled.DatePickerFormGroup>
            <Styled.DatePickerLabel>
              {label || "Enter Date"}
            </Styled.DatePickerLabel>

            <Styled.DatePickerInput
              type="text"
              value={this.transformDate(date)}
              onChange={this.handleChange}
              readOnly="readonly"
              placeholder="DD / MM / YYYY"
            />
          </Styled.DatePickerFormGroup>
        )}

        <Styled.DatePickerDropdown
          isOpen={calendarOpen}
          toggle={this.toggleCalendar}
        >
          <Styled.DatePickerDropdownToggle color="transparent" />

          <Styled.DatePickerDropdownMenu>
            {calendarOpen && (
              <Calendar
                date={date && new Date(date)}
                onDateChanged={this.handleDateChange}
              />
            )}
          </Styled.DatePickerDropdownMenu>
        </Styled.DatePickerDropdown>
      </Styled.DatePickerContainer>
    );
  }
}
