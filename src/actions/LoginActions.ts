import { ActionCreator, Dispatch } from 'react-redux';
import { ThunkAction } from 'redux-thunk';
import { StoreState } from 'states/StoreState';
import { ActionType } from 'actions/Actions';
import { Routes } from 'constants/Routes';
import { navigation } from 'services/Navigation';
import firebase from 'services/Firebase';
import { UserInfo } from 'firebase';
import currentUser from 'services/CurrentUser';

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
            currentUser.set(user.user as UserInfo);
            navigation.push(Routes.DEFAULT);
            return dispatch({
                type: ActionType.LOGIN_COMPLETED,
                user: user.user
            } as LoginCompleted);
        }
        catch(error) {
            currentUser.reset();
            alert(`Login failed with message: ${error.message}.`);
            return dispatch({
                type: ActionType.LOGIN_FAILED,
            } as LoginFailed);
        }
    }
};