import React, { Component } from "react";
import '../../styles/connectors.css';
import movieArray from '../../data/movieArray';
import { Link } from "react-router-dom"
import Quote from '../../components/quote'

class Movies extends Component {

    componentDidMount() {
        document.querySelector(".navbar").scrollIntoView();
    }

    constructor(props) {
        super(props);
        this.state = {
            movies: movieArray,
        };
    }

    expandMovie = (movieIndex) => {
        let items = [...this.state.movies];
        let item = {...items[movieIndex]};
        item.SeeMore = !item.SeeMore;
        items[movieIndex] = item;

        this.setState({movies: [...items]});
    }

    render() {
        return(
            <>

<section className="hero">
        <div className="hero-body">
            <div className={`container heroContainer`}>
                <section className="heroTitle">
                    <h1 className="title light-text" id="heroTitle">How do some of your favorite movies reflect God?</h1>
                </section>
            </div>
        </div>
        </section>
            <section className="has-text-centered grouping-container">
            {
                this.state.movies.map((x, index) =>
                <div className="card movie-card" key={index}>
                    <div className="movie-card-content">
                        <div className="flex">
                            <div>
                                <p className="title is-4 movie-title">{x.Movie}</p>
                            </div>
                            <div className={x.SeeMore ? "see-more" : "hidden"}>
                                <div><b>Snyopsis:</b> {x.Synopsis}</div>
                                <br></br>
                                <div>{x.Commentary}</div>
                                <br></br>
                                <Quote scripture={x.Quote} v-if={x.Quote} />
                                <Link to={`/attributes/${x.Attribute}`} className="link movie-attribute">God is {x.Attribute}</Link>
                            </div>
                            <div className="is-hoverable back-to-all" onClick={() => this.expandMovie(index)}>{x.SeeMore ? 'See Less' : 'See More'}</div>
                        </div>
                    </div>
                </div>
                )
            }
            </section>
</>

        )
    }
}

export default Movies;