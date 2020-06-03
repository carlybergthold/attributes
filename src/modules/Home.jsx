import React from 'react';
import { withRouter, Link } from "react-router-dom"
import '../styles/home.css'
import boy from '../images/man.png'
import attArray from '../data/attributeArray'
import PersonalityTestList from '../components/personality/personalityTestList'


class Home extends React.Component {


  constructor(props){
    super(props);

    this.state = {
        attribute: 'omniscient',
        description: 'omniscient'
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  randomize = () => {
    var randomNum = Math.floor((Math.random() * attArray.length));
    var attObj = attArray[randomNum]
    this.setState({attribute: attObj.attributeName,
                   description: attObj.description});
  }

  render() {
    return(
      <>
       <div className="homepage">
        <section className="section homepage-welcome">
          <div className="container welcome-container">
            <h1 className="title welcome-title">Who is God?</h1>
            <h2 className="subtitle welcome-subtitle">
            You're made in His image. This image is blurred, but we all have evidence of it in ourselves - take the quiz to find how your life reflects God.
            </h2>
            <button className="button is-large splash-btn" onClick={() => this.props.history.push("/quiz")}>
              Take the Quiz</button>
          </div>
        </section>

        <section className="section homepage-attributes">
          <div className="container left">
            <h1 className="title">There are many ways to relate attributes to your life.</h1>
            <br></br>

            <div className="tile is-ancestor">
              <div className="tile">
                <div className="tile">
                  <div class="tile is-parent is-vertical is-6">
                    <article class="tile is-child notification is-primary">
                      <Link to="/personality">Personality</Link>
                    </article>
                    <article class="tile is-child notification is-warning">
                      <Link to="/emotion">Emotion</Link>
                    </article>
                  </div>
                  <div class="tile is-parent is-vertical is-6">
                    <article class="tile is-child notification is-primary">
                      <Link to="/fear">Fear</Link>
                    </article>
                    <article class="tile is-child notification is-warning">
                      <Link to="/struggle">Struggle</Link>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container right">
          <div className="card card-attribute">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src={boy} alt="Placeholder image" className="personalityIcon"></img>
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content card-title">
                    <p className="title is-4">{this.state.attribute}</p>
                  </div>
                </div>
                <div className="content card-desc">
                {this.state.description}
                <br></br>
                <Link to={`/attributes/${this.state.attribute}`}>Read More</Link>
                  </div>
              </div>
            </div>
            <button className="button is-primary" onClick={this.randomize}>Get Another</button>
          </div>
        </section>
        {/* <div id="background">
          <p id="bg-text">
            {
              attArray.map(a =>
              <span className="bg-att">{a.attributeName}</span>)
            }
          </p>
	      </div> */}

        <section className="section homepage-personality">
        <h1 className="title">You are unique.</h1>
        <h2 className="subtitle">
            Personality tests are a helpful way to understand yourself and others better. Browse the personality types below to see how your results reflect God.
        </h2>
          <PersonalityTestList />
        </section>
        </div>
        </>
    )
  }
}

export default withRouter(Home);

