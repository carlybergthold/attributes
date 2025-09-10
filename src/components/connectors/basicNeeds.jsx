import React from "react";
import ConnectorCard from './connectorCard';
import '../../styles/connectors.css';
import basicNeedsArray from "../../data/basicNeedsArray";

export default function BasicNeeds() {
    return(
        <ConnectorCard
            connector="basicNeed"
            array={basicNeedsArray}
            introSubtitle="HELLO"
        ></ConnectorCard>
    )
}