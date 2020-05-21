import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom"
import emotionArray from '../../data/emotionArray'
import girl from '../../images/girl.png'
import Hero from '../hero'


class Emotions extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return(
            <>
            <div className="page">
            <Hero title="Emotions" subtitle="Emotions" img="girl.png" />
                <div className="section">
                    <div className="container">
                        <section className="enneagramContainer">
                        {
                            emotionArray.map(e =>
                            <div className="card">
                            <div className="card-image ennea-Img">
                                <figure className="image is-4by3">
                                <img src={girl} alt="Placeholder image" className="personalityIcon"></img>
                                </figure>
                            </div>
                            <div className="card-content">
                                <div className="media">
                                <div className="media-content">
                                    <p className="title is-4">{e.emotionName}</p>
                                </div>
                                </div>
                                <div className="content">
                                {e.emotionName}
                                <br></br>
                                <br></br>
                                <span>I am: </span>
                                <Link to={`/attributes/${e.attributeName}#emotion`}>{e.attributeName}</Link>
                                </div>
                            </div>
                            </div>
                            )
                        }
                        </section>
                    </div>
                </div>
            </div>
        </>
        )
    }
}

export default Emotions;