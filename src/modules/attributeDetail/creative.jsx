import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom"
import '../../styles/attribute.css'
import Grid from '../../components/grid'
import Testimonial from '../../components/testimonial'
import creative from '../../images/attributeIcons/creative.png'
import Hero from '../../components/hero'
import AttributeSidebar from "../../components/attSidebar";

class Attribute extends Component {

    constructor(props){
      super(props);

      this.state = {
        showHide: 'hidden'
      }
    }

    componentDidMount() {
      window.scrollTo(0, 0);
    }

    render() {
        return(
            <body className="attPage">
            <Hero title="Creative" subtitle="To make new from nothing" img="girl.png" />
            <div className="container relativeMaybe" id="creativeContainer">
              {/* <section id='sidebar' className='relativeMaybe'>
              <button className="button" id="exploreAttBtn" onClick={this.toggle}>Explore</button>
                <Sidebar showHide={this.state.showHide} />
              </section> */}
              <aside>
                <section id="sidebar">
                  <AttributeSidebar />
                </section>
              </aside>

              <main>
                <div className="attSection" id="definition">
                  <section>
                  <h1 className="title has-text-info tracking-wide">Creative means to make something new.
                  </h1></section>
                  <p className="is-size-6 leading-normal padded">We love to watch new movies and eat in the newest restaurants. Our personal creativity may not require a patent or copyright - it could be doodling on a guitar, adding our twist to Uncle Wayne’s chili recipe or building a new deck. We love that special act of creating and usually also love what we made.</p>

                  <p>The US Patent office handles almost 600,000 application per year.  The US Copyright Office addressed another 600,000 applications to protect specific publications.  Globally there are about 14,000,000 trademarks in force.  Much effort is expended to protect this creativity of ours!</p>
                  <p>Only God can create something from absolutely nothing.  He is the Creator of us and of all things.  We are created in His image and thus we have His desire to create - so both our ability and impulse to create come not from ourselves, but from God.</p>
                  <br></br>
                  <br></br>
                  <Testimonial quote="Through him all things were made, without him nothing was made that has been made." reference="John 1:3" color="var(--teal)"/>
                </div>

                <div className="attSection" id="biblicalChristianity">
                <section>
                  <h1 className="title has-text-info tracking-wide">What is Biblical Christianity?
                </h1></section>
                  <p className="is-size-6 leading-normal padded">Jesus made possible something completely new when He died on the cross. To those who are “in Him” -i.e. believes in His work on the cross- He removes the penalty of sin and provides a righteousness which allows fellowship with God forever.  With this newness comes a completely different perspective to life and our present circumstances, along with a magnified awareness and value for our Creator God.</p>
                </div>

                <div className="attSection doubleSided" id="prayer">
                <section>
                <img src={creative} className="heroImage"></img>
                  <h1 className="title has-text-info tracking-wide">Prayer
                  </h1>
                  <p className="is-size-6 leading-normal padded">Creator God, thank you for making me a person with creative purpose.  Forgive me for thinking I am the ultimate creator of things when I am really your creation. I am creative because I am of your image.  Help me to create to your glory alone.</p>
                </section>

                <section>
                <img src={creative} className="heroImage"></img>
                  <h1 className="title has-text-info tracking-wide">Thought
                  </h1>
                  <p className="is-size-6 leading-normal padded">In humility and gratitude, give credit and appreciation to others who have made it possible for me to create, including our ultimate Creator. Ask: Who has helped me most in forming one of my creative endeavors?</p>
                  </section>
                </div>

                <Testimonial quote="Therefore, if anyone is in Christ, he is a new creation." reference="2 Cor 5:17" color="var(--teal)"/>

                <div className="attSection has-background-light" id="scienceAndHealth">
                <section className="has-text-centered">
                  <h1 className="title has-text-info tracking-wide">Science and Health</h1>
                </section>
                  <p className="is-size-6 leading-normal padded">Science does not rule out the potential of a Creator God.  In fact, the current theory of the “Big Bang” aligns well with all matter being created with a spoken word from God.  Evolution and/or creation of man is in much greater gridlock, with intelligent design theory at the center, science on one end mostly seeking to answer the “How” questions, and Christianity and the Bible on the other end mostly seeking to answer “Why”. Big Bang theory and creation (Data from Wikipedia): “By the middle of the 20th century, cosmologists had developed two different theories to explain the creation of the universe. Some supported the steady-state theory, which states that the universe has always existed and will continue to survive without noticeable change. Others believed in the Big Bang theory, which states that the universe was created in a massive explosion-like event billions of years ago (later determined to be approximately 13.8 billion years)…..The discovery of cosmic microwave background radiation (CMB) in 1941 constitutes a major development in modern physical cosmology….. In 1964, US physicist Arno Penzias and radio-astronomer Robert Woodrow Wilson rediscovered the CMB…. and new measurements were accepted as important evidence for a hot early Universe (big bang theory) and as evidence against the rival steady state theory.[4] In 1978, Penzias and Wilson were awarded the Nobel Prize for Physics for their joint measurement.”Evolutionary Beliefs and Creation (2/6/19 article from Pew Research): Roughly 1/3 of US adults believe humans have always existed in their current form (i.e. consistent with Biblical conservative creation account).  Another 1/3 believe humans evolved over time, but that this process was guided by God or a higher power (i.e. consistent with a more liberal Biblical account or intelligent design theory).  And 1/3 believe in evolution with no higher power role. "</p>
                </div>

                <div className="attSection" id="history">
                  <section className="has-text-centered">
                    <h1 className="title has-text-info tracking-wide">History</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">	When and how did life begin?  Can we produce new life using science?   If this is ever done, it would be difficult to prove that God was not behind it.  After all, He is the author and sustainer of life, with physical life only being the lesser part of the story.  Spiritual life creation is much more important!	"Recent scientific advancement has created headlines like "Can We Create Life From Scratch?".  The answer is no, at least for now.  A "synthetic bacteria" was created in 2010 (by Venter), but that was introducing a synthetic DNA into an already living cell, and this cell was able to replicate.  But making the cell winds up being the hardest part:</p>

                  <Grid />
                  <Testimonial quote="Oh sing to the LORD a new song; sing to the LORD, all the earth!
                  Sing to the LORD, bless his name; tell of his salvation from day to day.
                  Declare his glory among the nations, his marvelous works among all the peoples!
                  For great is the LORD, and greatly to be praised; he is to be feared above all gods.
                  For all the gods of the peoples are worthless idols, but the LORD made the heavens.
                  Splendor and majesty are before him; strength and beauty are in his sanctuary." reference="Psalm 96:1-6" color="var(--teal)"/>
                </div>

                <div className="attSection" id="liturgy" >
                  <section className="has-text-centered">
                    <h1 className="title has-text-info tracking-wide">Liturgy/song</h1>
                  </section>
                    <p className="is-size-6 leading-normal padded">"All Creatures Of Our God And King" - Francis of Assisi	"Let all things their creator bless,
                    And worship Him in humbleness,
                    O praise Him! Alleluia!
                    Praise, praise the Father, praise the Son,
                    And praise the Spirit, Three in One! - Last verse"</p>
                </div>
            </main>
            </div>
          </body>
        )
    }

}

export default withRouter(Attribute);