import React, { Component } from "react";
import WeatherList from "./WeatherList";
import SearchBar from "./SearchBar";

class Uber extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}

export default Uber;
