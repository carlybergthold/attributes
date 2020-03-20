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
                <div className="section">
                    <div className="container">
                        <h1 className="title">DISC</h1>
                    </div>
                </div>
            </div>
        </>
        )
    }
}

export default DISC;