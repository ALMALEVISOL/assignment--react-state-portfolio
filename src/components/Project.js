import React, { Component } from 'react';


/*
  Note : Eacn <Project/> component will need to receive props from the FilterProjects
         component to write the code to render:

    + the project name inside the <span> ... </span>
    + the appropriate className for a team project or solo project
*/

class Project extends Component {

  render() {
    const theProjectName = this.props.project.projectName
    const soloProjectClassName = 'project--solo'
    const teamProjectClassName = 'project--team'
    let renderedClassVal = this.props.project.solo ? soloProjectClassName : teamProjectClassName;

    return (
      <div className={`project ${renderedClassVal}`}>
        <span className="project__title">{theProjectName}</span>
      </div>
    );
  }
}


export default Project
