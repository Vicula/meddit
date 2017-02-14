
export default function books (state={ crnt50:[]}, action) {

  switch (action.type){
    case "FETCH_SPRINGER":{
      console.log('hey')
      // console.log(action.payload)
    }
    case "FETCH_SPRINGER_FULFILLED" :{
      let data = action.payload.request.response
      console.log(JSON.parse(data))
    }
  }
  return state
}
