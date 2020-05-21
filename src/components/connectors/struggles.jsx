import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom"
import struggleArray from '../../data/struggleArray'
import girl from '../../images/girl.png'
import Hero from '../hero'


class Struggles extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return(
            <>
            <div className="page">
            <Hero title="Struggle" subtitle="struggle" img="girl.png" />
                <div className="section">
                    <div className="container">
                        <section className="enneagramContainer">
                        {
                            struggleArray.map(s =>
                            <div className="card">
                            <div className="card-image ennea-Img">
                                <figure className="image is-4by3">
                                <img src={girl} alt="Placeholder image" className="personalityIcon"></img>
                                </figure>
                            </div>
                            <div className="card-content">
                                <div className="media">
                                <div className="media-content">
                                    <p className="title is-4">{s.struggleName}</p>
                                </div>
                                </div>
                                <div className="content">
                                {s.struggleName}
                                <br></br>
                                <br></br>
                                <span>I am: </span>
                                <Link to={`/attributes/${s.struggleName}#struggle`}>{s.attributeName}</Link>
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

export default Struggles;