import React, { Component } from "react";
import { withRouter } from "react-router-dom"
import '../../styles/attribute.css'
import Hero from '../../components/hero'
import AttributeSidebar from "../../components/attSidebar";
import Quote from '../../components/quote'

class Relational extends Component {

    // componentDidMount() {
    //   window.scrollTo(0, 0);
    // }

    render() {
        return(
            <body className="attPage">
            <Hero title="Relational" subtitle="To relate to or interact with others" img="girl.png" />
            <div className="container is-fullhd has-text-left relativeMaybe" id="attributeContainer">
              <aside>
                <section id="sidebar">
                  <AttributeSidebar />
                </section>
              </aside>

              <main>
                <div className="attSection" id="definition">
                  <section>
                  <h1 className="title has-text-primary tracking-wide padded">Relational means relating to or interacting with others.
                  </h1></section>
                  <p className="is-size-6 leading-normal padded">Some of us want more of this than others, but we all need someone else.  We seek to belong or connect to others through groups - family, work, sports, church, or social networks (the average Facebook user has 200-300 “friends”).  Owning a pet can supplement this need for interaction (68% of households own a pet - up from 56% in 1988 - most commonly a dog, then cat, fish and birds - 2017 National Pet Owners survey).</p>
                  <p className="is-size-6 leading-normal padded">Solitary confinement has been reported to cause hypertension, headaches and migraines, profuse sweating, dizziness, and heart palpitations. Many inmates also experience extreme weight loss due to digestion complications and abdominal pain. Many of these symptoms are due to the intense anxiety and sensory deprivation. - Wikipedia</p>
                  <p className="is-size-6 leading-normal padded">Relationships are so important, but they are also hard to develop and maintain.  Maybe the only thing worse than being frustrated with a friend is having no friend with whom to be frustrated.</p>
                </div>

                <div className="attSection" id="emotion">
                <section>
                  <h1 className="title has-text-primary tracking-wide padded">Why am I so frustrated with one of my closest friends?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Frustration comes with all relationships.  Two different wills, expectations and even loves will rarely join together perfectly.  The feeling can last momentarily or can threaten the relationship.  Frustration can sometimes be my feeling of holding back my other feelings - thus an urgent invitation to explore the root causes more deeply.</p>
                  <p className="is-size-6 leading-normal padded">I have an imperfect relationship with a perfect God, which will result in frustration as well.  The Psalmist below basically says “I know you are God, BUT…”  This Psalm ends with his need unmet, but with the frustration voiced - which is perhaps the most critical action I can take when feeling frustrated.</p>
                  <br></br>
                  <Quote scripture="ave rejected us and disgraced us and have not gone out with our armies.  You have made us turn back from the foe, and those who hate us have gotten spoil. You have made us like sheep for slaughter and have scattered us among the nations.  You have sold your people for a trifle, demanding no high price for them.  You have made us the taunt of our neighbors, the derision and scorn of those around us…  ...For our soul is bowed down to the dust; our belly clings to the ground.  Rise up; come to our help!  Redeem us for the sake of your steadfast love!" reference="Psalm 44:8-13, 25-26"/>
                </div>

                <div className="attSection" id="fear">
                <section>
                  <h1 className="title has-text-primary tracking-wide padded">How do I keep from being lonely?</h1>
                </section>
                  <p className="is-size-6 leading-normal padded">Many are lonely even in the midst of many people.  The measure of my loneliness is the depth and breath of interaction I have with others versus the level I desire - the larger the gap, the more alone I will feel.  Loneliness is my call to love others more actively.  Fear of loneliness dismisses the reality of God and can result from not obeying His command to love others.  God is tangibly with each Christian through the Presence of the Holy Spirit, as well as through the gift of His Body, the Church (which consists of many local churches).</p>
                  <br></br>
                  <Quote scripture="And let us consider how to stir up one another to love and good works, not neglecting to meet together, as is the habit of some, but encouraging one another, and all the more as you see the Day drawing near." reference="Hebrews 10:24-25" color="var(--teal)"/>
                </div>

                <div className="attSection" id="struggle">
                <section>
                  <h1 className="title has-text-primary tracking-wide padded">How can I develop better relationships?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Struggles in developing good relationships are universal.  A relationship never even starts until one person initiates and the other responds.  Once begun, relationships require time, shared experiences, good communication, and flexibility during times of stress.  If I seek a relationship with God, it is because He initiated it and wants me to draw closer to Him.  And even when I act against all that God represents, my behavior will never cause Him to withdraw.  He never leaves and remains steadfast in relationship.</p>
                  <br></br>
                  <Quote scripture="Then Isaiah is so bold as to say, 'I have been found by those who did not seek me;  I have shown myself to those who did not ask for me. But of Israel he says, 'All day long I have held out my hands to a disobedient and contrary people.' " reference="Romans 10:20-21" />
                </div>

                <div className="attSection" id="whoAmI">
                <section>
                  <Hero title="Only God can be fully intimate in an infinite number of relationships."></Hero>
                </section>
                  <p className="is-size-6 leading-normal padded">Each person of the Trinity (Father, Son & Holy Spirit) had relationship within before creation was made.  Each closely interacted with each other in full intimacy - or oneness. My relationships are finite and always flawed. I strive for intimacy or oneness with others, but it can be elusive or fleeting.</p>
                  <br></br>
                  <Quote scripture="Then the LORD God said, 'It is not good that the man should be alone;'" reference="Genesis 2:18a" />
                </div>

                <div className="attSection" id="biblicalChristianity">
                  <section>
                  <h1 className="title has-text-primary tracking-wide padded">Jesus demonstrated care and intimacy in serving his disciples and close friends.</h1></section>
                  <p className="is-size-6 leading-normal padded">Jesus is not only a good example for me, but also indicative of the relationship He wants me to have with Him for eternity. God extended this type of relationship to Adam and Eve; it was lost in the fall, but then restored by Jesus' work on the cross.</p>
                  <Quote scripture="Now this is eternal life: that they know you, the only true God, and Jesus Christ, whom you have sent." reference="John 17:3" color="var(--teal)"/>
                </div>

                <div className="attSection" id="soWhat">
                <section>
                  <h1 className="title has-text-primary tracking-wide padded">So what do I do now?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Meditate on who God is as a real person versus an intellectual or theological concept (use the Bible as the key resource). Appreciate and take the initiative to invest further in your current relationships; develop new relationships (take the risk) and even join an organization with the intent to serve others - a family, church, volunteer or work group.  <br></br>Ask: How do I consider God to be a Person?</p>
                  <Quote scripture="Then God said, 'Let us make man in our image, after our likeness.'" reference="Genesis 1:26a" color="var(--teal)"/>
                </div>

                  <div className="attSection" id="prayer">
                  <section>
                  <h1 className="title has-text-primary tracking-wide padded">Prayer</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Father God, thank you for revealing yourself to me.  Forgive me for sometimes thinking of you as something less real, more distant, or less caring of me, than other people I know.  Help me to know you better and, as your image, to initiate healthy relationships with others so they can see You in me.</p>
                  <Quote scripture="You are my friends if you do what I command you. No longer do I call you servants, for the servant does not know what his master is doing; but I have called you friends, for all that I have heard from my Father I have made known to you." reference="John 15:14-15" color="var(--teal)"/>
                </div>

                <div className="attSection has-background-light" id="scienceAndHealth">
                <section>
                  <h1 className="title has-text-primary tracking-wide padded">Good relationships bring good health!</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Many studies show improved health derived from friendships, including improved recovery from illness, less stress and a longer and healthier life. Many of these health benefits have also extended to those who believe in (i.e. have a relationship with) God.  Our body, mind and soul are connected in ways that we are just only beginning to understand.  God made this connection long ago:</p>
                  <p className="is-size-6 leading-normal padded">"Gracious words are like a honeycomb, sweetness to the soul and health to the body." - Proverbs 16:24</p>
                  <p className="is-size-6 leading-normal padded">The discovery of cosmic microwave background radiation (CMB) in 1941 constitutes a major development in modern physical cosmology….. In 1964, US physicist Arno Penzias and radio-astronomer Robert Woodrow Wilson rediscovered the CMB…. and new measurements were accepted as important evidence for a hot early Universe (Big Bang theory) and as evidence against the rival steady state theory.[4] In 1978, Penzias and Wilson were awarded the Nobel Prize for Physics for their joint measurement.</p>
                  <p className="is-size-6 leading-normal padded">A study of 3000 nurses with breast cancer showed those with no friends were 4X more likely to die than those with 10 friends, regardless of their proximity.  
                  An Australian Longitudinal Study of Aging followed 1500 seniors over 10 years and found those with many friends outlived those with few or no friends by 22%.  
                  A Swedish survey of women 75 years and older showed less dementia in those who kept in contact with a variety of friends.  
                  A Harvard Health Publication cited a study of 309,000 people, finding the lack of strong relationships increasing the risk of premature death from all causes by 50%.  
                  A Rush University Medical Center research showed patients who believed in God were 75% more likely to respond to depression and bipolar treatments.</p>
                </div>

                <div className="attSection" id="history">
                <section>
                  <h1 className="title has-text-primary tracking-wide padded">Who was ‘Father Abraham’?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Abraham is traditionally considered to be the first Jew and had a covenant relationship with God. Because Judaism, Christianity, and Islam all recognize Abraham as their first prophet, they are also called the Abrahamic religions which together make up a majority of all world religions. God’s purpose for initiating a relationship with Abraham was to benefit many others - indeed, to “bless the whole world”.</p>
                  <p className="is-size-6 leading-normal padded">"Now the LORD said to Abram, 'Go from your country and your kindred and your father's house to the land that I will show you. And I will make of you a great nation, and I will bless you and make your name great, so that you will be a blessing. I will bless those who bless you, and him who dishonors you I will curse, and in you all the families of the earth shall be blessed.’ " - Genesis 12:1-3</p>
                  <p className="is-size-6 leading-normal padded">“Life in the ancient Middle East centered around the extended family or household, which was called the ‘Father’s house’ or beth ab in Hebrew. Such a family could comprise thirty, fifty, or more people representing several generations: the head of the family (known as the patriarch), his wife or wives, his younger brothers, unmarried children, and married sons with their families (a woman customarily joined the beth ab of her husband).</p>
                  <p className="is-size-6 leading-normal padded">The patriarch controlled all family resources, using them to protect and care for each family member.  In this setting, the beth ab was the context through which each member was connected to the rest of society. If a member lost connection to the family due to oppression, capture by enemies, poverty, or bad choices, the patriarch was responsible to restore the “marginalized” member to the family. Anyone who found himself or herself without a beth ab was in serious trouble. Widows and orphans were particularly vulnerable because they had no means of support or protection outside the beth ab.</p>
                  <p className="is-size-6 leading-normal padded">Abraham was a patriarch with a mission. He recognized his role as God’s partner in extending the Father’s house to bless all people and nations and to put God on display in such a way as to attract those who were estranged from Him, so that they could experience restoration to the beth ab.” - 8/9/15 study by Ray Vander Laan called ‘Understanding The Faith of Abraham’</p>

                </div>

                <div className="attSection" id="liturgy" >
                <section>
                    <h1 className="title has-text-primary tracking-wide padded">What is communion?</h1>
                    </section>
                    <p className="is-size-6 leading-normal padded">Communion is the act of Christian worship in which bread and wine are consecrated and shared, reminding the believer of Christ’s body and blood given at the cross.  The word communion also means the sharing or exchanging of intimate thoughts and feelings, especially when the exchange is on a mental or spiritual level.</p>
                    <Quote scripture="And when he had given thanks, he broke it, and said, 'This is my body which is for you. Do this in remembrance of me.' In the same way also he took the cup, after supper, saying, 'This cup is the new covenant in my blood. Do this, as often as you drink it, in remembrance of me.' For as often as you eat this bread and drink the cup, you proclaim the Lord’s death until he comes." reference="1 Corinthians 11:24-26" color="var(--teal)"/>
                </div>

            </main>
            </div>
          </body>
        )
    }

}

export default withRouter(Relational);