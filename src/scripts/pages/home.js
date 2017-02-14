import React from 'react';
import axios from 'axios';

export default class Home extends React.Component{

  componentWillMount(){
    this.props.fetchSpringer(1)
  }
  render(){
    return (
      <div className="homePage">
        <h1>Loading..</h1>
      </div>
    )
  }
}
