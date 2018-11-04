import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }

  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <h1 className="display-6 mx-auto">MeetUb</h1>
                <p className="lead1">
                  {" "}
                  Want to schedule a meet and greet or need a ride?
                </p>
                <hr />
                <Link to="/calendar" className="btn btn-lg btn-dark ">
                  <i className="far fa-calendar"> Set up your Calendar here</i>
                </Link>
                <Link to="/uber" className="btn btn-lg btn-light">
                  <i className="fab fa-uber"> Explore here</i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps)(Landing);
