import React, { Component } from "react";
import Grouping from './grouping'
import '../../styles/connectors.css'
import LongingIcon from "../../images/connectors/longing.svg";

class Emotions extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return(
        <>
        <section className="hero">
            <div className="hero-body">
                <div className={`container heroContainer`}>
                <img class="longingIcon" src={LongingIcon} alt="Struggles"></img>
                    <section className="heroTitle">
                        <h1 className="title light-text" id="heroTitle">What do you long for the most?</h1>
                    </section>
                </div>
            </div>
        </section>
        <section className="has-text-centered">
            <Grouping connector="basicNeeds"/>
        </section>
        </>
        )
    }
}

export default Emotions;