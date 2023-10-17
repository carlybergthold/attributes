import React from "react";
import '../../styles/connectors.css';
import struggleArray from "../../data/struggleArray";
import ConnectorCard from './connectorCard';

export default function Struggles() {
    return(
        <ConnectorCard
            connector="struggle"
            array={struggleArray}
            introText="Tough day? Each struggle can connect us with God."
            introSubtitle="What are you struggling with the most today?"
        ></ConnectorCard>
    )
}