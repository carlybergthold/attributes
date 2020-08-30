import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom"
import '../../styles/attribute.css'
import Quote from '../../components/quote'
import Hero from '../../components/hero'
import AttributeSidebar from "../../components/attSidebar";

class Independent extends Component {

    componentDidMount() {
      window.scrollTo(0, 0);
    }

    render() {
        return(
            <body className="attPage">
            <Hero title="Independent" subtitle="To depend on no others" img="girl.png" />
            <div className="container is-fullhd has-text-left relativeMaybe" id="attributeContainer">
              <aside>
                <section id="sidebar">
                  <AttributeSidebar />
                </section>
              </aside>

              <main>
                <div className="attSection" id="definition">
                  <section>
                  <h1 className="title has-text-primary tracking-wide padded">Independent means to self-exist, dependent upon no others.
                  </h1></section>
                  <p className="is-size-6 leading-normal padded">Our drive for independence builds adults as well as nations.  We seek financial independence.  We seek physical independence from our parents and then again, much later in life, from our children.  Our desire for independence can sometimes come between those we want or need.</p>
                  <p className="is-size-6 leading-normal padded">"In 2014, for the first time in more than 130 years, adults ages 18 to 34 were slightly more likely to be living in their parents’ home than they were to be living with a spouse or partner in their own household." - From pewsocialtrends</p>
                  <p className="is-size-6 leading-normal padded">So are young adult children seeking more dependence on their parents?  No - the article highlights the root cause of this trend as a reluctance to marry.  In the 1960's the desire for independence drove them to marry early.  Now this desire is driving them to stay at home and avoid a new dependent relationship.</p>
                  <p className="is-size-6 leading-normal padded">Right now I enjoy life and am content with what I can do and what I have.  Becoming more dependent on another can be scary since I might suffer from their inadequacies. I’d really rather just do it myself - or at least be able to.  I want to be able to do what I want rather than be pressured to do what someone else wants me to do.  It’s probably much worse to have had independence and then begin to lose it than to not have tasted the independence at all.</p>
                </div>

                <div className="attSection" id="emotion">
                <section>
                  <h1 className="title has-text-primary tracking-wide padded">Is it good to be content?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Contentment feels good - and should!  It means I am fully enjoying what I already have and not just chasing after what I may never get.  It often comes when I am also feeling independent - satisfied with my own abilities, finances, or health, and not beholding to another for my needs and wants.  However, contentment without God is short-sighted because I eventually will lose all these things. Contentment with God is grounded in thanksgiving and glory given to Him, a true sacrifice because it reminds my independent spirit of my dependence on Him.</p>
                  <br></br>
                  <Quote scripture="Offer to God a sacrifice of thanksgiving, and perform your vows to the Most High, and call upon me in the day of trouble; I will deliver you, and you shall glorify me….Mark this, then, you who forget God, lest I tear you apart, and there be none to deliver!  The one who offers thanksgiving as his sacrifice glorifies me; to one who orders his way rightly I will show the salvation of God!" reference="Psalm 50:14-15, 22-23" color="var(--teal)"/>
                </div>

                <div className="attSection" id="fear">
                <section>
                  <h1 className="title has-text-primary tracking-wide padded">Shouldn’t I always work toward being more independent? </h1>
                </section>
                  <p className="is-size-6 leading-normal padded">No person (or country) is ever fully independent of others.  I might work hard to become as independent as possible, but I can see where dependence is also beneficial.  Unless I am not thinking rationally…..</p>
                  <p className="is-size-6 leading-normal padded">"Soteriophobia" is the irrational fear of becoming dependent on others. This can include a young adult who was overtaught the importance of independence and now never wants to seek help of any kind.  Many articles stress the difficult predicament this poses - one who does not seek help rarely will get help, resulting in the sufferer left to tackle problems alone, even when it is not the best course.</p>
                  <br></br>

                  <Quote scripture="The eye cannot say to the hand, 'I have no need of you,' nor again the head to the feet, 'I have no need of you.' " reference="1 Corinthians 12:21" color="var(--teal)"/>
                </div>

                <div className="attSection" id="struggle">
                <section>
                  <h1 className="title has-text-primary tracking-wide padded">What then is the right balance between independence and dependence?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">The more I depend on anyone other than God, the more they will fail me and the more I could be a burden on them.  The more I do not depend on others, the less opportunity I have to love them and have them love me back.  Love requires nothing in return, but flourishes in mutual generosity and dependence.</p>
                  <br></br>

                  <Quote scripture="Now concerning brotherly love you have no need for anyone to write to you, for you yourselves have been taught by God to love one another, for that indeed is what you are doing to all the brothers throughout Macedonia. But we urge you, brothers, to do this more and more, and to aspire to live quietly, and to mind your own affairs, and to work with your hands, as we instructed you, so that you may walk properly before outsiders and be dependent on no one." reference="1 Thessalonians 4:9-12" color="var(--teal)"/>
                </div>

                <div className="attSection" id="whoAmI">
                <section>
                  <h1 className="title has-text-primary tracking-wide padded">Only God is fully independent.</h1></section>
                  <p className="is-size-6 leading-normal padded">The term ‘aseity’ applies to God alone.  He needs no one, not man nor any part of that which He created.  It takes very little thought to realize how different I am from God.  I depend on many - from my close family and friends to the entire supply chain that provides me with a banana in the morning.</p>
                  <br></br>
                  <Quote scripture="The God who made the world and everything in it, being Lord of heaven and earth, does not live in temples made by man, nor is he served by human hands, as though he needed anything, since he himself gives to all mankind life and breath and everything." reference="Acts 17:24-25" color="var(--teal)"/>
                </div>

                <div className="attSection" id="biblicalChristianity">
                  <section>
                  <h1 className="title has-text-primary tracking-wide padded">When Jesus was on earth, was He independent from or dependent on His Father?</h1></section>
                  <p className="is-size-6 leading-normal padded">Jesus was both fully human and fully God while He was on earth.  He was fully independent and need not have relied on His Father for anything, but chose to do so in order to become the obedient sacrifice we needed. I am also both independent from God (in that I can choose to sin) and fully dependent upon Him (for my next breath).    </p>
                  <Quote scripture="Live as people who are free, not using your freedom as a cover-up for evil, but living as servants of God." reference="1 Peter 2:16" color="var(--teal)"/>
                </div>

                <div className="attSection" id="soWhat">
                <section>
                  <h1 className="title has-text-primary tracking-wide padded">So what do I do now?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Realize God needs nothing from me, yet I require much from Him.  Be truly thankful to God for giving me a free will which is and strives for healthy  independence even while acknowledging my total dependence on Him.  <br></br>Ask: What can I give to a God who has everything?</p>
                  <Quote scripture=" 'It is God which worketh in you.' He needs no one, but when faith is present He works through anyone. Two statements are in this sentence and a healthy spiritual life requires that we accept both." reference="A.W. Tosier" color="var(--teal)"/>
                  <Quote scripture="If I were hungry, I would not tell you, for the world and its fullness are mine.  Do I eat the flesh of bulls or drink the blood of goats? Offer to God a sacrifice of thanksgiving, and perform your vows to the Most High, and call upon me in the day of trouble; I will deliver you, and you shall glorify me." reference="Psalm 50:12-15" color="var(--teal)"/>
                </div>

                  <div className="attSection" id="prayer">
                  <section>
                  <h1 className="title has-text-primary tracking-wide padded">Prayer</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">God, you need nothing from me and I owe all to you.  Help me to see your own greatness and my own need.  Meet that need with You.</p>

                  <Quote scripture="Do nothing from selfish ambition or conceit, but in humility count others more significant than yourselves." reference="Phil 2:3" color="var(--teal)"/>
                </div>

                <div className="attSection has-background-light" id="scienceAndHealth">
                <section>
                  <h1 className="title has-text-primary tracking-wide padded">Is God bound by creation?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Often God is rejected based on the Creator not adhering to all the laws of the world that we observe now. God is bound only by Who He is and not by what He has created.</p>
                  <p className="is-size-6 leading-normal padded">“Scientific laws or laws of science are statements, based on repeated experiments or observations, that describe or predict a range of natural phenomena…. Laws are developed from data and can be further developed through mathematics; in all cases they are directly or indirectly based on empirical evidence. ….As with other kinds of scientific knowledge, laws do not have absolute certainty (as mathematical theorems or identities do), and it is always possible for a law to be contradicted, restricted, or extended by future observations.” - Wikipedia</p>
                  <p className="is-size-6 leading-normal padded">"In theology, endless mistakes result from supposing that the conditions, bounds, and limits of our own finite existence apply to God…" - J.I. Packer</p>
                </div>

                <div className="attSection" id="history">
                <section>
                  <h1 className="title has-text-primary tracking-wide padded">The US sought independence from Britain - shouldn’t I seek independence from God? </h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Seeking independence from an imperfect state and king is much different from seeking independence from a perfect God.  Remaining with England would have been slavery for the US. And while many view submission to God as just another form of slavery, it is actually how our true freedom is restored.</p>
                  <p className="is-size-6 leading-normal padded">Thomas Jefferson included no less than 28 grievances against the king of England within the official text of the Declaration of Independence.  These included the well-known issue of "For imposing Taxes on us without our Consent" to the lesser-known "He has erected a multitude of New Offices, and sent hither swarms of Officers to harass our people and eat out their substance."  After listing all the grievances, Jefferson added "A Prince, whose character is thus marked by every act which may define a Tyrant, is unfit to be the ruler of a free people."</p>
                  <p className="is-size-6 leading-normal padded">King George was indeed a tyrant and guilty of all the charges that supported the Declaration.  This decision to become independent from a very imperfect king was the right move.  Unfortunately, Adam and Eve concluded incorrectly that God was also being an imperfect tyrant of sorts and chose independence as well, losing their perfect life, liberty and meaningful pursuit of happiness within the Garden.</p>

                </div>

                <div className="attSection" id="liturgy" >
                <section>
                    <h1 className="title has-text-primary tracking-wide padded">"Rock of Ages" - Agustus M. Toplady</h1>
                    </section>
                    <p className="is-size-6 leading-normal padded">"Nothing in my hand I bring;<br></br>
                     Simply to Thy Cross I cling;<br></br>
                     Naked, come to Thee for dress;<br></br>
                     Helpless, look to Thee for grace;<br></br>
                     Foul, I to the fountain fly,<br></br>
                     Wash me, Savior, or I die." - 2nd verse</p>
                </div>

            </main>
            </div>
          </body>
        )
    }

}

export default withRouter(Independent);