import React, { Component } from "react";
import emotionArray from '../../data/emotionArray';
import fearArray from '../../data/fearArray';
import struggleArray from '../../data/struggleArray';

class GroupingDetail extends Component {

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
            <div className="connectorContainer">
                {
                    this.getArray()
                    .filter(x => x.group === this.props.emotion)
                    .map(emotion =>
                        <div className="card">
                            <div className="card-content">
                                <div className="media">
                                    <div className="media-content">
                                        <p className="subtitle is-6">{emotion.emotionName}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
        )
    }
}

export default GroupingDetail;