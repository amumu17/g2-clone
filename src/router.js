import React, { Component } from 'react';
//import { Router, Route, hashHistory, IndexRoute, IndexRedirect } from 'react-router';
import { HashRouter, BrowserRouter, Route, Redirect } from 'react-router-dom';



import Nav from './components/nav/nav.js';
import BubbleChar from './components/bubble/main.js';
import HistogramChar from './components/histogram/main.js';

export default class Container extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app-content">
        <BrowserRouter>
          <div>
            <Nav>
              <Route path="/bubble" component={ BubbleChar }></Route>
              <Route path="/histogram" component={ HistogramChar }></Route>
            </Nav>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}