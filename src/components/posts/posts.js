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
    // console.log(this.state.data,"constructor")
  }

  //라우팅 갱신, 같은 라우터(/:sort)사이에 정보 갱신
  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.sort !== this.state.sort){
      this.setState({ sort: nextProps.match.params.sort });
      // console.log(nextProps.match.params.sort,"WillReceive")
      this.setState({data:Data[nextProps.match.params.sort]})
    }
  }

  //라우터가 다르기 때문에 constructor부터 Mount까지 실행
  componentWillMount(){
    if (this.state.sort === undefined) {
      let data=[]
      for (let one in Data){
        for (let two of Data[one]){
          data.push(two)
        }
      }
      this.setState({data:data})
    } 
  }

  render() {
    return (
      <div key={`${this.state.sort}_posts`}>
        <div className='cropping mt-3 rounded'>
          <img src={process.env.PUBLIC_URL + '/banner.png'} alt="banner" />
        </div>
        {/* {console.log(this.state,"render") } */}
          {this.state.data.map((one,num) => (<Card key={this.state.sort+"_"+num} post={one} />))}
      </div>
    );
  }
}

export default Posts;
