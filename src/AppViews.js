import React, { Component } from "react";
import { Route } from 'react-router-dom'
import Quiz from './modules/quiz'
import QuizResults from './modules/quizResults'
import Register from './components/users/register'
import Login from './components/users/login.jsx'
import TopNav from './components/nav.jsx'
import Home from './modules/Home.jsx'
import About from './modules/about.jsx'
import Personality from './modules/personality'
import Enneagram from './components/personality/enneagram'
import MyersBriggs from './components/personality/myersBriggs'
import DISC from './components/personality/DISC'
import Fear from './components/connectors/fears'
import Emotion from './components/connectors/emotions'
import Struggle from './components/connectors/struggles'
import BasicNeeds from './components/connectors/basicNeeds'
import Creative from './modules/attributeDetail/creative'
import eternal from './modules/attributeDetail/eternal'
import faithful from './modules/attributeDetail/faithful'
import glorious from './modules/attributeDetail/glorious'
import good from './modules/attributeDetail/good'
import gracious from './modules/attributeDetail/gracious'
import holy from './modules/attributeDetail/holy'
import humble from './modules/attributeDetail/humble'
import immutable from './modules/attributeDetail/immutable'
import incomprehensible from './modules/attributeDetail/incomprehensible'
import independent from './modules/attributeDetail/independent'
import invisible from './modules/attributeDetail/invisible'
import jealous from './modules/attributeDetail/jealous'
import joyful from './modules/attributeDetail/joyful'
import just from './modules/attributeDetail/just'
import loving from './modules/attributeDetail/loving'
import merciful from './modules/attributeDetail/merciful'
import omnipotent from './modules/attributeDetail/omnipotent'
import omnipresent from './modules/attributeDetail/omnipresent'
import omniscient from './modules/attributeDetail/omniscient'
import patient from './modules/attributeDetail/patient'
import peaceful from './modules/attributeDetail/peaceful'
import planning from './modules/attributeDetail/planning'
import providing from './modules/attributeDetail/providing'
import relational from './modules/attributeDetail/relational'
import saving from './modules/attributeDetail/saving'
import sovereign from './modules/attributeDetail/sovereign'
import teaching from './modules/attributeDetail/teaching'
import truthful from './modules/attributeDetail/truthful'
import unique from './modules/attributeDetail/unique'
import wise from './modules/attributeDetail/wise'
import wrathful from './modules/attributeDetail/wrathful'
import Movies from './components/connectors/movies';
import userMethods from './methods/supabaseMethods';
import testArray from './data/testArray.js';

class AppViews extends Component {
  state = {
    showLogIn: false,
    loginMessage: null,
    userId: localStorage.getItem('userId'),
    userQuiz: JSON.parse(localStorage.getItem('userQuiz')),
  }

  showHideLogIn = (showLogIn) => {
    this.setState({
      showLogIn: showLogIn
    })
  }

  setLoginMessage = (message) => {
    this.setState({
      loginMessage: message
    })
  }

  getLoginComponent = () => {
    return this.state.showLogIn ? <Login
        showHideLogIn={this.showHideLogIn}
        addUser={this.addUser} logInUser={this.logInUser}
        setLoginMessage={this.setLoginMessage}
        message={this.state.loginMessage}
      /> : null;
  }

  addUser = (email, password) => {
    userMethods.addUser(email, password).then(response => {
      if (response.error !== null) {
        this.setState({ loginMessage: 'Please attempt to register again.' });
      } else if (response.data.user !== null) {
        localStorage.setItem('userId', response.data.user.id);
        this.setState({ userId: response.data.user.id })
        this.setState({ loginMessage: 'Successfully registered.' });
      }
    });
  }

  logInUser = (email, password) => {
    userMethods.signIn(email, password).then(response => {
      if (response.error !== null) {
        this.setState({ loginMessage: 'Please attempt to log in again.' });
      } else if (response.data.user !== null) {
        localStorage.setItem('userId', response.data.user.id);
        this.setState({ userId: response.data.user.id })
        this.setState({ loginMessage: 'Successfully logged in.' });

        this.getUserQuiz(response.data.user.id);
      }
    });
  }

  getUserQuiz = (userIdPassedIn) => {
    let userId = userIdPassedIn ? userIdPassedIn : this.state.userId;
    userMethods.getUserQuiz(userId).then(response => {
      this.setState({ userQuiz: response});

      let storageString = JSON.stringify(response);
      localStorage.setItem('userQuiz', storageString);
    });
  }

