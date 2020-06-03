import React, { Component } from "react";
import { Route } from 'react-router-dom'
import AttributeDetail from './modules/attributeDetail'
import Quiz from './modules/quiz'
import QuizResults from './modules/quizResults'
import Register from './components/users/register'
import Login from './components/users/login.jsx'
import TopNav from './components/nav.jsx'
import Home from './modules/home'
import Personality from './modules/personality'
import Enneagram from './components/personality/enneagram'
import MyersBriggs from './components/personality/myersBriggs'
import DISC from './components/personality/DISC'
import Fear from './components/connectors/fears'
import Emotion from './components/connectors/emotions'
import Struggle from './components/connectors/struggles'
import attArray from './data/attributeArray'
import AttributeList from './modules/attributeList'
import Creative from './modules/attributeDetail/creative'
// import eternal from './modules/attributeDetail/creative'
// import faithful from './modules/attributeDetail/creative'
// import glorious from './modules/attributeDetail/creative'
// import good from './modules/attributeDetail/creative'
// import gracious from './modules/attributeDetail/creative'
// import holy from './modules/attributeDetail/creative'
// import humble from './modules/attributeDetail/creative'
// import immutable from './modules/attributeDetail/creative'
// import incomprehensible from './modules/attributeDetail/creative'
// import independent from './modules/attributeDetail/creative'
// import invisible from './modules/attributeDetail/creative'
// import jealous from './modules/attributeDetail/creative'
// import joyful from './modules/attributeDetail/creative'
// import just from './modules/attributeDetail/creative'
// import loving from './modules/attributeDetail/creative'
// import merciful from './modules/attributeDetail/creative'
// import omnipotent from './modules/attributeDetail/creative'
// import incomprehensible from './modules/attributeDetail/creative'
// import omnipresent from './modules/attributeDetail/creative'
// import omniscient from './modules/attributeDetail/creative'
// import patient from './modules/attributeDetail/creative'
// import peaceful from './modules/attributeDetail/creative'
// import planning from './modules/attributeDetail/creative'
// import providing from './modules/attributeDetail/creative'
// import relational from './modules/attributeDetail/creative'
// import saving from './modules/attributeDetail/creative'
// import sovereign from './modules/attributeDetail/creative'
// import teaching from './modules/attributeDetail/creative'
// import shepherd from './modules/attributeDetail/creative'
// import truthful from './modules/attributeDetail/truthful'
// import unique from './modules/attributeDetail/unique'
// import wise from './modules/attributeDetail/wise'
// import truthful from './modules/attributeDetail/truthful'
// import wrathful from './modules/attributeDetail/wrathful'


class AppViews extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return(
      <>
      <TopNav user={this.props.user} signOut={this.props.signOut} />
      <Route exact path="/home" component={Home}  user={this.props.user} />
      <Route exact path="/attributes" component={AttributeList} user={this.props.user} />
      <Route exact path="/attributeDetail" component={AttributeDetail} user={this.props.user} />
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

      {/* <Route exact path="/attributes/:attribute(\d+)" render={(props) => {
                let attribute = attArray.find(att =>
                    att.attributeName === props.match.params.attribute
                )

                return <AttributeDetail attribute={attribute} />
      }} /> */}

      {/* attributes */}
      <Route exact path="/attributes/creative" component={Creative} user={this.props.user} />
      {/* <Route exact path="/eternal" component={eternal} user={this.props.user} />
      <Route exact path="/faithful" component={faithful} user={this.props.user} />
      <Route exact path="/glorious" component={glorious} user={this.props.user} />
      <Route exact path="/good" component={good} user={this.props.user} />
      <Route exact path="/gracious" component={gracious} user={this.props.user} />
      <Route exact path="/holy" component={holy} user={this.props.user} />
      <Route exact path="/humble" component={humble} user={this.props.user} />
      <Route exact path="/immutable" component={immutable} user={this.props.user} />
      <Route exact path="/incomprehensible" component={incomprehensible} user={this.props.user} />
      <Route exact path="/independent" component={independent} user={this.props.user} />
      <Route exact path="/invisible" component={invisible} user={this.props.user} />
      <Route exact path="/jealous" component={jealous} user={this.props.user} />
      <Route exact path="/joyful" component={joyful} user={this.props.user} />
      <Route exact path="/just" component={just} user={this.props.user} />
      <Route exact path="/loving" component={loving} user={this.props.user} />
      <Route exact path="/merciful" component={merciful} user={this.props.user} />
      <Route exact path="/omnipotent" component={omnipotent} user={this.props.user} />
      <Route exact path="/omnipresent" component={omnipresent} user={this.props.user} />
      <Route exact path="/omniscient" component={omniscient} user={this.props.user} />
      <Route exact path="/patient" component={patient} user={this.props.user} />
      <Route exact path="/peaceful" component={peaceful} user={this.props.user} />
      <Route exact path="/planning" component={planning} user={this.props.user} />
      <Route exact path="/providing" component={providing} user={this.props.user} />
      <Route exact path="/relational" component={relational} user={this.props.user} />
      <Route exact path="/saving" component={saving} user={this.props.user} />
      <Route exact path="/sovereign" component={sovereign} user={this.props.user} />
      <Route exact path="/teaching" component={teaching} user={this.props.user} />
      <Route exact path="/shepherd" component={shepherd} user={this.props.user} />
      <Route exact path="/truthful" component={truthful} user={this.props.user} />
      <Route exact path="/unique" component={unique} user={this.props.user} />
      <Route exact path="/wise" component={wise} user={this.props.user} />
      <Route exact path="/truthful" component={truthful} user={this.props.user} />
      <Route exact path="/wrathful" component={wrathful} /> */}
      </>
    )
  }
}

export default AppViews;