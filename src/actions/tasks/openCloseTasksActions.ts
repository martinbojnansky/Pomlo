import { ActionType } from 'actions/actions';

export interface TasksTaskOpened {
    type: ActionType.TASKS_TASK_OPENED,
    taskId: string;
}

export const openTask = (id: string): TasksTaskOpened => {
    return {
        type: ActionType.TASKS_TASK_OPENED,
        taskId: id
    };
}

export interface TasksTaskClosed {
    type: ActionType.TASKS_TASK_CLOSED
}

export const closeTask = (): TasksTaskClosed => {
    return {
        type: ActionType.TASKS_TASK_CLOSED
    };
}