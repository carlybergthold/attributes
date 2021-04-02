import React, { Component } from "react";
import myersBriggsArray from '../../data/myersBriggsArray'
import Hero from '../hero'
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
            <Hero title="Myers Briggs"  />
                <div>
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