import { ActionCreator, Dispatch } from 'react-redux';
import { ThunkAction } from 'redux-thunk';
import { StoreState } from 'states/storeState';
import { ActionType } from 'actions/actions';
import { Task } from 'models/task';
import tasksApi from 'api/tasksApi';

export interface TasksUpdateTaskCreated {
    type: ActionType.TASKS_UPDATE_TASK_CREATED,
    task: Task;
}

export interface TasksUpdateTaskCompleted {
    type: ActionType.TASKS_UPDATE_TASK_COMPLETED
}

export interface TasksUpdateTaskFailed {
    type: ActionType.TASKS_UPDATE_TASK_FAILED,
}

export const updateTask: ActionCreator<ThunkAction<Promise<TasksUpdateTaskCreated | TasksUpdateTaskCompleted | TasksUpdateTaskFailed>, StoreState, void>> 
= (task: Task) => {
    return async (dispatch: Dispatch<StoreState>, getState: () => StoreState, params): Promise<TasksUpdateTaskCreated | TasksUpdateTaskCompleted | TasksUpdateTaskFailed> => {    
        try {
            if(task.id !== '') {
                await tasksApi.updateTask(task);
                return dispatch({
                    type: ActionType.TASKS_UPDATE_TASK_COMPLETED
                } as TasksUpdateTaskCompleted);
            }
            else {
                let id = await tasksApi.createTask(task);
                return dispatch({
                    type: ActionType.TASKS_UPDATE_TASK_CREATED,
                    task: { ...task, id: id }
                } as TasksUpdateTaskCreated);
            }
        } catch(error) {
            return dispatch({
                type: ActionType.TASKS_UPDATE_TASK_FAILED
            } as TasksUpdateTaskFailed);
        }
    }
};