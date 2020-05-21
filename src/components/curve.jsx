import React, { Component } from "react";
import grayCurve from '../images/grayCurve.png'
import whiteCurve from '../images/whiteCurve.png'

class Curve extends Component {

    render() {

        var margin = { marginBottom: -10 };
        var bg = { backgroundColor: "#F5F5F5" };

        return(
            <section style={margin}>
            {
                this.props.color == "gray" ? <img src={grayCurve} id="curve"></img> :
                                             <img src={whiteCurve} id="curve" style={bg}></img>
            }
            </section>
        )
    }
}

export default Curve;