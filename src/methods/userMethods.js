import fire from '../config/fire'
import questions from '../data/testArray'
import atts from '../data/attributeArray'

const userMethods = {

  addAtts: () => {
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
      alert(error.message);
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
  }
}

export default userMethods;