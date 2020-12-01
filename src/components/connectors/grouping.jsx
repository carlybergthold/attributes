import React, { Component } from "react";
import '../../styles/connectors.css';
import GroupingDetail from './groupingDetail';

class Group extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentGroup: "all"
        };
    }

    getCurrentGroup = (group) => {
        this.setState({ currentGroup: group });
    }

    render() {
        return(
            <>
            <section className="connectorContainer">
                <div className="card"
                     onClick={() => this.getCurrentGroup("pleasure")}
                     style={{ display: this.state.currentGroup == "all" || this.state.currentGroup == "pleasure" ? "block" : "none" }}>
                    <div className="card-content">
                        <div className="media">
                            <div className="media-content">
                                <p className="title is-4">Pleased</p>
                            </div>
                        </div>
                        <div className="content">
                            Great! Since you are in such a good mood, will you pick from one of these more specific choices?
                        </div>
                    </div>
                </div>

                <div className="card"
                     onClick={() => this.getCurrentGroup("sadness")}
                     style={{ display: this.state.currentGroup == "all" || this.state.currentGroup == "sadness" ? "block" : "none" }}>
                    <div className="card-content">
                        <div className="media">
                            <div className="media-content">
                                <p className="title is-4">Sad</p>
                            </div>
                        </div>
                        <div className="content">
                        So sorry to hear.  Can you help clarify by selecting one of these options?
                        </div>
                    </div>
                </div>

                <div className="card"
                     onClick={() => this.getCurrentGroup("fear")}
                     style={{ display: this.state.currentGroup == "all" || this.state.currentGroup == "fear" ? "block" : "none" }}>
                    <div className="card-content">
                        <div className="media">
                            <div className="media-content">
                                <p className="title is-4">Afraid</p>
                            </div>
                        </div>
                        <div className="content">
                        There sure are lots of fearful things out there.  Will you pick the one which is closest?
                        </div>
                    </div>
                </div>

                <div className="card"
                     onClick={() => this.getCurrentGroup("anger")}
                     style={{ display: this.state.currentGroup == "all" || this.state.currentGroup == "anger" ? "block" : "none" }}>
                    <div className="card-content">
                        <div className="media">
                            <div className="media-content">
                                <p className="title is-4">Angry</p>
                            </div>
                        </div>
                        <div className="content">
                        It's probably understandable.  Pick the best option.
                        </div>
                    </div>
                </div>
            </section>
            <div onClick={() => this.getCurrentGroup("all")} style={{ display: this.state.currentGroup == "all" ? "none" : "block" }}>Go back to beginning</div>
            <GroupingDetail connector="emotion" emotion={this.state.currentGroup}></GroupingDetail>
        </>
        )
    }
}

export default Group;