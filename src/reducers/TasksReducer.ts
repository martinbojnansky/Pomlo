import { Action, ActionType } from 'actions/Actions';
import { TasksState } from 'states/TasksState';

export function tasksReducer(state: TasksState, action: Action): TasksState {
    switch (action.type) {
      case ActionType.WEEKVIEW_LOADTASKS_COMPLETED:
            return { ...state, tasks: action.tasks };
        default:
            return { ...state };
    }
}