import React, { Component } from "react";
import { withRouter } from "react-router-dom"
import '../../styles/attribute.css'
import Quote from '../../components/quote'
import styleMethods from "../../methods/styleMethods";
import BaseAttributeDetail from '../../modules/attributeDetail/baseAttributeDetail';

class Patient extends Component {

    render() {
        return(
          <BaseAttributeDetail
            title="Patient"
            subtitle="To bear with suffering caused by others"
            definition={
              <section>
                  <section>
                  <h1 className="title tracking-wide padded" style={{color: styleMethods.getAttributeColor("patient")}}>Patient means to bear with suffering caused by others.
                  </h1></section>
                  <p className="is-size-6 leading-normal padded">We expect patience from others and want to be patient toward others.  We notice more when patience is missing rather than when it is shared.  It seems a bit unfair to be patient when suffering from the hands of others, until we realize we need patience from others as much as they need it from us.</p>
                  <p className="is-size-6 leading-normal padded">We are an impatient people who recognize the abiding value of patience.  The following excerpt from Psychology Today, 1/3/17 issue (God's wisdom shining though a secular source) clarifies some of the misunderstandings of patience:</p>
                  <p className="is-size-6 leading-normal padded">“The world does not see patience as a position of strength but rather as a position of weakness, of wanting, of lack.  Patience allows you to take back control over the capricious and unstable world and plant that control firmly within yourself.  Patience does not give you the power over circumstances; patience allows you to control yourself in the midst of circumstances. 
                  Patience is not apathy or surrender.  Being patient means accepting both how you feel about a given situation and what you can realistically do about it. 
                  Patience is not static.  It is the act of preparing for the new day to come. 
                  Patience is optimistic expectation.  The engine of patience is hope.  
                  Patience is based on the end, not the beginning.  It gives us the endurance to see it through to the better end.      
                  Patience is based on the long view - out over the horizon, around the bend, through the hills and valleys of life.  When you are assured of the eventual, you can patiently endure the immediate. 
                  Patience is a wise response to life.  You could go around getting angry and engaging in battle over every slight and unfair circumstance, but remaining in full battle mode produces incredible stress, alienates the people around you, and distorts your ability to enjoy and appreciate life.
                  Patience is an acquired trait - something we need to grow into.”</p>
                  <p className="is-size-6 leading-normal padded">When I become impatient, I can turn inward and wallow in self-pity or look outward and become annoyed with the perceived sponsor of my impatience.  When my current difficulty or trouble seems like it will never end, I have already lost proper perspective.  Or when I am always worried that another shoe is soon to drop, I have lost perspective as well - because, well, another shoe WILL drop!</p>
              </section>
            }
            emotion={
              <section>
                 <section>
                  <h1 className="title has-text-prpmaryary tracking-wide padded" style={{color: styleMethods.getAttributeColor("patient")}}>Would I rather seek pity or be annoyed?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">As I suffer, I can move either to self-pity or annoyance.  Self-pity overly focuses on myself; annoyance seeks to blame the apparent source of my troubles.  Both of these move my focus away from God and toward the object of my impatience.  In extreme suffering, Jesus spoke the first words of this Psalm with a raw  emotion much beyond self pity or mere annoyance.  Yet He returned to trusting His Father, praising God even when the circumstances made it next to impossible.  My troubles belong to the Lord - I can take them to Him, knowing that He is good and has the power to take care of the situation.</p>
                  <br></br>
                  <Quote scripture="My God, my God, why have you forsaken me? Why are you so far from saving me, from the words of my groaning?  O my God, I cry by day, but you do not answer, and by night, but I find no rest...But you, O LORD, do not be far off!  O you my help, come quickly to my aid!  Deliver my soul from the sword, my precious life from the power of the dog!  Save me from the mouth of the lion!  You have rescued me from the horns of the wild oxen!  I will tell of your name to my brothers; in the midst of the congregation I will praise you: You who fear the LORD, praise him!  All you offspring of Jacob, glorify him, and stand in awe of him, all you offspring of Israel!  For he has not despised or abhorred the affliction of the afflicted, and he has not hidden his face from him, but has heard, when he cried to him." reference="Psalm 22:1-2,19-24" color="var(--teal)"/>               
              </section>
            }
            fear={
              <section>
                 <section>
                  <h1 className="title has-text-prpmaryary tracking-wide padded" style={{color: styleMethods.getAttributeColor("patient")}}>I worry about what trouble may come my way.</h1>
                </section>
                  <p className="is-size-6 leading-normal padded">“We take the good things for granted and blow up the problems. As a consequence, we tend to fall prey to the petty concerns and annoyances in our lives, letting them determine our well-being….A growing number of studies inspired by Acceptance and Commitment Therapy and  Mindfulness are showing that - rather than resisting them - embracing difficult situations (e.g. pain or dependency due to illness) increases well-being. We can either choose to let the negative experiences we encounter bring us down, or we can choose to embrace them and thereby rise above them…..Learn from it….Appreciate what you do have….Use it to help others….” - Psychology Today, 6/29/15.</p>
                  <p className="is-size-6 leading-normal padded">Patient hope is powerful.  It realizes all troubles eventually leave and, when they do, can lift me up more than a large dose of happy news.  Ecclesiastes 7:1 says our day of death is actually better than the day of our birth.  This makes sense only by comparing the joyful eternal reality of heaven, where there is no evil, versus our temporal life where the mixture of happiness and hardship never ends because evil abounds.</p>
                  <br></br>
                  <Quote scripture="Better is the end of a thing than its beginning, and the patient in spirit is better than the proud in spirit." reference="Ecclesiastes 7:8" color="var(--teal)"/>               
              </section>
            }
            struggle={
              <section>
                 <section>
                  <h1 className="title has-text-prpmaryary tracking-wide padded" style={{color: styleMethods.getAttributeColor("patient")}}>But it seems my hardship will never end!</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Perspective always matters while I wait.  Gaining long-term perspective (“until the coming of the Lord”) and a present perspective (“I will ponder God’s work”) will help me through a situation, even if I see no end to it.</p>
                  <p className="is-size-6 leading-normal padded">David Guzik (Blue Letter Bible commentary) notes how a farmer is patient:<br></br>
                  · He waits with a reasonable hope and expectation of reward.<br></br>
                  · He waits a long time.<br></br>
                  · He waits working all the while.<br></br>
                  · He waits depending on things out of his own power; with his eye on the heavens.<br></br>
                  · He waits despite changing circumstances and many uncertainties.<br></br>
                  · He waits encouraged by the value of the harvest.<br></br>
                  · He waits encouraged by the work and harvest of others.<br></br>
                  · He waits because he really has no other option.<br></br>
                  · He waits because it does no good to give up.<br></br>
                  · He waits aware of how the seasons work.<br></br>
                  · He waits because as time goes on, it becomes more important and not less to do so.</p>
                  <br></br>
                  <p className="is-size-6 leading-normal padded">Mr. Guzik and Psychology Today both agree that the tenacity of our patience depends on what we are looking toward. When our hope is fixed on an eternal, perfect life in heaven with Jesus, our patience can abound.</p>
                  <br></br>
                  <Quote scripture="Be patient, therefore, brothers, until the coming of the Lord. See how the farmer waits for the precious fruit of the earth, being patient about it, until it receives the early and the late rains." reference="James 5:7" color="var(--teal)"/>               
              </section>
            }
            whoAmI={
              <section>
                 <section>
                  <h1 className="title has-text-prpmaryary tracking-wide padded" style={{color: styleMethods.getAttributeColor("patient")}}>Only God is always patient.</h1></section>
                  <p className="is-size-6 leading-normal padded">God is patient while I am often impatient.  Most people might envy God, thinking He has no need or use for patience.  He can have instant gratification if He wanted!  But God deliberately bears with His creation as He planned from the beginning, always working toward my greatest good which includes patience.</p>
                  <br></br>
                  <Quote scripture="Be still before the LORD and wait patiently for him;" reference="Psalm 37:7a" color="var(--teal)"/>               
              </section>
            }
            biblicalChristianity={
              <section>
                   <section>
                  <h1 className="title has-text-prpmaryary tracking-wide padded" style={{color: styleMethods.getAttributeColor("patient")}}>Jesus patiently gave of Himself to help others know Him more.</h1></section>
                  <p className="is-size-6 leading-normal padded">God meticulously planned the cross since before creation (foreseeing Adam’s and our sin), and is even now patiently waiting for people to respond to the message of the Cross before He returns.</p><br></br>
                  <Quote scripture="The Lord is not slow to fulfill his promise as some count slowness, but is patient toward you, not wishing that any should perish, but that all should reach repentance." reference="2 Peter 3:9" color="var(--teal)"/>               
              </section>
            }
            soWhat={
              <section>
                 <section>
                  <h1 className="title has-text-prpmaryary tracking-wide padded" style={{color: styleMethods.getAttributeColor("patient")}}>So what do I do now?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Be slow to anger, even with true injustices, especially given others’ need to be patient with me and knowing that our just God will deal with all injustice in His timing.  Be content, even joyful, in the present hard circumstances, knowing God loves you and will use this to refine you.  Accept as God's timing whatever is outside of my control or influence, knowing He is in control. God's patience is often expressed as 'slow to anger' - Ex 34:6, Nu 14:18, Psalm 103:8 & more.   <br></br>Ask: What resulted from my most recent impatience?</p><br></br>
                  <Quote scripture="Not only that, but we rejoice in our sufferings, knowing that suffering produces endurance, and endurance produces character, and character produces hope, and hope does not put us to shame, because God’s love has been poured into our hearts through the Holy Spirit who has been given to us." reference="Romans 5:3-5" color="var(--teal)"/>               
              </section>
            }
            prayer={
              <section>
                   <section>
                  <h1 className="title has-text-prpmaryary tracking-wide padded" style={{color: styleMethods.getAttributeColor("patient")}}>Prayer</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">God, thank you for being patient with me when I do not listen, obey or glorify You.  Help me to remember Your patience on the cross and with me when I need to be patient with others.</p>
                  <Quote scripture="Looking to Jesus, the founder and perfecter of our faith, who for the joy that was set before him endured the cross," reference="Hebrews 12:2a" color="var(--teal)"/>               
              </section>
            }
            scienceAndHealth={
              <section>
                 <section>
                  <h1 className="title has-text-prpmaryary tracking-wide padded" style={{color: styleMethods.getAttributeColor("patient")}}>What tangible benefits to patience have been found?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Patience allows greater future rewards to be achieved versus settling on the best short-term reward.  It allows for optimization of the whole over time, such as saving for retirement and earning a degree.</p>
                  <p className="is-size-6 leading-normal padded">"A study by multiple American universities found that young adults who scored high on tests designed to measure impatience had an 18.4 per cent risk of developing hypertension within 15 years, compared to an 11.6 per cent risk among their more patient counterparts. One potential cause? Impatience may be correlated with higher rates of smoking, drinking and unhealthy eating…</p>
                  <p className="is-size-6 leading-normal padded">In a 2015 American study, researchers offered students compensation for their time. Individuals could immediately receive a cheque for a small sum or wait two weeks for a larger payout. Almost 57 per cent of those who opted for the former took more than two weeks to cash their cheques." - 12/2/16 article in Reader’s Digest</p>               
              </section>
            }
            attHistory={
              <section>
                 <section>
                  <h1 className="title has-text-prpmaryary tracking-wide padded" style={{color: styleMethods.getAttributeColor("patient")}}>How were George Washington and Jesus both patient and humble?</h1>
                  </section>
                  <p className="is-size-6 leading-normal padded">Just like young George Washington, Jesus was surely tempted to be impatient during His first 30 years of life, waiting for His ministry to begin.  Unlike Washington, He did not give in.</p>
                  <p className="is-size-6 leading-normal padded">However, Jesus, like Washington, also surrendered His power at the absolute height of His earthly ministry, in favor of going home.  Washington was later called out of Mount Vernon into the presidency of the fledging republic.  The honor he surrendered willingly was lavishly returned to him later.</p>
                  <p className="is-size-6 leading-normal padded"> ‘There is something unlikable about the George Washington (at age 21-26). He seems a trifle raw and strident, too much on his dignity, too ready to complain, too nakedly concerned with promotion…He had yet to learn,’ a biographer notes, ‘the wisdom of patience; or rather, he was learning it in a painful school.’  However, Washington himself declared ‘Patience is a noble virtue, and, when rightly exercised, does not fail of its reward.’</p>
                  <p className="is-size-6 leading-normal padded">A military historian has summarized the positive effects of patience on the course of the American Revolution: ‘With [British general Henry] Clinton bottled up in New York, it was patience that brought the war to a successful conclusion: patience with dilatory French assistance; patience with an army that mutinied twice; patience with a Congress that demanded but did not provide; patience while [American general Nathanael] Greene lost the battles but won the war in the South’; and, finally, to help bring about the war’s rather surprising conclusion, ‘patience that was at last rewarded when the French navy briefly won control of the sea around Yorktown, enabling Washington to deliver the coup de grâce.’</p>
                  <p className="is-size-6 leading-normal padded">Surrendering power—resigning as commander in chief of the Continental Army on December 23, 1783—was an act astonishing to many because so unnatural: everyone knew that great victors’ thirst for power was unquenchable. By handing over his sword to Congress and retiring to Mount Vernon, he ‘stunned the world.’ Its reverberations were felt throughout Europe. ‘It was extraordinary; a victorious general’s surrendering his arms and returning to his farm was unprecedented in modern times. Cromwell, William of Orange, Marlborough—all had sought political rewards commensurate with their military achievements.’ ” - Modern Age - Fall 2015 edition</p>               
              </section>
            }
            liturgy={
              <section>
                <section>
                    <h1 className="title has-text-prpmaryary tracking-wide padded" style={{color: styleMethods.getAttributeColor("patient")}}>“It Is Well With My Soul” - Horatio Spafford</h1>
                    </section>
                    <p className="is-size-6 leading-normal padded">
                      We humans will always try to interject our own timetable into what God is doing (we want to 'hasten the day').  Even so, we can always return to the knowledge that God’s timing is perfect.<br></br><br></br>
                     "And Lord, haste the day when the faith shall be sight,<br></br>
The clouds be rolled back as a scroll;<br></br>
The trump shall resound, and the Lord shall descend,<br></br>
Even so, it is well with my soul."  - Last stanza</p>                
              </section>
            }
          />
        )
    }

}

export default withRouter(Patient);
