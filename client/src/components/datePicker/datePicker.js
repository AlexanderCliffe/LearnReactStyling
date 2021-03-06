import React from "react";
import PropTypes from "prop-types";
import Calendar from "../Calendar";
import * as Styled from "./styles";
import { isDate, getDateISO } from "../../helpers/calendar";

class Datepicker extends React.Component {
  state = { date: getDateISO(new Date()), calendarOpen: false };

  toggleCalendar = async () => {
    await this.setState({ calendarOpen: !this.state.calendarOpen });
    this.props.onCalendar(this.state.calendarOpen);
  };
  handleChange = evt => evt.preventDefault();

  handleDateChange = async date => {
    const { onDateChanged } = this.props;
    const { date: currentDate } = this.state;
    const newDate = date ? getDateISO(date) : null;

    currentDate !== newDate &&
      (await this.setState({ date: newDate, calendarOpen: false }, () => {
        typeof onDateChanged === "function" && onDateChanged(this.state.date);
      }));
    this.props.onCalendar(this.state.calendarOpen);

    //sets the onNewDate prop to the newly selected date.
    //this allows a component to use this component and use the input date however it wills.
    this.props.onNewDate(newDate);
  };

  componentDidMount() {
    const { value: date } = this.props;
    const newDate = date && new Date(date);

    isDate(newDate) && this.setState({ date: getDateISO(newDate) });
    //set the onNewDate prop to the starting date (today's date)
    this.props.onNewDate(this.state.date);
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
    const { date, calendarOpen } = this.state;
    return (
      <Styled.DatePickerContainer>
        {!calendarOpen && (
          <Styled.DatePickerFormGroup>
            <Styled.DatePickerInput
              type="text"
              value={this.transformDate(date)}
              onChange={this.handleChange}
              readOnly="readonly"
              placeholder="DD / MM / YYYY"
            />
            <Styled.DatePickerButton>
              <Styled.DateIcon icon="calendar" size="lg" />
            </Styled.DatePickerButton>
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

Datepicker.propTypes = {
  value: PropTypes.string,
  onDateChanged: PropTypes.func
};

export default Datepicker;
