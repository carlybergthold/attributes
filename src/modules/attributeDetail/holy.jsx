import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom"
import '../../styles/attribute.css'
import Grid from '../../components/grid'
import Testimonial from '../../components/testimonial'
import Hero from '../../components/hero'
import AttributeSidebar from "../../components/attSidebar";

class Holy extends Component {

    componentDidMount() {
      window.scrollTo(0, 0);
    }

    render() {
        return(
            <body className="attPage">
            <Hero title="Holy" subtitle="To to be made worthy" img="girl.png" />
            <div className="container is-fullhd has-text-left relativeMaybe" id="attributeContainer">
              <aside>
                <section id="sidebar">
                  <AttributeSidebar />
                </section>
              </aside>

              <main>
                <div className="attSection" id="definition">
                  <section>
                  <h1 className="title has-text-primary tracking-wide padded">Holy means to be made worthy and separated from sin.
                  </h1></section>
                  <p className="is-size-6 leading-normal padded">We want to be found worthy in our relationships - as children, spouses/partners, friends and employees - worthy of acceptance, love and reward.  Most of us also seek to be worthy of God. 63% of adults believe in God and are absolutely certain of His existence.  26% more believe in God with some doubts.  Only 11% say they either don't believe in God or don't know. 72% believe in heaven (where "good" people are eternally rewarded) and 58% in hell (where people who led "bad" lives and die without being sorry are eternally punished). - 2014 Pew Research Center Religious Landscape Study</p>
                  <p className="is-size-6 leading-normal padded">If I do believe in a holy God, acting contrary to this God can give me feelings of guilt. This could crush me with a sense of unworthiness.  But, more likely, I will look around and compare my actions to those around me. As long as I am “better than most” (especially if I get to pick the criteria) God should let me into the “good” place when I die.</p>
                </div>

                <div className="attSection" id="emotion">
                <section>
                  <h1 className="title has-text-primary tracking-wide padded">How do I deal with my guilt against a Holy God?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">TFew people tremble with appropriate guilt before a Holy God.  Believers often wallow inappropriately in toxic shame (painful self-condemnation for sinful acts), with little assurance of God’s forgiveness.  Unbelievers may defiantly stand in brazen shamelessness, recognizing no accountability to God or others. My best response is to acknowledge wrongs and seek God’s forgiveness made possible by Christ’s death, and rest in His powerful freedom from guilt.</p>
                  <br></br>
                  <Testimonial quote="Blessed is the one whose transgression is forgiven, whose sin is covered. Blessed is the man against whom the LORD counts no iniquity, and in whose spirit there is no deceit. For when I kept silent, my bones wasted away through my groaning all day long. For day and night your hand was heavy upon me; my strength was dried up as by the heat of summer. Selah. I acknowledged my sin to you, and I did not cover my iniquity; I said, “I will confess my transgressions to the LORD,” and you forgave the iniquity of my sin." reference="Psalm 32:1-5" color="var(--teal)"/>
                </div>

                <div className="attSection" id="fear">
                <section>
                  <h1 className="title has-text-primary tracking-wide padded">How can anyone be good enough for Holy God?</h1>
                </section>
                  <p className="is-size-6 leading-normal padded">No one is good enough to earn a relationship with perfectly Holy God.  That is why God Himself sent Jesus to earth as a human - to live, die and be resurrected - in order to forgive me of my unworthiness and provide me with the needed righteousness to join with Him.  In Christ, I am worthy regardless of what I have done or will do.</p>
                  <br></br>
                  <Testimonial quote="If we confess our sins, He is faithful and just to forgive us and to cleanse us of all unrighteousness." reference="1 John 1:9" color="var(--teal)"/>
                </div>

                <div className="attSection" id="struggle">
                <section>
                  <h1 className="title has-text-primary tracking-wide padded">I’m as good as most people!</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">When I join in the comparison game, I can pick out specific criteria so I will come out better - and bask in shallow pride.  Or I can find the criteria where I am already insecure and wallow in unworthiness.  Either extreme is unhealthy and unhelpful.  My holiness must come from my faith in Christ and not anything else.</p>
                  <br></br>
                  <Testimonial quote="His (i.e. man's) own idea of sin is practically limited to what the world calls 'crime' Anything short of that, man palliates as 'defects', 'mistakes', 'infirmities', etc. And even where sin is owned at all, excuses and extenuations are made for it." reference="A.W. Pink" color="var(--teal)"/>
                </div>

                <div className="attSection" id="whoAmI">
                <section>
                  <h1 className="title has-text-primary tracking-wide padded">Only God is truly holy.</h1></section>
                  <p className="is-size-6 leading-normal padded">I may not even like to hear the word “Holy” because it only makes me feel more guilty.  No one can be made holy through self-effort - only God is able to make something or someone holy and fully worthy of Himself. Even when He makes me holy, however, I do not become a god, but rather a sacrifice to God, joining Him in His work and fellowship.</p>
                  <br></br>
                  <Testimonial quote="Who will not fear, O Lord, and glorify your name?  For you alone are holy." reference="Revelation 15:4a" color="var(--teal)"/>
                </div>

                <div className="attSection" id="biblicalChristianity">
                  <section>
                  <h1 className="title has-text-primary tracking-wide padded">Jesus is the way I become holy.</h1></section>
                  <p className="is-size-6 leading-normal padded">Jesus was not only holy (i.e. without sin), but He is the means by which man becomes worthy in the sight of Holy God.</p>
                  <Testimonial quote="God's holiness is best manifested at the cross. Wondrously and yet most solemnly does the atonement display God's infinite holiness and abhorrence of sin. How hateful sin must be to God for Him to punish it to its utmost deserts when it was imputed to His Son!" reference="A.W. Pink" color="var(--teal)"/>
                </div>

                <div className="attSection" id="soWhat">
                <section>
                  <h1 className="title has-text-primary tracking-wide padded">So what do I do now?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Recognize that any unworthiness I feel in this life can be traced back to my true unworthiness with God.  Seek God on His merciful terms alone - surrender in repentance and become holy through faith in Jesus Christ.  Ask: Just how holy is my life?</p>
                  <Testimonial quote="Remember that you were at that time separated from Christ, alienated from the commonwealth of Israel and strangers to the covenants of promise, having no hope and without God in the world." reference="Ephesians 2:12" color="var(--teal)"/>
                </div>

                  <div className="attSection" id="prayer">
                  <section>
                  <h1 className="title has-text-primary tracking-wide padded">Prayer</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Holy God, all my worth comes from you.  Without you, I abound in unholiness - sin.  But even in the midst of sin, you make me fully acceptable and worthy to be and do all you want me to do in this life.  Help me to always remember and act upon this truth.</p>
                  <Testimonial quote="I appeal to you therefore, brothers, by the mercies of God, to present your bodies as a living sacrifice, holy and acceptable to God, which is your spiritual worship." reference="Romans 12:1" color="var(--teal)"/>
                </div>

                <div className="attSection has-background-light" id="scienceAndHealth">
                <section>
                  <h1 className="title has-text-primary tracking-wide padded">Holiness is like healthiness.</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Moving towards holiness (or away from sin) improves our overall healthiness as a person.  Sin is what our Creator God knows is not for our best.  However, it is something we routinely either choose and/or involuntarily suffer from its negative consequences. </p>
                  <p className="is-size-6 leading-normal padded">“The English word ‘holy’ dates back to at least the 11th century with the Old English word hālig, an adjective derived from hāl meaning ‘whole’ and used to mean ‘uninjured, sound, healthy, entire, complete’. The Scottish hale (health, happiness and wholeness) is the most complete modern form of this Old English root. " - Wikipedia</p>
                  <p className="is-size-6 leading-normal padded">“Healthy life expectancy (HALE) is a form of health expectancy that applies disability weights to health states to compute the equivalent number of years of good health that a newborn can expect.  Overall, global HALE at birth in 2015 for males and females combined was 63.1 years, 8.3 years lower than total life expectancy at birth. In other words, poor health resulted in a loss of nearly 8 years of healthy life, on average globally. Global HALE at birth for females was only 3 years greater than that for males. In comparison, female life expectancy at birth was almost 5 years higher than that for males.” - World Health Organization</p>
                </div>

                <div className="attSection" id="history">
                <section>
                  <h1 className="title has-text-primary tracking-wide padded">The Jewish nation of Israel was created by God in order to receive God's word, be separate from those around it, and represent God to the world. </h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Israel today remains quite separate from all those nearby, but the Christian faith is found in only 2% of its population.  However, the two largest religions of the world (Christianity and Islam), today covering over half the world's population, have their roots in this tiny nation.  "And I will make of you a great nation, and I will bless you and make your name great, so that you will be a blessing. I will bless those who bless you, and him who dishonors you I will curse, and in you all the families of the earth shall be blessed.” - Genesis 12:2-3</p>
                  <p className="is-size-6 leading-normal padded">"Israel is the very embodiment of Jewish continuity: It is the only nation on earth that inhabits the same land, bears the same name, speaks the same language, and worships the same God that it did 3,000 years ago. You dig the soil and you find pottery from Davidic times, coins from Bar Kokhba, and 2,000-year-old scrolls written in a script remarkably like the one that today advertises ice cream at the corner candy store." - Quote from Charles Krauthammer - The Weekly Standard, May 11, 1998</p><p className="is-size-6 leading-normal padded">A day after the declaration of independence of the State of Israel in 1948, armies of five Arab countries, Egypt, Syria, Transjordan, Lebanon and Iraq, invaded Israel. This marked the beginning of the War of Independence. Arab states have jointly waged four full scale wars against Israel:

1948 War of Independence
1956 Sinai War
1967 Six Day War
1973 Yom Kippur War

Despite the numerical superiority of the Arab armies, Israel defended itself each time and won. After each war Israeli army withdrew from most of the areas it captured. This is unprecedented in world history and shows Israel's willingness to reach peace even at the risk of fighting for its very existence each time anew.</p>
                </div>

                <div className="attSection" id="liturgy" >
                <section>
                    <h1 className="title has-text-primary tracking-wide padded">"Holy Holy Holy" - Reginald Heber</h1>
                    </section>
                    <p className="is-size-6 leading-normal padded">
                      "Holy, Holy, Holy!  Though the darkness hide Thee,<br></br>
                      Though the eye of sinful man, Thy glory may not see:<br></br>
                      Only Thou art holy, there is none beside Thee,<br></br>
                      Perfect in power in love,and purity." - Third verse (of four)</p>
                </div>

            </main>
            </div>
          </body>
        )
    }

}

export default withRouter(Holy);