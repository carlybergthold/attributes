import React, { Component } from "react";
import '../../styles/connectors.css'

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
                <div className='connectorGroup' onClick={() => this.getCurrentGroup("happyGroup")}>HAPPY</div>
                <div className='connectorGroup' onClick={() => this.getCurrentGroup("sadGroup")}>SAD</div>
                <div className='connectorGroup' onClick={() => this.getCurrentGroup("scaredGroup")}>SCARED</div>
                <div className='connectorGroup' onClick={() => this.getCurrentGroup("angryGroup")}>ANGRY</div>
            </section>
          )
        } else if (this.state.currentGroup === "happyGroup") {
            return (
                <section className="connectorContainer">
                    <div className='connectorGroup'>HAPPY</div>
                </section>
              )
        } else if (this.state.currentGroup === "sadGroup") {
            return (
                <section className="connectorContainer">
                    <div className='connectorGroup'>SAD</div>
                </section>
              )
        } else if (this.state.currentGroup === "scaredGroup") {
            return (
                <section className="connectorContainer">
                    <div className='connectorGroup'>SCARED</div>
                </section>
                )
        }
    }

    render() {
        return(
            <>
            {
            this.group()
            }
            <div>Go back to beginning</div>
            <div>Or see all emotions</div>
        </>
        )
    }
}

export default Group;