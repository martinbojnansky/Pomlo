import { Action, ActionType } from 'actions/actions';
import { TasksState } from 'states/tasksState';
import { TaskDictionary } from 'models/task';

export function tasksReducer(state: TasksState, action: Action): TasksState {
    let tasks: TaskDictionary;
    
    switch (action.type) {
        case ActionType.TASKS_GET_WEEK_TASKS_COMPLETED:
            return { ...state, tasks: action.tasks };
        case ActionType.TASKS_TASK_OPENED:
            return { ...state, openedTaskId: action.taskId }; 
        case ActionType.TASKS_TASK_CLOSED: 
            return { ...state, openedTaskId: undefined };   
        case ActionType.TASKS_TASK_CHANGED:
            tasks = { ...state.tasks };
            tasks[action.task.id] = action.task;
            return { ...state, tasks: tasks}
        case ActionType.TASKS_UPDATE_TASK_CREATED:
            tasks = { ...state.tasks };
            tasks[action.task.id] = action.task;
            return { ...state, tasks: tasks };
        default:
            return { ...state };
    }
}