import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom"
import Enneagram from "../../images/personality/enneagram.svg";
import MyersBriggs from "../../images/personality/myersBriggs.svg";
import DISC from "../../images/personality/disc.svg";

class PersonalityTestList extends Component {

    render() {
        return(
          <>
          <div className="hero-body">
            <div className="container">
                <div className="columns is-vcentered">
                  <div className="column is-5 is-offset-1 landing-caption">
                      <h1 className="title is-1 is-bold is-spaced">
                          Enneagram
                      </h1>
                      <h2 className="subtitle is-5 is-muted">This is a short description of this personality type.</h2>
                      <div className="button-wrap">
                          <span className="button is-rounded is-primary raised">
                            <Link to="/enneagram" className="persLink">Read More</Link>
                          </span>
                      </div>
                  </div>
                  <div className="column is-5">
                      <figure className="image">
                          <img src={Enneagram} alt="Description" id="home-illustration"></img>
                      </figure>
                  </div>
                </div>
            </div>
          </div>

          <section className="section has-background-primary">
            <div className="hero-body">
              <div className="container">
                  <div className="columns is-vcentered">
                    <div className="column is-5">
                        <figure className="image">
                            <img src={MyersBriggs} alt="Description" id="home-illustration"></img>
                        </figure>
                    </div>
                    <div className="column is-5 is-offset-1 landing-caption">
                        <h1 className="title is-1 is-bold is-spaced">
                            Myers Briggs
                        </h1>
                        <h2 className="subtitle is-5 is-muted">This is a short description of this personality type.</h2>
                        <div className="button-wrap">
                            <span className="button is-rounded is-white raised">
                              <Link to="/myersbriggs" className="persLink">Read More</Link>
                            </span>
                        </div>
                    </div>
                  </div>
              </div>
            </div>
          </section>

          <div className="hero-body">
            <div className="container">
                <div className="columns is-vcentered">
                  <div className="column is-5 is-offset-1 landing-caption">
                      <h1 className="title is-1 is-bold is-spaced">
                          DISC
                      </h1>
                      <h2 className="subtitle is-5 is-muted">This is a short description of this personality type.</h2>
                      <div className="button-wrap">
                          <span className="button is-rounded is-primary raised">
                            <Link to="/disc" className="persLink">Read More</Link>
                          </span>
                      </div>
                  </div>
                  <div className="column is-5">
                      <figure className="image">
                          <img src={DISC} alt="Description" id="home-illustration"></img>
                      </figure>
                  </div>
                </div>
            </div>
          </div>
          </>
        )
    }
}

export default withRouter(PersonalityTestList);