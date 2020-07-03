import React, { Component } from "react";
import '../styles/hero.css'

class Hero extends Component {

    render() {

        return(
        <section className="hero is-primary is-small">
        <div className="hero-body">
        <div className={`container heroContainer ${this.props.title}`}>
            {/* <img src={ require(`../images/${this.props.img}`) } className="heroImage"></img> */}
            <section className="heroTitle">
            <h1 className="title">{this.props.title}  |</h1>
            <h2 className="subtitle">&nbsp;&nbsp;{this.props.subtitle}</h2>
            </section>
        </div>
        </div>
        </section>
    )}
}

export default Hero;