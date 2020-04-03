import React, { Component } from "react";
import { Route } from 'react-router-dom'
import Attribute from './modules/attribute'
import AttributeDetail from './modules/attributeDetail'
import Quiz from './modules/quiz'
import QuizResults from './modules/quizResults'
import Register from './components/register'
import Login from './components/login.jsx'
import TopNav from './components/nav.jsx'
import Home from './modules/Home'
import Personality from './modules/personality'
import Enneagram from './components/enneagram'
import MyersBriggs from './components/myersBriggs'
import DISC from './components/DISC'
import attArray from './data/attributeArray'
import AttributeList from './modules/attributeList'


class AppViews extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return(
      <>
      <TopNav user={this.props.user} signIn={this.props.signIn} signOut={this.props.signOut} />
      <Route exact path="/home" component={Home}  user={this.props.user} />
      <Route exact path="/attributes" component={Attribute} user={this.props.user} />
      <Route exact path="/attributeList" component={AttributeList} user={this.props.user} />
      <Route exact path="/attributeDetail" component={AttributeDetail} user={this.props.user} />
      <Route exact path="/quiz" render={(props) => (<Quiz {...props} user={this.props.user} /> )} />
      <Route exact path="/results" render={(props) => (<QuizResults {...props} user={this.props.user} /> )} />
      <Route exact path="/personality" component={Personality} user={this.props.user} />
      <Route exact path="/register" render={(props) => (<Register {...props} addUser={this.props.addUser} user={this.props.user} /> )} />
      <Route exact path="/login" render={(props) => (<Login {...props}  user={this.props.user} signIn={this.props.signIn} /> )} />
      <Route exact path="/enneagram" render={(props) => (<Enneagram {...props}  user={this.props.user} /> )} />
      <Route exact path="/myersbriggs" render={(props) => (<MyersBriggs {...props}  user={this.props.user} /> )} />
      <Route exact path="/disc" render={(props) => (<DISC {...props}  user={this.props.user} /> )} />

      <Route exact path="/attributes/:attribute(\d+)" render={(props) => {
                let attribute = attArray.find(att =>
                    att.attributeName === props.match.params.attribute
                )

                return <AttributeDetail attribute={attribute} />
      }} />
      </>
    )
  }
}

export default AppViews;