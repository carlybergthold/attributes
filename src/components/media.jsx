import React, { Component } from "react";

class Media extends Component {

  render() {
    return(
      <article className="media">
        <figure className="media-left">
          <p className="image is-64x64">
            <img src={ require(`../images/${this.props.img}`) }></img>
          </p>
        </figure>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{this.props.title}</strong>
              <br></br>
              {this.props.description}
            </p>
          </div>
          <nav className="level is-mobile">
            <div className="level-left">
              <a className="level-item">
                <span className="icon is-small"><i className="fas fa-reply"></i></span>
              </a>
              <a className="level-item">
                <span className="icon is-small"><i className="fas fa-retweet"></i></span>
              </a>
              <a className="level-item">
                <span className="icon is-small"><i className="fas fa-heart"></i></span>
              </a>
            </div>
          </nav>
        </div>
      </article>
    )
  }
}

export default Media;