import firebase from 'firebase/app';
import key from './apiKey';

const config = {
    apiKey: key,
    authDomain: "attributes-d93b3.firebaseapp.com",
    databaseURL: 'https://attributes-d93b3.firebaseio.com'
}

const fire = firebase.initializeApp(config);

export default fire;