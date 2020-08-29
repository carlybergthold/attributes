import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom"
import '../../styles/attribute.css'
import Grid from '../../components/grid'
import Testimonial from '../../components/testimonial'
import Hero from '../../components/hero'
import AttributeSidebar from "../../components/attSidebar";

class Good extends Component {

    componentDidMount() {
      window.scrollTo(0, 0);
    }

    render() {
        return(
            <body className="attPage">
            <Hero title="Good" subtitle="All that pleases" img="girl.png" />
            <div className="container is-fullhd has-text-left relativeMaybe" id="attributeContainer">
              <aside>
                <section id="sidebar">
                  <AttributeSidebar />
                </section>
              </aside>

              <main>
                <div className="attSection" id="definition">
                  <section>
                  <h1 className="title has-text-primary tracking-wide padded">Good means all that pleases God.
                  </h1></section>
                  <p className="is-size-6 leading-normal padded">We want to live the good life and  truly want to be perceived as a good person.  We normally root for the good guys to win: Luke Skywalker vs. The Empire,   Harry Potter vs. Voldemort, Mother Teresa vs. Hitler.  The good deserve to win - and even seem entitled to it.  If we believe in heaven, we often think we get there by being “good enough,” whether this is following a set of rules or by just being “better than some.”</p>
                  <p className="is-size-6 leading-normal padded">I tend to feel pleased when I get what I need and desire.  And it’s not just about me - I also like bringing good to others.  I worry, however, that I might not be good enough to attain all I need and desire, or that I might fail to please others or bring them good when it matters most.</p>
                </div>

                <div className="attSection" id="emotion">
                <section>
                  <h1 className="title has-text-primary tracking-wide padded">Why do I sometimes feel unsatisfied even after I get what I want?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">All my needs and desires have been created by God and are good.  However, I can try to meet my needs and desires in ways that disregard God and His design, and are thus harmful. My greatest feeling of satisfaction will come from having my strongest desires met in a way that gratefully honors God.</p>
                  <p className="is-size-6 leading-normal padded"> "Once Eve doubted the goodness of God, it was a great deal easier for her to disobey Him. If God was not good and was not acting for her good, then why should she obey Him?  Indeed, why should she not act independently of God in seeking her own good—the forbidden fruit?" - Deffinbaugh</p>
                  <br></br>
                  <Testimonial quote="The LORD is gracious and merciful, slow to anger and abounding in steadfast love. The LORD is good to all, and his mercy is over all that he has made. All your works shall give thanks to you, O LORD, and all your saints shall bless you!" reference="Psalm 145:8-10" color="var(--teal)"/>
                </div>

                <div className="attSection" id="fear">
                <section>
                  <h1 className="title has-text-primary tracking-wide padded">What do I do if I am not good enough?</h1>
                </section>
                  <p className="is-size-6 leading-normal padded">Life is hard - I go to work, make and keep relationships, all while juggling a myriad of daily tasks.  While others seem to live easily, I ask myself “Will I be good enough?”  In reality, everyone asks this basic life question.  And the key truth is that no one is good enough to earn a relationship with God apart from the work of Christ.  So I can only achieve “success” with God when I realize I am not good enough.</p>
                  <br></br>
                  <Testimonial quote="For all have sinned and fall short of the glory of God," reference="Romans 3:23" color="var(--teal)"/>
                </div>

                <div className="attSection" id="struggle">
                <section>
                  <h1 className="title has-text-primary tracking-wide padded">How can I find good in my last failure?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Failure is an integral part of life, but it should never define a life.  It brings to me experience, resilience, learning and growth.  Failure can point out my own limitations and help me rely upon others. Sanctification in a believer’s life implies a lifetime of failure, as well as redemption. </p>
                  <br></br>
                  <Testimonial quote="Nearness to God—intimate fellowship with God—is our highest good. We may say then that whatever interferes with our nearness to God, our fellowship with Him, is actually evil. And whatever draws us into a deeper fellowship with God is actually “good.” When God brings suffering and adversity into our lives, our confidence in His goodness should not be undermined. Instead, we should be reassured of His goodness to us." reference="Deffinbaugh" color="var(--teal)"/>
                </div>

                <div className="attSection" id="whoAmI">
                <section>
                  <h1 className="title has-text-primary tracking-wide padded">Only God is good.</h1></section>
                  <p className="is-size-6 leading-normal padded">I may think I am good, but my measuring scale is off.  I tend to measure by comparison rather than a true standard.  When I find someone worse than me, I can feel better about myself.  However, when I compare myself to God, I find I have nothing good in me.  My only goodness stems from His goodness in that I am His creation and work. The original Saxon meaning of our English word God is "The Good” because it was considered that God alone is good.</p>
                  <br></br>
                  <Testimonial quote="There is none who does good, not even one." reference="Psalm 14:3b" color="var(--teal)"/>
                </div>

                <div className="attSection" id="biblicalChristianity">
                  <section>
                  <h1 className="title has-text-primary tracking-wide padded">Jesus was called good by many.</h1></section>
                  <p className="is-size-6 leading-normal padded">Many called Him good, but few saw that He was also God.  Jesus equated the two in this verse to confess the truth that He was not just "good," but was indeed God. A merely “good” man would never say He is God, because he wouldn't want to confess what is not true.  Only our good God can and does use for good what I may see as evil, such as the cross - a shameful instrument of Jesus' death transformed into saving grace through love.</p>
                  <Testimonial quote="And Jesus said to him, 'Why do you call me good? No one is good except God alone.'" reference="Mark 10:18" color="var(--teal)"/>
                </div>

                <div className="attSection" id="soWhat">
                <section>
                  <h1 className="title has-text-primary tracking-wide padded">So what do I do now?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Define good as whatever comes from God - not just what I want or what brings me pleasure and comfort. Explore His goodness - His words, His commands, His attributes and His innate image within each of us.  <br></br>Ask: What is good?  And how do I know? What standard do I use to discern good from evil?</p>
                  <Testimonial quote="Every good gift and every perfect gift is from above, coming down from the Father of lights with whom there is no variation or shadow due to change." reference="James 1:17" color="var(--teal)"/>
                </div>

                  <div className="attSection" id="prayer">
                  <section>
                  <h1 className="title has-text-primary tracking-wide padded">Prayer</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Lord, you are good and act only in good ways.  I may question your goodness when I look from my limited perspective.  Help me to clearly see and meditate on you and your goodness.</p>
                  <Testimonial quote="Oh, taste and see that the LORD is good!" reference="Psalm 34:8a" color="var(--teal)"/>
                </div>

                <div className="attSection has-background-light" id="scienceAndHealth">
                <section>
                  <h1 className="title has-text-primary tracking-wide padded">Good is not always simply the absence of bad.</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Good can include the vigorous ability to adapt in the midst of threatening bad. “Good” health is very complex, going beyond what can be measured, tested or fully understood.</p>
                  <p className="is-size-6 leading-normal padded">"Health is a state of complete physical, mental and social well-being and not merely the absence of disease or infirmity." - WHO, 1948.</p>
                  <p className="is-size-6 leading-normal padded">“Your mind can be a powerful healing tool when given the chance. The idea that your brain can convince your body a fake treatment is the real thing — the so-called placebo effect — and thus stimulate healing has been around for millennia. Now science has found that under the right circumstances, a placebo can be just as effective as traditional treatments.</p>
                  <p className="is-size-6 leading-normal padded">‘The placebo effect is more than positive thinking — believing a treatment or procedure will work. It's about creating a stronger connection between the brain and body and how they work together’….they have been shown to be most effective for conditions like pain management, stress-related insomnia, and cancer treatment side effects like fatigue and nausea.” - “The power of the placebo effect” from Harvard Health on 8/9/19</p>
                </div>

                <div className="attSection" id="history">
                <section>
                  <h1 className="title has-text-primary tracking-wide padded">When did Thanksgiving become an officially observed holiday?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">When I experience much good and should be most grateful, I tend to presume its continuation.  When I eventually experience bad, the contrast shakes thankfulness out of what good there is left.</p>
                  <p className="is-size-6 leading-normal padded">In 1789, George Washington called for an official celebratory “day of public thanksgiving and prayer.” While Congress overwhelmingly agreed to Washington’s suggestion, the holiday did not become an annual event until 1863, during the difficulties of the Civil War.  While expressing gratitude for a pivotal Union Army victory at Gettysburg, President Abraham Lincoln announced an official Thanksgiving holiday. </p>
                  <Testimonial quote="Gratitude is the return justly required from the objects of His beneficence, yet is it often withheld from our great Benefactor simply because His goodness is so constant and so abundant. It is lightly esteemed because it is exercised toward us in the common course of events. It is not felt because we daily experience it." reference="A. W. Pink" color="var(--teal)"/>
                </div>


                <div className="attSection" id="liturgy" >
                <section>
                    <h1 className="title has-text-primary tracking-wide padded">"Come Thou Fount of Every Blessing" - Robert Robison (Our need is to "tune our hearts" to what is truly good.)</h1>
                    </section>
                    <p className="is-size-6 leading-normal padded">"Come, Thou Fount of every blessing<br></br>
Tune my heart to sing Thy grace<br></br>
Streams of mercy, never ceasing<br></br>
Call for songs of loudest praise<br></br>
Teach me some melodious sonnet<br></br>
Sung by flaming tongues above<br></br>
Praise the mount, I'm fixed upon it<br></br>
Mount of Thy unchanging love" - 1st verse</p>
                </div>

            </main>
            </div>
          </body>
        )
    }

}

export default withRouter(Good);