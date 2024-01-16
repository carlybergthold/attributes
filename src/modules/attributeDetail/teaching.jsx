import React, { Component } from "react";
import { withRouter } from "react-router-dom"
import '../../styles/attribute.css'
import Quote from '../../components/quote'
import styleMethods from "../../methods/styleMethods";
import BaseAttributeDetail from '../../modules/attributeDetail/baseAttributeDetail';

class Teaching extends Component {

    render() {
        return(
          <BaseAttributeDetail
            title="Teaching"
            subtitle="To guide others perfectly"
            definition={
              <section>
                  <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("teaching")}}>Teaching means to guide others perfectly.
                  </h1></section>
                  <p className="is-size-6 leading-normal padded">Proper teaching knows the direction, the speed, and the method of getting there.  It requires in-depth knowledge of the student as well as the subject.  We honor the best teachers with awards and fond memories from school.  We appreciate coworkers who are willing to impart wisdom.  We know that teaching and learning is simply the way of life.</p>
                  <p className="is-size-6 leading-normal padded">“Children learn more when they initiate an activity and are actively engaged in it. Curiosity is the birthplace of learning. If you follow a two-year-old around for even a couple of hours, you will watch as he explores the world organically, following his innate curiosity about how things work, taste, feel, look, and sound. When a parent or teacher can harness the power of that curiosity, it is like riding a wave that already has momentum…..To give a child a chance to initiate learning, the caregiver must remain in the background, supporting the child’s natural curiosity and offering helpful ways to explore. This is different from the traditional model of instruction, where a teacher doles out knowledge and asks the student to learn the information.” - 10/6/19 article from TeachThought</p>
                  <p className="is-size-6 leading-normal padded">My natural curiosity and ability to learn is enhanced by a good teacher, who will lead and coach me to overcome whatever reluctance I might be feeling.  I know continued learning is vital to success - I just need to figure out what learning is most important to me and then begin the work to take it all in.</p>
              </section>
            }
            emotion={
              <section>
                 <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("teaching")}}>Why do I sometimes need a coach or encourager?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Want to exercise more?  Make new friends?  Learn a new language or instrument?  Or tackle that next hard thing at work or a difficult conversation with a friend?  How about simply learning more about who God is?</p>
                  <p className="is-size-6 leading-normal padded">I have many inner struggles, often knowing what is best for me long-term, but am blocked by an immediate emotional hurdle called reluctance.  This hurdle simply says “I don’t feel like doing that right now.”  I need a coach - one who guides and encourages me to move past my fears and on toward future benefits.  It can be my spouse, a good friend, or someone I hire because I realize the value of external encouragement.  The Holy Spirit is my spiritual coach.</p>
                  <br></br>
                  <Quote scripture="The LORD is my shepherd; I shall not want.  He makes me lie down in green pastures. He leads me beside still waters.  He restores my soul.  He leads me in paths of righteousness for his name’s sake.  Even though I walk through the valley of the shadow of death, I will fear no evil, for you are with me; your rod and your staff, they comfort me.  You prepare a table before me in the presence of my enemies; you anoint my head with oil; my cup overflows.  Surely goodness and mercy shall follow me all the days of my life, and I shall dwell in the house of the LORD forever." reference="Psalm 23:1-6"/>               
              </section>
            }
            fear={
              <section>
                 <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("teaching")}}>I am afraid I may not be able to learn all I need to be successful.</h1>
                </section>
                  <p className="is-size-6 leading-normal padded">Choosing what to learn is a critical decision.  Since no one can learn everything, I need to deliberately decide what I most need and then start, which includes applying effort.  What seems impossible at the start has a way of unfolding and unlocking what has previously been a mystery.</p>
                  <p className="is-size-6 leading-normal padded">All knowledge must have a foundation on which to build.  I must know how to read, listen, interpret and understand the information I need, and then put all these in the right perspective.  In Christianity, “fearing God”, or putting sincere effort toward knowing and appreciating God, is critical to all successful learning, understanding and life wisdom.</p>
                  <br></br>
                  <Quote scripture="Let the wise hear and increase in learning, and the one who understands obtain guidance, to understand a proverb and a saying, the words of the wise and their riddles.  The fear of the Lord is the beginning of knowledge; fools despise wisdom and instruction." reference="Proverbs 1:5-7" color="var(--teal)"/>               
              </section>
            }
            struggle={
              <section>
                 <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("teaching")}}>When learning itself is a struggle…</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">The perfect learning environment rarely exists.  My teachers or mentors may be harsh, uncaring, incompetent, or even nonexistent.  Or I might be the main problem - I either can’t or won’t because of the significant effort required.  What do I do?</p>
                  <p className="is-size-6 leading-normal padded">The easiest and most obvious truth to accept is that obstacles will always be present.  In the verse below, it is easy to see the obstacles: What is this yoke? Doesn’t it imply heavy work and constriction? Can any burden really be termed ‘light’?  And how can I rest when you are giving me even more work?  All good questions to ask in time, but God’s guidance begins with a simple call - “Come to me…”.   The truth is that I need a Master Teacher to help me and God is always ready to help all who come to Him.</p>
                  <br></br>
                  <Quote scripture="Come to me, all who labor and are heavy laden, and I will give you rest. Take my yoke upon you, and learn from me, for I am gentle and lowly in heart, and you will find rest for your souls. For my yoke is easy, and my burden is light." reference="Matthew 11:28-30" />               
              </section>
            }
            whoAmI={
              <section>
                 <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("teaching")}}>Only God teaches perfectly.</h1>
                </section>
                  <p className="is-size-6 leading-normal padded">One common error is to believe that Jesus was simply a good teacher and not God.  In His teachings, Jesus clearly self-identified as God (and others supported this claim).  So He was most likely either crazy or truly God.  The least likely scenario is that He was a model teacher who happened to believe He was God.</p>
                  <br></br>
                  <Quote scripture="Jesus said to them, 'Truly, truly, I say to you, before Abraham was, I am.' So they picked up stones to throw at him, but Jesus hid himself and went out of the temple." reference="John 8:58-59" />               
              </section>
            }
            biblicalChristianity={
              <section>
                   <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("teaching")}}>Jesus is the perfect teacher.</h1></section>
                  <p className="is-size-6 leading-normal padded">Jesus taught everyone He came into contact with, whether through parables, miracles or admonishment. And when He physically left His disciples, He emphasized the importance of continuing to learn from Him through the Holy Spirit.  I learn today from what God has spoken through the Bible and what He says through the Spirit - these two sources will never contradict, but harmonize.</p>
                  <Quote scripture="You call me Teacher and Lord, and you are right, for so I am." reference="John 13:13" color="var(--teal)"/><br>
                  </br>
                  <Quote scripture="But the Helper, the Holy Spirit, whom the Father will send in my name, he will teach you all things and bring to your remembrance all that I have said to you." reference="John 14:26" color="var(--teal)"/>               
              </section>
            }
            soWhat={
              <section>
                 <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("teaching")}}>So what do I do now?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Approach the Bible with a learning heart and see God as an engaged teacher.  Consider the ultimate goal of becoming more like my ultimate teacher - Christ Jesus.  <br></br>Ask: What have I learned or how have I taken guidance from the Bible recently?</p>
                  <Quote scripture="A disciple is not above his teacher, but everyone when he is fully trained will be like his teacher." reference="Luke 6:40" color="var(--teal)"/>               
              </section>
            }
            prayer={
              <section>
                   <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("teaching")}}>Prayer</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Teach me, Lord!  Help me to listen to Your words with a humility that leads to thoughts and actions which glorify You.  Uncover my foolish thoughts which seem right to me, but which grieve You.</p>
                  <Quote scripture="The way of a fool is right in his own eyes, but a wise man listens to advice." reference="Proverbs 12:15" color="var(--teal)"/>               
              </section>
            }
            scienceAndHealth={
              <section>
                 <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("teaching")}}>How was Jesus such a good teacher?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Jesus in the flesh provided the best example of an effective human teacher.  Consider the following effective teacher qualities that Pearson Ed found from a survey of both teachers and students, along with how Jesus demonstrated each.</p>
                  <p className="is-size-6 leading-normal padded">1. Ability to develop trusting, productive relationships<br></br>- 11 of 12 disciples were willing to die (and most did) for their teacher <br></br>
                  2. Patient, caring, kind<br></br>     - All godly attributes<br></br>
                  3. Knowledge of learners<br></br>     - Omniscience of a Creator God covers this<br></br>
                  4. Dedication to teaching<br></br>     - Driven by the same love that sent Him to die on a cross<br></br>
                  5. Subject matter knowledge (tie)<br></br>    - See #3 above<br></br>
                  5. Engaging students in learning (tie)<br></br>    - Through His Spirit, Jesus teaches us through all we encounter in life </p>               
              </section>
            }
            attHistory={
              <section>
               <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("teaching")}}>Does Christianity really support learning?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Starting with the Jewish tradition and bolstered by Jesus’ teaching ministry, Christianity has consistently advocated for education - not only for the elite, but for the common man and woman. As a result, a 2016 Pew Center global study found that the two most educated religious groups around the world are Jews and Christians. </p>
                  <p className="is-size-6 leading-normal padded">In 9th century Europe, monasteries, convents and cathedrals operated virtually all schools and libraries.  By the 11th century, cathedral schools emerged as the primary centers for higher learning. The 15th century printing press made books widely available and the 16th century Reformers wanted all Church members to learn to read the Bible. Compulsory education for both boys and girls was introduced. In the new American colonies, 7 of the first 9 colonial colleges were founded by Christians including Harvard, Columbia, Brown, Rutgers and Yale.  In 1881, 80 percent of the colleges in the United States were church related and private (versus less than 20 percent today).</p>
                  <p className="is-size-6 leading-normal padded">As Europe colonized much of the world, it largely left the Church to establish the means to educate both colonists as well as indigenous peoples, building a foundation upon which evangelism could take place.  In some countries, the Church is still the main provider of education or significantly supplements government forms of education.</p>                
              </section>
            }
            liturgy={
              <section>
                 <section>
                    <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("teaching")}}>"Teach Me Thy Word, O Lord" - Benjamin Mansell Ramsey</h1>
                    </section>
                    <p className="is-size-6 leading-normal padded">"Teach me your way, O LORD, and lead me on a level path because of my enemies."" - Psalm 27:11</p>
                    <p className="is-size-6 leading-normal padded">"Teach me Thy way, O Lord,<br></br>
  Teach me Thy way,<br></br>
Thy gracious aid afford,<br></br>
  Teach me Thy way.<br></br>
Help me to walk aright,<br></br>
More by faith, less by sight,<br></br>
Lead me with heavnly light,<br></br>
  Teach me Thy way."" (First verse)</p>               
              </section>
            }
          />
        )
    }
}

export default withRouter(Teaching);