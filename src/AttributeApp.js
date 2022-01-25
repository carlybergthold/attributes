import React, { Component } from "react";
import questions from './data/testArray';
import fire from "./config/fire";
import AppViews from './AppViews';
import { withRouter } from "react-router-dom";
import "./assets/scss/core.scss";

class AttributeApp extends Component {

    state = {
        user: localStorage.getItem('user'),
        showLogIn: false,
        loginError: ''
    }

    addUser = (email, password, username) => {
      fire.auth().createUserWithEmailAndPassword(email, password)
      .then(user => {
        if(user.user) user.user.updateProfile({displayName: username});
        this.showHideLogIn(false);
      })
      .catch(error => {
        this.setState({ loginError: error.message})
      });

      if (username !== 'undefined'  && username !== 'anon') {
        questions.forEach(q => {
          fire.database().ref(`/scores/${username}`).set({
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
      }
      this.handleUserChange();
    }

    signIn = (email, password) => {
      fire.auth().signInWithEmailAndPassword(email, password)
      .then(user => {
        this.showHideLogIn(false);
      })
      .catch(error => {
        this.setState({ loginError: error.message})
      });
      this.handleUserChange();
    }

    signOut = () => {
      fire.auth().signOut()
      .catch(error => {
        this.showHideLogIn(true);
        this.setState({ loginError: error.message})
      });
      this.handleUserChange();
    }

    forgotPassword = (email) => {
      fire.auth().sendPasswordResetEmail(email)
        .then(function() {
          this.setState({ loginError: 'Email sent.'})
        })
        // .catch(function(error) {
        //   this.setState({ loginError: error.message})
        // });
    }

    handleUserChange = () => {
      fire.auth().onAuthStateChanged(user => {
        if (user) {
          const displayName = user.displayName ? user.displayName : user.email;
          localStorage.setItem('user', displayName);
          this.setState({ user: displayName});
          console.log('user set to ', displayName)
        } else {
          localStorage.removeItem('user');
          this.setState({ user: null});
          console.log('user signed out')
        }
      });
    }

    showHideLogIn = (showLogIn) => {
      this.setState({
        showLogIn: showLogIn
      })
    }

    resetLoginError = () => {
      this.setState({ loginError: ''})
    }

    render() {
      return(
        <AppViews
          addUser={this.addUser}
          signIn={this.signIn}
          signOut={this.signOut}
          forgotPassword={this.forgotPassword}
          showHideLogIn={this.showHideLogIn}
          resetLoginError={this.resetLoginError}
          user={this.state.user}
          loginError={this.state.loginError}
          showLogIn={this.state.showLogIn}
        />
      )
    }
}

export default withRouter(AttributeApp);