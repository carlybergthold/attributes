import fire from '../config/fire'
import questions from './testArray'
import atts from './attributeArray'

const userMethods = {

  addAtts: () => {
    console.log("woah")
    atts.forEach(att => {
      fire.database().ref(`/attributeList/${att.attributeName}`).set({
        description: att.description,
        symbol: att.symbol,
        seenInJesus: att.seenInJesus,
        whoSaintsAre: att.whoSaintsAre,
        whoUnsavedAre: att.whoUnsavedAre
    })
  })},

    addUser: (email, password, username) => {
        fire.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredentials)=>{
            if(userCredentials.user) {
                userCredentials.user.updateProfile({
                    displayName: username
                })
            }
        })
        .catch(function(error) {
        console.log(error.message);
        });

        questions.forEach(q => {
            fire.database().ref(`/userAttributes/${username}/scores`).set({
              acceptScore: 0,
              rejectScore: 0,
              reflectScore: 0,
              salvationScore: 0
          })

          fire.database().ref(`/userAttributes/${username}/${q.attribute}`).set({
            accept: 0,
            reject: 0,
            reflect: 0
          })
        })
    },

    signIn: (email, password) => {
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