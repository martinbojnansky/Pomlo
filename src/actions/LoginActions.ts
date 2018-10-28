import { ActionCreator, Dispatch } from 'react-redux';
import { ThunkAction } from 'redux-thunk';
import { StoreState } from 'states/storeState';
import { ActionType } from 'actions/actions';
import { Routes } from 'constants/routes';
import { navigation } from 'services/navigation';
import firebase from 'services/firebase';
import { UserInfo } from 'firebase';
import currentUser from 'services/currentUser';

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
            alert(`Oops! Login failed :(`);
            return dispatch({
                type: ActionType.LOGIN_FAILED,
            } as LoginFailed);
        }
    }
};