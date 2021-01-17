import React, { Component } from "react";
import '../../styles/connectors.css';
import GroupingDetail from './groupingDetail';
import AngerSVG from "../../images/explore/emotion/anger.svg";
import FearSVG from "../../images/explore/emotion/fear.svg";
import PleasureSVG from "../../images/explore/emotion/pleasure.svg";
import SadnessSVG from "../../images/explore/emotion/sadness.svg";

class Group extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentGroupIndex: 100,
            emotion: [
                { id: 1, name: "Pleased", image: PleasureSVG},
                { id: 2, name: "Sad", image: SadnessSVG},
                { id: 3, name: "Angry", image: AngerSVG},
                { id: 4, name: "Afraid", image: FearSVG}
            ],
            fear: [
                { id: 1, name: "Being Shamed", image: PleasureSVG},
                { id: 2, name: "Losing Control", image: SadnessSVG},
                { id: 3, name: "Being Rejected", image: AngerSVG},
                { id: 4, name: "Real Troubles", image: FearSVG}
            ],
            struggle: [
                { id: 1, name: "Spiritual", image: PleasureSVG},
                { id: 2, name: "Physical", image: SadnessSVG},
                { id: 3, name: "Mental", image: AngerSVG},
                { id: 4, name: "Social", image: FearSVG}
            ]
        };
    }

    updateCurrentGroup = (group) => {
        this.setState({ currentGroupIndex: group },
            process.nextTick(() => {
                this.scroll()
              })
        )
    }

    getGroupId(index) {
        if (index > 3) return;

        if (this.props.connector === "emotion") {
            return this.state.emotion[index].id;
        } else if (this.props.connector === "fear") {
            return this.state.fear[index].id;
        } else if (this.props.connector === "struggle") {
            return this.state.struggle[index].id;
        } else return null;
    }

    getGroupName(index) {
        if (index > 3) return;

        if (this.props.connector === "emotion") {
            return this.state.emotion[index].name;
        } else if (this.props.connector === "fear") {
            return this.state.fear[index].name;
        } else if (this.props.connector === "struggle") {
            return this.state.struggle[index].name;
        } else return null;
    }

    getGroupDescription(group) {
        if (this.props.connector === "emotion" && group === 0) {
            return "Great! Since you are in such a good mood, will you pick from one of these more specific choices?"
        }
        if (this.props.connector === "emotion" && group === 1) {
            return "So sorry to hear.  Can you help clarify by selecting one of these options?"
        }
        if (this.props.connector === "emotion" && group === 2) {
            return "It's probably understandable.  Pick the best option."
        }
        if (this.props.connector === "emotion" && group === 3) {
            return "There sure are lots of fearful things out there.  Will you pick the one which is closest?"
        }

        if (this.props.connector === "fear" && group === 0) {
            return "Shame comes from lies I tell myself about who I am.  Pick the item that you have been telling yourself a lot recently."
        }
        if (this.props.connector === "fear" && group === 1) {
            return "Losing control can easily lead to a life-changing wreck.  Select which control you most fear losing."
        }
        if (this.props.connector === "fear" && group === 2) {
            return "Our greatest need is love and rejection unfortunately comes in so many forms.  Which of these may you be fearing?"
        }
        if (this.props.connector === "fear" && group === 3) {
            return "The worst fears can be these which threaten how, or even whether, we live.  Pick the fear that comes closest to your concern today."
        }

        if (this.props.connector === "struggle" && group === 0) {
            return "Although the gospel is simple, it does not eliminate all struggles.  Which of these is yours?"
        }
        if (this.props.connector === "struggle" && group === 1) {
            return "We live in a world with many and often relentless demands.  Pick which physical demand is taxing you the most right now."
        }
        if (this.props.connector === "struggle" && group === 2) {
            return "Our brains are a gift from God, but our thoughts can really hurt.  Which thoughts are you struggling with the most today?"
        }
        if (this.props.connector === "struggle" && group === 3) {
            return "We were made to relate to other people, but that doesn’t make it easy.  Which of these comes closest to your biggest concern?"
        }
    }

    scroll() {
        document.querySelector(".grouping-detail").scrollIntoView({
            behavior: 'smooth'
        })
    }

    render() {
        return(
            <>
                <div onClick={() => this.updateCurrentGroup(100)} className={this.state.currentGroupIndex === 100 ? "hidden" : ""}>Back to All</div>
                <div className="connectorContainer">
            {
                this.state.struggle.map((x, index) =>
                    <div
                        key={x.name}
                        className={`card connector-card ${this.state.currentGroupIndex === 100 || this.state.currentGroupIndex === index ? "" : "hidden"}`}
                        onClick={() => this.updateCurrentGroup(index)}
                    >
                        <div className="card-content">
                            <div className="media">
                                {/* <div className="media-left">
                                    <figure className="image is-48x48">
                                        <img src={PleasureSVG} alt="pleasure"></img>
                                    </figure>
                                </div> */}
                                <div className="media-content">
                                    <p className="title is-4">{this.getGroupName(index)}</p>
                                </div>
                            </div>
                            <div className={`content grouping-content ${this.state.currentGroupIndex === index ? "" : "hidden"}`} onClick={() => this.updateCurrentGroup(index)}>
                                {this.getGroupDescription(index)}
                            </div>
                        </div>
                    </div>
                )
            }
            </div>

            <GroupingDetail connector={this.props.connector} groupId={this.getGroupId(this.state.currentGroupIndex)}></GroupingDetail>
        </>
        )
    }
}

export default Group;