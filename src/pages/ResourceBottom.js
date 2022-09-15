import React from "react";

class ResourceBottom extends React.Component {

  constructor(props){
    super(props);
    this.state= {
      pageName : this.props.pageName
    }
  }
  render() {
    return (
      <>
        <ul>
          <li>
            {" "}
            <h2>Are you fit for a career in { this.state.pageName}?</h2>
          </li>
          <li style={{ color: `red` }}>
            {" "}
            <h2>
              <a
                href="https://forms.gle/6JmRL1wqbbRhvWi17"
                style={{ color: `red` }}
              >
                Take the world's most-advanced assessment !
              </a>
            </h2>
          </li>
        </ul>

        <h6>
          <span>Contact the&nbsp; </span>
          <span>
            <span style={{ color: `red` }}>Specialized Field Expert*</span>
          </span>
          <span>&nbsp; for indepth knowledge regarding the field</span>
        </h6>

        <div className="col-md-6">
          <img src={require("../images/vr.jpg")}></img>
        </div>
        <br></br>
        <br></br>
      </>
    );
  }
}


export default ResourceBottom;