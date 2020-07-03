import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom"
import '../styles/personality.css'
import attrray from '../data/attributeArray'
import Hero from '../components/hero'


class AttributeList extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

      render() {
          return(
            <div className='page'>
              <Hero title="All Attributes" subtitle="Learn More" img="girl.png"/>
              <body className="personalityPage">
              <section className="section">
              <div className="container">
                <section className="attributeListContainer">
                  {
                    attrray.map(a =>
                      <div className="card">
                      <div className="card-image ennea-Img">
                        <figure className="image is-4by3">
                          <img src={ require(`../images/attributeIcons/creative.png`) } alt="Placeholder image" className="personalityIcon"></img>
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
                            <Link to={`/attributes/${a.attributeName}`}>Explore</Link>
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