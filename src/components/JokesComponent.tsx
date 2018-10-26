import * as React from 'react';
import { StoreState } from 'states/StoreState';

import * as jokesActions from 'actions/JokesActions';

export interface JokesComponentProps {
    joke: string
}

export interface JokesComponentDispatch {
    loadJoke: () => Promise<jokesActions.LoadJokeAction>
}

export class JokesComponent extends React.Component<JokesComponentProps & JokesComponentDispatch, StoreState> {
    componentWillMount() {
        this.props.loadJoke();
    }

    render() {
        return (
            <div>
                <p>{this.props.joke}</p>
                <button 
                    type="button"
                    onClick={this.props.loadJoke}>
                    Next
                </button>
            </div>
        );
    }
}