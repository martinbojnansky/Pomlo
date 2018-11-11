import { TaskDictionary } from "models/task";

export interface TasksState {
    weekDate: Date;
    tasks: TaskDictionary;
    openedTaskId?: string;
}