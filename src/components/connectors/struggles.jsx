import React, { Component } from "react";
import Grouping from '../connectors/grouping'
import '../../styles/connectors.css'

class Struggles extends Component {

    componentDidMount() {
        document.querySelector(".navbar").scrollIntoView();
      }

    render() {
        return(
            <>
            <section className="hero">
            <div className="hero-body">
                <div className={`container heroContainer`}>
                    <section className="heroTitle">
                        <h1 className="title light-text" id="heroTitle">What are you struggling with the most today?</h1>
                    </section>
                </div>
            </div>
        </section>
            <section className="has-text-centered grouping-container">
                <Grouping connector="struggle" />
            </section>
            </>
        )
    }
}

export default Struggles;