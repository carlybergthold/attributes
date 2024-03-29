import React, { Component } from "react";
import { withRouter } from "react-router-dom"
import '../../styles/attribute.css'
import Hero from '../../components/hero'
import Quote from '../../components/quote'
import styleMethods from "../../methods/styleMethods";
import BaseAttributeDetail from '../../modules/attributeDetail/baseAttributeDetail';

class Providing extends Component {

    render() {
        return(
          <BaseAttributeDetail
            title="Providing"
            subtitle="To see and meet the needs of another"
            definition={
              <section>
                  <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("providing")}}>Providing means to see the needs of another and supply whatever is best.
                  </h1></section>
                  <p className="is-size-6 leading-normal padded">Whether our dependent is a child, a pet, or a plant, most of us rise to meet the needs we see.  There can be joy in fulfilling others' needs, especially when we see flourishing results.   </p>
                  <p className="is-size-6 leading-normal padded">I can receive immense pleasure in providing for another or by having my own needs met.  But when I lack what I need, let alone what I need to help others, it can be downright depressing.  What do I do if I run out of money or resources?  Will God really provide all I need?</p>
                  <br></br>
                  <Quote scripture="But if anyone does not provide for his relatives, and especially for members of his household, he has denied the faith and is worse than an unbeliever." reference="1 Timothy 5:8" color="var(--teal)"/>
              </section>
            }
            emotion={
              <section>
                 <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("providing")}}>Will poverty ever be eliminated?  Will I have enough money?</h1>
                </section>
                  <p className="is-size-6 leading-normal padded">In 1800, 81% of people worldwide were in true poverty. By 1990 it dropped to 44% and, in the last few decades, plummeted to under 10% (data from CEPR).  Rates of poverty in the wealthy US are much lower, though food insecurity could still be found in 10-15% of US households over the last decade.</p>
                  <p className="is-size-6 leading-normal padded">God has not promised anyone material wealth or economic security.  Instead, He promised that some level of poverty would remain in this world.  My generosity may be used to alleviate some of this material poverty, but God encourages me to recognize my own and others’ poverty of spirit above all else.  The provisions of His kingdom are made available to all those who recognize the need.</p>
                  <br></br>
                  <Quote scripture="For you always have the poor with you, but you will not always have me (Jesus speaking)." reference="Matthew 26:11" color="var(--teal)"/>
                  <br></br>
                  <Quote scripture="Blessed are the poor in spirit, for theirs is the kingdom of heaven." reference="Matthew 5:3" color="var(--teal)"/>               
              </section>
            }
            fear={
              <section>
                 <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("providing")}}>Is it OK to be proud of what I have done or provided to others?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Satisfaction with what I have done is a gift from God.  St. Augustine defined pride, however, as "the love of one's own excellence” - significantly beyond a feeling of satisfaction.  Pride will exaggerate my accomplishments and discount the contributions of others.  It can also be the single biggest barrier to seeing God clearly, especially as the true Provider He is.</p>
                  <p className="is-size-6 leading-normal padded">When I see God as who provided my talent, intellect, bank account, friends and life itself, I elevate Him above myself.   This is called praise, and it not only properly values God, it also lays a foundation to appropriately value myself and all others.</p>
                  <br></br>
                  <Quote scripture="You cause the grass to grow for the livestock and plants for man to cultivate, that he may bring forth food from the earth and wine to gladden the heart of man, oil to make his face shine and bread to strengthen man’s heart.  These all look to you,
