import React, { Component } from "react";
import css from "./css/NavBar.module.css";

export class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      buttonText: "Login",
    };
  }

  handleClick = () => {
    this.setState((prevState, prevProps) => ({
      isLoggedIn: !prevState.isLoggedIn,
      buttonText: prevState.buttonText === "Login" ? "Log out" : "Login",
    }));
  };

  render() {
    return (
      <div className={css.NavBar}>
        <h1>My Gallery</h1>
        <div>
          <span>Hello {this.state.isLoggedIn ? "User" : "Guest"}</span>
          <button onClick={this.handleClick}>{this.state.buttonText}</button>
        </div>
      </div>
    );
  }
}

export default NavBar;
