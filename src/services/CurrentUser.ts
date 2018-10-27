import { LocalStorageKeys } from "constants/LocalStorageKeys";
import { UserInfo } from "firebase";

const get = (): firebase.UserInfo | null => {
    let savedUser = localStorage.getItem(LocalStorageKeys.AUTHORIZED_USER);
    return savedUser ? JSON.parse(savedUser) as firebase.UserInfo : null
};

const set = (user: UserInfo) => {
    localStorage.setItem(LocalStorageKeys.AUTHORIZED_USER, JSON.stringify(user));
}

const reset = () => {
    localStorage.removeItem(LocalStorageKeys.AUTHORIZED_USER);
}

const uid = () => {
    let user = get();
    if(user) {
        return user.uid;
    }
    else {
        return '';
        // throw new Error("Couldn't get uid because no user is logged in.");
    }
}

export default {
    get,
    set,
    reset,
    uid
}