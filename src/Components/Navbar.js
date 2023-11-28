import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "./Menuitems";
import "./Navbar.css";

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="NavbarItems">
        <Link to="/" className="Navbar-logo">
          Trip-Go
        </Link>
        <div className="menu-icons" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => (
            <li key={index}>
              <Link className={item.cName} to={item.url}>
                {item.title}
              </Link>
            </li>
          ))}
          <li>
            {/* Link the Sign Up button to the sign-up page/component */}
            <Link to="/signup" className="signin">
              Sign Up
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
