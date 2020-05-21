import React, { Component } from "react";
import discArray from '../../data/discArray'
import Hero from '../hero'
import Media from '../../components/media'

class DISC extends Component {

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
                <Hero title="DISC" subtitle="DISC" img="girl.png" />
                <div className="section">
                    <div className="personalityContainer">
                    {
                        discArray.map(d =>
                            <Media title={d.type} description={d.description} img="girl.png" className="personalityMedia" />
                        )
                    }
                    </div>
                </div>
            </div>
        </>
        )
    }
}

export default DISC;