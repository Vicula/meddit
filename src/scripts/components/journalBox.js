import React from 'react';

export default class JournalBox extends React.Component{

  render(){
    let self = this;
    const journalStyles = {
      width: '30%',
      display: 'inline-block',
      overflow: 'hidden',
      fontSize: 'inherit',
      background: 'rgb(240,240,240)',
      borderRadius: '20px',
      padding:'1vw',
      margin: '1.5%',
      borderRight: '3px solid lightgray',
      borderBottom: '3px solid lightgray',
      alignSelf: 'center',
      height: '50vh',

    }
    return (

      <div className="journal-box" style={journalStyles}
      onClick={()=>{
        console.log(self.props)
      }}>
        <h2>{this.props.title.slice(0,40)+ '..'}</h2>
        <h4>{this.props.creator}</h4>
        <p>{this.props.abstract}</p>
      </div>
    )
  }
}
