import React, { Component } from "react";
import fearArray from '../../data/fearArray'
import Media from '../../components/media'
import Hero from '../hero'
import '../../styles/connectors.css'



class Fears extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return(
            <>
            <div className="page">
            <Hero title="Fear" subtitle="Fears" img="girl.png" />
                <div className="section">
                    <div className="container">
                        <section className="connectorContainer">
                        {
                            fearArray.map(d =>
                                <Media title={d.fearName} description={d.description} attribute={d.attributeName} img="girl.png" className="personalityMedia" />
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

export default Fears;