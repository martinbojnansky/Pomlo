import { ActionCreator, Dispatch } from 'react-redux';
import { ThunkAction } from 'redux-thunk';
import { StoreState } from 'states/storeState';
import { ActionType } from 'actions/actions';
import { Task } from 'models/task';
import tasksApi from 'api/tasksApi';

export interface TasksUpdateTaskCompleted {
    type: ActionType.TASKS_UPDATE_TASK_COMPLETED
}

export interface TasksUpdateTaskFailed {
    type: ActionType.TASKS_UPDATE_TASK_FAILED,
    task: Task;
    error: string;
}

export const updateTask: ActionCreator<ThunkAction<Promise<TasksUpdateTaskCompleted | TasksUpdateTaskFailed>, StoreState, void>> 
= (task: Task) => {
    return async (dispatch: Dispatch<StoreState>, getState: () => StoreState, params): Promise<TasksUpdateTaskCompleted | TasksUpdateTaskFailed> => {    
        try {
            await tasksApi.updateTask(task);
            return dispatch({
                type: ActionType.TASKS_UPDATE_TASK_COMPLETED
            } as TasksUpdateTaskCompleted);
        } catch(error) {
            return dispatch({
                type: ActionType.TASKS_UPDATE_TASK_FAILED,
                task: task
            } as TasksUpdateTaskFailed);
        }
    }
};