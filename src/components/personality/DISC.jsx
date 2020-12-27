import React, { Component } from "react";
import discArray from '../../data/discArray'
import Hero from '../hero'
import DISCimg from "../../images/personality/disc.svg";
import BasePersonality from "./basePersonality";

class DISC extends Component {

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
                <Hero title="DISC" subtitle="DISC" img="girl.png" />
                <div>
                    {
                        discArray.map(d =>
                            <BasePersonality key={d.type} img={DISCimg} type={d.type} description={d.description} imagePosition={this.leftOrRight} />
                        )
                    }
                    </div>
            </div>
        </>
        )
    }
}

export default DISC;