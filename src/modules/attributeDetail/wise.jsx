import React, { Component } from "react";
import { withRouter } from "react-router-dom"
import '../../styles/attribute.css'
import Quote from '../../components/quote'
import styleMethods from "../../methods/styleMethods";
import BaseAttributeDetail from '../../modules/attributeDetail/baseAttributeDetail';

class Wise extends Component {

    render() {
        return(
          <BaseAttributeDetail
            title="Wise"
            subtitle="To know truth and do good with it"
            definition={
              <section>
                  <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("wise")}}>Wise means to know truth and do good with it.
                  </h1></section>
                  <p className="is-size-6 leading-normal padded">Truth, or knowledge, must become active to be wise - it must be made subservient to a will and be applied to count.  We may falter at times, but we normally want to be wise and usually think that we are. However, it often takes a third-party’s perspective to really know if we are being wise.</p>
                  <p className="is-size-6 leading-normal padded">“…When it comes to using wise thinking to make better decisions, studies point to the importance of perspective. In particular, viewing situations from a third-person (fly-on-the-wall) rather than an ego-centric point of view. This is because examining events from a first-person vantage point can limit our attention to the focal features of situations, making us more close-minded and defensive. On the other hand, self-distancing through a third-person perspective helps us relate events to a broader context. Perhaps this is why we are more likely to demonstrate greater wisdom when reflecting on others’ lives rather than our own. And perhaps this is why we use our wisdom least when we need it most.” - 3/1/18 article in Psychology Today (God's wisdom shining though a secular source)</p>
                  <p className="is-size-6 leading-normal padded">When I take action or make a decision, I usually believe I am acting wisely.  It is only later, with the benefit of hindsight and payment of regret, that I might see the foolishness that was hidden within.  I don’t want to play the part of a fool, so what do I do?  I need a good perspective - one that virtually reaches into the future to bring the benefit of hindsight to bear before I act. </p>
              </section>
            }
            emotion={
              <section>
                 <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("wise")}}>Where does regret lead me?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Do I make a lot of choices in my life?  If so, I am more likely to experience regret than others with less autonomy.  More decisions mean more regret because regret is that feeling of sadness that comes after experiencing the less-than-ideal results of an earlier decision.  Research also shows that I most regret actions TAKEN when I look back over the last few days, but more likely to regret actions NOT taken if I consider the last few years.</p>
                  <p className="is-size-6 leading-normal padded">Everyone makes poor choices at times.  But when my regret becomes negative, repetitive, self-focused rumination, it can physically harm me and lead to depression.  However, regret can also give me valuable feedback to make sense of the world and avoid future negative behaviors (repentance).  Given this, I must apply generous grace to the past by forgiving myself. And I need to also apply wisdom to the future - I can do this by learning from my past mistakes as well as accepting the never-changing truth and wisdom of scripture.</p>
                  <br></br>
                  <Quote scripture="The law of the LORD is perfect, reviving the soul; the testimony of the LORD is sure, making wise the simple; the precepts of the LORD are right, rejoicing the heart; the commandment of the LORD is pure, enlightening the eyes; the fear of the LORD is clean, enduring forever; the rules of the LORD are true, and righteous altogether. More to be desired are they than gold, even much fine gold; sweeter also than honey and drippings of the honeycomb. Moreover, by them is your servant warned; in keeping them there is great reward. Who can discern his errors?  Declare me innocent from hidden faults. Keep back your servant also from presumptuous sins; let them not have dominion over me! Then I shall be blameless, and innocent of great transgression. Let the words of my mouth and the meditation of my heart be acceptable in your sight, O LORD, my rock and my redeemer." reference="Psalm 19:7-14"/>               
              </section>
            }
            fear={
              <section>
 <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("wise")}}>How do I avoid the part of a fool?</h1>
                </section>
                  <p className="is-size-6 leading-normal padded">Opportunities are lost, progress is forgone, ridiculousness is endorsed and evil is sown - all from a fear of appearing foolish.  However, death, poverty and many forms of destruction can be linked to foolish behavior.  I desperately need wisdom, based on truth, to know whether to plunge ahead or hold back.</p>
                  <p className="is-size-6 leading-normal padded">Being human means I will both feel foolish and be foolish at times.  Feeling foolish while pursuing what is right and good is a very small price to pay versus plunging into actual foolishness. However, even these plunges can humble me and help build an immunity to further foolishness in the future.  They can motivate me to decide in advance what I will do when a similar circumstance arises in the future.</p>
                  <p className="is-size-6 leading-normal padded">But if I mistake what is true with what is false, no advance planning or humility will come to bear.  My foundation will crumble and I will fall.  So I must first search out what is true and then use it toward my good and the good of others.</p>
                  <br></br>
                  <Quote scripture="For although they knew God, they did not honor him as God or give thanks to him, but they became futile in their thinking, and their foolish hearts were darkened. Claiming to be wise, they became fools, and exchanged the glory of the immortal God for images resembling mortal man and birds and animals and creeping things. Therefore God gave them up in the lusts of their hearts to impurity, to the dishonoring of their bodies among themselves, because they exchanged the truth about God for a lie and worshiped and served the creature rather than the Creator, who is blessed forever! Amen." reference="Romans 1:21-25" color="var(--teal)"/>               
              </section>
            }
            struggle={
              <section>
                 <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("wise")}}>How can I keep a healthy perspective?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Living for something higher than myself is key.  A driving purpose, well-honed principles, or knowing God all helps to keep life in proper perspective.  An unguided perspective will be misshaped by fatigue, selfishness, or a short-sighted, yet compelling, argument for which I fall.</p>
                  <p className="is-size-6 leading-normal padded">Eve lost sight of a good God and focused on her own hunger and self-interest.  Adam’s perspective was bent to please Eve versus God.  What they both pursued was knowing “good and evil”, even while they already were experiencing God's goodness - hence, what they actually received was only evil.</p>
                  <br></br>
                  <Quote scripture="So when the woman saw that the tree was good for food, and that it was a delight to the eyes, and that the tree was to be desired to make one wise, she took of its fruit and ate, and she also gave some to her husband who was with her, and he ate." reference="Genesis 3:6" />
                  <br></br>
                  <Quote scripture="Contrariwise, the 'wise' (in Scripture) are not the highly intellectual or the brilliantly educated, but those who honestly seek to put God first in their lives. God 'honors' those who honor Him (1 Sam. 2:30)." reference="A.W. Pink"/>               
              </section>
            }
            whoAmI={
              <section>
                 <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("wise")}}>Only God is fully wise.</h1>
                </section>
                  <p className="is-size-6 leading-normal padded">He combines omniscience with full goodness to be all-wise in all things.  Even when I have the truth and start with the best of intentions, I can still fall short.</p>
                  <br></br>
                  <Quote scripture="Although about two-thirds of Americans have a prescription medication, approximately 50% of people do not take their medications as prescribed….Most people don’t realize it but of dying from your own medication non-adherence are about 10 times greater than dying of homicide, or about 30 times greater for somebody who is over the age of 50….younger people often have worse medication adherence rates than the elderly….In addition, most people do not consciously decide to stop taking their medication. Instead, they intend to take it. Then, they forget a few times they get out of the habit until they eventually stop taking it altogether." reference="5/16/18 article from Pillsy" />               
              </section>
            }
            biblicalChristianity={
              <section>
                   <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("wise")}}>Jesus was wise in all His words and actions.</h1></section>
                  <p className="is-size-6 leading-normal padded">Although the cross was considered to be foolish by those with worldly wisdom, it was God’s wisdom and His solution for reconciling man to Himself.</p>
                  <Quote scripture="For the word of the cross is folly to those who are perishing, but to us who are being saved it is the power of God...For since, in the wisdom of God, the world did not know God through wisdom, it pleased God through the folly of what we preach to save those who believe." reference="1 Corinthians 1:18,21" color="var(--teal)"/>               
              </section>
            }
            soWhat={
              <section>
                  <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("wise")}}>So what do I do now?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Highly respect and value God - above all else - to establish a firm foundation for wise living. Test this wisdom with others who I know to have wisdom and be open to reason. <br></br>Ask: What do I value more than a relationship with God, and why?</p>
                  <Quote scripture="But the wisdom from above is first pure, then peaceable, gentle, open to reason, full of mercy and good fruits, impartial and sincere." reference="James 3:17" color="var(--teal)"/>              
              </section>
            }
            prayer={
              <section>
                   <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("wise")}}>Prayer</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">God, You alone are fully wise, and You have graciously shared Your wisdom through Your word, the Bible.  Help me to desire Your knowledge, understanding and wisdom in order to live a life which is pleasing to You.</p>
                  <Quote scripture="If any of you lacks wisdom, let him ask God, who gives generously to all without reproach, and it will be given him." reference="James 1:5" color="var(--teal)"/>               
              </section>
            }
            scienceAndHealth={
              <section>
                <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("wise")}}>Has religion helped or hurt the development of science?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Both!  The largest initial advancements in science, leading to technology that has vastly improved our lives, was made when men were seeking to understand God and His creation.  But religion, corrupted by power-starved clergy, did oppose scientific development.  But the true gospel of Christ has always been compatible with, and often a catalyst for, healthy scientific development. </p>
                  <p className="is-size-6 leading-normal padded">“It was only during the nineteenth century that science began to have any practical applications… Before then, the only reason to study science was curiosity or religious piety. Christians believed that God created the universe and ordained the laws of nature. To study the natural world was to admire the work of God….It was faith that led Copernicus to reject the ugly Ptolemaic universe; that drove Johannes Kepler to discover the constitution of the solar system; and that convinced James Clerk Maxwell he could reduce electromagnetism to a set of equations so elegant they take the breathe away…. It was only during the ‘enlightenment’ that the idea took root that Christianity had been a serious impediment to science. Voltaire and his fellow philosophies opposed the Catholic Church because of its close association with France’s absolute monarchy. Accusing clerics of holding back scientific development was a safe way to make a political point.” - Thoughts from The Genesis of Science: How the Christian Middle Ages Launched the Scientific Revolution by James Hannam</p>                
              </section>
            }
            history={
              <section>
                 <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("wise")}}>Does more knowledge lead to more wisdom?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Increasing knowledge creates wisdom only if it is applied for good. Knowledge is neutral facts and figures that become good or bad depending upon how it is used.  It thus needs something wise to guide its development and use.</p>
                  <p className="is-size-6 leading-normal padded">Rocket engineer Wernher von Braun, the public face and key architect of the American space program, earlier built rockets for Hitler.  More than 3,000 missiles of his design against the Allies killed ~5,000 people, while as many as 20,000 concentration camp prisoners died assembling the weapons. During the 1930s, the German medical establishment was admired as a world leader in innovative public health and medical research. They correctly identified the dangers of tobacco, asbestos, DDT, alcohol and lumps in the breast. They developed the first high-powered electron microscope. But to what end? Hitler spoke of Germany as a body and himself as the doctor who wanted to make the nation healthy by eliminating the diseased parts - beginning with forced sterilization and ending, of course, with six million deaths in concentration camps.</p>               
              </section>
            }
            liturgy={
              <section>
                 <section>
                    <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("wise")}}>"Be Thou My Vision" - Byrne</h1>
                    </section>
                    <p className="is-size-6 leading-normal padded">"Be Thou my wisdom, and Thou my true Word;<br></br>
                    I ever with Thee and Thou with me, Lord;<br></br>
                    Thou my great Father and I, Thy true son;<br></br>
                    Thou in me dwelling, and I with Thee one. - 2nd verse"<br></br>
                    Note: True wisdom is tied to a relationship with God.</p>               
              </section>
            }
          />
        )
    }

}

export default withRouter(Wise);