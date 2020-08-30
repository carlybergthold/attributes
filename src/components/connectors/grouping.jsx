import React, { Component } from "react";
import '../../styles/connectors.css';
import EmotionGrouping from './emotion/emotionGrouping';

class Group extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentGroup: "firstGroup"
        };
    }

    getCurrentGroup = (group) => {
        this.setState({ currentGroup: group });
    }

    group = () => {
        if (this.state.currentGroup === "firstGroup") {
          return (
            <section className="connectorContainer">
                <div className='connectorGroup' onClick={() => this.getCurrentGroup("pleasureGroup")}>Pleased</div>
                <div className='connectorGroup' onClick={() => this.getCurrentGroup("sadnessGroup")}>SAD</div>
                <div className='connectorGroup' onClick={() => this.getCurrentGroup("fearGroup")}>Afraid</div>
                <div className='connectorGroup' onClick={() => this.getCurrentGroup("angerGroup")}>ANGRY</div>
            </section>
          )
        } else if (this.state.currentGroup === "pleasureGroup") {
            return <EmotionGrouping emotion="pleasure"></EmotionGrouping>
        } else if (this.state.currentGroup === "sadnessGroup") {
            return <EmotionGrouping emotion="sadness"></EmotionGrouping>
        } else if (this.state.currentGroup === "fearGroup") {
            return <EmotionGrouping emotion="fear"></EmotionGrouping>
        } else if (this.state.currentGroup === "angerGroup") {
            return <EmotionGrouping emotion="anger"></EmotionGrouping>
        }
    }

    render() {
        return(
            <>
            {
            this.group()
            }
            <div onClick={() => this.getCurrentGroup("firstGroup")}>Go back to beginning</div>
            <div>Or see all emotions</div>
        </>
        )
    }
}

export default Group;