import React, { Component } from "react";
import Hero from '../hero'
import Grouping from '../connectors/grouping'
import '../../styles/connectors.css'


class Fears extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return(
            <>
            <Hero title="Fears" />
                <section className="has-text-centered">
                    <h1 className="title is-1 is-bold is-spaced">What are you afraid of?</h1>
                    <Grouping connector="fear"/>
                </section>
            </>
        )
    }
}

export default Fears;
