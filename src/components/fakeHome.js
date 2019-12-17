import React from 'react';
import '../App.css';
import fire from '../config/fire'

class FakeHome extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      attributes: [],
    }
  }

  writeUserData = () => {
    fire.database().ref('/attributes').set(this.state);
  }

  getUserData = () => {
    let ref = fire.database().ref('/attributes');
    ref.on('value', snapshot => {
      const state = snapshot.val();
      this.setState(state);
    });
  }

  componentDidMount() {
    this.getUserData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      this.writeUserData();
    }
  }

  render() {
    const { attributeArray } = this.state;
    return(
      <div className="container">
        <div className="row">
          <div className='col-xl-12'>
            <h1>Attributes</h1>
          </div>
        </div>
        <div className='row'>
          <div className='col-xl-12'>
          {
            attributeArray
            .map(att =>
              <div key={att.uid} className="card float-left" style={{width: '18rem', marginRight: '1rem'}}>
                <div className="card-body">
                  <h5 className="card-title">{ att.attribute }</h5>
                  <p className="card-text">{ att.category }</p>
                  <button onClick={ () => this.removeData(att) } className="btn btn-link">Delete</button>
                  <button onClick={ () => this.updateData(att) } className="btn btn-link">Edit</button>
                </div>
              </div>
              )
          }
          </div>
        </div>
        <div className='row'>
          <div className='col-xl-12'>
            <h1>Add new attribute here</h1>
            <form onSubmit={ this.handleSubmit }>
              <div className="form-row">
                <input type='hidden' ref='uid' />
                <div className="form-group col-md-6">
                  <label>Attribute</label>
                  <input type="text" ref='attribute' className="form-control" placeholder="Attribute" />
                </div>
                <div className="form-group col-md-6">
                  <label>Category</label>
                  <input type="text" ref='category' className="form-control" placeholder="Category" />
                </div>
              </div>
              <button type="submit" className="btn btn-primary">Save</button>
            </form>
          </div>
        </div>
      </div>
    )
  }

  handleSubmit = (event) => {
    event.preventDefault();

    let attribute = this.refs.attribute.value;
    let category = this.refs.category.value;
    let uid = this.refs.uid.value;

    if (uid && attribute && category){
      const { attributes } = this.state;
      const attIndex = attributes.findIndex(data => {
        return data.uid === uid
      });
      attributes[attIndex].attribute = attribute;
      attributes[attIndex].category = category;
      this.setState({ attributes });
    }
    else if (attribute && category ) {
      const uid = new Date().getTime().toString();
      const { attributeArray } = this.state;
      attributeArray.push({ uid, attribute, category })
      this.setState({ attributeArray });
    }

    this.refs.attribute.value = '';
    this.refs.category.value = '';
    this.refs.uid.value = '';
  }

  removeData = (developer) => {
    const { attributeArray } = this.state;
    const newState = attributeArray.filter(data => {
      return data.uid !== developer.uid;
    });
    this.setState({ attributeArray: newState });
  }

  updateData = (attribute) => {
    this.refs.uid.value = attribute.uid;
    this.refs.attribute.value = attribute.attribute;
    this.refs.category.value = attribute.category;
  }
}

export default FakeHome;

