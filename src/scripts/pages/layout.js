import React from 'react';
import { connect } from 'react-redux'



// @connect((store) => {
//   return {
//     users: "hey",
//     books: 'yo'
//   }
// })
// <span className="fa fa-stethoscope" aria-hidden="true"></span>
export default class Layout extends React.Component{
  render(){
    return (
      <div className="layout">
        <nav className="navbar navbar-default nav">
          <div>
            <img src="../images/icons/hospital-3.svg"/>
            <h1>Meddit</h1>
          </div>
          <div>

          </div>
          <div className="searchBar">
            <input type="text" placeholder="Search.."/>
            <div className="btn btn-default butn">search</div>
          </div>
        </nav>
        <div className="layoutHolder">
          {this.props.children}
        </div>
        <footer className="footer">

        </footer>
      </div>
    )
  }
}
