import { StoreState } from 'states/StoreState';
import { connect, Dispatch } from 'react-redux';
import { LayoutComponent, LayoutComponentProps, LayoutComponentDispatch } from 'components/LayoutComponent';

export function mapStateToProps(state: StoreState): LayoutComponentProps {
  return {
    user: state.authorization.user
  };
}

export function mapDispatchToProps(dispatch: Dispatch<StoreState>): LayoutComponentDispatch {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LayoutComponent);