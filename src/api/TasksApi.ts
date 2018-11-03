import firebase from 'services/firebase';
import { Task, TaskDictionary, TaskDTO, taskMapper } from 'models/task';
import currentUser from 'services/currentUser';

const getTasks = (): Promise<TaskDictionary> => {
    return new Promise(async function(resolve, reject) {
        try {
            let tasks: { [id: string]: Task } = {},
            snapshot = await firebase.db().collection('tasks').where('uid', '==', currentUser.uid()).get();
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

const createTask = (taskDto: TaskDTO): Promise<Task> => {
    return new Promise(async function(resolve, reject) {
        try {
            let ref = await firebase.db().collection('tasks').add(taskDto);
            resolve(taskMapper.toTask(taskDto, ref.id));
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
    getTasks,
    createTask,
    updateTask,
    deleteTask
}