import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './header';
import Sidebar from './sidebar';
import ListView from './listView';
import DetailView from './detailView';
import './style.css';

const App = () => {
  return (
    <div className="container">
      <Header />
      <div className="headerExtended" />
      <Sidebar />
      <Switch>
        <Route exact path="/" component={ListView} />
        <Route path="/listView/:color" component={ListView} />
        <Route path="/detailView/:color" component={DetailView} />
      </Switch>
    </div>
  );
}

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.querySelector('#root'));