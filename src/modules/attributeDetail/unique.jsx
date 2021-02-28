import React, { Component } from "react";
import { withRouter } from "react-router-dom"
import '../../styles/attribute.css'
import Hero from '../../components/hero'
import AttributeSidebar from "../../components/attSidebar";
import Quote from '../../components/quote'
import styleMethods from "../../methods/styleMethods";

class Unique extends Component {

    // componentDidMount() {
    //   window.scrollTo(0, 0);
    // }

    render() {
        return(
            <body className="attPage">
            <Hero title="Unique" subtitle="To be without equal" icon="unique" />
            <div className="container is-fullhd has-text-left relativeMaybe" id="attributeContainer">
              <aside className="has-background-grey-lighter">
                <section id="sidebar">
                  <AttributeSidebar attribute="unique"/>
                </section>
              </aside>

              <main>
                <div className="attSection" id="definition">
                  <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("unique")}}>Unique means without equal.
                  </h1></section>
                  <p className="is-size-6 leading-normal padded">We like to feel unique and special. We may attain it through who we associate with (or who we don’t), what we eat or wear, or by what we believe.  We want to fit in, but certainly do not want to be seen as common or average.</p>
                  <p className="is-size-6 leading-normal padded">“Studies on need for uniqueness…. Results showed that when people were given feedback that they were very highly similar, as compared to moderately similar, to others who had taken the same tests, these former people reported feeling more negative emotions and engaging in behaviors to reestablish their specialness.” - Research study found on psychology.iresearchnet. com</p>
                  <p className="is-size-6 leading-normal padded">I want to be accepted by others, so I look for common ground and purpose in order to fit in.  But once I am in, I want my differences to matter and be seen as an individual who brings something special.  So while I don’t want to be just everyone else, I certainly don’t want to be humiliated by others rejecting my uniquenesses.</p>
                </div>

