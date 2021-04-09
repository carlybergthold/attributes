import React, { Component } from "react";
import enneagramArray from '../../data/enneagramArray'
import EnneagramImg from "../../images/personality/enneagram.svg";
import BasePersonality from "./basePersonality";
import "../../styles/personality.css";

class Enneagram extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return(
            <>
            <div className="page">
                <section className="hero">
                    <div className="hero-body">
                        <div className="container display-flex">
                            <div className="flex-1">
                                <img src={EnneagramImg} alt="Enneagram" id="enneagram-illustration" style={{width: "10rem"}}></img>
                                <h1 className="title light-text">Enneagram</h1>
                            </div>
                            <div className="flex-2">
                                <p>The Enneagram is an archetypal framework that offers in-depth insight to individuals, groups and collectives. Consisting of three centres of intelligence, nine main Enneagram types, 18 wings, three subtypes and Triadic styles, the Enneagram offers a rich map to personal development from an open systems perspective. It does not box in people, but rather opens a pathway to self-discovery and greater personal awareness.</p>
                                <div className="jump-to-container">JUMP TO:
                                    <span className="tag">
                                        <a href="#1 - Reformer">Type 1</a>
                                    </span>
                                    <span className="tag">
                                        <a href="#2 - Helper">Type 2</a>
                                    </span>
                                    <span className="tag">
                                        <a href="#3 - Achiever">Type 3</a>
                                    </span>
                                    <span className="tag">
                                        <a href="#4 - Individualist">Type 4</a>
                                    </span>
                                    <span className="tag">
                                        <a href="#5 - Investigator">Type 5</a>
                                    </span>
                                    <span className="tag">
                                        <a href="#6 - Loyalist">Type 6</a>
                                    </span>
                                    <span className="tag">
                                        <a href="#7 - Enthusiast">Type 7</a>
                                    </span>
                                    <span className="tag">
                                        <a href="#8 - Challenger">Type 8</a>
                                    </span>
                                    <span className="tag">
                                        <a href="#9 - Peacemaker">Type 9</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="display-flex">
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