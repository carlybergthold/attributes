import React, { Component } from "react";
import enneagramArray from '../../data/enneagramArray'
import Hero from '../hero'
import Media from '../../components/media'


class Enneagram extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return(
            <>
            <div className="page">
            <Hero title="Enneagram" subtitle="Enneagram" img="girl.png"/>
                <div className="section">
                    <div className="container">
                        <section className="personalityContainer">
                        {
                            enneagramArray.map(e =>
                                <Media title={e.type} description={e.description} img="girl.png" className="personalityMedia" />
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

export default Enneagram;