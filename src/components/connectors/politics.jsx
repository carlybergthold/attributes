import React from "react";
import '../../styles/connectors.css';
import politicsArray from '../../data/politicsArray';
import '../../styles/connectors.css';
import ConnectorCard from './connectorCard';

export default function Politics() {
    return (
        <ConnectorCard
            connector="politics"
            array={politicsArray}
            introText="Politics is becoming one of the fastest-growing religions in America. Political angst grows as more people see their party as substituting for God, with the opposition party divisively viewed as Satan!"
            introSubtitle="In reality, both Democratic and Republican platforms not only reflect God's image on major issues, they often find agreement within the focal attribute. At other times, both parties miss the essence of the attribute. Click on an issue and see how each party's official platform pursues the One True God (positions listed at top of page are quoted from the latest party platform):"
            isPolitics={true}
        ></ConnectorCard>
    );
}