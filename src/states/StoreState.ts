import { JokesState } from "./JokesState";

export interface StoreState {
  jokes: JokesState
}

export function initialState(): StoreState
{
    return ({
        jokes: {
          joke: "..."
        }
    });
};