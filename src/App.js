import './App.css';

import React, { Component } from 'react'
import NavBar from './Component/NavBar';
import News from './Component/News';
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default class App extends Component {
  pageSize=5;
  // apiKey="aadedb12a986431997017175f6700046"
  // another way of above
  apiKey=process.env.REACT_APP_NEWS_API
  state={
    progress:0,
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
        <Router>
            <NavBar/>
            <LoadingBar
                color='#f11946'
                progress={this.state.progress}
                height={4}
            />
            {/* <News setProgress={this.setProgress} pageSize={this.pageSize} country='in' category='science'/> */}
            <Switch>
            <Route exact path="/"><News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country='in' category='general'/></Route>
            <Route exact path="/general"><News setProgress={this.setProgress} apiKey={this.apiKey} key="business"pageSize={this.pageSize} country='in' category='general'/></Route>
            <Route exact path="/business"><News setProgress={this.setProgress} apiKey={this.apiKey} key="business"pageSize={this.pageSize} country='in' category='business'/></Route>
            <Route exact path="/entertainment"><News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment"pageSize={this.pageSize} country='in' category='entertainment'/></Route>
            <Route exact path="/generalhealth"><News setProgress={this.setProgress} apiKey={this.apiKey} key="generalhealth"pageSize={this.pageSize} country='in' category='generalhealth'/></Route>
            <Route exact path="/science"><News setProgress={this.setProgress} apiKey={this.apiKey} key="science"pageSize={this.pageSize} country='in' category='science'/></Route>
            <Route exact path="/sports"><News setProgress={this.setProgress} apiKey={this.apiKey} key="sports"pageSize={this.pageSize} country='in' category='sports'/></Route>
            <Route exact path="/technology"><News setProgress={this.setProgress} apiKey={this.apiKey} key="technology"pageSize={this.pageSize} country='in' category='technology'/></Route>
        </Switch>
        </Router>
      </div>
    )
  }
}
