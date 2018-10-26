import * as login from './LoginActions';
import * as appBar from './AppBarActions';
import * as jokes from './JokesActions';

export enum ActionType {
    NOT_SPECIFIED = 'NOT_SPECIFIED',
    // register action types here
    LOGIN_COMPLETED = 'LOGIN_COMPLETED',
    LOGIN_FAILED = 'LOGIN_FAILED',
    APPBAR_LOGOUT_COMPLETED = 'APPBAR_LOGOUT_COMPLETED',
    JOKES_LOAD_JOKE = 'JOKES_LOAD_JOKE'
}

export type Action = NotSpecifiedAction
// register action interfaces here
| login.LoginCompleted
| login.LoginFailed
| appBar.AppBarLogoutCompleted
| jokes.LoadJokeAction
;

export interface NotSpecifiedAction {
    type: ActionType.NOT_SPECIFIED;
}
