import React, { Component } from "react";
import Grouping from './grouping'
import '../../styles/connectors.css'
import LongingIcon from "../../images/connectors/longing.svg";

class Emotions extends Component {

    componentDidMount() {
        document.querySelector(".navbar").scrollIntoView();
    }

    render() {
        return(
        <>
        <section className="hero">
            <div className="hero-body">
                <div className="container basic-need-container is-hidden-mobile">
                <img className="longingIcon" src={LongingIcon} alt="Longing"></img>
                    <section className="heroTitle">
                        <h1 className="subtitle light-text" id="heroTitle">Being a Christ follower immediately brings us all the Security we need to live confidently, the Significance we need to live purposefully, and the Acceptance we need to combat all rejection. Choose the category you need most today.</h1>
                    </section>
                </div>
                <div className="container heroContainer is-hidden-tablet">
                    <img className="longingIcon" src={LongingIcon} alt="Longing"></img>
                    <section className="heroTitle">
                        <h1 className="subtitle light-text" id="heroTitle">Being a Christ follower immediately brings us all the Security we need to live confidently, the Significance we need to live purposefully, and the Acceptance we need to combat all rejection. Choose the category you need most today.</h1>
                    </section>
                </div>
            </div>
        </section>
        <section className="has-text-centered grouping-container">
            <Grouping connector="basicNeeds"/>
        </section>
        </>
        )
    }
}

export default Emotions;