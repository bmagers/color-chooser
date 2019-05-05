import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './header';
import Sidebar from './sidebar';
import ListView from './listView';
import DetailView from './detailView';
import colors from './colors';
import './style.css';

const App = () => {
  return (
    <div className="container">
      <Header />
      <Sidebar />
      <Switch>
        <Route exact path="/" component={ListView}></Route>
        <Route path="/:color" component={DetailView}></Route>
      </Switch>
    </div>
  );
}

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.querySelector('#root'));