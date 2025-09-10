import React from "react";
import '../../styles/connectors.css';
import questionArray from "../../data/questionArray";
import ConnectorCard from './connectorCard';

export default function Question() {
    return (
        <ConnectorCard
            connector="question"
            array={questionArray}
            introText="Questions about life and God help us to understand Him better."
            introSubtitle="What type of question do you have today?"
        ></ConnectorCard>
    );
}