import React, { Component } from "react";
import { withRouter } from "react-router-dom"
import '../../styles/attribute.css'
import Quote from '../../components/quote'
import styleMethods from "../../methods/styleMethods";
import BaseAttributeDetail from '../../modules/attributeDetail/baseAttributeDetail';

class Loving extends Component {

    render() {
        return(
          <BaseAttributeDetail
            title="Loving"
            subtitle="To willingly self-sacrifice for the good of another"
            definition={
              <section>
                  <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("loving")}}>Loving means to willingly self-sacrifice for the good of another without it being deserved or requiring reciprocation.
                  </h1></section>
                  <p className="is-size-6 leading-normal padded">This definition from Paul Tripp reflects Biblical love, which is quite different from how love is normally defined in American culture.  This sacrificial love is most often found within a family in which the love relationship overrules all else. </p>
                  <p className="is-size-6 leading-normal padded">There are 41.8 million unpaid caregivers of adults ages 65 and older in the United States. These older adults are often parents or grandparents of the caregivers, who themselves are often balancing paid employment with this work of the heart. Among those who have helped their parents with finances, errands, housework, home repairs or personal care, 88% say it’s rewarding (Bureau of Labor Statistics from 2020 and Pew Research Center data from 2013-14).</p>
                  <p className="is-size-6 leading-normal padded">“To be loved but not known is comforting but superficial. To be known and not loved is our greatest fear. But to be fully known and truly loved is, well, a lot like being loved by God. It is what we need more than anything. It liberates us from pretense, humbles us out of our self-righteousness, and fortifies us for any difficulty life can throw at us.” - Tim Keller</p>
                  <p className="is-size-6 leading-normal padded">Keller's quote not only points out my greatest fear, but also explains why my shame can hurt so much.  I know my flaws well and am afraid the shame of uncovering them could drive others away.  But the quote also points to the solution - when I feel unconditionally loved, it frees me to love others.</p>
              </section>
            }
            emotion={
              <section>
                 <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("loving")}}>What is the difference between guilt and shame?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Guilt says “I DID something bad,” while shame says “I AM bad.” Shame attacks my very being and self-worth.  A believer’s worth comes from identity in Christ (future link to “Who you are in Christ”) instead of maintaining a certain performance level.</p>
                  <p className="is-size-6 leading-normal padded">People intended to shame Jesus by hanging Him on the cross, but instead of personalizing that shameful punishment, Christ publicly identified with His trusted Father by saying, “Into your hands I commit my spirit.”  When we are “all in” with God, His love overrules feelings of shame that we or others may generate.</p>
                  <br></br>
                  <Quote scripture="In you, O LORD, do I take refuge; let me never be put to shame; in your righteousness deliver me! Incline your ear to me; rescue me speedily! Be a rock of refuge for me, a strong fortress to save me!   For you are my rock and my fortress; and for your name’s sake you lead me and guide me; you take me out of the net they have hidden for me, for you are my refuge. Into your hand I commit my spirit; you have redeemed me, O LORD, faithful God.  I hate those who pay regard to worthless idols, but I trust in the LORD. I will rejoice and be glad in your steadfast love, because you have seen my affliction; you have known the distress of my soul, and you have not delivered me into the hand of the enemy; you have set my feet in a broad place." reference="Psalm 31:1-8" color="var(--teal)"/>               
              </section>
            }
            fear={
              <section>
                 <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("loving")}}>If they really knew me, they would not love me.</h1>
                </section>
                  <p className="is-size-6 leading-normal padded">When I believe that I must earn love from others, I will also require others to earn my love. Believing that love is transactional or conditional is a cycle that must be broken by an example of truly unconditional love. But even then I can reject unconditional love with the stubborn notion that it is too good to be true.</p>
                  <br></br>

                  <Quote scripture="And I pray that you, being rooted and established in love, may have power, together with all the saints, to grasp how wide and long and high and deep is the love of Christ, and to know this love that surpasses knowledge - that you may be filled to the measure of all the fullness of God." reference="Ephesians 3:17b-19" color="var(--teal)"/>
                <br></br>
                  <Quote scripture="My command is this: Love each other as I have loved you." reference="John 15:12" color="var(--teal)"/>               
              </section>
            }
            struggle={
              <section>
                 <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("loving")}}>What if I just don’t feel like loving someone right now?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">How totally right and wrong the Beatles lyrics are in “All You Need Is Love.”  If love is defined as God, all we truly need is love.  Otherwise, love is a competing god or a magical ingredient that should make life easier.  True love is never easy, since it includes self-sacrifice. Yet it is “everything” in that loving God and others is what we will do when we are knowing and obeying Christ.  True love takes loving action even when there is no feeling pushing it along.</p>
                  <p className="is-size-6 leading-normal padded">"Nothing you can make that can't be made
