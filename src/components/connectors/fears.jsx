import React, { Component } from "react";
import Grouping from '../connectors/grouping'
import '../../styles/connectors.css'
import FearIcon from "../../images/connectors/fear.svg";

class Fears extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return(
            <>
            <section className="hero">
            <div className="hero-body">
                <div className="container heroContainer">
                <img src={FearIcon} alt="fear"></img>

                    <section className="heroTitle">
                        <h1 className="title light-text" id="heroTitle">What are you afraid of?</h1>
                    </section>
                </div>
            </div>
        </section>
                <section className="has-text-centered">
                    <Grouping connector="fear"/>
                </section>
            </>
        )
    }
}

export default Fears;
