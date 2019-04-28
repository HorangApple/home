import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div className="card col-lg-4">
        <img src="..." className="card-img-top" alt="..." />>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <button href="#" className="btn btn-primary">
            Go somewhere
          </button>
        </div>
      </div>
    );
  }
}

export default Card;