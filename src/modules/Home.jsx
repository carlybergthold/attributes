import React from 'react';
import { withRouter } from "react-router-dom"
import '../styles/home.css'


class Home extends React.Component {

  render() {
    return(
       <body className="homepage">
        <section className="section homepage-welcome">
          <div className="container">
            <h1 className="title">Welcome</h1>
            <h2 className="subtitle">
              Hello there, this is who we are and stuff.
            </h2>
          </div>
        </section>
        <section className="section homepage-quiz">
          <div className="container">
            <h1 className="title">Take the quiz!</h1>
            <h2 className="subtitle">
              Have you ever wondered how you're like God? lol. Take the quiz and find out for yourself.
            </h2>
            <button className="button" onClick={() => this.props.history.push("/quiz")}>
              Take the Quiz</button>
          </div>
        </section>
        <section className="section homepace-personality">
          <div className="container">
            <h1 className="title">Expore the attributes thru personality</h1>
            <h2 className="subtitle">
               Ever taken the Enneagram or Meyers Briggs? 
            </h2>
          </div>
        </section>
        <section className="section homepage-movies">
          <div className="container">
            <h1 className="title">Expore the attributes thru movies...</h1>
            <h2 className="subtitle">
              A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
            </h2>
          </div>
        </section>
        </body>
    )
  }
}

export default withRouter(Home);

