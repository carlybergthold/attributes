import React, { Component } from "react";
import { withRouter } from "react-router-dom"
import '../styles/register.css'
import fire from "../config/fire"

class Register extends Component {

    constructor(props){
        super(props);

        this.state = {
            username: '',
            email: '',
            password: ''
        }
    }

    handleChange = (e) =>{
        this.setState({[e.target.id]: e.target.value})
    }

    goHome = () => {
        fire.auth().onAuthStateChanged(user => {
            if (user) {
                this.props.history.push("/home");
            }
        })
    }

    render() {
        return(
            <>
            <div className="form">
                <div className="field">
                <label className="label">Username</label>
                    <div className="control has-icons-left has-icons-right">
                        <input className="input is-success" type="text" placeholder="Username" id="username" onChange={this.handleChange.bind(this)}></input>
                        <span className="icon is-small is-left">
                        <i className="fas fa-user"></i>
                        </span>
                        <span className="icon is-small is-right">
                        <i className="fas fa-check"></i>
                        </span>
                    </div>
                <p className="help is-success">This username is available</p>
                </div>

                <div className="field">
                <label className="label">Email</label>
                    <div className="control has-icons-left has-icons-right">
                        <input className="input is-danger" type="email" placeholder="Email" id="email" onChange={this.handleChange.bind(this)}></input>
                        <span className="icon is-small is-left">
                        <i className="fas fa-envelope"></i>
                        </span>
                        <span className="icon is-small is-right">
                        <i className="fas fa-exclamation-triangle"></i>
                        </span>
                    </div>
                <p className="help is-danger">This email is invalid</p>
                </div>

                <div className="field">
                <label className="label">Password</label>
                    <div className="control has-icons-left has-icons-right">
                        <input className="input is-success" type="text" placeholder="Password" id="password" onChange={this.handleChange.bind(this)}></input>
                        <span className="icon is-small is-left">
                        <i className="fas fa-user"></i>
                        </span>
                        <span className="icon is-small is-right">
                        <i className="fas fa-check"></i>
                        </span>
                    </div>
                <p className="help is-success">This password works</p>
                </div>

                <div className="field is-grouped">
                    <div className="control">
                        <button className="button is-link"
                                            onClick={(e) => {
                                            this.props.addUser(this.state.email, this.state.password, this.state.username);
                                            this.goHome();
                                            }
                                        }
                                        >Register</button>
                    </div>
                    <div className="control">
                        <button className="button is-link is-light">Cancel</button>
                    </div>
                </div>
            </div>
        </>
        )
    }
}

export default withRouter(Register);