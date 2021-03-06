import * as authorizationLoginActions from 'actions/authorization/loginActions';
import * as authorizationLogoutActions from 'actions/authorization/logoutActions';
import * as getWeekTasksActions from 'actions/tasks/getWeekTasksActions';
import * as openCloseTasksActions from 'actions/tasks/openCloseTasksActions';
import * as changeTasksActions from 'actions/tasks/changeTasksActions';
import * as createTasksActions from 'actions/tasks/createTasksActions';
import * as updateTasksActions from 'actions/tasks/updateTasksActions';
import * as changeTasksWeekDateActions from 'actions/tasks/changeTasksWeekDateActions';

export enum ActionType {
    NOT_SPECIFIED = 'NOT_SPECIFIED',
    // register action types here
    AUTHORIZATION_LOGIN_COMPLETED = 'AUTHORIZATION_LOGIN_COMPLETED',
    AUTHORIZATION_LOGIN_FAILED = 'AUTHORIZATION_LOGIN_FAILED',
    AUTHORIZATION_LOGOUT_COMPLETED = 'AUTHORIZATION_LOGOUT_COMPLETED',
    TASKS_GET_WEEK_TASKS_COMPLETED = 'TASKS_GET_WEEK_TASKS_COMPLETED',
    TASKS_GET_WEEK_TASKS_FAILED = 'TASKS_GET_WEEK_TASKS_FAILED',
    TASKS_TASK_OPENED = 'TASKS_TASK_OPENED',
    TASKS_TASK_CLOSED = 'TASKS_TASK_CLOSED',
    TASKS_TASK_CHANGED = 'TASKS_TASK_CHANGED',
    TASKS_CREATE_TASK_STARTED = 'TASKS_CREATE_TASK_STARTED',
    TASKS_CREATE_TASK_COMPLETED = 'TASKS_CREATE_TASK_COMPLETED',
    TASKS_CREATE_TASK_FAILED = 'TASKS_CREATE_TASK_FAILED',
    TASKS_UPDATE_TASK_COMPLETED = 'TASKS_UPDATE_TASK_COMPLETED',
    TASKS_UPDATE_TASK_FAILED = 'TASKS_UPDATE_TASK_FAILED',
    TASKS_WEEK_DATE_CHANGED = 'TASKS_WEEK_DATE_CHANGED'
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
| changeTasksActions.TasksTaskChanged
| createTasksActions.TasksCreateTaskStarted
| createTasksActions.TasksCreateTaskCompleted
| createTasksActions.TasksCreateTaskFailed
| updateTasksActions.TasksUpdateTaskCompleted
| updateTasksActions.TasksUpdateTaskFailed
| changeTasksWeekDateActions.TasksWeekDateChanged
;

export interface NotSpecifiedAction {
    type: ActionType.NOT_SPECIFIED;
}
