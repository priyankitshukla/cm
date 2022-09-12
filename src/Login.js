import Popup from "reactjs-popup";
import React from "react";
class Login extends React.Component {
  render() {
    return (
        <Popup trigger={<button className="button"> Open Modal </button>} modal>
        <span> Modal content </span>
      </Popup>
    );
  }
}

export default Login;
