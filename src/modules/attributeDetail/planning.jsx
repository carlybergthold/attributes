import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom"
import '../../styles/attribute.css'
import Grid from '../../components/grid'
import Testimonial from '../../components/testimonial'
import Hero from '../../components/hero'
import AttributeSidebar from "../../components/attSidebar";
import Quote from '../../components/quote'

class Planning extends Component {

    // componentDidMount() {
    //   window.scrollTo(0, 0);
    // }

    render() {
        return(
            <body className="attPage">
            <Hero title="Planning" subtitle="To perfectly fit everything together" img="girl.png" />
            <div className="container is-fullhd has-text-left relativeMaybe" id="attributeContainer">
              <aside>
                <section id="sidebar">
                  <AttributeSidebar />
                </section>
              </aside>

              <main>
                <div className="attSection" id="definition">
                  <section>
                  <h1 className="title has-text-primary tracking-wide padded">Planning means to perfectly fit everything together.
                  </h1></section>
                  <p className="is-size-6 leading-normal padded">We love it when our plans come together - whether planning a perfect day,  a dream vacation, or a life well lived.  The act of planning implies purpose, and without purpose, we don’t have much reason to live.</p>
                  <p className="is-size-6 leading-normal padded">“The need for purpose is one the defining characteristics of human beings. Human beings crave purpose and suffer serious psychological difficulties when we don’t have it. Purpose is a fundamental component of a fulfilling life……Another important factor here is that aligning ourselves to a purpose often makes us less self-centered. We feel a part of something bigger, something outside ourselves, and this makes us less focused on our own worries and anxieties. Our own problems seem less significant, and we spend less time thinking about them, and so our sense of well-being increases.” - Psychology Today 7/21/13 article, “The Power of Purpose”</p>
                  <p className="is-size-6 leading-normal padded">When I plan, I want my plan to work, which usually means everything and everyone conforming to my plan.  However, the future, filled with so many uncertain and scary things, makes me wonder sometimes if I should even bother to plan.  Whether I choose to plan or not, it always seems easy to worry about what will likely go wrong.</p>
                </div>

                <div className="attSection" id="emotion">
                <section>
                  <h1 className="title has-text-primary tracking-wide padded">Why do I worry so much?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Worry is started by a real “signal event” - past or present - which may signal a much worse future event.  Many events can pose as signals - a breast lump or a news article about unemployment.  My mind appropriately considers what could result - breast cancer or loss of my own job.  But then I may begin to obsess over these possibilities, especially those outside of my control.  Worrying about what could happen to people I love is even easier because I lack even less control over their lives.  Worry really questions whether anyone is in control.</p>
                  <p className="is-size-6 leading-normal padded">God not only is in control, but has a plan and purpose for my life.  Without His sustaining hand, I do not live past the next minute.  The psalmist below is walking through real troubles, yet recognizes his complete dependence on God.  Depending on God does not prevent my worrisome events from happening, but can help ground my present thoughts in both reality and thankfulness to God.</p>
                  <br></br>
                  <Quote scripture="Though I walk in the midst of trouble, you preserve my life; you stretch out your hand against the wrath of my enemies, and your right hand delivers me.  The LORD will fulfill his purpose for me; your steadfast love, O LORD, endures forever.  Do not forsake the work of your hands." reference="Psalm 138:7-8"/>
                  <Quote scripture="And do not seek what you are to eat and what you are to drink, nor be worried. For all the nations of the world seek after these things, and your Father knows that you need them. Instead, seek his kingdom, and these things will be added to you." reference="Luke 12:29-31"/>
                </div>

                <div className="attSection" id="fear">
                <section>
                  <h1 className="title has-text-primary tracking-wide padded">Why even plan when the future looks so uncertain and scary?</h1>
                </section>
                  <p className="is-size-6 leading-normal padded">Seeking and depending on God does not eliminate the need to plan.  Proverbs gives much guidance on how to plan while seeking and depending on God.   And don’t worry - life will always bring scary things we dislike and cannot control.  But if I am seeking God, I will find reconciliation with God as well as all other things He allows into my life.</p>
                  <br></br>
                  <Quote scripture="Deceit is in the heart of those who devise evil, but those who plan peace have joy….  Without counsel plans fail, but with many advisers they succeed….  Commit your work to the LORD, and your plans will be established…..  The plans of the diligent lead surely to abundance, but everyone who is hasty comes only to poverty." reference="Proverbs 12:20, 15:22, 16:3, 21:5" color="var(--teal)"/>
                </div>

                <div className="attSection" id="struggle">
                <section>
                  <h1 className="title has-text-primary tracking-wide padded">I really want my plans to work perfectly!</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Perfect plans carried out perfectly are rare because none of us is perfect.  However, my desire for certain outcomes is a built-in design feature of my image - and it is good!  The focus and direction of my planning and desire is what is even more important.  Making and executing plans with a dependence on and thankfulness for God takes my focus off my unrealistic need to be perfect.</p>
                  <br></br>
                  <Quote scripture="And whatever you do, in word or deed, do everything in the name of the Lord Jesus, giving thanks to God the Father through him." reference="Colossians 3:17" />
                </div>

                <div className="attSection" id="whoAmI">
                <section>
                  <Hero title="Only God plans perfectly."></Hero>
                </section>
                  <p className="is-size-6 leading-normal padded">That’s because only He is omniscient and knows what could go wrong.  Only He is omnipotent and can ensure all adheres to His plan.  Only He is fully wise and good, ensuring worthy outcomes.  I desire what only God has - a perfect will.  At times, I may think ”Father - not your will, but mine be done.”  But my failed plans can remind me quite graciously that I am not God.</p>
                  <br></br>
                  <Quote scripture="I know that you can do all things, and that no purpose of yours can be thwarted." reference="Job 42:2" />
                </div>

                <div className="attSection" id="biblicalChristianity">
                  <section>
                  <h1 className="title has-text-primary tracking-wide padded">Jesus’ death and resurrection was the key element of God’s plan for history.</h1></section>
                  <p className="is-size-6 leading-normal padded">This vital part of God’s plan was mysteriously hidden for centuries. Even when Jesus spoke of the cross to His disciples, they did not understand it (or chose to deny it).  Even after the cross was fully unveiled, many still don’t understand it or choose to deny it. </p>
                  <Quote scripture="Men of Israel, hear these words: Jesus of Nazareth, a man attested to you by God with mighty works and wonders and signs that God did through him in your midst, as you yourselves know—this Jesus, delivered up according to the definite plan and foreknowledge of God, you crucified and killed by the hands of lawless men." reference="Acts 2:22-23" color="var(--teal)"/>
                  <Quote scripture="The fact is that “foreknowledge” is never used in Scripture in connection with events or actions; instead, it always has reference to persons." reference="A.W. Pink" color="var(--teal)"/>
                </div>

                <div className="attSection" id="soWhat">
                <section>
                  <h1 className="title has-text-primary tracking-wide padded">So what do I do now?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Accept, even within my own planning and especially when difficulties arise, that God’s plan is made and executed with the full force of all His attributes. For believers, the driving force of His plan is His never-ending love, which He pours into all His plans.  Ask: How could my most recent difficulty bring me good?</p>
                  <Quote scripture="Father, if you are willing, remove this cup from me. Nevertheless, not my will, but yours, be done." reference="Luke 22:42" color="var(--teal)"/>
                </div>

                  <div className="attSection" id="prayer">
                  <section>
                  <h1 className="title has-text-primary tracking-wide padded">Prayer</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">God, I often pay more attention to things of man versus You and Your Word.  I often fail to follow You completely.   Help me to clearly perceive and align with Your plan as it is lovingly communicated in Your Word and reinforced by Your Spirit.  Not my will, Lord, but Yours.</p>
                  <Quote scripture="From that time Jesus began to show his disciples that he must go to Jerusalem and suffer many things from the elders and chief priests and scribes, and be killed, and on the third day be raised. And Peter took him aside and began to rebuke him, saying, ‘Far be it from you, Lord! This shall never happen to you.’ But he turned and said to Peter, ‘Get behind me, Satan! You are a hindrance to me. For you are not setting your mind on the things of God, but on the things of man.’ Then Jesus told his disciples, ‘If anyone would come after me, let him deny himself and take up his cross and follow me.’ " reference="Matthew 16:21-24" color="var(--teal)"/>
                </div>

                <div className="attSection has-background-light" id="scienceAndHealth">
                <section>
                  <h1 className="title has-text-primary tracking-wide padded">A sense of purpose is healthy!</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">There is good reason Rick Warren’s The Purpose Driven Life sold over 30 million copies, across 85 different languages. People want purpose in their life and do not live well without it. A sense of purpose brings resilience and hope in the midst of troubles.</p>
                  <p className="is-size-6 leading-normal padded">“People who have a sense of purpose in life appear to live longer, according to the latest research linking this outlook to a person's quality of life and to better physical and mental health. …Purpose was defined by the authors as a self-organizing life aim that stimulates goals, promotes healthy behaviors and gives meaning to life. The data revealed that the stronger the participants felt they had a purpose in life, the lower their risk of dying.…” - 5/24/19 article in Newsweek</p>
                  <p className="is-size-6 leading-normal padded">People with a strong sense of purpose were 63% less likely to have sleep apnea and 52% less likely to have restless leg syndrome - "Sleep Science and Practice"</p>
                </div>

                <div className="attSection" id="history">
                <section>
                  <h1 className="title has-text-primary tracking-wide padded">Why Jesus came at the perfect time in history?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Jesus came to earth at around 0 B.C. - the perfect time to allow His message to spread globally. The Population Reference Bureau estimates that the number of people who have ever lived is about 105 billion people - more than 98% of these came after the birth of Christ.</p>
                  <p className="is-size-6 leading-normal padded">300 B.C. thru 500 A.D. - Vast network of Roman roads built to sustain Roman empire allowed early missionary efforts to proceed;  Koine Greek, widely used for diplomacy and trade throughout the empire allowed good communication of the Gospel.</p>
                  <p className="is-size-6 leading-normal padded">70 A.D. - Roman destruction of temple in Jerusalem, along with Jewish oppression, dispersed  Christians widely.</p>
                  <p className="is-size-6 leading-normal padded">313-390 A.D. Constantine legalized Christianity, allowing for a consensus building of the faith, resulting in the Biblical canon and creeds of the faith.</p>
                </div>

                <div className="attSection" id="liturgy" >
                <section>
                    <h1 className="title has-text-primary tracking-wide padded">"Be Thou My Vision" - Dallan Forgaill</h1>
                    </section>
                    <p className="is-size-6 leading-normal padded">Our plans are foremost in our minds and we need to consciously sing our way toward God’s plan. </p>
                    <p className="is-size-6 leading-normal padded">"Be Thou my Vision, O Lord of my heart
Naught be all else to me, save that Thou art
Thou my best Thought, by day or by night
Waking or sleeping, Thy presence my light" - First verse</p>
                </div>

            </main>
            </div>
          </body>
        )
    }

}

export default withRouter(Planning);