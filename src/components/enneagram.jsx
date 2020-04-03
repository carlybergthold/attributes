import React, { Component } from "react";
import enneagramArray from '../data/enneagramArray'
import { withRouter, Link } from "react-router-dom"
import girl from '../images/girl.png'

class Enneagram extends Component {

    constructor(props){
        super(props);

        this.state = {
            username: '',
            email: '',
            password: ''
        }
    }

    render() {
        return(
            <>
            <div className="page">
            <section id="header">
                <h1 className="title">Enneagram</h1>
            </section>
                <div className="section">
                    <div className="container">
                        <section className="enneagramContainer">
                        {
                            enneagramArray.map(e =>
                            <div className="card">
                            <div className="card-image ennea-Img">
                                <figure className="image is-4by3">
                                <img src={girl} alt="Placeholder image" className="personalityIcon"></img>
                                </figure>
                            </div>
                            <div className="card-content">
                                <div className="media">
                                <div className="media-content">
                                    <p className="title is-4">{e.type}</p>
                                </div>
                                </div>
                                <div className="content">
                                {e.description}
                                <br></br>
                                <Link to="/personalityDetail" className="persLink">Read More</Link>
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

export default Enneagram;