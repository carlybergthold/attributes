import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom"
import '../../styles/attribute.css'
import Grid from '../../components/grid'
import Testimonial from '../../components/testimonial'
import Omnipresent from '../../images/attributeIcons/Omnipresent.png'
import Hero from '../../components/hero'
import AttributeSidebar from "../../components/attSidebar";

class Omnipresent extends Component {

    componentDidMount() {
      window.scrollTo(0, 0);
    }

    render() {
        return(
            <body className="attPage">
            <Hero title="Omnipresent" subtitle="To exist everywhere." img="girl.png" />
            <div className="container is-fullhd has-text-left relativeMaybe" id="OmnipresentContainer">
              <aside>
                <section id="sidebar">
                  <AttributeSidebar />
                </section>
              </aside>

              <main>
                <div className="attSection" id="definition">
                  <section>
                  <h1 className="title has-text-info tracking-wide padded">Omnipresent means to exist everywhere.
                  </h1></section>
                  <p className="is-size-6 leading-normal padded"> We often desire to be in more than one place at one time.  We try to at least optimize what time and presence we have, yet still experience the much dreaded FOMO (Fear Of Missing Out).</p>
                  <p className="is-size-6 leading-normal padded">The desire to extend our experiences can take many forms - simple calendar optimization (often resulting in over-scheduling), social media experience sharing, skyping, real or virtual assistants.  All these can "extend" our physical presence and maximize our experience of the world. </p>
                  <p className="is-size-6 leading-normal padded">I can experience loneliness even with others present.  How much I interact with those around me matters a lot - and how much I want to interact with those NOT around me can matter even more.  It may really seem, at times, that God is not with me - but He is.</p>
                </div>

                <div className="attSection" id="emotion">
                <section>
                  <h1 className="title has-text-info tracking-wide padded">I can feel lonely even while I am with other people.</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">A short-term spell of being alone can encourage me to strengthen the depth and breadth of my relationships, but long-term loneliness has been proven to be hazardous to both physical and mental health. The psalmist below presents a believer’s perspective - that God’s continuing presence provides positive guidance and security.  And this guidance always encourages me to love other people, which is extremely helpful to combat loneliness.</p>
                  <br></br>
                  <Testimonial quote="Where shall I go from your Spirit? Or where shall I flee from your presence? If I ascend to heaven, you are there! If I make my bed in Sheol, you are there! If I take the wings of the morning and dwell in the uttermost parts of the sea, even there your hand shall lead me, and your right hand shall hold me. If I say, ‘Surely the darkness shall cover me, and the light about me be night,’ even the darkness is not dark to you; the night is bright as the day, for darkness is as light with you." reference="Psalm 139:7-12" color="var(--teal)"/>
                </div>

                <div className="attSection" id="fear">
                <section>
                  <h1 className="title has-text-info tracking-wide padded">How do I seek JoMO versus FoMO?</h1>
                </section>
                  <p className="is-size-6 leading-normal padded">FoMO (Fear of Missing Out) was first identified by a marketing strategist in 1996 and is "a pervasive apprehension that others might be having rewarding experiences from which one is absent". This social anxiety is characterized by "a desire to stay continually connected with what others are doing".   Wikipedia</p>
                  <p className="is-size-6 leading-normal padded">FoMO's opposite, JoMO (Joy of Missing Out), is defined by the Urban Dictionary as "You’re enjoying what you’re doing in the here and now and not on social media broadcasting or seeing what everybody else is doing."</p>
                  <p className="is-size-6 leading-normal padded">In Ecclesiastes, Solomon concludes that life is a gift from God with which to serve God and do good - and to actively seek joy even in what we may consider toil.  He does not tell me to seek joy in what I choose not to do or am not able to participate in.</p>
                  <br></br>
                  <Testimonial quote="Behold, what I have seen to be good and fitting is to eat and drink and find enjoyment in all the toil with which one toils under the sun the few days of his life that God has given him, for this is his lot." reference="Ecclesiastes 5:18" color="var(--teal)"/>
                </div>

                <div className="attSection" id="struggle">
                <section>
                  <h1 className="title has-text-info tracking-wide padded">It seems God is not with me right now.</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">In the midst of suffering, pain, sickness, sorrow, warfare, and other natural disasters, it is hard to perceive a loving and merciful God simply watching it all go down.  I can deal with this apparent disconnect by denying His presence or by trusting that God is present and has a reason for allowing the difficulty.</p>
                  <br></br>
                  <Testimonial quote=" 'Am I a God at hand,' declares the LORD, 'and not a God far away? Can a man hide himself in secret places so that I cannot see him?' declares the LORD. 'Do I not fill heaven and earth?' declares the LORD." reference="Jeremiah 23:23-24" color="var(--teal)"/>
                </div>

                <div className="attSection" id="whoAmI">
                <section>
                  <h1 className="title has-text-info tracking-wide padded">Only God is omnipresent.</h1></section>
                  <p className="is-size-6 leading-normal padded">God is not the substance of things, but is transcendent over all things and is separate from His creation. Humans are not, and never will be, omnipresent.  Some classify attributes such as omnipresence as God's incommunicable attributes, meaning it will never be imparted on humans.  But having His image means I can still feel it in my desire.  Omnipresence does not mean God is everywhere in the same manner.</p>
                  <br></br>
                  <Testimonial quote="God is in heaven in regard of the manifestation of glory, in hell by the expression of his justice, in the earth by the discoveries of his wisdom, power, patience, and compassion, in his people by the monuments of his grace, and in all in regard of his substance." reference="Stephen Charnock" color="var(--teal)"/>
                </div>

                <div className="attSection" id="biblicalChristianity">
                  <section>
                  <h1 className="title has-text-info tracking-wide padded">Jesus is also omnipresent.</h1></section>
                  <p className="is-size-6 leading-normal padded">Jesus, as God, shares all of God’s attributes.  Jesus willingly limited Himself to his physical body while on earth, but then affirmed His omnipresence for eternity. His blood is the means by which I am brought near to God.  God can be very close to me while I am yet far from Him.</p>
                  <Testimonial quote="And behold, I (Jesus speaking) am with you always, to the end of the age." reference="Matthew 28:20" color="var(--teal)"/>
                  <Testimonial quote="But now in Christ Jesus you who once were far off have been brought near by the blood of Christ." reference="Ephesians 2:13" color="var(--teal)"/>
                </div>

                <div className="attSection" id="soWhat">
                <section>
                  <h1 className="title has-text-info tracking-wide padded">So what do I do now?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Acknowledge the presence of God at any given moment and consider what His presence brings.  Realize God is always very tangibly present in His Word.  "A man may hide God from himself, and yet he cannot hide himself from God." - William Secker (Puritan author)  Ask: How have I recently called on God?</p>
                  <Testimonial quote="The LORD is near to all who call on him, to all who call on him in truth." reference="Psalm 145:18" color="var(--teal)"/>
                </div>

                  <div className="attSection" id="prayer">
                  <section>
                  <h1 className="title has-text-info tracking-wide padded">Prayer</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">God, You are with me always.  Remind me of this when I feel like you are not present.  Help me to feel Your image in me, as well as Your Spirit.</p>
                  <Testimonial quote="Draw near to God, and he will draw near to you." reference="James 4:8a" color="var(--teal)"/>
                </div>

                <div className="attSection has-background-light" id="scienceAndHealth">
                <section>
                  <h1 className="title has-text-info tracking-wide padded">Will I ever be able to be in two places at once?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">We’ve known for some time now that electrons can exist in more than one spot, so when will humans be able to do that?  Current research recently expanded the size and caused a 2,000-atom molecule to be two places at once.  No, it is not considered likely that humans will ever be able to exist in more than one location, but it should open the mind of an unbelieving physicist to the potential for an omnipresent God.</p>
                  <p className="is-size-6 leading-normal padded">“About 80 years ago, scientists discovered that it is possible to be in two locations at the same time—at least for an atom or a subatomic particle, such as an electron. For such tiny objects, the world is governed by a madhouse set of physical laws known as quantum mechanics. At that size range, every bit of matter and energy exists in a state of blurry flux, allowing it to occupy not just two locations but an infinite number of them simultaneously.” - Discover magazine, June 2005</p>
                  <p className="is-size-6 leading-normal padded">“Giant molecules can be in two places at once, thanks to quantum physics. That's something that scientists have long known is theoretically true based on a few facts: Every particle or group of particles in the universe is also a wave — even large particles, even bacteria, even human beings, even planets and stars. And waves occupy multiple places in space at once. So any chunk of matter can also occupy two places at once. Physicists call this phenomenon "quantum superposition," and for decades, they have demonstrated it using small particles.  But in recent years, physicists have scaled up their experiments, demonstrating quantum superposition using larger and larger particles. Now, in a paper published Sept. 23 in the journal Nature Physics, an international team of researchers has caused molecule made up of up to 2,000 atoms to occupy two places at the same time.” - 10/6/19 article in “space”.com</p>
                </div>

                <div className="attSection" id="history">
                <section>
                  <h1 className="title has-text-info tracking-wide padded">How has God revealed His Presence throughout history?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Although God exists everywhere at all times, a clear understanding of who He is has not.  Even after Jesus was physically revealed on earth, He chose the means of further spreading this gospel message to be the Holy Spirit and the Bible, working together through faithful believers to bring this understanding to those who will receive it.</p>
                  <p className="is-size-6 leading-normal padded">Beginning with Pentecost, the Holy Spirit used the vastness of Rome to play a key role in widely dispersing the apostles and early believers' message - first through persecution, and then by formal adoption of the clear gospel message (Constantine in 313), resulting in the Nicene and Athanasian creeds and formal Biblical canon (all in 300s). But as Rome fell, the light was again dispersed and carried through the Dark and Medieval years by monastic pockets of believers (notably St. Patrick in Ireland), faithfully tending to the written scriptures, even if not in practice. It was then the printing press physically spread the Word, resulting in the Reformation. From there, the gospel message has permeated the entire globe.</p>
                </div>

                <div className="attSection" id="liturgy" >
                <section>
                    <h1 className="title has-text-info tracking-wide padded">"God is Everywhere" - Ulysses Phillips</h1>
                    </section>
                    <p className="is-size-6 leading-normal padded">"See, the Lord hath made us by His mighty pow’r,<br></br>
And He watches o’er us every day and hour;<br></br>
This we do remember when we kneel in prayer,<br></br>
God is up in heaven, God is everywhere.<br></br>
Refrain:<br></br>
  God is everywhere, yes, God is everywhere,<br></br>
  God is in the valley, God is in the air;<br></br>
  God is in the mountain, God is in the sea,<br></br>
  Anywhere we may go, there God will be.<br></br>

Nothing can we hide from His all-seeing eye,<br></br>
Whether on the land, or in the sea or sky;<br></br>
Darkness cannot hide us from His blessed face,<br></br>
For His holy presence dwells in every place.<br></br><br></br>

All our words and thoughts are to Him fully known,<br></br>
We shall surely reap the deeds that we have sown;<br></br>
From Thy holy presence we can never flee,<br></br>
For the day and night are both the same with Thee.<br></br><br></br>

Look down in our hearts, Lord, let us see today<br></br>
If there should be in us any wicked way;<br></br>
Help us ever serve Thee with a Godly fear,<br></br>
Help us know that Thou art present everywhere."</p>
                </div>

            </main>
            </div>
          </body>
        )
    }

}

export default withRouter(Omnipresent);