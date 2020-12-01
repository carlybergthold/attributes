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
            <div className="page">
            <Hero title="Fears" subtitle="Fears" />
                <div className="section">
                    <div className="container">
                        <h1>What are you afraid of?</h1>
                        <Grouping connector="fear"/>
                    </div>
                </div>
            </div>
        </>
        )
    }
}

export default Fears;