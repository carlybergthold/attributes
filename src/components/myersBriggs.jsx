import React, { Component } from "react";

class MyersBriggs extends Component {

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
                        <h1 className="title">Myers Briggs</h1>
                    </div>
                </div>
            </div>
        </>
        )
    }
}

export default MyersBriggs;