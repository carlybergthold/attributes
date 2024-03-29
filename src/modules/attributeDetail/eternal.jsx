import React, { Component } from "react";
import { withRouter } from "react-router-dom"
import '../../styles/attribute.css'
import Quote from '../../components/quote'
import styleMethods from "../../methods/styleMethods";
import BaseAttributeDetail from '../../modules/attributeDetail/baseAttributeDetail';

class Eternal extends Component {

    render() {
        return(
          <BaseAttributeDetail
            title="Eternal"
            subtitle="To exist independent of time"
            definition={
              <section>
              <section>
              <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("eternal")}}>Eternal means to exist independent of time.
              </h1></section>
              <p className="is-size-6 leading-normal padded">We like to control “our” time and make the best use of it.  We yearn for more of it so we can fully enjoy the moment and not be limited by running out of it. Ultimately we fear death, which appears to be the end of our time.  We really hope to live eternally - 73% of Americans believe in an “eternal” heaven and 62% believe in an “eternal” hell (2021 Pew Research Poll).  In the interim, we seek to imprint eternity with something of ourselves - maybe through children, a bit of fame, or simply a few personal photos stored in the cloud.</p>
              <p className="is-size-6 leading-normal padded">Contemplating eternity requires me to face the fear of my own death and of losing who and what I love.   Actual loss can bring me to an intense feeling of grief, but may also develop in me a pessimism about my future, making it even more difficult to live well in the present.</p>
              </section>
            }
            emotion={
              <section>
              <section>
              <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("eternal")}}>Who or what have I lost that grieved me the most?</h1>
                </section>
                <p className="is-size-6 leading-normal padded">It could have been the death of a loved one or anything that held importance, such as a job, a relationship or an item with monetary or sentimental value.  The pain of grief follows any significant loss as the reality of a different future is absorbed.   Full recovery, if there is such a thing, can be a long process, helped by keeping up loving relationships and listening to wise counsel.</p>
                <br></br>
                <Quote scripture="For all our days pass away under your wrath; we bring our years to an end like a sigh.
                The years of our life are seventy, or even by reason of strength eighty;
                yet their span is but toil and trouble; they are soon gone, and we fly away…..…So teach us to number our days that we may get a heart of wisdom.
                Return, O LORD! How long? Have pity on your servants!
                Satisfy us in the morning with your steadfast love, that we may rejoice and be glad all our days." reference="Psalm 90:9-10, 12-14" color="var(--teal)"/>
                              </section>

            }
            fear={
              <section>
              <section>
              <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("eternal")}}>Why do I fear dying? </h1>
            </section>
              <p className="is-size-6 leading-normal padded">It is life’s biggest loss, in one sense.  Studies show that this fear decreases with age, so time helps here!  Just remembering that death is inevitable can make every day of life even more precious. And those who believe in life after death have the advantage of living now with a perspective that stretches even into eternity. </p>
              <br></br>

              <Quote scripture="Therefore, brothers, be all the more diligent to confirm your calling and election, for if you practice these qualities you will never fall. For in this way there will be richly provided for you an entrance into the eternal kingdom of our Lord and Savior Jesus Christ." reference="2 Peter 1:10-11" color="var(--teal)"/>
              </section>

            }
            struggle={
              <section>
              <section>
              <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("eternal")}}>Why do I often have this sinking feeling that things will not turn out very well? </h1>
              </section>
              <p className="is-size-6 leading-normal padded">Imagining possible troubles in the future can help me plan today for a better tomorrow.  But the truth is that my thoughts of the future are always influencing what I do today, so how I view my future is critical.  The certainty of a poor future translates to a gloomy, hopeless day today, but a certainty of a brighter future brings a hope which can help me plow through today's most difficult situations.</p>
              <br></br>

              <Quote scripture="Where there is no vision, the people perish: but he that keepeth the law, happy is he." reference="Proverbs 29:18" color="var(--teal)"/>
              </section>

            }
            whoAmI={
              <section>
              <section>
              <h1 className="title added">Only God exists independent of time.</h1></section>
              <p className="is-size-6 leading-normal padded">He created this concept of time in which I am now bound. He does not have to use time efficiently, or be controlled by it.  He was never born and will never cease to exist. He is the Alpha and Omega.</p>
              <br></br>
              <Quote scripture="'I am the Alpha and the Omega,’ says the Lord God, ‘who is and who was and who is to come, the Almighty.’" reference="John 1:3" color="var(--teal)"/>
              </section>

            }
            biblicalChristianity={
              <section>
              <section>
              <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("eternal")}}>Jesus is the way for believers to live eternally with God.</h1></section>
              <p className="is-size-6 leading-normal padded">Without Him, imperfect people would never be compatible with a perfectly righteous and just God.  True justice cannot tolerate unrighteousness - what allows the two to coexist today is only a matter of time.  Only time (through God's patience and mercy) delays justice's instant obliteration of all unrighteousness.</p>
              <Quote scripture="In flaming fire, inflicting vengeance on those who do not know God and on those who do not obey the gospel of our Lord Jesus. They will suffer the punishment of eternal destruction, away from the presence of the Lord and from the glory of his might," reference="2 Thessalonians 1:8-9" color="var(--teal)"/>              </section>

            }
            soWhat={
              <section>
              <section>
              <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("eternal")}}>So what do I do now?</h1>
              </section>
              <p className="is-size-6 leading-normal padded">Believe in Jesus Christ, which includes being sure you have an eternal citizenship in heaven.  Knowing you will live eternally allows you to seek a long-term perspective.  Allow this long-term perspective to impact the present, making it more urgent to savor current moments while making it needless to cling to them.  It is quite like the positive feeling of being at work just before the weekend or holiday. <br></br>Ask: How far out is my longest perspective?</p>
              <Quote scripture="But our citizenship is in heaven. And we eagerly await a Savior from there, the Lord Jesus Christ, who, by the power that enables him to bring everything under his control, will transform our lowly bodies so that they will be like his glorious body." reference="Philippians 3:20-21" color="var(--teal)"/>
              </section>

            }
            prayer={
              <section>
              <section>
              <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("eternal")}}>Prayer</h1>
              </section>
              <p className="is-size-6 leading-normal padded">Eternal God, thank you for always being present - in my past, present and future.  Help me to appreciate this moment in time as well as how short this life really is.  Help me to live my temporary life on earth based on my eternal life in heaven with You.</p>
              <Quote scripture="Remember how short my time is!  For what vanity you have created all the children of man!" reference="Psalm 89:47" color="var(--teal)"/>
              </section>

            }
            scienceAndHealth={
              <section>
              <section>
              <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("eternal")}}>How long do things live? </h1>
              </section>
              <p className="is-size-6 leading-normal padded">Nothing we see lives forever.  Mayflies live the shortest life on Earth - only 24 hours. Compare that with the common housefly at 4 weeks.  Humans in the USA live on average almost 80 years old.  The oldest person (independently verified) is Jeanne Calment (1875–1997) of France, who lived to the age of 122 years, 164 days. The oldest verified man ever is Jiroemon Kimura (1897–2013) of Japan, who lived to the age of 116 years, 54 days.  The oldest person from Biblical accounts was Methuselah, at 969 years (Genesis 5:27).</p>
              <p className="is-size-6 leading-normal padded">But some animals live even longer (verified) lives - a famous Giant Galapagos Tortoise made 152 years.  Greenland Sharks can reach 200 years old, although one individual was found that was 400 years old – making it the oldest vertebrate in the world. A bivalve mollusk, aka "Ming", lived 507, plus or minus 2 years.</p>
              <p className="is-size-6 leading-normal padded">But plants currently rule the longevity contest.  A Great Basin Bristlecone Pine called Methuselah is 4,851 years old (as of 2020).  A Bristlecone Pine called Prometheus was a little older still, estimated at 4844-5000 years old when it was cut down in 1964. The oldest known plant (possibly oldest living thing) is a clonal Quaking Aspen tree colony in the Fishlake National Forest in Utah called Pando at about 80,000 years.</p>
              </section>

            }
            attattHistory={
              <section>
              <section>
              <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("eternal")}}>Is the fountain of youth real?</h1>
              </section>
              <p className="is-size-6 leading-normal padded">Ponce de León searching for the Fountain of Youth when he traveled to what is now Florida in 1513 was only a myth. It was a continuation of tales begun as early as 500 B.C. about Herodotus and 300 A.D. regarding Alexander the Great. The idea of drinking special water to live much longer is false, but does reflect the Biblical truth expressed in Jesus' encounter with the Samaritan woman at the well in John 4, where the water is symbolic of the Holy Spirit, who actually and uniquely does bring eternal life to those in whom He lives.</p>
              <p className="is-size-6 leading-normal padded">"Jesus said to her, “Everyone who drinks of this water will be thirsty again, but whoever drinks of the water that I will give him will never be thirsty again. The water that I will give him will become in him a spring of water welling up to eternal life.' ” - John 4:13-14</p>
              </section>

            }
            liturgy={
              <section>
              <section>
              <h1 className="title added">"Amazing Grace" - John Newton</h1>
          </section>
              <p className="is-size-6 leading-normal padded">"Yea, when this flesh and heart shall fail,<br></br>
              and mortal life shall cease,<br></br>
              I shall possess within the veil,<br></br>
              A life of joy and peace.<br></br>
              When we've been there ten thousand years<br></br>
              Bright shining as the sun,<br></br>
              We've no less days to sing God's praise<br></br>
              Than when we've first begun." - 5th and 6th verse</p>
              </section>

            }
          />
        )
    }

}

export default withRouter(Eternal);