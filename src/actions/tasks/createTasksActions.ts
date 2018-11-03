import { ActionCreator, Dispatch } from 'react-redux';
import { ThunkAction } from 'redux-thunk';
import { StoreState } from 'states/storeState';
import { ActionType } from 'actions/actions';
import { Task, TaskDTO } from 'models/task';
import tasksApi from 'api/tasksApi';
import currentUser from 'services/currentUser';
import * as firebase from 'firebase';

export interface TasksCreateTaskCompleted {
    type: ActionType.TASKS_CREATE_TASK_COMPLETED,
    task: Task;
}

export interface TasksCreateTaskFailed {
    type: ActionType.TASKS_CREATE_TASK_FAILED,
}

export const createTask: ActionCreator<ThunkAction<Promise<TasksCreateTaskCompleted | TasksCreateTaskFailed>, StoreState, void>> 
= (date?: Date) => {
    return async (dispatch: Dispatch<StoreState>, getState: () => StoreState, params): Promise<TasksCreateTaskCompleted | TasksCreateTaskFailed> => {    
        try {
            let taskDto = {
                uid: currentUser.uid(),
                name: '',
                description: '',
                date: date ? firebase.firestore.Timestamp.fromDate(date) : null,
                completed: false
            } as TaskDTO;
            let task = await tasksApi.createTask(taskDto);            
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