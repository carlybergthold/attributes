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
                            Description?
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
                        Description?
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
                        Description?
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
                        Description?
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