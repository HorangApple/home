import React, { Component } from "react";
import Card from "./card";
import Data from "../../data/posts/list.json";
import './posts.css'

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sort: this.props.match.params.sort,
      data: Data[this.props.match.params.sort]
    };
  }

  //라우팅 갱신
  componentWillReceiveProps(nextProps) {
    this.setState({ sort: nextProps.match.params.sort });
    console.log(nextProps.match.params.sort)
    if (nextProps.match.params.sort === 'main') {
      let data=[]
      for (let one in Data){
        data.push(Data[one][0])
      }
      console.log(data)
      this.setState({data:data})
      this.setState({sort:'all'})
    } else{
      this.setState({data:Data[nextProps.match.params.sort]})
    }
  }
  // componentWillMount(){
  //   if (this.state.sort === undefined) {
  //     let data=[]
  //     for (let one in this.state.data){
  //       data.push(this.state.data[one][0])
  //     }
  //     this.setState({data:data})
  //     this.setState({sort:'all'})
  //   } else{
  //     this.setState({data:this.state.data[this.state.sort]})
  //     console.log(this.state.data)
  //   }
  // }

  render() {
    return (
      <div key={`${this.state.sort}_posts`}>
        <div className='titleBg'>
        </div>
        <div
          className="row"
          style={{
            marginLeft: "0px",
            marginRight: "0px"
          }}
        >
          {this.state.data.map((one,num) => (<Card key={this.state.sort+"_"+num} post={one} />))}
        </div>
      </div>
    );
  }
}

export default Posts;
