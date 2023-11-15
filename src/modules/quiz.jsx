import React from "react";
import { useEffect, useState } from "react";
import { withRouter, Link } from "react-router-dom";
import questionArray from "../data/testArray";
import "../styles/quiz.css";
import Hero from '../components/hero';
import Modal from '../components/modal';
import userMethods from "../methods/supabaseMethods";

function Quiz(props) {
  const [page, setPage] = useState(1);
  const [startingIndex, setStartingIndex] = useState(1);
  const [endingIndex, setEndingIndex] = useState(6);
  const [indexAmount, setIndexAmount] = useState(6);
  const [questions, setQuestions] = useState([]);
  const [quizFinished, setQuizFinished] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (props.userId) {
      getUserQuizQuestions();
    } else {
      resetQuiz();
    }
  }, [props.userId]);

  function resetQuiz() {
    questionArray.forEach(q => q.value = 0);
    setQuestions(questionArray);

    setStartingIndex(1);
    setEndingIndex(6);

    setShowModal(true);
  }

  function getUserQuizQuestions() {
    userMethods.getUserQuiz(props.userId).then(response => {
      if (response.length > 0) {
        response.forEach(question => {
          const match = questionArray.find(q => q.id === question.questionId);

          if (match) {
            match.value = question.questionValue;
          }
        })
      }

      setQuizFinished(questionArray.every(q => q.value > 0));
      setQuestions(questionArray);
      goToLastPageAnswered(questionArray);
    })
  }

  function goToLastPageAnswered(questions) {
    const answeredQuestions = questions.filter(q => q.value > 0);

    if (answeredQuestions.length > 0) {
      const lastQuestionAnswered = answeredQuestions.pop();

      const indexAmount = lastQuestionAnswered.id - 6;
      const pageAmount = (lastQuestionAnswered.id / 6) - 1;

      if (lastQuestionAnswered.id === 12) {
        updateIndices(true);
      } else if (lastQuestionAnswered.id > 12) {
        updateIndices(true, indexAmount, pageAmount);
      }
    }
  }

  function saveUserQuizQuestion(questionId, questionValue) {
    userMethods.addUserQuizQuestion(props.userId, questionId, questionValue);
  }

  function getQuestions() {
    return questions.filter(q => q.id >= startingIndex && q.id <= endingIndex);
  }

  function nextPageClick() {
    if (props.user) {
      if (page !== getPageMax()) {
        getQuestions().forEach(question => {
          saveUserQuizQuestion(question.id, question.value);
        });
        updateIndices(true);
      } else {
        setQuizFinished(true);
      }
    } else {
      setShowModal();
    }
  }

  function backClick() {
    updateIndices(false);
  }

  function updateIndices(addIndices, indexAmountOverride = indexAmount, pageAmount = 1) {
    const newStart = addIndices ? startingIndex + indexAmountOverride : startingIndex - indexAmountOverride;
    const newEnd = addIndices ? endingIndex + indexAmountOverride : endingIndex - indexAmountOverride;
    const newPage = addIndices ? page + pageAmount : page - pageAmount;

    setStartingIndex(newStart);
    setEndingIndex(newEnd);
    setPage(Math.round(newPage));
  };

  function validateQuiz() {
    const hasUnansweredQuestions = getQuestions().some(q => q.value === 0) || getQuestions().some(q => q.value === undefined);

    if (hasUnansweredQuestions) {
      setShowModal(true);
    } else {
      nextPageClick();
    }
  }

  function assignScore(questionId, value) {
    setQuestions([
      ...questions,
      questions.find(q => q.id === questionId).value = value
    ])
  }

  function getInputs(question) {
    let list = [<input key="0" type="radio" className="is-hidden" disabled></input>];

    for (let i = 1; i < 6; i++) {
      list.push(<input key={i} type="radio" value={i} className={`${question.attribute}-${question.category}`} name={question.id}
      checked={question.value === i} onChange={() => assignScore(question.id, i)}></input>);
    }

    return list;
  }

  function getModalMessage() {
    const message = props.userId
      ? 'Please select an answer for each question before moving ahead!'
      : 'In order to take the quiz, please register or log in.';

      return (
        <div>
          <div>{message}</div>
          <div className="flex justify-content-center">
            <div className="button mt-20" onClick={() => setShowModal(false)}>Got it</div>
            <div className="button is-light mt-20" onClick={registerClick}>Log In</div>
          </div>
        </div>
      );
  }

  function registerClick() {
    setShowModal(false);
    props.showHideLogIn(true);
  }

  function getButtonText() {
    return page === getPageMax() ? 'Submit' : 'Next';
  }

  function getPageMax() {
    return Math.round(questionArray.length / indexAmount);
  }

  return (
    <>
    <div className='page'>
        <Hero title="Take the Quiz!" />
        <div className={`quizPage container ${questions.length > 0 && !quizFinished ? '' : 'hidden'}`}>
          <section id="quiz-flex">
        {
          getQuestions()
          .map(q =>
            <div key={q.id} id={q.id} className="question-card">
              <p className="question-header">{q.id}. {q.question}</p>
                <div className="question-inputs">
                  <label className="radio desktop-label">Least like me</label>
                    {getInputs(q)}
                  <label className="radio desktop-label">Most like me</label>

                </div>
            </div>
            )
            }
          </section>
          <div>
          <section className="section quiz-footer">
            <div className="control">
              <button className="button is-outlined is-primary is-large quizz-btn" disabled={startingIndex === 1} onClick={backClick}>Back</button>
              <button className="button is-primary is-large quiz-btn" onClick={validateQuiz} type="submit">{getButtonText()}</button>
              <div className="is-flex progess-bar">
                <span>{page}</span>
                <progress className="progress" value={page} max={getPageMax()}></progress>
                <span>{getPageMax()}</span>
              </div>
            </div>
          </section>
          </div>
        </div>
        <div className={quizFinished ? 'quiz-taken-message' : 'hidden'}>
          <h2 className="title is-2 is-spaced primary-text">You've already finished the quiz!</h2>
          <div className="quiz-taken-buttons">
            <div className="button"><Link to="/results">See Your Results</Link></div>
          </div>
        </div>
    </div>
    <Modal showModal={showModal} toggleModal={() => setShowModal((prev) => !prev)} message={getModalMessage()} />
    </>
  );
}

export default withRouter(Quiz);