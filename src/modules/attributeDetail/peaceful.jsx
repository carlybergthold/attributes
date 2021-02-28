import React, { Component } from "react";
import { withRouter } from "react-router-dom"
import '../../styles/attribute.css'
import Hero from '../../components/hero'
import AttributeSidebar from "../../components/attSidebar";
import Quote from '../../components/quote'
import styleMethods from "../../methods/styleMethods";

class Peaceful extends Component {

    // componentDidMount() {
    //   window.scrollTo(0, 0);
    // }

    render() {
        return(
            <body className="attPage">
            <Hero title="Peaceful" subtitle="To be safe, whole, healthy and complete" img="girl.png" />
            <div className="container is-fullhd has-text-left relativeMaybe" id="attributeContainer">
              <aside className="has-background-grey-lighter">
                <section id="sidebar">
                  <AttributeSidebar attribute="peaceful"/>
                </section>
              </aside>

              <main>
                <div className="attSection" id="definition">
                  <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("peaceful")}}>Peaceful means being safe, whole, healthy and complete.
                  </h1></section>
                  <p className="is-size-6 leading-normal padded">The Jewish word shalom means this kind of peace, both externally and internally.  Being at peace means all parts of ourselves are unified, reconciled with each other. The contemporary definition of peace as “Freedom from disturbance; quiet and tranquility” describes an absence more than a presence.</p>
                  <p className="is-size-6 leading-normal padded">Health of our body comes not simply from absence (of smoking, disease…), but also from an active presence (of exercise, good food, sleep…).  For example, physical stress can relieve mental stress and increase peacefulness.  A Feb 2011 Harvard Health Publishing article notes "Aerobic exercise is key for your head, just as it is for your heart….Regular aerobic exercise will bring remarkable changes to your body, your metabolism, your heart, and your spirits. It has a unique capacity to exhilarate and relax, to provide stimulation and calm, to counter depression and dissipate stress…..Walking and jogging are prime examples. Even a simple 20-minute stroll can clear the mind and reduce stress."</p>
                  <p className="is-size-6 leading-normal padded">My lack of peace results in dissatisfaction - with something specific or with life in general.  And even when I carefully plan to avoid conflict, it seems to backfire.  Some conflict seems like it will go on forever, regardless of what I do.  Yes, real peace is hard to come by.</p>
                </div>

