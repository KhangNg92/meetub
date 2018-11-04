import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import React, { Component } from "react";
export class MapContainer extends Component {
  render() {
    const style = {
      width: "100%",
      height: "75%"
    };
    return (
      <div className="google">
        <br />
        <br />
        <br />
        <Map style={style} google={this.props.google} zoom={14}>
          <Marker onClick={this.onMarkerClick} name={"Current location"} />

          <InfoWindow onClose={this.onInfoWindowClose} />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyASDVGdD_Q2i5Ex7ayEdrAG8N3YV3HvUEo"
})(MapContainer);
