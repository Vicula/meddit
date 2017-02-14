import JournalBox from '../components/journalBox.js'
import React from 'react';


export function bookFetchCycle(bookAry){
  let journals = []
  for(var i=0;i<bookAry.length;i++){
    let crntJournal = bookAry[i]

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

  return journals
}









// axios.get('http://api.springer.com/metadata/json?q=all&p=50&api_key=819bcf4789a2d514adc8b2aa256dfbf2')
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.log(error);
// });
