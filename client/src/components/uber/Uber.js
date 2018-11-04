import React, { Component } from "react";
import MapContainer from "./Google";

class Uber extends Component {
  render() {
    return (
      <div className="explore">
        <div class="card3 dark-overlay bg-transparent border-0">
          <div className="card-body">
            <h5 className="exploretitle">
              {" "}
              What's cool around you? Let's check it out{" "}
            </h5>
            <a
              className="btn btn-secondary text-white"
              href="https://m.uber.com/?client_id=sqqx7SKb4l1rTdTz4Q1eynUsyQPA4Fsx"
            >
              Let Uber help you to find a ride
            </a>

            <p className="card-text" />
          </div>
        </div>
        <br />
        <br />
        <br />
        <small className="font-italic">
          p/s: Still don't have a place in mind? Explore around you with this
          interactive map :)
        </small>
        <MapContainer />
        <div className="card">
          <div className="card-header">Quote Of The Day</div>
          <div className="card-body">
            <blockquote className="blockquote mb-0 font-italic">
              <p> Goals transform a random walk into a chase.</p>
              <footer className="blockquote-footer">
                Mihaly Csikszentmihalyi <cite title="Source Title" />
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    );
  }
}

export default Uber;
