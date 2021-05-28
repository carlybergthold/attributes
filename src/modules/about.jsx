import React  from 'react';
import { withRouter } from "react-router-dom"
import '../styles/home.css'
import UnlockImg from "../images/unlock.svg";

class About extends React.Component {

  render() {
    return(
        <>
          <div id="home-hero" className="hero-body">
            <div className="container">
                <div className="columns is-vcentered">
                    <div className="column is-5 is-offset-1 landing-caption">
                        <h1 className="title is-1 is-bold is-spaced">
                            About this website
                        </h1>
                        <h2 className="subtitle is-5 is-muted">You've gotten to know God and yourself - now get to know us!</h2>
                    </div>
                    <div className="column is-5">
                        <figure className="image about-image">
                          <img src={UnlockImg} alt="Unlocking your personality"></img>
                        </figure>
                    </div>
                  </div>
            </div>
        </div>
        <section className="hero about-hero">
          <div className="container content has-text-left">
            <h2 className="subtitle is-4">Who developed this website and why?</h2>
            <p>I am a Christ-believing layman (engineer) who desires to show how God reveals Himself in our lives through His attributes.  My home-schooled daughter became a software developer and together we created this interactive website with the guiding premise that all people are created in God’s image.</p>
            <p>The website has a quiz you can take to see which attributes of God you most reflect (or not, since we can reject who God is).  Or you can connect to specific attributes based on your personality, or the emotions, fears, and struggles you are going through right now.  Try it!</p>
            <h2 className="subtitle is-4">How can I best use this website?</h2>
            <p>The website is designed to help any user clearly see who God of the Bible is and how to appropriately respond to His image.  Some ideas of how to do this include:</p>
            <ul>
              <li>Use as a daily devotional study for 32 days - read and through and reflect on the full content of a new attribute each day (including its definition, scriptural references, how we are both like and not like God, historical and scientific examples, and more).</li>
              <li>Use as a home-school curriculum for older students to learn Gods’ attributes.</li>
              <li>Use in a group Bible study to aid in discussing God’s attributes.</li>
              <li>Use periodically whenever you have a specific problem or emotion which you would like to link back to God and His character.
              </li>
            </ul>
            <h2 className="subtitle is-4">What is your theology?</h2>
            <p>I seek to adhere to orthodox non-denominational Christian Biblical doctrine.  Each of these 32 attributes flow from God’s image to all humans in some finite form.  We can never become God, but believers can and should become more godly through the work of the Holy Spirit.  And even those attributes which may normally be considered incompatible with man will manifest in areas such as our desires (i.e. we will never be omnipotent like God, but we all do like control).</p>
            <h2 className="subtitle is-4">How can you help?</h2>
            <p>This website was launched in 2021 and I would love to receive your feedback on it - how it might have helped you, as well as any constructive suggestions on how to improve (including edits, new functionality, even major new content or ideas).  You may also share freely with others!</p>
            <p>Have feedback? <u><a href="mailto:ronbergthold6@gmail.com">Contact me!</a></u></p>
            <br/>
            <br/>
          </div>
          <br/>
          <br/>
          <br/>
          <br/>
        </section>
        </>
    )
  }
}

export default withRouter(About);