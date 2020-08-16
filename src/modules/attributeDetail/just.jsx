import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom"
import '../../styles/attribute.css'
import Quote from '../../components/quote'
import Hero from '../../components/hero'
import AttributeSidebar from "../../components/attSidebar";

class Just extends Component {

    componentDidMount() {
      window.scrollTo(0, 0);
    }

    render() {
        return(
            <body className="attPage">
            <Hero title="Just" subtitle="To make all things right" img="girl.png" />
            <div className="container is-fullhd has-text-left relativeMaybe" id="attributeContainer">
              <aside>
                <section id="sidebar">
                  <AttributeSidebar />
                </section>
              </aside>

              <main>
                <div className="attSection" id="definition">
                  <section>
                  <h1 className="title has-text-primary tracking-wide padded">Just means to make all things right or good.
                  </h1></section>
                  <p className="is-size-6 leading-normal padded">We like being right and often assume we are even when we are not. We like things to “be right” - our relationships, our food, our commute, our jobs, and where we live.  And when they are not right, we become unsettled and may even begin to see life as “unfair”.</p>
                  <p className="is-size-6 leading-normal padded">I can become annoyed or angered when I perceive unfairness.  My sense of what is right fuels this indignation and my need to be right can direct this feeling in the wrong direction.  It can drive me to blame others (i.e. traffic put me in a foul mood) or deny truth in order to protect myself.</p>
                </div>

                <div className="attSection" id="emotion">
                <section>
                  <h1 className="title has-text-primary tracking-wide padded">So what do I do when faced with unfairness?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Indignation can motivate me to immediately make things right - sometimes with poor timing, methods and motivation.  David’s prayer in Psalm 17 outlines a few good things to consider when we are filled with indignation:  1) Appeal to God as the final arbiter and rest in His protection and justice.  2) Thoroughly search my own actions and motives, realizing that God can use evil for ultimately good purposes. 3) Realize what is most important.  While unbelievers’ goals are normally all tied to the good in this life, believers’ end game is to become more Christlike for God’s glory and rest in His presence.</p>
                  <br></br>
                  <Quote scripture="Hear a just cause, O LORD; attend to my cry!  Give ear to my prayer from lips free of deceit!  From your presence let my vindication come! Let your eyes behold the right!  You have tried my heart, you have visited me by night, you have tested me, and you will find nothing; I have purposed that my mouth will not transgress.  With regard to the works of man, by the word of your lips I have avoided the ways of the violent.  My steps have held fast to your paths; my feet have not slipped. I call upon you, for you will answer me, O God; incline your ear to me; hear my words.  Wondrously show your steadfast love, O Savior of those who seek refuge from their adversaries at your right hand.  Keep me as the apple of your eye; hide me in the shadow of your wings, from the wicked who do me violence, my deadly enemies who surround me. " reference="Psalm 17:1-9" color="var(--teal)"/>
                </div>

                <div className="attSection" id="fear">
                <section>
                  <h1 className="title has-text-primary tracking-wide padded">What if I can’t stand being wrong?</h1>
                </section>
                  <p className="is-size-6 leading-normal padded">My thirst for being right is God-given. I seek justice because God is just and I am made in His image.  My fear of being found wrong is also valid. Everyone has been wrong and will continue in a pattern of being wrong, in violation of God's standard of righteousness, and thus are also subject to His justice. And I cannot fix what only God can.</p>
                  <br></br>

                  <Quote scripture="Create in me a clean heart, O God; and renew a right spirit within me." reference="Psalm 51:10" color="var(--teal)"/>
                </div>

                <div className="attSection" id="struggle">
                <section>
                  <h1 className="title has-text-primary tracking-wide padded">“That’s not fair!”</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">It’s an expression most often heard from kids, but just as often thought by adults.  Like beauty, fairness is found in the eye of the beholder.  And this world has many different eyes.  I can get lost and hurt in all the resulting confusion.  True forgiveness for others is often what I need.  Forgiveness is taking seriously the awfulness of what has happened when you are treated unfairly. Forgiveness is not pretending that things are other than the way they are.