  signOut = () => {
    userMethods.signOut().then(() => {
      localStorage.removeItem('userId');
      localStorage.removeItem('userQuiz');
      this.setState({ userId: null, userQuiz: null })
    });
  }

  getUserQuizFinished = () => {
    let quizFinished = false;

    if (this.state.userQuiz !== null && this.state.userQuiz.length > 0) {
      const lastQuestionId = testArray[testArray.length - 1].id;
      quizFinished = this.state.userQuiz.some(q => q.questionId === lastQuestionId);
    }

    return quizFinished;
  }

  render() {
    return(
      <>
      {this.getLoginComponent()}
      <TopNav showHideLogIn={this.showHideLogIn} userId={this.state.userId} signOut={this.signOut} userQuiz={this.state.userQuiz} getUserQuizFinished={this.getUserQuizFinished} />
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/quiz" render={(props) =>
        <Quiz {...props} showHideLogIn={this.showHideLogIn} userId={this.state.userId} userQuiz={this.state.userQuiz} getUserQuizFinished={this.getUserQuizFinished} setUserQuizFinished={this.setUserQuizFinished} 
        getUserQuiz={this.getUserQuiz} /> }
      />
      <Route exact path="/results" render={(props) => (<QuizResults {...props} userId={this.state.userId} userQuiz={this.state.userQuiz} getUserQuizFinished={this.getUserQuizFinished} /> )} />
      <Route exact path="/personality" component={Personality}  />
      <Route exact path="/register" render={(props) => (<Register {...props} /> )} />
      <Route exact path="/login" render={(props) => (<Login {...props} /> )} />
      <Route exact path="/enneagram" render={(props) => (<Enneagram {...props}   /> )} />
      <Route exact path="/myersbriggs" render={(props) => (<MyersBriggs {...props}   /> )} />
      <Route exact path="/disc" render={(props) => (<DISC /> )} />
      <Route exact path="/fear" render={(props) => (<Fear /> )} />
      <Route exact path="/emotion" render={(props) => (<Emotion /> )} />
      <Route exact path="/struggle" render={(props) => (<Struggle /> )} />
      <Route exact path="/basicneeds" render={(props) => (<BasicNeeds /> )} />
      <Route exact path="/movies" render={(props) => (<Movies /> )} />
      <Route exact path="/attributes/creative" component={Creative}  />
      <Route exact path="/attributes/eternal" component={eternal}  />
      <Route exact path="/attributes/faithful" component={faithful}  />
      <Route exact path="/attributes/glorious" component={glorious}  />
      <Route exact path="/attributes/good" component={good}  />
      <Route exact path="/attributes/gracious" component={gracious}  />
      <Route exact path="/attributes/holy" component={holy}  />
      <Route exact path="/attributes/humble" component={humble}  />
      <Route exact path="/attributes/immutable" component={immutable}  />
      <Route exact path="/attributes/incomprehensible" component={incomprehensible}  />
      <Route exact path="/attributes/independent" component={independent}  />
      <Route exact path="/attributes/invisible" component={invisible}  />
      <Route exact path="/attributes/jealous" component={jealous}  />
      <Route exact path="/attributes/joyful" component={joyful}  />
      <Route exact path="/attributes/just" component={just}  />
      <Route exact path="/attributes/loving" component={loving}  />
      <Route exact path="/attributes/merciful" component={merciful}  />
      <Route exact path="/attributes/omnipotent" component={omnipotent}  />
      <Route exact path="/attributes/omnipresent" component={omnipresent}  />
      <Route exact path="/attributes/omniscient" component={omniscient}  />
      <Route exact path="/attributes/patient" component={patient}  />
      <Route exact path="/attributes/peaceful" component={peaceful}  />
      <Route exact path="/attributes/planning" component={planning}  />
      <Route exact path="/attributes/providing" component={providing}  />
      <Route exact path="/attributes/relational" component={relational}  />
      <Route exact path="/attributes/saving" component={saving}  />
      <Route exact path="/attributes/sovereign" component={sovereign}  />
      <Route exact path="/attributes/teaching" component={teaching}  />
      <Route exact path="/attributes/truthful" component={truthful}  />
      <Route exact path="/attributes/unique" component={unique}  />
      <Route exact path="/attributes/wise" component={wise}  />
      <Route exact path="/attributes/wrathful" component={wrathful} />
      </>
    )
  }
}

export default AppViews;