import React, { Component } from "react";

class Quote extends Component {

    render() {

        return(
        <div class="testimonial-quote group">
            <div class="quote-container">
                <div>
                    <blockquote>
                        <p>{this.props.scripture}</p>
                    </blockquote>
                    <cite><span>{this.props.reference}</span>
                    </cite>
                </div>
            </div>
        </div>
        )
    }
}

export default Quote;