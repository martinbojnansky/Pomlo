import { AuthorizationState, initialAuthorizationState } from "./authorizationState";
import { TasksState } from "./tasksState";

export interface StoreState {
  authorization: AuthorizationState,
  tasks: TasksState
}

export function initialState(): StoreState
{
    return ({
        authorization: initialAuthorizationState(),
        tasks: {
          tasks: []
        }
    });
};