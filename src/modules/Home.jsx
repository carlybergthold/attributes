import React from 'react';
import { withRouter } from "react-router-dom"
import '../styles/home.css'


class Home extends React.Component {

  render() {
    return(
       <body className="homepage">
        <section className="section homepage-welcome">
          <div className="container welcome-container">
            <h1 className="title welcome-title">Welcome</h1>
            <h2 className="subtitle welcome-subtitle">
              Hello there, this is who we are and stuff.
            </h2>
            <button className="button is-primary" onClick={() => this.props.history.push("/quiz")}>
              Take the Quiz</button>
          </div>
        </section>
        <section className="section homepage-attributes">
          <div className="container">
            <h1 className="title">Expore the attributes...</h1>
            <h2 className="subtitle">
              A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
            </h2>
          </div>
        </section>
        <section className="section homepage-personality">
          <div className="container">
            <h1 className="title">Expore the attributes thru personality</h1>
            <h2 className="subtitle">
               Ever taken the Enneagram or Meyers Briggs?
            </h2>
          </div>
        </section>
        </body>
    )
  }
}

export default withRouter(Home);

