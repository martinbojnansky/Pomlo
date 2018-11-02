import firebase from 'services/firebase';
import { Task, TaskDictionary, TaskDTO } from 'models/task';
import currentUser from 'services/currentUser';

const getTasks = (): Promise<TaskDictionary> => {
    return new Promise(async function(resolve, reject) {
        try {
            let tasks: { [id: string]: Task } = {},
            snapshot = await firebase.db().collection('tasks').where('uid', '==', currentUser.uid()).get();
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

const createTask = (task: Task): Promise<string> => {
    return new Promise(async function(resolve, reject) {
        try {
            let doc = await firebase.db().collection('tasks').add(task);       
            resolve(doc.id);
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
    createTask,
    updateTask
}