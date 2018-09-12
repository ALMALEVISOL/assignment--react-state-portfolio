import React, { Component } from 'react';


/*  Note:
   if you toggle between 'techlist--hidden' and 'techlist--visible' on the div element's
   class value, the techlist box will appear and disappear.
*/

export default class ShowHideTech extends Component {
  state = {
    isShowTech: false
  }

  handleClick = () => {
    //alert( "Hola" )
    this.setState({
      isShowTech: !this.state.isShowTech
    })
  }

  render() {
    const techlistHiddenClassname = `techlist--hidden`
    const techlistVisibleClassname = `techlist--visible`

    let techlistStatus = this.state.isShowTech ? techlistVisibleClassname : techlistHiddenClassname; 
    let buttonMessage = this.state.isShowTech ? "- Hide Tech" : "+ Show tech";

    return (
      <section>
        <h4>Technologies</h4>

        <button className="toggle-techlist" onClick={  this.handleClick  }  > { buttonMessage } </button>

        <div className={`techlist ${techlistStatus}`}>
          <span className="techlist__icon devicons devicons-github_badge"/>
          <span className="techlist__icon devicons devicons-git"/>
          <span className="techlist__icon devicons devicons-html5"/>
          <span className="techlist__icon devicons devicons devicons-css3"/>
          <span className="techlist__icon devicons devicons-sass"/>
          <span className="techlist__icon devicons devicons-linux"/>
          <span className="techlist__icon devicons devicons devicons-nodejs"/>
          <span className="techlist__icon devicons devicons devicons-react"/>
          <span className="techlist__icon devicons devicons devicons-illustrator"/>
        </div>
      </section>
    );
  }
}
