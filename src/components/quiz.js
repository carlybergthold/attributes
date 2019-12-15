import React, { Component } from "react";
import questions from "../modules/testArray"
import fire from "../config/fire"


class Quiz extends Component {

  setUserAttributes = (uid, name, email) => {
    fire.database().ref(`users/${uid}`).set({
        username: name,
        email: email
    });

    questions.forEach(q => {
        fire.database().ref(`/userAttributes/${uid}/${q.attribute}/${q.category}`).set({
            score: 0
        });
        fire.database().ref(`/userAttributes/${uid}/scores`).set({
          acceptScore: 0,
          rejectScore: 0,
          reflectScore: 0,
          salvationScore: 0
      })
    })
  }

  updateUserAttributes = (uid) => {

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

        console.log(`${attribute}/${category} + ${radio.value}`)

        return fire.database().ref(`/userAttributes/${uid}/${attribute}/${category}`).update({
            score: parseInt(radio.value)
        });
      }
    })

    return fire.database().ref(`/userAttributes/${uid}/scores`).update({
      acceptScore: totalAcceptanceScore,
      rejectScore: totalRejectionScore,
      reflectScore: totalReflectionScore,
      salvationScore: salvationScore
    });
  }

  render() {
    return(
      <>
        <div>
          <button onClick={() => this.setUserAttributes('carly', 'carly', 'carly@carly.com')} type="submit" className="btn btn-primary">new user</button>
        </div>

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
          <button onClick={() => this.updateUserAttributes('carly')} type="submit" className="btn btn-primary">Save</button>
        </div>
      </>
    )
  }
}

export default Quiz;