import React, { Component } from "react";
import { withRouter } from "react-router-dom"
import '../styles/attribute-detail.css'
import attArray from '../data/attributeArray'
import girl from '../images/girl.png'

class AttributeDetail extends Component {

    constructor(props){
        super(props);

        this.state = {
            attributeInfo: {}
        }
      }

    getAttributeInfo = () => {
      if (this.props.attribute)
      {
        let obj = attArray.find(a => a.attributeName == this.props.attribute);
        this.setState({attributeInfo: obj});
      }
    }

      render() {
          return(
              <div key={this.props.attribute} className='page attributeDetail'>
              <body className="attDetailPage">
              <section className="section att-detail-header" id="header">
                <section><h1 className="title attHeader">{this.props.attribute}</h1></section>
                <img src={girl} className="att-image"></img>
              </section>

              <section className="section att-detail-definition">
                  <h1 className="title">Definition</h1>
                  <div className="container att-detail-definition-container">
                  <section className="att-detail-definition-subtitle left"><h1 className="subtitle">DEFINITION</h1></section>
                  <p className="att-detail-definition-p">Blessed is the man who doesn't walk in the counsel of the wicked, nor stand in the way of sinners, nor sit in the seat of scoffers; but his delight is in Yahweh's law. On his law he meditates day and night. He will be like a tree planted by the streams of water, that brings forth its fruit in its season, whose leaf also does not wither. Whatever he does shall prosper. The wicked are not so, but are like the chaff which the wind drives away. Therefore the wicked shall not stand in the judgment, nor sinners in the congregation of the righteous. For Yahweh knows the way of the righteous, but the way of the wicked shall perish.</p>
                </div>
                <div className="container att-detail-definition-container">
                  <p className="att-detail-definition-p">Blessed is the man who doesn't walk in the counsel of the wicked, nor stand in the way of sinners, nor sit in the seat of scoffers; but his delight is in Yahweh's law. On his law he meditates day and night. He will be like a tree planted by the streams of water, that brings forth its fruit in its season, whose leaf also does not wither. Whatever he does shall prosper. The wicked are not so, but are like the chaff which the wind drives away. Therefore the wicked shall not stand in the judgment, nor sinners in the congregation of the righteous. For Yahweh knows the way of the righteous, but the way of the wicked shall perish.</p>
                  <section className="att-detail-definition-subtitle right"><h1 className="subtitle">SYMBOL</h1></section>
                </div>
                <div className="container att-detail-definition-container">
                <section className="att-detail-definition-subtitle left"><h1 className="subtitle">SEEN IN JESUS</h1></section>
                  <p className="att-detail-definition-p">Blessed is the man who doesn't walk in the counsel of the wicked, nor stand in the way of sinners, nor sit in the seat of scoffers; but his delight is in Yahweh's law. On his law he meditates day and night. He will be like a tree planted by the streams of water, that brings forth its fruit in its season, whose leaf also does not wither. Whatever he does shall prosper. The wicked are not so, but are like the chaff which the wind drives away. Therefore the wicked shall not stand in the judgment, nor sinners in the congregation of the righteous. For Yahweh knows the way of the righteous, but the way of the wicked shall perish.</p>
                </div>
                <div className="container att-detail-definition-container">
                  <p className="att-detail-definition-p">Blessed is the man who doesn't walk in the counsel of the wicked, nor stand in the way of sinners, nor sit in the seat of scoffers; but his delight is in Yahweh's law. On his law he meditates day and night. He will be like a tree planted by the streams of water, that brings forth its fruit in its season, whose leaf also does not wither. Whatever he does shall prosper. The wicked are not so, but are like the chaff which the wind drives away. Therefore the wicked shall not stand in the judgment, nor sinners in the congregation of the righteous. For Yahweh knows the way of the righteous, but the way of the wicked shall perish.</p>
                  <section className="att-detail-definition-subtitle right"><h1 className="subtitle">SEEN IN GOSPEL</h1></section>
                </div>
                <div className="container att-detail-definition-container">
                <section className="att-detail-definition-subtitle left"><h1 className="subtitle">WHO SAINTS ARE</h1></section>
                  <p className="att-detail-definition-p">Blessed is the man who doesn't walk in the counsel of the wicked, nor stand in the way of sinners, nor sit in the seat of scoffers; but his delight is in Yahweh's law. On his law he meditates day and night. He will be like a tree planted by the streams of water, that brings forth its fruit in its season, whose leaf also does not wither. Whatever he does shall prosper. The wicked are not so, but are like the chaff which the wind drives away. Therefore the wicked shall not stand in the judgment, nor sinners in the congregation of the righteous. For Yahweh knows the way of the righteous, but the way of the wicked shall perish.</p>
                </div>
                <div className="container att-detail-definition-container">
                  <p className="att-detail-definition-p">Blessed is the man who doesn't walk in the counsel of the wicked, nor stand in the way of sinners, nor sit in the seat of scoffers; but his delight is in Yahweh's law. On his law he meditates day and night. He will be like a tree planted by the streams of water, that brings forth its fruit in its season, whose leaf also does not wither. Whatever he does shall prosper. The wicked are not so, but are like the chaff which the wind drives away. Therefore the wicked shall not stand in the judgment, nor sinners in the congregation of the righteous. For Yahweh knows the way of the righteous, but the way of the wicked shall perish.</p>
                  <section className="att-detail-definition-subtitle right"><h1 className="subtitle">WHO UNSAVED ARE</h1></section>
                </div>
              </section>

              <section className="section att-detail-display">
                <div className="container">
                  <h1 className="title">How this attribute is displayed</h1>
                </div>
                <div className="container att-detail-display-container">
                  <section className="att-detail-display-subtitle"><h1 className="subtitle">in what americans value and do</h1></section>
                  <p className="att-detail-definition-p">Blessed is the man who doesn't walk in the counsel of the wicked, nor stand in the way of sinners, nor sit in the seat of scoffers; but his delight is in Yahweh's law.</p>
                </div>
                <div className="container att-detail-display-container">
                <p className="att-detail-display-p">Blessed is the man who doesn't walk in the counsel of the wicked, nor stand in the way of sinners, nor sit in the seat of scoffers; but his delight is in Yahweh's law.</p>                  <section className="att-detail-display-subtitle"><h1 className="subtitle">in what we love</h1></section>
                </div>
                <div className="container att-detail-display-container">
                <section className="att-detail-display-subtitle"><h1 className="subtitle">in what we fear</h1></section>
                <p className="att-detail-display-p">Blessed is the man who doesn't walk in the counsel of the wicked, nor stand in the way of sinners, nor sit in the seat of scoffers; but his delight is in Yahweh's law.</p>    
                </div>
                <div className="container att-detail-display-container">
                <p className="att-detail-display-p">Blessed is the man who doesn't walk in the counsel of the wicked, nor stand in the way of sinners, nor sit in the seat of scoffers; but his delight is in Yahweh's law.</p>                      <section className="att-detail-display-subtitle"><h1 className="subtitle">in our struggles</h1></section>
                </div>
                <div className="container att-detail-display-container">
                <section className="att-detail-display-subtitle"><h1 className="subtitle">in our rejection</h1></section>
                <p className="att-detail-display-p">Blessed is the man who doesn't walk in the counsel of the wicked, nor stand in the way of sinners, nor sit in the seat of scoffers; but his delight is in Yahweh's law.</p>                    </div>
                <div className="container att-detail-display-container">
                <p className="att-detail-display-p">Blessed is the man who doesn't walk in the counsel of the wicked, nor stand in the way of sinners, nor sit in the seat of scoffers; but his delight is in Yahweh's law.</p>                      <section className="att-detail-display-subtitle"><h1 className="subtitle">opposite</h1></section>
                </div>
                <div className="container att-detail-display-container">
                <section className="att-detail-display-subtitle"><h1 className="subtitle">in our character</h1></section>
                <p className="att-detail-display-p">Blessed is the man who doesn't walk in the counsel of the wicked, nor stand in the way of sinners, nor sit in the seat of scoffers; but his delight is in Yahweh's law.</p>                    </div>
              </section>

              <section className="section att-detail-distinctives">
                <div className="container">
                  <h1 className="title">CHRISTIAN DISTINCTIVES</h1>
                </div>

                <div className="container att-detail-distinctives-container">
                <section className="att-detail-distinctives-subtitle"><h1 className="subtitle">knowing we are not God</h1></section>
                <p className="att-detail-distinctives-p">Blessed is the man who doesn't walk in the counsel of the wicked, nor stand in the way of sinners, nor sit in the seat of scoffers; but his delight is in Yahweh's law.</p>
                </div>
                <div className="container att-detail-distinctives-container">
                <section className="att-detail-distinctives-subtitle"><h1 className="subtitle">prayer/confessions</h1></section>
                <p className="att-detail-distinctives-p">Blessed is the man who doesn't walk in the counsel of the wicked, nor stand in the way of sinners, nor sit in the seat of scoffers; but his delight is in Yahweh's law.</p>
                </div>
                <div className="container att-detail-distinctives-container">
                <section className="att-detail-distinctives-subtitle"><h1 className="subtitle">I'm a christian if...</h1></section>
                <p className="att-detail-distinctives-p">Blessed is the man who doesn't walk in the counsel of the wicked, nor stand in the way of sinners, nor sit in the seat of scoffers; but his delight is in Yahweh's law.</p>
                </div>
                <div className="container att-detail-distinctives-container">
                <section className="att-detail-distinctives-subtitle"><h1 className="subtitle">ways to glorify and enjoy God</h1></section>
                <p className="att-detail-distinctives-p">Blessed is the man who doesn't walk in the counsel of the wicked, nor stand in the way of sinners, nor sit in the seat of scoffers; but his delight is in Yahweh's law.</p>
                </div>
                <div className="container att-detail-distinctives-container">
                <section className="att-detail-distinctives-subtitle"><h1 className="subtitle">specific deceptions which mar this attribute</h1></section>
                <p className="att-detail-distinctives-p">Blessed is the man who doesn't walk in the counsel of the wicked, nor stand in the way of sinners, nor sit in the seat of scoffers; but his delight is in Yahweh's law.</p>
                </div>
              </section>

              <section className="section att-detail-other">
                <div className="container">
                  <h1 className="subtitle">OTHER REFLECTIONS</h1>
                </div>
                <div className="container att-detail-other-container">
                <section className="att-detail-other-subtitle"><h1 className="subtitle">liturgy/song</h1></section>
                <p className="att-detail-other-p">Blessed is the man who doesn't walk in the counsel of the wicked, nor stand in the way of sinners, nor sit in the seat of scoffers; but his delight is in Yahweh's law.</p>
                </div>
                <div className="container att-detail-other-container">
                <section className="att-detail-other-subtitle"><h1 className="subtitle">science/health</h1></section>
                <p className="att-detail-other-p">Blessed is the man who doesn't walk in the counsel of the wicked, nor stand in the way of sinners, nor sit in the seat of scoffers; but his delight is in Yahweh's law.</p>
                </div>
                <div className="container att-detail-other-container">
                <section className="att-detail-other-subtitle"><h1 className="subtitle">history</h1></section>
                <p className="att-detail-other-p">Blessed is the man who doesn't walk in the counsel of the wicked, nor stand in the way of sinners, nor sit in the seat of scoffers; but his delight is in Yahweh's law.</p>
                </div>
                <div className="container att-detail-other-container">
                <section className="att-detail-other-subtitle"><h1 className="subtitle">media</h1></section>
                <p className="att-detail-other-p">Blessed is the man who doesn't walk in the counsel of the wicked, nor stand in the way of sinners, nor sit in the seat of scoffers; but his delight is in Yahweh's law.</p>
                </div>
              </section>
            </body>
            </div>
          )
      }

}

export default withRouter(AttributeDetail);