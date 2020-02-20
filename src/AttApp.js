import React, { Component } from "react"
import ApplicationViews from "./ApplicationViews"
import TopNav from "./components/Nav/Nav";
import { withRouter } from "react-router-dom"
import API from "./API/apiCalls"



class AttApp extends Component {

    constructor(props){
        super(props);

        this.state = {
            user: '',
        }
      }


      componentDidMount() {
        const sessionUser = localStorage.getItem('user')
        const user = JSON.parse(sessionUser);

        if (user) {
          this.setState({ userId: user.id, navLink: "log out", class: "hidden" })
        } else {
          this.setState(state => ({ navLink: "log in" , class: "registerlink"}))
        }
        API.getUserLocation()
        .then(user => {
          this.setState({startingLat: user.location.lat, startingLng: user.location.lng})
        })
      }

    render() {
        return (
            <>
                <TopNav userId={this.state.userId} startingLat={this.state.startingLat} startingLng={this.state.startingLng} popup={this.state.popup} address={this.state.address} navLink={this.state.navLink} class={this.state.class} logInOrOut={this.logInOrOut} />
                <ApplicationViews userId={this.state.userId} startingLat={this.state.startingLat} startingLng={this.state.startingLng} popup={this.state.popup} address={this.state.address} verifyUser={this.verifyUser} getAddress={this.getAddress} addUser={this.addUser} />
            </>
        )
    }
}

export default withRouter(AttApp)