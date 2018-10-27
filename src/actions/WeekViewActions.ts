import { ActionCreator, Dispatch } from 'react-redux';
import { ThunkAction } from 'redux-thunk';
import { StoreState } from 'states/StoreState';
import { ActionType } from 'actions/Actions';
import { Task } from 'models/Task';
import tasksApi from 'api/TasksApi';

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