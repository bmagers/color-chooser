import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './header';
import Sidebar from './sidebar';
import ListView from './listView';
import DetailView from './detailView';
import colors from './colors';
import './style.css';

const shuffle = function(array) {
  let currentIndex = array.length;
  let temporaryValue, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      useColors: colors, 
      random: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    if (this.state.random) {
      this.setState(
        {
          useColors: colors,
          random: false
        }
      );
    } else {
      this.setState(
      {
        useColors: shuffle(colors.slice()),
        random: true
      }
    );
    }

  }

  render() {
    return (
      <div className="container">
        <Header />
        <div className="headerExtended" />
        <Sidebar handleClick={this.handleClick} />
        <Switch>
          <Route 
            exact
            path="/" 
            render={props => <ListView {...props} colors={this.state.useColors} />}
          />
          <Route 
            path="/listView/:color" 
            render={props => <ListView {...props} colors={this.state.useColors} />}
          />
          <Route path="/detailView/:hexColor" component={DetailView} />
        </Switch>
      </div>
    );
  }

}

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.querySelector('#root'));