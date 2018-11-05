import { ActionCreator, Dispatch } from 'react-redux';
import { ThunkAction } from 'redux-thunk';
import { StoreState } from 'states/storeState';
import { ActionType } from 'actions/actions';
import { Task } from 'models/task';
import tasksApi from 'api/tasksApi';
import currentUser from 'services/currentUser';
import * as firebase from 'firebase';
import idUtils from 'utils/idUtils';

export interface TasksCreateTaskStarted {
    type: ActionType.TASKS_CREATE_TASK_STARTED,
    task: Task;
}

export interface TasksCreateTaskCompleted {
    type: ActionType.TASKS_CREATE_TASK_COMPLETED,
    task: Task;
}

export interface TasksCreateTaskFailed {
    type: ActionType.TASKS_CREATE_TASK_FAILED,
}

export const createTask: ActionCreator<ThunkAction<Promise<TasksCreateTaskStarted | TasksCreateTaskCompleted | TasksCreateTaskFailed>, StoreState, void>> 
= (date?: Date) => {
    return async (dispatch: Dispatch<StoreState>, getState: () => StoreState, params): Promise<TasksCreateTaskStarted | TasksCreateTaskCompleted | TasksCreateTaskFailed> => {    
        let task = {
            id: idUtils.uuid(),
            uid: currentUser.uid(),
            name: '',
            description: '',
            date: date ? firebase.firestore.Timestamp.fromDate(date) : null,
            completed: false
        } as Task;

        dispatch({
            type: ActionType.TASKS_CREATE_TASK_STARTED,
            task: task
        } as TasksCreateTaskStarted);

        try {
            await tasksApi.createTask(task);            
            return dispatch({
                type: ActionType.TASKS_CREATE_TASK_COMPLETED,
                task: task
            } as TasksCreateTaskCompleted);
        } catch(error) {
            return dispatch({
                type: ActionType.TASKS_CREATE_TASK_FAILED
            } as TasksCreateTaskFailed);
        }
    }
};