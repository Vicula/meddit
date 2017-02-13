import React from 'react';
import axios from 'axios';

export default class Home extends React.Component{
  fillBooks(){
    axios.get('http://api.springer.com/metadata/json?q=all&p=50&api_key=819bcf4789a2d514adc8b2aa256dfbf2')
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
    });
  }
  componentWillMount(){
    this.fillBooks()
  }
  render(){
    return (
      <div className="homePage">

      </div>
    )
  }
}
