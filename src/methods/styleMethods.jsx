import React from "react";
import attributeArray from "../data/attributeArray";
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
import {ReactComponent as OmnipresentIcon} from '../images/attributeIcons/SVG/omnipresent.svg';
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
import {ReactComponent as WrathfulIcon} from '../images/attributeIcons/SVG/wrathful.svg';
import {ReactComponent as WiseIcon} from '../images/attributeIcons/SVG/wise.svg';

const styleMethods = {

    getAttributeColor: (attribute) => {
        const name = attributeArray.find(x => x.attributeName === attribute.toLowerCase());
        if (name === undefined ) return 'var(--teal)';
        return `var(--${name.color})`;
    },

    getIcon: (attribute, color) => {
        if (attribute === "Creative") {
            return <CreativeIcon fill={color} />
        }
        if (attribute === "Eternal") {
            return <EternalIcon fill={color} />
        }
        if (attribute === "Faithful") {
            return <FaithfulIcon fill={color} />
        }
        if (attribute === "Glorious") {
            return <GloriousIcon fill={color} />
        }
        if (attribute === "Good") {
            return <GoodIcon fill={color} />
        }
        if (attribute === "Gracious") {
            return <GraciousIcon fill={color} />
        }
        if (attribute === "Holy") {
            return <HolyIcon fill={color} />
        }
        if (attribute === "Humble") {
            return <HumbleIcon fill={color} />
        }
        if (attribute === "Immutable") {
            return <ImmutableIcon fill={color} />
        }
        if (attribute === "Incomprehensible") {
            return <IncomprehensibleIcon fill={color} />
        }
        if (attribute === "Independent") {
            return <IndependentIcon fill={color} />
        }
        if (attribute === "Invisible") {
            return <InvisibleIcon fill={color} />
        }
        if (attribute === "Jealous") {
            return <JealousIcon fill={color} />
        }
        if (attribute === "Joyful") {
            return <JoyfulIcon fill={color} />
        }
        if (attribute === "Just") {
            return <JustIcon fill={color} />
        }
        if (attribute === "Loving") {
            return <LovingIcon fill={color} />
        }
        if (attribute === "Merciful") {
            return <MercifulIcon fill={color} />
        }
        if (attribute === "Omnipotent") {
            return <OmnipotentIcon fill={color} />
        }
        if (attribute === "Omnipresent") {
            return <OmnipresentIcon fill={color} />
        }
        if (attribute === "Omniscient") {
            return <OmniscientIcon fill={color} />
        }
        if (attribute === "Patient") {
            return <PatientIcon fill={color} />
        }
        if (attribute === "Peaceful") {
            return <PeacefulIcon fill={color} />
        }
        if (attribute === "Planning") {
            return <PlanningIcon fill={color} />
        }
        if (attribute === "Providing") {
            return <ProvidingIcon fill={color} />
        }
        if (attribute === "Relational") {
            return <RelationalIcon fill={color} />
        }
        if (attribute === "Saving") {
            return <SavingIcon fill={color} />
        }
        if (attribute === "Sovereign") {
            return <SovereignIcon fill={color} />
        }
        if (attribute === "Teaching") {
            return <TeachingIcon fill={color} />
        }
        if (attribute === "Truthful") {
            return <TruthfulIcon fill={color} />
        }
        if (attribute === "Unique") {
            return <UniqueIcon fill={color} />
        }
        if (attribute === "Wise") {
            return <WiseIcon fill={color} />
        }
        if (attribute === "Wrathful") {
            return <WrathfulIcon fill={color} />
        }
    }
}

export default styleMethods;