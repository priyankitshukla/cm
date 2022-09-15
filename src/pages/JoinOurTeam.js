import React from "react";


class JoinOurTeam extends React.Component {
  render() {
    return (
      <div className="jointeam">
          <div className="container text-center">
              <h1>
               Join Our Team
                </h1>
                </div>
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">
            @
          </span>
          <input
            type="text"
            class="form-control"
            placeholder="Full Name"
            aria-label="Full Name"
            aria-describedby="basic-addon1"
          ></input>
        </div>

        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon3">
            <span>&#9993;</span>
          </span>
          <input
            type="text"
            class="form-control"
            id="basic-url"
            placeholder="Email Id"
            aria-describedby="basic-addon3"
          ></input>
        </div>

        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon3">
            <span>&#9742;</span>
          </span>
          <input
            type="text"
            class="form-control"
            id="basic-url"
            placeholder="Email Id"
            aria-describedby="basic-addon3"
            pattern="[0-9]{3} [0-9]{3} [0-9]{4}"
            maxlength="10"
          ></input>
        </div>

        <div class="input-group mb-3">
          <input type="file" class="form-control" id="inputGroupFile02"></input>
          <label class="input-group-text" for="inputGroupFile02">
            Upload CV
          </label>
        </div>
        <div class="d-flex justify-content-center"><button className="btn btn-primary">Submit</button></div>
        <br></br>

      </div>
    );
  }
}

export default JoinOurTeam;
