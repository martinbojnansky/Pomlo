import { ActionCreator, Dispatch } from 'react-redux';
import { ThunkAction } from 'redux-thunk';
import { StoreState } from 'states/storeState';
import { ActionType } from 'actions/actions';
import firebase from 'services/firebase';
import { LocalStorageKeys } from 'constants/localStorageKeys';

export interface AuthorizationLogoutCompleted {
    type: ActionType.AUTHORIZATION_LOGOUT_COMPLETED
}

export const logout: ActionCreator<ThunkAction<Promise<AuthorizationLogoutCompleted>, StoreState, void>> 
= () => {
    return async (dispatch: Dispatch<StoreState>, getState: () => StoreState, params): Promise<AuthorizationLogoutCompleted> => {        
        await firebase.logout();
        localStorage.removeItem(LocalStorageKeys.AUTHORIZED_USER);
        return dispatch({
            type: ActionType.AUTHORIZATION_LOGOUT_COMPLETED
        } as AuthorizationLogoutCompleted);
    }
};