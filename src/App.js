
import Home from './Components/Home/index';
import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import Contact from './Components/Contact';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Register from './Components/Register';


export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      bootcamp: 'Rookies'
    }
  }
  
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar/>
          <Switch>
            <Route path="/home" render={()=><Home name={this.state.bootcamp}/>}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/register" component={Register}/>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App