import React, { Component } from "react";
import { withRouter } from "react-router-dom"
import '../../styles/attribute.css'
import Quote from '../../components/quote'
import styleMethods from "../../methods/styleMethods";
import BaseAttributeDetail from '../../modules/attributeDetail/baseAttributeDetail';

class Omnipresent extends Component {

    render() {
        return(
          <BaseAttributeDetail
            title="Omnipresent"
            subtitle="To exist everywhere"
            definition={
              <section>
                  <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("omnipresent")}}>Omnipresent means to exist everywhere.
                  </h1></section>
                  <p className="is-size-6 leading-normal padded"> We often desire to be in more than one place at one time.  We try to at least optimize what time and presence we have, yet still experience the much dreaded FOMO (Fear Of Missing Out).</p>
                  <p className="is-size-6 leading-normal padded">The desire to extend our experiences can take many forms - simple calendar optimization (often resulting in over-scheduling), social media sharing, video conferencing, real or virtual assistants.  All these can "extend" our physical presence and maximize our experience of the world. </p>
                  <p className="is-size-6 leading-normal padded">But I can experience loneliness even with others present.  How much I interact with those around me matters a lot, and how much I want to interact with those NOT around me can matter even more.  At times it may even seem that God is not with me - but He is. Always.</p>
              </section>
            }
            emotion={
              <section>
                <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("omnipresent")}}>I can feel lonely even while I am with other people.</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">A short-term spell of being alone can encourage me to strengthen the depth and breadth of my relationships, but long-term loneliness has been proven to be hazardous to both physical and mental health. A CDC survey several months into the COVID pandemic reported that {">"}40% of respondents had symptoms of anxiety or depression, with 26% indicating that they had started or increased substance use as a way to cope. The psalmist below presents a believer’s perspective - that God’s continuing presence provides positive guidance, companionship and security.  And this guidance always encourages me to love other people, which is an extremely helpful practice to combat loneliness.</p>
                  <br></br>
                  <Quote scripture="Where shall I go from your Spirit? Or where shall I flee from your presence? If I ascend to heaven, you are there! If I make my bed in Sheol, you are there! If I take the wings of the morning and dwell in the uttermost parts of the sea, even there your hand shall lead me, and your right hand shall hold me. If I say, ‘Surely the darkness shall cover me, and the light about me be night,’ even the darkness is not dark to you; the night is bright as the day, for darkness is as light with you." reference="Psalm 139:7-12" color="var(--teal)"/>                
              </section>
            }
            fear={
              <section>
                 <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("omnipresent")}}>How do I seek JoMO versus FoMO?</h1>
                </section>
                <p className="is-size-6 leading-normal padded">FoMO (Fear of Missing Out) was first identified by a marketing strategist in 1996 and is a pervasive apprehension that others might be having rewarding experiences from which one is absent. This social anxiety is characterized by a desire to stay continually connected with what others are doing.   (Wikipedia)</p>
                  <p className="is-size-6 leading-normal padded">FoMO's opposite, JoMO (Joy of Missing Out), is defined by the Urban Dictionary as, "You’re enjoying what you’re doing in the here and now and not on social media broadcasting or seeing what everybody else is doing."</p>
                  <p className="is-size-6 leading-normal padded">In Ecclesiastes, Solomon concludes that life is a gift from God with which to serve God and do good - and to actively seek joy even in what we may consider toil.  He does not tell me to seek joy in what I choose not to do or am not able to participate in.</p>
                  <br></br>
                  <Quote scripture="Behold, what I have seen to be good and fitting is to eat and drink and find enjoyment in all the toil with which one toils under the sun the few days of his life that God has given him, for this is his lot." reference="Ecclesiastes 5:18" color="var(--teal)"/>               
              </section>
            }
            struggle={
              <section>
                 <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("omnipresent")}}>It seems God is not with me right now.</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">In the midst of suffering, pain, sickness, sorrow, warfare, and natural disasters, it is hard to perceive a loving and merciful God simply watching it all go down.  I can deal with this apparent disconnect either by denying His presence or by trusting that God is present and has a good reason for allowing the difficulty.</p>
                  <br></br>

                  <Quote scripture=" 'Am I a God at hand,' declares the LORD, 'and not a God far away? Can a man hide himself in secret places so that I cannot see him?' declares the LORD. 'Do I not fill heaven and earth?' declares the LORD." reference="Jeremiah 23:23-24" color="var(--teal)"/>               
              </section>
            }
            whoAmI={
              <section>
                 <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("omnipresent")}}>Only God is omnipresent.</h1></section>
                  <p className="is-size-6 leading-normal padded">God is not the substance of things, but is transcendent over all things and is separate from His creation. Humans are not, and never will be, omnipresent.  Some classify attributes such as omnipresence as God's incommunicable attributes, meaning it will never be imparted on humans.  But having His image means I can still feel it in my desire.  Omnipresence does not mean we perceive God everywhere in the same manner.</p>
                  <br></br>
                  <Quote scripture="God is in heaven in regard of the manifestation of glory, in hell by the expression of his justice, in the earth by the discoveries of his wisdom, power, patience, and compassion, in his people by the monuments of his grace, and in all in regard of his substance." reference="Stephen Charnock" color="var(--teal)"/>               
              </section>
            }
            biblicalChristianity={
              <section>
                   <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("omnipresent")}}>Jesus is also omnipresent.</h1></section>
                  <p className="is-size-6 leading-normal padded">Jesus, as God, shares all of God’s attributes.  Jesus willingly limited Himself to his physical body while on earth, but then affirmed His omnipresence for eternity. His blood is the means by which God brings me near to Him. </p>

                  <Quote scripture="And behold, I (Jesus speaking) am with you always, to the end of the age." reference="Matthew 28:20" color="var(--teal)"/>
                  <Quote scripture="But now in Christ Jesus you who once were far off have been brought near by the blood of Christ." reference="Ephesians 2:13" color="var(--teal)"/>               
              </section>
            }
            soWhat={
              <section>
                 <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("omnipresent")}}>So what do I do now?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Acknowledge the presence of God at any given moment and consider what His presence brings.  Realize God is always very tangibly present in His Word.  "A man may hide God from himself, and yet he cannot hide himself from God." - William Secker (Puritan author)  <br></br>Ask: How have I recently called on God?</p>
                  <Quote scripture="The LORD is near to all who call on him, to all who call on him in truth." reference="Psalm 145:18" color="var(--teal)"/>               
              </section>
            }
            prayer={
              <section>
                   <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("omnipresent")}}>Prayer</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">God, You are with me always.  Remind me of this when I feel like you are not present.  Help me to be aware of Your image in me, as well as Your Spirit.</p>
                  <Quote scripture="Draw near to God, and he will draw near to you." reference="James 4:8a" color="var(--teal)"/>               
              </section>
            }
            scienceAndHealth={
              <section>
                 <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("omnipresent")}}>Will I ever be able to be in two places at once?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">We’ve known for some time now that electrons can exist in more than one spot, so when will humans be able to do that?  Current research recently expanded the size and caused a 2,000-atom molecule to be two places at once.  No, it is not considered likely that humans will ever be able to exist in more than one location, but it should open the mind of an unbelieving physicist to the potential for an omnipresent God.</p>
                  <p className="is-size-6 leading-normal padded">“About 80 years ago, scientists discovered that it is possible to be in two locations at the same time—at least for an atom or a subatomic particle, such as an electron. For such tiny objects, the world is governed by a madhouse set of physical laws known as quantum mechanics. At that size range, every bit of matter and energy exists in a state of blurry flux, allowing it to occupy not just two locations but an infinite number of them simultaneously.” - Discover magazine, June 2005</p>               
              </section>
            }
            attHistory={
              <section>
                 <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("omnipresent")}}>How has God revealed His Presence throughout history?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Although God exists everywhere at all times, a clear understanding of who He is has not.  Even after Jesus physically revealed Himself on earth, His Presence was continually revealed through the Bible and Holy Spirit, in partnership with very flawed, yet faithful, believers ever since.</p>
                  <p className="is-size-6 leading-normal padded">Beginning with Pentecost, the Holy Spirit used the vastness of Rome to play a key role in widely dispersing the apostles and early believers and their message - first through persecution, and then by formal adoption of the clear gospel message (Constantine in 313), resulting in the Nicene and Athanasian creeds and formal Biblical canon (all in 300s). But as Rome fell, the message of light was again dispersed and carried through the Dark and Medieval years by monastic pockets of believers (notably St. Patrick in Ireland), faithfully tending to the written scriptures, even if not in practice. Later the printing press physically spread the Word, resulting in the Reformation. From there, the gospel message has been revealed throughout the entire globe.</p>               
              </section>
            }
            liturgy={
              <section>
                 <section>
                    <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("omnipresent")}}>"God is Everywhere" - Ulysses Phillips</h1>
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
              </section>
            }
          />
        )
    }

}

export default withRouter(Omnipresent);