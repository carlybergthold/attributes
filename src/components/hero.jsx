import React, { Component } from "react";
import '../styles/hero.css'
import {ReactComponent as CreativeIcon} from '../images/attributeIcons/SVG/creative.svg';
import {ReactComponent as EternalIcon} from '../images/attributeIcons/SVG/eternal.svg';
import {ReactComponent as FaithfulIcon} from '../images/attributeIcons/SVG/faithful.svg';
import {ReactComponent as GloriousIcon} from '../images/attributeIcons/SVG/glorious.svg';
import {ReactComponent as GoodIcon} from '../images/attributeIcons/SVG/good.svg';
import {ReactComponent as GraciousIcon} from '../images/attributeIcons/SVG/gracious.svg';
import {ReactComponent as HolyIcon} from '../images/attributeIcons/SVG/holy.svg';
import {ReactComponent as HumbleIcon} from '../images/attributeIcons/SVG/humble.svg';
import {ReactComponent as ImmutableIcon} from '../images/attributeIcons/SVG/immutable.svg';
import {ReactComponent as IncomprehensibleIcon} from '../images/attributeIcons/SVG/incomprehensible.svg';
import {ReactComponent as IndependentIcon} from '../images/attributeIcons/SVG/independent.svg';
import {ReactComponent as InvisibleIcon} from '../images/attributeIcons/SVG/invisible.svg';
import {ReactComponent as JealousIcon} from '../images/attributeIcons/SVG/jealous.svg';
import {ReactComponent as JoyfulIcon} from '../images/attributeIcons/SVG/joyful.svg';
import {ReactComponent as JustIcon} from '../images/attributeIcons/SVG/just.svg';
import {ReactComponent as LovingIcon} from '../images/attributeIcons/SVG/loving.svg';
import {ReactComponent as MercifulIcon} from '../images/attributeIcons/SVG/merciful.svg';
import {ReactComponent as OmnipotentIcon} from '../images/attributeIcons/SVG/omnipotent.svg';
import {ReactComponent as OmniscientIcon} from '../images/attributeIcons/SVG/omniscient.svg';
import {ReactComponent as PatientIcon} from '../images/attributeIcons/SVG/patient.svg';
import {ReactComponent as PeacefulIcon} from '../images/attributeIcons/SVG/peaceful.svg';
import {ReactComponent as PlanningIcon} from '../images/attributeIcons/SVG/planning.svg';
import {ReactComponent as ProvidingIcon} from '../images/attributeIcons/SVG/providing.svg';
import {ReactComponent as RelationalIcon} from '../images/attributeIcons/SVG/relational.svg';
import {ReactComponent as SavingIcon} from '../images/attributeIcons/SVG/saving.svg';
import {ReactComponent as SovereignIcon} from '../images/attributeIcons/SVG/sovereign.svg';
import {ReactComponent as TeachingIcon} from '../images/attributeIcons/SVG/teaching.svg';
import {ReactComponent as TruthfulIcon} from '../images/attributeIcons/SVG/truthful.svg';
import {ReactComponent as UniqueIcon} from '../images/attributeIcons/SVG/unique.svg';
import {ReactComponent as WiseIcon} from '../images/attributeIcons/SVG/wise.svg';

class Hero extends Component {

    constructor(props){
        super(props);

        this.state = {
            fill: '#fff',
        }
      }

    getIcon() {
        if (this.props.title === "Creative") {
            return <CreativeIcon fill={this.state.fill} />
        }
        if (this.props.title === "Eternal") {
            return <EternalIcon fill={this.state.fill} />
        }
        if (this.props.title === "Faithful") {
            return <FaithfulIcon fill={this.state.fill} />
        }
        if (this.props.title === "Glorious") {
            return <GloriousIcon fill={this.state.fill} />
        }
        if (this.props.title === "Good") {
            return <GoodIcon fill={this.state.fill} />
        }
        if (this.props.title === "Gracious") {
            return <GraciousIcon fill={this.state.fill} />
        }
        if (this.props.title === "Holy") {
            return <HolyIcon fill={this.state.fill} />
        }
        if (this.props.title === "Humble") {
            return <HumbleIcon fill={this.state.fill} />
        }
        if (this.props.title === "Immutable") {
            return <ImmutableIcon fill={this.state.fill} />
        }
        if (this.props.title === "Incomprehensible") {
            return <IncomprehensibleIcon fill={this.state.fill} />
        }
        if (this.props.title === "Independent") {
            return <IndependentIcon fill={this.state.fill} />
        }
        if (this.props.title === "Invisible") {
            return <InvisibleIcon fill={this.state.fill} />
        }
        if (this.props.title === "Jealous") {
            return <JealousIcon fill={this.state.fill} />
        }
        if (this.props.title === "Joyful") {
            return <JoyfulIcon fill={this.state.fill} />
        }
        if (this.props.title === "Just") {
            return <JustIcon fill={this.state.fill} />
        }
        if (this.props.title === "Loving") {
            return <LovingIcon fill={this.state.fill} />
        }
        if (this.props.title === "Merciful") {
            return <MercifulIcon fill={this.state.fill} />
        }
        if (this.props.title === "Omnipotent") {
            return <OmnipotentIcon fill={this.state.fill} />
        }
        if (this.props.title === "Omniscient") {
            return <OmniscientIcon fill={this.state.fill} />
        }
        if (this.props.title === "Patient") {
            return <PatientIcon fill={this.state.fill} />
        }
        if (this.props.title === "Peaceful") {
            return <PeacefulIcon fill={this.state.fill} />
        }
        if (this.props.title === "Planning") {
            return <PlanningIcon fill={this.state.fill} />
        }
        if (this.props.title === "Providing") {
            return <ProvidingIcon fill={this.state.fill} />
        }
        if (this.props.title === "Relational") {
            return <RelationalIcon fill={this.state.fill} />
        }
        if (this.props.title === "Saving") {
            return <SavingIcon fill={this.state.fill} />
        }
        if (this.props.title === "Sovereign") {
            return <SovereignIcon fill={this.state.fill} />
        }
        if (this.props.title === "Teaching") {
            return <TeachingIcon fill={this.state.fill} />
        }
        if (this.props.title === "Truthful") {
            return <TruthfulIcon fill={this.state.fill} />
        }
        if (this.props.title === "Unique") {
            return <UniqueIcon fill={this.state.fill} />
        }
        if (this.props.title === "Wise") {
            return <WiseIcon fill={this.state.fill} />
        }
    };

    render() {
        return(
        <section className="hero is-primary is-small">
        <div className="hero-body">
        <div className={`container heroContainer ${this.props.title}`}>
        {
            this.getIcon()
        }
        <section className="heroTitle">
        <h1 className="title" id="heroTitle">{this.props.title}  |</h1>
        <h2 className="subtitle" id="heroSubtitle">&nbsp;&nbsp;{this.props.subtitle}</h2>
        </section>
        </div>
        </div>
        </section>
    )}
}

export default Hero;