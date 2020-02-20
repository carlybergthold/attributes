import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom"
import fire from '../config/fire'
import attributeArray from '../data/attributeArray'
import '../styles/attributePage.css'
import userMethods from "../methods/userMethods";
import Sidebar from '../components/sidebar'

class Personality extends Component {

    constructor(props){
        super(props);

        this.state = {
            attribute: 'creative',
            description: '',
            seenInJesus: '',
            symbol: '',
            whoSaintsAre: '',
            whoUnsavedAre: ''
        }
      }

      render() {
          return(
              <>
              <body className="attPage">
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
              </>
          )
      }

}

export default withRouter(Personality);