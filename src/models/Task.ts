import * as firebase from 'firebase';

export interface TaskDTO {
    uid: string;
    name: string;
    description: string;
    date?: firebase.firestore.Timestamp;
    completed: boolean;
}

export interface Task extends TaskDTO {
    id: string;
}

export interface TaskDictionary {
    [id: string]: Task
}

const toTask = (taskDto: TaskDTO, id: string): Task => {
    return { id: id, ...taskDto };
}

const toTaskDTO = (task: Task): TaskDTO => {
    return { 
        uid: task.uid,
        name: task.name,
        description: task.description,
        date: task.date,
        completed: task.completed 
    };
}

export const taskMapper = {
    toTask,
    toTaskDTO
}