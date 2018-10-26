import { Action, ActionType } from 'actions/Actions';
import { jokesReducer } from 'reducers/JokesReducer';
import { JokesState } from 'states/JokesState';

let defaultProps: JokesState = { 
    joke: 'Hahaha'
 };

describe('Tests JokesReducer.', () => {
    beforeAll(() => {
    });
    afterAll(() => {
    });
    afterEach(() => {
    });
    
    it('Returns initial state.', () => {
        let action: Action = {
            type: ActionType.NOT_SPECIFIED
        };
        expect(jokesReducer(defaultProps, action)).toEqual(defaultProps);
    });
    
    it('Loads joke.', () => {
        let action: Action = {
            type: ActionType.JOKES_LOAD_JOKE,
            joke: 'ChiChiChi'
        };
        expect(jokesReducer(defaultProps, action)).toEqual({ joke: 'ChiChiChi' });
    });
});
