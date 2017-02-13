import React from 'react';
import ReactDOM from 'react-dom';
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import { applyMiddleware ,createStore ,combineReducers } from 'redux';
// const parseString = require('xml2js').parseString;

import books from './reducers/bookFetch.js'

import Home from './pages/home.js'
import Layout from './pages/layout.js'

const app = document.getElementById('mount');

const reducers = combineReducers({

})
// const logger = (state) => (next) => (action) =>{
//   console.log("prev state:", state)
//   console.log("next action:" ,next)
//   console.log('action type:', action)
// }
const middleware = applyMiddleware(logger(), thunk)

const store = createStore(reducer, middleware);


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home}></IndexRoute>
    </Route>
  </Router>,
app)
