import React, { useState } from "react";
import Grouping from './grouping';
import GroupingDetail from './groupingDetail';
import MovieDetail from './movieDetail';
import GoToAttributeCard from './goToAttributeCard';
import '../../styles/connectors.css';
import BackArrow from "../../images/left-arrow.png";

export default function ConnectorCard(props) {
    const [grouping, setGrouping] = useState(1);
    const changeGrouping = (groupId) => {
        setGrouping(groupId);
    }
    const [selectedConnector, setSelectedConnector] = useState(props.array[0]);
    const changeSelectedConnector = (id) => {
        setSelectedConnector(props.array.find(x => x.id === id));
        setGrouping(2);
    }
    const [attribute, setAttribute] = useState(null);
    const changeAttribute = (attribute) => {
        setAttribute(attribute);
    }
    const QuizContentRight = () => {
        if (grouping === 1) {
            return <Grouping connector={props.connector} cardArray={props.array} changeConnector={changeSelectedConnector} />;
        } else if (grouping === 2) {
            if (!props.isMovie) {
                return  <GroupingDetail connector={props.connector} cardArray={selectedConnector.details} changeGrouping={changeGrouping} changeAttribute={changeAttribute} image={selectedConnector.image}></GroupingDetail>
            } else {
                return <MovieDetail commentary={selectedConnector.commentary} attribute={selectedConnector.attribute} quote={selectedConnector.quote}/>
            }
        } else if (grouping === 3) {
            return <GoToAttributeCard attribute={attribute.attributeName}></GoToAttributeCard>;
        }
        return null;
    }
    const QuizContentLeft = () => {
        if (grouping === 1) {
            return <>
                <h2 className="title is-3">{props.introText}</h2>
                <h3 className="subtitle is-5">{props.introSubtitle}</h3>
            </>
        }
        else if (grouping === 2) {
            return <div className={`title ${props.isMovie ? 'is-4 movie-synopsis' : 'is-4'}`}>{selectedConnector.description}</div>;
        } else if (grouping === 3) {
            return  <>
                <div className="title is-4">{attribute.description}</div>
            </>
        }
        return null;
    }

    return(
        <section className="personality-quiz-section">
            <div className="quiz-card">
                <div className="progress-bar-container">
                    <div className="progress-bar-back">
                        <img src={BackArrow} alt="back arrow" className={`back-button ${grouping === 1 ? 'hidden' : ''}`} onClick={() => changeGrouping(grouping - 1)}></img>
                    </div>
                    <div>{grouping} OF {props.isMovie ? 2 : 3}</div>
                    <div className="progress-bar-next"></div>
                </div>
                <div className="quiz-container">
                    <QuizContentLeft />
                    <div>
                        <div className="connector-divider is-centered"></div>
                    </div>
                    <QuizContentRight />
                </div>
            </div>
        </section>
    )
}