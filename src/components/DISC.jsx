import React, { Component } from "react";

class DISC extends Component {

    constructor(props){
        super(props);

        this.state = {
            username: '',
            email: '',
            password: ''
        }
    }

    render() {
        return(
            <>
            <div className="page">
            <section id="header">
                <h1 className="title">DISC</h1>
            </section>
                <div className="section">
                    <div className="container">
                    </div>
                </div>
            </div>
        </>
        )
    }
}

export default DISC;