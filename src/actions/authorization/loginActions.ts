import { ActionCreator, Dispatch } from 'react-redux';
import { ThunkAction } from 'redux-thunk';
import { StoreState } from 'states/storeState';
import { ActionType } from 'actions/actions';
import { Routes } from 'constants/routes';
import { navigation } from 'services/navigation';
import firebase from 'services/firebase';
import { UserInfo } from 'firebase';
import currentUser from 'services/currentUser';

export interface AuthorizationLoginCompleted {
    type: ActionType.AUTHORIZATION_LOGIN_COMPLETED
    user: firebase.UserInfo
}

export interface AuthorizationLoginFailed {
    type: ActionType.AUTHORIZATION_LOGIN_FAILED
}

export const loginWithGoogle: ActionCreator<ThunkAction<Promise<AuthorizationLoginCompleted | AuthorizationLoginFailed>, StoreState, void>> 
= () => {
    return async (dispatch: Dispatch<StoreState>, getState: () => StoreState, params): Promise<AuthorizationLoginCompleted | AuthorizationLoginFailed> => {        
        try {
            let user = await firebase.loginWithGoogle();
            currentUser.set(user.user as UserInfo);
            navigation.push(Routes.DEFAULT);
            return dispatch({
                type: ActionType.AUTHORIZATION_LOGIN_COMPLETED,
                user: user.user
            } as AuthorizationLoginCompleted);
        }
        catch(error) {
            currentUser.reset();
            alert(`Oops! AuthorizationLogin failed :(`);
            return dispatch({
                type: ActionType.AUTHORIZATION_LOGIN_FAILED,
            } as AuthorizationLoginFailed);
        }
    }
};