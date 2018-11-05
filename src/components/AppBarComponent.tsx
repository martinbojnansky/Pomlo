import * as React from 'react';
import { StoreState } from 'states/storeState';
import { Action } from 'actions/actions';
import { WeekPickerComponent } from './WeekPickerComponent';
import dateUtils from 'utils/dateUtils';

export interface AppBarComponentProps {
    user: firebase.UserInfo
}

export interface AppBarComponentDispatch {
    logout: () => Promise<Action>
}

export class AppBarComponent extends React.Component<AppBarComponentProps & AppBarComponentDispatch, StoreState> {
    render() {
        return (
            <header className="appbar">
                <div className="appbar-userinfo">
                    <img src={this.props.user.photoURL ? this.props.user.photoURL : ""} />
                    <span>{this.props.user.displayName}</span>
                </div>
                <WeekPickerComponent
                        selectedStartDate={dateUtils.getStartOfWeek(new Date(), 1)}
                        onSelectedStartDateChanged={() => {}}
                />
                <button 
                    type="button"
                    title="Logout"
                    onClick={this.props.logout}>
                    |&rarr;
                </button>
            </header>
        );
    }
}