import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom"

class PersonalityDetail extends Component {

    constructor(props){
        super(props);

        this.state = {
            test: this.props.location.state.personality,
            personality: this.props.location.state.personality
        }
      }

      render() {
          return(
            <>
            <div className="page">
            <section id="header">
                <h1 className="title">{this.state.personality}</h1>
            </section>
                <div className="section">
                    <div className="container">
                        <section className="enneagramContainer">
                        </section>
                    </div>
                </div>
            </div>
            </>
          )
      }

}

export default withRouter(PersonalityDetail);