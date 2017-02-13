import React from 'react';
import axios from 'axios';

export default class Home extends React.Component{

  componentWillMount(){
    this.props.fetchSpringer()
  }
  render(){
    return (
      <div className="homePage">

      </div>
    )
  }
}
