import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom"
import '../../styles/attribute.css'
import Grid from '../../components/grid'
import Testimonial from '../../components/testimonial'
import Hero from '../../components/hero'
import AttributeSidebar from "../../components/attSidebar";
import Quote from '../../components/quote'

class Saving extends Component {

    // componentDidMount() {
    //   window.scrollTo(0, 0);
    // }

    render() {
        return(
            <body className="attPage">
            <Hero title="Saving" subtitle="To provide a remedy or heal" img="girl.png" />
            <div className="container is-fullhd has-text-left relativeMaybe" id="attributeContainer">
              <aside>
                <section id="sidebar">
                  <AttributeSidebar />
                </section>
              </aside>

              <main>
                <div className="attSection" id="definition">
                  <section>
                  <h1 className="title has-text-primary tracking-wide padded">Saving means to provide a remedy or heal.
                  </h1></section>
                  <p className="is-size-6 leading-normal padded">It often means restoring something to its original condition, like cars or furniture.  When we are sick, we seek healing in order to get back to the condition in which we can enjoy life.  Although we can get upset when things break or fall apart, restoration from this inferior condition may also bring a new level of satisfaction or gratitude.</p>
                  <p className="is-size-6 leading-normal padded">Americans spend about $11,000 annually per person for medical care (much of which is paid indirectly by employers or government), with the primary goal to restore us back to our normal health, a priceless status.  Although the medical system heroically saves lives, this level of spending does not change the inevitability of physical death.</p>
                  <p className="is-size-6 leading-normal padded">Only when I realize the true danger of my situation do I become desperate to find a way out or through.  I may even feel desperation for another person’s situation, developing a codependency while I try to rescue them from their trouble (which they may not even see).  In either case, my fuel is hope.  But if I lose even hope, what then?</p>
                </div>

                <div className="attSection" id="emotion">
                <section>
                  <h1 className="title has-text-primary tracking-wide padded">What am I desperately hoping for?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">A Hail Mary pass.  An experimental medical treatment.  Refugees crowding into unseaworthy boats.  A trip to Las Vegas when already deep in debt.  A man committing adultery and murder, and then asking God for mercy.  The common thread is hope, resulting in a desperate act that could save.  But success is far from guaranteed.</p>
                  <p className="is-size-6 leading-normal padded">Most would take desperate measures to save their own life, even realizing it will be lost eventually.  Fewer desperately seek an eternal life reconciled with God, which can then never be lost.  David’s desperation (in the verses below) drove him to God as the only Person holding the remedy to his sin.  My sin is likely not as bad as David’s, but any sin puts me in a desperate position with a perfectly just and holy God.  Once I realize this, the only sensible action - which some may call desperate -  is to find mercy and salvation through faith in Christ Jesus’ death on the cross (i.e. God’s rescue). </p>
                  <br></br>
                  <Quote scripture="Have mercy on me, O God, according to your steadfast love; according to your abundant mercy blot out my transgressions.  Wash me thoroughly from my iniquity, and cleanse me from my sin!  For I know my transgressions, and my sin is ever before me.  Against you, you only, have I sinned and done what is evil in your sight, so that you may be justified in your words and blameless in your judgment.  Behold, I was brought forth in iniquity, and in sin did my mother conceive me.  Behold, you delight in truth in the inward being, and you teach me wisdom in the secret heart.…  O Lord, open my lips, and my mouth will declare your praise.  For you will not delight in sacrifice, or I would give it; you will not be pleased with a burnt offering.  The sacrifices of God are a broken spirit; a broken and contrite heart, O God, you will not despise." reference="Psalm 51:1-6, 15-17"/>
                </div>

                <div className="attSection" id="fear">
                <section>
                  <h1 className="title has-text-primary tracking-wide padded">What if I lose even hope?</h1>
                </section>
                  <p className="is-size-6 leading-normal padded">When I feel a difficult situation will never get better, I lose hope.  Sometimes the situation is as dire as I see it.  At other times my fatigue or emotions may be overwhelming my perspective.  But either circumstance can plunge my present into a real abyss of hopelessness.</p>
                  <p className="is-size-6 leading-normal padded">”There were more than twice as many suicides (44,193) in the United States as there were homicides (17,793). Suicide is the second leading cause of death among individuals between the ages of 15 and 34." - 2015 US CDC data</p>
                  <p className="is-size-6 leading-normal padded">Ironically, the only remedy to losing hope is new hope.  This new hope comes from something new - maybe revealing to another my yet-hidden thoughts, a new goal that is more attainable than the present one, or a new perspective formed by reading God’s word.</p>
                  <br></br>
                  <Quote scripture="For I know the plans I have for you, declares the Lord, plans for welfare and not for evil, to give you a future and a hope." reference="Jeremiah 29:11" color="var(--teal)"/>
                </div>

                <div className="attSection" id="struggle">
                <section>
                  <h1 className="title has-text-primary tracking-wide padded">What if God has appointed me to rescue another from their troubles?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Every person should love and help other people.  Every person also has needs, some more than others (such as a small child or an aged parent with infirmities).  If I am pouring my life into another person, I may do well to ask a few questions:  
                  o Are my efforts helping or hurting the person long term?  
                  o Am I helping the other become more independent, if possible, and grow in these attributes of God?  
                  o Have I established any needed boundaries or set proper expectations for the relationship?  
                  o Do I deliberately respond or automatically react?  
                  o Am I trying to do what God alone is capable of doing?</p>
                  <br></br>
                  <Quote scripture="Bear one another’s (unbearable) burdens, and so fulfill the law of Christ…. For each will have to bear his own load." reference="Galatians 6:2,5" />
                </div>

                <div className="attSection" id="whoAmI">
                <section>
                  <Hero title="Only God can restore my damaged relationship with Him from sin."></Hero>
                </section>
                  <p className="is-size-6 leading-normal padded"> To believe I can save myself by being good enough to hang out with a holy God is madness.  To hope that people are naturally good or will improve over time ignores both history and current events.</p>
                  <br></br>
                  <Quote scripture="Since, therefore, we have now been justified by his blood, much more shall we be saved by him from the wrath of God." reference="Romans 5:9" />
                </div>

                <div className="attSection" id="biblicalChristianity">
                  <section>
                  <h1 className="title has-text-primary tracking-wide padded">Jesus was the perfect Lamb offered as Savior to the world.</h1></section>
                  <p className="is-size-6 leading-normal padded">Jesus was not a cuddly pet lamb to play with, but a blood sacrifice.  The Gospel (meaning Good News) begins with the bad news that my sin is deserving of death. But Jesus’ death on the cross saves me from this penalty and restores believers to a right and eternal relationship with God.</p>
                  <Quote scripture="The next day he saw Jesus coming toward him, and said, 'Behold, the Lamb of God, who takes away the sin of the world!'" reference="John 1:29" color="var(--teal)"/>
                </div>

                <div className="attSection" id="soWhat">
                <section>
                  <h1 className="title has-text-primary tracking-wide padded">So what do I do now?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Stop trying to justify myself through my works and rely solely on Jesus’ work on the cross to save me.  Realizing I am free from the law and associated judgment, be motivated by my love of Christ in response to the remedy He provides.
                  Ask:  Why am I doing this good work?</p>
                  <Quote scripture="For by grace you have been saved through faith. And this is not your own doing; it is the gift of God, not a result of works, so that no one may boast." reference="Ephesians 2:8-9" color="var(--teal)"/>
                </div>

                  <div className="attSection" id="prayer">
                  <section>
                  <h1 className="title has-text-primary tracking-wide padded">Prayer</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Merciful God, you alone can restore our relationship.  Not my good works, not my church membership, nor even my sacrifice of praise.  Bring me to the point of realizing that my only hope is Your work in me.</p>
                  <Quote scripture="Hide your face from my sins, and blot out all my iniquities. Create in me a clean heart, O God, and renew a right spirit within me. Cast me not away from your presence, and take not your Holy Spirit from me. Restore to me the joy of your salvation, and uphold me with a willing spirit." reference="Psalm 51:9-12" color="var(--teal)"/>
                </div>

                <div className="attSection has-background-light" id="scienceAndHealth">
                <section>
                  <h1 className="title has-text-primary tracking-wide padded">Is man good or bad?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Christianity assumes man is sinful - worthy of only God’s wrath - making the need for salvation obvious.  A secularist view typically views man as both good and bad, but getting better (evolving) with time. Which view has more evidence?</p>
                  <p className="is-size-6 leading-normal padded">The secularist view of man’s improvement often points to global stats like the following from a 10/17/18 article from VOX:  70% reduction in poverty over the last 30 years, lifespans doubling over the last century, homicide and violent crimes dropping over the last few decades, literacy and education levels soaring, improved internet accessibility and much lower costs of renewable energy sources. There is no doubt that life is indeed getting longer and much more comfortable. But is man truly getting better?</p>
                  <p className="is-size-6 leading-normal padded">Christianity’s measures of better are God’s attributes reflected within us.  Are we more truthful? More patient, humble and loving? Do we live with more peace and joy? Are we faithful to our commitments?</p>
                </div>

                <div className="attSection" id="history">
                <section>
                  <h1 className="title has-text-primary tracking-wide padded">Why is Christmas celebrated on December 25?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">”For unto you is born this day in the city of David a Savior, who is Christ the Lord." - Luke 2:11  
                  Salvation brought by Christ is celebrated by both Christmas (His birth) and Easter (His resurrection from death on the cross).  The exact day of His birth was not recorded, but is celebrated around the globe.  How was this date established?</p>
                  <p className="is-size-6 leading-normal padded">December 25 was first identified as the date of Jesus’ birth by Sextus Julius Africanus (a Christian historian) in 221. It was first celebrated in 336 - but not widely until the 9th century. It was banned by the the Puritans in the 17th century because it often included drunkenness and other misbehavior.  The current tradition of including Santa Claus and gift giving came only a couple hundred years ago.</p>
                  <p className="is-size-6 leading-normal padded">So why December 25th?  It was customary to honor not the birth, but the death, of martyrs. Hence Good Friday and Easter were the predominant days observed theologically. Good Friday is tied to the Jewish Passover - when the Jews in Egypt were “passed over” (saved) from the 10th plague of death to all first-born by putting the blood of a lamb sacrifice on doorposts.  Passover timing was historically spring and it was also thought that Christ’s Spirit entered the world at the same day of year (celebrated March 25 as Annunciation Day, marking Gabriel telling Mary she would conceive).  Hence, Christmas was established nine months later! This thinking was bolstered by this day being the Roman winter solstice, the day from which light is daily added.</p>

                </div>

                <div className="attSection" id="liturgy" >
                <section>
                    <h1 className="title has-text-primary tracking-wide padded">“There Is Power In The Blood” - Lewis Edgar Jones  
                    Propitiation: The act of appeasing a deity.  In the Old Testament, blood was annually spilled on top of the ark of the covenant, deflecting God's wrath from heaven.  This wrath came because of violations of the law which was physically located in the ark (stone tablets).  In the New Testament, Christ’s shed blood on the cross served the same saving purpose, though was a once-for-all-time sacrifice.</h1>
                    </section>
                    <p className="is-size-6 leading-normal padded">"Would you be free from the burden of sin?
There's power in the blood
Power in the blood
Would you o'er evil a victory win?
There's wonderful power in the blood
There is power, power, wonder working power
In the blood of the Lamb
There is power, power, wonder working power
In the precious blood of the Lamb" - First verse and chorus</p>
                </div>

            </main>
            </div>
          </body>
        )
    }

}

export default withRouter(Creative);