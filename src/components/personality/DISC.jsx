import React, { Component } from "react";
import discArray from '../../data/discArray'
import girl from '../../images/girl.png'

class DISC extends Component {

    constructor(props){
        super(props);

        this.state = {
            username: '',
            email: '',
            password: ''
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return(
            <>
            <div className="page">
            <section id="header">
                <h1 className="title">DISC</h1>
            </section>
                <div className="section">
                    <div className="discContainer">
                    {
                    discArray.map(d =>
                    <div className="card">
                    <div className="card-image ennea-Img">
                        <figure className="image is-4by3">
                        <img src={girl} alt="Placeholder image" className="personalityIcon"></img>
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="media">
                        <div className="media-content">
                            <p className="title is-4 card-title">{d.type}</p>
                        </div>
                        </div>
                        <div className="content card-desc">
                        {d.description}
                        <br></br>
                        <span className="likeLink" onClick={() => this.props.history.push({
                                                            pathname: '/personalityDetail',
                                                            state: { test: 'disc', personality: d.type } })}>Read More
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

export default DISC;