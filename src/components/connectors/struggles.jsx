import React, { Component } from "react";
import Grouping from '../connectors/grouping'
import '../../styles/connectors.css'
import StrugglesIcon from "../../images/connectors/struggle.svg";

class Struggles extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return(
            <>
            <section className="hero">
            <div className="hero-body">
                <div className={`container heroContainer`}>
                <img src={StrugglesIcon} alt="Struggles"></img>

                    <section className="heroTitle">
                        <h1 className="title light-text" id="heroTitle">What are you struggling with the most today?</h1>
                    </section>
                </div>
            </div>
        </section>
            <section className="has-text-centered">
                <Grouping connector="struggle" />
            </section>
            </>
        )
    }
}

export default Struggles;