                <div className="attSection" id="emotion">
                <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("peaceful")}}>Why am I so dissatisfied?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">I become dissatisfied when I expect a certain standard of quality, comfort, pleasure or performance that is not being fulfilled.  Disappointment is a similar emotion, but it implies I had little or no control.  My level of satisfaction, then, is dependent upon two things - my expectations and my subsequent actions (or inaction).</p>
                  <p className="is-size-6 leading-normal padded">The Psalmist below earnestly desired something from God.  Having expectations of God is well and good - God can be counted on to do what He has promised.  However, some of His promises are conditional, dependent upon our obedience.  And then there are other things which I really want, but have never been promised by God.  Sorting out which is which can bring me true peace in a world which has very little.</p>
                  <br></br>
                  <Quote scripture="Will you not revive us again, that your people may rejoice in you?  Show us your steadfast love, O LORD, and grant us your salvation.  Let me hear what God the LORD will speak, for he will speak peace to his people, to his saints; but let them not turn back to folly. Surely his salvation is near to those who fear him, that glory may dwell in our land. Steadfast love and faithfulness meet; righteousness and peace kiss each other.  Faithfulness springs up from the ground, and righteousness looks down from the sky.  Yes, the LORD will give what is good, and our land will yield its increase. Righteousness will go before him and make his footsteps a way" reference="Psalm 85:6-13"/>
                </div>

                <div className="attSection" id="fear">
                <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("peaceful")}}>Can I find peace by avoiding all trouble?</h1>
                </section>
                  <p className="is-size-6 leading-normal padded">My compelling desire for peace should not be to avoid all trouble, but rather to align myself with God, Who is my peace.  This alignment, at times, will actually cause division in this world because it highlights the great divide that man naturally has with God due to sin.  However, this alignment will also provide increasing order (not confusion) and peace in my life as a believer.
                  </p> 
                  <p className="is-size-6 leading-normal padded">A lack of peace today can result in a wide range of problems - from clinical eating/sleeping disorders, depression, substance abuse to simple fatigue, headaches or a wide range of other health issues.  It may also signal that I am separated from God.     </p>
                  <br></br>
                  <Quote scripture="Do not think that I (Jesus speaking) have come to bring peace to the earth. I have not come to bring peace, but a sword. For I have come to set a man against his father, and a daughter against her mother, and a daughter-in-law against her mother-in-law." reference="Matt 10:34-35" color="var(--teal)"/>
                  <Quote scripture="Peace I (Jesus speaking) leave with you; my peace I give to you. Not as the world gives do I give to you. Let not your hearts be troubled, neither let them be afraid." reference="John 14:27" color="var(--teal)"/>
                </div>

                <div className="attSection" id="struggle">
                <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("peaceful")}}>How can I deal with a conflict that just keeps going on and on?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">This life will always have troubles, so my perspective of them is what is most critical.  How I see the situation I am in is aided tremendously by God’s Word.  And my single biggest help is to take my focus off myself and onto God and others.</p>
                  <p className="is-size-6 leading-normal padded">A Family Life article by Dennis Rainey lists six key steps to resolve conflict in marriage:
                  1 - Resolving conflict requires knowing, accepting, and adjusting to your differences. 
                  2 - Resolving conflict requires defeating selfishness.
                  3 - Resolving conflict requires pursuing the other person.
                  4 - Resolving conflict requires loving confrontation.
                  5 - Resolving conflict requires forgiveness.
                  6 - Resolving conflict requires returning a blessing for an insult.</p>
                  <br></br>
                  <Quote scripture="I have said these things to you, that in me you may have peace. In the world you will have tribulation. But take heart; I have overcome the world." reference="John 16:33" />
                </div>

                <div className="attSection" id="whoAmI">
                <section>
                  <Hero title="Only God can bring me true peace."></Hero>
                </section>
                  <p className="is-size-6 leading-normal padded">Striving for peace without God shows that I view myself as a god who can control enough circumstances to satisfy all of my needs and wants.  But only the Creator God can reconcile me to Himself, bringing me peace, or oneness, with Him.</p>
                  <br></br>
                  <Quote scripture="Remember that you were at that time separated from Christ, alienated from the commonwealth of Israel and strangers to the covenants of promise, having no hope and without God in the world." reference="Ephesians 2:12" />
                </div>

                <div className="attSection" id="biblicalChristianity">
                  <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("peaceful")}}>Jesus is the Prince of Peace.</h1></section>
                  <p className="is-size-6 leading-normal padded">Jesus provides those who believe  in Him with the safety and security of salvation through reconciliation with God - our true Peace.  Further peace is then generated through sanctification as I conform more and more to God’s perfect image, culminating in perfect peace only in heaven.</p>
                  <Quote scripture="But now in Christ Jesus you who once were far off have been brought near by the blood of Christ. For he himself is our peace, who has made us both one and has broken down in his flesh the dividing wall of hostility by abolishing the law of commandments expressed in ordinances, that he might create in himself one new man in place of the two, so making peace, and might reconcile us both to God in one body through the cross, thereby killing the hostility." reference="Ephesians 2:13-16" color="var(--teal)"/>
                </div>

                <div className="attSection" id="soWhat">
                <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("peaceful")}}>So what do I do now?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Reconcile my beliefs and life with the foundational truths of the Bible. Bring the current situation to Him and Him to the situation with an intent to reconcile the two.  

                  Let all artificial barriers to unity fall in the one body of Christ (i.e. Jew/Gentile, race/gender, denomination, social class or severity of sin, worship style, etc.).  Rejoice in this peaceful unity!  <br></br>Ask: Where in my life do I not see peace?</p>
                  <Quote scripture="You keep him in perfect peace whose mind is stayed on you, because he trusts in you." reference="Isaiah 26:3" color="var(--teal)"/>
                </div>

                  <div className="attSection" id="prayer">
                  <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("peaceful")}}>Prayer</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">God of Peace, thank you for reconciling me to You through the righteousness of Jesus.  Although this brings me peace with You, I confess that I am often unsettled and dissatisfied with things in this life.  Help me to remember that this life is not my ultimate home and to clearly perceive what you have promised on this earth.</p>
                  <p className="is-size-6 leading-normal padded">The Greek word for peace is “eirene”, which has as its root the word “eiro”, meaning “to join”. Only when we join God and be unified with Him are we truly at peace.</p>
                  <Quote scripture="I (Jesus speaking) have said these things to you, that in me you may have peace. In the world you will have tribulation. But take heart; I have overcome the world." reference="John 16:36" color="var(--teal)"/>
                </div>

                <div className="attSection has-background-light" id="scienceAndHealth">
                <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("peaceful")}}>Worrying, or lack of peace, can make us physically sick.</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">“Chronic worrying can affect your daily life so much that it may interfere with your appetite, lifestyle habits, relationships, sleep, and job performance. Many people who worry excessively are so anxiety-ridden that they seek relief in harmful lifestyle habits such as overeating, cigarette smoking, or using alcohol and drugs….The problem occurs when fight or flight is triggered daily by excessive worrying and anxiety. The fight or flight response causes the body’s sympathetic nervous system to release stress hormones such as cortisol. These hormones can boost blood sugar levels and triglycerides that can be used by the body for fuel. The hormones also cause physical reactions such as:”</p>
                  <p className="is-size-6 leading-normal padded">Big Bang theory and creation (Data from Wikipedia): “By the middle of the 20th century, cosmologists had developed two different theories to explain the creation of the universe. Some supported the steady-state theory, which states that the universe has always existed and will continue to survive without noticeable change. Others believed in the Big Bang theory, which states that the universe was created in a massive explosion-like event billions of years ago (later determined to be approximately 13.8 billion years).</p>
                  <p className="is-size-6 leading-normal padded">Difficulty swallowing        Dizziness            Dry mouth                      Fast heartbeat
