import { StoreState } from 'states/StoreState';
import { connect, Dispatch } from 'react-redux';
import { JokesComponent, JokesComponentProps, JokesComponentDispatch } from 'components/JokesComponent';

import * as jokesActions from 'actions/JokesActions';

export function mapStateToProps(state: StoreState): JokesComponentProps {
  return {
    joke: state.jokes.joke
  };
}

export function mapDispatchToProps(dispatch: Dispatch<StoreState>): JokesComponentDispatch {
  return {
    loadJoke: () => dispatch(jokesActions.loadJoke())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(JokesComponent);