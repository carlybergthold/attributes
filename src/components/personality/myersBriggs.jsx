import React, { Component } from "react";
import myersBriggsArray from '../../data/myersBriggsArray'
import girl from '../../images/girl.png'

class MyersBriggs extends Component {

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
                <h1 className="title">Myers Briggs</h1>
            </section>
                <div className="section">
                    <div className="myersBriggsContainer">
                    {
                    myersBriggsArray.map(m =>
                    <div className="card">
                    <div className="card-image ennea-Img">
                        <figure className="image is-4by3">
                        <img src={girl} alt="Placeholder image" className="personalityIcon"></img>
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="media">
                        <div className="media-content">
                            <p className="title is-4">{m.type}</p>
                        </div>
                        </div>
                        <div className="content">
                        {m.description}
                        <br></br>
                        <span className="likeLink" onClick={() => this.props.history.push({
                                                            pathname: '/personalityDetail',
                                                            state: { test: 'myersBriggs', personality: m.type } })}>Read More
                        </span>
                        </div>
                    </div>
                    </div>
                    )
                    }
                    </div>
                </div>
            </div>
        </>
        )
    }
}

export default MyersBriggs;