import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom"
import '../../styles/attribute.css'
import Quote from '../../components/quote'
import Hero from '../../components/hero'
import AttributeSidebar from "../../components/attSidebar";

class Omnipotent extends Component {

    componentDidMount() {
      window.scrollTo(0, 0);
    }

    render() {
        return(
            <body className="attPage">
            <Hero title="Omnipotent" subtitle="To have unlimited power and authority" img="girl.png" />
            <div className="container is-fullhd has-text-left relativeMaybe" id="attributeContainer">
              <aside>
                <section id="sidebar">
                  <AttributeSidebar />
                </section>
              </aside>

              <main>
                <div className="attSection" id="definition">
                  <section>
                  <h1 className="title has-text-primary tracking-wide padded">Omnipotent means to have unlimited power and authority.
                  </h1></section>
                  <p className="is-size-6 leading-normal padded">It means we can do whatever we want to do.  The desire for power and control is found from toddlers to teens, from C-suites to nursing home suites. "Generally, when people say they want power, what they really want is autonomy. And when they get that autonomy, they tend to stop wanting power." Citing "new research", this article explains that most people do not want power over others, they simply want power to do what they want.   - The Atlantic, 3/22/16 edition </p>
                  <p className="is-size-6 leading-normal padded">Can I really accomplish all I set out to do?  My fear of potential failure can result in simple nervousness to a complete halt or change of plans. In all of it, God remains the ultimate source of power.</p>
                </div>

                <div className="attSection" id="emotion">
                <section>
                  <h1 className="title has-text-primary tracking-wide padded">I am getting nervous about what I need to do soon.</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">We always like to feel in control.  Nervousness may cause me to visualize potential problems and take appropriate actions which will help me accomplish my goals.  But, in excess, it can cause stress-induced symptoms like lack of sleep, obsessive thinking, fatigue and GI problems.  It can even sabotage the very plans I am working so diligently on.</p>                  
                  <p className="is-size-6 leading-normal padded">God is able to help me complete all the plans He desires for me. When He does, I should be thankful and praise Him!  But He can also frustrate my plans - for my good, even though I might not see it as good.  When things seem out-of-control, I can stop, take a deep breath and trust that God is working for my good, regardless of any mounting evidence to the contrary. This very act of faith helps me to reduce my nervousness, build needed confidence to tackle tasks, and accept the inevitable failures that result because I am not omnipotent. </p>
                  <br></br>
                  <Quote scripture="Let all the earth fear the LORD; let all the inhabitants of the world stand in awe of him!  For he spoke, and it came to be; he commanded, and it stood firm.  The LORD brings the counsel of the nations to nothing; he frustrates the plans of the peoples….Our soul waits for the LORD; he is our help and our shield. For our heart is glad in him, because we trust in his holy name.  Let your steadfast love, O LORD, be upon us, even as we hope in you." reference="Psalm 33:8-10, 20-2" color="var(--teal)"/>
                </div>

                <div className="attSection" id="fear">
                <section>
                  <h1 className="title has-text-primary tracking-wide padded">I’m afraid I might fail.</h1>
                </section>
                  <p className="is-size-6 leading-normal padded">It is natural and inevitable for humans to fail.  God knows this and does not author this type of fear.  He instead gives me all the power I need for a life of love and service to others, and the clarity and sensibility to do what I know is best according to His truth.</p>
                  <p className="is-size-6 leading-normal padded">"People who have a fear of failure are motivated to avoid failing not because they cannot manage the basic emotions of disappointment, anger, and frustration that accompany such experiences but because failing also makes them feel deep shame.  Shame is a psychologically toxic emotion because instead of feeling bad about our actions (guilt) or our efforts (regret), shame makes us feel bad who we are. Shame gets to the core of our egos, our identities, our self-esteem, and our feelings of emotional well-being." - Psychology Today, 6/18/13</p>
                  <br></br>
                  <Quote scripture="For God gave us a spirit not of fear but of power and love and self-control." reference="2 Tim 1:7" color="var(--teal)"/>
                </div>

                <div className="attSection" id="struggle">
                <section>
                  <h1 className="title has-text-primary tracking-wide padded">What if I cannot do what I really need to do?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">No one but God can do everything.  My weakness should drive me to get help from others who have what I lack.  My first help is God, who holds all power and knowledge.  He often works through other people in my life, but just as often works in my own heart and mind - changing my direction, perspective, timing, and much more.  Relying on God brings Him glory.</p>
                  <br></br>
                  <Quote scripture="But he (God speaking) said to me (Paul), 'My grace is sufficient for you, for my power is made perfect in weakness.' Therefore I will boast all the more gladly of my weaknesses, so that the power of Christ may rest upon me. For the sake of Christ, then, I am content with weaknesses, insults, hardships, persecutions, and calamities. For when I am weak, then I am strong." reference="2 Cor 12:9-10" color="var(--teal)"/>
                </div>

                <div className="attSection" id="whoAmI">
                <section>
                  <h1 className="title has-text-primary tracking-wide padded">Only God is omnipotent.</h1></section>
                  <p className="is-size-6 leading-normal padded">My intense desire for control originates from God's image within me.  Ideally this desire is satisfied by aligning my desires with God’s and then fully depending upon and enjoying His capabilities.  However, I often turn this desire inward, toward my own agenda, repeatedly frustrating myself from clear and present limitations which God has placed for my own good.</p>
                  <br></br>
                  <Quote scripture="I (Paul speaking) can do all things through him (God) who strengthens me." reference="Phil 4:13" color="var(--teal)"/>
                </div>

                <div className="attSection" id="biblicalChristianity">
                  <section>
                  <h1 className="title has-text-primary tracking-wide padded">Jesus was raised from the dead through the power of resurrection.</h1></section>
                  <p className="is-size-6 leading-normal padded">Resurrection power is surely one of the mightiest powers ever demonstrated (aside from creation itself) and is a key component of Christian belief.  Believers are already “raised” spiritually from the “dead”, but will follow Jesus physically into a resurrected body which can then live eternally with God.</p>
                  <Quote scripture="For the word of the cross is folly to those who are perishing, but to us who are being saved it is the power of God." reference="1 Cor 1:18" color="var(--teal)"/>
                </div>

                <div className="attSection" id="soWhat">
                <section>
                  <h1 className="title has-text-primary tracking-wide padded">So what do I do now?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Recognize that my very existence, strength and authority has been only temporarily delegated to me from God.  First thank God for any difficulty I have been able to endure or overcome and then trust Him with what remains by seeking His wisdom and strength.   Ask: Where do I need more strength or control?</p>
                  <Quote scripture="Being strengthened with all power, according to his glorious might, for all endurance and patience with joy, giving thanks to the Father, who has qualified you to share in the inheritance of the saints in light." reference="Col 1:11-12" color="var(--teal)"/>
                </div>

                  <div className="attSection" id="prayer">
                  <section>
                  <h1 className="title has-text-primary tracking-wide padded">Prayer</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Mighty God, you alone can control all things.  Even knowing this, I can still question why You allow certain things to happen, especially when they are different from what I want or would do (if I were god).  Help me to remember that You alone are God and let my weaknesses bring You glory.</p>
                  <Quote scripture="But he (i.e. God) said to me (Paul), 'My grace is sufficient for you, for my power is made perfect in weakness.' Therefore I will boast all the more gladly of my weaknesses, so that the power of Christ may rest upon me. For the sake of Christ, then, I am content with weaknesses, insults, hardships, persecutions, and calamities. For when I am weak, then I am strong." reference="2 Cor 12:9-10" color="var(--teal)"/>
                </div>

                <div className="attSection has-background-light" id="scienceAndHealth">
                <section>
                  <h1 className="title has-text-primary tracking-wide padded">How did God create “the heavens and the earth” - from a scientific perspective?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Einstein made famous the connection between energy and mass through the equation E=MC2.  Much power can be created from matter through either fusion and fission.  Uranium weighing only about a third of one US dime devastated Hiroshima, killing 66,000 people.   But the equation goes both ways.  Matter can be created from energy, though it would take an immense amount of power.  In 2014 the Imperial College of London suggested a way to turn a pair of photons (particles of light/energy) into an electron and its antiparticle, a positron (i.e. mass).  Given God's unlimited power, science supports the creation of the "heavens and earth" mass though the energy of His spoken word.  No other scientific theory better explains the origination of mass as we experience it today.</p>
                  <p className="is-size-6 leading-normal padded">"For his invisible attributes, namely, his eternal power and divine nature, have been clearly perceived, ever since the creation of the world, in the things that have been made. So they are without excuse." - Rom 1:20</p>
                </div>

                <div className="attSection" id="history">
                <section>
                  <h1 className="title has-text-primary tracking-wide padded">Why do we celebrate Easter?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Easter celebrates Jesus’ Resurrection from the dead.  Since Jesus’ resurrection is key in Christianity and was the most powerful act recorded in human history, many books have been written regarding the veracity of the Bible.  Why are these resurrection accounts credible?
  1 - There are four separate gospel accounts (Matthew, Mark, Luke and John) that describe a cohesive history of Jesus, with four different perspectives about one with great power.
  2 - The accounts are realistic - including unflattering and embarrassing details about both Jesus and His disciples.  Writers in that era simply did not produce realistic fiction and then claim it to be true.
  3 - Manuscript evidence is the strongest of any ancient literature and archeological evidence supports Biblical details.
  4 - Why did a group of staunchly monotheistic Jewish people in first-century Israel start worshiping a man who was executed on a shameful cross?  And why do people continue to be transformed to the good today?</p>
                  <p className="is-size-6 leading-normal padded">Raising Jesus from the dead is nearly unbelievable and must have concrete evidence to support its historicity.  Obviously the Bible contains 4 separate gospel accounts (Mark was the earliest written in ~70 A.D.), but there is also the account of Josephus from 93-94 A.D. in the Testimonium Flavianum, Book 18 Chapt 3,3.  As a non-Christian view of what happened with Christ, its veracity has been hotly contested.</p>
                  <p className="is-size-6 leading-normal padded">Wikipedia notes that the most probable version read "Now there was about this time Jesus, a wise man. For he was a doer of startling deeds, a teacher of such men as receive the truth with pleasure. And he gained a following both among many Jews and many of Greek origin. And when Pilate, at the suggestion of the principal men amongst us, condemned him to the cross, those that loved him at the first did not forsake him. And the tribe of Christians, so named from him, are not extinct at this day."</p>

                </div>

                <div className="attSection" id="liturgy" >
                <section>
                    <h1 className="title has-text-primary tracking-wide padded">"A Mighty Fortress is Our God" - Martin Luther</h1>
                    </section>
                    <p className="is-size-6 leading-normal padded">"A mighty Fortress is our God,
A Bulwark never failing;
Our Helper He amid the flood
Of mortal ills prevailing.""             - 1st half of verse #1</p>
                </div>

            </main>
            </div>
          </body>
        )
    }

}

export default withRouter(Omnipotent);