import React, { Component } from "react";
import './register.css'
import userMethods from '../modules/userMethods'

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

    render() {
        return(
            <div className="form">
                <form className="register-form">
                    <input type="text" placeholder="name" id="username"
                        onChange={this.handleChange.bind(this)} />
                    <input type="password" placeholder="password" id="password"
                        onChange={this.handleChange.bind(this)} />
                    <input type="text" placeholder="email address" id="email"
                        onChange={this.handleChange.bind(this)} />
                    <button type="submit" className="submitBtn"
                    onClick={(e) => {
                        e.preventDefault()
                        userMethods.addUser(this.state.email, this.state.password, this.state.username)
                        }
                    }
                    >submit</button>
                    </form>
            </div>
        )
    }
}

export default Register;