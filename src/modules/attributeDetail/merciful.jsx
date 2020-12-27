import React, { Component } from "react";
import { withRouter } from "react-router-dom"
import '../../styles/attribute.css'
import Quote from '../../components/quote'
import Hero from '../../components/hero'
import AttributeSidebar from "../../components/attSidebar";
import helperMethods from "../../methods/helperMethods";

class Merciful extends Component {

    render() {
        return(
            <div className="attPage">
            <Hero title="Merciful" subtitle="To have compassion for those in need" img="girl.png" />
            <div className="container is-fullhd has-text-left relativeMaybe" id="attributeContainer">
              <aside>
                <section id="sidebar">
                  <AttributeSidebar />
                </section>
              </aside>

              <main>
                <div className="attSection" id="definition">
                  <section>
                  <h1 className="title tracking-wide padded" style={{color: helperMethods.getAttributeColor("merciful")}}>Merciful means to have active compassion for those in need or distress.
                  </h1></section>
                  <p className="is-size-6 leading-normal padded">When directly faced with someone in obvious need, we may not help - but we still want to.  We see that kind of action as “right” and often rewarding.</p>
                  <p className="is-size-6 leading-normal padded">Americans typically make donations within six weeks of a big disaster, when media coverage is the most intense. Their contributions usually slow to a crawl six months later, once the cameras stop rolling and news cycle moves on.  Hurricane Katrina brought the highest giving amount ever - $4.2B (with almost half of all Americans responding).  The 911 disaster is second at $2.6B (with almost 3/4 of Americans giving!). - The Conversation (Sept 2017)</p>
                  <p className="is-size-6 leading-normal padded">Mercy sometimes seems to compete with justice (i.e. making things right).  I might withhold mercy from another because it might make their behavior worse, or because I am too resentful over the unfairness of it all.  Of course, someone else might do the same to me, even when I plead for and need mercy the most.</p>
                </div>

                <div className="attSection" id="emotion">
                <section>
                  <h1 className="title tracking-wide padded" style={{color: helperMethods.getAttributeColor("merciful")}}>But what if someone doesn’t deserve mercy from me?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Holding a resentment is like drinking poison and waiting for the other person to die.  It can be a sticky pit of victim anger in which forgiveness is the only means of escape.  But how to forgive?  The psalmist focuses on God’s mercy and forgiveness and the gratitude it creates within his soul.  Originating from the Gospel of love and mercy, this gratitude tends to extinguish my resentment by providing me with mercy I can share with my offender.</p>
                  <br></br>
                  <Quote scripture="Bless the LORD, O my soul, and all that is within me, bless his holy name! Bless the LORD, O my soul, and forget not all his benefits, who forgives all your iniquity, who heals all your diseases, who redeems your life from the pit, who crowns you with steadfast love and mercy, who satisfies you with good so that your youth is renewed like the eagle’s." reference="Psalm 103:1-5" color="var(--teal)"/>
                </div>

                <div className="attSection" id="fear">
                <section>
                  <h1 className="title tracking-wide padded" style={{color: helperMethods.getAttributeColor("merciful")}}>I need mercy, but probably don’t deserve it.</h1>
                </section>
                  <p className="is-size-6 leading-normal padded">No one deserves mercy, especially God’s mercy.  But conviction of wrong-doing and a sense that mercy is needed are the critical first two steps to receiving mercy.  The next step is asking for it - but it may or may not come, depending upon the one in position to grant the mercy.</p>
                  <br></br>
                  <Quote scripture="For he says to Moses, 'I will have mercy on whom I have mercy, and I will have compassion on whom I have compassion.' So then it depends not on human will or exertion, but on God, who has mercy." reference="Romans 9:15-16" color="var(--teal)"/>
                </div>

                <div className="attSection" id="struggle">
                <section>
                  <h1 className="title tracking-wide padded" style={{color: helperMethods.getAttributeColor("merciful")}}>Do I do what is merciful - or what is just?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">God’s attributes never conflict and do not hinder each other.  They always complement, heighten and provide synergy with the others. Consider both justice and mercy at all times - in faith and humility, with God's perspective.  As we decide what to do for another, mercy provides a window of opportunity to carefully consider what just and loving action to take that will be the best for the other.</p>
                  <br></br>
                  <Quote scripture="He has told you, O man, what is good; and what does the LORD require of you but to do justice, and to love kindness, and to walk humbly with your God?" reference="Micah 6:8" color="var(--teal)"/>
                </div>

                <div className="attSection" id="whoAmI">
                <section>
                  <h1 className="title tracking-wide padded" style={{color: helperMethods.getAttributeColor("merciful")}}>Only God can grant merciful forgiveness of sin.</h1></section>
                  <p className="is-size-6 leading-normal padded">God's mercy can  restore a right relationship with our Creator.  Man can act mercifully to others, but can never attain God's forgiveness apart from Christ. </p>
                  <br></br>
                  <Quote scripture="But God shows his love for us in that while we were still sinners, Christ died for us." reference="Romans 5:8" color="var(--teal)"/>
                </div>

                <div className="attSection" id="biblicalChristianity">
                  <section>
                  <h1 className="title tracking-wide padded" style={{color: helperMethods.getAttributeColor("merciful")}}>Jesus compassionately connected people to God and His gifts.</h1></section>
                  <p className="is-size-6 leading-normal padded">Often it started with an immediate physical need, but was always done with the ultimate goal of reconciling people to God, the most merciful act of all.</p>
                  <Quote scripture="Jesus answered her (Samaritan woman), 'If you knew the gift of God, and who it is that is saying to you, 'Give me a drink,' you would have asked him, and he would have given you living water.' " reference="John 4:10" color="var(--teal)"/>
                  <Quote scripture="And he said to the man with the withered hand, 'Come here.' And he said to them, 'Is it lawful on the Sabbath to do good or to do harm, to save life or to kill?' But they were silent. And he looked around at them with anger, grieved at their hardness of heart, and said to the man, 'Stretch out your hand.' He stretched it out, and his hand was restored. The Pharisees went out and immediately held counsel with the Herodians against him, how to destroy him." reference="Mark 3:3-6" color="var(--teal)"/>
                </div>

                <div className="attSection" id="soWhat">
                <section>
                  <h1 className="title tracking-wide padded" style={{color: helperMethods.getAttributeColor("merciful")}}>So what do I do now?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Praise God for the mercy He shows me.  Let me eagerly and cheerfully show mercy to others.  While helping others in need, help me to realize that every person has the need to know Christ better.  <br></br>Ask: When is the last time I have needed mercy?  <br></br>When is the last time I have shown mercy?</p>
                  <Quote scripture="Blessed are the merciful, for they shall receive mercy." reference="Matthew 5:7" color="var(--teal)"/>
                </div>

                  <div className="attSection" id="prayer">
                  <section>
                  <h1 className="title tracking-wide padded" style={{color: helperMethods.getAttributeColor("merciful")}}>Prayer</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Merciful God, thank you for your redeeming work in my life.  You lifted me from a pit of hopelessness with Christ into your very presence.  Help me to understand what this means and make it real to me.</p>
                  <Quote scripture="Blessed be the God and Father of our Lord Jesus Christ! According to his great mercy, he has caused us to be born again to a living hope through the resurrection of Jesus Christ from the dead," reference="1 Peter 1:3" color="var(--teal)"/>
                </div>

                <div className="attSection has-background-light" id="scienceAndHealth">
                <section>
                  <h1 className="title tracking-wide padded" style={{color: helperMethods.getAttributeColor("merciful")}}>How are we “hard-wired" to be merciful?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">We want to help others in need.  It is when we selfishly consider the cost we may endure that we often back away from merciful actions.  But we step forward when we selflessly consider the cost which another is enduring by imagining it as our own.</p>
                  <p className="is-size-6 leading-normal padded">Research shows that when we see others being harmed, our brains react in similar ways as if we were being harmed....These events also stimulate us to think of our own experiences of pain or trauma; in other words, our 'autobiographical memory'. We remember the times when we were in danger or in pain and our brain, in a sense, reaches out and imagines how the actual victims are thinking and feeling. - Phsychology Today (Mar 2011)</p>
                </div>

                <div className="attSection" id="history">
                <section>
                  <h1 className="title tracking-wide padded" style={{color: helperMethods.getAttributeColor("merciful")}}>How did David go from adultery and murder to being known as  the "father" of Jesus?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">It was only because of God's abundant mercy, lavishly poured out from God on one who understood his desperate need for God's forgiveness.  David came to the point of recognizing his need and asked fGod for mercy.  Much later, two blind men also asked for mercy from Jesus while calling Him the ‘Son of David’.</p>
                  <p className="is-size-6 leading-normal padded">"A Psalm of David, when Nathan the prophet went to him, after he had gone in to Bathsheba.  Have mercy on me, O God, according to your steadfast love; according to your abundant mercy blot out my transgressions." - Psalm 51</p>
                  <p className="is-size-6 leading-normal padded">"And as Jesus passed on from there, two blind men followed him, crying aloud, “Have mercy on us, Son of David.” - Matthew 9:27</p>

                </div>

                <div className="attSection" id="liturgy" >
                <section>

                    <h1 className="title tracking-wide padded" style={{color: helperMethods.getAttributeColor("merciful")}}>"At Calvary" - Newell</h1>
                    </section>
                    <p className="is-size-6 leading-normal padded">
                      "By God’s Word at last my sin I learned;<br></br>
                      Then I trembled at the law I’d spurned,<br></br>
                      Till my guilty soul imploring turned, <br></br>
                      To Calvary.<br></br><br></br>
                      Mercy there was great, and grace was free;<br></br>
                      Pardon there was multiplied to me;<br></br>
                      There my burdened soul found liberty,<br></br>
                      At Calvary." - 2nd verse and chorus</p>
                </div>

            </main>
            </div>
          </div>
        )
    }

}

export default withRouter(Merciful);