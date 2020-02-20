import React, { Component } from "react";
import { Route } from 'react-router-dom'
import './App.css';
import questions from './data/testArray'
import Attribute from './modules/attribute'
import Quiz from './modules/quiz'
import QuizResults from './modules/quizResults'
import Register from './components/register'
import Login from './components/login.jsx'
import fire from "./config/fire"
import TopNav from './components/nav.jsx'
import Home from './modules/Home'
import Personality from './modules/personality'


class App extends Component {

  constructor(props){
    super(props);

    this.state = {
        user: '',
    }
  }

  addUser = (email, password, username) => {
    fire.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredentials)=>{
        if(userCredentials.user) {
            userCredentials.user.updateProfile({
                displayName: username
            })
        }
    })
    .catch(function(error) {
    alert(error.message);
    });

    questions.forEach(q => {
        fire.database().ref(`/userAttributes/${username}/scores`).set({
          acceptScore: 0,
          rejectScore: 0,
          reflectScore: 0,
          salvationScore: 0
      })

      fire.database().ref(`/userAttributes/${username}/${q.attribute}`).set({
        accept: 0,
        reject: 0,
        reflect: 0
      })
    })

    this.setState( {user: username});
  }

  goHome = () => {
      fire.auth().onAuthStateChanged(user => {
          if (user) {
              this.props.history.push("/home");
          }
      })
  }

  render() {
    return(
      <>
      <TopNav user={this.state.user} />
      <Route exact path="/home" component={Home}  user={this.state.user} />
      <Route exact path="/attribute" component={Attribute}  user={this.state.user} />
      <Route exact path="/quiz" render={(props) => <Quiz {...props} user={this.state.user} /> } />
      <Route exact path="/results" render={(props) => <QuizResults {...props} user={this.state.user} /> } />
      <Route exact path="/personality" component={Personality} user={this.state.user} />
      <Route exact path="/register" render={(props) => <Register {...props} addUser={this.addUser} goHome={this.goHome} user={this.state.user} /> } />
      <Route exact path="/login" component={Login} user={this.state.user} />
      </>
    )
  }
}

export default App;