import { ActionCreator, Dispatch } from 'react-redux';
import { ThunkAction } from 'redux-thunk';
import { StoreState } from 'states/StoreState';
import { ActionType } from 'actions/Actions';
import { LocalStorageKeys } from 'constants/LocalStorageKeys';
import firebase from 'services/Firebase';

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