import React, { Component } from "react";
import { connect } from "react-redux";
// SparkLines is the parents

import GoogleMap from "./Google";
import _ from "lodash";
class WeatherList extends Component {
  //render a single city, city row
  renderWeather(city) {
    const { lon, lat } = city.coord;
    // destructoring lon and lat
    return (
      // have to assign a key
      <tr>
        <td>
          <GoogleMap lon={lon} lat={lat} />
        </td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (˚F)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>{this.props.weather.map(this.renderWeather)}</tbody>
      </table>
    );
  }
}
function mapStateToProps({ weather }) {
  // when we have key and value as same name we can just shrink it to 1 name (ES6 syntax)
  return {
    weather
  };
}
export default connect(mapStateToProps)(WeatherList);
