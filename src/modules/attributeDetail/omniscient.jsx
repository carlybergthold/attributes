import React, { Component } from "react";
import { withRouter } from "react-router-dom"
import '../../styles/attribute.css'
import Quote from '../../components/quote'
import Hero from '../../components/hero'
import AttributeSidebar from "../../components/attSidebar";
import styleMethods from "../../methods/styleMethods";

class Omniscient extends Component {

    componentDidMount() {
      window.scrollTo(0, 0);
    }

    render() {
        return(
            <body className="attPage">
            <Hero title="Omniscient" subtitle="To know everything"  />
            <div className="container is-fullhd has-text-left relativeMaybe" id="attributeContainer">
              <aside className="has-background-grey-lighter">
                <section id="sidebar">
                  <AttributeSidebar attribute="omniscient"/>
                </section>
              </aside>

              <main>
                <div className="attSection" id="definition">
                  <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("omniscient")}}>Omniscient means to know all there is to know - past, present and future.
                  </h1></section>
                  <p className="is-size-6 leading-normal padded">We like to know more because it usually benefits us.  Consequentially we spend much time and effort to attain even more knowledge.  We are even making significant progress on knowing the future through tools such as AI and predictive statistical models. </p>
                  <p className="is-size-6 leading-normal padded">Collectively our ability to know and understand is growing faster every day.  Buckminster Fuller created the “Knowledge Doubling Curve” - in 1900 the world’s knowledge doubled every century; in 1945, every 25 years; and about every year today. This rate acceleration is expected to attain daily doubling or more. - “Industry Tap into News”, 4/19/13 edition</p>
                  <p className="is-size-6 leading-normal padded">Not knowing causes problems.  When I can’t get enough information, I fear I might not make the right decision or take the right action.  When others don’t have all the right information, they might misunderstand me.  So it’s crazy, then, that what I struggle with the most can be too much of the wrong kind of information.</p>
                </div>

