import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom"
import '../../styles/attribute.css'
import Grid from '../../components/grid'
import Testimonial from '../../components/testimonial'
import Hero from '../../components/hero'
import AttributeSidebar from "../../components/attSidebar";

class Humble extends Component {

    componentDidMount() {
      window.scrollTo(0, 0);
    }

    render() {
        return(
            <body className="attPage">
            <Hero title="Humble" subtitle="To rightly consider yourself and elevate others" img="girl.png" />
            <div className="container is-fullhd has-text-left relativeMaybe" id="humbleContainer">
              <aside>
                <section id="sidebar">
                  <AttributeSidebar />
                </section>
              </aside>

              <main>
                <div className="attSection" id="definition">
                  <section>
                  <h1 className="title has-text-info tracking-wide padded">Humble means rightly considering yourself and elevating others.
                  </h1></section>
                  <p className="is-size-6 leading-normal padded">Being humble does not mean to demean yourself or only think of others.  We work hard to accurately assess ourselves - to get a true picture of who we are.</p>
                  <p className="is-size-6 leading-normal padded">Being angry or too busy for others can be two key warning signs that I am missing humility. And, though accurately assessing who I am is at the heart of humility, letting others’ opinions shape me more than God destroys my humility.</p>
                </div>

                <div className="attSection" id="emotion">
                <section>
                  <h1 className="title has-text-info tracking-wide padded">Why do others make me so angry?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Anger often demands that we quickly punish or push down those who are making our life more difficult.  We too easily dismiss evidence that our anger can spring from our own stress, hunger, nervousness, sadness, envy, fatigue, illness, or boredom.  Humility honestly checks what is going on inside us and also connects with God on how best to elevate the other.</p>
                  <br></br>
                  <Testimonial quote="Trust in the LORD, and do good; dwell in the land and befriend faithfulness.  Delight yourself in the LORD, and he will give you the desires of your heart.  Commit your way to the LORD; trust in him, and he will act.  He will bring forth your righteousness as the light, and your justice as the noonday.  Be still before the LORD and wait patiently for him; fret not yourself over the one who prospers in his way, over the man who carries out evil devices!  Refrain from anger, and forsake wrath! Fret not yourself; it tends only to evil.  For the evildoers shall be cut off, but those who wait for the LORD shall inherit the land.  In just a little while, the wicked will be no more; though you look carefully at his place, he will not be there.  But the meek (i.e. humble) shall inherit the land and delight themselves in abundant peace." reference="Psalm 37:3-11" color="var(--teal)"/>
                </div>

                <div className="attSection" id="fear">
                <section>
                  <h1 className="title has-text-info tracking-wide padded">What makes me act differently depending upon who I am around?</h1>
                </section>
                  <p className="is-size-6 leading-normal padded">When I seek to impress someone, I change when they are present.  Doing this with multiple people creates multiple versions of myself, most of which are not truly me.  Deliberating on who I really am and who God sees me as is much more important than assessing and conforming to others’ views.</p>
                  <br></br>
                  <Testimonial quote="The fear of man lays a snare, but whoever trusts in the LORD is safe." reference="Prov 29:25" color="var(--teal)"/>
                </div>

                <div className="attSection" id="struggle">
                <section>
                  <h1 className="title has-text-info tracking-wide padded">I am so busy right now!</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">I am like most people if I have a calendar and keep it full.  Much is required and much seems required.  How can I love anyone else while I am doing so much good for myself?  The best start to elevating others is spending time with one other - Jesus. </p>
                  <br></br>
                  <Testimonial quote="Now as they went on their way, Jesus entered a village. And a woman named Martha welcomed him into her house. And she had a sister called Mary, who sat at the Lord's feet and listened to his teaching. But Martha was distracted with much serving. And she went up to him and said, “Lord, do you not care that my sister has left me to serve alone? Tell her then to help me.” But the Lord answered her, “Martha, Martha, you are anxious and troubled about many things, but one thing is necessary. Mary has chosen the good portion, which will not be taken away from her." reference="Luke 10:38-42" color="var(--teal)"/>
                </div>

                <div className="attSection" id="whoAmI">
                <section>
                  <h1 className="title has-text-info tracking-wide padded">Only God fully knows Himself and elevates others.</h1></section>
                  <p className="is-size-6 leading-normal padded">God elevates others through sanctification and salvation. Does God’s humility cause Him to see me as above Himself?  Of course not.  He accurately assesses Himself as perfect, and knows I am imperfect; yet He still chooses to serve me and elevate me in many ways.</p>
                  <br></br>
                  <Testimonial quote="When he had washed their feet and put on his outer garments and resumed his place, he said to them, “Do you understand what I have done to you? You call me Teacher and Lord, and you are right, for so I am. If I then, your Lord and Teacher, have washed your feet, you also ought to wash one another’s feet. For I have given you an example, that you also should do just as I have done to you." reference="John 13:12-15" color="var(--teal)"/>
                </div>

                <div className="attSection" id="biblicalChristianity">
                  <section>
                  <h1 className="title has-text-info tracking-wide padded">Jesus was humble.</h1></section>
                  <p className="is-size-6 leading-normal padded">Jesus lived a humble example for us to follow, yes.  But God’s humble step to become human in order to reconcile sinful man to Himself is so much greater.</p>
                  <Testimonial quote="Humility is first, second and third in Christianity." reference="Augustine" color="var(--teal)"/>
                </div>

                <div className="attSection" id="soWhat">
                <section>
                  <h1 className="title has-text-info tracking-wide padded">So what do I do now?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Trust that what God says is right and true - then humbly build life on this foundation, one day at a time.  Part of this construction work is realizing who I am in Christ.  Ask: If a Christian: Do I know and rest in who I am in Christ?  If not a Christian: Do I know who I am in relation to Jesus according to the Bible?</p>
                  <Testimonial quote="He has told you, O man, what is good; and what does the LORD require of you but to do justice, and to love kindness, and to walk humbly with your God?" reference="Micah 6:8" color="var(--teal)"/>
                </div>

                  <div className="attSection" id="prayer">
                  <section>
                  <h1 className="title has-text-info tracking-wide padded">Prayer</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Mighty God, thank you for humbly considering what is best for me, and fixing my own sins by sending your own Son to a lowly cross.  Help me to humbly assess my own situation and lift you and others up in my thoughts, words and actions.</p>
                  <Testimonial quote="Do nothing from selfish ambition or conceit, but in humility count others more significant than yourselves. Let each of you look not only to his own interests, but also to the interests of others. Have this mind among yourselves, which is yours in Christ Jesus, who, though he was in the form of God, did not count equality with God a thing to be grasped, but emptied himself, by taking the form of a servant, being born in the likeness of men. And being found in human form, he humbled himself by becoming obedient to the point of death, even death on a cross." reference="Phil 2:3-8" color="var(--teal)"/>
                </div>

                <div className="attSection has-background-light" id="scienceAndHealth">
                <section>
                  <h1 className="title has-text-info tracking-wide padded">Humility is foundational to so much good in this life (as well as the next!)</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">“Recent studies show that humility is connected with many forms of prosocial behavior. While some misunderstand humility as low self-esteem or self-denigration, a proper conception of this virtue has both self-regarding and other-regarding components. The humble person keeps her accomplishments, gifts, and talents in a proper perspective. She has self-knowledge, and is aware of her limitations as an individual and as a human being.</p>
                  <p className="is-size-6 leading-normal padded">But humble individuals are also oriented towards others, they value the welfare of other people and have the ability to ‘forget themselves’ as well, when appropriate. Interestingly, the empirical research on humility shows that this trait has great value. Humility has been linked with better academic performance, job performance, and excellence in leadership. Humble people have better social relationships, avoid deception in their social interactions, and they tend to be forgiving, grateful, and cooperative. A recent set of studies also shows that humility is a consistent predictor of generosity…. with both their time and their money.” - Psychology Today, 6/27/12 article by Michael W. Austin Ph.D.</p>
                </div>

                <div className="attSection" id="history">
                <section>
                  <h1 className="title has-text-info tracking-wide padded">Abraham Lincoln, often considered one of the greatest presidents, was also one of the most humble.</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">“When Lincoln ran for President his entire national political experience consisted of a single term in Congress that had come to an end nearly a dozen years earlier and two failed Senate races. He had absolutely no administrative experience and only one year of formal schooling. Newspapers described him as 'a third-rate Western lawyer' and a 'fourth-rate lecturer.' Yet, his main rivals for the Republican nomination were William Henry Seward, a celebrated Senator for New York who had been a two term Governor of his state, Salmon P. Chase from Ohio who had also been a Senator and Governor of his state, and the much respected long serving former Congressman, Edward Bates.</p>
                  <p className="is-size-6 leading-normal padded">Despite this, when he beat them to the nomination and then won the election - much to everyone's amazement at the time - instead of consigning his opponents to oblivion, he appointed them all to his cabinet. He recognized their great gifts and, even though newspapers at the time cited this as evidence of his total political naïveté, Lincoln's logic for doing so was simple, ‘I had looked the party over and concluded that these were the very strongest men. Then I had no right to deprive the country of their service.’ ” - Psychology Today, 4/10/12 article by Russell Razzaque M.D.</p>

                </div>

                <div className="attSection" id="liturgy" >
                <section>
                    <h1 className="title has-text-info tracking-wide padded"> Just As I Am - Charlotte Elliott</h1>
                    </section>
                    <p className="is-size-6 leading-normal padded">"Just as I am, without one plea,
But that Thy blood was shed for me,
And that Thou bid’st me come to Thee,
O Lamb of God, I come! I come!" - 1st verse

"Just as I am, though tossed about
With many a conflict, many a doubt;
Fightings within, and fears without,
O Lamb of God, I come, I come!" - 3rd verse

"Just as I am, Thou wilt receive,
Wilt welcome, pardon, cleanse, relieve;
Because Thy promise I believe,
O Lamb of God, I come, I come." - 5th verse</p>
                </div>

            </main>
            </div>
          </body>
        )
    }

}

export default withRouter(Humble);