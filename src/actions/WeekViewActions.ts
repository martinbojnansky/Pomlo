import { ActionCreator, Dispatch } from 'react-redux';
import { ThunkAction } from 'redux-thunk';
import { StoreState } from 'states/storeState';
import { ActionType } from 'actions/actions';
import { Task } from 'models/task';
import tasksApi from 'api/tasksApi';

export interface WeekViewLoadTasksCompleted {
    type: ActionType.WEEKVIEW_LOADTASKS_COMPLETED,
    tasks: Task[];
}

export interface WeekViewLoadTasksFailed {
    type: ActionType.WEEKVIEW_LOADTASKS_FAILED,
    error: string;
}

export const loadTasks: ActionCreator<ThunkAction<Promise<WeekViewLoadTasksCompleted | WeekViewLoadTasksFailed>, StoreState, void>> 
= () => {
    return async (dispatch: Dispatch<StoreState>, getState: () => StoreState, params): Promise<WeekViewLoadTasksCompleted | WeekViewLoadTasksFailed> => {    
        try {
            let tasks = await tasksApi.getTasks();
            return dispatch({
                type: ActionType.WEEKVIEW_LOADTASKS_COMPLETED,
                tasks: tasks
            } as WeekViewLoadTasksCompleted);
        } catch(error) {
            return dispatch({
                type: ActionType.WEEKVIEW_LOADTASKS_FAILED,
                error: error.message
            } as WeekViewLoadTasksFailed);
        }
    }
};