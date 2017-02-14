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


// <div className="modal">
//   <div className="modal-dialog">
//     <div className="modal-content">
//       <div className="modal-header">
//         <h1>TEST</h1>
//       </div>
//       <div className="modal-body">
//         <h1>TEST</h1>
//       </div>
//       <div className="modal-footer">
//         <h1>TEST</h1>
//       </div>
//     </div>
//   </div>
// </div>
