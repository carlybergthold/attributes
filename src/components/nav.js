import React, { Component } from "react"
import { withRouter, Link } from "react-router-dom"
import './nav.css'
import userMethods from '../modules/userMethods'


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
                        <Link to="/login"><li>log in</li></Link>
                        <li onClick={userMethods.signOut}>logout</li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default withRouter(TopNav)