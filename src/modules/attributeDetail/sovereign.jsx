import React, { Component } from "react";
import { withRouter } from "react-router-dom"
import '../../styles/attribute.css'
import Hero from '../../components/hero'
import AttributeSidebar from "../../components/attSidebar";
import Quote from '../../components/quote'

class Sovereign extends Component {

    // componentDidMount() {
    //   window.scrollTo(0, 0);
    // }

    render() {
        return(
            <body className="attPage">
            <Hero title="Sovereign" subtitle="To be lord and king" img="girl.png" />
            <div className="container is-fullhd has-text-left relativeMaybe" id="attributeContainer">
              <aside>
                <section id="sidebar">
                  <AttributeSidebar />
                </section>
              </aside>

              <main>
                <div className="attSection" id="definition">
                  <section>
                  <h1 className="title added">Sovereign means to be lord and king, subject to no other authority.
                  </h1></section>
                  <p className="is-size-6 leading-normal padded">We like to be in charge - if not of others, at least of our own lives.  We like to choose what we want and when we want it.  We tend to bristle when others impose their will upon us - whether this be the government, employers, or even our own friends and family.  Money often is seen as a key to keeping or boosting our personal sovereignty.</p>
                  <p className="is-size-6 leading-normal padded">The more I like being in control, the more I will fear losing it - because something bad will likely happen if I don’t prevent it.  So suffering the bad or losing control will both bring sadness into my life, when my goal is quite the opposite - to be happy. Of course, if God is truly sovereign, do I really have any control?</p>
                </div>

                <div className="attSection" id="emotion">
                <section>
                  <h1 className="title added">What makes me sad?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Sadness is the natural result of loss.  Most of what I gain in this life I will eventually lose, often multiple times. Since losses typically impact people twice as powerfully as a similar gain, this emotion can predominate life. And the more I valued what I lost, the deeper and longer my sadness will be, and the more I will withdraw and seek comfort.</p>
                  <p className="is-size-6 leading-normal padded">Ironically, many losses come with an associated, yet distinctly different, gain, which I do well to seek and fully embrace.  Focusing only on a past or expected loss can prevent me from even noticing the gain right before me.  When I accept God as my Lord and Sovereign, I give up much, including my own will that is opposed to God. Perceived as a loss, I may grieve over and naturally cling to this old will.  However, meditating on the gain, as this psalmist does, allows me to see the Spirit as good leadership to guide me through life.</p>
                  <br></br>
                  <Quote scripture="For the enemy has pursued my soul; he has crushed my life to the ground; he has made me sit in darkness like those long dead. Therefore my spirit faints within me; my heart within me is appalled. I remember the days of old; I meditate on all that you have done; I ponder the work of your hands. I stretch out my hands to you; my soul thirsts for you like a parched land. Selah <br> ….Deliver me from my enemies, O LORD!  I have fled to you for refuge. Teach me to do your will, for you are my God!  Let your good Spirit lead me on level ground! For your name’s sake, O LORD, preserve my life!  In your righteousness bring my soul out of trouble! And in your steadfast love you will cut off my enemies, and you will destroy all the adversaries of my soul, for I am your servant." reference="Psalm 143:3-6,9-12"/>
                </div>

                <div className="attSection" id="fear">
                <section>
                  <h1 className="title added">I fear what might happen if I do not have full control of my life.</h1>
                </section>
                  <p className="is-size-6 leading-normal padded">Doing my best with what I can control is good.  However, believing I can control all outcomes or desiring a guaranteed future will eventually disappoint because life always brings unexpected events - some of which I will perceive to be good, but many I will not like.  The unexpected good is easy, but how do I respond to this unexpected bad?</p>
                  <br></br>
                  <p>To stoically bear through the bad is often needed.  To squeeze any good I can find from it is admirable.  To believe good will eventually come from a bad makes it much more tolerable, if not acceptable.  To know God will lovingly work good from everything I experience can bring peace and joy even in the midst of the bad.</p>
                  <br></br>
                  <Quote scripture="And we know that for those who love God all things work together for good, for those who are called according to his purpose." reference="Romans 8:28" color="var(--teal)"/>
                </div>

                <div className="attSection" id="struggle">
                <section>
                  <h1 className="title added">How am I accountable for anything if God is sovereign?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">As a human, I am clearly responsible and accountable for what I do.  If I choose not to work, I will have less or no money.  If I choose to not be friendly, I will likely have few or no friends.  In His sovereignty, God created me as an image of Him, with the ability to think and act independently (even to sin) - yet He is always in control.  It is not a matter of either/or; it is both - He is sovereign and I am accountable.</p>
                  <br></br>
                  <Quote scripture="So then each of us will give an account of himself to God." reference="Romans 14:12" />
                  <br></br>
                  <Quote scripture="You will say to me then, 'Why does he still find fault? For who can resist his will?'  But who are you, O man, to answer back to God?  Will what is molded say to its molder, 'Why have you made me like this?' Has the potter no right over the clay, to make out of the same lump one vessel for honorable use and another for dishonorable use?" reference="Romans 9:19-21" />
                </div>

                <div className="attSection" id="whoAmI">
                <section>
                  <Hero title="Only God is sovereign."></Hero>
                </section>
                  <p className="is-size-6 leading-normal padded">I must concede that much in my life is not within my control.  I might then look at my own limitations and erroneously assume God is similarly constrained.  Must the sovereign Creator even conform to the scientific norms of His own creation?  No, His sovereignty soars even above His created works.</p>
                  <br></br>
                  <Quote scripture="At His pleasure the Red Sea divided and its waters stood up as walls (Exo 14); the earth opened her mouth, and guilty rebels went down alive into the pit (Num 16). When He so ordered, the sun stood still (Josh 10); and on another occasion went backward ten degrees on the dial of Ahaz (Isa 38:8). To exemplify His supremacy, He made ravens carry food to Elijah (I Kings 17), iron to swim on top of the waters (2 Kings 6:5), lions to be tame when Daniel was cast into their den, fire to burn not when the three Hebrews were flung into its flames." reference="A. W. Pink" />
                </div>

                <div className="attSection" id="biblicalChristianity">
                  <section>
                  <h1 className="title added">Jesus is the sovereign Lord and King.</h1></section>
                  <p className="is-size-6 leading-normal padded">In Revelation, Jesus is revealed in the end times as Lord and King.  While on earth, He did not appear to be sovereign, but rather was submissive to His Father, God.  The conclusion is that the One God, Who is also the Trinity (God the Father, Jesus the Son, and the Holy Spirit), has been and always will be the one and only sovereign.</p>
                  <Quote scripture="On his robe and on his thigh he has a name written, King of kings and Lord of lords." reference="Revelation 19:16" color="var(--teal)"/>
                </div>

                <div className="attSection" id="soWhat">
                <section>
                  <h1 className="title added">So what do I do now?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Rest in what is not within my control (i.e. traffic, elections, all actions of others, etc.) and gratefully submit to God’s authority.</p> 
                  <br></br>
                  <p>Ask: What am I trying to control in my life that is not actually in my control?</p>
                  <br></br>
                  <Quote scripture="The Lord does whatever He pleases in heaven and on earth, in the seas and all the depths." reference="Psalm 135:6"
                  color="var(--teal)"/>
                </div>

                  <div className="attSection" id="prayer">
                  <section>
                  <h1 className="title added">Prayer</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Almighty God, I confess that my will often remains the center of my life.  Forgive me and help me to accept You as my Sovereign Creator and Lord.  Let my love for You overwhelm my still-demanding and independent self.</p>
                  <Quote scripture="Even as he chose us in him before the foundation of the world, that we should be holy and blameless before him. In love he predestined us for adoption to himself as sons through Jesus Christ, according to the purpose of his will, to the praise of his glorious grace, with which he has blessed us in the Beloved." reference="Ephesians 1:4-6" color="var(--teal)"/>
                </div>

                <div className="attSection has-background-light" id="scienceAndHealth">
                <section>
                  <h1 className="title added">A free market caters to my personal sovereignty through choice.</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">I really like being able to choose what I want.  However, once I experience nearly unlimited choice, a lack of choice can diminish my sense of control and invoke an intense feeling of personal loss.  How do I feel when I see an empty shelf instead of the product I really want to buy?  Or when I cannot get any better than 2-day shipping from Amazon?</p>
                  <p className="is-size-6 leading-normal padded">A free market economy has nurtured this desire for personal sovereignty quite well.  In the last 20 years, the number of items found at a typical grocery store has grown from 7000 to 40-50,000.  Want coffee?  From basically two different beans (arabica or robusta), we need to choose from beans, ground or instant - then decaf, flavored, and type of roast - grown in what part of the world - organic, fair trade, or rainforest alliance certified?  Not to mention brand.  And then there's the milk that you can choose to add (or not) - cream, whole, 2%, skim, coconut, almond, soy, oat, rice, hemp, cashew.....</p>
                </div>

                <div className="attSection" id="history">
                <section>
                  <h1 className="title added">What has long been considered the key to all power and control?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Power, money, fame, sex?  All these have unique abilities to control in this life, but it seems money is the universal currency.  Money can not only buy certain levels of power, fame and sex, it can also bring much comfort and security.  And with all of these benefits, I can feel not only powerful, but maybe even a bit “sovereign”…!</p>
                  <p className="is-size-6 leading-normal padded">The first British Gold Sovereign Coins were minted over 500 years ago and they remain the world’s oldest surviving coin, still in production for use as gold bullion. When King Henry VII ordered the first Sovereign to be struck, the coin featured a portrait of himself enthroned and dressed in full coronation regalia. The coin declared to the world who was now in charge and those with the coin owned a bit of that power. We now use paper or electronic substitutes for gold.  Just as this paper is worthless unless backed by a sovereign government, our perceived personal power is only a cheap reflection of God’s sovereignty.</p>
                </div>

                <div className="attSection" id="liturgy" >
                <section>
                    <h1 className="title added">“Have Thine Own Way, Lord” - Jim Reeves</h1>
                    </section>
                    <p className="is-size-6 leading-normal padded">"Have Thine own way Lord <br></br>
Have Thine own way <br></br>
Thou art the potter I am the clay <br></br>
Mold me and make me after Thy will <br></br>
While I am waiting yielded and still  (1st verse)</p>
                </div>

            </main>
            </div>
          </body>
        )
    }

}

export default withRouter(Sovereign);