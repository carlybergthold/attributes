import React, { Component } from "react";
import { Route } from 'react-router-dom'
import './App.css';
import FakeHome from './components/fakeHome'
import Quiz from './components/quiz'
import QuizResults from './modules/testScores'

class App extends Component {

  state = {
    user: null,
  };

  render() {
    return(
      <>
      <Route exact path="/" component={FakeHome} />
      <Route exact path="/quiz" component={Quiz} />
      <Route exact path="/results" component={QuizResults} />
      </>
    )
  }
}

export default App;