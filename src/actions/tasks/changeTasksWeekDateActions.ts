import { Dispatch, ActionCreator } from 'react-redux';
import { ThunkAction } from 'redux-thunk';
import { StoreState } from 'states/storeState';
import { ActionType } from 'actions/actions';

import * as getWeekTasksActions from 'actions/tasks/getWeekTasksActions';

export interface TasksWeekDateChanged {
    type: ActionType.TASKS_WEEK_DATE_CHANGED,
    weekDate: Date;
}

export const changeWeekDate: ActionCreator<ThunkAction<Promise<TasksWeekDateChanged>, StoreState, void>> 
= (weekDate: Date) => {
    return async (dispatch: Dispatch<StoreState>, getState: () => StoreState, params): Promise<TasksWeekDateChanged> => {    
        dispatch(getWeekTasksActions.getWeekTasks(weekDate));       
        return dispatch({
            type: ActionType.TASKS_WEEK_DATE_CHANGED,
            weekDate: weekDate
        } as TasksWeekDateChanged);
    };
}