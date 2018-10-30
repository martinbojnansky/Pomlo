import * as authorizationLoginActions from 'actions/authorization/loginActions';
import * as authorizationLogoutActions from 'actions/authorization/logoutActions';
import * as getWeekTasksActions from 'actions/tasks/getWeekTasksActions';
import * as openCloseTasksActions from 'actions/tasks/openCloseTasksActions';

export enum ActionType {
    NOT_SPECIFIED = 'NOT_SPECIFIED',
    // register action types here
    AUTHORIZATION_LOGIN_COMPLETED = 'AUTHORIZATION_LOGIN_COMPLETED',
    AUTHORIZATION_LOGIN_FAILED = 'AUTHORIZATION_LOGIN_FAILED',
    AUTHORIZATION_LOGOUT_COMPLETED = 'AUTHORIZATION_LOGOUT_COMPLETED',
    TASKS_GET_WEEK_TASKS_COMPLETED = 'TASKS_GET_WEEK_TASKS_COMPLETED',
    TASKS_GET_WEEK_TASKS_FAILED = 'TASKS_GET_WEEK_TASKS_FAILED',
    TASKS_TASK_OPENED = 'TASKS_TASK_OPENED',
    TASKS_TASK_CLOSED = 'TASKS_TASK_CLOSED'

}

export type Action = NotSpecifiedAction
// register action interfaces here
| authorizationLoginActions.AuthorizationLoginCompleted
| authorizationLoginActions.AuthorizationLoginFailed
| authorizationLogoutActions.AuthorizationLogoutCompleted
| getWeekTasksActions.TasksGetWeekTasksCompleted
| getWeekTasksActions.TasksGetWeekTasksFailed
| openCloseTasksActions.TasksTaskOpened
| openCloseTasksActions.TasksTaskClosed
;

export interface NotSpecifiedAction {
    type: ActionType.NOT_SPECIFIED;
}
