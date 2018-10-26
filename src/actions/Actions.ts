import * as jokes from './JokesActions';

export enum ActionType {
    NOT_SPECIFIED = 'NOT_SPECIFIED',
    // register action types here
    JOKES_LOAD_JOKE = 'JOKES_LOAD_JOKE'
}

export type Action = NotSpecifiedAction
// register action interfaces here
| jokes.LoadJokeAction
;

export interface NotSpecifiedAction {
    type: ActionType.NOT_SPECIFIED;
}
