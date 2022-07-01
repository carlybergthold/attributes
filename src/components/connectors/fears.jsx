import React, { Component } from "react";
import Grouping from '../connectors/grouping'
import '../../styles/connectors.css'

class Fears extends Component {

    componentDidMount() {
        document.querySelector(".navbar").scrollIntoView();
      }

    render() {
        return(
            <>
            <section className="hero">
            <div className="hero-body">
                <div className="container heroContainer">
                    <section className="heroTitle">
                        <h1 className="title light-text" id="heroTitle">What are you afraid of?</h1>
                    </section>
                </div>
            </div>
        </section>
                <section className="has-text-centered grouping-container">
                    <Grouping connector="fear"/>
                </section>
            </>
        )
    }
}

export default Fears;
