import React, { Component } from "react";
import { withRouter } from "react-router-dom"
import '../../styles/attribute.css'
import Quote from '../../components/quote'
import styleMethods from "../../methods/styleMethods";
import BaseAttributeDetail from '../../modules/attributeDetail/baseAttributeDetail';

class Wrathful extends Component {

    render() {
        return(
          <BaseAttributeDetail
            title="Wrathful"
            subtitle="A just and loving insistence on holiness and justice"
            definition={
              <section>
                  <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("wrathful")}}>Wrathful means to act aggressively in love to eliminate injustice and restore holiness.
                  </h1></section>
                  <p className="is-size-6 leading-normal padded">Wrath today is a seldom-used word; anger is used much more often.  Wrath may include anger, but it is a justified anger rather than the selfish anger we often witness (or express).   We may feel this just anger (wrath) when we are wronged and then act to protect others from the same wrong.  We may also rightly fear wrath when we knowingly violate a just law or rule. Without an insistence on true justice, chaos and evil reigns.</p>
                  <p className="is-size-6 leading-normal padded">Justice or wrath designed and executed by humans may be imperfect, but the goodness in a working justice system can be appreciated most by observing a system that is not working.  The excerpts below are from the US State Department 2022 Human Rights Report on Haiti:  “Significant human rights issues included credible reports of: unlawful or arbitrary killings; torture or cruel, inhuman, or degrading treatment or punishment by government agents; harsh and life-threatening prison conditions; arbitrary arrest and detention; serious problems with the independence of the judiciary; ….inability of citizens to change their government peacefully through free and fair elections…The government rarely took steps to identify, prosecute, and punish government and law enforcement officials who committed abuses or engaged in corruption, and civil society groups alleged widespread impunity regarding these acts.  Gang violence continued at high rates…”</p>
                  <p className="is-size-6 leading-normal padded">Haitians clearly feel the harsh impact of rampant injustice, allowed by a lack of controlled and effective wrath within its government, making it also very difficult for citizens to trust and obey their authorities.  In fact, such a government will often be viewed with contempt.   Although obedience driven solely by fear of punishment can work temporarily, it is not nearly as effective as obedience which is motivated by the perceived love or rightness of the rule-making authority.</p>
              </section>
            }
            emotion={
              <section>
                <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("wrathful")}}>What is the difference between wrath and contempt?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">While wrath is driven by love and protective justice, contempt is driven by hateful judgment.  When I have contempt for another, I am repelled by them.  I may show downward contempt for those socially below me (i.e. they are lazy or lawless), upward contempt for those socially above me (i.e. they are snobs who don’t deserve their million dollar home), or I may select my very own judgment criteria.  Having contempt for a spouse or partner is the clearest indicator that the relationship will struggle without change, since it shows a total lack of compassion and empathy, often presented as criticism, condemnation, humiliation, and disrespect.</p>
                  <p className="is-size-6 leading-normal padded">One who shows contempt for God by not believing in Him or by refusing to accept Him for who He reveals Himself to be is rejecting a relationship with Him.  God’s patient compassion restrains His full wrath throughout a person’s lifetime, but eventually His justice requires wrath to be unleashed on those who remain contemptible of Him, resulting in their eternal condemnation.  For those who accept and love God, this same wrath has already been unleashed - not on them, but on God’s Son, Jesus, at the cross, resulting in their eternal lives lived in God's loving presence.</p>
                  <br></br>
                  <Quote scripture="Yet he, being compassionate, atoned for their (i.e. Israel’s) iniquity and did not destroy them; he restrained his anger often and did not stir up all his wrath. He remembered that they were but flesh, a wind that passes and comes not again.   ...Yet they tested and rebelled against the Most High God and did not keep his testimonies, but turned away and acted treacherously like their fathers; they twisted like a deceitful bow. For they provoked him to anger with their high places; they moved him to jealousy with their idols. When God heard, he was full of wrath, and he utterly rejected Israel." reference="Psalm 78:38-39,56-59"/>                
              </section>
            }
            fear={
              <section>
                <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("wrathful")}}>I fear being exposed for who I really am.</h1>
                </section>
                  <p className="is-size-6 leading-normal padded">It may be in the form of imposter syndrome, where I doubt my own competence on the job and worry that I may be found to be a fraud, despite my accomplishments to the contrary.  It may be that I know my own failings and offenses and have hidden them successfully to this point to avoid appropriate consequences.</p>
                  <p className="is-size-6 leading-normal padded">Truth has a way of coming out over time, eventually revealing who I am and what I have done.  God’s final judgment spares no one this exposure, though mercifully provides a remedy to those who trust in Him.</p>
                  <br></br>
                  <Quote scripture="The end of the matter; all has been heard. Fear God and keep his commandments, for this is the whole duty of man. For God will bring every deed into judgment, with every secret thing, whether good or evil." reference="Ecclesiastes 12:13-14" color="var(--teal)"/>                
              </section>
            }
            struggle={
              <section>
                 <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("wrathful")}}>How can I ever satisfy such a demanding and wrathful God?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">There are many ways to address my imperfections.  I can compare myself to others who seem worse than me.  I can blame my creator for design deficiencies in me or for being too demanding.  I can falsely blame others for forcing the worst of me out.  I can deceive myself into believing that all is well with me.  Or I can deny that a God with perfect wrath even exists.</p>
                  <p className="is-size-6 leading-normal padded">None of these satisfies God’s wrath.  My struggle to please God simply points out the need for Jesus, my only God-given remedy.</p>
                  <br></br>
                  <Quote scripture="If we say we have no sin, we deceive ourselves, and the truth is not in us." reference="1 John 1:8" />               
              </section>
            }
            whoAmI={
              <section>
                 <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("wrathful")}}>Only God can have perfect wrath.</h1>
                </section>
                  <p className="is-size-6 leading-normal padded">Humans always implement wrath imperfectly - from biases, selfishness, neglect, weariness and more.  Unlike man’s justice, our omniscient God never accidentally punishes the innocent. His wisdom ensures the punishment fits the act and is perfectly timed. His omnipotence ensures the proper punishment is executed - with love!</p>
                  <br></br>
                  <Quote scripture="Yet he, being compassionate, atoned for their iniquity and did not destroy them; he restrained his anger often and did not stir up all his wrath." reference="Psalm 78:38" />               
              </section>
            }
            biblicalChristianity={
              <section>
                   <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("wrathful")}}>Jesus wrathfully cleared the temple.</h1></section>
                  <p className="is-size-6 leading-normal padded">Jesus cleared the temple because the corrupt market-in-the-temple practice drove people away from God rather than toward Him in worship as intended.  God’s wrath is a vital element to carry out perfect justice and protective love for those who believe and trust in Him.  Christ lovingly accepted what only God could do to Him by undeservedly receiving the wrath intended for me and replacing it with His righteousness.</p>
                  <Quote scripture="In the temple he found those who were selling oxen and sheep and pigeons, and the money-changers sitting there. And making a whip of cords, he drove them all out of the temple, with the sheep and oxen. And he poured out the coins of the money-changers and overturned their tables. And he told those who sold the pigeons, ‘Take these things away; do not make my Father’s house a house of trade.’ " reference="John 2:14-16" color="var(--teal)"/>               
              </section>
            }
            soWhat={
              <section>
                 <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("wrathful")}}>So what do I do now?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Trust only in Jesus' work on the cross to fully satisfy all God's wrath for the sin in my life - past, present and future. Thank Christ Jesus for taking on God's wrath meant for me and therefore delivering me from His wrath. Ask God to reveal what is sinful in my life and ask Him for help to obey.<br></br>Ask: What do I believe about God’s wrath and my own sin?</p>
                  <Quote scripture="But God commendeth his love toward us, in that, while we were yet sinners, Christ died for us. Much more then, being now justified by his blood, we shall be saved from wrath through him." reference="Romans 5:8-9" color="var(--teal)"/>               
              </section>
            }
            prayer={
              <section>
                    <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("wrathful")}}>Prayer</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Lord, forgive me for seeing Your wrath at times as harsh and unloving.  It is born in love and protects people, especially those who love You.  Help me to see the goodness of Your wrath and the ultimate doom of all who do what is right only in their own eyes.</p>
                  <Quote scripture="In those days there was no king in Israel. Everyone did what was right in his own eyes." reference="Judges 21:25" color="var(--teal)"/>              
              </section>
            }
            scienceAndHealth={
              <section>
                 <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("wrathful")}}>Can anger ever be a good thing?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">A holy and just God will lovingly insist upon appropriate wrath to remedy all injustice and unholiness. As J. I. Packer so clearly explains in Knowing God, God is not just unless he inflicts upon all sin and wrongdoing the penalty it deserves. (Keith Getty in The Gospel Coalition, Dec 2013)  God’s patient wrath first seeks to communicate what behavior is needed - this is His law, which man does not (and cannot) fully heed. However, God’s loving wrath provides a just solution to the dilemma - His own Son absorbing the wrath on behalf of those who have faith in God’s remedy.</p>
                  <p className="is-size-6 leading-normal padded">My own anger tells me what is truly important to me.  While it can often be a very destructive force, it can also be the start of constructive progress toward where God wants me to be.</p>
                  <p className="is-size-6 leading-normal padded">“Anger gets a bad rap partly because it is often erroneously associated with violence, experts note… Constructive anger expression usually involves both people, not just the angry party... the angry person expresses his or her anger to the target, and the target hears the person and reacts appropriately… Anger can be constructive when people frame it in terms of solving a mutual problem rather than as a chance to vent their feelings.” - Mar’03 APA article “When Anger’s A Plus” (God's wisdom shining though a secular source)</p>               
              </section>
            }
            attHistory={
              <section>
                 <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("wrathful")}}>How is wrath delegated to governments?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">God delegates His authority to carry out His wrath to governments, all of which He has established.  How man (through governmental authority) has chosen to carry this out ranges widely, with the most severe form being capital punishment.</p>
                  <p className="is-size-6 leading-normal padded">Wikipedia lists only 8 forms of capital punishment in use today across the world - hanging, shooting, lethal injection, electrocution, gas inhalation, beheading, stoning and crucifixion. Ancient methods were much more varied - crushing by elephant, tearing apart by horses or camels, being buried alive, flaying, slow slicing, dismemberment, drowning and many more. Though only ~1/3 of all countries carry out capital punishment today, these nations include ~60% of all people.</p>               
              </section>
            }
            liturgy={
              <section>
                 <section>
                    <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("wrathful")}}>“In Christ Alone” - Townend and Getty</h1>
                    </section>
                    <p className="is-size-6 leading-normal padded">Concerns about the lyrics in this song that proclaim '”the wrath of God was satisfied”' caused the song to be dropped from some hymnals. The issue was primarily with the word 'satisfied' in regard to 'wrath.' "The original lyrics say that 'on that cross, as Jesus died, the wrath of God was satisfied.' The Presbyterian Committee on Congregational Song wanted to substitute the words, 'the love of God was magnified.' " - USA Today, 2013<br></br>
                    But the authors know it is important to remember that accurate lyrics do matter. Getty said, “However, we believe altering the lyrics would remove an essential part of the gospel story as explained throughout Scripture. The main thread of what we see revealed throughout the Old and New Testament is the need for man to be made right with God. The provided path toward reconciliation came through Christ’s predetermined and perfect sacrifice on the cross, satisfying God’s wrath once and for all.”  (The Gospel Coalition, Dec 2013)  
God's love must be accurately considered as including wrath.<br></br></p>
                    <p className="is-size-6 leading-normal padded">"In Christ alone, who took on flesh<br></br>
                    Fullness of God in helpless babe<br></br>
                    This gift of love and righteousness<br></br>
                    Scorned by the ones He came to save<br></br>
                    'Til on that cross as Jesus died<br></br>
                    The wrath of God was satisfied<br></br>
                    For every sin on Him was laid<br></br>
                    Here in the death of Christ I live." - 2nd verse</p>               
              </section>
            }
          />
        )
    }

}

export default withRouter(Wrathful);