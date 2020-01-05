import React, { Component } from "react";
import questions from "../modules/testArray"
import fire from "../config/fire"


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
        this.getUserData();
        console.log(this.state)
      } else {
        console.log('no user')
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

        fire.database().ref(`/userAttributes/${this.state.user}/${attribute}`).update({
          [category]: parseInt(radio.value)
        });
      }
    })

    fire.database().ref(`/userAttributes/${this.state.user}/scores`).update({
      acceptScore: totalAcceptanceScore,
      rejectScore: totalRejectionScore,
      reflectScore: totalReflectionScore,
      salvationScore: salvationScore
    });
  }

  render() {
    return(
      <>
          {
            questions
            .map(q =>
              <div key={q.id} id={q.id} className="question-card">
                  <p className="question-header">{q.question}</p>
                  <div className="question-inputs">
                    <input type="radio" value="1" className={`${q.attribute}-${q.category}`} name={q.id}></input>
                    <input type="radio" value="2" className={`${q.attribute}-${q.category}`} name={q.id}></input>
                    <input type="radio" value="3" className={`${q.attribute}-${q.category}`} name={q.id}></input>
                    <input type="radio" value="4" className={`${q.attribute}-${q.category}`} name={q.id}></input>
                    <input type="radio" value="5" className={`${q.attribute}-${q.category}`} name={q.id}></input>
                  </div>
              </div>
              )
          }

        <div>
          <button onClick={this.updateUserAttributes} type="submit" className="btn btn-primary">Save</button>
        </div>
      </>
    )
  }
}

export default Quiz;