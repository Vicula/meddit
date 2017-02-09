import React from 'react';

export default class Layout extends React.Component{
  render(){
    return (
      <div className="layout">
        <nav className="navbar navbar-default nav">
          <span className="fa fa-stethoscope" aria-hidden="true"></span>
          <h1>Meddit</h1>
        </nav>
        {this.props.children}
        <footer></footer>
      </div>
    )
  }
}
