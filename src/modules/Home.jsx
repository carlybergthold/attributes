import React from 'react';
import { withRouter, Link } from "react-router-dom"
import '../styles/home.css'
import attArray from '../data/attributeArray'
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
import FearIcon from "../assets/img/icons/fear.svg";
import StrugglesIcon from "../assets/img/icons/struggle.svg";
import EmotionIcon from "../assets/img/icons/emotion.svg";
import Face1 from "../assets/img/illustrations/faces/1.png";
import Face2 from "../assets/img/illustrations/faces/2.png";
import Face3 from "../assets/img/illustrations/faces/3.png";
import Thought from "../assets/img/illustrations/features/thought.png";
import styleMethods from "../methods/styleMethods";

class Home extends React.Component {

  //need to update icon colors throughout the site
  //need to update all attribute components to the new base
  //need to update Results "face" svgs

  constructor(props){
    super(props);

    this.state = {
        attribute: 'omniscient',
        description: 'omniscient'
    }
  }

  components = {
    creative: CreativeIcon,
    eternal: EternalIcon,
    faithful: FaithfulIcon,
    glorious: GloriousIcon,
    good: GoodIcon,
    gracious: GraciousIcon,
    holy: HolyIcon,
    humble: HumbleIcon,
    immutable: ImmutableIcon,
    incomprehensible: IncomprehensibleIcon,
    independent: IndependentIcon,
    invisible: InvisibleIcon,
    jealous: JealousIcon,
    joyful: JoyfulIcon,
    just: JustIcon,
    loving: LovingIcon,
    merciful: MercifulIcon,
    omnipotent: OmnipotentIcon,
    omnipresent: OmnipresentIcon,
    omniscient: OmniscientIcon,
    patient: PatientIcon,
    peaceful: PeacefulIcon,
    planning: PlanningIcon,
    providing: ProvidingIcon,
    relational: RelationalIcon,
    saving: SavingIcon,
    sovereign: SovereignIcon,
    teaching: TeachingIcon,
    truthful:	TruthfulIcon,
    unique: UniqueIcon,
    wrathful: WrathfulIcon,
    wise: WiseIcon
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    this.randomize();
  }

  randomize = () => {
    var randomNum = Math.floor((Math.random() * attArray.length));
    var attObj = attArray[randomNum]
    this.setState({attribute: attObj.attributeName,
                   description: attObj.description});
  }

