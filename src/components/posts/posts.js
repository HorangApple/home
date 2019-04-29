import React, { Component } from "react";
import Card from "./card";
import Data from "../../data/posts/list.json";
import './posts.css'

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sort: this.props.match.params.sort,
      data: Data
    };
  }

  //라우팅 갱신
  componentWillReceiveProps(nextProps) {
    this.setState({ sort: nextProps.match.params.sort });
  }

  render() {
    if (this.state.sort !== undefined) {
      console.log(this.state.data[this.state.sort])
    }
    return (
      <div>
        <div className='titleBg'>

        </div>
        <div
          className="row"
          style={{
            marginLeft: "0px",
            marginRight: "0px"
          }}
        >
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    );
  }
}

export default Posts;
