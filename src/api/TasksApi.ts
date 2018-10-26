import firebase from 'services/Firebase';

const db = firebase.db().collection('tasks');

const getTasks = () => db.get();

export default {
    getTasks
}