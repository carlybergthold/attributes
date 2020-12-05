import React, { Component } from "react";
import emotionArray from '../../data/emotionArray';
import fearArray from '../../data/fearArray';
import struggleArray from '../../data/struggleArray';

class GroupingDetail extends Component {

    mounted() {
        console.log(this.props.group)
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
            <div className="connectorContainer">
                {
                    this.getArray()
                    .filter(x => x.group === this.props.group)
                    .map(group =>
                        <div key={group.name} className="card">
                            <div className="card-content">
                                <div className="media">
                                    <div className="media-content">
                                        <p className="subtitle is-6">{group.name}</p>
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