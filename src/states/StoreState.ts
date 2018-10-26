import { JokesState } from "./JokesState";
import { AuthorizationState, initialAuthorizationState } from "./AuthorizationState";

export interface StoreState {
  authorization: AuthorizationState,
  jokes: JokesState
}

export function initialState(): StoreState
{
    return ({
        authorization: initialAuthorizationState(),
        jokes: {
          joke: ""
        }
    });
};