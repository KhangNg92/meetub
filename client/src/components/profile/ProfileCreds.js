import React, { Component } from "react";
import Moment from "react-moment";
class ProfileCreds extends Component {
  render() {
    // get exeperience and education from the props
    const { experience, education } = this.props;

    const expItems = experience.map(exp => (
      <li key={exp._id} className="list-group-item">
        <h4 className="font-weight-bold">{exp.company}</h4>
        <p>
          <Moment format="YYYY/MM/DD">{exp.from}</Moment> -
          {exp.to === null ? (
            " Now"
          ) : (
            <Moment format="YYYY/MM/DD">{exp.to}</Moment>
          )}
        </p>
        <p>
          <strong>Position: </strong>
          {exp.title}
        </p>

        <p>
          {exp.location === "" ? null : (
            <span>
              <strong> Location: </strong> {exp.location}
            </span>
          )}
        </p>

        <p>
          {exp.description === "" ? null : (
            <span>
              <strong> Description: </strong> {exp.description}
            </span>
          )}
        </p>
      </li>
    ));
    const eduItems = education.map(edu => (
      <li key={edu._id} className="list-group-item">
        <h4>{edu.company}</h4>
        <p>
          <Moment format="YYYY/MM/DD">{edu.from}</Moment> -
          {edu.to === null ? (
            " Now"
          ) : (
            <Moment format="YYYY/MM/DD">{edu.to}</Moment>
          )}
        </p>
        <p>
          <strong>Degree:</strong>
          {edu.title}
        </p>

        <p>
          <strong>Field Of Study:</strong>
          {edu.fieldofstudy}
        </p>

        <p>
          {edu.description === "" ? null : (
            <span>
              <strong> Description: </strong> {edu.description}
            </span>
          )}
        </p>
      </li>
    ));
    return "";
  }
}

export default ProfileCreds;
