import React  from 'react';
import { withRouter, Link } from "react-router-dom"
import fire from '../config/fire'
import '../styles/testScores.css'
import attArray from '../data/attributeArray'
import styleMethods from "../methods/styleMethods";
import One from "../images/one.png";
import Two from "../images/two.png";
import Three from "../images/three.png";

class QuizResults extends React.Component {

  constructor(props){
      super(props);

      this.state = {
          quizChecked: false,
          quizTaken: false,
          acceptScore: 0,
          rejectScore: 0,
          reflectScore: 0,
          salvationScore: 0,
          topReflections: [],
          bottomReflections: []
      }
  }

  componentDidMount() {
    document.querySelector(".navbar").scrollIntoView();

    if (!this.props.user) this.props.history.push('/home');

    this.getUserData();
  }

  getUserData = () => {
    fire.database().ref(`/userQuiz/${this.props.user}/quizTaken`)
      .on('value', snap => {
        this.setState({ quizTaken: snap.val(), quizChecked: true })
      });



    let ref = fire.database().ref(`/scores/${this.props.user}`);
    ref.on('value', snapshot => {
      this.setState({acceptScore: this.state.acceptScore,
                      rejectScore: this.state.rejectScore,
                      reflectScore: this.state.reflectScore,
                      salvationScore: this.state.salvationScore});
    });

    const reflectionScores = fire.database().ref(`/userAttributes/${this.props.user}`);

    reflectionScores.on('value', snap => {
      let reflections = [];

      snap.forEach(att => {
        const attribute = att.key;
        const score = att.val();

        if (score !== undefined && score.reflect !== undefined) {
          const reflectScore = att.val().reflect.score === undefined ? 0 : att.val().reflect.score;
          reflections.push({ "attribute": attribute, "score": reflectScore });
        }
      });

      reflections = reflections.sort((a, b) => a.score - b.score);

      const top3 = reflections.slice(-3);
      const bottom3 = reflections.slice(0, 3);

      const topList = [];
      const bottomList = [];

      top3.forEach(x => topList.push(x.attribute));
      bottom3.forEach(x => bottomList.push(x.attribute));

      this.setState({ topReflections: topList, bottomReflections: bottomList });
    });
  }

  getDescription = (attribute) => {
    if (attribute === undefined) return;
    const att = attArray.find(x => x.attributeName === attribute);
    return att !== undefined ? att.description : ""
  }

  getPNG = (index) => {
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

  render() {
    return(
        <>
        {/* if hasn't taken quiz */}
        <section className={this.state.quizTaken ? 'hidden' : 'section is-medium has-background-primary full-height'}>
        <div className='container'>
          <div className="title-wrapper has-text-centered">
            <h2 className="title is-2 is-spaced light-text">You haven't finished the quiz yet!</h2>
            <div className="button"><Link to="/quiz">Take the Quiz</Link></div>
          </div>
        </div>
        </section>

        {/* if quiz results are available */}
        <section className={this.state.quizChecked && this.state.quizTaken ? 'section is-medium has-background-primary full-height' : 'hidden'}>
          <div className='container'>
            <div className="title-wrapper has-text-centered">
              <h2 className="title is-2 is-spaced light-text">The three attributes you reflect the most:</h2>
            </div>
            <div className="content-wrapper homepage-personality">
              <div className="columns is-vcentered">
                {
                  this.state.topReflections.map((attribute, index) =>
                  <div key={index} className="column is-4">
                      <figure className="testimonial has-text-centered">
                          <blockquote className="result-description">
                            <span className="is-capitalized">{attribute}</span>
                            <br></br>
                            <span className="has-text-weight-normal">{this.getDescription(attribute)}</span>
                          <figure>
                          {
                            styleMethods.getIcon(attribute, styleMethods.getAttributeColor(attribute))
                          }
                          </figure>
                          </blockquote>
                          <div className="author">
                            <img src={this.getPNG(index)} alt="index"></img>
                            <h5><Link to={`/attributes/${attribute}`} className="link">Go to {attribute}</Link></h5>
                          </div>
                      </figure>
                  </div>
                    )
                }
              </div>
            </div>
          </div>

          <div className='container'>
            <div className="title-wrapper has-text-centered">
              <h2 className="title is-2 is-spaced light-text">The three attributes you reflect the least:</h2>
            </div>
            <div className="content-wrapper homepage-personality">
              <div className="columns is-vcentered">
                {
                  this.state.bottomReflections.map((attribute, index) =>
                  <div key={index} className="column is-4">
                      <figure className="testimonial has-text-centered">
                          <blockquote className="result-description">
                            <span className="is-capitalized">{attribute}</span>
                            <br></br>
                            <span className="has-text-weight-normal">{this.getDescription(attribute)}</span>
                          <figure>
                          {
                            styleMethods.getIcon(attribute, styleMethods.getAttributeColor(attribute))
                          }
                          </figure>
                          </blockquote>
                          <div className="author">
                            <img src={this.getPNG(index)} alt="index"></img>
                            <h5><Link to={`/attributes/${attribute}`} className="link">Go to {attribute}</Link></h5>
                          </div>
                      </figure>
                  </div>
                    )
                }
              </div>
            </div>
          </div>
        </section>
        </>
    )
  }
}

export default withRouter(QuizResults);