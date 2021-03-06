import { ActionCreator, Dispatch } from 'react-redux';
import { ThunkAction } from 'redux-thunk';
import { StoreState } from 'states/storeState';
import { ActionType } from 'actions/actions';
import { TaskDictionary } from 'models/task';
import tasksApi from 'api/tasksApi';

export interface TasksGetWeekTasksCompleted {
    type: ActionType.TASKS_GET_WEEK_TASKS_COMPLETED,
    tasks: TaskDictionary;
}

export interface TasksGetWeekTasksFailed {
    type: ActionType.TASKS_GET_WEEK_TASKS_FAILED,
    error: string;
}

export const getWeekTasks: ActionCreator<ThunkAction<Promise<TasksGetWeekTasksCompleted | TasksGetWeekTasksFailed>, StoreState, void>> 
= (date: Date) => {
    return async (dispatch: Dispatch<StoreState>, getState: () => StoreState, params): Promise<TasksGetWeekTasksCompleted | TasksGetWeekTasksFailed> => {    
        try {
            let tasks = await tasksApi.getWeekTasks(date);
            return dispatch({
                type: ActionType.TASKS_GET_WEEK_TASKS_COMPLETED,
                tasks: tasks
            } as TasksGetWeekTasksCompleted);
        } catch(error) {
            return dispatch({
                type: ActionType.TASKS_GET_WEEK_TASKS_FAILED,
                error: error.message
            } as TasksGetWeekTasksFailed);
        }
    }
};