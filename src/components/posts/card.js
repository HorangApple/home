import React, { Component } from "react";
import { Link } from "react-router-dom";
import './card.css'

class Card extends Component {
  render() {
    return (
      <div className="card col-md-4 py-3">
        <img src="https://picsum.photos/300/200" style={{ "max-width": "100%", "height": "auto" }} className="card-img rounded" alt="..." />
        <Link to={"/python/1"} className="noLink">
          <div className="card-img-overlay" >
            <h5 className="btn btn-primary title">Card title</h5>
            <p className="card-text bg-dark ml-1 mr-5 pl-2 rounded content">
              Some quick
          </p>
          </div>
        </Link>
      </div>
    );
  }
}

export default Card;