to give them their food in due season...When you give it to them, they gather it up; when you open your hand, they are filled with good things. When you hide your face, they are dismayed; when you take away their breath, they die and return to their dust.  When you send forth your Spirit, they are created, and you renew the face of the ground. May the glory of the LORD endure forever; may the LORD rejoice in his works, who looks on the earth and it trembles, who touches the mountains and they smoke! I will sing to the LORD as long as I live; I will sing praise to my God while I have being." reference="Psalm 104:14-15, 27-33"/>               
              </section>
            }
            struggle={
              <section>
                 <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("providing")}}>Why does God seem to be ignoring my current need?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Faith in God inspires me to work hard to meet my own needs, since God gives me my ability to reason and work.  Faith in God also lets me trust that He will never withhold what is best for me. So my burning unmet need may simply be reminding me of what is truly important and what is not. But even if my unmet need is vitally important and fully aligned with God’s will, my faith can also trust Him with the right timing.</p>
                  <br></br>
                  <Quote scripture="Or which one of you, if his son asks him for bread, will give him a stone? Or if he asks for a fish, will give him a serpent? If you then, who are evil, know how to give good gifts to your children, how much more will your Father who is in heaven give good things to those who ask him!" reference="Matthew 7:9-11" />               
              </section>
            }
            whoAmI={
              <section>
                 <section>
                  <Hero title="Only God is an actual provider."></Hero>
                </section>
                  <p className="is-size-6 leading-normal padded">I am simply a steward of what God has already provided.  If I believe that everything I have came from me and my abilities, and never consider asking the Provider for what I currently need, I have become, in my own mind, God.</p>
                  <br></br>
                  <Quote scripture="Pray then like this: ‘Our Father in heaven, hallowed be your name. Your kingdom come, your will be done, on earth as it is in heaven. Give us this day our daily bread,…’ " reference="Matthew 6:9-11" />               
              </section>
            }
            biblicalChristianity={
              <section>
                   <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("providing")}}>Jesus provided everything essential to us.</h1></section>
                  <p className="is-size-6 leading-normal padded">While on earth, Jesus provided bread, water, wine, healing, sight, understanding, friendship, and much more.  But most importantly He provided His own blood on the cross to reconcile man to God, completely and forever fulfilling our spiritual needs.</p>
                  <Quote scripture="Since, therefore, we have now been justified by his (Jesus’) blood, much more shall we be saved by him from the wrath of God. For if while we were enemies we were reconciled to God by the death of his Son, much more, now that we are reconciled, shall we be saved by his life." reference="Romans 5:9-10" color="var(--teal)"/>               
              </section>
            }
            soWhat={
              <section>
                 <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("providing")}}>So what do I do now?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Accept my role as God's steward versus an owner.  Recognize and be thankful for any God-given ability to work and earn a living.  <br></br>Ask: God often works through people to provide my needs.  Ask who can I thank for either providing for my needs or for my ability to earn a living?</p>
                  <Quote scripture="For although they knew God, they did not honor him as God or give thanks to him, but they became futile in their thinking, and their foolish hearts were darkened." reference="Romans 1:21" color="var(--teal)"/> <br></br>
                  <Quote scripture="And Isaac sowed in that land and reaped in the same year a hundredfold. The LORD blessed him." reference="Genesis 26:12" color="var(--teal)"/>               
              </section>
            }
            prayer={
              <section>
                   <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("providing")}}>Prayer</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">God, you created me and even now provide my next breath.  I am fully dependent on you.  Help me to remember this and live in constant gratitude and praise of your Name.</p>
                  <Quote scripture="Praise the LORD! Oh give thanks to the LORD, for he is good, for his steadfast love endures forever!" reference="Psalm 106:1" color="var(--teal)"/>               
              </section>
            }
            scienceAndHealth={
              <section>
                 <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("providing")}}>How do I STOP and recognize what God provides?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">During His ministry Jesus met some of the basic needs for the people around Him to live a flourishing life, such as water, food, physical safety. As Creator of life itself, He knows these physical needs.  But He also knows and supplies other needs which may not even be on our radar - such as patience, relationship, humility, truth, joy, peace, wisdom…. or, in other words, Himself. At times, we simply need to STOP.</p>
                  <p className="is-size-6 leading-normal padded">A recent article from the Guardian called “So you're lost in the wilderness – these tips could save your life"”, used the acronym STOP.  You can apply it in the woods or in the woods of everyday life whenever you have a need:</p>
                  <p className="is-size-6 leading-normal padded">   “S is to simply stop. Frantically moving faster will only get you more lost. Sit, and breathe from your belly… Drink and eat….
   T stands for think. Ask yourself some basic questions. Which direction were you going? …..How far have you come since? …..Where was the last time you knew where you were?
   O is for observe. Look around you ….How do you feel? ….Is there natural shelter nearby?
   P means plan. Don’t move until you have a plan. If and when you do move, do so methodically and observantly. ….And finally – can you make a call? Can you text? If you do get through, can you tell anyone where you are?” <br></br>
   So when caught in the woods of life, we can STOP:<br></br>
   S - Stop: Sit and breathe in the gospel and the attributes of God.  <br></br>
   T - Think and ask basic questions: Who can I always depend upon?  How has God already provided for me?<br></br>
   O - Observe: Look at what God has done in the lives of His poeple.  Ask yourself if you are trying to respond to this problem independently of God.<br></br>
   P - Plan: Use God's Word as a guide.  And finally, make a call.  The Holy Spirit is waiting to help you!</p>               
              </section>
            }
            attHistory={
              <section>
                 <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("providing")}}>Does God help those who help themselves?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">He sure does, and God loves it when we seek Him with all we have.  But He also helps those who can’t help themselves and are not seeking Him.  He even helps those who are currently working against themselves!  Without God’s initiative, no one would ever be reconciled to God.  So the concept that God only helps those who seek Him or who take the initiative is not fully aligned with Biblical truth and is not derived from scripture.</p>
                  <p className="is-size-6 leading-normal padded">The idea that the gods wanted man to initiate action before they would begin to help was present in the Greek tragedies of 400 B.C.  But it was the English political theorist Algernon Sidney who originated the now familiar wording, "God helps those who help themselves.”  The phrase stresses the importance of both the free will of man and the sovereignty of God, but slights the Biblical concept of God's pure graciousness.</p>
                  <p className="is-size-6 leading-normal padded">Sidney was beheaded in 1683 in England because he wrote in opposition to absolute monarchy in ‘Discourses Concerning Government.’   He argued against the divine right of kings, which, with sinful sovereigns, often resulted in tyranny and persecution of religion or thoughts which differed from the king’s (hence his beheading!).  Sidney argued for limited government, established by the people, whose primary purpose is to render legal justice and provide safety to its citizens.  Along with John Locke’s ‘Two Treatises on Government’, Sidney's "Discourses" is recognized as vital inspiration to the founding of the United States of America.</p>
                  <br></br>
                  <Quote scripture="But God shows his love for us in that while we were still sinners, Christ died for us… For if while we were enemies we were reconciled to God by the death of his Son, much more, now that we are reconciled, shall we be saved by his life." reference="Romans 5:8,10" />               
              </section>
            }
            liturgy={
              <section>
                 <section>
                    <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("providing")}}>"Come, Thou Fount of Every Blessing" - Robert Robinson</h1>
                    </section>
                    <p className="is-size-6 leading-normal padded">"Come, Thou Fount of every blessing<br></br>
Tune my heart to sing Thy grace<br></br>
Streams of mercy, never ceasing<br></br>
Call for songs of loudest praise<br></br>
Teach me some melodious sonnet<br></br>
Sung by flaming tongues above<br></br>
Praise the mount, I'm fixed upon it<br></br>
Mount of Thy redeeming love." - First verse</p>               
              </section>
            }
          />
        )
    }

}

export default withRouter(Providing);