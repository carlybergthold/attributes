import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom"
import boy from '../../images/man.png'

class PersonalityTestList extends Component {

    render() {
        return(
            <div className="container">
            <section className="home-personality-container">
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src={boy} alt="Placeholder image" className="personalityIcon"></img>
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">The Enneagram</p>
                  </div>
                </div>
                <div className="content">
                This is a short description of this personality type.
                  <br></br>
                  <Link to="/enneagram" className="persLink">Read More</Link>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src={boy} alt="Placeholder image" className="personalityIcon"></img>
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">Myers Briggs</p>
                  </div>
                </div>
                <div className="content">
                This is a short description of this personality type.
                  <br></br>
                  <Link to="/myersbriggs" className="persLink">Read More</Link>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src={boy} alt="Placeholder image" className="personalityIcon"></img>
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">DISC</p>
                  </div>
                </div>
                <div className="content">
                This is a short description of this personality type.
                  <br></br>
                  <Link to="/disc" className="persLink">Read More</Link>
                </div>
              </div>
            </div>
            </section>
          </div>
        )
    }
}

export default withRouter(PersonalityTestList);