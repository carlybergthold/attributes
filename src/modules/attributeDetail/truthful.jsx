import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom"
import '../../styles/attribute.css'
import Hero from '../../components/hero'
import AttributeSidebar from "../../components/attSidebar";
import Quote from '../../components/quote'

class Truthful extends Component {

    // componentDidMount() {
    //   window.scrollTo(0, 0);
    // }

    render() {
        return(
            <body className="attPage">
            <Hero title="Truthful" subtitle="To provide unobscured reality" icon="truthful" />
            <div className="container is-fullhd has-text-left relativeMaybe" id="attributeContainer">
              <aside>
                <section id="sidebar">
                  <AttributeSidebar />
                </section>
              </aside>

              <main>
                <div className="attSection" id="definition">
                  <section>
                  <h1 className="title has-text-primary tracking-wide padded">Truthful means providing unobscured reality.
                  </h1></section>
                  <p className="is-size-6 leading-normal padded">We desperately want and need truth to decide and act appropriately - whether it comes from our doctor, spouse or media source.  Shades of truth, biases, misperceptions, fear, embarrassment, hidden motives and much more obscure truth. All these obstructions make truth elusive, but even more valuable.</p>
                  <p className="is-size-6 leading-normal padded">“….Rather than making decisions on what is true and not true (classic media model), we have to make decisions on what is most probable (quantum media model). To do this, we can't only look at a single event and ask, “did this individual perform the act that is being documented either in the news or through some digital content?” We must also ask, "does this act fit within a high or low probability of their previous acts as documented by other media?" It forces a more holistic approach.” - How to Find the Truth in Our "Fake News" World - 8/10/18 article in Psychology Today</p>
                  <p className="is-size-6 leading-normal padded">Because truthfulness is elusive, I may distrust others because of my prior experiences.  This distrust can cause me to be very careful what I do or say around another.  As I struggle to determine what is true around me, I also need to consider my internal truthfulness - not only what comes out of my mouth, but what I tell myself about who I am and why I do what I do.  Self-deception may be the most difficult untruthfulness I must address.</p>
                </div>

                <div className="attSection" id="emotion">
                <section>
                  <h1 className="title has-text-primary tracking-wide padded">How can I ever trust someone who is untrustworthy?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">It’s hard to trust a liar.  It is also hard to trust anyone who is unforgiving, inconsistent, distant, not compassionate, often wrong or incompetent, or extremely needy and selfish.  In other words, it is hard to trust anyone who acts imperfectly or ungodly - which, at times, includes every human.  Trusting any other person, then, will include risk.  However, seeking and standing firm in truth will help build the level of trust.  I must seek the truth in what others tell me, what I tell others and especially what I tell myself.</p>
                  <p className="is-size-6 leading-normal padded">So what if I feel I cannot trust God?  The Psalmist below felt rejected by God based on his circumstances, which can certainly lower trust levels.  But the Psalmist then clings to foundational truths he does trust - that God is worthy of praise and the source of hope, joy, and salvation, and that He does not reject His own.  He then speaks these truths to his distrusting soul.  Continuously returning to, and resting in, the anchor of fundamental truths is vital.  For a Christian, this means reminding myself of the gospel, who God is, and who I am in Christ.</p>
                  <br></br>
                  <Quote scripture="“Vindicate me, O God, and defend my cause against an ungodly people, from the deceitful and unjust man deliver me!  For you are the God in whom I take refuge; why have you rejected me?  Why do I go about mourning because of the oppression of the enemy?  Send out your light and your truth; let them lead me; let them bring me to your holy hill and to your dwelling!  Then I will go to the altar of God, to God my exceeding joy, and I will praise you with the lyre, O God, my God.  Why are you cast down, O my soul, and why are you in turmoil within me?  Hope in God; for I shall again praise him, my salvation and my God." reference="Psalm 43:1-5"/>
                </div>

                <div className="attSection" id="fear">
                <section>
                  <h1 className="title has-text-primary tracking-wide padded">How can I know if I am believing a lie?</h1>
                </section>
                  <p className="is-size-6 leading-normal padded">My default mode as a human is to believe another person unless I have reason to disbelieve, which makes me vulnerable to deception.  Relying on visible tells to indicate whether someone is lying is not often effective unless I know the person well. Considering another’s motives may be helpful - most people lie so they can 1) protect or promote themselves, 2) get what they want or 3) harm another.  So past experience with the person and reasoning out likely motives are two good ways to help determine truthfulness.</p>
                  <p className="is-size-6 leading-normal padded">The most difficult lie to detect can be the one I am telling myself.  Listening to and relying on God’s word and trusted, loving friends will help.  I can also still follow the guidance above regarding tells and motives:  Have I been susceptible to certain deceptions in the past?  What tangible ‘tells’ should I be aware of?  Am I behaving out of step with who I claim or aim to be?  Is something motivating me to believe things about myself that are false?</p>
                  <br></br>
                  <Quote scripture="If anyone thinks they are something when they are not, they deceive themselves." reference="Galatians 6:3" color="var(--teal)"/>
                  <br></br>
                  <Quote scripture="But be doers of the word, and not hearers only, deceiving yourselves." reference="James 1:22" color="var(--teal)"/>
                </div>

                <div className="attSection" id="struggle">
                <section>
                  <h1 className="title has-text-primary tracking-wide padded">How do I know what is true?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Reality endures, so what is true eventually reveals itself over time.  The truth of gravity reveals itself repeatedly - leaves fall to the ground and water seeks the lowest point.  Tangible evidence will point toward truth.</p>
                  <p className="is-size-6 leading-normal padded">Is the Biblical God true?  The Bible describes God with certain immutable attributes and declares that man was created in God’s image, although marred by sin which distorts this image.   Evidence of these imprinted ideals (like valuing truth) and the ensuing struggle with sin (like wanting to tell a white lie) can be found in all cultures, across all times.  Such enduring evidence points to what is true - what I can trust - freeing me to best  understand and live life.</p>
                  <br></br>
                  <Quote scripture="Pilate said to him (Jesus), 'What is truth?' " reference="John 18:38a" />
                  <br></br>
                  <Quote scripture="So Jesus said to the Jews who had believed him, ‘If you abide in my word, you are truly my disciples, and you will know the truth, and the truth will set you free.’ " reference="John 8:31-32" />
                </div>

                <div className="attSection" id="whoAmI">
                <section>
                  <h1 className="title has-text-primary tracking-wide padded">Only God knows what is true.</h1>
                </section>
                  <p className="is-size-6 leading-normal padded">Although I may confidently believe that all my thoughts are true, they are very likely not.  Real truth is uncovered through a combination of observance (science), educated reason (logic), and faith (which every person holds to some degree).</p>
                  <br></br>
                  <Quote scripture="Jesus said, 'I am the light of the world.  Whoever follows me will never walk in darkness, but will have the light of life." reference="John 8:12" />
                </div>

                <div className="attSection" id="biblicalChristianity">
                  <section>
                  <h1 className="title has-text-primary tracking-wide padded">Jesus is truth.</h1></section>
                  <p className="is-size-6 leading-normal padded">Jesus was truthful, but also referred to Himself as truth itself - the reality of God coming into the world to restore man into relationship with Himself.  The Cross not only happened, but was the key true event of all history.</p>
                  <Quote scripture="Jesus answered, 'I am the way and the truth and the life.  No one comes to the Father except by me.'" reference="John 14:6" color="var(--teal)"/>
                  <br></br>
                  <Quote scripture="For we cannot do anything against the truth, but only for the truth." reference="2 Corinthians 16:8" color="var(--teal)"/>
                
                </div>

                <div className="attSection" id="soWhat">
                <section>
                  <h1 className="title has-text-primary tracking-wide padded">So what do I do now?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Let the Bible anchor me in a true perspective which can dispel  my misperceptions or self-deception.  Daily test, in my real life, the reality of the truths that are revealed.  Remind me of who I am in Christ.<br>
                  </br>
                  Ask:  How do I determine if something is actually true?
                  </p>
                  <Quote scripture="Do not merely listen to the word, and so deceive yourselves. Do what it says." reference="James 1:22" color="var(--teal)"/>
                </div>

                  <div className="attSection" id="prayer">
                  <section>
                  <h1 className="title has-text-primary tracking-wide padded">Prayer</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Help me, Lord, to trust in the truth of Your word and in who You are.  Forgive me when I tell myself things that are not true simply so I can live according to my will and not Yours.  Above all, keep me focused on Jesus, who is Truth.</p>
                  <Quote scripture="But for those who are self-seeking and who reject the truth and follow evil, there will be wrath and anger." reference="Romans 2:8" color="var(--teal)"/>
                </div>

                <div className="attSection has-background-light" id="scienceAndHealth">
                <section>
                  <h1 className="title has-text-primary tracking-wide padded">Absolute truth is absolutely elusive.</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">“Proven” science is actually a consensus-building of experts who observe perceived reality.  It is likely close to truth, but is always subject to change based on the latest and best information  Observable reality of human nature supports Christian theology, but it also cannot be proven as absolute truth. However, pursuing truth within both scientific and spiritual established frameworks seems much more fruitful than creating my own truth.</p>
                  <p className="is-size-6 leading-normal padded">Computer and video technology has developed a way to revise digital video in order to have the on-screen character appear to say something completely different from what was actually said.  Developed to easily correct hard to re-create movie scenes, it can also be used to show people saying whatever you want them to say, with all the proper nuances of speech and visuals, given enough video and speech data from the person.  And the process to detect what is false is difficult, time-consuming and often considered not worth the effort.</p>
                  <p className="is-size-6 leading-normal padded">My mind can alter reality in the same way.  I can splice my wants into presented truth and create falsehood.  Medieval Christian interpretation of the cosmos pridefully made the earth the center of the universe.  When Renaissance-era Copernicus presented a scientifically-based alternative, the church had a very difficult time reconciling the difference.  However, today both the reality of our solar system and the truth of the gospel endure together.</p>
                  <p className="is-size-6 leading-normal padded">31% of people globally consider themselves to be Christian, making it the largest religion in the world.  The next largest group is Muslim at 23%. - Pew Research</p>
                </div>

                <div className="attSection" id="history">
                <section>
                  <h1 className="title has-text-primary tracking-wide padded">Should a doctor tell a patient the truth of a fatal prognosis?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">What if the truth causes the patient to become depressed, worsening the original condition?  For many years, hope won over truthfulness - at least until the last century.</p>
                  <p className="is-size-6 leading-normal padded">The Hippocratic corpus (~400 BC) is silent on the issue of doctors lying to patients, but warns doctors of patients' lies and encouraged doctors to be economical with the truth and to ‘reveal... nothing of the patient's future or present condition’ which, according to the Greek author, could cause patients to take ‘a turn for the worse.’  This advice was followed, per the doctor’s judgment, for centuries.  Today, although doctors still weigh the potential effects judiciously, they are much more apt to be truthful with their patients, especially to those who want the truth.</p>

                </div>

                <div className="attSection" id="liturgy" >
                <section>
                    <h1 className="title has-text-primary tracking-wide padded">"Battle Hymn" - Julia Howe</h1>
                    </section>
                    <p className="is-size-6 leading-normal padded">"Mine eyes have seen the glory of the coming of the Lord;<br></br>
                    He is trampling out the vintage where the grapes of wrath are stored;<br></br>
                    He hath loosed the fateful lightning of His terrible swift sword;<br></br>
                    His truth is marching on." - First verse</p>
                </div>

            </main>
            </div>
          </body>
        )
    }

}

export default withRouter(Truthful);