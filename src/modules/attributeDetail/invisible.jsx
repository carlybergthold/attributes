import React, { Component } from "react";
import { withRouter } from "react-router-dom"
import '../../styles/attribute.css'
import Quote from '../../components/quote'
import styleMethods from "../../methods/styleMethods";
import BaseAttributeDetail from '../../modules/attributeDetail/baseAttributeDetail';

class Invisible extends Component {

    render() {
        return(
          <BaseAttributeDetail
            title="Invisible"
            subtitle="To exist beyond our current senses"
            definition={
              <section>
                  <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("invisible")}}>Invisible means to exist beyond our current senses.
                  </h1></section>
                  <p className="is-size-6 leading-normal padded">Each of our senses have design limitations, making many realities unheard, untouched and unseen.   However, with ingenuity we have begun to measure and then even manipulate these invisible objects, such as the data waves constantly hitting my I-phone.  Others are a bit more fuzzy -  that periodic gut feeling I have, or who I really am but don’t realize right now. Another term to describe invisible might be spiritual (75% of Americans want to be “spiritual” - Pew Research).</p>
                  <p className="is-size-6 leading-normal padded">My fears often stem from what I cannot see - what I imagine or from what is unknown to me.  Whether the basis for these fears is real or not makes the impact on my life no less real or substantial.  Praying to a God I cannot physically sense certainly takes faith.  Worshipping an invisible God in a time of urgent distress with no relief in sight would seem nearly crazy - but can be more helpful than I can imagine.</p>
              </section>
            }
            emotion={
              <section>
                 <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("invisible")}}>But I need God to act now!</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">When distressed, I understandably want immediate and tangible help. If I seek God in one of these foxhole moments (and I should!) it’s quite likely I will not see “God’s footprints” immediately, maybe even never.  God’s loving response for His own, however, is always present - sometimes fused with the actions of another person, sometimes only in guiding my perspective of what’s going on.  But what I can immediately see is never the full picture of what’s really going on.</p>
                  <br></br>
                  <Quote scripture="I cry aloud to God, aloud to God, and he will hear me.  In the day of my trouble I seek the Lord; in the night my hand is stretched out without wearying; my soul refuses to be comforted.  When I remember God, I moan; when I meditate, my spirit faints…..Has his steadfast love forever ceased?  Are his promises at an end for all time?  Has God forgotten to be gracious?  Has he in anger shut up his compassion?…Then I said, ‘I will appeal to this, to the years of the right hand of the Most High.’  I will remember the deeds of the LORD; yes, I will remember your wonders of old. I will ponder all your work, and meditate on your mighty deeds…Your way was through the sea, your path through the great waters; yet your footprints were unseen.  You led your people like a flock by the hand of Moses and Aaron." reference="Psalm 77:1-3, 8-12, 19-20" color="var(--teal)"/>               
              </section>
            }
            fear={
              <section>
                  <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("invisible")}}>Fear of the invisible can be very appropriate.</h1>
                </section>
                  <p className="is-size-6 leading-normal padded">I wash my hands even when they look clean in order to remove germs which could give me a disease (thanks to Ignaz Semmelweis, a Hungarian doctor who clearly showed hand washing to reduce childbirth mortality, but was shunned by the 1850s medical community and died in an asylum without vindication).</p>
                  <p className="is-size-6 leading-normal padded">The truth of the Bible says that sin, causing separation from God, is indeed a real problem for me.  God provides an effective solution in the form of His son, Jesus Christ, who willingly took on the penalty for my sin if I simply believe in Him.  Another simple, yet effective, solution to an invisible, yet deadly, disease.</p>
                  <br></br>

                  <Quote scripture="For we do not wrestle against flesh and blood, but against the rulers, against the authorities, against the cosmic powers over this present darkness, against the spiritual forces of evil in the heavenly places." reference="Ephesians 6:12" color="var(--teal)"/>              
              </section>
            }
            struggle={
              <section>
                <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("invisible")}}>How can I see an invisible God?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">"Blessed are the pure in heart, for they shall see God." - Matt 5:8   A truly pure heart comes only from Jesus and is rooted in faith.  It does not magically display God clearly, but allows me to begin a daily discovery of who He is.  His attributes may form an outline of His image and His fruit may provide colors within the outline.  I can now catch wonderful glimpses of Him, but will not be able to bring His full being into focus in this life.  But it will be sufficient.  </p>
                  <br></br>

                  <Quote scripture="But the fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faithfulness, gentleness and self-control.  Against such things there is no law." reference="Galatians 5:22-23" color="var(--teal)"/>                
              </section>
            }
            whoAmI={
              <section>
                 <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("invisible")}}>Only God is aware of all things invisible.</h1></section>
                  <p className="is-size-6 leading-normal padded">God designed my body not to be able to see Him directly, but, by faith, to perceive Him as He reveals Himself.  Having limited sensors biases my physical body from what is invisible.  I may assume that death fully eliminates the person, when in reality, it only removes the sensors and leaves the spirit.</p>
                  <br></br>
                  <Quote scripture="God is spirit, and those who worship Him must worship Him in spirit and truth." reference="John 4:24" color="var(--teal)"/>               
              </section>
            }
            biblicalChristianity={
              <section>
                   <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("invisible")}}>Jesus in human form was the actual image of invisible God.</h1></section>
                  <p className="is-size-6 leading-normal padded">Although Christianity is based in faith, it is grounded in sensory evidence and truth.  Jesus spoke of His kingdom which was not of this world, but which was being revealed and now exists.</p>

                  <Quote scripture="He (Jesus) is the image of the invisible God." reference="Colossians 1:15a" color="var(--teal)"/>
                  <Quote scripture="Faith is…being convinced of what we do not see." reference="Hebrews 11:1" color="var(--teal)"/>               
              </section>
            }
            soWhat={
              <section>
                 <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("invisible")}}>So what do I do now?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">By faith, embrace what I cannot yet sense, all the while tasting the spiritual through what can be sensed.  Compare the truth which God has already revealed through the Bible with what I can observe all around me.   <br></br>Ask: What evidence do I see of an invisible God?</p>
                  <Quote scripture="Oh, taste and see that the LORD is good! Blessed is the man who takes refuge in him!" reference="Psalm 34:8" color="var(--teal)"/>               
              </section>
            }
            prayer={
              <section>
                  <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("invisible")}}>Prayer</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">You are Invisible, God, yet always present.  Help me to remember this truth and not be overcome by what I see before me.  Help me now to see your Kingdom here on earth, built on your Word. </p>

                  <Quote scripture="For we walk by faith, not by sight." reference="2 Corinthians 5:7" color="var(--teal)"/>
                  <Quote scripture="So faith comes from hearing, and hearing through the word of Christ." reference="Romans 10:17" color="var(--teal)"/>                
              </section>
            }
            scienceAndHealth={
              <section>
                 <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("invisible")}}>How can we see what is invisible?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">We can now see individual molecules with a microscope, other galaxies with a telescope, and inside our bodies with MRIs and ultrasounds. We can detect levels of radiation and listen to and even watch different signals that race through space invisibly if we simply have the right sensor to capture them.  <br></br>None of these "mystical" capabilities were present just a few centuries ago.  Although there are many tangible evidences of God, He and His Kingdom are still largely invisible to us. However, that does not mean they are not real. The Holy Spirit and time will reveal more and more of God and His Kingdom.</p>               
              </section>
            }
            history={
              <section>
                <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("invisible")}}>God is revealing who He is and who we are over history.</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">God will reveal what cannot now be seen by restoring what was once lost.  God was visible to Adam and Eve in Eden, but this benefit was lost when they were banned from the garden.  But they also began to see who they actually were - in God’s image, but not with His perfection.  God then progressively revealed Himself through history (as recorded in the Bible), as well as to individual believers (through sanctification).  Heaven restores the full visibility of God.</p>
                  <p className="is-size-6 leading-normal padded">"For what can be known about God is plain to them, because God has shown it to them. For his invisible attributes, namely, his eternal power and divine nature, have been clearly perceived, ever since the creation of the world, in the things that have been made. So they are without excuse." - Romans 1:19-20</p>                
              </section>
            }
            liturgy={
              <section>
                 <section>
                    <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("invisible")}}>"Immortal, Invisible, God only Wise" - Walter C. Smith</h1>
                    </section>
                    <p className="is-size-6 leading-normal padded">"Immortal, invisible, God only wise,<br></br>
                    In light inaccessible, hid from our eyes,<br></br>
                    Most blessed, most glorious, the Ancient of Days,<br></br>
                    Almighty, victorious, Thy great name we praise." - 1st verse</p>               
              </section>
            }
          />
        )
    }

}

export default withRouter(Invisible);