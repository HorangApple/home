import React, { Component } from "react";
import Dropdown from "./nav-dropdown";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md py-3 rounded sticky-top" style={{"backgroundColor": "#FF6E00"}}>
        <span className="navbar-brand text-white">HorangApple</span>
        <button
          className="navbar-toggler bg-white navbar-light ButtonLink rounded"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          key="navbar"
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ml-auto bg-white rounded px-3">
            <li className="nav-item ">
              <Link className="nav-link dropdown-item" to="/">
                Home
              </Link>
            </li>
            <Dropdown
              id={1}
              mainTitle={"Python"}
              subTitles={["Python", "Django"]}
            />
            <Dropdown
              id={2}
              mainTitle={"JavaScript"}
              subTitles={["Javascript", "React"]}
            />
            <Dropdown
              id={3}
              mainTitle={"Etc"}
              subTitles={["Algorithm", "Tool"]}
            />
          </ul>
          {/* <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form> */}
        </div>
      </nav>
    );
  }
}

export default Nav;
