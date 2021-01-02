import React, { Component } from "react";
import discArray from '../../data/discArray'
import Hero from '../hero'
import DISCimg from "../../images/personality/disc.svg";
import BasePersonality from "./basePersonality";

class DISC extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return(
            <>
            <div className="page">
                <Hero title="DISC" img="girl.png" />
                <div>
                    {
                        discArray.map((d, index) =>
                            <BasePersonality
                                {...d}
                                key={d.type}
                                img={DISCimg}
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

export default DISC;