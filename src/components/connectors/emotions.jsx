import React, { Component } from "react";
import Hero from '../hero'
import Grouping from '../connectors/grouping'
import '../../styles/connectors.css'

class Emotions extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return(
        <>
            <Hero title="Emotions" subtitle="Emotions" />

            <section className="has-text-centered">
                <h1 className="title is-1 is-bold is-spaced">What are you feeling today?</h1>
                <Grouping connector="emotion"/>
            </section>
        </>
        )
    }
}

export default Emotions;