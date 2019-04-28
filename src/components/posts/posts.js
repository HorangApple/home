import React, { Component } from 'react';
import Card from './card';

class Posts extends Component {
  constructor(props){
    super(props)
    this.state ={
      sort:this.props.match.params.sort
    }
    console.log(this.state.sort)
  }
  
  render () {
    return (
      <div className="row" style={{
        "marginLeft": "0px",
        "marginRight": "0px"}}>
        <Card />
        <Card />
        <Card />
      </div>
    )
  }
}

export default Posts