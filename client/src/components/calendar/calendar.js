import React, { Component } from "react";
import DateTimePicker from "react-datetime-picker";
import Link from "react-router-dom/Link";

class Calendar2 extends Component {
  state = {
    date: new Date()
  };
  render() {
    return (
      <div className="container">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div class="card border-light">
          <div class="card-body">
            <h5 class="card-title bg-dark text-white">Let's pick you a date</h5>{" "}
            <DateTimePicker
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
            <p class="card-text1">
              Or you can book it to your Google Calendar{" "}
              <a href="https://calendar.google.com/calendar/r">here</a>
            </p>
          </div>
          <Link to="/uber" className="btn btn-dark uber">
            Let's book you an Uber now
          </Link>
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
