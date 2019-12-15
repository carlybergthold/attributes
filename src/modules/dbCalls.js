import fire from '../config/fire'
import questionArray from '../modules/testArray'

const dbCalls = {

    setUserAttributes: (userId, name, email) => {
        fire.database().ref(`users/${userId}`).set({
            username: name,
            email: email
        });

        questionArray.forEach(question => {
            fire.database().ref(`userAttributes/${userId}/${question.category}/${question.attribute}`).set({
                score: 0
            })
        })
    },

    updateUserAttributes: (uid, cat, att, score) => {
        return fire.database().ref(`/userAttributes/${uid}/${cat}/${att}`).update({
            score: score
        });
    }
}

export default dbCalls;