import firebase from 'services/firebase';
import { Task, TaskDictionary, TaskDTO } from 'models/task';
import currentUser from 'services/currentUser';

const db = () => firebase.db().collection('tasks').where('uid', '==', currentUser.uid());

const getTasks = (): Promise<TaskDictionary> => {
    return new Promise(async function(resolve, reject) {
        try {
            let tasks: { [id: string]: Task } = {},
            snapshot = await db().get();
            snapshot.docs.forEach(doc => {
                tasks[doc.id] = { id: doc.id, ...doc.data() as Task};
            });
            resolve(tasks);
        }
        catch(error) {
            reject(error);
        }
    });
}

const updateTask = (task: Task): Promise<void> => {
    return new Promise(async function(resolve, reject) {
        try {
            let result = await firebase.db().doc(`tasks/${task.id}`).update(task as TaskDTO);       
            resolve(result);
        }
        catch(error) {
            reject(error);
        }
    });
}

export default {
    getTasks,
    updateTask
}