Fatigue                           Headaches         Inability to concentrate     Irritability
Muscle aches                  Muscle tension    Nausea                            Nervous energy
Rapid breathing              Sweating            Shortness of breath          Trembling
Twitching
                                          - WebMD</p>
                  <p className="is-size-6 leading-normal padded">"Therefore I tell you, do not be anxious about your life, what you will eat or what you will drink, nor about your body, what you will put on. Is not life more than food, and the body more than clothing?"" - Matthew 6:25</p>
                </div>

                <div className="attSection" id="history">
                <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("peaceful")}}>Has the world ever seen true peace?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Man’s history is one of constant conflict and war.  True peace offered by Christ is in vivid contrast to war and begins in my heart.</p>
                  <p className="is-size-6 leading-normal padded">According to a New York Times article on July 6, 2003, of the past 3,400 years, humans have been entirely at peace for 268 of them, or just 8 percent of recorded history. This is by defining war as an active conflict that has claimed more than 1,000 lives. More likely, the world has likely never been fully “at peace”.  According to Wikipedia’s timeline of just the US government military operations, there has been some type of military conflict nearly every year of its existence.  The longest stretch of “peace” is from 1935-1939, an isolationist period initiated by The Good Neighbor Policy, implemented by Franklin Roosevelt. Unfortunately, this period also saw civil war in Spain and a major conflict in Palestine, not to mention the build-up in Japan and Germany to WWII. </p>
                  <p className="is-size-6 leading-normal padded">The Pax Romana (Latin for "Roman Peace") was a long period of relative peace and stability experienced by the Roman Empire from 27 BC to AD 180 and covered a third of the world’s population. In Roman history, the "Gates of Janus" were closed in times of peace and opened in times of war.  These doors stood open much more often than closed - and this did not consider conflicts in other parts of the world.

Even peace-loving Switzerland had a civil war as recently as 1847, called the Sonderbund War.</p>
                </div>

                <div className="attSection" id="liturgy" >
                <section>
                    <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("peaceful")}}>"It Is Well With My Soul" - Horatio Spafford</h1>
                    </section>
                    <p className="is-size-6 leading-normal padded">"Oh that you had paid attention to my commandments! Then your peace would have been like a river, and your righteousness like the waves of the sea;" - Isa 48:18</p>
                    <p className="is-size-6 leading-normal padded">"When peace, like a river, attendeth my way,<br></br>
When sorrows like sea billows roll;<br></br>
Whatever my lot, Thou hast taught me to say,<br></br>
It is well, it is well with my soul." - First verse</p>
                </div>

            </main>
            </div>
          </body>
        )
    }

}

export default withRouter(Peaceful);