import React, { Component } from "react";
import { withRouter } from "react-router-dom"
import '../../styles/attribute.css'
import Quote from '../../components/quote'
import styleMethods from "../../methods/styleMethods";
import BaseAttributeDetail from '../../modules/attributeDetail/baseAttributeDetail';

class Omnipotent extends Component {

    render() {
        return(
          <BaseAttributeDetail
            title="Omnipotent"
            subtitle="To have unlimited power and authority"
            definition={
              <section>
                  <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("omnipotent")}}>Omnipotent means to have unlimited power and authority.
                  </h1></section>
                  <p className="is-size-6 leading-normal padded">It means we can do whatever we want to do.  The desire for power and control is found from toddlers to teens, from C-suites to nursing home suites. "Generally, when people say they want power, what they really want is autonomy. And when they get that autonomy, they tend to stop wanting power." Citing "new research", this article proposes that most people do not want power over others, they simply want power to do what they want.   - The Atlantic, 3/22/16 edition </p>
                  <p className="is-size-6 leading-normal padded">So do I really have the power to accomplish all I set out to do?  Or could I lose control of the situation?  Even the slight possibility of failure can cause me to work harder, become annoyingly nervous, or abandon my plans even before I start. Regardless of my response, God remains the ultimate source of power and control.</p>
              </section>
            }
            emotion={
              <section>
                 <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("omnipotent")}}>I am getting anxious about what I need to do soon.</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">We always like to feel in control.  Anxiety may cause me to visualize potential problems and take appropriate actions which will help me accomplish my goals.  But, in excess, it can cause stress-induced symptoms like lack of sleep, obsessive thinking, fatigue and GI problems.  It can even sabotage the very plans I am working so diligently on.</p>                  
                  <p className="is-size-6 leading-normal padded">All-powerful God is able to help me complete all the plans He desires for me. When He does, I should be thankful and praise Him!  But He can also frustrate my plans - for my good, even though I might not see it as good.  When things seem out-of-control or I feel powerless to fix them, I can stop, take a deep breath and trust that God is working for my good, regardless of any mounting evidence to the contrary. This very act of faith helps reduce my anxiety, build needed confidence to tackle tasks, and accept the inevitable failures that result because I am not omnipotent. </p>
                  <br></br>
                  <Quote scripture="Let all the earth fear the LORD; let all the inhabitants of the world stand in awe of him!  For he spoke, and it came to be; he commanded, and it stood firm.  The LORD brings the counsel of the nations to nothing; he frustrates the plans of the peoples….Our soul waits for the LORD; he is our help and our shield. For our heart is glad in him, because we trust in his holy name.  Let your steadfast love, O LORD, be upon us, even as we hope in you." reference="Psalm 33:8-10, 20-2" color="var(--teal)"/>               
              </section>
            }
            fear={
              <section>
                 <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("omnipotent")}}>I’m afraid I might fail.</h1>
                </section>
                  <p className="is-size-6 leading-normal padded">It is natural and inevitable for humans to fail.  God knows this and does not author this type of fear.  He instead gives me all the power and confidence I need for a life of love and service to others. He gives me the clarity and sensibility to know and do what is best according to His truth.</p>
                  <p className="is-size-6 leading-normal padded">"People who have a fear of failure are motivated to avoid failing not because they cannot manage the basic emotions of disappointment, anger, and frustration that accompany such experiences but because failing also makes them feel deep shame.  Shame is a psychologically toxic emotion because instead of feeling bad about our actions (guilt) or our efforts (regret), shame makes us feel bad about who we are. Shame gets to the core of our egos, our identities, our self-esteem, and our feelings of emotional well-being." - Psychology Today, 6/18/13 (God's wisdom shining though a secular source)</p>
                  <br></br>

                  <Quote scripture="For God gave us a spirit not of fear but of power and love and self-control." reference="2 Timothy 1:7" color="var(--teal)"/>               
              </section>
            }
            struggle={
              <section>
                  <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("omnipotent")}}>What if I cannot do what I really need to do?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">No one but God can do everything.  My weakness should drive me to get help from others who have what I lack.  My first source of help is God, who holds all power and knowledge.  He often works through other people in my life, but just as often works in my own heart and mind - changing my direction, perspective, timing, and much more.  Relying on God brings Him glory.</p>
                  <br></br>

                  <Quote scripture="But he (God speaking) said to me (Paul), 'My grace is sufficient for you, for my power is made perfect in weakness.' Therefore I will boast all the more gladly of my weaknesses, so that the power of Christ may rest upon me. For the sake of Christ, then, I am content with weaknesses, insults, hardships, persecutions, and calamities. For when I am weak, then I am strong." reference="2 Corinthians 12:9-10" color="var(--teal)"/>              
              </section>
            }
            whoAmI={
              <section>
                 <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("omnipotent")}}>Only God is omnipotent.</h1></section>
                  <p className="is-size-6 leading-normal padded">My intense desire for control originates from God's image within me.  Ideally this desire is satisfied by aligning my desires with God’s and then fully depending upon and enjoying His capabilities.  However, I often turn this desire inward, toward my own agenda, repeatedly frustrating myself about clear and present limitations which God has placed for my own good.</p>
                  <br></br>

                  <Quote scripture="I (Paul speaking) can do all things through him (God) who strengthens me." reference="Philippians 4:13" color="var(--teal)"/>               
              </section>
            }
            biblicalChristianity={
              <section>
                   <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("omnipotent")}}>All-powerful God raised Jesus from the dead through the power of resurrection.</h1></section>
                  <p className="is-size-6 leading-normal padded">Jesus DIED.  His Father, God, made Him alive again!  That is surely one of the mightiest powers ever demonstrated (along with creation itself) and is a key component of Christian belief.  God has already spiritually "raised" believers from the “dead” with that same power and will cause them to follow Jesus physically into a resurrected body to live eternally with God.</p>

                  <Quote scripture="For the word of the cross is folly to those who are perishing, but to us who are being saved it is the power of God." reference="1 Corinthians 1:18" color="var(--teal)"/>               
              </section>
            }
            soWhat={
              <section>
                 <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("omnipotent")}}>So what do I do now?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Recognize that my very existence, strength and authority has been only temporarily delegated to me from God.  First thank God for the power He's given me to endure or overcome difficulties.  Then trust Him with what remains by seeking His wisdom and strength.   <br></br>Ask: Where do I need more of God's strength or control?</p>
                  <Quote scripture="Being strengthened with all power, according to his glorious might, for all endurance and patience with joy, giving thanks to the Father, who has qualified you to share in the inheritance of the saints in light." reference="Colosians 1:11-12" color="var(--teal)"/>               
              </section>
            }
            prayer={
              <section>
                   <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("omnipotent")}}>Prayer</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Mighty God, you alone can control all things.  Even knowing this, I may still question why You allow certain things to happen, especially when they are different from what I want or would do (if I were god).  Help me to remember that You alone are God and let my weaknesses bring You glory.</p>

                  <Quote scripture="But he (i.e. God) said to me (Paul), 'My grace is sufficient for you, for my power is made perfect in weakness.' Therefore I will boast all the more gladly of my weaknesses, so that the power of Christ may rest upon me. For the sake of Christ, then, I am content with weaknesses, insults, hardships, persecutions, and calamities. For when I am weak, then I am strong." reference="2 Corinthians 12:9-10" color="var(--teal)"/>               
              </section>
            }
            scienceAndHealth={
              <section>
                  <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("omnipotent")}}>How did God create “the heavens and the earth” - from a scientific perspective?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Einstein made famous the connection between energy and mass through the equation E=mc2.  Much power can be created from matter through either fusion and fission.  Uranium, weighing only about a third of one US dime, devastated Hiroshima, killing 66,000 people.  But the equation goes both ways.  Matter can be created from energy, though it would take an immense amount of power.  In 2014 the Imperial College of London suggested a way to turn a pair of photons (particles of light/energy) into an electron and its antiparticle, a positron (i.e. mass).  Given God's unlimited power, science supports the creation of the "heavens and earth" mass though the energy of His spoken word.  No other scientific theory better explains the origination of mass as we experience it today.</p>
                  <p className="is-size-6 leading-normal padded">"For his invisible attributes, namely, his eternal power and divine nature, have been clearly perceived, ever since the creation of the world, in the things that have been made. So they are without excuse." - Romans 1:20</p>              
              </section>
            }
            history={
              <section>
                  <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("omnipotent")}}>Why do we celebrate Easter?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Easter celebrates Jesus’ Resurrection from the dead.  Since Jesus’ resurrection is key in Christianity and was the most powerful act recorded in human history, many books have been written questioning the veracity of the Bible.  Why are these resurrection accounts credible?
  1 - There are four separate gospel accounts (Matthew, Mark, Luke and John) that describe a cohesive documentation of Jesus, with four different perspectives of one with great power.
  2 - The accounts are realistic - including unflattering and embarrassing details about both Jesus and His disciples.  Writers in that era simply did not produce realistic fiction and then claim it to be true.
  3 - Manuscript evidence is the strongest of any ancient literature and archeological evidence supports Biblical details.
  4 - Why did a group of staunchly monotheistic Jewish people in first-century Israel start worshiping a man who was executed on a shameful cross?  And why do people continue to be transformed and worship Him today?</p>
                  <p className="is-size-6 leading-normal padded">Raising Jesus from the dead is nearly unbelievable and must have concrete evidence to support its historicity.  Obviously the Bible contains 4 separate gospel accounts (Mark was the earliest written in ~70 A.D.), but there is also the account of Josephus from 93-94 A.D. in the Testimonium Flavianum, Book 18 Chapt 3,3.  As a secular view of what happened with Christ, its veracity has been hotly contested.</p>
                  <p className="is-size-6 leading-normal padded">Wikipedia notes that Josephus' most probable version read, "Now there was about this time Jesus, a wise man. For he was a doer of startling deeds, a teacher of such men as receive the truth with pleasure. And he gained a following both among many Jews and many of Greek origin. And when Pilate, at the suggestion of the principal men amongst us, condemned him to the cross, those that loved him at the first did not forsake him. And the tribe of Christians, so named from him, are not extinct at this day."</p>              
              </section>
            }
            liturgy={
              <section>
                 <section>
                    <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("omnipotent")}}>"A Mighty Fortress is Our God" - Martin Luther</h1>
                    </section>
                    <p className="is-size-6 leading-normal padded">"A mighty Fortress is our God,<br></br>
A Bulwark never failing;<br></br>
Our Helper He amid the flood<br></br>
Of mortal ills prevailing."            - 1st half of verse #1</p>               
              </section>
            }
          />
        )
    }

}

export default withRouter(Omnipotent);