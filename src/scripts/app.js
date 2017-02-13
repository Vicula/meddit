import React from 'react';
import ReactDOM from 'react-dom';
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import { applyMiddleware ,createStore ,combineReducers } from 'redux';
import { Provider } from 'react-redux'
// const parseString = require('xml2js').parseString;

import books from './reducers/bookFetch.js'
import users from './reducers/userRed.js'

import Meddit from './pages/index.js'
import Home from './pages/home.js'

const app = document.getElementById('mount');

const reducers = combineReducers({
  books,
  users
})
const initialState ={
  books: {},
  users: {}
}

const middleware = applyMiddleware(logger(), thunk, promise())

const store = createStore(reducers,initialState, middleware,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Meddit}>
        <IndexRoute component={Home}></IndexRoute>
      </Route>
    </Router>
  </Provider>,
app)




// const logger = (state) => (next) => (action) =>{
//   console.log("prev state:", state)
//   console.log("next action:" ,next)
//   console.log('action type:', action)
// }
