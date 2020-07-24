import React, { Component } from "react";

class Quote extends Component {

    render() {

        return(
                <div style={{margin: "0 2rem"}}>
                    <blockquote>
                        <p style={{fontFamily: "helvetica", fontSize: "1.2rem", fontStyle: "italic", paddingLeft: "2rem", borderLeft: "3px solid lightgray"}}>{this.props.scripture}</p>
                    </blockquote>
                    <footer style={{textTransform: "uppercase", color: "#b5b5b5", marginTop: "0.5rem"}}>{this.props.reference}</footer>
                </div>
        )
    }
}

export default Quote;