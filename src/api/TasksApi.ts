import firebase from 'services/firebase';
import { Task, TaskDictionary, TaskDTO, taskMapper } from 'models/task';
import currentUser from 'services/currentUser';
import dateUtils from 'utils/dateUtils';
import { firestore } from 'firebase';

const getWeekTasks = (date: Date): Promise<TaskDictionary> => {
    return new Promise(async function(resolve, reject) {
        try {
            let tasks: { [id: string]: Task } = {},
            start = firestore.Timestamp.fromDate(dateUtils.getStartOfWeek(date, 1)),
            end = firestore.Timestamp.fromDate(dateUtils.getEndOfWeek(date, 1));
            let snapshot = await firebase.db().collection('tasks')
                .where('uid', '==', currentUser.uid())
                .orderBy('date', 'desc')
                .where('date', '>=', start)
                .where('date', '<=', end)
                .get();
            snapshot.docs.forEach(doc => {
                tasks[doc.id] = { id: doc.id, ...doc.data() as TaskDTO };
            });
            resolve(tasks);
        }
        catch(error) {
            reject(error);
        }
    });
}

const createTask = (task: Task): Promise<void> => {
    return new Promise(async function(resolve, reject) {
        try {
            let result = await firebase.db().doc(`tasks/${task.id}`).set(taskMapper.toTaskDTO(task));
            resolve(result);
        }
        catch(error) {
            reject(error);
        }
    });
}

const updateTask = (task: Task): Promise<void> => {
    return new Promise(async function(resolve, reject) {
        try {
            let result = await firebase.db().doc(`tasks/${task.id}`).update(taskMapper.toTaskDTO(task));       
            resolve(result);
        }
        catch(error) {
            reject(error);
        }
    });
}

const deleteTask = (task: Task): Promise<void> => {
    return new Promise(async function(resolve, reject) {
        try {
            let result = await firebase.db().doc(`tasks/${task.id}`).delete();       
            resolve(result);
        }
        catch(error) {
            reject(error);
        }
    });
}

export default {
    getWeekTasks,
    createTask,
    updateTask,
    deleteTask
}