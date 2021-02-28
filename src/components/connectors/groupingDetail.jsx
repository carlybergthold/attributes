import React, { Component } from "react";
import { Link } from "react-router-dom"
import emotionArray from '../../data/emotionArray';
import fearArray from '../../data/fearArray';
import struggleArray from '../../data/struggleArray';

class GroupingDetail extends Component {

    //need to update icons for fear and struggles

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            groupClicked: null,
            attribute: ""
        };
    }

    componentDidUpdate(prevProps) {
        if (this.props.group !== prevProps.group) {
            this.setState({ attribute: "" })
        }
    }

    getArray = () => {
        console.log(this.props.groupId)
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

    handleClick(name, attribute) {
        this.setState({ groupClicked: name, attribute: attribute },
            process.nextTick(() => {
                document.querySelector("#groupConnector").scrollIntoView({
                    behavior: 'smooth'
                })
            })
        )
    }

    render() {
        return(
            <>
            <div className="connectorContainer has-background-primary grouping-detail">
                {
                    this.getArray()
                    .filter(x => x.groupId === this.props.groupId)
                    .map(group =>
                        <div
                            key={group.description}
                            className="card"
                            onClick={() => this.handleClick(group.name, group.attributeName)}
                        >
                            <div className="card-content">
                                <div className="content">
                                    <p className="subtitle is-6">{group.name}</p>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
            <section className="connectorContainer" id="groupConnector">
                <div className={`card ${this.state.attribute ? "" : "hidden"}`}>
                    <div className="card-content">
                        <p className="title is-4 is-capitalized">{this.state.attribute}</p>
                        <div className="content card-desc">
                            {this.getConnector()}
                        </div>
                    </div>
                    <footer className="card-footer">
                        <span className="card-footer-item">
                            <Link to={`/attributes/${this.state.attribute}`} className="has-text-primary">Go to Attribute</Link>
                        </span>
                    </footer>
                </div>
            </section>
        </>
        )
    }
}

export default GroupingDetail;