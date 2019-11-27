import React, { Component } from "react";
import { Route } from 'react-router-dom'
import './App.css';
import FakeHome from './components/fakeHome'
import Quiz from './components/quiz'

class App extends Component {

  render() {
    return(
      <>
      <Route exact path="/" component={FakeHome} />
      <Route exact path="/quiz" component={Quiz} />
      </>
    )
  }
}

export default App;