- Desmond Tutu</p>
                  <br></br>
                  <Quote scripture="And whenever you stand praying, forgive, if you have anything against anyone, so that your Father also who is in heaven may forgive you your trespasses." reference="Mark 11:25" color="var(--teal)"/>
                </div>

                <div className="attSection" id="whoAmI">
                <section>
                  <h1 className="title has-text-primary tracking-wide padded">Only God can make all things right.</h1></section>
                  <p className="is-size-6 leading-normal padded">I can have a part in making some things right, but I cannot make all things right about myself, let alone the world.  I can easily slip into God's place when I decide on my own what is just in a certain situation.</p>
                  <br></br>

                  <Quote scripture="There is a way that seems right to a man, but its end is the way to death." reference="Proverbs 14:12" color="var(--teal)"/>
                </div>

                <div className="attSection" id="biblicalChristianity">
                  <section>
                  <h1 className="title has-text-primary tracking-wide padded">Jesus provided a way for sinners to be made right with God.</h1></section>

                  <p className="is-size-6 leading-normal padded">By going to the cross in obedience to His Father, Jesus dealt justly with sin - through righteousness. “Righteousness is similar to goodness and holiness, but differs in that it requires works to establish it. Something can be holy, but not righteous if good works do not accompany it. God is good, but He refers to Himself as righteous because He works the good as well. Christians are called righteous, not because they have any ability to accomplish good works, but because they reside in the good works (or righteousness) of Christ. Christ's obedience is transferred to us and God grants us eternal life as a result!” - Blue Letter Bible</p>
                  <Quote scripture="God has often forgiven sinners, but He never forgives sin; and the sinner is only forgiven on the ground of Another having born his punishment: for 'without shedding of blood there is no remission of sins'. (Hebrews 9:22)." reference="A.W.Pink" color="var(--teal)"/>
                </div>

                <div className="attSection" id="soWhat">
                <section>
                  <h1 className="title has-text-primary tracking-wide padded">So what do I do now?</h1>
                  </section>

                  <p className="is-size-6 leading-normal padded">Remember often that faith in Christ is the only thing that makes me right with God. Then rest in the goodness of God's judgment in any unfairness which is not within my given authority or control. And for what is in my control, let God use me as His instrument for good through obedience to His word.  Ask: What unfair thing has happened in my life?  And what is the right response to it?</p>
                  <Quote scripture="Do not present your members to sin as instruments for unrighteousness, but present yourselves to God as those who have been brought from death to life, and your members to God as instruments for righteousness." reference="Romans 6:13" color="var(--teal)"/>
                </div>

                  <div className="attSection" id="prayer">
                  <section>
                  <h1 className="title has-text-primary tracking-wide padded">Prayer</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">You are fully just, God.  Thank you for sending Jesus, the Justifier, and for the gift of His grace given even to me, a creator of injustice for others.  Help me, when I see life as unfair or unjust, to simply obey your Word and rest in You.</p>

                  <Quote scripture="For all have sinned and fall short of the glory of God, and are justified by his grace as a gift, through the redemption that is in Christ Jesus, whom God put forward as a propitiation by his blood, to be received by faith. This was to show God’s righteousness, because in his divine forbearance he had passed over former sins. It was to show his righteousness at the present time, so that he might be just and the justifier of the one who has faith in Jesus." reference="Romans 3:23-26" color="var(--teal)"/>
                </div>

                <div className="attSection has-background-light" id="scienceAndHealth">
                <section>
                  <h1 className="title has-text-primary tracking-wide padded">Where does right and wrong come from - if not God?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Human morality certainly appears grounded in our very nature.  But has it collectively evolved to this point or is it God's image coming through us?</p>
                  <p className="is-size-6 leading-normal padded">I would rather trust a tested, centuries-old document that reasonably explains why I and others (in widely different cultures) respond to life the way we do. It has God-inspired qualities.</p>
                  <p className="is-size-6 leading-normal padded">Explanations of human morality apart from God normally rest on evolutionary theory.  "As a species of social primates, we have evolved a deep sense of right and wrong to accentuate and reward reciprocity and cooperation and to attenuate and punish excessive selfishness and free riding. On the constitution of human nature are built the constitutions of human societies." - Jan 2011 quote by Michael Shermer in Scientific American</p>
                </div>

                <div className="attSection" id="history">
                <section>
                  <h1 className="title has-text-primary tracking-wide padded">Is the #MeToo movement Biblical?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">#MeToo is a contemporary movement to raise awareness of the evil of sexual abuse - something that is (or at least should be) inherently right to most thinking people.</p>
                  <p className="is-size-6 leading-normal padded">Jesus radically pushed against the culture at the time and toward the right perspective of treatment of women.  He publicly spoke to women many times, he taught women (specifically contrary to Jewish law), he healed women (even touching an "unclean" woman in Luke 8:43-48).  He revealed Himself to many women - as Messiah (to the Samaritan woman in John 4), as Resurrected Lord (to Mary at the tomb in John 20), and as Healer (to a woman who had been "bent over" for 18 years in Luke 13). If fact, He used the never-before-used term "Daughter of Abraham" in Luke 13:6 to recognize a woman bound by God's covenant (previously the only term used was "Son of Abraham"). </p>
                  <p className="is-size-6 leading-normal padded">The Christian church has not always acted in line with this revelatory message, and may still be missing the mark today.  However, the message of what is right and true today was clearly communicated 2000 years ago!</p>
                  <p className="is-size-6 leading-normal padded">"But if in the open country a man meets a young woman who is betrothed, and the man seizes her and lies with her, then only the man who lay with her shall die. But you shall do nothing to the young woman; she has committed no offense punishable by death. For this case is like that of a man attacking and murdering his neighbor" - Deuteronomy 22:25-26</p>
                  <p className="is-size-6 leading-normal padded">Even Jewish law from 3500 years ago was revolutionary for the dignity of women. These verses recognize rape as a violent crime - on par with murder. Before the fall of Adam and Eve, their relationship was synergistic, complementary - reflecting the ideal relationship within the Trinity and between Christ and His Church.  The fall resulted in much distortion and combativeness between the genders - and today's reality of sexual abuse is a testimony of this truth.</p>

                </div>

                <div className="attSection" id="liturgy" >
                <section>
                    <h1 className="title has-text-primary tracking-wide padded">"How Firm A Foundation" - Anonymous</h1>
                    </section>
                    <p className="is-size-6 leading-normal padded">"How firm a foundation, ye saints of the Lord, Is laid for your faith in His excellent word! What more can He say than to you He hath said— To you who for refuge to Jesus have fled?" - First verse</p>
                </div>

            </main>
            </div>
          </body>
        )
    }

}

export default withRouter(Just);