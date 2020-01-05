import React, { Component } from "react";
import './register.css'
import userMethods from '../modules/userMethods'

class Login extends Component {

    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = (e) =>{
        this.setState({[e.target.id]: e.target.value})
    }

    render() {
        return(
            <div className="form">
                <form className="register-form">
                    <input type="text" placeholder="email address" id="email"
                        onChange={this.handleChange.bind(this)} />
                    <input type="password" placeholder="password" id="password"
                        onChange={this.handleChange.bind(this)} />
                    <button type="submit" className="submitBtn"
                    onClick={(e) => {
                        e.preventDefault()
                        userMethods.signIn(this.state.email, this.state.password)
                        }
                    }
                    >Log In</button>
                    </form>
            </div>
        )
    }
}

export default Login;