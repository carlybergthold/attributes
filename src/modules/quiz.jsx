import React, { Component } from "react";
import "../styles/quiz.css";
import Hero from '../components/hero';
import { withRouter } from "react-router-dom";

class Quiz extends Component {

  constructor(props){
    super(props);

    this.state = {
      startingIndex: 1,
      endingIndex: 6,
      page: 1,
      questions: [],
      questionsAnswered: [],
      modalInUserMode: false,
      showPage: false,
      quizChecked: false,
      quizTaken: false
    }
  }

  componentDidMount() {
    document.querySelector(".navbar").scrollIntoView();
    // this.checkForUser();
  }

  // checkForUser = () => {
  //   if (!this.props.user) {
  //     this.setState({ modalInUserMode: true });
  //     this.openModal();
  //   } else {
  //     this.getQuizTaken();
  //   }
  // }

  // getQuizTaken = () => {
  //   fire.database().ref(`/userQuiz/${this.props.user}/quizTaken`)
  //   .on('value', snap => {
  //     this.setState({ quizTaken: snap.val(), quizChecked: true }, () => {
  //       if (!this.state.quizTaken) this.getUserQuestionsAnswered();
  //     })
  //   });
  // }

  // getUserQuestionsAnswered = () => {
  //   let questionsAnswered = [];

  //   fire.database().ref(`/userQuiz/${this.props.user}/questionsAnswered`)
  //     .once('value', snap => {
  //       const ids = snap.val();

  //       for (const key in ids) {
  //         const questionId = key;
  //         const score = ids[key].score;

  //         questionsAnswered.push({ questionId: parseInt(questionId), score: score});
  //       }

  //       this.setStartingAndEndingIndices(questionsAnswered);
  //     });
  // }

  // setStartingAndEndingIndices = (questionsAnswered) => {
  //   const highestQuestionIdAnswered = Math.max(...questionsAnswered.map(o => o.questionId), 0);
  //   let page = 1;
  //   let startingIndex = 1;
  //   let endingIndex = 6;

  //   if (questionsAnswered.length !== questions.length) {
  //     page = (highestQuestionIdAnswered / 6) + 1;
  //     startingIndex = highestQuestionIdAnswered + 1;
  //     endingIndex = highestQuestionIdAnswered + 6;
  //   }

  //   this.setState({ startingIndex: startingIndex, endingIndex: endingIndex, page: page });

  //   this.updateQuestionArrayWithAnswers(questionsAnswered);
  //   this.getQuestions();
  // }

  // updateQuestionArrayWithAnswers = (questionsAnswered) => {
  //   questionsAnswered.forEach(questionAnswered => {
  //     const match = questions.find(question => question.id === questionAnswered.questionId);
  //     match.score = questionAnswered.score;
  //   })
  // }

  // getIsChecked = (inputValue, question) => {
  //   if (question.score && inputValue === question.score) {
  //     return true;
  //   }

  //   return false;
  // }

  // getQuestions = () => {
  //   let questionsSection = questions.filter(q => q.id >= this.state.startingIndex && q.id <= this.state.endingIndex);

  //   this.setState( {questions: questionsSection} );
  // }

  // openModal = () => {
  //   const modal = document.querySelector('.modal');
  //   modal.classList.add("is-active");
  // }

  // closeModal = () => {
  //   document.querySelector('.modal').classList.remove("is-active");
  //   if (this.state.modalInUserMode) {
  //     this.setState({ modalInUserMode: false });
  //     this.getUserQuestionsAnswered();
  //   }
  // }

  // validateQuiz = () => {
  //   let radios = document.querySelectorAll('input');
  //   let checkedRadios = [];
  //   let button = document.querySelector('.quiz-btn');

  //   radios.forEach(radio => {if (radio.checked) checkedRadios.push(radio.key)});

  //   if (checkedRadios.length < this.state.questions.length) {
  //     this.openModal();
  //     return;
  //   } else {
  //     this.updateUserAttributes();
  //   }

  //   if (button.textContent !== 'Submit') {
  //     this.nextPageClick()
  //   } else {
  //     fire.database().ref(`/userQuiz/${this.props.user}`).update({quizTaken: true});
  //     this.props.history.push("/results");
  //   }
  // }

  // updateUserAttributes = () => {
  //   var baseElement = document.querySelector("#quiz-flex");
  //   let radios = baseElement.querySelectorAll('input');
  //   let totalAcceptanceScore = 0;
  //   let totalRejectionScore = 0;
  //   let totalReflectionScore = 0;
  //   let salvationScore = 0;

  //   let questionsAnswered = [];

  //   radios.forEach(radio => {
  //     if (radio.checked)
  //     {
  //       const questionId = radio.name;
  //       const chosenScore = parseInt(radio.value);

  //       questionsAnswered.push({ questionId: parseInt(questionId), score: chosenScore})

  //       let attribute = radio.className.split("-")[0];
  //       let category = radio.className.split("-")[1];

  //       if (category === 'accept' && attribute === 'grace')
  //       {
  //         salvationScore = chosenScore;
  //       }
  //       else if (category === 'accept')
  //       {
  //         totalAcceptanceScore += chosenScore;

  //       } else if (category === 'reject')
  //       {
  //         totalRejectionScore += chosenScore;
  //       } else totalReflectionScore += chosenScore;

