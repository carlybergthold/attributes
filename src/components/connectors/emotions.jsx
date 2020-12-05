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
            <div className="page">
            <Hero title="Emotions" subtitle="Emotions" />
                <div className="section">
                    <div className="container">
                        <h1>What are you feeling today?</h1>
                        <Grouping connector="emotion"/>
                    </div>
                </div>
            </div>
        </>
        )
    }
}

export default Emotions;