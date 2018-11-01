import * as firebase from 'firebase';

export interface TaskDTO {
    name: string;
    description: string;
    date: firebase.firestore.Timestamp;
    completed: boolean;
}

export interface Task extends TaskDTO {
    id: string;
}

export interface TaskDictionary {
    [id: string]: Task
}