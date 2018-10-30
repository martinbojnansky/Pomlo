import * as firebase from 'firebase';

export interface Task {
    id: string;
    name: string;
    description: string;
    date: firebase.firestore.Timestamp;
    completed: boolean;
}

export interface TaskDictionary {
    [id: string]: Task
}