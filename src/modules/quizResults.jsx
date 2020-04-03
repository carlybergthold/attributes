import React, { Component }  from 'react';
import { withRouter } from "react-router-dom"
import fire from '../config/fire'
import '../styles/testScores.css'
import attArray from '../data/attributeArray'
import Components from '../methods/card'
import girl from '../images/girl.png'
import { isThisTypeNode } from 'typescript';

class QuizResults extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            acceptScore: 0,
            rejectScore: 0,
            reflectScore: 0,
            salvationScore: 0,
            topReflections: [],
            topObjects: [],
            one: {},
            two: {},
            three: {}
        }
      }

      componentDidMount() {
        window.scrollTo(0, 0);
      }

      getUserData = () => {
        let ref = fire.database().ref(`/userAttributes/${this.props.user}/scores`);
        ref.on('value', snapshot => {
          const state = snapshot.val();
          this.setState({acceptScore: this.state.acceptScore,
                         rejectScore: this.state.rejectScore,
                         reflectScore: this.state.reflectScore,
                         salvationScore: this.state.salvationScore});
        });

        let top3 = fire.database().ref(`/userAttributes/${this.props.user}`)
                                  .orderByChild('reflect').limitToLast(3);

        top3.on('value', snap => {
          let foo = []
          snap.forEach(att => {
//if not RESULTS.....
              foo.push(att.key)
          });
          this.setState({ topReflections: foo})
      });
    }

    componentDidMount() {
        if (this.props.user != 'anon') {
          this.getUserData()
        } else alert('no user!')
    }

  render() {
    return(
        <>
        <div className='page'>
          <section id="header">
            <h1 className="title">Here are your results, {this.props.user}!</h1>
          </section>
        <section className="section">
          <div className="container">
            <h2 className="subtitle">Click on any attribute to find out more.</h2>
            <div className="top-3-container">
            {
                this.state.topReflections.map(att =>
                <div key={att} className="card">
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src={girl} alt="Placeholder image" className="personalityIcon"></img>
                    </figure>
                  </div>
                  <div className="card-content">
                    <p className="title">{att}</p>
                  </div>
                  <footer className="card-footer">
                    <p className="card-footer-item">
                      <span className="likeLink" onClick={() => this.props.history.push({
                                                          pathname: '/attributes',
                                                          state: { attribute: att } })}>Learn more!
                      </span>
                    </p>
                  </footer>
                </div>
              )
            }
            </div>
          </div>
        </section>
        </div>
        </>
    )
  }
}

export default withRouter(QuizResults);