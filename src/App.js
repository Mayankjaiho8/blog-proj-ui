import React, { Component } from 'react';
import ReactiveComp  from './Components/Reactive/reactive.js'
import { CategorySearch }  from '@appbaseio/reactivesearch';
import { ReactiveBase, SingleRange, ResultCard }  from '@appbaseio/reactivesearch';
// import {BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css';
import { loggedOutHeaderNavListItemArr } from './static/mockHeaderNavListItems';
import Header from './Components/Header/Header.js';
import Footer from './Components/Footer/Footer.js';
import Content from './Components/Content/Content.js';
//import Home from './Components/Home/homeComponent.js';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {isLoggedIn : false};
    this.HeaderNavArr = loggedOutHeaderNavListItemArr;
  }

  setIsLoggedIn(isLoggedIn){
    this.setState({isLoggedIn});
  }
  render() {
    return (
          <div className = "main-container">
            <div className="grid-container">
              <Header navArr = {this.HeaderNavArr} />
              <Content {...this.props}/>
              <Footer />
            </div>
          </div>
    );
  }
}

export default App;
