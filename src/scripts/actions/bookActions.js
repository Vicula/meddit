import JournalBox from '../components/journalBox.js'
import React from 'react';
import axios from 'axios';

export function moreBookInfo(isbn){
  let strng ='https://www.googleapis.com/books/v1/volumes?q=isbn:' + isbn
  return axios.get(strng)
}


export function bookFetchCycle(bookAry){
  let journals = []
  for(var i=0;i<bookAry.length;i++){
    let crntJournal = bookAry[i]

    moreBookInfo(bookAry[i].electronicIsbn)

    journals.push(
      <JournalBox
      key={i}
      data={bookAry[i]}
      title={bookAry[i].title}
      creator={bookAry[i].creators[0].creator}
      abstract={bookAry[i].abstract}
      ></JournalBox>

    )
  }

  journals.push(
    <button className="btn btn-lg btn-default moreBtn">Load More..</button>
  )

  return journals
}










// axios.get('http://api.springer.com/metadata/json?q=all&p=50&api_key=819bcf4789a2d514adc8b2aa256dfbf2')
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.log(error);
// });
