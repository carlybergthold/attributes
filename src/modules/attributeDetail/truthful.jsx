import React, { Component } from "react";
import { withRouter } from "react-router-dom"
import '../../styles/attribute.css'
import Quote from '../../components/quote'
import styleMethods from "../../methods/styleMethods";
import BaseAttributeDetail from '../../modules/attributeDetail/baseAttributeDetail';

class Truthful extends Component {

    render() {
        return(
          <BaseAttributeDetail
            title="Truthful"
            subtitle="To reveal what is real"
            definition={
              <section>
                  <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("truthful")}}>Truthful means revealing what is real.
                  </h1></section>
                  <p className="is-size-6 leading-normal padded">We desperately want and need truth to decide and act appropriately - whether it comes from our doctor, spouse or media source.  Shades of truth, biases, misperceptions, fear, embarrassment, hidden motives and much more can obscure truth and detach us from reality. This makes truth both elusive and valuable - valuable enough to seek diligently.</p>
                  <p className="is-size-6 leading-normal padded">God is either real or not - if real, this truth will impact our lives whether we believe in Him or not.  But our best and most productive life will come only when we accept and live according to reality.</p>
                  <p className="is-size-6 leading-normal padded">Even if I trust in the reality of God I may distrust others because I have found they have not been truthful in the past. My distrust of others can cause me to disconnect from them.  As I struggle to determine who and what is true around me, I also need to consider my own truthfulness - not only what comes out of my mouth, but what I tell myself about who I am and why I do what I do.  Self-deception may be the most difficult untruthfulness I must address.</p>
              </section>
            }
            emotion={
              <section>
                 <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("truthful")}}>How can I ever trust someone who is untrustworthy?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">It’s hard to trust a liar.  It is also hard to trust anyone who is unforgiving, inconsistent, distant, not compassionate, often wrong,  incompetent, or extremely needy and selfish.  In other words, it is hard to trust anyone who acts imperfectly or ungodly - which, at times, includes every human.  Trusting any other person, then, will include risk.  However, seeking and then standing firm in truth will help build the level of trust.  I must seek the truth in what others tell me, what I tell others, and especially what I tell myself.</p>
                  <p className="is-size-6 leading-normal padded">So what if I feel I cannot even trust God?  The Psalmist below felt rejected by God based on his circumstances.  Just like us, he was trying to understand why God would allow something bad to happen to him, which can certainly lower trust levels in a sovereign and omnipotent God.  But the Psalmist then takes hold of and clings to foundational truths he does trust - that God is worthy of praise and the source of hope, joy, and salvation, and that He never rejects His own.  He then speaks these truths to his distrusting soul.  Continuously returning to and resting in the anchoring of fundamental truths is vital.  For a Christian, this means reminding myself of the gospel, who God is, and who I am in Christ.</p>
                  <br></br>
                  <Quote scripture="“Vindicate me, O God, and defend my cause against an ungodly people, from the deceitful and unjust man deliver me!  For you are the God in whom I take refuge; why have you rejected me?  Why do I go about mourning because of the oppression of the enemy?  Send out your light and your truth; let them lead me; let them bring me to your holy hill and to your dwelling!  Then I will go to the altar of God, to God my exceeding joy, and I will praise you with the lyre, O God, my God.  Why are you cast down, O my soul, and why are you in turmoil within me?  Hope in God; for I shall again praise him, my salvation and my God." reference="Psalm 43:1-5"/>               
              </section>
            }
            fear={
              <section>
                <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("truthful")}}>How can I know if I am believing a lie?</h1>
                </section>
                  <p className="is-size-6 leading-normal padded">If I believe another person until I have good reason to disbelieve them, I will be vulnerable to deception. If I disbelieve everyone, I will likely miss out on needed truth.  So how can I decide if I am hearing truth?  Knowing the source and the reliability of prior information from them is always helpful - and the more I experience verifiable truth from them, the better. Considering the other's motives may also be helpful. Most people lie so they can 1) protect or promote themselves, 2) get what they want, or 3) harm another.  So past experience with a person and reasoning out likely motives are two good ways to help determine truthfulness.</p>
                  <p className="is-size-6 leading-normal padded">However, the most difficult lie to detect can be the one I am telling myself.  Listening to and relying on God’s word and trusted, loving friends will help truth emerge.  I can also still follow the guidance above - to know myself and my motives:  Have I been susceptible to certain deceptions in the past?  Am I behaving out of step with whom I claim or aim to be?  Is something motivating me to believe things about myself that are false?</p>
                  <br></br>
                  <Quote scripture="If anyone thinks they are something when they are not, they deceive themselves." reference="Galatians 6:3" color="var(--teal)"/>
                  <br></br>
                  <Quote scripture="But be doers of the word, and not hearers only, deceiving yourselves." reference="James 1:22" color="var(--teal)"/>                
              </section>
            }
            struggle={
              <section>
                 <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("truthful")}}>How do I know what is true?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Reality endures, so what is true eventually reveals itself over time.  The truth of gravity reveals itself repeatedly - leaves fall to the ground and water seeks the lowest point.  Tangible evidence will point toward truth.</p>
                  <p className="is-size-6 leading-normal padded">Is the Biblical God true?  The Bible describes God with certain immutable attributes and declares that man was created in God’s image (reflecting many of these same attributes), but man is also marred by sin which rebels against those very same attributes. We have continual evidence that the Biblical God is true because we, His creations, aspire to His attributes (like really wanting to know that is true), even as we also struggle to rebel against that aspiration (like wanting to tell a "white" lie).  These attributes of God and man can readily be found in all cultures, across all times.  Such enduring evidence points to the One True God, Who I can trust - freeing me to best  understand and live life.</p>
                  <br></br>
                  <Quote scripture="Pilate said to him (Jesus), 'What is truth?' " reference="John 18:38a" />
                  <br></br>
                  <Quote scripture="So Jesus said to the Jews who had believed him, ‘If you abide in my word, you are truly my disciples, and you will know the truth, and the truth will set you free.’ " reference="John 8:31-32" />               
              </section>
            }
            whoAmI={
              <section>
                 <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("truthful")}}>Only God knows what is true.</h1>
                </section>
                  <p className="is-size-6 leading-normal padded">Although I may confidently believe that all my thoughts are true, they are very likely not.  Truth can be uncovered through a combination of observance (science), educated reason (logic), and faith (which every person holds to something in some degree).  But real truth can only be found if my faith is in God.</p>
                  <br></br>
                  <Quote scripture="Jesus said, 'I am the light of the world.  Whoever follows me will never walk in darkness, but will have the light of life." reference="John 8:12" />               
              </section>
            }
            biblicalChristianity={
              <section>
                   <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("truthful")}}>Jesus is truth.</h1></section>
                  <p className="is-size-6 leading-normal padded">Jesus was and is and will forever be truthful. He also referred to Himself as Truth itself - the physical reality of God coming into the world to restore man into relationship with Himself.  The Cross not only happened, but was the key true event of all history.</p>
                  <Quote scripture="Jesus answered, 'I am the way and the truth and the life.  No one comes to the Father except by me.'" reference="John 14:6" color="var(--teal)"/>
                  <br></br>
                  <Quote scripture="For we cannot do anything against the truth, but only for the truth." reference="2 Corinthians 16:8" color="var(--teal)"/>               
              </section>
            }
            soWhat={
              <section>
                 <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("truthful")}}>So what do I do now?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Let the Bible anchor me in truth, knowing that it represents the unobscured truth, able to dispel my many possible misperceptions or self-deceptions.  I need to test, in my day-to-day life, the reality of these truths that God has revealed and consequently be strengthened in my faith (for example, if circumstances cause me to doubt that God cares about me, I can remind myself that His true Word from 1 Peter 5:7 says "...casting all your anxieties on him, because He cares for you.").  I also need to remind myself of who I am in Christ - an identity grounded in truth.<br>
                  </br>
                  Ask:  How do I determine if something is actually true?
                  </p>
                  <Quote scripture="Do not merely listen to the word, and so deceive yourselves. Do what it says." reference="James 1:22" color="var(--teal)"/>               
              </section>
            }
            prayer={
              <section>
                  <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("truthful")}}>Prayer</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Help me, Lord, to trust in the truth of Your word and in who You are.  Forgive me when I tell myself things that are not true simply so I can live according to my will and not Yours.  Above all, keep me focused on Jesus, who is Truth.</p>
                  <Quote scripture="But for those who are self-seeking and who reject the truth and follow evil, there will be wrath and anger." reference="Romans 2:8" color="var(--teal)"/>                
              </section>
            }
            scienceAndHealth={
              <section>
                 <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("truthful")}}>Absolute truth appears to be absolutely elusive.</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">“Proven” science is actually a consensus-building of experts who observe perceived reality.  It is likely close to truth, but is always subject to change based on the latest and best information of man.  Observable reality of human nature supports Christian theology, but theology cannot be scientifically proven as absolute truth. However, pursuing theological truth within both established scientific and spiritual frameworks is much more fruitful than simply creating my own truth.</p>
                  <p className="is-size-6 leading-normal padded">Computer and video technology has developed a way to revise digital video in order to have the on-screen character appear to say something completely different from what was actually said.  Developed to easily correct hard to re-create movie scenes, it can also be used to show people saying whatever you want them to say, with all the proper nuances of speech and visuals, given enough video and speech data from the person.  And the process to detect what is false is difficult, time-consuming and often considered not worth the effort.</p>
                  <p className="is-size-6 leading-normal padded">My mind can alter reality in the same way if I remake Christianity to  suit my own preferences.  Christianity has been the predominant global belief system for 2000 years (with 31% of the world currently adhering to its basic tenets).  Although man has tried many times to adapt this faith in selfish and hurtful ways, the basic Christian truth has endured the scrutiny of time - that Jesus, the Son of God and God Himself, died on the cross in order to restore those who believe in Him to an everlasting relationship with Him.</p>
              
              </section>
            }
            attHistory={
              <section>
                 <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("truthful")}}>Should a doctor tell a patient the truth of a fatal prognosis?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">What if the truth causes the patient to become depressed, worsening the original condition?  For many years, hope won over truthfulness - at least until the last century.</p>
                  <p className="is-size-6 leading-normal padded">The Hippocratic corpus (~400 BC) is silent on the issue of doctors lying to patients, but warns doctors of patients' lies and encouraged doctors to be economical with the truth and to ‘reveal... nothing of the patient's future or present condition’ which, according to the Greek author, could cause patients to take ‘a turn for the worse.’  This advice was followed, per the doctor’s judgment, for centuries.  Today, although doctors still weigh the potential effects judiciously, they are much more apt to be truthful with their patients, especially to those who want the truth. Which would you prefer as a patient?</p>               
              </section>
            }
            liturgy={
              <section>
                 <section>
                    <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("truthful")}}>"Open My Eyes, That I May See" - Clara H. Scott</h1>
                    </section>
                    <p className="is-size-6 leading-normal padded">"1 - Open my eyes, that I may see<br></br>
                    Glimpses of truth Thou hast for me;<br></br>
                    Place in my hands the wonderful key<br></br>
                    That shall unclasp and set me free."</p> 
                    <p className="is-size-6 leading-normal padded">"2 - Open my ears, that I may hear<br></br>
                    Voices of truth Thou sendest clear;<br></br>
                    And while the wave notes fall on my ear,<br></br>
                    Everything false will disappear."</p> 
                    <p className="is-size-6 leading-normal padded">"3 - Open my mind, that I may read<br></br>
                    More of Thy love in word and deed;<br></br>
                    What shall I fear while yet Thou dost lead?<br></br>
                    Only for light from Thee I plead."</p> 
                    <p className="is-size-6 leading-normal padded">"4 - Open my mouth, and let me bear,<br></br>
                    Gladly the warm truth everywhere;<br></br>
                    Open my heart and let me prepare<br></br>
                    Love with Thy children thus to share.</p> 
                    <p className="is-size-6 leading-normal padded">"Refrain - Silently now I wait for Thee,<br></br>
                    Ready my God, Thy will to see,<br></br>
                    Open my heart, illumine me,<br></br>
                    Spirit divine!</p>               
              </section>
            }
          />
        )
    }

}

export default withRouter(Truthful);