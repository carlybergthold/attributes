import React, { Component } from "react";
import '../styles/hero.css'
import styleMethods from "../methods/styleMethods";

class Hero extends Component {

    constructor(props){
        super(props);

        this.state = {
            fill: '#fff'
        }
    }

    subtitle() {
        if (this.props.subtitle) {
            return <h2 className="subtitle light-text" id="heroSubtitle">&nbsp;&nbsp;| &nbsp;{this.props.subtitle}</h2>
        }
        return null;
    }

    render() {
        var backgroundColor = { backgroundColor: styleMethods.getAttributeColor(this.props.title) };

        return(
        <section className="hero" style={backgroundColor}>
            <div className="hero-body">
                <div className="container heroContainer">
                    {
                        styleMethods.getIcon(this.props.title, this.state.fill)
                    }
                    <section className="heroTitle">
                        <h1 className="title light-text" id="heroTitle">{this.props.title}</h1>
                        {this.subtitle()}
                    </section>
                </div>
            </div>
        </section>
    )}
}

export default Hero;