import React  from 'react';
import { useEffect } from "react";
import { withRouter, Link } from "react-router-dom"
import '../styles/testScores.css'
import attArray from '../data/attributeArray'
import styleMethods from "../methods/styleMethods";
import One from "../images/one.png";
import Two from "../images/two.png";
import Three from "../images/three.png";
import quizArray from "../data/testArray";

function QuizResults(props) {
  useEffect(() => {
    const userNotLoggedIn = props.userId === null || props.userId === undefined;

    if (userNotLoggedIn) {
      props.history.push('/home');
    }
  });

  function getTopUserAttributes() {
    if (props.userQuiz !== null && props.userQuiz.length > 0) {
      props.userQuiz.forEach(x => {
        const match = quizArray.find(q => q.id === x.questionId);

        if (match) {
          x.attribute = match.attribute;
        }
      });

      const summedValues = {};

      return props.userQuiz
        .reduce((accumulator, obj) => {
          const { attribute, questionValue } = obj;

          if (!summedValues[attribute]) {
            summedValues[attribute] = { attribute, questionValue };
            accumulator.push(summedValues[attribute]);
          } else {
            summedValues[attribute].questionValue += questionValue;
          }

          return accumulator;
        }, [])
        .sort((a, b) => b.questionValue - a.questionValue)
        .slice(0, 3);
    } else {
      return [];
    }
  }

  function getDescription(attribute) {
    if (attribute === undefined) return;
    const att = attArray.find(x => x.attributeName === attribute);
    return att !== undefined ? att.description : ""
  }

  function getPNG(index) {
    if (index === 0) {
      return One
    }
    if (index === 1) {
      return Two
    }
    if (index === 2) {
      return Three
    }
  }

  function getResultsHtml() {
    return props.userQuiz ? (
      <div className="columns is-vcentered">
      {
        getTopUserAttributes().map((obj, index) =>
        <div key={index} className="column is-4">
            <figure className="testimonial has-text-centered">
                <blockquote className="result-description">
                  <span className="is-capitalized">{obj.attribute}</span>
                  <br></br>
                  <span className="has-text-weight-normal">{getDescription(obj.attribute)}</span>
                <figure>
                {
                  styleMethods.getIcon(obj.attribute, styleMethods.getAttributeColor(obj.attribute))
                }
                </figure>
                </blockquote>
                <div className="author">
                  <img src={getPNG(index)} alt="index"></img>
                  <h5><Link to={`/attributes/${obj.attribute}`} className="link">Go to {obj.attribute}</Link></h5>
                </div>
            </figure>
        </div>
          )
      }
    </div>
    ) : (<div>no quiz</div>);
  }

  return(
      <>
      <section className='section is-medium has-background-primary full-height'>
        <div className='container'>
          <div className="title-wrapper has-text-centered">
            <h2 className="title is-2 is-spaced light-text">The three attributes you reflect the most:</h2>
          </div>
          <div className="content-wrapper homepage-personality">
            {getResultsHtml()}
          </div>
        </div>
      </section>
      </>
  )
}

export default withRouter(QuizResults);