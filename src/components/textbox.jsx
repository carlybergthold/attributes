import React, { Component } from "react";

class Textbox extends Component {

    render() {

        var backgroundColor = {
            backgroundColor: `var(--${this.props.color})`
        };

        return(
       <section className="section">
            <div className="container" style={backgroundColor}>
                <img src={ require(`../images/${this.props.icon}`) } className="heroImage"></img>
                <div className="notification is-radiusless font-md is-uppercase">{this.props.text}
                </div>
            </div>
        </section>
        )
    }
}

export default Textbox;