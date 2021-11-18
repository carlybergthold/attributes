import React, { Component } from "react";
import { withRouter } from "react-router-dom"
import '../../styles/attribute.css'
import Quote from '../../components/quote'
import styleMethods from "../../methods/styleMethods";
import BaseAttributeDetail from '../../modules/attributeDetail/baseAttributeDetail';

class Glorious extends Component {

    render() {
        return(
          <BaseAttributeDetail
            title="Glorious"
            subtitle="Who God is"
            definition={
              <section>
                  <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("glorious")}}>Glorious describes the summation of all of God’s attributes, often known as God’s beauty. 
                  </h1></section>
                  <p className="is-size-6 leading-normal padded">Every human is created in God’s image, so we not only reflect His glory, but are also attracted to it. We can also be attracted to false imitations of His glory like fame and pride. Like God, we are pleased when others listen to us, appreciate us, and value us for who we are and what we do.  Glory’s root word indicates “heaviness” - so what we glory is what lays heavy on our hearts, what we hold to be most important.  Who or what would you say is your own glory?</p>
                  <p className="is-size-6 leading-normal padded"> When I am not appreciated by others I can feel rejected.  I can obsess at times over what others think of me and work hard to make people think highly of me, maybe even better than who I really am.</p>
              </section>
            }
            emotion={
              <section>
                <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("glorious")}}>Will I be accepted for who I really am?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Rejection hurts, regardless of its source.  I can wonder what’s wrong with me and my “glory” - and whether I can ever be accepted for who I really am.  Our neural reaction to rejection is very similar to physical pain - studies have even shown that Tylenol reduces the emotional pain from rejection.  Ironically, when I reject God, it hurts me, not God (whose glory is full forever, unaffected by anyone's perspective of Him).  When I reject God, I reject His glory, His beauty, His image in me and those around me - leaving me with less than I was designed to have.  But when I ascribe (or attribute) all glory to God, I am strengthened by knowing I have His image and am given peace by His love and acceptance. </p>
                  <br></br>
                  <Quote scripture="Ascribe to the LORD, O heavenly beings, ascribe to the LORD glory and strength. Ascribe to the LORD the glory due his name; worship the LORD in the splendor of holiness.….The LORD sits enthroned over the flood; the LORD sits enthroned as king forever.
May the LORD give strength to his people! May the LORD bless his people with peace!" reference="Psalm 29:1-2, 10-11" color="var(--teal)"/>                
              </section>
            }
            fear={
              <section>
                <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("glorious")}}>Should I be concerned about the opinions of others?</h1>
                </section>
                  <p className="is-size-6 leading-normal padded">This question pops up in everyone’s life periodically (or very often!).  If others’ opinions reflect God, they may help and encourage me.  If the opinions oppose God, they will likely hurt me.  But whether helpful or harmful, when I place more weight on what others think than what God has said, I have made that person an idol and subjected myself to their power.  I have loved their glory more than God’s.</p>
                  <br></br>
                  <Quote scripture="Nevertheless, many even of the authorities believed in him, but for fear of the Pharisees they did not confess it, so that they would not be put out of the synagogue;  for they loved the glory that comes from man more than the glory that comes from God." reference="John 12:42-43" color="var(--teal)"/>                
              </section>
            }
            struggle={
              <section>
                 <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("glorious")}}>Isn’t it beneficial to have a good reputation?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Yes, when my reputation is based on fact and reflects God’s image, it is very beneficial.  And it feels good when someone thinks or speaks well of me, especially when I was not seeking it out.  But when I crave a good reputation, I am seeking my own glory and inevitably lessening God’s.</p>
                  <br></br>

                  <Quote scripture="It is not good to eat much honey, nor is it glorious to seek one's own glory." reference="Proverbs 25:27" color="var(--teal)"/>               
              </section>
            }
            whoAmI={
              <section>
                 <section>

<h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("glorious")}}>Only God originates glory.</h1></section>
<p className="is-size-6 leading-normal padded">All my true glory is a reflection of God's glory and can not add to His glory.  God's full glory must be diminished for me to safely perceive it.  Manmade glory is often marketed or exaggerated in order to capture my attention, which is its primary purpose.</p>

