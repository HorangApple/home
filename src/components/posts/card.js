import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./card.css";

class Card extends Component {
  render() {
    return (
      <Link to={"/python/1"} className="noLink">
      <div class="card my-3" style={{maxWidth: "100%"}}>
        <div class="row no-gutters">
          <div class="col-md-4">
            <img src="https://picsum.photos/400/300" style={{ maxWidth: "100%", height: "auto" }} class="card-img" alt="..." />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{this.props.post.title}</h5>
              <p class="card-text">{this.props.post.summary}</p>
              <p class="card-text">
                <small class="text-muted">{this.props.post.date}</small>
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
