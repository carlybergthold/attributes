import React, { Component } from "react";
import { withRouter } from "react-router-dom"
import questions from "../data/testArray"
import fire from "../config/fire"
import "../styles/quiz.css"
import Hero from '../components/hero'


class Quiz extends Component {

  constructor(props){
    super(props);

    this.state = {
      startingIndex: 1,
      endingIndex: 6,
      questions: []
    }
  }

  componentDidMount() {
    this.getQuestions();
    window.scrollTo(0, 0);
  }

  validateQuiz = () => {
    let radios = document.querySelectorAll('input');
    let checkedRadios = [];
    let button = document.querySelector('.quiz-btn');

    radios.forEach(radio => {if (radio.checked) checkedRadios.push(radio.key)});

    if (checkedRadios.length < this.state.questions.length) {
      alert('Please select one option in each question.');
      return;
    } else {
      this.updateUserAttributes();
    }

    if (button.textContent !== 'Submit') {
      this.nextPageClick()
    } else {
      this.props.history.push("/results");
    }
  }

  updateUserAttributes = () => {
    var baseElement = document.querySelector("#quiz-flex");
    let radios = baseElement.querySelectorAll('input');
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

        fire.database().ref(`/userAttributes/anonymous/${attribute}`).update({[category]: parseInt(radio.value)});
      }
    })

    fire.database().ref(`/scores/anonymous`).update({
      acceptScore: totalAcceptanceScore,
      rejectScore: totalRejectionScore,
      reflectScore: totalReflectionScore,
      salvationScore: salvationScore
    });
  }

  getQuestions = () => {
    let questionsSection = questions.filter(q => q.id >= this.state.startingIndex &&
                                                 q.id <= this.state.endingIndex);
    this.setState( {questions: questionsSection} );
    window.scrollTo(0, 0);
  }

  nextPageClick = () => {
    let newStart = this.state.startingIndex + 6;
    let newEnd = this.state.endingIndex + 6;
    let button = document.querySelector('.quiz-btn');

    this.setState( {startingIndex: newStart, endingIndex: newEnd}, () => this.getQuestions());

    if (newEnd > questions.length) button.textContent = 'Submit';
  };

  render() {
    return(
      <div className='page'>
      <Hero title="Take the Quiz!" img="girl.png" />
      <div className="quizPage container">
      <section id="quiz-flex">
      {
        this.state.questions
        .map(q =>
          <div key={q.id} id={q.id} className="question-card">
            <p className="question-header">{q.id}. {q.question}</p>
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
        </section>
        <div>
        <section className="section quiz-footer">
          <div className="control">
          <button className="button is-primary is-large quiz-btn" onClick={this.validateQuiz} type="submit">
          Next Page</button>
          </div>
        </section>
        </div>
      </div>
      </div>
    )
  }
}

export default withRouter(Quiz);