import React, { Component } from "react";
import quotes from '../images/quotes.png'
import '../styles/components/testimonial.css'

class Testimonial extends Component {

    render() {

        var style = {
            backgroundColor: this.props.color
        };

        return(
          <section className="hero" style={style} id="testimonials">
                <div className="hero-body">
                    <div className="container is-fluid">
                        <div className="has-text-centered">
                            <img src={quotes} className="testimonial-img"></img>
                        </div>
                        <div className="has-text-centered">
                            <p className="is-size-4 has-text-white" id="quote-text">{this.props.quote}</p>
                            <p className="is-size-3 has-text-white">{this.props.reference}</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Testimonial;