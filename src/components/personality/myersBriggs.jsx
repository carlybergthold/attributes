import React, { Component } from "react";
import myersBriggsArray from '../../data/myersBriggsArray'
import "../../styles/personality.css";
import MyersBriggsImg from "../../images/personality/myersBriggs.svg";
import BasePersonality from "./basePersonality";

class MyersBriggs extends Component {

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
                                    <img src={MyersBriggsImg} alt="Myers-Briggs" id="myers-briggs-illustration" style={{width: "10rem"}}></img>
                                    <h1 className="title light-text">Myers-Briggs</h1>
                                </div>
                                <div className="flex-2">
                                    <p>The Myers-Briggs Personality Type Indicator is a self-report inventory designed to identify a person's personality type, strengths, and preferences. Today, the MBTI inventory is one of the most widely used psychological instruments in the world.</p>
                                    <div className="jump-to-container">JUMP TO:
                                        <span className="tag">
                                            <a href="#ISTJ">ISTJ</a>
                                        </span>
                                        <span className="tag">
                                            <a href="#ISTP">ISTP</a>
                                        </span>
                                        <span className="tag">
                                            <a href="#ISFJ">ISFJ</a>
                                        </span>
                                        <span className="tag">
                                            <a href="#ISFP">ISFP</a>
                                        </span>
                                        <span className="tag">
                                            <a href="#INTJ">INTJ</a>
                                        </span>
                                        <span className="tag">
                                            <a href="#INTP">INTP</a>
                                        </span>
                                        <span className="tag">
                                            <a href="#ESTJ">ESTJ</a>
                                        </span>
                                        <span className="tag">
                                            <a href="#ESTP">ESTP</a>
                                        </span>
                                        <span className="tag">
                                            <a href="#ESFJ">ESFJ</a>
                                        </span>
                                        <span className="tag">
                                            <a href="#ESFP">ESFP</a>
                                        </span>
                                        <span className="tag">
                                            <a href="#ENTJ">ENTJ</a>
                                        </span>
                                        <span className="tag">
                                            <a href="#ENTP">ENTP</a>
                                        </span>
                                        <span className="tag">
                                            <a href="#INFJ">INFJ</a>
                                        </span>
                                        <span className="tag">
                                            <a href="#INFP">INFP</a>
                                        </span>
                                        <span className="tag">
                                            <a href="#ENFJ">ENFJ</a>
                                        </span>
                                        <span className="tag">
                                            <a href="#ENFP">ENFP</a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                </section>
                <div className="display-flex">
                    {
                    myersBriggsArray.map((m, index) =>
                        <BasePersonality
                            {...m}
                            key={m.type}
                            img={MyersBriggsImg}
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

export default MyersBriggs;