import { LocalStorageKeys } from "constants/localStorageKeys";

export interface AuthorizationState {
    user: firebase.UserInfo
}

export const initialAuthorizationState = (): AuthorizationState => {
    let user = {
        displayName: '',
        email: '',
        phoneNumber: '',
        photoURL: '',
        providerId: '',
        uid: ''       
    },
    savedUser = localStorage.getItem(LocalStorageKeys.AUTHORIZED_USER);

    if(savedUser) {
        user = JSON.parse(savedUser);
    }
    
    return {
        user: user
    };
} 