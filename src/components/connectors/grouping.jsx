import React, { Component } from "react";
import '../../styles/connectors.css';
import GroupingDetail from './groupingDetail';
import AngerSVG from "../../images/explore/emotion/anger.svg";
import FearSVG from "../../images/explore/emotion/fear.svg";
import PleasureSVG from "../../images/explore/emotion/pleasure.svg";
import SadnessSVG from "../../images/explore/emotion/sadness.svg";

import ControlSVG from "../../images/explore/fear/control.svg";
import RejectionSVG from "../../images/explore/fear/rejection.svg";
import ShameSVG from "../../images/explore/fear/shame.svg";
import TroublesSVG from "../../images/explore/fear/troubles.svg";

import SocialSVG from "../../images/explore/struggle/social.svg";
import MentalSVG from "../../images/explore/struggle/mental.svg";
import PhysicalSVG from "../../images/explore/struggle/physical.svg";
import SpiritualSVG from "../../images/explore/struggle/spiritual.svg";

import SecurePNG from "../../images/explore/basicNeeds/secure.png";
import SignificantPNG from "../../images/explore/basicNeeds/significant.png";
import AcceptedPNG from "../../images/explore/basicNeeds/accepted.png";

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
            ],
            basicNeeds: [
                {id: 1,
                    name: "Security",
                    image: SecurePNG
                },
                {id: 2,
                    name: "Significance",
                    image: SignificantPNG
                },
                {id: 3,
                    name: "Acceptance",
                    image: AcceptedPNG
                }
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
        } else if (this.props.connector === "basicNeeds") {
            return this.state.basicNeeds[index].id;
        } else return null;
    }

    getGroupName(index) {
        if (index > 3) return;
        if (this.props.connector === "basicNeeds" && index > 2) return;

        if (this.props.connector === "emotion") {
            return this.state.emotion[index].name;
        } else if (this.props.connector === "fear") {
            return this.state.fear[index].name;
        } else if (this.props.connector === "struggle") {
            return this.state.struggle[index].name;
        } else if (this.props.connector === "basicNeeds") {
            return this.state.basicNeeds[index].name;
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

        if (this.props.connector === "basicNeeds") {
            return "Select a Specific Benefit"
        }
    }

    scroll() {
        document.querySelector(".grouping-container").scrollIntoView({
            behavior: 'smooth'
        })
    }

    getImgSource(index) {
        const groupName = this.getGroupName(index);

        if (this.props.connector === "emotion") {

            if (groupName === "Angry") {
                return AngerSVG;
            } else if (groupName === "Afraid") {
                return FearSVG;
            } else if (groupName === "Pleased") {
                return PleasureSVG;
            } else {
                return SadnessSVG;
            }

        } else if (this.props.connector === "fear") {

            if (groupName === "Losing Control") {
                return ControlSVG;
            } else if (groupName === "Being Rejected") {
                return RejectionSVG;
            } else if (groupName === "Being Shamed") {
                return ShameSVG;
            } else {
                return TroublesSVG;
            }

        } else if (this.props.connector === "struggle") {

            if (groupName === "Social") {
                return SocialSVG;
            } else if (groupName === "Mental") {
                return MentalSVG;
            } else if (groupName === "Spiritual") {
                return SpiritualSVG;
            } else {
                return PhysicalSVG;
            }
        } else { // basic needs
            if (groupName === "Security") {
                return SecurePNG;
            } else if (groupName === "Significance") {
                return SignificantPNG;
            } else {
                return AcceptedPNG;
            }
        }
    }

    render() {
        return(
            <>
                <div onClick={() => this.updateCurrentGroup(100)} className={this.state.currentGroupIndex === 100 ? "hidden" : "is-hoverable back-to-all"}>Back to All</div>
                <div className="connectorContainer">
            {
                this.state[this.props.connector].map((x, index) =>
                    <div
                        key={x.name}
                        className={`card connector-card is-hoverable ${this.state.currentGroupIndex === 100 || this.state.currentGroupIndex === index ? "" : "hidden"}`}
                        onClick={() => this.updateCurrentGroup(index)}
                    >
                        <div className="card-content">
                            <div className="media">
                                <div className="media-content">
                                    <p className="title is-4">{this.getGroupName(index)}</p>
                                </div>
                            </div>
                            <img src={this.getImgSource(index)} alt="anger" className={`media-image ${this.props.connector}`}></img>
                            <div className={`content grouping-content ${this.state.currentGroupIndex === index ? "" : "hidden"}`} onClick={() => this.updateCurrentGroup(index)}>
                                {this.getGroupDescription(index)}
                            </div>
                        </div>
                    </div>
                )
            }
            </div>

            <GroupingDetail
                connector={this.props.connector}
                groupId={this.getGroupId(this.state.currentGroupIndex)}
            ></GroupingDetail>
        </>
        )
    }
}

export default Group;