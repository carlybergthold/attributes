import React, { Component } from "react";
import '../../styles/register.css';

class Login extends Component {

    constructor(props){
        super(props);

        this.state = {
            username: '',
            email: '',
            password: '',
            register: false,
            forgotPassword: false
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.id]: e.target.value})
    }

    changeFormState = () => {
        this.setState({ register: !this.state.register });
        this.props.resetLoginError();
    }

    submitForm = () => {
        this.state.register
            ? this.props.addUser(this.state.email, this.state.password)
            : this.props.signIn(this.state.email, this.state.password);
    }

    render() {
        return(
            <>
            <div className="modal is-active">
                <div className="modal-background"></div>
                <div className="modal-content">
                    <div className="form">
                        <div className="modal-card-title register-title">{this.state.register ? 'Register' : 'Log In'}</div>
                        <div className={this.state.register ? 'field' : 'hidden'}>
                        <label className="label">Username</label>
                            <div className="control has-icons-left has-icons-right">
                                <input className="input" type="username" placeholder="Username" id="username" onChange={this.handleChange.bind(this)}></input>
                            </div>
                        </div>
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

                        <div className={this.state.forgotPassword ? 'hidden' : 'field'}>
                        <label className="label">Password</label>
                            <div className="control has-icons-left has-icons-right">
                                <input className="input" type="text" placeholder="Password" id="password" onChange={this.handleChange.bind(this)}></input>
                                <span className="icon is-small is-left">
                                <i className="fas fa-user"></i>
                                </span>
                                <span className="icon is-small is-right">
                                <i className="fas fa-check"></i>
                                </span>
                            </div>
                            <p className="help is-danger">{this.props.loginError}</p>
                            <u className="help blue-text is-hoverable" onClick={() => this.setState({ forgotPassword: true })}>Forgot password?</u>
                        </div>
                        {
                            this.state.forgotPassword
                                ?  <div className="control">
                                        <button className="button background-teal"
                                                            onClick={(e) => {
                                                            e.preventDefault()
                                                            this.props.forgotPassword(this.state.email);
                                                            }
                                                            }>Reset Password
                                        </button>
                                    </div>
                                : <div className="field is-grouped">
                                    <div className="control">
                                        <button className="button background-teal"
                                                            onClick={(e) => {
                                                            e.preventDefault()
                                                            this.submitForm();
                                                            }
                                                            }>{this.state.register ? 'Register' : 'Log In'}</button>
                                    </div>
                                    <div className="control">
                                        <button className="button is-light" onClick={() => this.props.showHideLogIn(false)}>Cancel</button>
                                    </div>
                                </div>
                        }



                        <div className="disclaimer">
                            <div>{this.state.register ? "Already have an account?" : "Haven't made an account yet?"}&nbsp;
                            </div>
                            <u className="is-hoverable blue-text" onClick={this.changeFormState}>
                                {this.state.register ? 'Log In' : 'Register now.'}
                            </u>
                        </div>
                    </div>
                </div>
                <button className="modal-close is-large" aria-label="close" onClick={() => this.props.showHideLogIn(false)}></button>
            </div>
        </>
        )
    }
}

export default Login;