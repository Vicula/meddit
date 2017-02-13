import axios from "axios"

export function fetchSpringer(num){
  return {
    type: 'FETCH_SPRINGER',
    payload: axios.get('http://api.springer.com/metadata/json?q=all&p=50&api_key=819bcf4789a2d514adc8b2aa256dfbf2')
  }
}

export function changeName (name){
  return {
    type: 'CHANGE_NAME',
    payload: {

    }
  }
}
