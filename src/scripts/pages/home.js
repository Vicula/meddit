import React from 'react';

export default class Home extends React.Component{

  componentWillMount(){
    this.props.fetchSpringer(1).then(() =>{
      window.location.hash="/spring"
    })
  }
  render(){
    return (
      <div className="homePage">
        <h1>Loading..</h1>
      </div>
    )
  }
}
