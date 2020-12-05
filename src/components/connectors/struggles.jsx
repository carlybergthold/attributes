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
            <div className="page">
            <Hero title="Struggles" subtitle="Struggles" />
                <div className="section">
                    <div className="container">
                        <h1>In what are are you struggling today?</h1>
                        <Grouping connector="struggle" />
                    </div>
                </div>
            </div>
        </>
        )
    }
}

export default Struggles;