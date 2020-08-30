import React from 'react';
import { withRouter, Link } from "react-router-dom"
import '../styles/home.css'
import attArray from '../data/attributeArray'
import PersonalityTestList from '../components/personality/personalityTestList'
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

class Home extends React.Component {

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
    const Icon = this.components[this.state.attribute]

    return(
      <>
       <div className="homepage">
        <section className="section homepage-welcome">
          <div className="container welcome-container">
            <h1 className="title welcome-title">Who is God?</h1>
            <h2 className="subtitle welcome-subtitle">
            You're made in His image. This image is blurred, but we all have evidence of it in ourselves - take the quiz to find how your life reflects God.
            </h2>
            <button className="button is-large splash-btn" onClick={() => this.props.history.push("/quiz")}>
              Take the Quiz</button>
          </div>
        </section>

        <section className="section homepage-attributes">
          <div className="container left">
            <h1 className="title">There are many ways to relate attributes to your life.</h1>
            <br></br>

            <div className="tile is-ancestor">
              <div className="tile">
                <div className="tile">
                  <div className="tile is-parent is-vertical is-6">
                    <article className="tile is-child notification is-primary">
                      <Link to="/personality">Personality</Link>
                    </article>
                    <article className="tile is-child notification is-warning">
                      <Link to="/emotion">Emotion</Link>
                    </article>
                  </div>
                  <div className="tile is-parent is-vertical is-6">
                    <article className="tile is-child notification is-primary">
                      <Link to="/fear">Fear</Link>
                    </article>
                    <article className="tile is-child notification is-warning">
                      <Link to="/struggle">Struggle</Link>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container right">
          <div className="card card-attribute">
              <div className="card-image">
                <figure className="image">
                  <Icon id="homepage-svg" />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content card-title">
                    <p className="title is-4">{this.state.attribute}</p>
                  </div>
                </div>
                <div className="content card-desc">
                {this.state.description}
                <br></br>
                <Link to={`/attributes/${this.state.attribute}`}>Read More</Link>
                  </div>
              </div>
            </div>
            <button className="button is-primary" onClick={this.randomize}>Get Another</button>
          </div>
        </section>

        <section className="section homepage-personality">
        <h1 className="title">You are unique.</h1>
        <h2 className="subtitle">
            Personality tests are a helpful way to understand yourself and others better. Browse the personality types below to see how your results reflect God.
        </h2>
          <PersonalityTestList />
        </section>
        </div>
        </>
    )
  }
}

export default withRouter(Home);

