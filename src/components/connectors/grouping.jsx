import React, { Component } from "react";
import '../../styles/connectors.css';
import GroupingDetail from './groupingDetail';
import Face1 from "../../assets/img/illustrations/faces/1.png";
import Face2 from "../../assets/img/illustrations/faces/2.png";
import Face3 from "../../assets/img/illustrations/faces/3.png";

class Group extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentGroup: "all",
            emotion: ["pleasure", "sadness", "fear", "anger"],
            fear: ["shame", "loss of control", "rejection", "survival"],
            struggle: ["spiritual", "physical", "mental"]
        };
    }

    updateCurrentGroup = (group) => {
        console.log("group changed to " + group)
        this.setState({ currentGroup: group });
    }

    getGroupName(index) {
        console.log(this.state.currentGroup)
        if (this.props.connector === "emotion") {
           return this.state.emotion[index]
        } else if (this.props.connector === "fear") {
            return this.state.fear[index]
        } else {
            return this.state.struggle[index]
        }
    }

    render() {
        return(
            <>
            <div className="hero-foot mb-20">
                <div className="container">
                    <div className="tabs is-centered">
                        <ul>
                            <li><a><img className="partner-logo" src={Face1}></img></a></li>
                            <li><a><img className="partner-logo" src={Face1}></img></a></li>
                            <li><a><img className="partner-logo" src={Face1}></img></a></li>
                            <li><a><img className="partner-logo" src={Face1}></img></a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <section className="connectorContainer">
                <div className="card"
                     onClick={() => this.updateCurrentGroup(this.getGroupName(0))}
                     style={{ display: this.state.currentGroup === "all" || this.props.currentGroup === this.getGroupName(0) ? "block" : "none" }}>
                    <div className="card-content">
                        <div className="media">
                            <div className="media-content">
                                <p className="title is-4">{this.getGroupName(0)}</p>
                            </div>
                        </div>
                        <div className="content">
                            Description?
                        </div>
                    </div>
                </div>

                <div className="card"
                     onClick={() => this.updateCurrentGroup(this.getGroupName(1))}
                     style={{ display: this.state.currentGroup === "all" || this.state.currentGroup === this.getGroupName(1) ? "block" : "none" }}>
                    <div className="card-content">
                        <div className="media">
                            <div className="media-content">
                                <p className="title is-4">{this.getGroupName(1)}</p>
                            </div>
                        </div>
                        <div className="content">
                        Description?
                        </div>
                    </div>
                </div>

                <div className="card"
                     onClick={() => this.updateCurrentGroup(this.getGroupName(2))}
                     style={{ display: this.state.currentGroup === "all" || this.state.currentGroup === this.getGroupName(2) ? "block" : "none" }}>
                    <div className="card-content">
                        <div className="media">
                            <div className="media-content">
                                <p className="title is-4">{this.getGroupName(2)}</p>
                            </div>
                        </div>
                        <div className="content">
                        Description?
                        </div>
                    </div>
                </div>

                <div className="card"
                     onClick={() => this.updateCurrentGroup(this.getGroupName(3))}
                     style={{ display: this.state.currentGroup === "all" || this.state.currentGroup === this.getGroupName(3) ? "block" : "none" }}>
                    <div className="card-content">
                        <div className="media">
                            <div className="media-content">
                                <p className="title is-4">{this.getGroupName(3)}</p>
                            </div>
                        </div>
                        <div className="content">
                        Description?
                        </div>
                    </div>
                </div>
            </section>
            <div onClick={() => this.updateCurrentGroup("all")} style={{ display: this.state.currentGroup === "all" ? "none" : "block" }}>Go back to beginning</div>
            <GroupingDetail connector={this.props.connector} group={this.state.currentGroup}></GroupingDetail>
        </>
        )
    }
}

export default Group;