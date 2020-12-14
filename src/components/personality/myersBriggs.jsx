import React, { Component } from "react";
import myersBriggsArray from '../../data/myersBriggsArray'
import Hero from '../hero'
import MyersBriggsImg from "../../images/personality/myersBriggs.svg";
import BasePersonality from "./basePersonality";

class MyersBriggs extends Component {

    constructor(props){
        super(props);

        this.state = {
            imagePosition: "left"
        }
      }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    leftOrRight() {
        this.state.imagePosition === "left" ? this.setState({ imagePosition: "right"}) : this.setState({ imagePosition: "left"});
        return this.state.imagePosition;
    }

    render() {
        return(
            <>
            <div className="page">
            <Hero title="Myers Briggs" subtitle="Myers Briggs" img="girl.png" />
                <div>
                    {
                    myersBriggsArray.map(m =>
                        <BasePersonality key={m.type} img={MyersBriggsImg} type={m.type} description={m.description} imagePosition={this.leftOrRight} />
                        )
                    }
                </div>
            </div>
        </>
        )
    }
}

export default MyersBriggs;