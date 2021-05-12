import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter, Route, Switch
} from 'react-router-dom';
import Mapa from './components/Map';
import './global.css';

ReactDOM.render(
  <BrowserRouter >
    <Switch>
      <Route path="/"><Mapa /> </Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);