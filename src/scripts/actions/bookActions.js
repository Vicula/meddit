export function fetchSpringer(num){
  return {
    type: 'FETCH_SPRINGER',
    payload: "IT WORKED"
  }
}
export function changeName (name){
  return {
    type: 'CHANGE_NAME',
    payload: {

    }
  }
}


// axios.get('http://api.springer.com/metadata/json?q=all&p=50&api_key=819bcf4789a2d514adc8b2aa256dfbf2')
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.log(error);
// });
