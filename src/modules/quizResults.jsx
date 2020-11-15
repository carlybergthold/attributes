import React  from 'react';
import { withRouter, Link } from "react-router-dom"
import fire from '../config/fire'
import '../styles/testScores.css'
import attArray from '../data/attributeArray'
import Face1 from "../assets/img/illustrations/faces/1.png";
import Face2 from "../assets/img/illustrations/faces/2.png";
import Face3 from "../assets/img/illustrations/faces/3.png";

class QuizResults extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            acceptScore: 0,
            rejectScore: 0,
            reflectScore: 0,
            salvationScore: 0,
            topReflections: [],
            bottomReflections: []
        }
      }

      componentDidMount() {
        window.scrollTo(0, 0);
      }

      getUserData = () => {
        let ref = fire.database().ref(`/scores/anonymous`);
        ref.on('value', snapshot => {
          const state = snapshot.val();
          this.setState({acceptScore: this.state.acceptScore,
                         rejectScore: this.state.rejectScore,
                         reflectScore: this.state.reflectScore,
                         salvationScore: this.state.salvationScore});
        });

        let top3 = fire.database().ref(`/userAttributes/anonymous`)
                                  .orderByChild('reflect').limitToLast(3);

        let bottom3 = fire.database().ref(`/userAttributes/anonymous`)
                                     .orderByChild('reflect').limitToFirst(3);

        top3.on('value', snap => {
          let foo = []
          snap.forEach(att => {
              foo.push(att.key)
          });
          this.setState({ topReflections: foo})
        });

        bottom3.on('value', snap => {
          let foo = []
          snap.forEach(att => {
              foo.push(att.key)
          });
          this.setState({ bottomReflections: foo})
        });
    }

    componentDidMount() {
        this.getUserData();
    }

    getDescription = (attribute) => {
      console.log(attribute)
      if (attribute == undefined) return;
      const att = attArray.find(x => x.attributeName == attribute);
      return att != undefined ? <p>{att.description}</p> : ""
    }

  render() {
    return(
        <>
        {/* <section className="section is-medium has-background-image" style={{backgroundImage: `url(https://source.unsplash.com/g30P1zcOzXo/1600x900)`}} data-color="#4FC1EA" data-color-opacity=".6">
            <div className="overlay"></div> */}
        <section className="section has-background-primary">

        <div className='container'>
        <div className="title-wrapper has-text-centered">
          <h2 className="title is-2 is-spaced light-text">Here are your top three attributes.</h2>
          <h3 className="subtitle is-5 light-text">some description.......</h3>
        </div>

        <div className="content-wrapper homepage-personality">
          <div className="columns is-vcentered">
              <div className="column is-4">
                  <figure className="testimonial">
                      <blockquote>
                        {this.getDescription(this.state.topReflections[0])}
                      </blockquote>
                      <div className="author">
                          <img src={Face1} alt=""></img>
                          <h5><Link to={`/attributes/${this.state.topReflections[0]}`} className="link">{this.state.topReflections[0]}</Link></h5>
                      </div>
                  </figure>
              </div>
              <div className="column is-4">
                  <figure className="testimonial">
                    <blockquote>
                        {this.getDescription(this.state.topReflections[1])}
                      </blockquote>
                      <div className="author">
                          <img src={Face2} alt=""></img>
                          <h5><Link to={`/attributes/${this.state.topReflections[1]}`} className="link">{this.state.topReflections[1]}</Link></h5>
                      </div>
                  </figure>
              </div>
              <div className="column is-4">
                  <figure className="testimonial">
                    <blockquote>
                        {this.getDescription(this.state.topReflections[2])}
                      </blockquote>
                      <div className="author">
                          <img src={Face3} alt=""></img>
                          <h5><Link to={`/attributes/${this.state.topReflections[2]}`} className="link">{this.state.topReflections[2]}</Link></h5>
                      </div>
                  </figure>
              </div>
          </div>
      </div>

        {/* <section className="section">
          <div className="container">
            <h2 className="subtitle">These are your top three attributes.</h2>

            <div className="tile is-ancestor">
              <div className="tile is-vertical is-12">
                <div className="tile">
                  <div className="tile is-parent">
                    <article className="tile is-child notification">
                      <section className="tile-head">
                        <p className="title">1. <Link to={`/attributes/${this.state.topReflections[0]}`}>{this.state.topReflections[0]}</Link>
                      </p>
                      </section>
                      <p className="tile-desc">
                      {this.getDescription(this.state.topReflections[0])}
                      </p>
                    </article>
                  </div>
                  <div className="tile is-parent is-vertical">
                    <article className="tile is-child notification">
                    <section className="tile-head">
                      <p className="title">2. <Link to={`/attributes/${this.state.topReflections[1]}`}>{this.state.topReflections[1]}</Link>
                      </p>
                      </section>
                      <p className="tile-desc">
                      {this.getDescription(this.state.topReflections[1])}
                      </p>
                      </article>
                    <article class="tile is-child notification">
                    <section className="tile-head">
                      <p className="title">3. <Link to={`/attributes/${this.state.topReflections[2]}`}>{this.state.topReflections[2]}</Link>
                      </p>
                      </section>
                      <p className="tile-desc">
                      {this.getDescription(this.state.topReflections[2])}
                      </p>
                      </article>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="subtitle bottom3subtitle">These are your bottom three attributes.</h2>
            <div className="tile is-ancestor">
              <div className="tile is-vertical is-12">
                <div className="tile">
                  <div className="tile is-parent">
                    <article className="tile is-child notification">
                      <p className="title tile-head">1. <Link to={`/attributes/${this.state.bottomReflections[0]}`}>{this.state.bottomReflections[0]}</Link>
                      </p>
                      <p className="tile-desc">
                      {this.getDescription(this.state.bottomReflections[0])}
                      </p>
                    </article>
                  </div>
                  <div className="tile is-parent is-vertical">
                    <article className="tile is-child notification">
                      <p className="title tile-head">2. <Link to={`/attributes/${this.state.bottomReflections[1]}`}>{this.state.bottomReflections[1]}</Link>
                      </p>
                      <p className="tile-desc">
                      {this.getDescription(this.state.bottomReflections[1])}
                      </p>
                    </article>
                    <article class="tile is-child notification">
                      <p className="title tile-head">3. <Link to={`/attributes/${this.state.bottomReflections[2]}`}>{this.state.bottomReflections[2]}</Link>
                      </p>
                      <p className="tile-desc">
                      {this.getDescription(this.state.bottomReflections[2])}
                      </p>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        </div>
        </section>
        </>
    )
  }
}

export default withRouter(QuizResults);