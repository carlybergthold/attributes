import React from "react";
import '../../styles/connectors.css';
import lawArray from "../../data/lawArray";
import ConnectorCard from './connectorCard';

export default function Law() {
    return (
        <ConnectorCard
            connector="law"
            array={lawArray}
            introText="Our laws today have many roots in Biblical law, whether directly from Christian influence or from our culture's collective insight of how people can live together successfully."
            introSubtitle="Pick the part of law you would like to explore:"
        ></ConnectorCard>
    );
}