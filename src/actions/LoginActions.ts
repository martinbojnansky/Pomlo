import { ActionCreator, Dispatch } from 'react-redux';
import { ThunkAction } from 'redux-thunk';
import { StoreState } from 'states/StoreState';
import { ActionType } from 'actions/Actions';
import { Routes } from 'constants/Routes';
import { LocalStorageKeys } from 'constants/LocalStorageKeys';
import { history } from 'services/History';
import firebase from 'services/Firebase';

export interface LoginCompleted {
    type: ActionType.LOGIN_COMPLETED
    user: firebase.UserInfo
}

export interface LoginFailed {
    type: ActionType.LOGIN_FAILED
}

export const loginWithGoogle: ActionCreator<ThunkAction<Promise<LoginCompleted | LoginFailed>, StoreState, void>> 
= () => {
    return async (dispatch: Dispatch<StoreState>, getState: () => StoreState, params): Promise<LoginCompleted | LoginFailed> => {        
        try {
            let user = await firebase.loginWithGoogle();
            localStorage.setItem(LocalStorageKeys.IS_AUTHORIZED, true.toString());
            history.push(Routes.DEFAULT);
            return dispatch({
                type: ActionType.LOGIN_COMPLETED,
                user: user.user
            } as LoginCompleted);
        }
        catch(error) {
            localStorage.setItem(LocalStorageKeys.IS_AUTHORIZED, false.toString());
            alert('Login failed.');
            return dispatch({
                type: ActionType.LOGIN_FAILED,
            } as LoginFailed);
        }
    }
};