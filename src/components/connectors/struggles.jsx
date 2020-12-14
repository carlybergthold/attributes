import React, { Component } from "react";
import Hero from '../hero'
import Grouping from '../connectors/grouping'
import '../../styles/connectors.css'

class Struggles extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return(
            <>
            <Hero title="Struggles" subtitle="Struggles" />
            <section className="has-text-centered">
                <h1 className="title is-1 is-bold is-spaced">What are you struggling with the most today?</h1>
                <Grouping connector="struggle" />
            </section>
            </>
        )
    }
}

export default Struggles;