import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom"
import '../styles/personality.css'
import girl from '../images/girl.png'
import attrray from '../data/attributeArray'

class AttributeList extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

      render() {
          return(
            <div className='page'>
              <section id="header">
                <h1 className="title">All Attributes</h1>
              </section>
              <body className="personalityPage">
              <section className="section">
              <div className="container">
                <section className="enneagramContainer">
                  {
                    attrray.map(a =>
                      <div className="card">
                      <div className="card-image ennea-Img">
                        <figure className="image is-4by3">
                          <img src={girl} alt="Placeholder image" className="personalityIcon"></img>
                        </figure>
                      </div>
                      <div className="card-content">
                        <div className="media">
                          <div className="media-content">
                            <p className="title is-4">{a.attributeName}</p>
                          </div>
                        </div>
                        <div className="content">
                          {a.description}
                          <br></br>
                          <span className="likeLink" onClick={() => this.props.history.push({
                            pathname: '/attributes',
                            state: { attribute: a.attributeName } })}>Explore
                          </span>
                        </div>
                      </div>
                    </div>
                    )
                  }
                </section>
              </div>
              </section>
              </body>
            </div>
          )
      }

}

export default withRouter(AttributeList);