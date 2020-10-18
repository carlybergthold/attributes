import React, { Component } from "react";
import emotionArray from '../../../data/emotionArray';

class EmotionGrouping extends Component {

    render() {
        return(
            <>
            <div>
                {this.props.emotion}
            </div>
            <div>
                {
                    emotionArray.where(x => x.group === this.props.emotion).map(emotion =>
                        <section>{emotion.emotionName}</section>
                    )
                }
            </div>
        </>
        )
    }
}

export default EmotionGrouping;