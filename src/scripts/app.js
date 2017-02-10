import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import { createStore } from 'redux';
import axios from 'axios';
const parseString = require('xml2js').parseString;

import Home from './pages/home.js'
import Layout from './pages/layout.js'

const app = document.getElementById('mount');

const reducer = function(state, action){

}

const store = createStore(reducer, 0);


axios.get('http://api.springer.com/metadata/json?q=all&p=50&api_key=819bcf4789a2d514adc8b2aa256dfbf2')
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
});



ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home}></IndexRoute>
    </Route>
  </Router>,
app)
