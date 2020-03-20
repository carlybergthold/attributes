import React from 'react';
import { Link } from "react-router-dom"

const Components = {


    getCard: (image, title, content, link) => {
        return(
            <div className="card">
            <div className="card-image">
              <figure className="image is-4by3">
                <img src={image} alt="Placeholder image" className="personalityIcon"></img>
              </figure>
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <p className="title is-4">title</p>
                </div>
              </div>
              <div className="content">
              content
                <br></br>
                <Link to="/personalityDetail" className="persLink">link</Link>                </div>
            </div>
          </div>
        )
    }
}

export default Components;