No one you can save that can't be saved
Nothing you can do, but you can learn how to be you in time
It's easy"
      "All You Need is Love" - Beatles</p>
                  <p className="is-size-6 leading-normal padded">Brian Epstein, the band's manager, said of "All You Need Is Love:" "It was an inspired song and they really wanted to give the world a message. The nice thing about it is that it cannot be misinterpreted. It is a clear message saying that love is everything."</p>
                  <br></br>
                  <Quote scripture="God is love.  But love is not God. Don't turn love into a god." reference="Scott Patty" color="var(--teal)"/>               
              </section>
            }
            whoAmI={
              <section>
                 <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("loving")}}>Only God is love and the source of all love.</h1></section>
                  <p className="is-size-6 leading-normal padded">Believing that I can fully love another without God's help dismisses His loving initiative and presence in my life. Without God, I invariably act in ways to maximize my own good, even if my actions have the appearance of self-sacrifice.</p>
                  <br></br>
                  <Quote scripture="We love because he first loved us." reference="1 John 4:19" color="var(--teal)"/>               
              </section>
            }
            biblicalChristianity={
              <section>
                   <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("loving")}}>Jesus willingly gave His life for our good.</h1></section>
                  <p className="is-size-6 leading-normal padded">Jesus willingly sacrificed His life because it provided the greatest good (eternal life with God) to those who did not deserve it or who could never pay it back (all believers).</p>
                  <Quote scripture="For God so loved the world that He gave His one and only Son, that whoever believes in Him shall not perish but have eternal life." reference="John 3:16" color="var(--teal)"/>               
              </section>
            }
            soWhat={
              <section>
                  <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("loving")}}>So what do I do now?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Be committed to a secure (covenantal) relationship - first with Christ. Then I'll be able to be lovingly committed to another, such as within a good marriage, church body, or friendship. Consider all my daily work first and foremost as a way to love and serve others.  <br></br>Ask: How am I willingly self-sacrificiing for the good of another without it being deserved or requiring reciprocation?</p>
                  <Quote scripture="And this commandment we have from him: whoever loves God must also love his brother." reference="1 John 4:21" color="var(--teal)"/>              
              </section>
            }
            prayer={
              <section>
                   <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("loving")}}>Prayer</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Loving Father, thank you for the sacrifice of your Son on the Cross when it was least deserved.  Help me to remember and experience this love so that I may truly love others in the same way.</p>
                  <Quote scripture="Love is patient and kind; love does not envy or boast; it is not arrogant or rude. It does not insist on its own way; it is not irritable or resentful; it does not rejoice at wrongdoing, but rejoices with the truth. Love bears all things, believes all things, hopes all things, endures all things. Love never ends." reference="1 Corinthians 13:4-8a" color="var(--teal)"/>               
              </section>
            }
            scienceAndHealth={
              <section>
                  <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("loving")}}>What does social science say about altruism - a key component of love?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Social theories will continue the debate, but most important is our own inward look.  Why do we love another?  Is it really to benefit ourselves in some way?  Or are we truly wanting the best for another, despite the cost?</p>
                  <p className="is-size-6 leading-normal padded">Altruism or selflessness is the principle or practice of concern for the welfare of others. Evolutionists debate whether or not humans are truly capable of psychological altruism. Daniel Batson is a strong proponent that people often help others purely out of the goodness of their hearts - identifying four major motives for altruism: altruism to ultimately benefit the self (egoism), to ultimately benefit the other person (altruism), to benefit a group (collectivism), or to uphold a moral principle (principlism). - Wikipedia</p>              
              </section>
            }
            attHistory={
              <section>
                 <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("loving")}}>Arranged marriage versus marriage for love?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Arranged marriages are often considered the opposite of marrying for love, but that perspective is short-sighted.  Arranged marriages were predominant for centuries and are still customary in some cultures today.  Often these matches turned loving when the mutual aim was for what was best for the family - socially, financially, etc.  These couplings were understood to require adaptation to the other versus the modern notion of wanting a spouse who will best serve our needs.  Selfish attraction often fails to generate true love.</p>
                  <p className="is-size-6 leading-normal padded">"Marriage was a way of turning strangers into relatives, of making peace, and of making permanent trading connections". - 14th century marriage mindset</p>
                  <p className="is-size-6 leading-normal padded">"Husbands, love your wives, just as Christ loved the church and gave Himself up for her." - Ephesians 5:25</p>
                  <p className="is-size-6 leading-normal padded">The love of Christ allows us to enter into a marriage relationship that is very similar to the 14th century marriage mindset.  It transforms a stranger (even enemy) of God into a relative (even brother or sister). It brings peace with God where there was once eternal conflict and resulting judgment and wrath.  And it makes permanent (eternal) trading connections - prayer, fruit, sanctification, glory, and resurrected body.</p>               
              </section>
            }
            liturgy={
              <section>
                 <section>

<h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("loving")}}>"The Love of God is Greater Far" - Lehman</h1>
</section>
<p className="is-size-6 leading-normal padded">
  "Could we with ink the ocean fill, And were the skies of parchment made;<br></br>
  Were every stalk on earth a quill, And every man a scribe by trade;<br></br>
  To write the love of God above Would drain the ocean dry;<br></br>
  Nor could the scroll contain the whole, Though stretched from sky to sky." - Last verse</p>               
              </section>
            }
          />
        )
    }

}

export default withRouter(Loving);