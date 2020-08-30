import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom"
import '../../styles/attribute.css'
import Quote from '../../components/quote'
import Hero from '../../components/hero'
import AttributeSidebar from "../../components/attSidebar";

class Gracious extends Component {

    componentDidMount() {
      window.scrollTo(0, 0);
    }

    render() {
        return(
            <body className="attPage">
            <Hero title="Gracious" subtitle="To sacrificially love the undeserved" img="girl.png" />
            <div className="container is-fullhd has-text-left relativeMaybe" id="attributeContainer">
              <aside>
                <section id="sidebar">
                  <AttributeSidebar />
                </section>
              </aside>

              <main>
                <div className="attSection" id="definition">
                  <section>
                  <h1 className="title has-text-primary tracking-wide padded">Gracious means sacrificially loving the undeserved.
                  </h1></section>
                  <p className="is-size-6 leading-normal padded">We identify with the underdog (the Rocky movies), the weakling (David and Goliath), the defenseless (victims of crime) because most of us have experienced being one of these in some form in the past, or can imagine experiencing them in our future.  Sometimes we simply want to help - to graciously meet a need.</p>
                  <p className="is-size-6 leading-normal padded">But to be truly gracious can be hard.  Grace flows from my love for another, but often love ebbs when I am not receiving anything in return, or worse, I am receiving only abuse as acknowledgement of my grace.</p>
                </div>

                <div className="attSection" id="emotion">
                <section>
                  <h1 className="title has-text-primary tracking-wide padded">How can I love more deeply?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">True, lasting love comes first and only from God’s gracious love of us. I must first feel the debt and gratitude of His rescue in order to love God deeply.  Then if God (instead of self!) is my main focus, I can love others graciously - even when they do not deserve it. Otherwise, my selfishness will eventually extinguish even the most passionate declarations of love I might make.</p>
                  <br></br>
                  <Quote scripture="I love the LORD, because he has heard my voice and my pleas for mercy. Because he inclined his ear to me, therefore I will call on him as long as I live. The snares of death encompassed me; the pangs of Sheol laid hold on me; I suffered distress and anguish.  Then I called on the name of the LORD: “O LORD, I pray, deliver my soul!” Gracious is the LORD." reference="Psalm 116:1-5a" color="var(--teal)"/>
                </div>

                <div className="attSection" id="fear">
                <section>
                  <h1 className="title has-text-primary tracking-wide padded">What do I do when others return my love and graciousness with abuse?</h1>
                </section>
                  <p className="is-size-6 leading-normal padded">We should expect some level of suffering when we love and offer grace, because doing so is a sacrifice, and when we sacrifice our own wants in order to help another, it causes discomfort and inconvenience. Sometimes people abuse our desire to help.  When the negative impact escalates, we ought to forgive.  However, forgiveness does not tolerate continued abuse nor release all forms of accountability. It does not mean you must continue the relationship, especially in the same manner.  It does involve giving up the desire to hurt someone who has hurt me.  And ideally it involves repentance (a true change of behavior) of the abuser.  But even absent repentance, I can still seek what is graciously best for both me and the other.</p>
                  <br></br>

                  <Quote scripture="Then Peter came up and said to him, 'Lord, how often will my brother sin against me, and I forgive him? As many as seven times?' Jesus said to him, 'I do not say to you seven times, but seventy-seven times.' " reference="Matthew 18:21-22" color="var(--teal)"/>
                </div>

                <div className="attSection" id="struggle">
                <section>
                  <h1 className="title has-text-primary tracking-wide padded">What’s wrong with hard work?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Hard work is good for the soul and beneficial for earning a living, building relationships and completing projects around the house.  However, the most generous people often have a hard time receiving anything for which they do not have to work.  Gracious yet self-sufficient people generally live well, but may completely miss salvation, which can never be earned and can only be received by God’s grace.</p>
                  <br></br>
                  <Quote scripture="And if by grace, then it is no longer by works; if it were, grace would no longer be grace." reference="Romans 11:6" color="var(--teal)"/>
                </div>

                <div className="attSection" id="whoAmI">
                <section>
                  <h1 className="title has-text-primary tracking-wide padded">Only God is truly gracious.</h1></section>
                  <p className="is-size-6 leading-normal padded">My human graciousness toward someone can quickly be overwhelmed when I learn how truly undeserving that person is - at fault, ungrateful, potentially dangerous, etc.  Unless I have an obvious gain, I am often quick to back away and help someone a bit more deserving.  However, God heaps His graciousness on those who are “yet sinners.”  And then even provides me with the means to be truly gracious to others.</p>
                  <br></br>
                  <Quote scripture="Grace is a truth peculiar to divine revelation. It is a concept to which the unaided powers of man's mind never rises. Proof of this is in the fact that where the Bible has not gone 'grace' is unknown. Very often missionaries have found, when translating the Scriptures into native tongues of the heathen, they were unable to discover a word which in any way corresponds to the Bible word ‘grace'. Grace is absent from all the great heathen religions—Brahmanism, Buddhism, Mohammedanism, Confucianism, Zoroastrianism. Even nature does not teach grace: break her laws and you must suffer the penalty." reference="A.W. Pink" color="var(--teal)"/>
                </div>

                <div className="attSection" id="biblicalChristianity">
                  <section>

                  <h1 className="title has-text-primary tracking-wide padded">Jesus was the sacrifice lovingly made and given to us, the undeserving.</h1></section>
                  <p className="is-size-6 leading-normal padded">No one deserves eternal salvation.  I must recognize this critical truth before Jesus, a gracious and precious gift, can be received and valued in my life. </p>
                  <Quote scripture="For all have sinned and fall short of the glory of God, and are justified by his grace as a gift, through the redemption that is in Christ Jesus." reference="Romans 3:23-24" color="var(--teal)"/>
                </div>

                <div className="attSection" id="soWhat">
                <section>
                  <h1 className="title has-text-primary tracking-wide padded">So what do I do now?</h1>
                  </section>

                  <p className="is-size-6 leading-normal padded">Remove all thoughts of earning salvation; recognize it as fully independent of my works, actions, thoughts or motives.  Receive salvation through faith in Christ alone, with gratitude, as a true gift.  </p>
                  <p className="is-size-6 leading-normal padded">Ask: How do I feel about helping someone who is either ungrateful or not deserving?  <br></br>Does my graciousness depend on what I view as their worthiness?</p>
                  <Quote scripture="For by grace you have been saved through faith. And this is not your own doing; it is the gift of God, not a result of works, so that no one may boast." reference="Ephesians 2:8-9" color="var(--teal)"/>
                </div>

                  <div className="attSection" id="prayer">
                  <section>
                  <h1 className="title has-text-primary tracking-wide padded">Prayer</h1>
                  </section>

                  <p className="is-size-6 leading-normal padded">Gracious Lord, I am the undeserving one whom You rescued. Help me to live always in light of that fact, and let that motivate me to show similar graciousness to others.</p>
                  <Quote scripture="But he gives more grace. Therefore it says, 'God opposes the proud, but gives grace to the humble.'" reference="James 4:6" color="var(--teal)"/>
                </div>

                <div className="attSection has-background-light" id="scienceAndHealth">
                <section>
                  <h1 className="title has-text-primary tracking-wide padded">Science and health rarely demonstrate grace.</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Sacrificial kindness to the undeserved is not the norm.  In this life it appears that you most often get only what you deserve - or less.  But from a Christian perspective, life is full of grace because a just and perfect God exists.  More importantly, life itself is grace, and  musical grace notes are a good illustration of our current lives. </p>
                  <p className="is-size-6 leading-normal padded">A grace note is usually a small note printed next to a regular note to indicate that, although it is melodically and harmonically nonessential, it adds ornamentation to the main music. A single grace note is played very briefly just before the regular note to which it is tied.</p>
                  <p className="is-size-6 leading-normal padded">Compared to eternity, my current life has the brevity of a grace note.  It is nonessential to God's existence, but God as composer purposefully wrote it in.  In doing so, God graciously displays the tenuous life I live when apart from Him.  My life can’t and won’t last forever, but it is the perfect arrangement to bring Him glory in the long run.</p>
                </div>

                <div className="attSection" id="history">
                <section>
                  <h1 className="title has-text-primary tracking-wide padded">Corrie ten Boom was part of a gracious Dutch family.</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">The ten Booms helped many Jews escape the Natzis during World War II by hiding them in their home.  They were caught, arrested and sent to a concentration camp.  The following story happened after the war.</p>
                  <p className="is-size-6 leading-normal padded">“When we confess our sins,” Corrie said, “God casts them into the deepest ocean, gone forever."  After saying these words to conclude a talk in Germany in 1947, Corrie ten Boom saw her former prison guard in the audience.  Although he did not recognize Corrie, he approached her, extended a hand and said, “You mentioned Ravensbrück in your talk. I was a guard there. But since that time,” he went on, “I have become a Christian. I know that God has forgiven me for the cruel things I did there, but I would like to hear it from your lips as well. Fräulein”–again the hand came out–“will you forgive me?”

Corrie's sister, Betsie, had died in that place. She hesitated, considering her sister's slow terrible death. Could she forgive so freely, simply for the asking?

In her owns words - "For I had to do it–I knew that. The message that God forgives has a prior condition: that we forgive those who have injured us. And still I stood there with the coldness clutching my heart. But forgiveness is not an emotion–I knew that too. Forgiveness is an act of the will, and the will can function regardless of the temperature of the heart."

“Jesus, help me!” I prayed silently. “I can lift my hand. I can do that much. You supply the feeling.” And so woodenly, mechanically, I thrust my hand into the one stretched out to me. And as I did, an incredible thing took place. The current started in my shoulder, raced down my arm, sprang into our joined hands. And then this healing warmth seemed to flood my whole being, bringing tears to my eyes.

“I forgive you, brother!” I cried. “With all my heart!”  - Excerpt from Nov 1972 Guidepost</p>

                </div>

                <div className="attSection" id="liturgy" >
                <section>
                    <h1 className="title has-text-primary tracking-wide padded">"Grace, Greater Than Our Sin" - Julia Johnson</h1>
                    </section>
                    <p className="is-size-6 leading-normal padded">"Marvelous grace of our loving Lord,<br></br> Grace that exceeds our sin and our guilt!<br></br>
                    Yonder on Calvary’s mount outpoured,<br></br>
                    There where the blood of the Lamb was spilled." - 1st verse</p>      
                    <Quote scripture="Now the law came in to increase the trespass, but where sin increased, grace abounded all the more, so that, as sin reigned in death, grace also might reign through righteousness leading to eternal life through Jesus Christ our Lord." reference="Romans 5:20-21" color="var(--teal)"/>
                </div>

            </main>
            </div>
          </body>
        )
    }

}

export default withRouter(Gracious);