import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import axios from 'axios';
const parseString = require('xml2js').parseString;

import Home from './pages/home.js'
import Layout from './pages/layout.js'

const app = document.getElementById('mount');


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home}></IndexRoute>
    </Route>
  </Router>,
app)
