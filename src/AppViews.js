import React, { Component } from "react";
import { Route } from 'react-router-dom'
import attArray from './data/attributeArray'
import Quiz from './modules/quiz'
import QuizResults from './modules/quizResults'
import Register from './components/users/register'
import Login from './components/users/login.jsx'
import TopNav from './components/nav.jsx'
import Home from './modules/Home'
import Personality from './modules/personality'
import Enneagram from './components/personality/enneagram'
import MyersBriggs from './components/personality/myersBriggs'
import DISC from './components/personality/DISC'
import Fear from './components/connectors/fears'
import Emotion from './components/connectors/emotions'
import Struggle from './components/connectors/struggles'
import Creative from './modules/attributeDetail/creative'
import eternal from './modules/attributeDetail/creative'
import faithful from './modules/attributeDetail/creative'
import glorious from './modules/attributeDetail/creative'
import good from './modules/attributeDetail/creative'
import gracious from './modules/attributeDetail/creative'
import holy from './modules/attributeDetail/creative'
import humble from './modules/attributeDetail/creative'
import immutable from './modules/attributeDetail/creative'
import incomprehensible from './modules/attributeDetail/creative'
import independent from './modules/attributeDetail/creative'
import invisible from './modules/attributeDetail/creative'
import jealous from './modules/attributeDetail/creative'
import joyful from './modules/attributeDetail/creative'
import just from './modules/attributeDetail/creative'
import loving from './modules/attributeDetail/creative'
import merciful from './modules/attributeDetail/creative'
import omnipotent from './modules/attributeDetail/creative'
import omnipresent from './modules/attributeDetail/creative'
import omniscient from './modules/attributeDetail/creative'
import patient from './modules/attributeDetail/creative'
import peaceful from './modules/attributeDetail/creative'
import planning from './modules/attributeDetail/creative'
import providing from './modules/attributeDetail/creative'
import relational from './modules/attributeDetail/creative'
import saving from './modules/attributeDetail/creative'
import sovereign from './modules/attributeDetail/creative'
import teaching from './modules/attributeDetail/creative'
import shepherd from './modules/attributeDetail/creative'
import truthful from './modules/attributeDetail/creative'
import unique from './modules/attributeDetail/creative'
import wise from './modules/attributeDetail/creative'
import wrathful from './modules/attributeDetail/creative'


class AppViews extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return(
      <>
      <TopNav user={this.props.user} signOut={this.props.signOut} />
      <Route exact path="/home" component={Home}  user={this.props.user} />
      <Route exact path="/quiz" render={(props) => (<Quiz {...props} user={this.props.user} /> )} />
      <Route exact path="/results" render={(props) => (<QuizResults {...props} user={this.props.user} /> )} />
      <Route exact path="/personality" component={Personality} user={this.props.user} />
      <Route exact path="/register" render={(props) => (<Register {...props} addUser={this.props.addUser} user={this.props.user} /> )} />
      <Route exact path="/login" render={(props) => (<Login {...props}  user={this.props.user} signIn={this.props.signIn} /> )} />
      <Route exact path="/enneagram" render={(props) => (<Enneagram {...props}  user={this.props.user} /> )} />
      <Route exact path="/myersbriggs" render={(props) => (<MyersBriggs {...props}  user={this.props.user} /> )} />
      <Route exact path="/disc" render={(props) => (<DISC /> )} />
      <Route exact path="/fear" render={(props) => (<Fear /> )} />
      <Route exact path="/emotion" render={(props) => (<Emotion /> )} />
      <Route exact path="/struggle" render={(props) => (<Struggle /> )} />

      {
        attArray.map(a =>
          <Route exact path={`/attributes/${a.attributeName}`} render={(props) => (<Creative /> )} />
        )
      }

      </>
    )
  }
}

export default AppViews;