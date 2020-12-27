import React, { Component } from "react";
import { Link } from "react-router-dom"
import emotionArray from '../../data/emotionArray';
import fearArray from '../../data/fearArray';
import struggleArray from '../../data/struggleArray';

class GroupingDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            groupClicked: null,
            attribute: ""
        };
    }

    getArray = () => {
        if (this.props.connector === "emotion") {
            return emotionArray;
        } else if (this.props.connector === "fear") {
            return fearArray;
        } else {
            return struggleArray;
        }
    }

    getConnector() {
        if (this.state.attribute === "") return;
        return this.getArray().find(x => x.attributeName === this.state.attribute).description;
    }

    render() {
        return(
            <>
            <div className="connectorContainer has-background-primary">
                {
                    this.getArray()
                    .filter(x => x.group === this.props.group)
                    .map(group =>
                        <div key={group.name} className="card">
                            <div className="card-content">
                                <div className="content" onClick={() => this.setState({ groupClicked: group.name, attribute: group.attributeName })}>
                                    <p className="subtitle is-6">{group.description}</p>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
            <section className="connectorContainer">
                <div className={`card ${this.props.group && this.state.groupClicked ? "" : "hidden"}`}>
                    <div className="card-content">
                        <p className="title is-4 is-capitalized">{this.state.attribute}</p>
                        <div className="content card-desc">
                            {this.getConnector()}
                        </div>
                    </div>
                    <footer className="card-footer">
                        <a className="card-footer-item">
                            <Link to={`/attributes/${this.state.attribute}`} className="has-text-primary">Go to Attribute</Link>
                        </a>
                    </footer>
                </div>
            </section>
        </>
        )
    }
}

export default GroupingDetail;