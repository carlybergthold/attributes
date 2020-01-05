import React, { Component } from "react";
import { Route } from 'react-router-dom'
import './App.css';
import Attribute from './components/attribute'
import Quiz from './components/quiz'
import QuizResults from './modules/testScores'
import Register from './components/register'
import Login from './components/login'

class App extends Component {

  state = {
    user: null,
  };

  render() {
    return(
      <>
      <Route exact path="/attribute" component={Attribute} />
      <Route exact path="/quiz" component={Quiz} />
      <Route exact path="/results" component={QuizResults} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      </>
    )
  }
}

export default App;