import React  from 'react';
import { withRouter, Link } from "react-router-dom"
import fire from '../config/fire'
import '../styles/testScores.css'
import attArray from '../data/attributeArray'
import Face1 from "../assets/img/illustrations/faces/1.png";

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

  render() {
    return(
        <>
        <section className="section is-medium has-background-primary full-height">
          <div className='container'>
            <div className="title-wrapper has-text-centered">
              <h2 className="title is-2 is-spaced light-text">The three attributes you reflect the most:</h2>
            </div>
            <div className="content-wrapper homepage-personality">
              <div className="columns is-vcentered">
                {
                  this.state.topReflections.map(attribute =>
                  <div key={attribute} className="column is-4">
                      <figure className="testimonial has-text-centered">
                          <blockquote className="result-description">
                            <span className="is-capitalized">{attribute}</span>
                            <br></br>
                            <span className="has-text-weight-normal">{this.getDescription(attribute)}</span>
                          </blockquote>
                          <div className="author">
                              <img src={Face1} alt=""></img>
                              <h5><Link to={`/attributes/${attribute}`} className="link">Go to Attribute</Link></h5>
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