import { ActionCreator, Dispatch } from 'react-redux';
import { ThunkAction } from 'redux-thunk';
import { StoreState } from 'states/storeState';
import { ActionType } from 'actions/actions';
import { LocalStorageKeys } from 'constants/localStorageKeys';
import firebase from 'services/firebase';

export interface AppBarLogoutCompleted {
    type: ActionType.APPBAR_LOGOUT_COMPLETED
}

export const logout: ActionCreator<ThunkAction<Promise<AppBarLogoutCompleted>, StoreState, void>> 
= () => {
    return async (dispatch: Dispatch<StoreState>, getState: () => StoreState, params): Promise<AppBarLogoutCompleted> => {        
        await firebase.logout();
        localStorage.removeItem(LocalStorageKeys.AUTHORIZED_USER);
        return dispatch({
            type: ActionType.APPBAR_LOGOUT_COMPLETED
        } as AppBarLogoutCompleted);
    }
};