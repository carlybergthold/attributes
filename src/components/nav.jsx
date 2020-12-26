import React, { Component } from "react"
import { withRouter, Link } from "react-router-dom"
import AttributeDropdown from "../components/attDropdown"
import '../styles/nav.scss'

class TopNav extends Component {

    constructor(props){
        super(props);

        this.state = {
            navBackground: 'white'
        }
    }

    render() {
        return (
            <>
            <nav className="navbar" role="navigation" aria-label="main navigation" style={{backgroundColor: this.state.navBackground}}>
            <div className="navbar-brand">
                <Link to="/home" className="navbar-item">
                    Home
                </Link>
                <span role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="attribute-navbar">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                </span>
            </div>

            <div id="attribute-navbar" className="navbar-menu">

            <div className="navbar-start">

                <div className="navbar-item has-dropdown is-hoverable">
                    <span className="navbar-link">
                        All Attributes
                    </span>
                    <div className="navbar-dropdown">
                        <AttributeDropdown />
                    </div>
                </div>

                <span className="navbar-item">
                <Link to="/quiz">Take the Quiz</Link>
                </span>

                <span className="navbar-item">
                <Link to="/results">Results</Link>
                </span>


                    <div className="navbar-item has-dropdown is-hoverable">
                    <span className="navbar-link">
                        Explore
                    </span>

                    <div className="navbar-dropdown">
                    <div className="nested navbar-item dropdown">
                        <div className="dropdown-trigger">
                        <button aria-haspopup="true" aria-controls="dropdown-menu">
                            <Link to="/personality">By Personality</Link>
                            <span className="icon is-small">
                                <i className="fas fa-angle-down" aria-hidden="true"></i>
                            </span>
                        </button>
                        </div>
                        <div className="dropdown-menu" id="dropdown-menu" role="menu">
                            <div className="dropdown-content">
                                <span className="navbar-item">
                                    <Link to="/enneagram">Enneagram</Link>
                                </span>
                                <span className="navbar-item">
                                    <Link to="/disc">DISC</Link>
                                </span>
                                <span className="navbar-item">
                                    <Link to="/myersbriggs">Myers Briggs</Link>
                                </span>
                            </div>
                        </div>
                    </div>
                <span className="navbar-item">
                        <Link to="/emotion">By Emotion</Link>
                        </span>
                        <span className="navbar-item">
                        <Link to="/fear">By Fear</Link>
                        </span>
                        <span className="navbar-item">
                        <Link to="/struggle">By Struggle</Link>
                        </span>
                    </div>
                </div>



            </div>
            </div>

        {/* <div className="navbar-end">
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
            </div> */}
        </nav>
        </>
        )
    }
}

export default withRouter(TopNav)