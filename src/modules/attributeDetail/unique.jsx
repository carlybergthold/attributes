import React, { Component } from "react";
import { withRouter } from "react-router-dom"
import '../../styles/attribute.css'
import Quote from '../../components/quote'
import styleMethods from "../../methods/styleMethods";
import BaseAttributeDetail from '../../modules/attributeDetail/baseAttributeDetail';

class Unique extends Component {

    render() {
        return(
          <BaseAttributeDetail
            title="Unique"
            subtitle="To be without equal"
            definition={
              <section>
                  <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("unique")}}>Unique means without equal.
                  </h1></section>
                  <p className="is-size-6 leading-normal padded">We like to feel special. We may attempt to attain uniqueness through whom we associate with (or avoid), by what we do or don't do, by what we believe or how we identify ourselves.  We will fight vigorously against being seen as common or average.</p>
                  <p className="is-size-6 leading-normal padded">But being relational beings, we also want to be accepted by certain people, so we seek common ground and purpose in order to fit in. But once I become a part of that group, I want my differences to matter. Sometimes these differences do make me feel special and unique, but just as often they can lead to my embarrassment, humiliation, or even rejection.</p>
              </section>
            }
            emotion={
              <section>
 <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("unique")}}>What is the difference between being humbled and being humiliated?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Being humbled means I correct my assessment of myself - I see myself more clearly and accurately, often based on input from others.  I can normally do this only when I trust the source of this new information.  Being humiliated, however, is when my social status is lowered by others, often through a deliberate and painful act of those who want to feel better about themselves. Although humiliation can hurt, it can result in good - such as when I humbly  take responsibility for my wrong actions or when I realize that human opinions are worth much less than God’s. </p>
                  <p className="is-size-6 leading-normal padded">The psalmist below recognizes God’s uniqueness, knows God loves him and feels connected to God. But others, not aligned with God, are tormenting and seeking to kill him. He asks for God’s strength and graciousness in the difficult situation so that his tormentors would see God helping him through the torment. We all have unique opportunities in our relationships, both good and bad, to join with God and help others to see our Lord.</p>
                  <br></br>
                  <Quote scripture="There is none like you among the gods, O Lord, nor are there any works like yours. All the nations you have made shall come and worship before you, O Lord, and shall glorify your name. For you are great and do wondrous things; you alone are God. Teach me your way, O LORD, that I may walk in your truth; unite my heart to fear your name. I give thanks to you, O Lord my God, with my whole heart, and I will glorify your name forever. For great is your steadfast love toward me; you have delivered my soul from the depths of Sheol.     
                                           
                  O God, insolent men have risen up against me; a band of ruthless men seeks my life, and they do not set you before them. But you, O Lord, are a God merciful and gracious, slow to anger and abounding in steadfast love and faithfulness. Turn to me and be gracious to me; give your strength to your servant, and save the son of your maidservant.  Show me a sign of your favor, that those who hate me may see and be put to shame because you, LORD, have helped me and comforted me." reference="Psalm 86:8-17"/>               
              </section>
            }
            fear={
              <section>
                <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("unique")}}>I really don’t want to be like everyone else!</h1>
                </section>
                  <p className="is-size-6 leading-normal padded">I want my own identity and differences. I want to be considered unique and special by others. The Bible affirms the unique value of each person while secular scientific thought can reduce each human to a slightly different combination of very similar genes (97% of our DNA is identical) and chemical elements. Science then lowers humanity even further by finding  more similarity to apes and earthworms rather than as the only creation God made in His own image. When I fail to see myself as a unique creation of God, I end up working hard to distinguish myself by whatever means I can possibly control - whether good (excelling in sports) or bad (the shoplifter) or whether visible (talents, tattoos, clothes, car…) or hidden (beliefs, secret habits…).
</p>
                  <br></br>
                  <Quote scripture="For you formed my inward parts; you knitted me together in my mother’s womb.  I praise you, for I am fearfully and wonderfully made.  Wonderful are your works; my soul knows it very well." reference="Psalm 139:13-14" color="var(--teal)"/>                
              </section>
            }
            struggle={
              <section>
                 <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("unique")}}>Will others accept my differences?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">What differences do I have that cause me the greatest concern? Visible differences may be the most obvious and problematic - my height, age, race, facial symetry, body type, clothes, etc. - but these are likely the least important. It is who I really am that matters much more - my purpose, identity, character, struggles, and thoughts. These are unfortunately much less obvious to casual observers. And as a Christian, my identity in Christ should transcend all else, differentiating me from the world while, at the same time, glorifying God.
