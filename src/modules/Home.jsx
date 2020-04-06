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
            <h2 className="subtitle">
              <ul>
                <li>Through your personality</li>
                <li>Through your thoughts on sex</li>
                <li>Through science</li>
                <li>Through entertainment</li>
                <li>Through your fears</li>
              </ul>
            </h2>
            <button className="button is-light">
            <Link to="/attributeList">Explore the Attributes</Link>
            </button>
            <section className="atrributeImages">
            </section>
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
                  <div className="media-content att-card-title">
                    <p className="title is-4">{this.state.attribute}</p>
                  </div>
                </div>
                <div className="content att-card-desc">
                {this.state.description}
                <br></br>
                <span className="randomLink" onClick={() => this.props.history.push({
                                                            pathname: '/attributes',
                                                            state: { attribute: this.state.attribute } })}>Read More
                </span>
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

