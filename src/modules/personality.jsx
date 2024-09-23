import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom"
import '../styles/personality.css'
import Face1 from "../assets/img/illustrations/faces/1.png";
import Face2 from "../assets/img/illustrations/faces/2.png";
import Face3 from "../assets/img/illustrations/faces/3.png";

class Personality extends Component {

  componentDidMount() {
    document.querySelector(".navbar").scrollIntoView();
  }

      render() {
          return(
            <section className="section is-medium has-background-image" style={{backgroundImage: `url(https://source.unsplash.com/g30P1zcOzXo/1600x900)`}} data-color="#4FC1EA" data-color-opacity=".6">
            <div className="overlay"></div>
            <div className="container">

                <div className="title-wrapper has-text-centered">
                    <h2 className="title is-2 light-text is-spaced">You are unique.</h2>
                    <h3 className="subtitle is-5 light-text">Browse your personality type below to see how you most strongly reflect God.</h3>
                </div>

                <div className="content-wrapper homepage-personality">
                    <div className="columns is-vcentered">
                        <div className="column is-4">
                            <figure className="testimonial">
                                <blockquote>
                                    The Enneagram describes nine types using the numbers 1-9. Link directly to an attribute of God with your number or by reading the brief descriptions first.
                                </blockquote>
                                <div className="author">
                                    <img alt="enneagram" src={Face1}></img>
                                    <h5><Link to="/enneagram" className="link">Enneagram</Link></h5>
                                </div>
                            </figure>
                        </div>
                        <div className="column is-4">
                            <figure className="testimonial">
                                <blockquote>
                                    Myers-Briggs uses a 4-letter acronym, like INFJ or ESTP, which reflects introversion or extraversion, sensing or intuition, thinking or feeling, judging or perceiving.
                                </blockquote>
                                <div className="author">
                                    <img alt="myers briggs" src={Face2}></img>
                                    <h5><Link to="/myersbriggs" className="link">Myers Briggs</Link></h5>
                                </div>
                            </figure>
                        </div>
                        <div className="column is-4">
                            <figure className="testimonial">
                                <blockquote>
                                DISC centers on four different personality traits: Dominance (D), Influence (I), Steadiness (S), and Conscientiousness (C). Pick your letter and discover God in you.
                                </blockquote>
                                <div className="author">
                                    <img alt="DISC" src={Face3}></img>
                                    <h5><Link to="/disc" className="link">DISC</Link></h5>
                                </div>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </section>  
          )
      }

}

export default withRouter(Personality);