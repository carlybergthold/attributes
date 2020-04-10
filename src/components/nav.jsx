import React, { Component } from "react"
import { withRouter, Link } from "react-router-dom"
import '../styles/nav.css'
import girl from '../images/girl.png'

class TopNav extends Component {

    render() {
        return (
            <>
            <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link to="/home" className="navbar-item">
                    <img src={girl} className="nav-logo"></img>
                </Link>
                <span role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                </span>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">

            <div className="navbar-start">
                <span className="navbar-item">
                <Link to="/attributeList">Explore the Attributes</Link>
                </span>

                <span className="navbar-item">
                <Link to="/quiz">Take the Quiz</Link>
                </span>

            <div className="navbar-item has-dropdown is-hoverable">
            <span className="navbar-link">
                Explore
            </span>

            <div className="navbar-dropdown">
                <span className="navbar-item">
                <Link to="/personality">By Personality</Link>
                </span>
                <span className="navbar-item">
                By Movies
                </span>
                <span className="navbar-item">
                By the Quiz
                </span>
                <hr className="navbar-divider"></hr>
                <span className="navbar-item">
                And So On
                </span>
            </div>
            </div>
        </div>
            </div>

        <div className="navbar-end">
            <div className="navbar-item">
            <div className="buttons">
                {
                    this.props.user != 'anon' ?
                    <span className="button is-primary" onClick={this.props.signOut}>
                    Log Out
                    </span> :
                    <span className="button is-primary">
                        <Link to="/login">Log In</Link>
                    </span>
                }
            </div>
            </div>
            </div>
        </nav>
        </>
        )
    }
}

export default withRouter(TopNav)