  //       fire.database().ref(`/userAttributes/${this.props.user}/${attribute}`)
  //         .update({ [category]: {"score": parseInt(radio.value), "questionId": radio.name} });

  //       this.updateQuestionsAnswered(questionId, chosenScore);
  //     }
  //   })

  //   fire.database().ref(`/scores/${this.props.user}`).update({
  //     acceptScore: totalAcceptanceScore,
  //     rejectScore: totalRejectionScore,
  //     reflectScore: totalReflectionScore,
  //     salvationScore: salvationScore
  //   });

  //   this.updateQuestionArrayWithAnswers(questionsAnswered);

  // }

  // updateQuestionsAnswered = (questionId, score) => {
  //   if (this.props.user) {
  //     fire.database().ref(`/userQuiz/${this.props.user}/questionsAnswered/${questionId}`)
  //       .set({
  //         score: score
  //       });
  //   }
  // }

  // nextPageClick = () => {
  //   let newStart = this.state.startingIndex + 6;
  //   let newEnd = this.state.endingIndex + 6;
  //   let button = document.querySelector('.quiz-btn');
  //   this.setState({ page: this.state.page + 1 })

  //   this.setState( {startingIndex: newStart, endingIndex: newEnd}, () => this.getQuestions());

  //   if (newEnd >= questions.length) button.textContent = 'Submit';
  // };

  // backClick = () => {
  //   let newStart = this.state.startingIndex - 6;
  //   let newEnd = this.state.endingIndex - 6;

  //   this.setState({ page: this.state.page - 1})
  //   this.setState( {startingIndex: newStart, endingIndex: newEnd}, () => this.getQuestions());
  // }

  // loginClick = () => {
  //   this.closeModal();
  //   this.props.showHideLogIn(true);
  // }

  // showTakenQuiz = () => {
  //   this.setState({ quizTaken: false, page: 1, startingIndex: 1, endingIndex: 6 }, () => {
  //     this.getUserQuestionsAnswered();
  //   });
  // }

  render() {
    return(
      <div className='page'>
        <Hero title="Take the Quiz!" icon="../images/attributeIcons/SVG/good.svg"/>
        <div className="has-text-centered temp-message">
          <div className="title is-4">Coming Soon!</div>
        </div>
        {/* <div className={`quizPage container ${this.state.questions.length > 0 ? '' : 'hidden'}`}>
          <section id="quiz-flex">
        {
          this.state.questions
          .map(q =>
            <div key={q.id} id={q.id} className="question-card">
              <p className="question-header">{q.id}. {q.question}</p>
                <div className="question-inputs">
                  <label className="radio desktop-label">Least like me</label>
                  <input type="radio" className="is-hidden" disabled></input>

                  <input type="radio" value="1" className={`${q.attribute}-${q.category}`} name={q.id} defaultChecked={this.getIsChecked(1, q)}></input>

                  <input type="radio" value="2" className={`${q.attribute}-${q.category}`} name={q.id} defaultChecked={this.getIsChecked(2, q)}></input>

                  <input type="radio" value="3" className={`${q.attribute}-${q.category}`} name={q.id} defaultChecked={this.getIsChecked(3, q)}></input>

                  <input type="radio" value="4" className={`${q.attribute}-${q.category}`} name={q.id} defaultChecked={this.getIsChecked(4, q)}></input>

                  <input type="radio" value="5" className={`${q.attribute}-${q.category}`} name={q.id} defaultChecked={this.getIsChecked(5, q)}></input>
                  <label className="radio desktop-label">Most like me</label>

                </div>
            </div>
            )
            }
          </section>
          <div>
          <section className="section quiz-footer">
            <div className="control">
              <button className="button is-outlined is-primary is-large quizz-btn" disabled={this.state.startingIndex === 1} onClick={this.backClick}>Back</button>
              <button className="button is-primary is-large quiz-btn" onClick={this.validateQuiz} type="submit">
              Next</button>
              <div className="is-flex progess-bar">
                <span>{this.state.page}</span>
                <progress className="progress" value={this.state.page} max="16"></progress>
                <span>16</span>
              </div>
            </div>
          </section>
          </div>
        </div>
        <div className={this.state.quizTaken ? 'quiz-taken-message' : 'hidden'}>
          <h2 className="title is-2 is-spaced primary-text">You've already finished the quiz!</h2>
          <div className="quiz-taken-buttons">
            <div className="button"><Link to="/results">See Your Results</Link></div>
            <div className="button orange-background" onClick={this.showTakenQuiz}>Or Go to Quiz</div>
          </div>
        </div>
        <div className="modal">
          <div className="modal-background"></div>
          <div className="modal-content">
            <header className="modal-card-head is-flex justify-end">
              <button className="delete" aria-label="close" onClick={this.closeModal}></button>
            </header>
            <section className="modal-card-body">
              {this.state.modalInUserMode
                ? "In order to save your quiz results, please register or log in."
                : 'Please select an answer for each question before moving ahead!'}
            </section>
            <footer className="modal-card-foot is-flex justify-end">
            <button className={this.state.modalInUserMode ? 'button' : 'hidden'} onClick={this.loginClick}>Log In</button>
            <button className="button orange-background" onClick={this.closeModal}>Got it!</button>
            </footer>
          </div>
        </div> */}
      </div>
    )
  }
}

export default withRouter(Quiz);