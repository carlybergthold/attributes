// On quiz submission, show component with Top three individual reflecting scores = array of 5’s - return random
// Same for lows

import React from 'react';
import fire from '../config/fire'

class QuizResults extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            acceptScore: 0,
            rejectScore: 0,
            reflectScore: 0,
            salvationScore: 0
        }
      }

      getUserData = () => {
        let ref = fire.database().ref('/userAttributes/carly/scores');
        ref.on('value', snapshot => {
          const state = snapshot.val();
          this.setState({acceptScore: state.acceptScore,
                         rejectScore: state.rejectScore,
                         reflectScore: state.reflectScore,
                         salvationScore: state.salvationScore});
          console.log(this.state)
        });
      }

      componentDidMount() {
        this.getUserData();
      }

  render() {
    return(
        <>
        <div>hello</div>
        <p>my accept score is {this.state.acceptScore}</p>
        <p>my reflect score is {this.state.reflectScore}</p>
        <p>my reject score is {this.state.rejectScore}</p>
        <p>my salvation score is {this.state.salvationScore}</p>
        </>
    )
  }
}

export default QuizResults;
