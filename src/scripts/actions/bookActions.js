import JournalBox from '../components/journalBox.js'


export function bookFetchCycle(bookAry){
  let journals = []
  for(i=0;i<bookAry.length;i++){
    let crntJournal = bookAry[i]
    
  }

  return journals.join(',')
}









// axios.get('http://api.springer.com/metadata/json?q=all&p=50&api_key=819bcf4789a2d514adc8b2aa256dfbf2')
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.log(error);
// });
