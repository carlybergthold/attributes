import React, { Component } from "react";
import { Route } from 'react-router-dom'
import Attribute from './modules/attribute'
import Quiz from './modules/quiz'
import QuizResults from './modules/quizResults'
import Register from './components/register'
import Login from './components/login.jsx'
import TopNav from './components/nav.jsx'
import Home from './modules/Home'
import Personality from './modules/personality'


class AppViews extends Component {

  constructor(props){
    super(props);
  }

  componentDidMount() {
    console.log(this.props)
  }

  render() {
    return(
      <>
      <TopNav user={this.props.user} signIn={this.props.signIn} signOut={this.props.signOut} />
      <Route exact path="/home" component={Home}  user={this.props.user} />
      <Route exact path="/attribute" component={Attribute}  user={this.props.user} />
      <Route exact path="/quiz" component={Quiz} user={this.props.user} />
      <Route exact path="/results" component={QuizResults} user={this.props.user} />
      <Route exact path="/personality" component={Personality} user={this.props.user} />
      <Route exact path="/register" render={(props) => (<Register {...props} addUser={this.props.addUser} user={this.props.user} /> )} />
      <Route exact path="/login" render={(props) => (<Login {...props}  user={this.props.user} signIn={this.props.signIn} /> )} />
      </>
    )
  }
}

export default AppViews;