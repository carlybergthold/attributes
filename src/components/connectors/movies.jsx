import React from "react";
import '../../styles/connectors.css';
import movieArray from '../../data/movieArray';
import '../../styles/connectors.css';
import ConnectorCard from './connectorCard';

export default function Movies() {
    return (
        <ConnectorCard
            connector="movie"
            array={movieArray}
            introText="How do some of your favorite movies reflect God?"
            introSubtitle="Choose a movie to see more."
            isMovies={true}
        ></ConnectorCard>
    );
}