import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom"
import '../styles/personality.css'
import PersonalityTestList from "../components/personality/personalityTestList";

class Personality extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

      render() {
          return(
            <div className='page'>
              <section id="header">
                <h1 className="title">Browse by Personality</h1>
              </section>
              <body className="personalityPage">
              <section className="section">
              <div className="container">
                <PersonalityTestList />
              </div>
              </section>
              </body>
            </div>
          )
      }

}

export default withRouter(Personality);