import React, { Component } from "react";
import { withRouter } from "react-router-dom"
import '../styles/personality.css'
import PersonalityTestList from "../components/personality/personalityTestList";
import Hero from '../components/hero'

class Personality extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

      render() {
          return(
            <div className='page'>
              <Hero title="Browse by personality" img="girl.png" />
              <PersonalityTestList />
            </div>
          )
      }

}

export default withRouter(Personality);