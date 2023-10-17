import React from "react";
import '../../styles/connectors.css';
import fearArray from "../../data/fearArray";
import ConnectorCard from './connectorCard';

export default function Fears() {
    return(
        <ConnectorCard
            connector="fear"
            array={fearArray}
            introText="Fear is common to all people. And each fear points to God."
            introSubtitle="What are you afraid of?"
        ></ConnectorCard>
    )
}
