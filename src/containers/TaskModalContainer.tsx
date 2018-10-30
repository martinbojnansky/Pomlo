import { StoreState } from 'states/storeState';
import { connect, Dispatch } from 'react-redux';
import { TaskModalComponent, TaskModalComponentProps, TaskModalComponentDispatch } from 'components/TaskModalComponent';

import * as openCloseTasksActions from 'actions/tasks/openCloseTasksActions';

export function mapStateToProps(state: StoreState): TaskModalComponentProps {
  return {
    task: state.tasks.openedId ? state.tasks.tasks[state.tasks.openedId] : undefined
  };
}

export function mapDispatchToProps(dispatch: Dispatch<StoreState>): TaskModalComponentDispatch {
  return {
    onClosed: () => dispatch(openCloseTasksActions.closeTask())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskModalComponent);