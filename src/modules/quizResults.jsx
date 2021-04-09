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
          acceptScore: 0,
          rejectScore: 0,
          reflectScore: 0,
          salvationScore: 0,
          topReflections: [],
          bottomReflections: []
      }
  }

  componentDidMount() {
    this.getUserData();
    window.scrollTo(0, 0);
  }

  getUserData = () => {
      let ref = fire.database().ref(`/scores/anonymous`);
      ref.on('value', snapshot => {
        this.setState({acceptScore: this.state.acceptScore,
                        rejectScore: this.state.rejectScore,
                        reflectScore: this.state.reflectScore,
                        salvationScore: this.state.salvationScore});
      });

      let top3 = fire.database().ref(`/userAttributes/anonymous`)
                                .orderByChild('reflect').limitToLast(3);

      let bottom3 = fire.database().ref(`/userAttributes/anonymous`)
                                    .orderByChild('reflect').limitToFirst(3);

      top3.on('value', snap => {
        let foo = []
        snap.forEach(att => {
            foo.push(att.key)
        });
        this.setState({ topReflections: foo})
      });

      bottom3.on('value', snap => {
        let foo = []
        snap.forEach(att => {
            foo.push(att.key)
        });
        this.setState({ bottomReflections: foo})
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
        <section className="section is-medium has-background-primary full-height">
          <div className='container'>
            <div className="title-wrapper has-text-centered">
              <h2 className="title is-2 is-spaced light-text">Your top three attributes:</h2>
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
        </section>
        </>
    )
  }
}

export default withRouter(QuizResults);