import React, { Component } from "react";
import '../../styles/register.css';

// function Login() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [register, setRegister] = useState(false);
//     const [forgotPassword, setForgotPassword] = useState(false);
//     const [userAddedOrLoggedIn, setUserAddedOrLoggedIn] = useState(false);
//     const [message, setErrorMessage] = useState(null);

//     handleChange = (e) => {
//         this.setState({[e.target.id]: e.target.value})
//     }
// }

class Login extends Component {

    constructor(props){
        super(props);

        this.state = {
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
    }

    submitForm = () => {
        if (this.state.email !== '' && this.state.password !== '') {
            this.props.setLoginMessage(null);
            this.state.register ? this.props.addUser(this.state.email, this.state.password) : this.props.logInUser(this.state.email, this.state.password);
        } else {
            this.props.setLoginMessage('Please enter a valid email and password.');
        }
    }

    keyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            this.submitForm();
        }
    }

    getFields = () => {
        return (
            <div>
                <div className="modal-card-title register-title">{this.state.register ? 'Register' : 'Log In'}</div>
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
                    <div className={this.state.forgotPassword ? 'hidden' : 'field'}>
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
            <div className="control">
                <button className="button background-teal">Reset Password
                </button>
            </div>
        );
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
                            this.state.forgotPassword
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
                                                            >{this.state.register ? 'Register' : 'Log In'}</button>
                                    </div>
                                    <div className="control">
                                        <button className="button is-light" onClick={this.closeWindow}>Cancel</button>
                                    </div>
                                </div>
                        }
                        <div className='disclaimer'>
                            <div>{this.state.register ? "Already have an account?" : "Haven't made an account yet?"}&nbsp;
                            </div>
                            <u className="is-hoverable blue-text" onClick={this.changeFormState}>
                                {this.state.register ? 'Log In' : 'Register now.'}
                            </u>
                        </div>
                        <u className="help blue-text is-hoverable" onClick={() => this.setState({ forgotPassword: true })}>Forgot password?</u>
                    </div>
                </div>
                <button className="modal-close is-large" aria-label="close" onClick={this.closeWindow}></button>
            </div>
        </>
        )
    }
}

export default Login;