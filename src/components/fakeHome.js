import React from 'react';
import '../App.css';

class nope extends React.Component {

  // constructor(props){
  //   super(props);

  //   this.state = {
  //     attributes: [],
  //   }
  // }

  // writeUserData = () => {
  //   fire.database().ref('/attributes').set(this.state);
  // }

  // getUserData = () => {
  //   let ref = fire.database().ref('/attributes');
  //   ref.on('value', snapshot => {
  //     const state = snapshot.val();
  //     this.setState(state);
  //   });
  // }

  // componentDidMount() {
  //   this.getUserData();
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState !== this.state) {
  //     this.writeUserData();
  //   }
  // }

  render() {
    return(
      <>
        <p>Welcome to this page.</p>
      </>
    )
  }

  // handleSubmit = (event) => {
  //   event.preventDefault();

  //   let attribute = this.refs.attribute.value;
  //   let category = this.refs.category.value;
  //   let uid = this.refs.uid.value;

  //   if (uid && attribute && category){
  //     const { attributes } = this.state;
  //     const attIndex = attributes.findIndex(data => {
  //       return data.uid === uid
  //     });
  //     attributes[attIndex].attribute = attribute;
  //     attributes[attIndex].category = category;
  //     this.setState({ attributes });
  //   }
  //   else if (attribute && category ) {
  //     const uid = new Date().getTime().toString();
  //     const { attributeArray } = this.state;
  //     attributeArray.push({ uid, attribute, category })
  //     this.setState({ attributeArray });
  //   }

  //   this.refs.attribute.value = '';
  //   this.refs.category.value = '';
  //   this.refs.uid.value = '';
  // }

  // removeData = (developer) => {
  //   const { attributeArray } = this.state;
  //   const newState = attributeArray.filter(data => {
  //     return data.uid !== developer.uid;
  //   });
  //   this.setState({ attributeArray: newState });
  // }

  // updateData = (attribute) => {
  //   this.refs.uid.value = attribute.uid;
  //   this.refs.attribute.value = attribute.attribute;
  //   this.refs.category.value = attribute.category;
  // }
}

export default nope;

