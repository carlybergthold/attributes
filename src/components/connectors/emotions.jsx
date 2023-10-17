import React from "react";
import '../../styles/connectors.css';
import emotionArray from "../../data/emotionArray";
import ConnectorCard from './connectorCard';

export default function Emotions() {
    return (
        <ConnectorCard
            connector="emotion"
            array={emotionArray}
            introText="No matter the emotion, it can be a path to God."
            introSubtitle="How are you feeling today?"
        ></ConnectorCard>
    );
}