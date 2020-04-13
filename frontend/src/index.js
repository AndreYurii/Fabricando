import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Sobre from './Sobre';
import Inicial from './Inicial';
import Cadastrar from './Cadastrar';
import { BrowserRouter, Switch, Route} from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' exact={true} component = {App}></Route>
      <Route path='/cadastrar' component = {Cadastrar}></Route>
      <Route path='/inicial' component = {Inicial}></Route>
      <Route path='/sobre' component = {Sobre}></Route>
    </Switch>
  </BrowserRouter>

  ,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
