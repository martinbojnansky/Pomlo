import { Action, ActionType } from 'actions/Actions';
import { JokesState } from 'states/JokesState';

export function jokesReducer(state: JokesState, action: Action): JokesState {
    switch (action.type) {
      case ActionType.JOKES_LOAD_JOKE:
            return { ...state, joke: action.joke };
        default:
            return { ...state };
    }
}