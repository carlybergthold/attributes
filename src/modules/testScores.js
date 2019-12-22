// On quiz submission, show component with Top three individual reflecting scores = array of 5’s - return random
// Same for lows

import React from 'react';
import fire from '../config/fire'

class QuizResults extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            user: '',
            acceptScore: 0,
            rejectScore: 0,
            reflectScore: 0,
            salvationScore: 0,
            topReflections: []
        }
      }

      getUserData = () => {
        let ref = fire.database().ref(`/userAttributes/${this.state.user}/scores`);
        ref.on('value', snapshot => {
          const state = snapshot.val();
          this.setState({acceptScore: this.state.acceptScore,
                         rejectScore: this.state.rejectScore,
                         reflectScore: this.state.reflectScore,
                         salvationScore: this.state.salvationScore});
        });

        let top3 = fire.database().ref(`/userAttributes/${this.state.user}`)
                                  .orderByChild('reflect').limitToLast(3);

        top3.on('value', snap => {
          let foo = [];
          snap.forEach(att => {
              foo.push(att.key)
          });
          this.setState({ topReflections: foo });
      });
    }

    componentDidMount() {

      fire.auth().onAuthStateChanged(user => {
        if (user) {
          this.setState({ user: user.displayName });
          this.getUserData();
          console.log(this.state)
        } else {
          console.log('no user')
         }
      });
    }

  render() {
    return(
        <>
        <div>hello</div>
        <p>my accept score is {this.state.acceptScore}</p>
        <p>my reflect score is {this.state.reflectScore}</p>
        <p>my reject score is {this.state.rejectScore}</p>
        <p>my salvation score is {this.state.salvationScore}</p>
        <div>my top three attributes are
        {
          this.state.topReflections.map(att =>
            <p key={att}>{att}</p>
          )
        }
        </div>
        </>
    )
  }
}

export default QuizResults;
