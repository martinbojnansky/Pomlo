import { Action, ActionType } from 'actions/actions';
import { TasksState } from 'states/tasksState';

export function tasksReducer(state: TasksState, action: Action): TasksState {
    switch (action.type) {
        case ActionType.TASKS_GET_WEEK_TASKS_COMPLETED:
            return { ...state, tasks: action.tasks };
        case ActionType.TASKS_TASK_OPENED:
            return { ...state, openedId: action.taskId }; 
        case ActionType.TASKS_TASK_CLOSED: 
            return { ...state, openedId: undefined };   
        case ActionType.TASKS_TASK_UPDATED:
            let tasks = { ...state.tasks };
            tasks[action.task.id] = action.task;
            return { ...state, tasks: tasks}
        default:
            return { ...state };
    }
}