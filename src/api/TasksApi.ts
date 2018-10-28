import firebase from 'services/firebase';
import { Task } from 'models/task';
import currentUser from 'services/currentUser';

const db = () => firebase.db().collection('tasks').where('uid', '==', currentUser.uid());

const getTasks = (): Promise<Task[]> => {
    return new Promise(async function(resolve, reject) {
        try {
            let tasks: Task[] = [],
            snapshot = await db().get();
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