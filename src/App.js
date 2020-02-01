import React, { Component } from "react";
import { Route } from 'react-router-dom'
import './App.css';
import Attribute from './components/attribute'
import Quiz from './components/quiz'
import QuizResults from './modules/testScores'
import Register from './components/register'
import Login from './components/login.jsx'
import fire from "./config/fire"
import TopNav from './components/nav.jsx'


class App extends Component {

  constructor(props){
    super(props);

    this.state = {
        user: '',
    }
  }

  componentDidMount() {

    fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user: user.displayName });
        console.log(this.state)
      } else {
        console.log('no user')
       }
    });
  }

  render() {
    return(
      <>
      <TopNav user={this.state.user}/>
      <Route exact path="/attribute" component={Attribute}  user={this.state.user} />
      <Route exact path="/quiz" render={(props) => <Quiz {...props} user={this.state.user}
      foo={this.state.foo} /> } />
      <Route exact path="/results" render={(props) => <QuizResults {...props} user={this.state.user} /> } />
      <Route exact path="/register" component={Register} user={this.state.user} />
      <Route exact path="/login" component={Login} user={this.state.user} />
      </>
    )
  }
}

export default App;