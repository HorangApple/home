import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./card.css";

class Card extends Component {
  render() {
    return (
      <Link to={"/python/1"} className="noLink">
      <div className="card my-3" style={{maxWidth: "100%"}}>
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src="https://picsum.photos/400/300" style={{ maxWidth: "100%", height: "auto" }} className="card-img" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{this.props.post.title}</h5>
              <p className="card-text">{this.props.post.summary}</p>
              <p className="card-text">
                <small className="text-muted">{this.props.post.date}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      </Link>
    );
  }
}

export default Card;
