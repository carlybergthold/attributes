import React, { Component } from "react";
import myersBriggsArray from '../../data/myersBriggsArray'
import Hero from '../hero'
import Media from '../../components/media'

class MyersBriggs extends Component {

    constructor(props){
        super(props);

        this.state = {
            username: '',
            email: '',
            password: ''
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return(
            <>
            <div className="page">
            <Hero title="Myers Briggs" subtitle="Myers Briggs" img="girl.png" />
                <div className="section">
                    <div className="connectorContainer">
                    {
                        myersBriggsArray.map(m =>
                            <Media key={m.type} title={m.type} description={m.description} img="girl.png" className="personalityMedia" />
                        )
                    }
                    </div>
                </div>
            </div>
        </>
        )
    }
}

export default MyersBriggs;