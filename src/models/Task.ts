export interface Task {
    id: string;
    name: string;
    description: string;
    date: Date;
    completed: boolean;
}

export interface TaskDictionary {
    [id: string]: Task
}