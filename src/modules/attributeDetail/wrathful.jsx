import React, { Component } from "react";
import { withRouter } from "react-router-dom"
import '../../styles/attribute.css'
import Hero from '../../components/hero'
import AttributeSidebar from "../../components/attSidebar";
import Quote from '../../components/quote'
import helperMethods from "../../methods/helperMethods";

class Wrathful extends Component {

    // componentDidMount() {
    //   window.scrollTo(0, 0);
    // }

    render() {
        return(
            <body className="attPage">
            <Hero title="Wrathful" subtitle="A just and loving insistence on holiness and justice" icon="wrathful" />
            <div className="container is-fullhd has-text-left relativeMaybe" id="attributeContainer">
              <aside>
                <section id="sidebar">
                  <AttributeSidebar />
                </section>
              </aside>

              <main>
                <div className="attSection" id="definition">
                  <section>
                  <h1 className="title tracking-wide padded" style={{color: helperMethods.getAttributeColor("wrathful")}}>Wrathful means to have a just and loving insistence on holiness or justice, leading to appropriate action to restore justice and holiness.
                  </h1></section>
                  <p className="is-size-6 leading-normal padded">Wrath today is a seldom-used word - anger is used much more often.  Wrath may include anger, but a justified anger rather than a selfish anger.   We may feel this pious anger when we are wronged and then act to protect others from the same wrong.  We may also rightly fear wrath when we knowingly violate a just law or rule. Without this material insistence on justice, chaos reigns.</p>
                  <p className="is-size-6 leading-normal padded">Justice or wrath designed and executed by humans will all have problems, but the good in working justice systems can be appreciated most by observing a system that is not working.  The excerpt below is from a Wikiversity article about Haiti’s justice system: “There is no data available for crime. As for public opinion of the justice system, there is no trust in the government. It is widely believed that someone can be bribed and paid for leniency or acquittal. There is no justice since everyone is only looking out for their own interests…Haiti has a long history of human rights violation. Political killings, kidnapping, torture, and unlawful incarceration are common practices. Lengthy pretrial detention is also a problem. The number of Haitian citizens imprison without trial is staggering. Lawyers are intimidated from defending their clients through intimidation and violence.”</p>
                  <p className="is-size-6 leading-normal padded">Justice or obedience driven by fear of punishment can be effective, but it is not nearly as divine as obedience motivated by love.  An inspiring kind of love like this can overcome my fear of being exposed for who I am and how I fail.  And it is the defining difference between  wrath and contempt.</p>
                </div>

                <div className="attSection" id="emotion">
                <section>
                  <h1 className="title tracking-wide padded" style={{color: helperMethods.getAttributeColor("wrathful")}}>What is the difference between wrath and contempt?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">While wrath is driven by love and protective justice, contempt is driven by hateful judgment.  When I have contempt for another, I am repelled by them.  I may show downward contempt for those socially below me (i.e. they are lazy or lawless), upward contempt (i.e. they are snobs who don’t deserve their million dollar home), or I may select my very own judgment criteria.  Having contempt for a spouse or partner is the clearest indicator that the relationship will not survive since it shows a total lack of compassion and empathy, often presented as criticism, correction, humiliation, and disrespect.</p>
                  <p className="is-size-6 leading-normal padded">One who shows contempt for God by not believing in Him or by refusing to accept Him for who He reveals Himself to be is rejecting a relationship with Him.  God’s patient compassion restrains His full wrath throughout a person’s lifetime, but eventually His justice requires wrath to be unleashed on those who remain contemptible of Him.  For those who accept and love God, this same wrath has already been unleashed - not on them, but on God’s Son, Jesus, at the cross.</p>
                  <br></br>
                  <Quote scripture="Yet he, being compassionate, atoned for their (i.e. Israel’s) iniquity and did not destroy them; he restrained his anger often and did not stir up all his wrath. He remembered that they were but flesh, a wind that passes and comes not again…
                   <br></br>
                  .….Yet they tested and rebelled against the Most High God and did not keep his testimonies, but turned away and acted treacherously like their fathers; they twisted like a deceitful bow. For they provoked him to anger with their high places; they moved him to jealousy with their idols. When God heard, he was full of wrath, and he utterly rejected Israel." reference="Psalm 78:38-39,56-59"/>
                </div>

                <div className="attSection" id="fear">
                <section>
                  <h1 className="title tracking-wide padded" style={{color: helperMethods.getAttributeColor("wrathful")}}>I fear being exposed for who I really am.</h1>
                </section>
                  <p className="is-size-6 leading-normal padded">It may be in the form of imposter syndrome, where I doubt my own competence on the job and worry that I may be found to be a fraud, despite my accomplishments to the contrary.  It may be that I know my own failings and offenses and have hidden them successfully to this point to avoid appropriate consequences.</p>
                  <p className="is-size-6 leading-normal padded">Truth has a way of coming out over time, eventually revealing who I am and what I have done.  God’s final judgment spares no one this exposure, though mercifully provides a remedy to those who trust in Him.</p>
                  <br></br>
                  <Quote scripture="The end of the matter; all has been heard. Fear God and keep his commandments, for this is the whole duty of man. For God will bring every deed into judgment, with every secret thing, whether good or evil." reference="Ecclesiastes 12:13-14" color="var(--teal)"/>
                </div>

                <div className="attSection" id="struggle">
                <section>
                  <h1 className="title tracking-wide padded" style={{color: helperMethods.getAttributeColor("wrathful")}}>How can I ever satisfy such a demanding and wrathful God?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">There are many ways to address my imperfections.  I can find others who are worse than me.  I can blame my creator for design deficiencies or for being too demanding.  I can blame others who force the worst of me out.  I can deceive myself into believing that all is well with me.  Or I can deny that a God with perfect wrath even exists.</p>
                  <p className="is-size-6 leading-normal padded">None of these satisfies God’s wrath.  My struggle to please God simply points out the need for Jesus, my God-given remedy.</p>
                  <br></br>
                  <Quote scripture="If we say we have no sin, we deceive ourselves, and the truth is not in us." reference="1 John 1:8" />
                </div>

                <div className="attSection" id="whoAmI">
                <section>
                  <h1 className="title tracking-wide padded" style={{color: helperMethods.getAttributeColor("wrathful")}}>Only God can have perfect wrath.</h1>
                </section>
                  <p className="is-size-6 leading-normal padded">His omniscience never accidentally punishes the innocent.  His wisdom ensures the punishment fits the act and is perfectly timed. His omnipotence ensures the proper punishment is executed - with love!  Humans always implement wrath imperfectly - from biases, selfishness, neglect, weariness and more.</p>
                  <br></br>
                  <Quote scripture="Yet he, being compassionate, atoned for their iniquity and did not destroy them; he restrained his anger often and did not stir up all his wrath." reference="Psalm 78:38" />
                </div>

                <div className="attSection" id="biblicalChristianity">
                  <section>
                  <h1 className="title tracking-wide padded" style={{color: helperMethods.getAttributeColor("wrathful")}}>Jesus wrathfully cleared the temple.</h1></section>
                  <p className="is-size-6 leading-normal padded">Jesus cleared the temple because the market-in-the-temple practice drove people away from God rather than toward Him in worship as intended.  God’s wrath is a vital element to carry out perfect justice and protective love for those who believe and trust in Him.  Christ, as only God could do, undeservedly received the wrath intended for me and replaced it with His righteousness.</p>
                  <Quote scripture="In the temple he found those who were selling oxen and sheep and pigeons, and the money-changers sitting there. And making a whip of cords, he drove them all out of the temple, with the sheep and oxen. And he poured out the coins of the money-changers and overturned their tables. And he told those who sold the pigeons, ‘Take these things away; do not make my Father’s house a house of trade.’ " reference="John 2:14-16" color="var(--teal)"/>
                </div>

                <div className="attSection" id="soWhat">
                <section>
                  <h1 className="title tracking-wide padded" style={{color: helperMethods.getAttributeColor("wrathful")}}>So what do I do now?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Trust only in Jesus' work on the cross to fully satisfy all God's wrath for the sin in my life - past, present and future. Thank Christ Jesus for delivering me from this wrath. Ask God to reveal what is sinful in my life and ask Him for help to obey.<br></br>Ask: What do I believe about God’s wrath and my own sin?</p>
                  <Quote scripture="But God commendeth his love toward us, in that, while we were yet sinners, Christ died for us. Much more then, being now justified by his blood, we shall be saved from wrath through him." reference="Romans 5:8-9" color="var(--teal)"/>
                </div>

                  <div className="attSection" id="prayer">
                  <section>
                  <h1 className="title tracking-wide padded" style={{color: helperMethods.getAttributeColor("wrathful")}}>Prayer</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Lord, forgive me for seeing Your wrath at times as harsh and unloving.  It is born in love and protects those who love You.  Help me to see the goodness of Your wrath and the ultimate doom of all who do what is right only in their own eyes.</p>
                  <Quote scripture="In those days there was no king in Israel. Everyone did what was right in his own eyes." reference="Judges 21:25" color="var(--teal)"/>
                </div>

                <div className="attSection has-background-light" id="scienceAndHealth">
                <section>
                  <h1 className="title tracking-wide padded" style={{color: helperMethods.getAttributeColor("wrathful")}}>Can anger ever be a good thing?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">A holy and just God will lovingly insist upon appropriate wrath to  remedy all injustice and unholiness.   God’s patient wrath first seeks to communicate what behavior is needed - this is His law, which man does not (and cannot) fully heed.  However, God’s loving wrath provides a wrathful solution to the dilemma - His own Son absorbing the wrath on behalf of those who have faith in the remedy.</p>
                  <p className="is-size-6 leading-normal padded">My own anger tells me what is truly important to me.  While it can often be a very destructive force, it can also be the start of constructive progress toward where we need to be.</p>
                  <p className="is-size-6 leading-normal padded">“Anger gets a bad rap partly because it is often erroneously associated with violence, experts note….But a number of studies show that in the places where anger is usually played out--especially on the domestic front--it is often beneficial….angry episodes helped strengthen relationships about half the time…. Several factors can make the difference between constructive and destructive anger, say psychologists who study and treat everyday anger. For one, constructive anger expression usually involves both people, not just the angry party. In the best-case scenario, the angry person expresses his or her anger to the target, and the target hears the person and reacts appropriately… Relatedly, anger can be constructive when people frame it in terms of solving a mutual problem rather than as a chance to vent their feelings.” - Mar’03 APA article “When Anger’s A Plus”</p>
                </div>

                <div className="attSection" id="history">
                <section>
                  <h1 className="title tracking-wide padded" style={{color: helperMethods.getAttributeColor("wrathful")}}>How is wrath delegated to governments?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">God delegates His authority to carry out His wrath to governments, all of which He has established.  How man (through governmental authority) has chosen to carry this out ranges widely, with the most severe form being capital punishment.</p>
                  <p className="is-size-6 leading-normal padded">Wikipedia lists only 8 forms of capital punishment in use today across the world - hanging, shooting, lethal injection, electrocution, gas inhalation, beheading, stoning and crucifixion. Ancient methods were much more varied - crushing by elephant, tearing apart by horses or camels, being buried alive, flaying, slow slicing, dismemberment, drowning and many more. Though only ~1/3 of all countries carry out capital punishment today, these nations include ~60% of all people.</p>
                </div>

                <div className="attSection" id="liturgy" >
                <section>
                    <h1 className="title tracking-wide padded" style={{color: helperMethods.getAttributeColor("wrathful")}}>“In Christ Alone” - Townend and Getty</h1>
                    </section>
                    <p className="is-size-6 leading-normal padded">After concerns were raised, the lyrics that describe 'the wrath of God' caused the song to be dropped from some hymnals. The issue was primarily with the word 'satisfied' vs 'wrath', but it is important to remember that lyrics do matter. Essentially God's wrath and love are very much fused together:<br></br>
                    "The original lyrics say that 'on that cross, as Jesus died, the wrath of God was satisfied.' The Presbyterian Committee on Congregational Song wanted to substitute the words, 'the love of God was magnified.' " - USA Today, 2013<br></br></p>
                    <p className="is-size-6 leading-normal padded">"In Christ alone, who took on flesh<br></br>
                    Fullness of God in helpless babe<br></br>
                    This gift of love and righteousness<br></br>
                    Scorned by the ones He came to save<br></br>
                    'Til on that cross as Jesus died<br></br>
                    The wrath of God was satisfied<br></br>
                    For every sin on Him was laid<br></br>
                    Here in the death of Christ I live." - 2nd verse</p>
                </div>

            </main>
            </div>
          </body>
        )
    }

}

export default withRouter(Wrathful);