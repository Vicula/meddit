import React from 'react'

let initialState = {
  crnt50: 1,
  crntBooks: []
}

export default function books (state=initialState, action) {
  let newState = {}
  Object.assign(newState, state)
  switch (action.type){
    case "FETCH_SPRINGER":{
      console.log('hey')
      // console.log(action.payload)
      break;
    }
    case "FETCH_SPRINGER_FULFILLED" :{
      let data = action.payload.request.response
      newState.crntBooks = JSON.parse(data).records
      break;
    }
    case "FETCH_BOOK_INFO" :{

      break;
    }
    case "FETCH_BOOK_INFO_FULFILLED" :{
      
      break;
    }
  }
  return newState
}
