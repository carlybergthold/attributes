import React, { Component } from "react";
import { withRouter } from "react-router-dom"
import '../../styles/attribute.css'
import Quote from '../../components/quote'
import Hero from '../../components/hero'
import AttributeSidebar from "../../components/attSidebar";

class Incomprehensible extends Component {

    componentDidMount() {
      window.scrollTo(0, 0);
    }

    render() {
        return(
            <body className="attPage">
            <Hero title="Incomprehensible" subtitle="More than we can humanly fathom" img="girl.png" />
            <div className="container is-fullhd has-text-left relativeMaybe" id="attributeContainer">
              <aside>
                <section id="sidebar">
                  <AttributeSidebar />
                </section>
              </aside>

              <main>
                <div className="attSection" id="definition">
                  <section>
                  <h1 className="title has-text-primary tracking-wide padded">Incomprehensible means more than we can humanly fathom.
                  </h1></section>
                  <p className="is-size-6 leading-normal padded">We humans are very inquisitive and exploring beings from birth.  We prioritize learning and have uncovered much through our science and questioning, and we will go further because we seek what we do not fully know. </p>
                  <p className="is-size-6 leading-normal padded">Regardless of my prior education, I still have plenty to learn.  Life requires me to keep up - I sometimes wonder if I will be able to learn all I need at the depth that I really need to be effective.  Even when I have all the data right in front of me, it can be hard to discern what information and conclusions I can fully trust.</p>
                </div>

                <div className="attSection" id="emotion">
                <section>
                  <h1 className="title has-text-primary tracking-wide padded">Sometimes I have doubts - is that good or bad?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Faith in God is vital to Christianity.  My doubt can appear to be an open wound - in need of healing to avoid harmful infection. However, God’s incomprehensibility naturally generates doubt. Does God really name all the stars?  How exactly was Jesus both fully human and fully God?  How can He intimately listen to and love millions of people simultaneously?  Doubt is NOT disbelief.  Doubt is uncertainty of one's convictions, while disbelief is a willful refusal to believe Who God is.  Doubt remains open to persuasion and possible learning.  Voicing my doubts to God and letting Him nurture my comprehension is good and can lead me to greater respect, hope and love of Him.</p>
                  <br></br>
                  <Quote scripture="Praise the LORD!  For it is good to sing praises to our God; for it is pleasant, and a song of praise is fitting.  The LORD builds up Jerusalem; he gathers the outcasts of Israel. He heals the brokenhearted and binds up their wounds.  He determines the number of the stars; he gives to all of them their names.  Great is our Lord, and abundant in power; his understanding is beyond measure….His delight is not in the strength of the horse, nor his pleasure in the legs of a man, but the LORD takes pleasure in those who fear him, in those who hope in his steadfast love." reference="Psalm 147:1-5, 10-11" color="var(--teal)"/>
                </div>

                <div className="attSection" id="fear">
                <section>
                  <h1 className="title has-text-primary tracking-wide padded">What exactly happens after I die?</h1>
                </section>
                  <p className="is-size-6 leading-normal padded">Some questions are certainly meant to be pondered, yet cannot be fully answered - at least in this life.  God mercifully shields me from some knowledge, leaving room for faith to fill in the gaps.  Just as I assign the best motives to a good friend in times of doubtful actions, I can trust God fully from what I do know of Him.</p>
                  <br></br>
                  <Quote scripture="Can you fathom the mysteries of God? Can you probe the limits of the Almighty? They are higher than the heavens—what can you do? They are deeper than the depths of the grave—what can you know? Their measure is longer than the earth and wider than the sea." reference="Job 11:7-9" color="var(--teal)"/>
                </div>

                <div className="attSection" id="struggle">
                <section>
                  <h1 className="title has-text-primary tracking-wide padded">What if I’m a slow learner or just can’t seem to ‘get it’?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">No one “gets” everything, especially the first time they approach a subject.  But I do need to work at learning what is really important to me in life - investing in my line of work and  in those close to me.  I need to consider also who and why I was created.  This last subject can be phrased into a single question: “Who is Jesus?”  The answer is revealed by God, who also gives me the curiosity to ask the question.</p>
                  <br></br>

                  <Quote scripture="He said to them, 'But who do you say that I am?' Simon Peter replied, 'You are the Christ, the Son of the living God.' And Jesus answered him, 'Blessed are you, Simon Bar-Jonah! For flesh and blood has not revealed this to you, but my Father who is in heaven.' " reference="Matthew 16:15-17" color="var(--teal)"/>
                </div>

                <div className="attSection" id="whoAmI">
                <section>
                  <h1 className="title has-text-primary tracking-wide padded">Only God is incomprehensible.</h1></section>
                  <p className="is-size-6 leading-normal padded">I will never fully understand this infinite being.  So how do I know Him to any extent?  I know only what He has revealed to me. </p>
                  <p className="is-size-6 leading-normal padded">In just the last 5 years (2012-2017) Americans who view themselves as religious has plummeted from 65% to 54%.  Self-describing as "religious" appears to be heading to a minority view.  Being spiritual, however, has held strong during this same time, with far more (75%) adherents. This trend is even more apparent in millennials.  Why?  Speculation is that "being spiritual, yet not religious" stems from a consumeristic attitude toward religion ("I pick and choose parts I want and make something unique that is just right for me") on one end, and on the other end a numbness from too many religious choices ("I see all the world's religions and can't or don't want to choose - so I will simply believe there is more that what I can see in this life"). - Pew Research data </p>
                  <br></br>
                  <Quote scripture="Man in his pomp yet without understanding is like the beasts that perish." reference="Psalm 49:20" color="var(--teal)"/>
                </div>

                <div className="attSection" id="biblicalChristianity">
                  <section>
                  <h1 className="title has-text-primary tracking-wide padded">Jesus in the flesh was the most comprehensible form of an incomprehensible God.</h1></section>
                  <p className="is-size-6 leading-normal padded"> Jesus was fully God and fully man.  A mystery prophesied, born, lived and revealed in the Bible, yet still mysterious. </p>

                  <Quote scripture="He said to them, 'But who do you say that I am?' Simon Peter replied, 'You are the Christ, the Son of the living God.' And Jesus answered him, 'Blessed are you, Simon Bar-Jonah! For flesh and blood has not revealed this to you, but my Father who is in heaven.' " reference="Matthew 16:15-17" color="var(--teal)"/>
                </div>

                <div className="attSection" id="soWhat">
                <section>
                  <h1 className="title has-text-primary tracking-wide padded">So what do I do now?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Search out the most legitimate revelation from God and build a life aligned with the revealed truths.  Strongly consider Christianity as revealed through the Bible, the most unique revelation of God ever. <br></br>Ask: Who is God?</p>
                  <Quote scripture="I love those who love me, and those who seek me diligently find me." reference="Proverbs 8:17" color="var(--teal)"/>
                </div>

                  <div className="attSection" id="prayer">
                  <section>
                  <h1 className="title has-text-primary tracking-wide padded">Prayer</h1>
                  </section>

                  <p className="is-size-6 leading-normal padded">God, I can not fully understand you.  You are incomprehensible.  You created me as your image, but I find you to be so different from me.  How can I ever know you?  Especially when my faith includes doubt?  Help me to honestly seek and to find you, the One True God.</p>
                  <Quote scripture="But from there you will seek the LORD your God and you will find him, if you search after him with all your heart and with all your soul." reference="Deuteronomy 4:29" color="var(--teal)"/>
                </div>

                <div className="attSection has-background-light" id="scienceAndHealth">
                <section>
                  <h1 className="title has-text-primary tracking-wide padded">The more we learn, the more we discover what we don't know.</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">As we learn, complexity increases and we catch only glimpses of new horizons that beckon.  We know of God only what He has revealed and what we can deduce from His creation.  And one of things we know is that there is so much more.</p>
                  <p className="is-size-6 leading-normal padded">Much of what we consider true today was developed using the scientific process - a systematic way of learning about the world around us.  The basic 6 steps are 1) Ask a question. 2) Conduct research into what has been determined to date. 3) Propose a hypothesis - an educated guess about what you expect is the answer.  4) Design and perform a structured experiment to test your hypothesis 5) Record observations and analyze what the data means. 6) Accept (or reject) your hypothesis and communicate your results.</p>
                  <p className="is-size-6 leading-normal padded">Most new theories today go through a peer review process in which knowledgeable people provide feedback.  If supported, the theory may be published in a scientific journal and allow others to either validate or disprove. In doing so, a consensus is developed as to what the best explanation is - until the theory is disproved or a more accurate theory is developed.</p>
                  <p className="is-size-6 leading-normal padded">All this is tremendously valuable and has developed a huge foundation of knowledge.  However rigorous, the process falls short of defining absolute truth, and at times has simply reached the wrong conclusion.  Man's ability to grasp, detect, and measure what we don't know necessarily results in what is "forever tentative" (term used by Dallin Oaks).</p>
                  <Quote scripture="For his invisible attributes, namely, his eternal power and divine nature, have been clearly perceived, ever since the creation of the world, in the things that have been made. (So they are without excuse.)" reference="Romans 1:20" color="var(--teal)"/>
                </div>

                <div className="attSection" id="history">
                <section>
                  <h1 className="title has-text-primary tracking-wide padded">The historical Biblical death and resurrection of Jesus reveal a mystery.</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Both a virgin birth and a resurrection from the dead are incomprehensible to most "rational"  adults. The documented facts and circumstances, however, are unique in history and are the pivot points of Christianity, requiring faith to believe.  The question is "If there is a God, what is He like and how would He reveal Himself to mankind?"</p>
                  <p className="is-size-6 leading-normal padded">Consider the incomprehensibility of Jesus' closest disciples not expecting Jesus' resurrection, but then being overwhelmed with the evidence to the point of dying as martyrs in defense of Him.  Consider the human weaknesses that are littered within the Biblical narrative (why does God show the frailty of followers to such degree?).  Then take in the number of prophesies already fulfilled and recognize that the ultimate single focus of both the Old and New Testaments is this revelation of Jesus Christ.</p>

                </div>

                <div className="attSection" id="liturgy" >
                <section>
                    <h1 className="title has-text-primary tracking-wide padded">"Indescribable" - Chris Tomlin</h1>
                    </section>
                    <p className="is-size-6 leading-normal padded">"Indescribable, uncontainable,<br></br>
                     You placed the stars in the sky and You know them by name.<br></br>
                     You are amazing God,<br></br>
                     All powerful, untameable,<br></br>
                     Awestruck we fall to our knees as we humbly proclaim.<br></br>
                     You are amazing God." - Chorus</p>
                </div>

            </main>
            </div>
          </body>
        )
    }

}

export default withRouter(Incomprehensible);