import React, { Component } from "react";
import questions from './data/testArray'
import fire from "./config/fire"
import AppViews from './AppViews'
import { withRouter } from "react-router-dom"

class AttributeApp extends Component {

    state = {
        user: 'anon'
    }


  addUser = (email, password, username) => {
    fire.auth().createUserWithEmailAndPassword(email, password)
    .then(user => {if(user.user) user.user.updateProfile({displayName: username})})
    .catch(error => alert(error.message));

    if (username != 'undefined'  && username != 'anon') {
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

  handleUserChange = () => {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        localStorage.setItem('user', user.displayName);
        this.setState({ user: localStorage.getItem('user') },
        () =>
          this.props.history.push("/home")
        );
      } else {
        localStorage.removeItem('user');
        this.setState({ user: 'anon' });
      }
    });
  }

  signIn = (email, password) => {
    fire.auth().signInWithEmailAndPassword(email, password).catch(error => alert(error.message));
    this.handleUserChange();
  }

  signOut = () => {
    fire.auth().signOut().catch(error => alert(error));
    this.handleUserChange();
  }

  render() {
    return(
      <>
      <AppViews addUser={this.addUser} signIn={this.signIn} signOut={this.signOut} user={this.state.user} />
      </>
    )
  }
}

export default withRouter(AttributeApp);