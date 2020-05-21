import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom"
import fearArray from '../../data/fearArray'
import girl from '../../images/girl.png'
import Hero from '../hero'


class Fears extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return(
            <>
            <div className="page">
            <Hero title="Fear" subtitle="Fears" img="girl.png" />
                <div className="section">
                    <div className="container">
                        <section className="enneagramContainer">
                        {
                            fearArray.map(f =>
                            <div className="card">
                            <div className="card-image ennea-Img">
                                <figure className="image is-4by3">
                                <img src={girl} alt="Placeholder image" className="personalityIcon"></img>
                                </figure>
                            </div>
                            <div className="card-content">
                                <div className="media">
                                <div className="media-content">
                                    <p className="title is-4">{f.fearArray}</p>
                                </div>
                                </div>
                                <div className="content">
                                {f.fearName}
                                <br></br>
                                <br></br>
                                <span>I am: </span>
                                <Link to={`/attributes/${f.attributeName}#fear`}>{f.attributeName}</Link>
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

export default Fears;