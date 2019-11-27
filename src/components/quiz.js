import React, { Component } from "react";

class Quiz extends Component {
  state = {
    user: null,
    modal: false,
    score: 0,
    username: null
  };

  componentDidMount = () => {
    //Check localStorage for logged in email
    //Fix this later
    let userName = localStorage.getItem("userEmail")
    if (localStorage.getItem("userEmail")) {
      this.setState({ username: this.parseUserName(userName) })
    }
    let localStorageToBool = localStorage.getItem("scoreModal")
    //Converting localStorage info into boolean since Modal was pissed it was a string
    let modalBool = (localStorageToBool == "true")
    this.setState({
      user: localStorage.getItem("userEmail"),
      modal: modalBool
    });
    //localStorage.setItem("scoreModal", false)
    console.log("Home Mounted");
  };

  render() {
    return (
      <>
        <div className="videoContainer" >
        </div>
      </>
    );
  }
}

export default Quiz;