                <div className="attSection" id="emotion">
                <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("omniscient")}}>I think you misunderstood me.</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Sometimes I might want to be misunderstood because my intentions or actions were not ideal.  However, I usually want to be fully understood, and I can get very frustrated or even hurt when I am misunderstood.  Sometimes I am the problem - I might only think something instead of actually saying it. Sometimes it is the other person who simply does not know me well.  God not only knows me, but knows my thoughts and intentions.  He knows me better than I know myself and will use that knowledge for my good.</p>
                  <br></br>
                  <Quote scripture="They kill the widow and the sojourner, and murder the fatherless; and they say, ‘The LORD does not see; the God of Jacob does not perceive.’  Understand, O dullest of the people!  Fools, when will you be wise?  He who planted the ear, does he not hear? He who formed the eye, does he not see? He who disciplines the nations, does he not rebuke? He who teaches man knowledge—the LORD—knows the thoughts of man, that they are but a breath...If the LORD had not been my help, my soul would soon have lived in the land of silence.  When I thought, ‘My foot slips,’ your steadfast love, O LORD, held me up. When the cares of my heart are many, your consolations cheer my soul." reference="Psalm 94:6-11,17-19" color="var(--teal)"/>
                </div>

                <div className="attSection" id="fear">
                <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("omniscient")}}>Can’t I get just a little more information, please?</h1>
                </section>
                  <p className="is-size-6 leading-normal padded">I gather data for a decision and can learn only how much I still don’t know.  This can be a necessary and scary step, pondering how much I did not know before.  Even more scary is realizing how much more I will likely never know.</p>
                  <p className="is-size-6 leading-normal padded">God knows all I don’t know.  Think about that.  Knowing we as humans would not know all things, God gave us truth and wisdom through the Bible, along with the Holy Spirit, to help us see and live more clearly.</p>
                  <br></br>
                  <Quote scripture="“One of the most important questions that needs to be answered is, ‘When is the decision or resolution needed?’… Too little time and the decision is made without knowledge that could have enabled a more informed choice, generally reducing risk. Too much time and the benefits from the alternative solutions are delayed, or in the case of a problem, losses or pain continue to increase. The lack of making a decision in a timely matter (being indecisive) often means that all or most of the best options have been eliminated, and you are only left with the least beneficial option(s). For example, if you delay your decision to apply to colleges, you are often left with the options that have late application dates, but none of these would have been your first choice." reference="Decision Innovation (TM)" color="var(--teal)"/>
                </div>

                <div className="attSection" id="struggle">
                <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("omniscient")}}>I think I have information overload!</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">I know obtaining knowledge is important, but too much is simply tiring.  I need to get critical information from many different sources, but true perspective on life has been concisely given by God through one book - the Bible.</p>
                  <p className="is-size-6 leading-normal padded">In the following Psalm, God is “the one Shepherd”.  His words inspire me to act (”like goads”), while keeping me grounded (“like nails”) as He constructs good through my life.  My uncomplicated job?  First and foremost, fear (i.e. revere) and obey God.</p>
                  <br></br>
                  <Quote scripture="Besides being wise, the Preacher also taught the people knowledge, weighing and studying and arranging many proverbs with great care. The Preacher sought to find words of delight, and uprightly he wrote words of truth. The words of the wise are like goads, and like nails firmly fixed are the collected sayings; they are given by one Shepherd. My son, beware of anything beyond these. Of making many books there is no end, and much study is a weariness of the flesh. The end of the matter; all has been heard. Fear God and keep his commandments, for this is the whole duty of man." reference="Ecclesiates 12:9-13" color="var(--teal)"/>
                </div>

                <div className="attSection" id="whoAmI">
                <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("omniscient")}}>Only God is omniscient.</h1></section>
                  <p className="is-size-6 leading-normal padded">The more I learn, the more I realize what I don’t know.  I honor God by realizing He has infinitely more knowledge than I have or will ever obtain (thru internet, education, experience, etc.).  This makes it logical for me to depend upon Him and His word.</p>
                  <p className="is-size-6 leading-normal padded">"God is omniscient. He knows everything: everything possible, everything actual; all events and all creatures, of the past, the present, and the future. He is perfectly acquainted with every detail in the life of every being in heaven, in earth, and in hell……. God foreknows what will be because He has decreed what shall be.” - A.W. Pink</p>
                  <br></br>
                  <Quote scripture="Such knowledge is too wonderful for me; it is high; I cannot attain it." reference="Psalm 139:6" color="var(--teal)"/>
                </div>

                <div className="attSection" id="biblicalChristianity">
                  <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("omniscient")}}>Jesus is also omniscient.</h1></section>
                  <p className="is-size-6 leading-normal padded">Jesus, as God, shares all of God’s attributes.  Jesus humbly set aside certain knowledge while He became fully man.  The cross was not plan B to fix what Adam and Eve broke, but the plan God understood to be necessary from the beginning of creation.</p>
                  <Quote scripture="Jesus said to her (the Samaritan woman), 'Go, call your husband, and come here.' The woman answered him, 'I have no husband.' Jesus said to her, 'You are right in saying, 'I have no husband'; for you have had five husbands, and the one you now have is not your husband. What you have said is true.' The woman said to him, 'Sir, I perceive that you are a prophet.’" reference="John 4:16-19" color="var(--teal)"/>
                </div>

                <div className="attSection" id="soWhat">
                <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("omniscient")}}>So what do I do now?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Pray - in full confidence that I will not only be heard, but fully understood, and with a response that considers all the options and other factors of which I am currently clueless.  Let my confession become more self-admittance and begin my true learning with God.  <br></br>Ask: How do I pray if God truly knows all?</p>
                  <Quote scripture="Before they call I will answer; while they are yet speaking I will hear." reference="Isaiah 65:24" color="var(--teal)"/>
                </div>

                  <div className="attSection" id="prayer">
                  <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("omniscient")}}>Prayer</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">God, you know me - more than I know myself.  I can only know what you have revealed to me through the eyes and ears you have given me, and now, through your Spirit inside me.  Help me to depend upon You and your Word more than my own limited understanding.</p>

                  <Quote scripture="But the LORD said to Samuel, 'Do not look on his appearance or on the height of his stature, because I have rejected him. For the LORD sees not as man sees: man looks on the outward appearance, but the LORD looks on the heart.'" reference="1 Samuel 16:7" color="var(--teal)"/>
                </div>

                <div className="attSection has-background-light" id="scienceAndHealth">
                <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("omniscient")}}>The human brain is a finite image of God’s omniscience.</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">“The human brain may be able to hold as much information in its memory as is contained on the entire Internet, new research suggests. Researchers discovered that, unlike a classical computer that codes information as 0s and 1s, a brain cell uses 26 different ways to code its ‘bits.’ They calculated that the brain could store 1 petabyte (or a quadrillion bytes) of information. What's more, the human brain can store this mind-boggling amount of information while sipping just enough power to run a dim light bulb.  By contrast, a computer with the same memory and processing power would require 1 gigawatt of power, or basically a whole nuclear power station…” - livescience’.com 2/18/16 article</p>
                </div>

                <div className="attSection" id="history">
                <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("omniscient")}}>The right hand often does not know the left. </h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Getting good information has always been difficult - sharing it for good use within a business (or a family) has been even more onerous.  The ideal state is having an omni-channel experience.</p>
                  <p className="is-size-6 leading-normal padded">Many companies (think Bank of America and Disney) have been working hard toward making the the same data set available to multiple people (sales, manufacturing, customer service, shipping, customer…) from multiple platforms (I-phone, tablet, in-person, lap-top, call center…). Communication channels and their supporting resources are designed and orchestrated to cooperate.  New technology is good, but can end up complicating this goal.  However, a successful result mimics a small part of God's omniscience. </p>
                  <p className="is-size-6 leading-normal padded">"So everyone who acknowledges me before men, I also will acknowledge before my Father who is in heaven, but whoever denies me before men, I also will deny before my Father who is in heaven." - Matthew 10:32-33</p>
                </div>

                <div className="attSection" id="liturgy" >
                <section>
                    <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("omniscient")}}>"His Eye Is On The Sparrow" - C.D. Martin</h1>
                    </section>
                    <p className="is-size-6 leading-normal padded">"Whenever I am tempted, whenever clouds arise,<br></br>
When songs give place to sighing, when hope within me dies,<br></br>
I draw the closer to Him, from care He sets me free;<br></br>
His eye is on the sparrow, and I know He watches me;<br></br>
His eye is on the sparrow, and I know He watches me."  (last verse)</p>
                </div>

            </main>
            </div>
          </body>
        )
    }

}

export default withRouter(Omniscient);