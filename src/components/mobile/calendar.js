import React from "react";
import Calendar from "tui-calendar";

class CalendarMain extends React.Component {
  constructor() {
    super();

    this.options = {
      defaultView: "week",
      useCreationPopup: true,
      useDetailPopup: true,
      isReadOnly: true,
      month: {},
      week: {}
    };
  }
  componentDidMount() {
    this.calendar = this.createCalendarMain();
    console.log('GIVECALENDARPROPS', this.props.giveCalendarProps);
    this
      .calendar
      .createSchedules(this.props.giveCalendarProps);
    // this.calendar.updateSchedule("1", "1", {   start: "2018-08-06T11:00:00", end:
    // "2018-08-06T21:00:00" });
  }

  componentDidUpdate() {
    this
      .calendar
      .render();

  }

  createCalendarMain() {
    return new Calendar("#calendar", this.options);
  }

  render() {
    return (
      <div>
        <div id="calendar" style={{
          height: "600px"
        }}/>
      </div>
    );
  }
}

export default CalendarMain;
