import * as login from './LoginActions';
import * as jokes from './JokesActions';

export enum ActionType {
    NOT_SPECIFIED = 'NOT_SPECIFIED',
    // register action types here
    LOGIN_COMPLETED = 'LOGIN_COMPLETED',
    LOGIN_FAILED = 'LOGIN_FAILED',
    JOKES_LOAD_JOKE = 'JOKES_LOAD_JOKE'
}

export type Action = NotSpecifiedAction
// register action interfaces here
| login.LoginCompleted
| login.LoginFailed
| jokes.LoadJokeAction
;

export interface NotSpecifiedAction {
    type: ActionType.NOT_SPECIFIED;
}
