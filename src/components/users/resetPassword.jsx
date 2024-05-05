import React, { Component } from "react";
import '../../styles/register.css';

class ResetPassword extends Component {

    constructor(props){
        super(props);

        this.state = {
            password1: '',
            password2: ''
        }
    }

    handlePassword1 = (e) => {
        this.setState({password1: e.target.value})
    }

    handlePassword2 = (e) => {
        this.setState({password2: e.target.value})
    }

    submitForm = () => {
        if (this.state.password1 !== this.state.password2) {
            this.props.setResetPasswordMessage('Passwords do not match.');
        } else if (this.state.password1 === '' || this.state.password2 === '') {
            this.props.setResetPasswordMessage('Please fill in both passwords.');
        } else {
            this.props.updatePassword(this.state.password1);
        }
    }

    keyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            this.submitForm();
        }
    }

    render() {
        return(
            <section className="hero full-height">
                <div className="hero-body">
                    <div className="reset-password-error">{this.props.resetPasswordMessage}</div>
                    <div className="container reset-password-field">
                        <div>
                            <label className="label">New password:</label>
                            <div className="control has-icons-left has-icons-right">
                                <input className="input" type="text" placeholder="Password" id="password" onChange={this.handlePassword1.bind(this)}
                                onKeyDown={(e) => {
                                    this.keyDown(e)
                                }}></input>
                            </div>
                        </div>
                        <div>
                            <label className="label">Verify new password:</label>
                            <div className="control has-icons-left has-icons-right">
                                <input className="input" type="text" placeholder="Password" id="password" onChange={this.handlePassword2.bind(this)}
                                onKeyDown={(e) => {
                                    this.keyDown(e)
                                }}></input>
                            </div>
                        </div>
                        <div className="control">
                            <button className="button is-light" onClick={this.submitForm}>Reset</button>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default ResetPassword;