import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom"
import '../../styles/attribute.css'
import Grid from '../../components/grid'
import Testimonial from '../../components/testimonial'
import Hero from '../../components/hero'
import AttributeSidebar from "../../components/attSidebar";
import Quote from '../../components/quote'

class Creative extends Component {

    // componentDidMount() {
    //   window.scrollTo(0, 0);
    // }

    render() {
        return(
            <body className="attPage">
            <Hero title="Creative" subtitle="To make new from nothing" img="girl.png" />
            <div className="container is-fullhd has-text-left relativeMaybe" id="attributeContainer">
              <aside>
                <section id="sidebar">
                  <AttributeSidebar />
                </section>
              </aside>

              <main>
                <div className="attSection" id="definition">
                  <section>
                  <h1 className="title has-text-primary tracking-wide padded">Creative means to make something new.
                  </h1></section>
                  <p className="is-size-6 leading-normal padded">We love to watch new movies and dine in the newest restaurants. Our personal creativity can take many forms - noodling on a guitar, building a new deck, or adding our twist to Uncle Wayne’s chili recipe. Not only do we enjoy the newness, we often end up loving our creations.</p>
                  <p className="is-size-6 leading-normal padded">Creativity and newness can lead to a wonderful feeling of excitement, but it can also leave me wondering whether I am creative enough - whether I have significance in this big world.  It can also cause me to question my life’s purpose.</p>
                </div>

                <div className="attSection" id="emotion">
                <section>
                  <h1 className="title has-text-primary tracking-wide padded">What is something new that makes me excited?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">The world delivers so much newness, whether through people I meet or what I wear, drive or eat.  God, our Creator, is the ultimate source behind all this newness.  He also creates in each believer a new spirit which lets me see not only through my own eyes, but His as well - creating an excitement worthy of song!</p>
                  <br></br>
                  <Quote scripture="Oh sing to the LORD a new song; sing to the LORD, all the earth!
                  Sing to the LORD, bless his name; tell of his salvation from day to day.
                  Declare his glory among the nations, his marvelous works among all the peoples!
                  For great is the LORD, and greatly to be praised." reference="Psalm 96:1-6"/>
                </div>

                <div className="attSection" id="fear">
                <section>
                  <h1 className="title has-text-primary tracking-wide padded">How do I leave my own creative mark on this world?</h1>
                </section>
                  <p className="is-size-6 leading-normal padded">I should first realize that I have already created some kind of legacy (such as what, who and how I love). Then know that an ongoing fear of insignificance always points inward, when much of life is found outside ourselves.  In truth,  my most compelling significance will only be found through knowing and experiencing the One who created me.</p>
                  <br></br>
                  <Quote scripture="The end of the matter; all has been heard. Fear God and keep his commandments, for this is the whole duty of man." reference="Ecclesiastes 12:13" color="var(--teal)"/>
                </div>

                <div className="attSection" id="struggle">
                <section>
                  <h1 className="title has-text-primary tracking-wide padded">Why was I created?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">I struggle some days to have purpose and fulfillment. The Westminster Catechism describes the Creator’s purpose for our life succinctly: “Man’s chief end is to glorify God, and to enjoy him forever.“ To glorify God, I must first believe in Him, and then begin to know and love Him. And our ultimate joy and feeling of significance in this relationship comes when our will begins to align with the good He has planned for us.</p>
                  <br></br>
                  <Quote scripture="For I know the plans I have for you, declares the LORD, plans for welfare and not for evil, to give you a future and a hope." reference="Jeremiah 29:11" />
                </div>

                <div className="attSection" id="whoAmI">
                <section>
                  <Hero title="Only God can create something from absolutely nothing."></Hero>
                </section>
                  <p className="is-size-6 leading-normal padded">He created me and all things.  I am created in His image and thus have His desire to create - so my ability, ingredients, and impulse to create come not from myself, but from God.</p>
                  <br></br>
                  <Quote scripture="Through him all things were made, without him nothing was made that has been made." reference="John 1:3" />
                </div>

                <div className="attSection" id="biblicalChristianity">
                  <section>
                  <h1 className="title has-text-primary tracking-wide padded">Jesus made possible something completely new - to live “in Christ.”</h1></section>
                  <p className="is-size-6 leading-normal padded">Being “in Christ” means I believe that Jesus is actually God who died on the cross to pay the penalty for my sins and, in turn, provides me with His righteousness, allowing me to fellowship with God forever.  With this new relationship comes a completely different perspective to my life and my present circumstances, along with a magnified awareness and value for Creator God.</p>
                  <Quote scripture="Therefore, if anyone is in Christ, he is a new creation." reference="2 Corinthians 5:17" color="var(--teal)"/>
                </div>

                <div className="attSection" id="soWhat">
                <section>
                  <h1 className="title has-text-primary tracking-wide padded">So what do I do now?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">In humility and gratitude, give credit and appreciation to others who have made it possible for me to create, including our ultimate Creator. Ask: Who has helped me most in forming one of my creative endeavors?</p>
                  <Quote scripture="So, whether you eat or drink, or whatever you do, do all to the glory of God." reference="1 Corinthians 10:31" color="var(--teal)"/>
                </div>

                  <div className="attSection" id="prayer">
                  <section>
                  <h1 className="title has-text-primary tracking-wide padded">Prayer</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Creator God, thank you for making me a person with creative purpose. Forgive me for thinking I am the ultimate creator of things when I am really your creation. I am creative because I am of your image.  Help me to create to your glory alone.</p>
                  <Quote scripture="Through him all things were made, without him nothing was made that has been made." reference="John 1:3" color="var(--teal)"/>
                </div>

                <div className="attSection has-background-light" id="scienceAndHealth">
                <section>
                  <h1 className="title has-text-primary tracking-wide padded">Science does not rule out the potential of a Creator God</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">In fact, the current theory of the “Big Bang” aligns well with all matter being created with a spoken word from God. Evolution and/or creation of man is in much greater gridlock. Science camps on one end of the spectrum, seeking to answer all the “How” questions.  Christianity and the Bible occupy the other end, mostly seeking to answer “Who and Why.” Intelligent design theory sits squarely in the center, seeking the compatible middle ground.</p>
                  <p className="is-size-6 leading-normal padded">Big Bang theory and creation (Data from Wikipedia): “By the middle of the 20th century, cosmologists had developed two different theories to explain the creation of the universe. Some supported the steady-state theory, which states that the universe has always existed and will continue to survive without noticeable change. Others believed in the Big Bang theory, which states that the universe was created in a massive explosion-like event billions of years ago (later determined to be approximately 13.8 billion years).</p>
                  <p className="is-size-6 leading-normal padded">The discovery of cosmic microwave background radiation (CMB) in 1941 constitutes a major development in modern physical cosmology….. In 1964, US physicist Arno Penzias and radio-astronomer Robert Woodrow Wilson rediscovered the CMB…. and new measurements were accepted as important evidence for a hot early Universe (Big Bang theory) and as evidence against the rival steady state theory.[4] In 1978, Penzias and Wilson were awarded the Nobel Prize for Physics for their joint measurement.</p>
                  <p className="is-size-6 leading-normal padded">Evolutionary Beliefs and Creation (2/6/19 article from Pew Research): Roughly 1/3 of US adults believe humans have always existed in their current form (i.e. consistent with Biblical conservative creation account). Another 1/3 believe humans evolved over time, but that this process was guided by God or a higher power (i.e. consistent with a more liberal Biblical account or intelligent design theory). And 1/3 believe in evolution with no higher power role.</p>
                </div>

                <div className="attSection" id="history">
                <section>
                  <h1 className="title has-text-primary tracking-wide padded">Have we created life on our own yet?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Recent scientific advancement has created headlines like "Can We Create Life From Scratch?". The answer is no, at least for now. A "synthetic bacteria" was created in 2010 (by Venter), but that was introducing a synthetic DNA into an already living cell, and this cell was then able to replicate. But making the cell winds up being the hardest part.</p>
                  <p className="is-size-6 leading-normal padded">If this is ever done, it would be difficult to prove that God was not behind it.  After all, He is the author and sustainer of life, with physical life only being the lesser part of the story.  Spiritual life creation is much more important!</p>

                  <Grid />
                </div>

                <div className="attSection" id="liturgy" >
                <section>
                    <h1 className="title has-text-primary tracking-wide padded">"All Creatures of our God and King" - Francis of Assisi</h1>
                    </section>
                    <p className="is-size-6 leading-normal padded">"Let all things their creator bless,
                    And worship Him in humbleness,
                    O praise Him! Alleluia!
                    Praise, praise the Father, praise the Son,
                    And praise the Spirit, Three in One!" - Last verse</p>
                </div>

            </main>
            </div>
          </body>
        )
    }

}

export default withRouter(Creative);