</p>
                  <p className="is-size-6 leading-normal padded">Others’ acceptance (or rejection) of me actually speaks more about who they are than who I am. I cannot control others’ acceptance of me, but I can control how accepting I am of others who differ from me.  And though I may object to fragments of others’ lives, I can remind myself that everyone is a unique creation, also made in God’s image.</p>
                  <br></br>
                  <Quote scripture="But the Lord said to Samuel, ‘Do not look on his appearance or on the height of his stature, because I have rejected him. For the Lord sees not as man sees: man looks on the outward appearance, but the Lord looks on the heart.’" reference="1 Samuel 16:7" />
                  <br></br>
                  <Quote scripture="But you are a chosen race, a royal priesthood, a holy nation, a people for his own possession, that you may proclaim the excellencies of him who called you out of darkness into his marvelous light." reference="1 Peter 2:9"/>               
              </section>
            }
            whoAmI={
              <section>
                 <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("unique")}}>Only God is fully unique from humans in every attribute.</h1>
                </section>
                  <p className="is-size-6 leading-normal padded">Although I was made in God’s image, no part of me is identical or equal to God. All humanity falls miserably short of each attribute of God, Who is distinctly different and separate from man. In fact, my biggest theological error is stripping God-ness from God and assuming He should think and act just like me (i.e. if I were God, I would…..).
</p>
                  <br></br>
                  <Quote scripture="Who is like you, O LORD, among the gods? Who is like you, majestic in holiness, awesome in glorious deeds, doing wonders?" reference="Exodus 15:11" />               
              </section>
            }
            biblicalChristianity={
              <section>
                   <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("unique")}}>Jesus was the only God-Human in all history.</h1></section>
                  <p className="is-size-6 leading-normal padded">Jesus was most unique in being both fully God and fully human, with His humanity capable of, but never once succumbing to, sin.  It is only this combination that allowed Him to make the once-for-all perfect sacrifice on the cross to reconcile humans to God.</p><br></br>
                  <Quote scripture="Have this mind among yourselves, which is yours in Christ Jesus, who, though he was in the form of God, did not count equality with God a thing to be grasped, but emptied himself, by taking the form of a servant, being born in the likeness of men. And being found in human form, he humbled himself by becoming obedient to the point of death, even death on a cross." reference="Philippians 2:5-8" color="var(--teal)"/>               
              </section>
            }
            soWhat={
              <section>
                  <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("unique")}}>So what do I do now?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Accept and appreciate all of my uncontrollable life uniquenesses  and seek to accept and build upon all of God's attributes within me.  While striving in sanctification, know that I will never be God - allowing me to glorify in who He is even more. <br></br>Ask: What uniqueness do I have that I do not like? Why?</p><br></br>
                  <Quote scripture="The God who made the world and everything in it, being Lord of heaven and earth, does not live in temples made by man, nor is he served by human hands, as though he needed anything, since he himself gives to all mankind life and breath and everything. And he made from one man every nation of mankind to live on all the face of the earth, having determined allotted periods and the boundaries of their dwelling place, that they should seek God, and perhaps feel their way toward him and find him. Yet he is actually not far from each one of us," reference="Acts 17:24-27" color="var(--teal)"/>              
              </section>
            }
            prayer={
              <section>
                   <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("unique")}}>Prayer</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Thank you, Lord, for making me unique - different from all those around me.  I confess that sometimes I yearn to be more like some of those I see around me.  Help me to fully accept the unique parts of my life which are not changeable (my family, time and place of birth, height, race, etc.) and help me to use these and all else to Your glory. </p><br></br>
                  <Quote scripture="But as it is, God arranged the members in the body, each one of them, as he chose. If all were a single member, where would the body be? As it is, there are many parts, yet one body." reference="1 Corinthians 12:18-20" color="var(--teal)"/>               
              </section>
            }
            scienceAndHealth={
              <section>
                  <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("unique")}}>Science finds the uniqueness which God created in each of us.</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Whether I feel like it or not, I am uniquely and wonderfully made.  When I don’t feel like it, I can still go out and get a tattoo.  But when I really feel it, I can praise the Creator!</p>
                  <p className="is-size-6 leading-normal padded">Biometrics uses individual physical and behavioral identifiers unique to each person.  We are all familiar with fingerprint and facial recognition, both used to help ID the owner of a cell phone. But less familiar are retinal or iris scanning, hand geometry, palm vein or ear recognition.  Others include voice and signature recognition and, of course, DNA sequencing.  Each person has 3 billion DNA letters and researchers have found 88 million can vary between individuals. Much work is also being invested in behavioral identifiers, such as typing and walking patterns.  And because the need to identify is great with computers, even how a person navigates or engages specific technology has been found to be unique. </p>              
              </section>
            }
            attHistory={
              <section>
                  <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("unique")}}>When and where were you born?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">It may not feel unique while I am living with so many others of my age, but my time in history is a fascinating uniqueness.  Time in history, as well as geography, are unchangeable and specialized imprints on my being.</p>
                  <p className="is-size-6 leading-normal padded">Today we use the terms baby boomer, millennial, Gen X, Y, & Z to differentiate between recent eras, recognizing the unique conditions a person has grown up with (i.e. Vietnam war, computer tech, 911, etc.).  We could also go back further and describe people by what broad era they lived in - say, the Middle Ages (spanning up to 1000 years) or the Elizabethan period (1558-1603).  Of course, these vary geographically - in 1492 you could have lived in the Renaissance (in Europe), the Ming Dynasty (in China), the Mamluk Sultanate (in Egypt), or the Gajapati Kingdom (in India).</p>              
              </section>
            }
            liturgy={
              <section>
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
              </section>
            }
          />
        )
    }

}

export default withRouter(Unique);