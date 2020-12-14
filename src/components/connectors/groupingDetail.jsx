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
                                <div className="media">
                                    <div className="media-content" onClick={() => this.setState({ groupClicked: group.name, attribute: group.attributeName })}>
                                        <p className="subtitle is-6">{group.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
            <section className="connectorContainer">
                <div className={`card ${this.props.group && this.state.groupClicked ? "" : "hidden"}`}>
                    <div className="card-content">
                        <div className="media">
                            <div className="media-content">
                                <p className="subtitle is-6">{this.state.attribute}</p>
                            </div>
                        </div>
                    </div>
                    <div className="content card-desc">
                        How this attribute matches with this emotion/fear/struggle...
                    </div>
                    <div>
                    <button className="button is-text" type="submit">
                        <Link to={`/attributes/${this.state.attribute}`}>Go to Attribute</Link>
                    </button>
                    </div>
                </div>
            </section>
        </>
        )
    }
}

export default GroupingDetail;