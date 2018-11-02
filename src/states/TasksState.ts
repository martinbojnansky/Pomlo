import { TaskDictionary } from "models/task";

export interface TasksState {
    tasks: TaskDictionary;
    openedTaskId?: string;
}