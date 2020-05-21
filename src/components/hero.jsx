import React, { Component } from "react";

class Hero extends Component {

    render() {
        return(
        <section className="hero is-primary is-small">
        <div className="hero-body">
        <div className="container">
            <img src={ require(`../images/${this.props.img}`) } className="heroImage"></img>
            <h1 className="title">{this.props.title}</h1>
            <h2 className="subtitle">{this.props.subtitle}</h2>
        </div>
        </div>
        </section>
    )}
}

export default Hero;