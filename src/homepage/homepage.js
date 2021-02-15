import React from "react";
import { Link } from "react-router-dom";

class homepage extends React.Component {
  render() {
    return (
      <div>
        <Link to="/SignUp" >
         Sign Up
        </Link>
        <br></br>
        <Link to="/SignIn" >
          Sign In
        </Link>
        <br></br>

      </div>
    );
  }
}

export default homepage;
