import React, { Component } from "react";
import { Link } from "react-router-dom"
import styleMethods from "../../methods/styleMethods";
import "../../styles/personality.css";

class BasePersonality extends Component {

    getComponent() {
        if (this.props.imagePosition === "left") {
            return (
            <section className="section has-background-primary" id={this.props.type}>
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-vcentered">
                            <div className="column is-5">
                                <figure className="image">
                                {
                                    styleMethods.getIcon(this.props.attribute, "white")
                                }
                                </figure>
                            </div>
                            <div className="column is-5 is-offset-1 landing-caption">
                                <h1 className="title is-1 is-bold is-spaced">
                                    {this.props.type}
                                </h1>
                                <h2 className="subtitle is-5 is-muted">{this.props.description}</h2>
                                <h2 className="subtitle is-5 is-muted has-text-weight-bold">{this.props.connector}</h2>
                                <Link to={`/attributes/${this.props.attribute}`}>Go to {this.props.attribute}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            )
        } else {
            return (
            <section className="section" id={this.props.type}>
                <div className="hero-body">
                <div className="container">
                    <div className="columns is-vcentered">
                        <div className="column is-5 is-offset-1 landing-caption">
                            <h1 className="title is-1 is-bold is-spaced">
                                {this.props.type}
                            </h1>
                            <h2 className="subtitle is-5 is-muted">{this.props.description}</h2>
                            <h2 className="subtitle is-5 is-muted has-text-weight-bold">{this.props.connector}</h2>
                            <Link to={`/attributes/${this.props.attribute}`}>Go to {this.props.attribute}</Link>
                        </div>
                        <div className="column is-5">
                            <figure className="image">
                            {
                                styleMethods.getIcon(this.props.attribute)
                            }
                            </figure>
                        </div>
                    </div>
                </div>
                </div>
            </section>
            )
        }
    }

    render() {
        return(
                <div className="personality-column" id={this.props.type}>
                    <h1 className="title is-1 is-bold is-spaced">
                        {this.props.type}
                    </h1>
                    <h2 className="subtitle is-5 is-muted">{this.props.description}</h2>
                    <h2 className="subtitle is-5 is-muted has-text-weight-bold">{this.props.connector}</h2>
                    <Link to={`/attributes/${this.props.attribute}`} className="personality-connector-link">
                        <div className="personality-connector-flex">

                        <span>
                        {
                            styleMethods.getIcon(this.props.attribute, styleMethods.getAttributeColor(this.props.attribute))
                        }
                        </span>
                        <span>Go to {this.props.attribute}</span>
                        </div>
                    </Link>
                </div>
        )
    }
}

export default BasePersonality;