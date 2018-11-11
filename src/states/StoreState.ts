import { AuthorizationState, initialAuthorizationState } from "./authorizationState";
import { TasksState } from "./tasksState";
import { TaskDictionary } from "models/task";

export interface StoreState {
  authorization: AuthorizationState,
  tasks: TasksState
}

export function initialState(): StoreState
{
    return ({
        authorization: initialAuthorizationState(),
        tasks: {
          tasks: {} as TaskDictionary,
          weekDate: new Date()
        }
    });
};