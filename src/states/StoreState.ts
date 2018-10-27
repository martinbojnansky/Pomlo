import { AuthorizationState, initialAuthorizationState } from "./AuthorizationState";
import { TasksState } from "./TasksState";

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