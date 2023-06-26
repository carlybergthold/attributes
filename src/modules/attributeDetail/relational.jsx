import React, { Component } from "react";
import { withRouter } from "react-router-dom"
import '../../styles/attribute.css'
import Hero from '../../components/hero'
import Quote from '../../components/quote'
import styleMethods from "../../methods/styleMethods";
import BaseAttributeDetail from '../../modules/attributeDetail/baseAttributeDetail';

class Relational extends Component {

    render() {
        return(
          <BaseAttributeDetail
            title="Relational"
            subtitle="To relate to or interact with others"
            definition={
              <section>
                  <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("relational")}}>Relational means relating to or interacting with others.
                  </h1></section>
                  <p className="is-size-6 leading-normal padded">Some of us want more relationships than others, but we all need other people.  We seek to belong or connect to others through groups - family, work, sports, church, or social networks (the average Facebook user has 200-300 “friends”).  Owning a pet can supplement this need for interaction (70% of American households own a pet - up from 56% in 1988 - 2022 National Pet Owners survey).</p>
                  <p className="is-size-6 leading-normal padded">Solitary confinement has been reported to cause hypertension, headaches, profuse sweating, dizziness, and heart palpitations. Solitary inmates can also experience extreme weight loss due to digestion complications and abdominal pain. Social isolation increases the likelihood of death by 26–32%. - Feb'23 MedicalNewsToday</p>
                  <p className="is-size-6 leading-normal padded">Relationships are so important, but they are also hard to develop and maintain.  Maybe the only thing worse than being frustrated with a friend is having no friend with whom to be frustrated.</p>
              </section>
            }
            emotion={
              <section>
                 <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("relational")}}>Why am I so frustrated with one of my closest friends?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Frustration comes with all relationships.  Two different wills, expectations and even loves will rarely join together perfectly.  The frustration can last momentarily or can threaten the relationship, but its presence at some level and duration is absolutely normal.</p>
                  <p className="is-size-6 leading-normal padded">Since I am imperfect, I relate imperfectly to a perfect God, which results in frustration for me as well.  The Psalmist below basically says “I know you are God, BUT…”  This Psalm ends with his need unmet, but with the frustration voiced - which is perhaps the most critical action I can take when feeling frustrated. God even desires for us to cry out our needs to Him - that alone can remind us of His perfect sovereignty, leading to hope rather than more frustration.</p>
                  <br></br>
                  <Quote scripture="But you have rejected us and disgraced us and have not gone out with our armies.  You have made us turn back from the foe, and those who hate us have gotten spoil. You have made us like sheep for slaughter and have scattered us among the nations.  You have sold your people for a trifle, demanding no high price for them.  You have made us the taunt of our neighbors, the derision and scorn of those around us…  ...For our soul is bowed down to the dust; our belly clings to the ground.  Rise up; come to our help!  Redeem us for the sake of your steadfast love!" reference="Psalm 44:9-13, 25-26"/>               
              </section>
            }
            fear={
              <section>
                  <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("relational")}}>How do I keep from being lonely?</h1>
                </section>
                  <p className="is-size-6 leading-normal padded">We can experience loneliness even in the midst of many people.  Loneliness is the depth and breath of interaction I have with others versus the level I desire - the larger the gap, the more alone I will feel.  Loneliness is my call to initiate action to love others more actively.  Fear of loneliness dismisses the reality of God's presence and can result from not obeying His command to love others.  God is tangibly with each Christian through the presence of the Holy Spirit, as well as through the gift of His Body, the universal Church, made up of all believers in Jesus Christ worldwide.</p>
                  <br></br>
                  <Quote scripture="And let us consider how to stir up one another to love and good works, not neglecting to meet together, as is the habit of some, but encouraging one another, and all the more as you see the Day drawing near." reference="Hebrews 10:24-25" color="var(--teal)"/>              
              </section>
            }
            struggle={
              <section>
                 <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("relational")}}>How can I develop better relationships?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Struggles in developing good relationships are universal.  A relationship never even starts until one person initiates and the other responds.  Once begun, relationships require time, shared experiences, good communication, and flexibility during times of stress.  If I seek a relationship with God, it is always because He initiated it and wants me to draw closer to Him.  And even when I act against all that God represents, my behavior will never cause Him to withdraw.  He never leaves, but always remains steadfast in relationship.</p>
                  <br></br>
                  <Quote scripture="Then Isaiah is so bold as to say, 'I have been found by those who did not seek me;  I have shown myself to those who did not ask for me. But of Israel he says, 'All day long I have held out my hands to a disobedient and contrary people.' " reference="Romans 10:20-21" />               
              </section>
            }
            whoAmI={
              <section>
                 <section>
                  <Hero title="Only God can be fully intimate in an infinite number of relationships."></Hero>
                </section>
                  <p className="is-size-6 leading-normal padded">Each person of the Trinity (Father, Son & Holy Spirit) had relationship with each other before creation was made.  Each closely interacted with each other in full intimacy - or oneness. My relationships are finite and always flawed. I strive for intimacy or oneness with others, but it can be elusive or fleeting.</p>
                  <br></br>
                  <Quote scripture="Then the LORD God said, 'It is not good that the man should be alone;'" reference="Genesis 2:18a" />               
              </section>
            }
            biblicalChristianity={
              <section>
                   <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("relational")}}>Jesus demonstrated care and intimacy in serving his disciples and close friends.</h1></section>
                  <p className="is-size-6 leading-normal padded">Jesus is not only a good example for me, but also indicative of the relationship He wants me to have with Him now and for eternity. God extended the humanly ultimate intimacy with Adam and Eve in the Garden of Eden; it was lost in the fall, but then restored by Jesus' work on the cross.</p>
                  <Quote scripture="Now this is eternal life: that they know you, the only true God, and Jesus Christ, whom you have sent." reference="John 17:3" color="var(--teal)"/>               
              </section>
            }
            soWhat={
              <section>
                <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("relational")}}>So what do I do now?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Meditate on who God is as a real person and friend versus an intellectual or theological concept (use the Bible as the key resource). Appreciate and take the initiative to invest further in your current relationships.  Take the risk to develop new relationships.  Join an organization with the intent to serve others - a family, church, volunteer or work group.  Serving together is a great way to genuinely grow closer to others. <br></br>Ask: How do I consider God to be a Person or friend?</p>
                  <Quote scripture="Then God said, 'Let us make man in our image, after our likeness.'" reference="Genesis 1:26a" color="var(--teal)"/>                
              </section>
            }
            prayer={
              <section>
                  <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("relational")}}>Prayer</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Father God, thank you for revealing yourself to me.  Forgive me for sometimes thinking of you as something less than real, more distant, or less caring of me.  Help me to believe in You and know You better.  As your image, help me to follow Your example in initiating healthy relationships with others, so they can see You in me.</p>
                  <Quote scripture="You are my friends if you do what I command you. No longer do I call you servants, for the servant does not know what his master is doing; but I have called you friends, for all that I have heard from my Father I have made known to you." reference="John 15:14-15" color="var(--teal)"/>                
              </section>
            }
            scienceAndHealth={
              <section>
                 <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("relational")}}>Good relationships bring good health!</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Many studies show healthy friendships can benefit health, including improved recovery from illness, less stress and a longer and healthier life. Many of these health benefits also stem from having a relationship with God.  Our body, mind and soul are connected in ways that we are just only beginning to understand.  God made this connection long ago:</p>
                  <p className="is-size-6 leading-normal padded">"Gracious words are like a honeycomb, sweetness to the soul and health to the body." - Proverbs 16:24</p>
                  <p className="is-size-6 leading-normal padded">A study of 3000 nurses with breast cancer showed those with no friends were 4X more likely to die than those with 10 friends, regardless of their proximity.  
                  An Australian Longitudinal Study of Aging followed 1500 seniors over 10 years and found those with many friends outlived those with few or no friends by 22%.  
                  A Swedish survey of women 75 years and older showed less dementia in those who kept in contact with a variety of friends.  
                  A Harvard Health Publication cited a study of 309,000 people, finding the lack of strong relationships increasing the risk of premature death from all causes by 50%.  
                  A Rush University Medical Center research showed patients who believed in God were 75% more likely to respond to depression and bipolar treatments.</p>               
              </section>
            }
            liturgy={
              <section>
                 <section>
                    <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("relational")}}>What is communion?</h1>
                    </section>
                    <p className="is-size-6 leading-normal padded">Communion is the act of Christian worship in which bread and wine are shared, reminding the believer of Christ’s body and blood given at the cross.  Through communion, Christ invites His people to draw near to Himself and to one another.  The word communion also means the sharing or exchanging of intimate thoughts and feelings, especially when the exchange is on a mental or spiritual level.</p>
                    <Quote scripture="And when he had given thanks, he broke it, and said, 'This is my body which is for you. Do this in remembrance of me.' In the same way also he took the cup, after supper, saying, 'This cup is the new covenant in my blood. Do this, as often as you drink it, in remembrance of me.' For as often as you eat this bread and drink the cup, you proclaim the Lord’s death until he comes." reference="1 Corinthians 11:24-26" color="var(--teal)"/>               
              </section>
            }
          />
        )
    }

}

export default withRouter(Relational);