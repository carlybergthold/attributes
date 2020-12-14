import React, { Component } from "react";
import '../../styles/connectors.css';
import GroupingDetail from './groupingDetail';
import AngerSVG from "../../assets/img/icons/emotions/anger.svg";
import FearSVG from "../../assets/img/icons/emotions/fear.svg";
import PleasureSVG from "../../assets/img/icons/emotions/pleasure.svg";
import SadnessSVG from "../../assets/img/icons/emotions/sadness.svg";

class Group extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentGroupIndex: 100,
            emotion: ["pleasure", "sadness", "anger", "fear"],
            fear: ["shame", "loss of control", "rejection", "survival"],
            struggle: ["spiritual", "physical", "mental"]
        };
    }

    updateCurrentGroup = (group) => {
        this.setState({ currentGroupIndex: group });
    }

    getGroupName(index) {
        if (this.props.connector === "emotion") {
           return this.state.emotion[index]
        } else if (this.props.connector === "fear") {
            return this.state.fear[index]
        } else if (this.props.connector === "struggle") {
            return this.state.struggle[index]
        } else return null;
    }

    getGroupDescription(group) {
        if (this.props.connector === "emotion" && group === 0) {
            return "Great! Since you are in such a good mood, will you pick from one of these more specific choices?"
        }
        if (this.props.connector === "emotion" && group === 1) {
            return "There sure are lots of fearful things out there.  Will you pick the one which is closest?"
        }
        if (this.props.connector === "emotion" && group === 2) {
            return "So sorry to hear.  Can you help clarify by selecting one of these options?"
        }
        if (this.props.connector === "emotion" && group === 3) {
            return "It's probably understandable.  Pick the best option."
        }

        if (this.props.connector === "fear" && group === 0) {
            return "Great! Since you are in such a good mood, will you pick from one of these more specific choices?"
        }
        if (this.props.connector === "fear" && group === 1) {
            return "There sure are lots of fearful things out there.  Will you pick the one which is closest?"
        }
        if (this.props.connector === "fear" && group === 2) {
            return "So sorry to hear.  Can you help clarify by selecting one of these options?"
        }
        if (this.props.connector === "fear" && group === 3) {
            return "It's probably understandable.  Pick the best option."
        }

        if (this.props.connector === "struggle" && group === 0) {
            return "Great! Since you are in such a good mood, will you pick from one of these more specific choices?"
        }
        if (this.props.connector === "struggle" && group === 1) {
            return "There sure are lots of fearful things out there.  Will you pick the one which is closest?"
        }
        if (this.props.connector === "struggle" && group === 2) {
            return "So sorry to hear.  Can you help clarify by selecting one of these options?"
        }
        if (this.props.connector === "struggle" && group === 3) {
            return "It's probably understandable.  Pick the best option."
        }
    }

    render() {
        return(
            <>
            <div onClick={() => this.updateCurrentGroup(100)} className={this.state.currentGroupIndex === 100 ? "hidden" : ""}>Back to All</div>
            <div className="connectorContainer">
                <div className={`${this.state.currentGroupIndex === 100 || this.state.currentGroupIndex === 0 ? "" : "hidden"}`} onClick={() => this.updateCurrentGroup(0)}>
                    <img src={PleasureSVG} alt="pleasure"></img>
                </div>
                <div className={`${this.state.currentGroupIndex === 100 || this.state.currentGroupIndex === 1 ? "" : "hidden"}`} onClick={() => this.updateCurrentGroup(1)}>
                    <img src={SadnessSVG} alt="pleasure"></img>
                </div>
                <div className={`${this.state.currentGroupIndex === 100 || this.state.currentGroupIndex === 2 ? "" : "hidden"}`} onClick={() => this.updateCurrentGroup(2)}>
                    <img src={AngerSVG} alt="pleasure"></img>
                </div>
                <div className={`${this.state.currentGroupIndex === 100 || this.state.currentGroupIndex === 3 ? "" : "hidden"}`} onClick={() => this.updateCurrentGroup(3)}>
                    <img src={FearSVG} alt="pleasure"></img>
                </div>
                <div className={`card ${this.state.currentGroupIndex === 0 ? "" : "hidden"}`} onClick={() => this.updateCurrentGroup(0)}>
                    <div className="card-content">
                        <div className="content">
                            {this.getGroupDescription(0)}
                        </div>
                    </div>
                </div>
                <div className={`card ${this.state.currentGroupIndex === 1 ? "" : "hidden"}`} onClick={() => this.updateCurrentGroup(1)}>
                    <div className="card-content">
                        <div className="content">
                        {this.getGroupDescription(1)}
                        </div>
                    </div>
                </div>
                <div className={`card ${this.state.currentGroupIndex === 2 ? "" : "hidden"}`} onClick={() => this.updateCurrentGroup(2)}>
                    <div className="card-content">
                        <div className="content">
                        {this.getGroupDescription(2)}
                        </div>
                    </div>
                </div>
                <div className={`card ${this.state.currentGroupIndex === 3 ? "" : "hidden"}`} onClick={() => this.updateCurrentGroup(3)}>
                    <div className="card-content">
                        <div className="content">
                        {this.getGroupDescription(3)}
                        </div>
                    </div>
                </div>
            </div>

            <GroupingDetail connector={this.props.connector} group={this.getGroupName(this.state.currentGroupIndex)}></GroupingDetail>
        </>
        )
    }
}

export default Group;