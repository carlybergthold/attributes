
class Wise extends Component {
    render() {
        return(
            <nav className="navbar is-light" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <img src="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/036/square_256/vue.png"></img>
                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" onClick="isOpen = !isOpen">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div className="navbar-menu">
                <div className="navbar-end">
                    <router-link to="/" className="navbar-item is-tab">Home</router-link>
                    <router-link to="/about" className="navbar-item is-tab">About</router-link>
                    <router-link to="/else" className="navbar-item is-tab">Something Else</router-link>
                </div>
            </div>
            </nav>
        )
    }
}