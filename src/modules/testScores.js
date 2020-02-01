import React from 'react';
import { withRouter, Link } from "react-router-dom"
import fire from '../config/fire'
import './testScores.css'
import attArray from './attributeArray'

class QuizResults extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            user: '',
            acceptScore: 0,
            rejectScore: 0,
            reflectScore: 0,
            salvationScore: 0,
            topReflections: []
        }
      }

      getUserData = () => {
        let ref = fire.database().ref(`/userAttributes/${this.state.user}/scores`);
        ref.on('value', snapshot => {
          const state = snapshot.val();
          this.setState({acceptScore: this.state.acceptScore,
                         rejectScore: this.state.rejectScore,
                         reflectScore: this.state.reflectScore,
                         salvationScore: this.state.salvationScore});
        });

        let top3 = fire.database().ref(`/userAttributes/${this.state.user}`)
                                  .orderByChild('reflect').limitToLast(3);

        top3.on('value', snap => {
          let foo = [];
          snap.forEach(att => {
              foo.push(att.key)
          });
          this.setState({ topReflections: foo });
      });
    }

    componentDidMount() {

      fire.auth().onAuthStateChanged(user => {
        if (user) {
          this.setState({ user: user.displayName });
          this.getUserData();
        } else {
          console.log('')
         }
      });
    }

    getDescriptions = () => {
      {attArray.find(a => a.attributeName === 'wrath')}
    }


  render() {
    return(
        <>
        <section class="section">
          <div className="container">
            <h1 className="title">Here are your results, {this.state.user}!</h1>
            <h2 className="subtitle">Click on any attribute to find out more.</h2>
            <div className="top-3-container">
            {
              this.state.topReflections.map(att =>
                <div key={att} className="card">
                  <div className="card-content">
                    <p className="title">{att}</p>
                    <p className="subtitle">description
              </p>
                  </div>
                  <footer className="card-footer">
                    <p className="card-footer-item">
                      <span>
                      <Link to="/attribute">See more</Link>
                      </span>
                    </p>
                  </footer>
                </div>
              )
            }
            </div>
          </div>
        </section>
        </>
    )
  }
}

export default QuizResults;
