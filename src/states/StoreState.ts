import { JokesState } from "./JokesState";
import { AuthorizationState } from "./AuthorizationState";

export interface StoreState {
  authorization: AuthorizationState,
  jokes: JokesState
}

export function initialState(): StoreState
{
    return ({
        authorization: {
          user: {
            displayName: '',
            email: '',
            phoneNumber: '',
            photoURL: '',
            providerId: '',
            uid: ''       
          }
        },
        jokes: {
          joke: ""
        }
    });
};