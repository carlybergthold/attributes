import React, { Component } from "react";
import discArray from '../../data/discArray'
import DISCimg from "../../images/personality/disc.svg";
import BasePersonality from "./basePersonality";
import "../../styles/personality.css";

class DISC extends Component {

    componentDidMount() {
        document.querySelector(".navbar").scrollIntoView();
      }

    render() {
        return(
            <>
        {/* mobile */}
        <section className="hero is-hidden-tablet">
            <div className="hero-body-mobile">
                <div className="container heroContainer-mobile">
                    <div className="heroTitle-mobile">
                        <h1 className="title light-text" id="heroTitle">DISC</h1>
                    </div>
                    <div className="light-text heroSubtitle-mobile">The DiSC model provides a common language people can use to better understand themselves and those they interact with—and then use this knowledge to reduce conflict and improve working relationships.</div>
                    <img src={DISCimg} alt="disc" id="disc-illustration" style={{width: "8rem", paddingTop: "1rem"}}></img>
                </div>
            </div>
        </section>

        {/* desktop */}
        <section className="hero is-hidden-mobile">
            <div className="hero-body">
                    <div className="container display-flex">
                        <div className="flex-1">
                            <img src={DISCimg} alt="DISC" id="disc-illustration" style={{width: "10rem"}}></img>
                            <h1 className="title light-text">DISC</h1>
                        </div>
                        <div className="flex-2">
                            <p>The DiSC model provides a common language people can use to better understand themselves and those they interact with—and then use this knowledge to reduce conflict and improve working relationships.</p>
                            <div className="jump-to-container">JUMP TO:
                                <span className="tag">
                                    <a href="#Dominance">Type D</a>
                                </span>
                                <span className="tag">
                                    <a href="#Influence">Type I</a>
                                </span>
                                <span className="tag">
                                    <a href="#Steadiness">Type S</a>
                                </span>
                                <span className="tag">
                                    <a href="#Conscientiousness">Type C</a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
        </section>

                <div className="page">
                    <div className="display-flex">
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