import React from "react";



function ProjectDetails(props) {
  const id = props.match.params.id;
  return (
    <div className="containr section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>The Sandinista rebels have advancd into what has <br/>not been protectted by the national
            charismatic churches in Cambodia
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by the Hubert Bonney</div>
          <div>2nd September, 2am</div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
