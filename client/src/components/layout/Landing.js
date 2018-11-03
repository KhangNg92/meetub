import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { PropTypes} from 'prop-types';
import { connect } from 'react-redux';
 class Landing extends Component {

  componentDidMount(){
    if(this.props.auth.isAuthenticated){
      this.props.history.push('/dashboard');
    }
  }
  render() {
    return (
        <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-6 mx-auto">Social Dev Connector
                </h1>
                <p className="lead1"> Welcome Developers, in this community we'll connect, share posts and create resumes/portfolio</p>
                <hr />
                <Link to="/register" className="btn btn-lg btn-dark ">Sign Up</Link>
                <Link to="/login" className="btn btn-lg btn-light">Login</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    )
  }
}
Landing.propTypes = {
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  auth: state.auth
})
export default connect(mapStateToProps)(Landing);