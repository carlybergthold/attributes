import React, { Component } from "react";
import questions from './data/testArray'
import fire from "./config/fire"
import AppViews from './AppViews'

class AttributeApp extends Component {

    state = {
        user: localStorage.getItem('user')
              ? localStorage.getItem('user')
              : 'no user'
    }


  addUser = (email, password, username) => {
    fire.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredentials)=>{
        if(userCredentials.user) {
            userCredentials.user.updateProfile({
                displayName: username
            })
        }
    }).catch(function(error) {alert(error.message)});

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

    localStorage.setItem('user', username);
  }

  signIn = (email, password) => {
    fire.auth().signInWithEmailAndPassword(email, password)
    .then((userCredentials)=>{
      if(userCredentials.user) {
        localStorage.setItem('user', userCredentials.displayName)
      }
    }).catch(error => {console.log(error.message);});
  }

  signOut = () => {
    fire.auth().signOut().then(() => {localStorage.removeItem('user')}).catch(error => console.log(error));
  }

  render() {
    return(
      <>
      <AppViews addUser={this.addUser} signIn={this.signIn} signOut={this.signOut} user={this.state.user} />
      </>
    )
  }
}

export default AttributeApp;