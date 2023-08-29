import React, { Component } from "react";
import css from "./css/NavBar.module.css";

export class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
      buttonText: "Login",
    };
  }

  handleClick = () => {
    this.setState((prevState, prevProps) => ({
      isLoggedIn: !prevState.isLoggedIn,
      buttonText: prevState.buttonText === "Login" ? "Submit" : "Login",
    }));
  };

  render() {
    return (
      <div className={css.NavBar}>
        <h1>My Gallery</h1>
        <div>
          {this.state.isLoggedIn ? null : (
            <div>
              <form action="" className={css["login-form"]}>
                <label htmlFor="">Username: </label>
                <input type="text" />
                <label htmlFor="">Password: </label>
                <input type="text" />
              </form>
            </div>
          )}
          <button onClick={this.handleClick}>{this.state.buttonText}</button>
        </div>
      </div>
    );
  }
}

export default NavBar;
