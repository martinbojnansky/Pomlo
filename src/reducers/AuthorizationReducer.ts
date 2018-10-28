import { Action, ActionType } from 'actions/actions';
import { AuthorizationState } from 'states/authorizationState';

export function authorizationReducer(state: AuthorizationState, action: Action): AuthorizationState {
    switch (action.type) {
      case ActionType.LOGIN_COMPLETED:
            return { ...state, user: action.user };
        default:
            return { ...state };
    }
}