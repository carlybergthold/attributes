import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom"
import '../../styles/attribute.css'
import Grid from '../../components/grid'
import Testimonial from '../../components/testimonial'
import Hero from '../../components/hero'
import AttributeSidebar from "../../components/attSidebar";

class Joyful extends Component {

    componentDidMount() {
      window.scrollTo(0, 0);
    }

    render() {
        return(
            <body className="attPage">
            <Hero title="Joyful" subtitle="To be cheerful and glad" img="girl.png" />
            <div className="container is-fullhd has-text-left relativeMaybe" id="attributeContainer">
              <aside>
                <section id="sidebar">
                  <AttributeSidebar />
                </section>
              </aside>

              <main>
                <div className="attSection" id="definition">
                  <section>
                  <h1 className="title has-text-primary tracking-wide padded">Joyful means to be cheerful and glad.
                  </h1></section>
                  <p className="is-size-6 leading-normal padded">It feels the same as happiness, so it is always most sought-after, but often only fleetingly achieved, and most sorely missed when not present.  The key is what affection fuels this good feeling. Happiness is generated by getting what we want - joy is produced by truly wanting what we already have.</p>
                  <p className="is-size-6 leading-normal padded">Who doesn’t want to experience joy and happiness?  I will go to incredible effort just so I can be happy - but then it can go away in an instant.  I fear I will never be fully happy, at least not for any long stretch of time. It seems there is always something on the horizon that will mess it all up!</p>
                </div>

                <div className="attSection" id="emotion">
                <section>
                  <h1 className="title has-text-primary tracking-wide padded">What will really make me happy?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Supreme Court Justice Anthony Kennedy noted that in modern times there is a “hedonistic component” to the definition of happiness, for the framers of the Declaration of Independence happiness meant that “feeling of self-worth and dignity you acquire by contributing to your community and to its civic life.”  This definition points to the need for something outside of me to attain happiness within me. The psalmist describes joy and gladness as coming from my “Lord”, who gives an “inheritance”, “counsel” and His very “presence” forever.  This perspective and reality can brighten even the darkest of circumstances.</p>
                  <br></br>
                  <Testimonial quote="The LORD is my chosen portion and my cup; you hold my lot.  The lines have fallen for me in pleasant places; indeed, I have a beautiful inheritance.  I bless the LORD who gives me counsel; in the night also my heart instructs me.  I have set the LORD always before me; because he is at my right hand, I shall not be shaken.  Therefore my heart is glad, and my whole being rejoices; my flesh also dwells secure.  For you will not abandon my soul to Sheol, or let your holy one see corruption.  You make known to me the path of life; in your presence there is fullness of joy; at your right hand are pleasures forevermore." reference="Psalm 16:5-11" color="var(--teal)"/>
                </div>

                <div className="attSection" id="fear">
                <section>
                  <h1 className="title has-text-primary tracking-wide padded">Why is my happiness so fleeting?</h1>
                </section>
                  <p className="is-size-6 leading-normal padded">The staying power of happiness again depends upon its source.  If I rely upon circumstances (entertainment, bank account, right relationships, etc.), my happiness will come and go.  If I rely upon God and His word, I always have a reason for joy and happiness.  Also, my present joy recognizes that this world cannot fully provide me with what only heaven ultimately will.</p>
                  <br></br>
                  <Testimonial quote="And the disciples were filled with joy and with the Holy Spirit." reference="Acts 13:52" color="var(--teal)"/>
                </div>

                <div className="attSection" id="struggle">
                <section>
                  <h1 className="title has-text-primary tracking-wide padded">How can I truly be joyful in all things?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">True joy that stands up in all circumstances comes only from God.  Jesus explains in John 15 that He is the Vine and I am a branch of the Vine.  Just as sap moves from a tree to a branch, life-giving joy enters my life only through an intimate connection - a relationship with God based on love and obedience.  “Lack of joy leads to sin. And, conversely, sin leads to a lack of joy.” - Bob Deffinbaugh in “Let Me See Thy Glory”.</p>
                  <br></br>
                  <Testimonial quote="These things I have spoken to you, that my joy may be in you, and that your joy may be full." reference=" John 15:11" color="var(--teal)"/>
                </div>

                <div className="attSection" id="whoAmI">
                <section>
                  <h1 className="title has-text-primary tracking-wide padded">Only God is the real source of joy.</h1></section>
                  <p className="is-size-6 leading-normal padded">As Creator, He designed me to experience joy through an affection of Him.  Seeking beauty and pleasure apart from God may generate the same feeling, but it cannot be sustained. If my primary affection is other than God, it will resemble an addiction, having diminished pleasure over time. “Affection is responsible for nine-tenths of whatever solid and durable happiness there is in our lives.” - C. S. Lewis</p>
                  <br></br>
                  <Testimonial quote="I always thought of the joy referred to here as the joy which God gives, and so it is. I now realize this does not say quite enough. It is also the joy which God possesses and experiences. God gives us joy because He is joyful. He is the source of joy, just as He is the source of love, of truth, of mercy, and so on. Joy is both a description of God and a description of what He gives." reference="Bob Deffinbaugh in “Let Me See Thy Glory”" color="var(--teal)"/>
                </div>

                <div className="attSection" id="biblicalChristianity">
                  <section>
                  <h1 className="title has-text-primary tracking-wide padded">Jesus was driven to the cross by joy.</h1></section>
                  <p className="is-size-6 leading-normal padded">Not for God’s joy because He already had an infinite amount.  But for my joy - that which I experience from a reconciled relationship with God.</p>
                  <Testimonial quote="Looking to Jesus, the founder and perfecter of our faith, who for the joy that was set before him endured the cross…" reference="Heb 12:2a" color="var(--teal)"/>
                </div>

                <div className="attSection" id="soWhat">
                <section>
                  <h1 className="title has-text-primary tracking-wide padded">So what do I do now?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Recognize that the source of all pleasure is God.  Seek the pleasure to be found in His word and the beauty of Christ in the world. “Christian joy is a good feeling in the soul, produced by the Holy Spirit, as he causes us to see the beauty of Christ in the word and in the world.” - John Piper.  Ask: What gives me pleasure?  What is its ultimate source?</p>
                  <Testimonial quote="Restore to me the joy of your salvation, and uphold me with a willing spirit." reference="Ps 51:12" color="var(--teal)"/>
                </div>

                  <div className="attSection" id="prayer">
                  <section>
                  <h1 className="title has-text-primary tracking-wide padded">Prayer</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Lord, let me joyfully adore you.  Thank you for all the pleasures in this world - and remind me constantly that they are but gifts from you.</p>
                  <Testimonial quote="But understand this, that in the last days there will come times of difficulty. For people will be lovers of self, lovers of money, proud, arrogant, abusive, disobedient to their parents, ungrateful, unholy, heartless, unappeasable, slanderous, without self-control, brutal, not loving good, treacherous, reckless, swollen with conceit, lovers of pleasure rather than lovers of God, having the appearance of godliness, but denying its power." reference="2 Tim 3:1-5a" color="var(--teal)"/>
                </div>

                <div className="attSection has-background-light" id="scienceAndHealth">
                <section>
                  <h1 className="title has-text-primary tracking-wide padded">How does beauty and joy connect?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Christ’s beauty can be found only in the understanding of Who He is. But once found, it can see seen everywhere.  Before salvation, a person sees Jesus in a negative to neutral light - maybe, at best, a good teacher to consider. After salvation, his beauty shines brighter with each deep gaze. And as beauty increases, so does the resulting pleasure and joy.</p>
                  <p className="is-size-6 leading-normal padded">“…the most important part of the brain for aesthetic appraisal was the anterior insula, a part of the brain that sits within one of the deep folds of the cerebral cortex. This was a surprise. The anterior insula is typically associated with emotions of negative quality, such as disgust and pain, making it an unusual candidate for being the brain’s “aesthetic center.” Why would a part of the brain known to be important for the processing of pain and disgust turn out to the most important area for the appreciation of art?"</p>
                  <p className="is-size-6 leading-normal padded">Our interpretation of the result comes from cognitive theories of emotion that argue that aesthetic processing is, at its core, the appraisal of the value of an object -- in other words, an assessment of whether an object is ‘good for me’ or ‘bad for me.’ ” - Scientific American, 9/27/11 article “The Neuroscience of Beauty”</p>
                  <p className="is-size-6 leading-normal padded">“Beauty is in the eye of the beholder” - Margaret Wolfe Hungerford, 1878</p>
                </div>

                <div className="attSection" id="history">
                <section>
                  <h1 className="title has-text-primary tracking-wide padded">How did Aristotle define happiness?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Aristotle defined happiness as “the meaning and the purpose of life, the whole aim and end of human existence”.  He believed in god, but as a god derived from reason versus revelation.  Even so, he understood the importance of practicing virtue over much time to produce the greatest happiness an individual could have. One of his key observances was the importance of having a loving relationship based on virtuous, shared principles.  The Bible describes such a relationship between God and man based on faith in Christ.</p>
                  <p className="is-size-6 leading-normal padded">“According to Aristotle, happiness consists in achieving, through the course of a whole lifetime, all the goods — health, wealth, knowledge, friends, etc. — that lead to the perfection of human nature and to the enrichment of human life. This requires us to make choices, some of which may be very difficult. Often the lesser good promises immediate pleasure and is more tempting, while the greater good is painful and requires some sort of sacrifice……</p>
                  <p className="is-size-6 leading-normal padded">Aristotle would be strongly critical of the culture of ‘instant gratification’ which seems to predominate in our society today. In order to achieve the life of complete virtue, we need to make the right choices, and this involves keeping our eye on the future, on the ultimate result we want for our lives as a whole. We will not achieve happiness simply by enjoying the pleasures of the moment. Unfortunately, this is something most people are not able to overcome in themselves. As he laments, ‘the mass of mankind are evidently quite slavish in their tastes, preferring a life suitable to beasts’.</p>
                  <p className="is-size-6 leading-normal padded">Aristotle believes that the love of friendship is greater than this because it can be enjoyed as it is. ‘Being loved, however, people enjoy for its own sake, and for this reason it would seem it is something better than being honoured and that friendship is chosen for its own sake’. The emphasis on enjoyment here is noteworthy: a virtuous friendship is one that is most enjoyable since it combines pleasure and virtue together, thus fulfilling our emotional and intellectual natures.” - Aristotle, in “The Pursuit of Happiness”.org</p>
                </div>

                <div className="attSection" id="liturgy" >
                <section>
                    <h1 className="title has-text-primary tracking-wide padded">Joyful, Joyful, We Adore Thee - Henry J. van Dyke (Adoration of God leads to the light of joy.)</h1>
                    </section>
                    <p className="is-size-6 leading-normal padded">“Joyful, joyful, we adore Thee, God of glory, Lord of love; Hearts unfold like flow’rs before Thee, Op’ning to the sun above. Melt the clouds of sin and sadness; Drive the dark of doubt away; Giver of immortal gladness, Fill us with the light of day!” - 1st verse</p>
                </div>

            </main>
            </div>
          </body>
        )
    }

}

export default withRouter(Joyful);