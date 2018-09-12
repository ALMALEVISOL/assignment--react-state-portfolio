import React, { Component } from 'react';
import ShowHidetech from './components/ShowHideTech';
import FilterProjects from './components/FilterProjects';
import {projectData} from './data/datasource';


class App extends Component {
  render() {
    return (
      <div className="App" id="app-container">
        <ShowHidetech />
        <FilterProjects projects={projectData}/>
      </div>
    );
  }
}

export default App;
