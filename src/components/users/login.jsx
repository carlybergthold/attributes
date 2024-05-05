import React, { Component } from "react";
import '../../styles/register.css';

class Login extends Component {

    FormType = {
        Register: 1,
        LogIn: 2,
        ForgotPassword: 3
    }

    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: '',
            formType: this.FormType.LogIn
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.id]: e.target.value})
    }

    changeFormTypeState = (formType) => {
        this.setState({ formType: formType });
        this.props.setLoginMessage(null);
    }

    submitForm = () => {
        if (this.state.formType === this.FormType.ForgotPassword) {
            if (this.state.email !== '') {
                this.props.sendResetPasswordEmail(this.state.email);
            } else {
                this.props.setLoginMessage('Please enter a valid email.');
            }
        } else {
            if (this.state.email !== '' && this.state.password !== '') {
                this.props.setLoginMessage(null);
                this.state.formType === this.FormType.Register ? this.props.addUser(this.state.email, this.state.password) : this.props.logInUser(this.state.email, this.state.password);
            } else {
                this.props.setLoginMessage('Please enter a valid email and password.');
            }
        }
    }

    keyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            this.submitForm();
        }
    }

    getFields = () => {
        let title = this.state.formType === this.FormType.Register ? 'Register' : 'Log In';
        if (this.state.formType === this.FormType.ForgotPassword) {
            title = null;
        }

        return (
            <div>
                <div className="modal-card-title register-title">{title}</div>
                <div className="fields flex">
                    <div className="field">
                    <label className="label">Email</label>
                        <div className="control has-icons-left has-icons-right">
                            <input className="input" type="email" placeholder="Email" id="email" onChange={this.handleChange.bind(this)}></input>
                            <span className="icon is-small is-left">
                            <i className="fas fa-envelope"></i>
                            </span>
                            <span className="icon is-small is-right">
                            <i className="fas fa-exclamation-triangle"></i>
                            </span>
                        </div>
                    </div>
                    <div className={this.state.formType === this.FormType.ForgotPassword ? 'hidden' : 'field'}>
                    <label className="label">Password</label>
                        <div className="control has-icons-left has-icons-right">
                            <input className="input" type="text" placeholder="Password" id="password" onChange={this.handleChange.bind(this)}
                            onKeyDown={(e) => {
                                this.keyDown(e)
                            }}></input>
                            <span className="icon is-small is-left">
                            <i className="fas fa-user"></i>
                            </span>
                            <span className="icon is-small is-right">
                            <i className="fas fa-check"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    getForgotPasswordText = () => {
        return (
            <div className="control reset-button">
                <button className="button background-teal" onClick={this.submitForm}>Reset Password</button>
            </div>
        );
    }

    getDisclaimer = () => {
        let questionText = "";
        let linkText = "";
        let formType = null;

        let forgotPasswordText = <u className="help blue-text is-hoverable" onClick={() => this.changeFormTypeState(this.FormType.ForgotPassword)}>Forgot password?</u>;

        if (this.state.formType === this.FormType.Register) {
            questionText = "Already have an account?";
            linkText = "Log in";
            formType = this.FormType.LogIn;
        }

        if (this.state.formType === this.FormType.LogIn) {
            questionText = "Haven't made an account yet?";
            linkText = "Register now.";
            formType = this.FormType.Register;
        }

        if (this.state.formType === this.FormType.ForgotPassword) {
            linkText = "Log in";
            formType = this.FormType.LogIn;
            forgotPasswordText = null;
        }

        return (
            <>
            <div className='disclaimer'>
                <div>{questionText}</div>&nbsp;
                <u className="is-hoverable blue-text" onClick={() => this.changeFormTypeState(formType)}>{linkText}</u>
            </div>
            {forgotPasswordText}
            </>
        )
    }

    closeWindow = () => {
        this.props.showHideLogIn(false);
        this.props.setLoginMessage(null);
    }

    render() {
        return(
            <>
            <div className="modal is-active">
                <div className="modal-background"></div>
                <div className="modal-content">
                    <div className="form">
                        {this.getFields()}
                        <label className="error-message">{this.props.message}</label>
                        {
                            this.state.formType === this.FormType.ForgotPassword
                                ? this.getForgotPasswordText()
                                : <div className='field flex justify-content-center'>
                                    <div className="control">
                                        <button className="button background-teal"
                                                            onClick={(e) => {
                                                            e.preventDefault()
                                                            this.submitForm();
                                                            }}
                                                            onKeyDown={(e) => {
                                                                this.keyDown(e)
                                                            }}
                                                            >{this.state.formType === this.FormType.Register ? 'Register' : 'Log In'}</button>
                                    </div>
                                    <div className="control">
                                        <button className="button is-light" onClick={this.closeWindow}>Cancel</button>
                                    </div>
                                </div>
                        }
                        {this.getDisclaimer()}
                    </div>
                </div>
                <button className="modal-close is-large" aria-label="close" onClick={this.closeWindow}></button>
            </div>
        </>
        )
    }
}

export default Login;