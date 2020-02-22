import React, { Component } from "react";
import { withRouter } from "react-router-dom"
import '../styles/personality.css'

class Personality extends Component {

    constructor(props){
        super(props);

      }

      render() {
          return(
            <div className='page'>
              <body className="personalityPage">
              <h1 className="title">Browse by Personality</h1>
              <section className="section">
                <h2 className="subtitle">The Enneagram</h2>
              <div className="container">
                Content about the enneagram
              </div>
              </section>
              <section className="section">
              <h2 className="subtitle">Myers Briggs</h2>
              <div className="container">
                content about MB
              </div>
              </section>
              <section className="section">
              <h2 className="subtitle">DISC</h2>
              <div className="container">
                content about DISC
              </div>
              </section>
              </body>
            </div>
          )
      }

}

export default withRouter(Personality);