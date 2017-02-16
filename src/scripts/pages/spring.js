import React from 'react';
import JournalBox from '../components/journalBox.js'
import {bookFetchCycle} from '../actions/bookActions.js'

var myData = []

export default class Springer extends React.Component{

  componentWillMount(){
    if(this.props.books.crntBooks.length === 0){
      window.location.hash = '/'
    } else {
      let data = bookFetchCycle(this.props.books.crntBooks)
      myData = data
    }
  }

  render(){
    let daInput = document.querySelector('.searchBar input')
    daInput.addEventListener('keydown', ()=>{
      
    })
    return (
      <div className="springPage">
        {myData.map((crnt) =>{return crnt})}
      </div>
    )
  }
}
