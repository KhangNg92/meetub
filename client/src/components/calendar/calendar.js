import React, { Component } from "react";
import DateTimePicker from "react-datetime-picker";
import Link from "react-router-dom/Link";

class Calendar2 extends Component {
  state = {
    date: new Date()
  };
  render() {
    return (
      <div className="calendar">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div class="card bg-transparent border-0">
          <div class="card-body">
            <h5 class="card-title text-white">Let's pick you a date</h5>{" "}
            <DateTimePicker
              className="text-white"
              onChange={this.onChange}
              value={this.state.date}
              isCalendarOpen={true}
              disableClock={true}
            />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <p class="card-text1 text-white">
              Or you can book it to your Google Calendar{" "}
              <a href="https://calendar.google.com/calendar/r">here</a>
            </p>
            <Link to="/uber" className="btn btn-sm btn-dark uber">
              Next Let's Explore Something Cool Around You :)
            </Link>
          </div>
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default Calendar2;
