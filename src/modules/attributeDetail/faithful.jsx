import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom"
import '../../styles/attribute.css'
import Grid from '../../components/grid'
import Testimonial from '../../components/testimonial'
import Hero from '../../components/hero'
import AttributeSidebar from "../../components/attSidebar";

class Faithful extends Component {

    componentDidMount() {
      window.scrollTo(0, 0);
    }

    render() {
        return(
            <body className="attPage">
            <Hero title="Faithful" subtitle="Able to be trusted" img="girl.png" />
            <div className="container is-fullhd has-text-left relativeMaybe" id="attributeContainer">
              <aside>
                <section id="sidebar">
                  <AttributeSidebar />
                </section>
              </aside>

              <main>
                <div className="attSection" id="definition">
                  <section>
                  <h1 className="title has-text-primary tracking-wide padded">Faithful means able to be trusted. 
                  </h1></section>
                  <p className="is-size-6 leading-normal padded">We want to be considered trustworthy and are distressed when we find others who we cannot trust.  We desire to be faithful to our favorite sports team, certain brand or personal habit, or to our spouse. 78-90% of Americans (depending on the poll) believe it is morally wrong to commit an adulterous act. But we also fear that our (and other’s) faithfulness may prove to be faulty - from weakness, fatigue, doubt or a change of will.</p>
                  <p className="is-size-6 leading-normal padded">Disappointment, however, seems to be a constant companion to my effort to be faithful and in my attempts to fully trust others.  I work hard to prove myself a reliable person, but it seems a single failure can ruin a hundred successes.  It almost seems like you can’t trust anyone these days!</p>
                </div>

                <div className="attSection" id="emotion">
                <section>
                  <h1 className="title has-text-primary tracking-wide padded">How do I avoid being disappointed by others?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">All people will eventually disappoint me, including God.  The key question then is who I will trust.  God is one I can trust even if I am disappointed with Him. </p>
                  <p className="is-size-6 leading-normal padded">After opening with praise and belief in God’s faithful covenant, the psalmist below reveals deep disappointment in God’s apparent lack of faithfulness. His trust in God actually causes his disappointment when circumstances make it seem that a promise may not be kept.  God’s enemies were declaring that no Messiah would ever come (i.e. footsteps), yet the psalmist ends with ‘so be it, I will bless God forever.’  He decided to trust God for what God had not done yet, but had promised to do in the future. And the footsteps of Messiah eventually did come!</p>
                  <br></br>
                  <Testimonial quote="But now you have cast off and rejected; you are full of wrath against your anointed. You have renounced the covenant with your servant; you have defiled his crown in the dust…..Lord, where is your steadfast love of old, which by your faithfulness you swore to David? Remember, O Lord, how your servants are mocked, and how I bear in my heart the insults of all the many nations, with which your enemies mock, O LORD, with which they mock the footsteps of your anointed. Blessed be the LORD forever! Amen and Amen." reference="Psalm 89:38-39, 49-52" color="var(--teal)"/>
                </div>

                <div className="attSection" id="fear">
                <section>
                  <h1 className="title has-text-primary tracking-wide padded">So when should I ever trust another person?</h1>
                </section>
                  <p className="is-size-6 leading-normal padded">I should not fully trust another who has proven themselves to be unreliable. Trust can be built or rebuilt over time, but I must realize that trusting even the most trust-worthy person to do what only God can do, or provide what only God can give, is a trap.  My fear of being disappointed by others will only be fed when I expect more from them than I do from God.</p>
                  <p className="is-size-6 leading-normal padded">For example, I want to trust my driver to navigate us through icy mountain roads safely.  He may try his best, but he is not in control of all the circumstances that may happen. It is impossible for him to be fully trustworthy, so fully trusting him could very well end in disappointment.</p>
                  <br></br>
                  <Testimonial quote="Trusting in a treacherous man (i.e. unfaithful, or one who cannot be trusted) in time of trouble is like a bad tooth or a foot that slips." reference="Prov 25:19" color="var(--teal)"
                  quote="It is better to take refuge in the LORD than to trust in man." reference="Psalm 118:8" color="var(--teal)"/>
                </div>

                <div className="attSection" id="struggle">
                <section>
                  <h1 className="title has-text-primary tracking-wide padded">Why am I sometimes unreliable for others?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Unforeseen circumstances will sometimes cause us to fail.  But a pattern of unreliability can often be traced back to the time of commitment.  Do I earnestly promise more than I can reasonably do?  I might be tempted  to project a better image of myself than reality warrants.  Do I sometimes just not do what I could have easily done?  I may not have really meant or cared about the commitment.  Both of these point to the need for our commitments to be both faithful and true.</p>
                  <br></br>
                  <Testimonial quote="Let what you say be simply ‘Yes’ or ‘No’; anything more than this comes from evil." reference="Matthew 5:37" color="var(--teal)"/>
                </div>

                <div className="attSection" id="whoAmI">
                <section>
                  <h1 className="title has-text-primary tracking-wide padded">Only God is perfectly faithful.</h1></section>
                  <p className="is-size-6 leading-normal padded">To believe that my loyalty to God is what makes me secure is faulty works-based theology.  God alone has the perfect track record.  Whenever I regard God as unfaithful, I am likely confusing my wants with His promises. His covenantal promises to Abraham/Israel are already being fulfilled in Jesus and are mine to enjoy.</p>
                  <br></br>
                  <Testimonial quote="Know therefore that the LORD your God is God, the faithful God who keeps covenant and steadfast love with those who love him and keep his commandments, to a thousand generations," reference="Deuteronomy 7:9" color="var(--teal)"quote="But the Lord is faithful. He will establish you and guard you against the evil one." reference="2 Thessalonians 3:3" color="var(--teal)"/>
                </div>

                <div className="attSection" id="biblicalChristianity">
                  <section>
                  <h1 className="title has-text-info tracking-wide padded">Jesus was faithful to His Father.</h1></section>
                  <p className="is-size-6 leading-normal padded">In obedient faithfulness to His Father, Jesus took on human form and went to the cross as the sacrificial offering which allows for imperfect people to be reconciled to God.  After He completed this work, He joined God in heaven to continue His faithfulness as an advocate, interceding for those who believe in Him.</p>
                  <Testimonial quote="Who is to condemn? Christ Jesus is the one who died—more than that, who was raised—who is at the right hand of God, who indeed is interceding for us." reference="Romans 8:34" color="var(--teal)"/>
                </div>

                <div className="attSection" id="soWhat">
                <section>
                  <h1 className="title has-text-primary tracking-wide padded">So what do I do now?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Discover what God has actually promised through study of the Bible.  Then test His reliability and find Him faithful.  Along the way, discover that our ability to be reliably faithful to His commands falls short. This is yet another confirmation that what He has already said is true and that He can be trusted. Ask: How have I discovered or tested God’s faithfulness?</p>
                  <Testimonial quote="The works of his hands are faithful and just; all his precepts are trustworthy;" reference="Psalm 111:7" color="var(--teal)"/>
                </div>

                  <div className="attSection" id="prayer">
                  <section>
                  <h1 className="title has-text-primary tracking-wide padded">Prayer</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Faithful Lord, let me see You more clearly than what is made visible by my physical senses. I know my own faithfulness is weak, so I pray that you will help me to be faithful and to trust fully in your faithfulness.  Even now I thank you for what you will do in the future.</p>
                  <Testimonial quote="Let us hold fast the confession of our hope without wavering, for he who promised is faithful." reference="Hebrews 10:23" color="var(--teal)"/>
                </div>

                <div className="attSection has-background-light" id="scienceAndHealth">
                <section>
                  <h1 className="title has-text-info tracking-wide padded">God faithfully reveals Himself to us through every part of His creation. </h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">We can either seek the One who is the Cause and Faithful Sustainer of all we discover - or we can simply take pride in our own self-sufficiency and power.  The latter appears to be like a baby who just discovered her hands - it can prove to be quite useful, but it is not of ultimate importance.</p>
                  <p className="is-size-6 leading-normal padded">“In our time, deistic views (i.e. God started it all and now we are in charge) are influenced by the predominance of science and its technological benefits. Science, it is thought, shows us what the world is like. And the world that it shows us is one in which most things undergo causal developments under their own power. That is, our world is either a world completely without God or a deistic world, in which God mostly leaves the world to its own inner working.</p>
                  <p className="is-size-6 leading-normal padded">But such thinking is a product not of the scientific data, but of analyzing the scientific data in a deistic way. In other words, deism is built into the implicit framework that people assume and use when thinking about science. They interpret the process of causation as self-sufficient, ignoring the presence of God working all things according to his will (Eph. 1:11). They assume self-sufficiency rather than demonstrate it. By contrast, the person who genuinely believes that God is intimately involved in growing grass and making the winds blow sees scientific data as a description of the faithfulness of God. God is so faithful in the ways in which he makes grass grow and the winds blow that we can give detailed descriptions of the regularities. Scientists at their best are merely describing some of the regular ways that God comprehensively rules the world.” - Excerpt from 5/1/19 post by Vern Poythress on Westminster Theological Seminary website, The Faithfulness of God in Science</p>
                  <p className="is-size-6 leading-normal padded">“You cause the grass to grow for the livestock and plants for man to cultivate, that he may bring forth food from the earth.” - Psalm 104:14</p>
                  <p className="is-size-6 leading-normal padded">“…he makes his wind blow and the waters flow.” - Psalm 147:18b</p>
                </div>

                <div className="attSection" id="history">
                <section>
                  <h1 className="title has-text-info tracking-wide padded">The 2000-year global growth of Christianity</h1>

                  </section>
                  <p className="is-size-6 leading-normal padded">The key leader was killed on a Roman cross while his few disciples foundered in doubt and mourning.  However, after the resurrection, they were so sure it happened that it gave them the faith to risk their very lives based on its truth. The humble beginning has grown into the most global and diverse movement ever.</p>
                  <p className="is-size-6 leading-normal padded">Christianity is 29% of global population (with Islam at 24%, Hindu at 15% and "Unaffiliated/Secular" at 14%). This is down from 1900 on a percentage basis (from 34.8%), but up overall since total population has quadrupled since 1900.  Meanwhile, Christianity has become much more global over that period of time. In 1900, Europe and the Americas had the vast majority of the world’s Christians (93%). Sub-Saharan Africa, Asia and the Pacific has seen tremendous growth - in 2010, 26% of the world’s Christians lived in Europe, followed by 24.4% in Latin America and the Caribbean, 23.8% in Sub-Saharan Africa, 13.2% in Asia and the Pacific, 12.3% in North America, and 1% in the Middle East and North Africa. - Data from Wikipedia 2020</p>
                  
                </div>

                <div className="attSection" id="liturgy" >
                <section>
                    <h1 className="title has-text-info tracking-wide padded">"Steadfast" - Sandra McCracken   </h1>

                    </section>
                    <p className="is-size-6 leading-normal padded">(Note the emphasis on trusting in God's faithfulness versus trusting in my faithfulness to God.)
                    
                    "I will build my house<br></br>
                    Whether storm or drought<br></br>
                    On the rock that does not move.<br></br>
                    I will set my hope<br></br>
                    In your love, O Lord<br></br>
                    And your faithfulness will prove<br></br>
                    You are steadfast, steadfast"</p>
                </div>

            </main>
            </div>
          </body>
        )
    }

}

export default withRouter(Faithful);