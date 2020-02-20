import React, { Component } from "react"
import { withRouter, Link } from "react-router-dom"
import '../styles/nav.css'
import userMethods from '../methods/userMethods'
import fire from "../config/fire"


class TopNav extends Component {

    constructor(props){
        super(props);

        this.state = {
            loggedIn: true,
        }
      }

      componentDidMount() {
        fire.auth().onAuthStateChanged(user => {
          if (user) {
            this.setState({ loggedIn: true });
          } else {
            this.setState({ loggedIn: false });
           }
        });
      }

    render() {
        return (
            <>
            <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link to="/home" className="navbar-item">
                    <img src="https://daks2k3a4ib2z.cloudfront.net/52f90f6d1ae8cb6a1900073e/59972e97ab717100012c14d8_RC-logo.png" width="112" height="28" alt="logo"></img>
                </Link>
                <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">

            <div className="navbar-start">
                <span className="navbar-item">
                <Link to="/attribute">Attributes</Link>
                </span>

                <span className="navbar-item">
                <Link to="/quiz">Quiz</Link>
                </span>

            <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">
                Explore Attributes
            </a>

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
                <span className="button is-primary">
                <Link to="/register"><strong>Sign up</strong></Link>
                </span>
                {
                    this.state.loggedIn ?
                    <span className="button is-light" onClick={userMethods.signOut}>
                    Log Out
                    </span> :
                    <span className="button is-light">
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