import React, { Component } from "react"
import { withRouter, Link } from "react-router-dom"
import AttributeDropdown from "../components/attDropdown"
import '../styles/nav.scss'
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class TopNav extends Component {


    state = {
        attDropdownActive: false,
        exploreDropdownActive: false,
        userDropdownActive: false
    }

    toggleAttActive = () => {
        this.setState({ attDropdownActive: !this.state.attDropdownActive });

        if (this.state.exploreDropdownActive) {
            this.setState({ exploreDropdownActive: false });
        }

        if (this.state.userDropdownActive) {
            this.setState({ userDropdownActive: false });
        }
    }

    toggleExploreActive = () => {
        this.setState({ exploreDropdownActive: !this.state.exploreDropdownActive });

        if (this.state.attDropdownActive) {
            this.setState({ attDropdownActive: false });
        }

        if (this.state.userDropdownActive) {
            this.setState({ userDropdownActive: false });
        }
    }

    toggleUserActive = () => {
        this.setState({ userDropdownActive: !this.state.userDropdownActive });

        if (this.state.attDropdownActive) {
            this.setState({ attDropdownActive: false });
        }

        if (this.state.exploreDropdownActive) {
            this.setState({ exploreDropdownActive: false });
        }
    }

    exitMobileMenu = () => {
        const checkbox = document.getElementById('openSidebarMenu');
        checkbox.checked = false;

        this.setMobileDropdownStateToFalse();
    }

    setMobileDropdownStateToFalse = () => {
        this.setState({ attDropdownActive: false, exploreDropdownActive: false, userDropdownActive: false });
    }

    logInClick = (isMobile) => {
        if (isMobile) this.exitMobileMenu();
        this.props.showHideLogIn(true);
    }

    render() {
        return (
        <>
        {/* desktop menu */}
        <nav className="navbar is-transparent" role="navigation" aria-label="main navigation">
            <div id="attribute-navbar" className="navbar-menu">
                <div className="navbar-start">
                    <span className="navbar-item">
                    <Link to="/home" className="navbar-item">Home</Link>
                    </span>
                    <span className="navbar-item">
                        <Link to="/quiz" className="has-text-grey-dark">Quiz</Link>
                    </span>
                <div className="navbar-item has-dropdown is-hoverable">
                    <span className="navbar-link">
                        All Attributes
                    </span>
                    <div className="navbar-dropdown">
                        <AttributeDropdown />
                    </div>
                </div>
                <div className="navbar-item has-dropdown is-hoverable">
                    <span className="navbar-link">
                        Explore
                    </span>
                    <div className="navbar-dropdown">
                        <div className="nested navbar-item dropdown">
                            <div className="dropdown-trigger">
                            <button aria-haspopup="true" aria-controls="dropdown-menu">
                                <Link to="/enneagram">By Personality</Link>
                                <span className="icon is-small">
                                    <i className="fas fa-angle-down" aria-hidden="true"></i>
                                </span>
                            </button>
                            </div>
                            <div className="dropdown-menu" id="dropdown-menu" role="menu">
                                <div className="dropdown-content">
                                    <span className="navbar-item">
                                        <Link to="/enneagram" onClick={this.exitDesktopMenu}>Enneagram</Link>
                                    </span>
                                    <span className="navbar-item">
                                        <Link to="/disc" onClick={this.exitDesktopMenu}>DISC</Link>
                                    </span>
                                    <span className="navbar-item">
                                        <Link to="/myersbriggs" onClick={this.exitDesktopMenu}>Myers Briggs</Link>
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
                        <span className="navbar-item">
                            <Link to="/basicneeds">By Who You Are in Christ</Link>
                        </span>
                    </div>
                </div>
                </div>
                <span className="navbar-item">
                    <Link to="/about" className="has-text-grey-dark">About</Link>
                </span>
                <span className={this.props.user ? 'hidden' : 'navbar-item has-text-grey-dark is-hoverable'} onClick={() => this.logInClick(false)}>Log In</span>
                <div className={this.props.user ? 'navbar-item has-dropdown is-hoverable' : 'hidden'}>
                    <span className="navbar-link">
                        {this.props.user}
                    </span>
                    <div className="navbar-dropdown user-dropdown">
                        <span className="navbar-item">
                            <Link to="/results">Quiz Results</Link>
                        </span>
                        <span className="navbar-item" onClick={this.props.signOut}>
                            Sign Out
                        </span>
                    </div>
                </div>
            </div>
        </nav>

        {/* mobile menu */}
        <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu" onClick={this.setMobileDropdownStateToFalse}></input>
        <label htmlFor="openSidebarMenu" className="sidebarIconToggle is-hidden-desktop">
            <div className="spinner diagonal part-1"></div>
            <div className="spinner horizontal"></div>
            <div className="spinner diagonal part-2"></div>
        </label>
        <div id="sidebarMenu">
            <div className="sidebarMenuInner has-text-white">
                <li><Link to="/home" onClick={this.exitMobileMenu}>Home</Link></li>
                <li><Link to="/quiz" onClick={this.exitMobileMenu}>Quiz</Link></li>
                <div className={this.state.attDropdownActive ? 'dropdown mobile-dropdown is-active' : 'mobile-dropdown dropdown'}>
                    <div className="dropdown-trigger" onClick={this.toggleAttActive}>
                        <div aria-haspopup="true" aria-controls="dropdown-menu4" className="is-flex">
                            <span>Attributes</span>
                            <FontAwesomeIcon icon={faAngleDown} className="angle-down"/>
                        </div>
                    </div>
                    <div className="dropdown-menu" id="dropdown-menu4" role="menu">
                        <div className="dropdown-content">
                            <AttributeDropdown mobile="true" exitMobileMenu={this.exitMobileMenu} />
                        </div>
                    </div>
                </div>
                <div className={this.state.exploreDropdownActive ? 'dropdown mobile-dropdown is-active' : 'mobile-dropdown dropdown'}>
                    <div className="dropdown-trigger" onClick={this.toggleExploreActive}>
                        <div aria-haspopup="true" aria-controls="dropdown-menu4" className="is-flex">
                            <span>Explore</span>
                            <FontAwesomeIcon icon={faAngleDown} className="angle-down"/>
                        </div>
                    </div>
                    <div className="dropdown-menu" id="dropdown-menu4" role="menu">
                        <div className="dropdown-content">
                            <div className="dropdown-item is-capitalized">
                               <div className="mobile-dropdown-item">
                                   <Link to="/enneagram" className="has-text-grey" onClick={this.exitMobileMenu}>By Enneagram</Link></div>
                                <div className="mobile-dropdown-item">
                                   <Link to="/disc" className="has-text-grey" onClick={this.exitMobileMenu}>By DISC</Link></div>
                                <div className="mobile-dropdown-item">
                                   <Link to="/myersbriggs" className="has-text-grey" onClick={this.exitMobileMenu}>By Myers Briggs</Link></div>
                                <div className="mobile-dropdown-item">
                                   <Link to="/emotion" className="has-text-grey" onClick={this.exitMobileMenu}>By Emotion</Link></div>
                                <div className="mobile-dropdown-item">
                                   <Link to="/fear" className="has-text-grey" onClick={this.exitMobileMenu}>By Fear</Link></div>
                                <div className="mobile-dropdown-item">
                                   <Link to="/struggle" className="has-text-grey" onClick={this.exitMobileMenu}>By Struggle</Link></div>
                                <div className="mobile-dropdown-item">
                                   <Link to="/basicneeds" className="has-text-grey" onClick={this.exitMobileMenu}>By Who You Are in Christ</Link></div>
                            </div>
                        </div>
                    </div>
                </div>
                <li><Link to="/about" onClick={this.exitMobileMenu}>About</Link></li>
                <li className={this.props.user ? 'hidden' : ''}><span className="orange-text" onClick={() => this.logInClick(true)}>Log In</span></li>
                <span className={this.props.user ? '' : 'hidden'}>
                    <div className={this.state.userDropdownActive ? 'dropdown mobile-dropdown is-active' : 'mobile-dropdown dropdown'}>
                        <div className="dropdown-trigger" onClick={this.toggleUserActive}>
                            <div aria-haspopup="true" aria-controls="dropdown-menu4" className="is-flex">
                                <span className="orange-text">{this.props.user}</span>
                                <FontAwesomeIcon icon={faAngleDown} className="angle-down"/>
                            </div>
                        </div>
                        <div className="dropdown-menu" id="dropdown-menu4" role="menu">
                            <div className="dropdown-content">
                                <div className="dropdown-item is-capitalized">
                                <div className="mobile-dropdown-item">
                                    <Link to="/results" className="has-text-grey">Quiz Results</Link></div>
                                        <div className="mobile-dropdown-item has-text-grey" onClick={this.props.signOut}>Sign Out</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </span>
            </div>
        </div>
        </>
        )
    }
}

export default withRouter(TopNav)
