import { Action, ActionType } from 'actions/actions';
import { TasksState } from 'states/tasksState';

export function tasksReducer(state: TasksState, action: Action): TasksState {
    switch (action.type) {
      case ActionType.WEEKVIEW_LOADTASKS_COMPLETED:
            return { ...state, tasks: action.tasks };
        default:
            return { ...state };
    }
}