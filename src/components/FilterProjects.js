import React, { Component } from 'react';
import { projectData } from '../data/datasource'
import Project from './Project'

/*  Advice:
   (1) Create the component's JSX by using .map() on `projectData`
       you will want to map to an array of <Project/> components


   (2) add an onClick event listener to the  <span> elements in .project-types-list
        that calls a method to change the FilterProjects component state to the selected
        view,

        Note: you will want to set the component's initial state in the
              constructor() function

   (3) Use .filter() to render the `projectData` based on FilterProjects
       component state

       Hint: you may want to use .filter() depending on the  then .map()


 */

export default class FilterProjects extends Component {
  state = {
    optionSelected: 'all'
  }

  handlerSpanClick = ( event ) => {
    if( event.currentTarget.getAttribute('data-ptype') === 'solo' ){
      this.setState({
        optionSelected: 'solo'
      })
    }else if( event.currentTarget.getAttribute('data-ptype') === 'team' ){
      this.setState({
        optionSelected: 'team'
      })
    }else if( event.currentTarget.getAttribute('data-ptype') === 'all' ){
      this.setState({
        optionSelected: 'all'
      })
    }
  }

 /*  handlerSoloClick = ( event ) => {
    this.setState({
      optionSelected: 'solo'
    })
  }

  handlerTeamClick = () => {
    this.setState({
      optionSelected: 'team'
    })
  } */

  render() {
    const props = this.props;
    let soloProjects = [];
    let teamProjects = [];
    //let soloProjects = [];
    const projectSelectedClassVal = 'project-type--selected'

    let allSelectedRenderedClass = '';
    let soloSelectedRenderedClass = '';
    let teamSelectedRenderedClass = '';

    if( this.state.optionSelected === 'solo' ){
      allSelectedRenderedClass = '';
      teamSelectedRenderedClass = '';
      soloSelectedRenderedClass = projectSelectedClassVal

      soloProjects = this.props.projects.filter( project => {
        return project.solo
      })
    }else if( this.state.optionSelected === 'team' ){
      allSelectedRenderedClass = '';
      soloSelectedRenderedClass = '';
      teamSelectedRenderedClass = projectSelectedClassVal;
      teamProjects = this.props.projects.filter( project => {
        return !project.solo
      })
      console.log("Team:" + teamProjects);
      
    }else {
      allSelectedRenderedClass = projectSelectedClassVal;
      soloSelectedRenderedClass = '';
      teamSelectedRenderedClass = '';
    }

    // change value of 'let' variables based on component state for whether
    //'all', 'team', or 'solo' is selected

    return (
      <section>
          <h4>Projects</h4>

          <div className="project-types-list">
            <span onClick={ this.handlerSpanClick } data-ptype="all" className={`project-type project-type--all ${allSelectedRenderedClass}`}>
              All
            </span>

            <span onClick={ this.handlerSpanClick } data-ptype="solo" className={`project-type project-type--solo ${soloSelectedRenderedClass}`}>
              <i className="ion-person"></i>Solo
            </span>

            <span onClick={ this.handlerSpanClick } data-ptype="team" className={`project-type project-type--team ${teamSelectedRenderedClass}`}>
              <i className="ion-person-stalker"></i>Team
            </span>
          </div>

          <div className='projects-list'>

            {/* Step (1) --- .map() the projectData to JSX  */}
            { this.state.optionSelected === 'all' && props.projects.map( project => {
              return <Project key={ Math.random() } project={project}/>
            } ) }
            { this.state.optionSelected === 'team' && teamProjects.map( project => {
              return <Project key={ Math.random() } project={project}/>
            })}
            { this.state.optionSelected === 'solo' && soloProjects.map( project => {
              return <Project key={ Math.random() } project={project}/>
            })}

           




            {/* const evenNumbers = numbers.filter(number => isEven(number)) */}


          </div>
        </section>

    );
  }
}