<br></br>
<Quote scripture="I (Jesus speaking) do not receive glory from people….How can you believe, when you receive glory from one another and do not seek the glory that comes from the only God?" reference="John 5:41,44" color="var(--teal)"/>               
              </section>
            }
            biblicalChristianity={
              <section>
                  <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("glorious")}}>Jesus was glorious because He was both man and God.</h1></section>

                  <p className="is-size-6 leading-normal padded">Jesus was not just a man who was very godly, nor was He God in the shell of a man’s body.  He gloriously lived as fully God and fully man so that He could be the perfect, sinless sacrifice on the cross to fully cover man’s sins.</p>
                  <Quote scripture="And the Word became flesh and dwelt among us, and we have seen his glory, glory as of the only Son from the Father, full of grace and truth." reference="John 1:14" color="var(--teal)"/>                
              </section>
            }
            soWhat={
              <section>
                <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("glorious")}}>So what do I do now?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Ask God to open my heart and mind to see Who God is with more clarity, to discover how perfect and beautiful are His attributes. Discern that any glory I see in other people is either a reflection of God or not true glory. Seek only His glory and not my own.  <br></br>Ask: Have I recently seen evidence of God’s glory in other people?</p>
                  <Quote scripture="The one who speaks on his own authority seeks his own glory; but the one who seeks the glory of him who sent him is true, and in him there is no falsehood." reference="John 7:18" color="var(--teal)"/>                
              </section>
            }
            prayer={
              <section>
                   <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("glorious")}}>Prayer</h1>
                  </section>

                  <p className="is-size-6 leading-normal padded">Lord, help me to see and savor your Glory and Beauty. Let this new understanding impact my priorities - what I choose to value as weighty. Help me to seek and prioritize your eternal Beauty rather than temporary glitter.</p>
                  <Quote scripture="Oh, taste and see that the LORD is good! Blessed is the man who takes refuge in him!" reference="Psalm 34:8" color="var(--teal)"/>               
              </section>
            }
            scienceAndHealth={
              <section>
                 <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("glorious")}}>How is God's glory like white light?</h1>

                  </section>
                  <p className="is-size-6 leading-normal padded"> A dark object absorbs most of the light that strikes its surface, and thus reflects very little of the original light.  A red object reflects mostly red light, but absorbs the other colors.  A white object reflects all the incoming visible light wavelengths (or colors) equally. </p>
                  <p className="is-size-6 leading-normal padded"> God's glory is the “white light” summation of all His combined "colors", or attributes.  Humans reflect God's glory, but our reflections can lose God's original brilliance if we do not reflect His attributes well or if one attribute is over-emphasized to the detriment of another. </p>
                  <p className="is-size-6 leading-normal padded">“Scientists have engineered perhaps the whitest natural substance, using the same physics behind one ghostly white Southeast Asian beetle….A team of European scientists have essentially created the whitest paper using this physical property. … white materials should scatter light of all wavelengths equally—and the key to creating a white material is creating a rough, porous surface that light can bounce around in….The researchers were inspired by the white Cyphochilus beetle, whose scales scatter light through a complex web of a biological structure called chitin. The new material uses cellulose nanofibrils—nanometer-scale fibers of cellulose, a plant-based material similar to chitin used to make paper.” - 3/13/18 article in Gizmodo</p>               
              </section>
            }
            history={
              <section>
                 <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("glorious")}}>Did Jonathan Edwards Preach More Wrath or Beauty? </h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Jonathan Edwards (1703-1758) was a revivalist preacher, philosopher, Congregationalist Protestant theologian and grandfather of Aaron Burr, third Vice President of the United States.  He entered Yale College at age 12 and played a critical role in the First Great Awakening. Although he delivered the classic sermon "Sinners in the Hands of an Angry God”, he was more shaped by God's beauty than by His wrath.</p>
                  <p className="is-size-6 leading-normal padded">“Few Americans have known that Edwards was actually obsessed not by God’s wrath but by God’s beauty….In fact, the historian of theological aesthetics Patrick Sherry has shown that Edwards made beauty more central to theology than anyone else in the history of Christian thought, including Augustine and (the 20th-century Swiss Catholic) Hans Urs von Balthasar….</p>
                  <p className="is-size-6 leading-normal padded">When I first saw Edwards’s depiction of God’s beauty, it changed my view of God.
I realized afresh that He does not drive us by duty, but draws us by beauty, not by fear but by irresistible attraction.  It is like the way the most beautiful music and works of art draw us closer and closer.  Once we hear and see their beauty, we want more and more.  When it is great art or music, and we have eyes and ears to see and hear, we feel overtaken and absorbed by the beauty—so much so that sometimes we forget ourselves and are drawn to that beauty outside of ourselves.  That is how Edwards described true religious experience.  It is what compels us to abandon love for self as the central principle of our lives and turn to the beauty of God.  We feel compelled, and yet we are not coerced.  We are drawn ineluctably.” - ‘Drawn by God's Beauty: The Surprising Jonathan Edwards’, 11/7/18 article by Gerald McDermott</p>               
              </section>
            }
            liturgy={
              <section>
                 <section>
                    <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("glorious")}}>"To God Be the Glory" - Fanny Crosby</h1>
                    </section>
                    <p className="is-size-6 leading-normal padded">"Praise the Lord, praise the Lord,<br></br>
  Let the earth hear His voice;<br></br>
Praise the Lord, praise the Lord,<br></br>
  Let the people rejoice;<br></br>
Oh, come to the Father, through Jesus the Son,<br></br>
  And give Him the glory; great things He hath done." - Chorus</p>               
              </section>
            }
          />
        )
    }

}

export default withRouter(Glorious);