import axios from "axios"

export function fetchSpringer(num){
  let daNum = 0
  if(num === 1){
    daNum = 1
  }else {
    daNum = (50 * (num - 1)) + 1
  }
  let daString = 'http://api.springer.com/metadata/json?q=all&p=50&s=' + daNum + '&api_key=819bcf4789a2d514adc8b2aa256dfbf2'
  return {
    type: 'FETCH_SPRINGER',
    payload: axios.get(daString)
  }
}

export function fetchSingleSpringer(doi){

  return {
    type: 'SINGLE_SPRING',
    payload: 'http://api.springer.com/metadata/json/doi/' + doi + '?api_key=819bcf4789a2d514adc8b2aa256dfbf2'
  }
}

export function changeName (name){
  return {
    type: 'CHANGE_NAME',
    payload: {

    }
  }
}

export function fetchBookInfo (isbn){
  let myStrng = 'https://www.googleapis.com/books/v1/volumes?q=isbn:' + isbn + '&key=AIzaSyBOySHN_DumrOR-jPqwbXRxeC3IcWubi0M'
  return {
    type: 'FETCH_BOOK_INFO',
    payload: axios.get(myStrng)
  }
}

export function searchKeywordSpringer(keyword){
  let daDing = 'http://api.springer.com/metadata/json?q=keyword:' + keyword + '&api_key=819bcf4789a2d514adc8b2aa256dfbf2'
  return {
    type: 'KEYWORD_SPRING_SEARCH',
    payload: axios.get(daDing)
  }
}
