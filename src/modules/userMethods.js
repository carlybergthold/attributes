import fire from '../config/fire'
import questions from './testArray'

const userMethods = {

    addUser: () => {
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((userCredentials)=>{
            if(userCredentials.user) {
                userCredentials.user.updateProfile({
                    displayName: this.state.username
                })
            }
        })
        .catch(function(error) {
        console.log(error.message);
        });

        questions.forEach(q => {
            fire.database().ref(`/userAttributes/${this.state.username}/scores`).set({
              acceptScore: 0,
              rejectScore: 0,
              reflectScore: 0,
              salvationScore: 0
          })

          fire.database().ref(`/userAttributes/${this.state.username}/${q.attribute}`).set({
            accept: 0,
            reject: 0,
            reflect: 0
          })
        })
    },

    signIn: () => {
        fire.auth().signInWithEmailAndPassword(email, password).catch(error => {
        console.log(error.message);
      });
    },

    signOut: () => {
        fire.auth().signOut().then(function() {
        console.log('user signed out')
      }).catch(function(error) {
        console.log(error)
      });
    },
}

export default userMethods;