
export default function books (state={}, action) {
  switch (action.type){
    case "FETCH_SPRINGER":{
      console.log(action.payload)
    }
  }
  return state
}