                <div className="attSection" id="emotion">
                <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("unique")}}>What is the difference between being humbled and being humiliated?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Being humbled means rightly considering myself and elevating others - always a good thing.  Being humiliated is a deliberate and painful lowering of myself, often done by others who want to feel better about themselves.  Humiliation is often painful, but can still result in good - such as when I finally own my shameful actions (which is also humbling) or realize how all human opinions are worth much less than God’s regard. </p>
                  <p className="is-size-6 leading-normal padded">The psalmist below recognizes God’s uniqueness, knows God loves him and feels connected to God.  But others, not aligned with God, are tormenting and seeking to kill him.  He asks for God’s strength and graciousness in the difficult situation so that his tormentors would see God helping him through the torment.  We all have unique opportunities in our relationships, both good and bad, to join with God and help others to see our Lord.</p>
                  <br></br>
                  <Quote scripture="There is none like you among the gods, O Lord, nor are there any works like yours. All the nations you have made shall come and worship before you, O Lord, and shall glorify your name. For you are great and do wondrous things; you alone are God. Teach me your way, O LORD, that I may walk in your truth; unite my heart to fear your name. I give thanks to you, O Lord my God, with my whole heart, and I will glorify your name forever. For great is your steadfast love toward me; you have delivered my soul from the depths of Sheol. <br></br> 
                  O God, insolent men have risen up against me; a band of ruthless men seeks my life, and they do not set you before them. But you, O Lord, are a God merciful and gracious, slow to anger and abounding in steadfast love and faithfulness. Turn to me and be gracious to me; give your strength to your servant, and save the son of your maidservant.  Show me a sign of your favor, that those who hate me may see and be put to shame because you, LORD, have helped me and comforted me." reference="Psalm 86:8-17"/>
                </div>

                <div className="attSection" id="fear">
                <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("unique")}}>I really don’t want to be like everyone else!</h1>
                </section>
                  <p className="is-size-6 leading-normal padded">I want my own identity and differences.  I want to be considered unique and special by others, certainly not average or common.  The Bible affirms each person’s unique value while secular scientific thought reduces each human as a different combination of very similar genes, synapses and auto-responses.  Science then lowers humanity with more similarity to apes and earthworms rather than the only creation made in God’s image. The more I see myself as like all others, the harder I will work to be different in whatever means I can possibly control - whether for good or bad, whether visible (talents, tattoos, clothes, car…) or hidden (beliefs, secret habits…).</p>
                  <br></br>
                  <Quote scripture="For you formed my inward parts; you knitted me together in my mother’s womb.  I praise you, for I am fearfully and wonderfully made.  Wonderful are your works; my soul knows it very well." reference="Psalm 139:13-14" color="var(--teal)"/>
                </div>

                <div className="attSection" id="struggle">
                <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("unique")}}>Will others accept my differences?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">What differences do I have that cause me the greatest concern?  Visible differences may be the most obvious and problematic, but are likely the least important - height, age, race, body type, clothes, etc.  It is who I am that matters more and is less obvious to casual observers - my purpose, identity, character, struggles, and thoughts.  As a Christian, my identity in Christ should overshadows all else.</p>
                  <p className="is-size-6 leading-normal padded">Others’ acceptance (or rejection) of me actually speaks more about who they are than who I am. I cannot control others’ acceptance of me, but I can control how accepting I am of others who are different from me.  And though I may object to fragments of others’ lives, I can remind myself that everyone is a unique creation in God’s image.</p>
                  <br></br>
                  <Quote scripture="But the Lord said to Samuel, ‘Do not look on his appearance or on the height of his stature, because I have rejected him. For the Lord sees not as man sees: man looks on the outward appearance, but the Lord looks on the heart.’" reference="1 Samuel 16:7" />
                  <br></br>
                  <Quote scripture="But you are a chosen race, a royal priesthood, a holy nation, a people for his own possession, that you may proclaim the excellencies of him who called you out of darkness into his marvelous light." reference="1 Peter 2:9"/>

                </div>

                <div className="attSection" id="whoAmI">
                <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("unique")}}>Only God is fully unique from humans in every attribute.</h1>
                </section>
                  <p className="is-size-6 leading-normal padded">Although I was made in God’s image, no part of me is identical to God.  All humanity is nearly identical when compared with God, Who is distinctly different and separate from man.  My biggest theological error is stripping God-ness from God and assuming He thinks and acts like me (i.e. if I were God, I would…..). </p>
                  <br></br>
                  <Quote scripture="Who is like you, O LORD, among the gods? Who is like you, majestic in holiness, awesome in glorious deeds, doing wonders?" reference="Exodus 15:11" />
                </div>

                <div className="attSection" id="biblicalChristianity">
                  <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("unique")}}>Jesus was the only God-Human in all history.</h1></section>
                  <p className="is-size-6 leading-normal padded">Jesus was most unique in being both fully God and fully human, with His humanity capable of, but never once succumbing to, sin.  It is only this combination that allowed Him to make the once-for-all perfect sacrifice on the cross to reconcile humans to God.</p>
                  <Quote scripture="Have this mind among yourselves, which is yours in Christ Jesus, who, though he was in the form of God, did not count equality with God a thing to be grasped, but emptied himself, by taking the form of a servant, being born in the likeness of men. And being found in human form, he humbled himself by becoming obedient to the point of death, even death on a cross." reference="Philippians 2:5-8" color="var(--teal)"/>
                </div>

                <div className="attSection" id="soWhat">
                <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("unique")}}>So what do I do now?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Accept and appreciate all of my uncontrollable life uniquenesses  and seek to accept and build upon all of God's attributes within me.  While striving in sanctification, know that I will never be God - allowing me to glorify in who He is even more. <br></br>Ask: What uniqueness do I have that I do not like? Why?</p>
                  <Quote scripture="The God who made the world and everything in it, being Lord of heaven and earth, does not live in temples made by man, nor is he served by human hands, as though he needed anything, since he himself gives to all mankind life and breath and everything. And he made from one man every nation of mankind to live on all the face of the earth, having determined allotted periods and the boundaries of their dwelling place, that they should seek God, and perhaps feel their way toward him and find him. Yet he is actually not far from each one of us," reference="Acts 17:24-27" color="var(--teal)"/>
                </div>

                  <div className="attSection" id="prayer">
                  <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("unique")}}>Prayer</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Thank you, Lord, for making me unique - different from all those around me.  I confess that sometimes I yearn to be more like some of those I see around me.  Help me to fully accept the unique parts of my life which are not changeable (my family, time and place of birth, height, race, etc.) and help me to use these and all else to Your glory. </p>
                  <Quote scripture="But as it is, God arranged the members in the body, each one of them, as he chose. If all were a single member, where would the body be? As it is, there are many parts, yet one body." reference="1 Corinthians 12:18-20" color="var(--teal)"/>
                </div>

                <div className="attSection has-background-light" id="scienceAndHealth">
                <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("unique")}}>Science finds the uniqueness which God created in each of us.</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Whether I feel like it or not, I am uniquely and wonderfully made.  When I don’t feel like it, I can still go out and get a tattoo.  But when I really feel it, I can praise the Creator!</p>
                  <p className="is-size-6 leading-normal padded">Biometrics uses individual physical and behavioral identifiers unique to each person.  We are all familiar with fingerprint and facial recognition, both used to help ID the owner of a cell phone. But less familiar are retinal or iris scanning, hand geometry, palm vein or ear recognition.  Others include voice and signature recognition and, of course, DNA sequencing.  Each person has 3 billion DNA letters and researchers have found 88 million can vary between individuals. Much work is also being invested in behavioral identifiers, such as typing and walking patterns.  And because the need to identify is great with computers, even how a person navigates or engages specific technology has been found to be unique. </p>
                </div>

                <div className="attSection" id="history">
                <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("unique")}}>When and where were you born?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">It may not feel unique while I am living with so many others of my age, but my time in history is a fascinating uniqueness.  Time in history, as well as geography, are unchangeable and specialized imprints on my being.</p>
                  <p className="is-size-6 leading-normal padded">Today we use the terms baby boomer, millennial, Gen X, Y, & Z to differentiate between recent eras, recognizing the unique conditions a person has grown up with (i.e. Vietnam war, computer tech, 911, etc.).  We could also go back further and describe people by what broad era they lived in - say, the Middle Ages (spanning up to 1000 years) or the Elizabethan period (1558-1603).  Of course, these vary geographically - in 1492 you could have lived in the Renaissance (in Europe), the Ming Dynasty (in China), the Mamluk Sultanate (in Egypt), or the Gajapati Kingdom (in India).</p>

                </div>

                <div className="attSection" id="liturgy" >
                <section>
                    <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("unique")}}>"In Christ Alone" - Townend and Getty</h1>
                    </section>
                    <p className="is-size-6 leading-normal padded">"In Christ alone, who took on flesh<br></br>
                    Fullness of God in helpless babe<br></br>
                    This gift of love and righteousness<br></br>
                    Scorned by the ones He came to save<br></br>
                    'Til on that cross as Jesus died<br></br>
                    The wrath of God was satisfied<br></br>
                    For every sin on Him was laid<br></br>
                    Here in the death of Christ I live, I live"<br></br>- 2nd verse</p>
                </div>

            </main>
            </div>
          </body>
        )
    }

}

export default withRouter(Unique);