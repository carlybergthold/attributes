import React, { Component } from "react";
import struggleArray from '../../data/struggleArray'
import Media from '../../components/media'
import Hero from '../hero'
import '../../styles/connectors.css'

class Struggles extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return(
            <>
            <div className="page">
            <Hero title="Struggle" subtitle="struggle" img="girl.png" />
                <div className="section">
                    <div className="container">
                        <section className="connectorContainer">
                        {
                            struggleArray.map(d =>
                                <Media title={d.struggleName} description={d.description} attribute={d.attributeName} img="girl.png" className="personalityMedia" />
                            )
                        }
                        </section>
                    </div>
                </div>
            </div>
        </>
        )
    }
}

export default Struggles;