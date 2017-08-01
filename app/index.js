import React, { Component } from 'react';
import { render } from 'react-dom';
import App from './components/App.js';
import { Router } from 'react-router';
import createHistory from 'history/createBrowserHistory'
import '../dist/styles.scss'

const history = createHistory()

render(
  <Router history={ history }>
      <App />
  </Router>, document.getElementById('main-app')
)
