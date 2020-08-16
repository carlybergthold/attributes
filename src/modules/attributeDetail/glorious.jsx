import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom"
import '../../styles/attribute.css'
import Quote from '../../components/quote'
import Hero from '../../components/hero'
import AttributeSidebar from "../../components/attSidebar";

class Glorious extends Component {

    componentDidMount() {
      window.scrollTo(0, 0);
    }

    render() {
        return(
            <body className="attPage">
            <Hero title="Glorious" subtitle="Who God is" img="girl.png" />
            <div className="container is-fullhd has-text-left relativeMaybe" id="attributeContainer">
              <aside>
                <section id="sidebar">
                  <AttributeSidebar />
                </section>
              </aside>

              <main>
                <div className="attSection" id="definition">
                  <section>
                  <h1 className="title has-text-primary tracking-wide padded">Glorious describes the summation of all of God’s attributes, often known as God’s beauty. 
                  </h1></section>
                  <p className="is-size-6 leading-normal padded">Every human is created in God’s image, so we not only reflect His glory, but can be attracted to imitations of His glory called fame and pride. Like God, we are pleased when others listen to us, appreciate us, and value us for who we are and what we do.  Glory’s root word indicates “heaviness” - so what we glory is what we hold to be most important.  Who or what would you say is your own glory?</p>
                  <p className="is-size-6 leading-normal padded"> When I am not appreciated by others I can feel rejected.  I can obsess at times over what others think of me and work hard to make people think highly of me, maybe even better than who I really am.</p>
                </div>

                <div className="attSection" id="emotion">
                <section>
                  <h1 className="title has-text-primary tracking-wide padded">Will I be accepted for who I really am?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Rejection hurts, regardless of its source.  I can wonder what’s wrong with me and my “glory” - and whether I can ever be accepted for who I really am.  Our neural reaction to rejection is very similar to pain - studies have even shown that Tylenol reduces the emotional pain from rejection.  Ironically, when I reject God, it hurts me, not God (whose glory is full forever).  When I reject God, I dismiss His glory, His beauty, His image in me and those around me - leaving me with less than I was designed to have.  But when I ascribe (or attribute) all glory to God, I am strengthened by knowing I have His image and am given peace by His love and acceptance. </p>
                  <br></br>
                  <Quote scripture="Ascribe to the LORD, O heavenly beings, ascribe to the LORD glory and strength. Ascribe to the LORD the glory due his name; worship the LORD in the splendor of holiness.….The LORD sits enthroned over the flood; the LORD sits enthroned as king forever.
May the LORD give strength to his people! May the LORD bless his people with peace!" reference="Psalm 29:1-2, 10-11" color="var(--teal)"/>
                </div>

                <div className="attSection" id="fear">
                <section>
                  <h1 className="title has-text-primary tracking-wide padded">Should I be concerned about the opinions of others?</h1>
                </section>
                  <p className="is-size-6 leading-normal padded">This question pops up in everyone’s life periodically (or very often!).  If others’ opinions reflect God, they may help and encourage me.  If the opinions oppose God, they will likely hurt me.  But whether helpful or harmful, when I place more weight on what others think than what God has said, I have made that person an idol and subjected myself to their power.  I have loved their glory more than God’s.</p>
                  <br></br>
                  <Quote scripture="Nevertheless, many even of the authorities believed in him, but for fear of the Pharisees they did not confess it, so that they would not be put out of the synagogue;  for they loved the glory that comes from man more than the glory that comes from God." reference="John 12:42-43" color="var(--teal)"/>
                </div>

                <div className="attSection" id="struggle">
                <section>
                  <h1 className="title has-text-primary tracking-wide padded">Isn’t it beneficial to have a good reputation?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Yes, when my reputation is based on fact and reflects God’s image, it is very beneficial.  And it feels good when someone thinks or speaks well of me, especially when I was not seeking it out.  But when I crave a good reputation, I am seeking my own glory and inevitably lessening God’s.</p>
                  <br></br>
                  <Quote scripture="It is not good to eat much honey, nor is it glorious to seek one's own glory." reference="Prov 25:27" color="var(--teal)"/>
                </div>

                <div className="attSection" id="whoAmI">
                <section>
                  <h1 className="title has-text-primary tracking-wide padded">Only God originates glory.</h1></section>
                  <p className="is-size-6 leading-normal padded">All my true glory is a reflection of God's glory - it does not add to His glory.  God's full glory must actually be diminished for me to safely perceive it.  Manmade glory is often marketed or exaggerated in order to capture my attention, which is its primary purpose.</p>

                  <br></br>
                  <Quote scripture="I (Jesus speaking) do not receive glory from people….How can you believe, when you receive glory from one another and do not seek the glory that comes from the only God?" reference="John 5:41,44" color="var(--teal)"/>
                </div>

                <div className="attSection" id="biblicalChristianity">
                  <section>
                  <h1 className="title has-text-primary tracking-wide padded">Jesus was glorious because He was both man and God.</h1></section>
                  <p className="is-size-6 leading-normal padded">Not a man who was very godly, nor God in the shell of a man’s body.  He gloriously lived as fully God and man without sin so that He could be the perfect sacrifice on the cross to cover man’s sins.</p>
                  <Quote scripture="And the Word became flesh and dwelt among us, and we have seen his glory, glory as of the only Son from the Father, full of grace and truth." reference="John 1:14" color="var(--teal)"/>
                </div>

                <div className="attSection" id="soWhat">
                <section>
                  <h1 className="title has-text-primary tracking-wide padded">So what do I do now?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Begin to see Who God is with more clarity, discovering how perfect and beautiful are His attributes. Discern that any glory I see in other people is either a reflection of God or not true glory. Seek His glory and not my own.  Ask: Have I recently seen evidence of God’s glory in other people?</p>
                  <Quote scripture="The one who speaks on his own authority seeks his own glory; but the one who seeks the glory of him who sent him is true, and in him there is no falsehood." reference="John 7:18" color="var(--teal)"/>
                </div>

                  <div className="attSection" id="prayer">
                  <section>
                  <h1 className="title has-text-primary tracking-wide padded">Prayer</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Lord, help me to see and savor your Glory and Beauty. Let this new understanding impact my priorities - what I choose to give weight to - your eternal Beauty versus temporary glitter.</p>
                  <Quote scripture="Oh, taste and see that the LORD is good! Blessed is the man who takes refuge in him!" reference="Psalm 34:8" color="var(--teal)"/>
                </div>

                <div className="attSection has-background-light" id="scienceAndHealth">
                <section>
                  <h1 className="title has-text-primary tracking-wide padded">How is God's glory like white light?</h1>

                  </section>
                  <p className="is-size-6 leading-normal padded">We often associate the color white with perfection, cleanliness, or purity. A black object absorbs most of the light that strikes its surface.  White objects reflect all visible light wavelengths (or colors) equally.  God's glory is the “white light” summation of all His combined attributes.  But it can lose its brilliance if not reflected well or if an attribute is over-emphasized to the detriment of others. </p>
                  <p className="is-size-6 leading-normal padded">“Scientists have engineered perhaps the whitest natural substance, using the same physics behind one ghostly white Southeast Asian beetle….A team of European scientists have essentially created the whitest paper using this physical property. … white materials should scatter light of all wavelengths equally—and the key to creating a white material is creating a rough, porous surface that light can bounce around in….The researchers were inspired by the white Cyphochilus beetle, whose scales scatter light through a complex web of a biological structure called chitin. The new material uses cellulose nanofibrils—nanometer-scale fibers of cellulose, a plant-based material similar to chitin used to make paper.” - 3/13/18 article in Gizmodo</p>
                </div>

                <div className="attSection" id="history">
                <section>
                  <h1 className="title has-text-primary tracking-wide padded">Jonathan Edwards - More Wrath or Beauty? </h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Jonathan Edwards (1703-1758) was a revivalist preacher, philosopher, Congregationalist Protestant theologian and grandfather of Aaron Burr, third Vice President of the United States.  He entered Yale College at age 12 and played a critical role in the First Great Awakening, delivering the classic sermon "Sinners in the Hands of an Angry God”.</p>
                  <p className="is-size-6 leading-normal padded">“Few Americans have known that Edwards was actually obsessed not by God’s wrath but by God’s beauty….In fact, the historian of theological aesthetics Patrick Sherry has shown that Edwards made beauty more central to theology than anyone else in the history of Christian thought, including Augustine and (the 20th-century Swiss Catholic) Hans Urs von Balthasar….</p>
                  <p className="is-size-6 leading-normal padded">When I first saw Edwards’s depiction of God’s beauty, it changed my view of God.
I realized afresh that He does not drive us by duty, but draws us by beauty, not by fear but by irresistible attraction.  It is like the way the most beautiful music and works of art draw us closer and closer.  Once we hear and see their beauty, we want more and more.  When it is great art or music, and we have eyes and ears to see and hear, we feel overtaken and absorbed by the beauty—so much so that sometimes we forget ourselves and are drawn to that beauty outside of ourselves.  That is how Edwards described true religious experience.  It is what compels us to abandon love for self as the central principle of our lives and turn to the beauty of God.  We feel compelled, and yet we are not coerced.  We are drawn ineluctably.” - ‘Drawn by God's Beauty: The Surprising Jonathan Edwards’, 11/7/18 article by Gerald McDermott</p>

                </div>

                <div className="attSection" id="liturgy" >
                <section>
                    <h1 className="title has-text-primary tracking-wide padded">To God Be the Glory - Fanny Crosby</h1>
                    </section>
                    <p className="is-size-6 leading-normal padded">"Praise the Lord, praise the Lord,
  Let the earth hear His voice;
Praise the Lord, praise the Lord,
  Let the people rejoice;
Oh, come to the Father, through Jesus the Son,
  And give Him the glory; great things He hath done." - Chorus</p>
                </div>

            </main>
            </div>
          </body>
        )
    }

}

export default withRouter(Glorious);