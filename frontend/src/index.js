import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter, Route, Switch
} from 'react-router-dom';
import Home from './page/Home';
import './global.css';

ReactDOM.render(
  <BrowserRouter >
    <Switch>
      <Route path="/"><Home /> </Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);