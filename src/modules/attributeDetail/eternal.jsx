import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom"
import '../../styles/attribute.css'
import Grid from '../../components/grid'
import Testimonial from '../../components/testimonial'
import eternal from '../../images/attributeIcons/eternal.png'
import Hero from '../../components/hero'
import AttributeSidebar from "../../components/attSidebar";

class Eternal extends Component {

    componentDidMount() {
      window.scrollTo(0, 0);
    }

    render() {
        return(
            <body className="attPage">
            <Hero title="Eternal" subtitle="To exist independent of time" img="girl.png" />
            <div className="container is-fullhd has-text-left relativeMaybe" id="eternalContainer">
              <aside>
                <section id="sidebar">
                  <AttributeSidebar />
                </section>
              </aside>

              <main>
                <div className="attSection" id="definition">
                  <section>
                  <h1 className="title has-text-info tracking-wide padded">Eternal means to exist independent of time.
                  </h1></section>
                  <p className="is-size-6 leading-normal padded">We like to control “our” time and make the best use of it.  We yearn for more of it so we can fully enjoy the moment and not be limited by running out of it. Ultimately we fear death, which appears to be the end of our time.  We really hope to live eternally - 72% of Americans believe in an “eternal” heaven and 58% believe in an “eternal” hell (2014 Pew Research Poll).  In the interim, we seek to imprint eternity with something of ourselves - maybe through children, a bit of fame, or simply a few personal photos stored in the cloud.</p>
                  <p className="is-size-6 leading-normal padded">Contemplating eternity requires me to face the fear of my own death and of losing who and what I love.   Actual loss can bring me to an intense feeling of grief, but may also develop in me a pessimism about my future, making it even more difficult to live well in the present.</p>
                </div>

                <div className="attSection" id="emotion">
                <section>
                  <h1 className="title has-text-info tracking-wide padded">Who or what have I lost that grieved me the most?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">It could have been the death of a loved one or any other thing that held importance, such as a job, a relationship or an item with monetary or sentimental value.  The pain of grief follows any significant loss as the reality of a different future is absorbed.   Full recovery, if there is such a thing, can be a long process which I can help by keeping up loving relationships and listening to wise counsel.</p>
                  <br></br>
                  <Testimonial quote=“For all our days pass away under your wrath; we bring our years to an end like a sigh.
The years of our life are seventy, or even by reason of strength eighty;
yet their span is but toil and trouble; they are soon gone, and we fly away…..…So teach us to number our days that we may get a heart of wisdom.
Return, O LORD! How long? Have pity on your servants!
Satisfy us in the morning with your steadfast love, that we may rejoice and be glad all our days.” reference="Psalm 90:9-10, 12-14" color="var(--teal)"/>
                </div>

                <div className="attSection" id="fear">
                <section>
                  <h1 className="title has-text-info tracking-wide padded">Why do I fear dying? </h1>
                </section>
                  <p className="is-size-6 leading-normal padded">It is life’s biggest loss, in one sense.  Studies show that this fear decreases with age, so time helps here!  Just remembering that death is inevitable can make every day of life even more precious. And those who believe in life after death have the advantage of living now with a perspective that stretches even into eternity. </p>
                  <br></br>
                  <Testimonial quote="Therefore, brothers, be all the more diligent to confirm your calling and election, for if you practice these qualities you will never fall. For in this way there will be richly provided for you an entrance into the eternal kingdom of our Lord and Savior Jesus Christ." reference="2 Pet 1:10-11" color="var(--teal)"/>
                </div>

                <div className="attSection" id="struggle">
                <section>
                  <h1 className="title has-text-info tracking-wide padded">Why do I often have this sinking feeling that things will not turn out very well? </h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Perceiving troubles in the future can help me plan today for a better tomorrow.  But the truth is that my thoughts of the future are always influencing what I do today, so how I view my future is critical.  The certainty of a poor future translates to a bad day today, but a certainty of a brighter future brings a hope which can help me plow through today's most difficult situation.</p>
                  <br></br>
                  <Testimonial quote=""Where there is no vision, the people perish: but he that keepeth the law, happy is he." reference="Prov 29:18" color="var(--teal)"/>
                </div>

                <div className="attSection" id="whoAmI">
                <section>
                  <h1 className="title has-text-info tracking-wide padded">Only God exists independent of time.</h1></section>
                  <p className="is-size-6 leading-normal padded">He created this concept of time in which I am now bound. He does not have to use time efficiently, or be controlled by it.  He was never born and will never cease to exist. He is the Alpha and Omega.</p>
                  <br></br>
                  <Testimonial quote=“ ‘I am the Alpha and the Omega,’ says the Lord God, ‘who is and who was and who is to come, the Almighty.’ ” reference="John 1:3" color="var(--teal)"/>
                </div>

                <div className="attSection" id="biblicalChristianity">
                  <section>
                  <h1 className="title has-text-info tracking-wide padded">Jesus is the way for believers to live eternally with God.</h1></section>
                  <p className="is-size-6 leading-normal padded">Without Him, imperfect people would never be compatible with a perfectly righteous and just God.  True justice cannot tolerate unrighteousness - what allows the two to coexist today is only a matter of time.</p>
                  <Testimonial quote="In flaming fire, inflicting vengeance on those who do not know God and on those who do not obey the gospel of our Lord Jesus. They will suffer the punishment of eternal destruction, away from the presence of the Lord and from the glory of his might," reference="2 Thess 1:8-9" color="var(--teal)"/>
                </div>

                <div className="attSection" id="soWhat">
                <section>
                  <h1 className="title has-text-info tracking-wide padded">So what do I do now?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Believe in Jesus Christ and seek a long-term perspective which includes an eternal citizenship in heaven.  Allow this long-term perspective to impact the short-term, making it more urgent to savor current moments while making it needless to cling to them.  It is quite like the positive feeling of being at work just before the weekend or holiday. Ask: How far out is my longest perspective?</p>
                  <Testimonial quote="But our citizenship is in heaven. And we eagerly await a Savior from there, the Lord Jesus Christ, who, by the power that enables him to bring everything under his control, will transform our lowly bodies so that they will be like his glorious body." reference="Phil 3:20-21" color="var(--teal)"/>
                </div>

                  <div className="attSection" id="prayer">
                  <section>
                  <h1 className="title has-text-info tracking-wide padded">Prayer</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Eternal God, thank you for always being present - in my past, present and future.  Help me to appreciate this moment in time as well as how short this life really is.</p>
                  <Testimonial quote="Remember how short my time is!  For what vanity you have created all the children of man!" reference="Psalm 89:47" color="var(--teal)"/>
                </div>

                <div className="attSection has-background-light" id="scienceAndHealth">
                <section>
                  <h1 className="title has-text-info tracking-wide padded">Nothing we see around us lives eternally, but how long can they live? </h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Mayflies live the shortest life on Earth - only 24 hours. Compare that with the common housefly at 4 weeks.  Humans live on average almost 80 years old in the US.  The oldest person (independently verified) is Jeanne Calment (1875–1997) of France, who lived to the age of 122 years, 164 days. The oldest verified man ever is Jiroemon Kimura (1897–2013) of Japan, who lived to the age of 116 years, 54 days.  The oldest person from Biblical accounts was Methuselah, at 969 years (Genesis 5:27).</p>
                  <p className="is-size-6 leading-normal padded">But some animals live even longer (verified) lives - a famous Giant Galapagos Tortoise made 152 years.  Greenland Sharks can reach 200 years old, although one individual was found that was 400 years old – making it the oldest vertebrate in the world. A bivalve mollusk, aka "Ming", lived 507±2 years.</p>
                  <p className="is-size-6 leading-normal padded">But plants currently rule the longevity contest.  A Great Basin Bristlecone Pine called Methuselah is 4,848 years old (as of 2017) and the Bristlecone Pine called Prometheus was a little older still, at least 4,844 years (and possibly as old as 5,000 years), when it was cut down in 1964. The oldest known plant (possibly oldest living thing) is a clonal Quaking Aspen tree colony in the Fishlake National Forest in Utah called Pando at about 80,000 years.</p>
                </div>

                <div className="attSection" id="history">
                <section>
                  <h1 className="title has-text-info tracking-wide padded">Is the fountain of youth real?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Ponce de León searching for the Fountain of Youth when he traveled to what is now Florida in 1513 was only a myth. It was a continuation of tales begun as early as 500 B.C. about Herodotus and 300 A.D. regarding Alexander the Great. The idea of drinking special water to live much longer is false, but does reflect the Biblical truth expressed in Jesus' encounter with the Samaritan woman at the well in John 4.  The water there is symbolic of the Holy Spirit, who does bring eternal life to those in whom He lives.</p>
                  <p className="is-size-6 leading-normal padded">"Jesus said to her, “Everyone who drinks of this water will be thirsty again, but whoever drinks of the water that I will give him will never be thirsty again. The water that I will give him will become in him a spring of water welling up to eternal life.' ” - John 4:13-14</p>

                </div>

                <div className="attSection" id="liturgy" >
                <section>
                    <h1 className="title has-text-info tracking-wide padded">Lead On, Oh King Eternal - Ernest Shurtleff</h1>
                    </section>
                    <p className="is-size-6 leading-normal padded">"Lead on, O King eternal;
we follow, not with fears,
for gladness breaks like morning
where'er your face appears.
Your cross is lifted o'er us,
we journey in its light;
the crown awaits the conquest;
lead on, O God of might." - 3rd verse</p>
                </div>

            </main>
            </div>
          </body>
        )
    }

}

export default withRouter(Creative);