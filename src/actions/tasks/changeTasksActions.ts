import { ActionType } from 'actions/actions';
import { Task } from 'models/task';

export interface TasksTaskChanged {
    type: ActionType.TASKS_TASK_CHANGED,
    task: Task;
}

export const changeTask = (task: Task): TasksTaskChanged => {
    return {
        type: ActionType.TASKS_TASK_CHANGED,
        task: task
    };
}