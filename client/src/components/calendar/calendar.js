import React, { Component } from "react";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";
class Calendar2 extends Component {
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
            <h5 class="card-title bg-dark text-white">
              {" "}
              Let's pick you a date
            </h5>
            <p class="card-text">
              {" "}
              <DayPicker className="calendar" />
            </p>
            <br />
            <br />
            <br />

            <p class="card-text1">
              Or you can book it to your Google Calendar{" "}
              <a href="https://calendar.google.com/calendar/r">here</a>
            </p>
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
