import React, { Component } from "react";
import Grouping from '../connectors/grouping'
import '../../styles/connectors.css'
import EmotionIcon from "../../images/connectors/emotion.svg";

class Emotions extends Component {

    componentDidMount() {
        document.querySelector(".navbar").scrollIntoView();
      }

    render() {
        return(
        <>
        <section className="hero">
            <div className="hero-body">
                <div className={`container heroContainer`}>
                {/* <img src={EmotionIcon} alt="Struggles"></img> */}
                    <section className="heroTitle">
                        <h1 className="title light-text" id="heroTitle">How are you feeling today?</h1>
                    </section>
                </div>
            </div>
        </section>
        <section className="has-text-centered grouping-container">
            <Grouping connector="emotion"/>
        </section>
        </>
        )
    }
}

export default Emotions;