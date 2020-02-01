import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom"
import questions from "../modules/testArray"
import fire from "../config/fire"
import "./quiz.css"


class Quiz extends Component {

  constructor(props){
    super(props);

    this.state = {
        user: '',
    }
  }

  componentDidMount() {

    fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user: user.displayName });
      } else {
        console.log('')
       }
    });
  }

  updateUserAttributes = () => {

    let radios = document.querySelectorAll('input');
    let totalAcceptanceScore = 0;
    let totalRejectionScore = 0;
    let totalReflectionScore = 0;
    let salvationScore = 0;

    radios.forEach(radio => {
      if (radio.checked)
      {
        let attribute = radio.className.split("-")[0];
        let category = radio.className.split("-")[1];

        if (category === 'accept' && attribute === 'grace')
        {
          salvationScore = parseInt(radio.value);
        }
        else if (category === 'accept')
        {
          totalAcceptanceScore += parseInt(radio.value);

        } else if (category === 'reject')
        {
          totalRejectionScore += parseInt(radio.value);
        } else totalReflectionScore += parseInt(radio.value);
      }

      if (radio.checked)
      {
        let attribute = radio.className.split("-")[0];
        let category = radio.className.split("-")[1];

        fire.database().ref(`/userAttributes/${this.props.user}/${attribute}`).update({
          [category]: parseInt(radio.value)
        });
      }
    })

    fire.database().ref(`/userAttributes/${this.props.user}/scores`).update({
      acceptScore: totalAcceptanceScore,
      rejectScore: totalRejectionScore,
      reflectScore: totalReflectionScore,
      salvationScore: salvationScore
    });
  }

  render() {
    return(
      <>
      <div className="container">
      <h1 className="title">Take the quiz!</h1>
          {
            questions
            .map(q =>
              <div key={q.id} id={q.id} className="question-card">
                  <p className="question-header">{q.question}</p>
                  <div className="question-inputs">
                    <label className="radio">
                    <input type="radio" className="is-hidden" disabled></input>
                    Least like me</label>

                    <input type="radio" value="1" className={`${q.attribute}-${q.category}`} name={q.id}></input>

                    <input type="radio" value="2" className={`${q.attribute}-${q.category}`} name={q.id}></input>

                    <input type="radio" value="3" className={`${q.attribute}-${q.category}`} name={q.id}></input>

                    <input type="radio" value="4" className={`${q.attribute}-${q.category}`} name={q.id}></input>

                    <label className="radio">
                    <input type="radio" value="5" className={`${q.attribute}-${q.category}`} name={q.id}></input>
                    Most like me</label>

                  </div>
              </div>
              )
          }

        <div>
          <button onClick={this.updateUserAttributes} type="submit" className="btn btn-primary">
          <Link to="/results">Submit</Link>
          </button>
        </div>
      </div>
      </>
    )
  }
}

export default Quiz;