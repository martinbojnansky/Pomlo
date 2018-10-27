import firebase from 'services/Firebase';
import { Task } from 'models/Task';
import currentUser from 'services/CurrentUser';

const db = firebase.db().collection('tasks').where('uid', '==', currentUser.uid());

const getTasks = (): Promise<Task[]> => {
    return new Promise(async function(resolve, reject) {
        try {
            let tasks: Task[] = [],
            snapshot = await db.get();
            snapshot.docs.forEach(doc => {
                tasks.push({ id: doc.id, ...doc.data() as Task});
            });
            resolve(tasks);
        }
        catch(error) {
            reject(error);
        }
    });
}

export default {
    getTasks
}