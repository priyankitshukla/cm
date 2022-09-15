import React from "react";

import "./Team.css";
import JoinOurTeam from "./JoinOurTeam";
class ApplyForJob extends React.Component {
    render(){
        return(
        
        <div class="container">
          <div className="all-title-box2">
            <div className="container text-center">
              <h1>OUR CHANGE MAKERS</h1>
              <a href="/team" className="hover-btn-new">
                <span>Team</span>
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a href="/applyforjob" className="hover-btn-new">
                <span>Join Our Team</span>
              </a>
            </div>
          </div>
          <br></br>
          <JoinOurTeam></JoinOurTeam>
          </div>
        );
    }
}

export default ApplyForJob;