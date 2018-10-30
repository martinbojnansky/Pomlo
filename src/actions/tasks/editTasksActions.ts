import { ActionType } from 'actions/actions';
import { Task } from 'models/task';

export interface TasksTaskUpdated {
    type: ActionType.TASKS_TASK_UPDATED,
    task: Task;
}

export const updateTask = (task: Task): TasksTaskUpdated => {
    return {
        type: ActionType.TASKS_TASK_UPDATED,
        task: task
    };
}