import React, { Component } from "react"
import { withRouter, Link } from "react-router-dom"
import './nav.css'


class TopNav extends Component {

    render() {
        return (
            <nav role='navigation'>
                <div id="menu">
                    <ul id="menuBullets">
                        <Link to="/attribute"><li>attribute</li></Link>
                        <Link to="/quiz"><li>quiz</li></Link>
                        <Link to="/results"><li>results</li></Link>
                        <Link to="/register"><li>register</li></Link>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default withRouter(TopNav)