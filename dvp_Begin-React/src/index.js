import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import {Router ,Route , Link, browserHistory} from 'react-router';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
      <Route path="/header" component={Header}/>
      <Route path="/content" component={Content}/>
      <Route path="/footer" component={Footer}/>
  </Router>,
  document.getElementById('root')
);