  render() {
    const Icon = this.components[this.state.attribute];

    return(
      <>
        <div id="home-hero" className="hero-body">
                <div className="container">
                    <div className="columns is-vcentered">
                        <div className="column is-5 is-offset-1 landing-caption">
                            <h1 className="title is-1 is-bold is-spaced">
                                Are you in God's image?
                            </h1>
                            <h2 className="subtitle is-5 is-muted"> To answer this question, you have to know both yourself and God. This website will help you see how much you really are like God - and how you are not!</h2>
                            <div className="button-wrap">
                                <span className="button is-rounded is-primary raised">
                                    <Link to="/quiz">Take the Quiz</Link>
                                </span>
                            </div>
                        </div>
                        <div className="column is-5">
                            <figure className="image">
                                <img src={Thought} alt="Description" id="home-illustration"></img>
                            </figure>
                        </div>
                    </div>
                </div>
        </div>

        <section className="section is-medium has-background-image" style={{backgroundImage: `url(https://source.unsplash.com/g30P1zcOzXo/1600x900)`}} data-color="#4FC1EA" data-color-opacity=".6">
            <div className="overlay"></div>
            <div className="container">
                <div className="title-wrapper has-text-centered">
                    <h2 className="title is-2">God's image shows up in many ways.</h2>
                    <h3 className="subtitle is-5">Our humanity comes from Him - including our fears, emotions and struggles.</h3>
                    <div className="divider is-centered"></div>
                </div>

                <div className="content-wrapper homepage-connectors">
                <div className="columns">
                    <div className="column is-one-third">
                        <div className="feature-card is-bordered has-text-centered is-feature-reveal">
                            <div className="card-title">
                                <h4>Fears</h4>
                            </div>
                            <div className="card-icon">
                                <img src={FearIcon} alt="foo"></img>
                            </div>
                            <div className="card-text">
                                <p>Fear is common to all people.  Your strongest fear points to God.</p>
                            </div>
                            <div className="card-action">
                                <Link to="/fear" className="button btn-align-md is-primary raised">Explore More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="column is-one-third">
                        <div className="feature-card is-bordered has-text-centered is-feature-reveal">
                            <div className="card-title">
                                <h4>Emotions</h4>
                            </div>
                            <div className="card-icon">
                                <img src={EmotionIcon} alt="foo"></img>
                            </div>
                            <div className="card-text">
                                <p>God invites you to see Him in how you are feeling right now.</p>
                            </div>
                            <div className="card-action">
                                <Link to="/emotion" className="button btn-align-md is-primary raised">Explore More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="column is-one-third">
                        <div className="feature-card is-bordered has-text-centered is-feature-reveal">
                            <div className="card-title">
                                <h4>Struggles</h4>
                            </div>
                            <div className="card-icon">
                                <img src={StrugglesIcon} alt="foo"></img>
                            </div>
                            <div className="card-text">
                                <p>Each struggle is a lesson designed by God to learn of Him.</p>
                            </div>
                            <div className="card-action">
                                <Link to="/struggle" className="button btn-align-md is-primary raised">Explore More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </section>

        <section className="section is-medium">
            <div className="container">
                <div className="title-wrapper has-text-centered">
                    <h2 className="title is-2">Discover the attributes of God.</h2>
                    <div className="divider is-centered"></div>
                </div>

                <div className="columns is-vcentered side-feature mt-60">
                    <div className="column is-4 is-offset-1">
                        <Icon style={{fill: styleMethods.getAttributeColor(this.state.attribute)}}></Icon>
                    </div>
                    <div className="column is-5 is-offset-1">
                        <h3 className="title is-3 mb-10 is-title-reveal is-capitalized">{this.state.attribute}</h3>
                        <p className="subtitle is-5 is-muted">{this.state.description}</p>
                        <div className="button-wrap">
                            <span className="button cta is-rounded is-primary raised">
                                <Link to={`/attributes/${this.state.attribute}`}>Learn More</Link>
                            </span>
                            <span className="button is-text has-text-primary" onClick={this.randomize}>Or Get Another</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="section is-medium has-background-image" style={{backgroundImage: `url(https://source.unsplash.com/g30P1zcOzXo/1600x900)`}} data-color="#4FC1EA" data-color-opacity=".6">
            <div className="overlay"></div>
            <div className="container">

                <div className="title-wrapper has-text-centered">
                    <h2 className="title is-2 light-text is-spaced">You are unique.</h2>
                    <h3 className="subtitle is-5 light-text">You have likely already used one of these personality tests to better understand yourself and others. Browse your personality type below to see how you most strongly reflect God.</h3>
                </div>

                <div className="content-wrapper homepage-personality">
                    <div className="columns is-vcentered">
                        <div className="column is-4">
                            <figure className="testimonial">
                                <blockquote>
                                    The Enneagram describes nine types using the numbers 1-9. Link directly to an attribute of God with your number or by reading the brief descriptions first.
                                </blockquote>
                                <div className="author">
                                    <img src={Face1} alt="foo"></img>
                                    <h5><Link to="/enneagram" className="link">Enneagram</Link></h5>
                                </div>
                            </figure>
                        </div>
                        <div className="column is-4">
                            <figure className="testimonial">
                                <blockquote>
                                    Myers-Briggs uses a 4-letter acronym, like INFJ or ESTP, which reflects introversion or extraversion, sensing or intuition, thinking or feeling, judging or perceiving.
                                </blockquote>
                                <div className="author">
                                    <img src={Face2} alt="foo"></img>
                                    <h5><Link to="/myersbriggs" className="link">Myers Briggs</Link></h5>
                                </div>
                            </figure>
                        </div>
                        <div className="column is-4">
                            <figure className="testimonial">
                                <blockquote>
                                DISC centers on four different personality traits: Dominance (D), Influence (I), Steadiness (S), and Conscientiousness (C). Pick your letter and discover God in you.
                                </blockquote>
                                <div className="author">
                                    <img src={Face3} alt="foo"></img>
                                    <h5><Link to="/disc" className="link">DISC</Link></h5>
                                </div>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
    )
  }
}

export default withRouter(Home);

