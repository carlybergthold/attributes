import fire from '../config/fire'

const db = {

    post = (path, value) => {
        fire.database().ref(path).set(value);
        console.log('DATA SAVED');
    }
}

export default db;