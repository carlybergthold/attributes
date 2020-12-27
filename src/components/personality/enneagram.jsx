import React, { Component } from "react";
import enneagramArray from '../../data/enneagramArray'
import Hero from '../hero'
import EnneagramImg from "../../images/personality/enneagram.svg";
import BasePersonality from "./basePersonality";

class Enneagram extends Component {

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
        console.log("bruh")
        this.state.imagePosition === "left" ? this.setState({ imagePosition: "right"}) : this.setState({ imagePosition: "left"});
        return this.state.imagePosition;
    }

    render() {
        return(
            <>
            <div className="page">
            <Hero title="Enneagram" subtitle="Enneagram" img="girl.png"/>
                <div>
                        {
                            enneagramArray.map(e =>
                                <BasePersonality key={e.type} img={EnneagramImg} type={e.type} description={e.description} imagePosition={this.leftOrRight} />
                            )
                        }
                    </div>
            </div>
        </>
        )
    }
}

export default Enneagram;