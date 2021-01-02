import React, { Component } from "react";
import enneagramArray from '../../data/enneagramArray'
import Hero from '../hero'
import EnneagramImg from "../../images/personality/enneagram.svg";
import BasePersonality from "./basePersonality";

class Enneagram extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return(
            <>
            <div className="page">
            <Hero title="Enneagram" img="girl.png"/>
                <div>
                        {
                            enneagramArray.map((e, index) =>
                                <BasePersonality
                                    {...e}
                                    key={e.type}
                                    img={EnneagramImg}
                                    imagePosition={index % 2 === 1 ? "left" : "right"}
                                />
                            )
                        }
                    </div>
            </div>
        </>
        )
    }
}

export default Enneagram;