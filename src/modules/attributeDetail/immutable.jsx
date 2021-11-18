import React, { Component } from "react";
import { withRouter } from "react-router-dom"
import '../../styles/attribute.css'
import Quote from '../../components/quote'
import styleMethods from "../../methods/styleMethods";
import BaseAttributeDetail from '../../modules/attributeDetail/baseAttributeDetail';

class Immutable extends Component {

    render() {
        return(
          <BaseAttributeDetail
            title="Immutable"
            subtitle="To be fully consistent or unchanging"
            definition={
              <section>
                  <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("immutable")}}>Immutable means to be fully consistent or unchanging.
                  </h1></section>
                  <p className="is-size-6 leading-normal padded">Even though most of us enjoy variety, we hold our lives together with habits and routines.  By adulthood, we have experimented with and optimized these routines and are either content with them or find them very difficult to change. This foundation may include our beliefs, where we live, what we drink in the morning (for 83% of American adults it is coffee - 3 cups daily on average), who we hang with, the team we root for and much more.  It is what we count on to keep life sane.</p>
                  <p className="is-size-6 leading-normal padded">When I already have what I want, I want to keep it.  My health, my home, my friends and job.  When what matters to me is under any threat of loss, I will work hard to keep it, whether through buying insurance, working long hours, or taking medications.</p>
              </section>
            }
            emotion={
              <section>
                  <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("immutable")}}>Immutable means to be fully consistent or unchanging.
                  </h1></section>
                  <p className="is-size-6 leading-normal padded">Even though most of us enjoy variety, we hold our lives together with habits and routines.  By adulthood, we have experimented with and optimized these routines and are either content with them or find them very difficult to change. This foundation may include our beliefs, where we live, what we drink in the morning (for 83% of American adults it is coffee - 3 cups daily on average), who we hang with, the team we root for and much more.  It is what we count on to keep life sane.</p>
                  <p className="is-size-6 leading-normal padded">When I already have what I want, I want to keep it.  My health, my home, my friends and job.  When what matters to me is under any threat of loss, I will work hard to keep it, whether through buying insurance, working long hours, or taking medications.</p>                
              </section>
            }
            fear={
              <section>
                <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("immutable")}}>Why do I fear loss more than I appreciate gain?</h1>
                </section>
                  <p className="is-size-6 leading-normal padded">Nobel prize research in economics showed the psychological impact of a loss is two and a half times as powerful as that for a gain.  About half of all people fear losing their job.  90% of people worry their phone may run out of battery charge.  Fear of loss grows with the more we have.  And when we have so much already, gaining more is not as important as losing what we have.  But change, especially loss, is a constant part of our human existence.</p>
                  <br></br>

                  <Quote scripture=" 'For the mountains may depart and the hills be removed, but my steadfast love shall not depart from you, and my covenant of peace shall not be removed,' says the LORD, who has compassion on you." reference="Isaiah 54:10" color="var(--teal)"/>                
              </section>
            }
            struggle={
              <section>
                <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("immutable")}}>How can I keep what I already have?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">We do expend great effort and cost simply to maintain what we have.  55% of car owners who purchased an extended warranty hadn’t used it for repairs during the lifetime of the policy, even though the median price paid for the coverage was over $1,200. And, on average, those who did use it spent hundreds more for the coverage than they saved in repair costs (2013 Consumer Reports research).  Sometimes letting go of a good now will be better for me in the long run.  I can miss what is best by clinging to what is average.   God offers me what is best and most lasting - Himself. </p>
                  <br></br>
                  <Quote scripture="And he (Jesus) said to all, ‘If anyone would come after me, let him deny himself and take up his cross daily and follow me. 24 For whoever would save his life will lose it, but whoever loses his life for my sake will save it. 25 For what does it profit a man if he gains the whole world and loses or forfeits himself?’" reference="Luke 9:23-25" color="var(--teal)"/>                
              </section>
            }
            whoAmI={
              <section>
                <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("immutable")}}>Only God is immutable for eternity.</h1></section>
                  <p className="is-size-6 leading-normal padded">To understand that I am not immutable is easy - I change constantly, physically, emotionally, intellectually and more.  It is more difficult to comprehend One Who has not, does not, and will never change. For anyone who depends upon God for salvation and guidance, immutability is vital and may be a bit under-appreciated.  What if He kept changing His laws and truths?</p>
                  <br></br>

                  <Quote scripture="For I the LORD do not change;" reference="Malachi 3:6a" color="var(--teal)"/>                
              </section>
            }
            biblicalChristianity={
              <section>
                  <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("immutable")}}>Jesus was, is, and will always be God.</h1></section>
                  <p className="is-size-6 leading-normal padded">As God, Jesus has the same attributes.  The God of the Old and New Testaments is not only the same, but has the same message - live by faith in what an immutable God has promised.</p>

                  <Quote scripture="Do not think that I have come to abolish the Law or the Prophets; I have not come to abolish them but to fulfill them." reference="Matthew 5:17" color="var(--teal)"/>                
              </section>
            }
            soWhat={
              <section>
                <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("immutable")}}>So what do I do now?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Be thankful for God not changing even as my own life is in a mess of change. We depend upon gravity and live confidently based upon its practically unchanging characteristics.  I can depend even more on the absolute consistency of God.  <br></br>Ask: What am I depending on to last more than a decade? Why?</p>
                  <Quote scripture="Every good gift and every perfect gift is from above, coming down from the Father of lights with whom there is no variation or shadow due to change." reference="James 1:17" color="var(--teal)"/>                
              </section>
            }
            prayer={
              <section>
                  <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("immutable")}}>Prayer</h1>
                  </section>

                  <p className="is-size-6 leading-normal padded">God, thank you for never changing - for being an anchor in the windy and stormy sea that is my life.  Help me to trust you and your Word even as it seems I shouldn’t.  Help me to build my life on what will last.</p>
                  <Quote scripture="But he is unchangeable, and who can turn him back?  What he desires, that he does." reference="Job 23:13" color="var(--teal)"/>                
              </section>
            }
            scienceAndHealth={
              <section>
                <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("immutable")}}>We know of nothing in creation which is truly immutable.</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Even the sun coming up in the morning changes - and not just from Daylight Savings time!  Both the earth's and the sun's rotations are slowing over time.  The sun will eventually go out and the earth will stop spinning, but it is not expected soon.  The actual length of earth days are being extended about 2.3 milliseconds (added to the nominal 24 hour day) every 100 years.</p>                
              </section>
            }
            history={
              <section>
                <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("immutable")}}>History proves our mutability in that we are constantly changing.</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Fashions and trends are a way of life - if something remains relevant for a decade, it’s rare.  But the historical account of Abraham and the birth of the nation Israel has been relevant for 3500 years.</p>
                  <p className="is-size-6 leading-normal padded">Abraham lived  about 4000 years ago and is considered the father of Judaism, Christianity and Islam - which together includes over half the world population as followers today.  We learn about Abraham in the Christian Old Testament and the Jewish Tanakh, which are very similar.  Islam refers to Ibrahim 69 times in the Quran, with a number of those accounts tracking the Christian record. The Christian New Testament (written around 2000 years ago) describes Jesus as the expected Messiah, fulfilling the covenant which God made with Abraham 2000 years previously. Islam views Jesus as Messiah as well, though not the son of God.  Thus Abraham and Jesus remain key historical and theological figures, even after multiple millenia.</p>                
              </section>
            }
            liturgy={
              <section>
                <section>
                    <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("immutable")}}>"Rock of Ages" - Augustus  Toplady</h1>
                    </section>
                    <p className="is-size-6 leading-normal padded">"While I draw this fleeting breath,<br></br>
                     When my eyes shall close in death,<br></br>
                     When I rise to worlds unknown,<br></br>
                     And behold Thee on Thy throne,<br></br>
                     Rock of Ages, cleft for me,<br></br>
                     Let me hide myself in Thee." - Last verse</p>                
              </section>
            }
          />
        )
    }

}

export default withRouter(Immutable);