import React, { Component } from "react";
import './register.css'
import fire from '../config/fire'
import questions from '../modules/testArray'

class Register extends Component {

    constructor(props){
        super(props);

        this.state = {
            username: '',
            email: '',
            password: ''
        }
    }

    addUser = () => {
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((userCredentials)=>{
            if(userCredentials.user) {
                userCredentials.user.updateProfile({
                    displayName: this.state.username
                })
            }
        })
        .catch(function(error) {
        console.log(error.message);
        });

        console.log(this.state)

        questions.forEach(q => {
            fire.database().ref(`/userAttributes/${this.state.username}/scores`).set({
              acceptScore: 0,
              rejectScore: 0,
              reflectScore: 0,
              salvationScore: 0
          })

          fire.database().ref(`/userAttributes/${this.state.username}/${q.attribute}`).set({
            accept: 0,
            reject: 0,
            reflect: 0
          })
        })
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
                        this.addUser()
                        }
                    }
                    >submit</button>
                    </form>
            </div>
        )
    }
}

export default Register;