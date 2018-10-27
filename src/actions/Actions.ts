import * as login from './LoginActions';
import * as appBar from './AppBarActions';
import * as weekView from './WeekViewActions';

export enum ActionType {
    NOT_SPECIFIED = 'NOT_SPECIFIED',
    // register action types here
    LOGIN_COMPLETED = 'LOGIN_COMPLETED',
    LOGIN_FAILED = 'LOGIN_FAILED',
    APPBAR_LOGOUT_COMPLETED = 'APPBAR_LOGOUT_COMPLETED',
    WEEKVIEW_LOADTASKS_COMPLETED = 'WEEKVIEW_LOADTASKS_COMPLETED',
    WEEKVIEW_LOADTASKS_FAILED = 'WEEKVIEW_LOADTASKS_FAILED',
}

export type Action = NotSpecifiedAction
// register action interfaces here
| login.LoginCompleted
| login.LoginFailed
| appBar.AppBarLogoutCompleted
| weekView.WeekViewLoadTasksCompleted
| weekView.WeekViewLoadTasksFailed
;

export interface NotSpecifiedAction {
    type: ActionType.NOT_SPECIFIED;
}
