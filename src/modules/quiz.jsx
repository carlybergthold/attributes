import React, { Component } from "react";
import { withRouter } from "react-router-dom"
import questions from "../data/testArray"
import fire from "../config/fire"
import "../styles/quiz.css"


class Quiz extends Component {

  constructor(props){
    super(props);

    this.state = {
      currentPage: 1,
      recordsPerPage: 5,
    }
  }

  validateQuiz = () => {
    let radios = document.querySelectorAll('input');
    let checkedRadios = [];

    radios.forEach(radio => {if (radio.checked) checkedRadios.push(radio.key)});

    if (checkedRadios.length < 2) {
      alert('Please select one option in each question.');
    } else {
      this.updateUserAttributes();
      this.props.history.push("/results");
    }
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

        fire.database().ref(`/userAttributes/${this.props.user}/${attribute}`).update({[category]: parseInt(radio.value)});
      }
    })

    fire.database().ref(`/userAttributes/${this.props.user}/scores`).update({
      acceptScore: totalAcceptanceScore,
      rejectScore: totalRejectionScore,
      reflectScore: totalReflectionScore,
      salvationScore: salvationScore
    });
  }

  nextPage = () => {
    var newPage = this.state.currentPage + 1;

      if (this.state.currentPage < this.numPages()) {
        this.setState({currentPage: newPage})
        this.changePage(this.state.currentPage);
      }
      // else view results
  };

  changePage = (page) => {

      var questionSection = document.querySelector(".quiz-flex");
      var page_span = document.getElementById("page");

      if (page < 1) page = 1;
      if (page > this.numPages()) page = this.numPages();

      questionSection.innerHTML = "";

      for (var i = (page-1) * this.state.recordsPerPage; i < (page * this.state.recordsPerPage) && i < questions.length; i++) {
        questionSection.innerHTML +=
          `<div key=${questions[i].id} id=${questions[i].id} className="question-card">
            <p className="question-header">${questions[i].id}. ${questions[i].question}</p>
            <div className="question-inputs">
              <label className="radio">
              <input type="radio" className="is-hidden" disabled></input>
              Agree</label>

              <input type="radio" value="1" className={${questions[i].attribute}-${questions[i].category} big} name=${questions[i].id}></input>

              <input type="radio" value="2" className={${questions[i].attribute}-${questions[i].category} medium} name=${questions[i].id}></input>

              <input type="radio" value="3" className={${questions[i].attribute}-${questions[i].category} small} name=${questions[i].id}></input>

              <input type="radio" value="4" className={${questions[i].attribute}-${questions[i].category} medium} name=${questions[i].id}></input>

              <label className="radio">
              <input type="radio" value="5" className={${questions[i].attribute}-${questions[i].category} big} name=${questions[i].id}></input>
              Disagree</label>

            </div>
          </div>`
      }
  };

  numPages = () => {
      return Math.ceil(questions.length / this.state.recordsPerPage);
  };

  render() {
    return(
      <div className='page'>
      <div className="quizPage container">
        <section className="section">
          <div className="container quiz-header">
            <h1 className="title">Take the quiz!</h1>
          </div>
        </section>
      <section className="quiz-flex">
          {/* {
            questions
            .map(q =>
              <div key={q.id} id={q.id} className="question-card">
                <p className="question-header">{q.id}. {q.question}</p>
                  <div className="question-inputs">
                    <label className="radio">
                    <input type="radio" className="is-hidden" disabled></input>
                    Agree</label>

                    <input type="radio" value="1" className={`${q.attribute}-${q.category} big`} name={q.id}></input>

                    <input type="radio" value="2" className={`${q.attribute}-${q.category} medium`} name={q.id}></input>

                    <input type="radio" value="3" className={`${q.attribute}-${q.category} small`} name={q.id}></input>

                    <input type="radio" value="4" className={`${q.attribute}-${q.category} medium`} name={q.id}></input>

                    <label className="radio">
                    <input type="radio" value="5" className={`${q.attribute}-${q.category} big`} name={q.id}></input>
                    Disagree</label>

                  </div>
              </div>
              )
          } */}
        </section>
        <div>
        <section className="section quiz-footer">
          <div className="control">
          <button className="button is-primary is-large" onClick={this.validateQuiz} type="submit">
          Submit</button>
          </div>
        </section>
        <section className="section quiz-footer">
        <nav className="pagination" role="navigation" aria-label="pagination">
          <a className="pagination-next button is-large" onClick={this.nextPage}>Next page</a>
        </nav>
        </section>
        </div>
      </div>
      </div>
    )
  }
}

export default withRouter(Quiz);