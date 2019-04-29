import React, { Component } from "react";
import { Link } from "react-router-dom";
import './nav.css'

class Dropdown extends Component {
  render() {
    return (
      <li key={this.props.mainTitle+"_key"} className="nav-item dropdown">
        <button
          className="nav-link dropdown-toggle dropdown-item ButtonLink"
          id={"navbarDropdown" + this.props.id}
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {this.props.mainTitle}
        </button>
        <div
          className="dropdown-menu"
          aria-labelledby={"navbarDropdown" + this.props.id}
        >
          {this.props.subTitles.map(title => (
            <Link key={title+"_d_item"} to={'/' + title.toLowerCase()} className="dropdown-item">
              {title}
            </Link>
          ))}
          {this.props.d_titles !== undefined && (
            <div className="dropdown-divider" />
          )}
          {this.props.d_titles !== undefined &&
            this.props.d_titles.map(title => (
              <Link key={title+"_dd_item"} to={'/' + title.toLowerCase()} className="dropdown-item">
                {title}
              </Link>
            ))}
        </div>
      </li>
    );
  }
}

export default Dropdown;
