import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom"
import '../styles/personality.css'
import girl from '../images/girl.png'
import boy from '../images/man.png'
import PersonalityDetail from '../components/personalityDetail'
import enneagramArray from '../data/enneagramArray'

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
                <section className="enneagramContainer">
                  {
                    enneagramArray.map(e =>
                      <div className="card">
                      <div className="card-image ennea-Img">
                        <figure className="image is-4by3">
                          <img src={girl} alt="Placeholder image" className="personalityIcon"></img>
                        </figure>
                      </div>
                      <div className="card-content">
                        <div className="media">
                          <div className="media-content">
                            <p className="title is-4">{e.type}</p>
                          </div>
                        </div>
                        <div className="content">
                          {e.description}
                          <br></br>
                          <Link to="/personalityDetail" className="persLink">Read More</Link>
                                                    <a href="#achiever" rel="" id="anchor1" class="anchorLink">Link to the anchor</a>
                        </div>
                      </div>
                    </div>
                    )
                  }
                </section>
              </div>
              </section>
              <PersonalityDetail />
              </body>
            </div>
          )
      }

}

export default withRouter(Personality);