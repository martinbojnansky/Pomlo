import * as React from 'react';
import { StoreState } from 'states/storeState';
import { Action } from 'actions/actions';
import { WeekPickerComponent } from './WeekPickerComponent';
import dateUtils from 'utils/dateUtils';

export interface AppBarComponentProps {
    user: firebase.UserInfo;
    weekDate: Date;
}

export interface AppBarComponentDispatch {
    onLogout: () => Promise<Action>;
    onWeekDateChange: (date: Date) => Promise<Action>;
}

export class AppBarComponent extends React.Component<AppBarComponentProps & AppBarComponentDispatch, StoreState> {
    constructor(props: AppBarComponentProps & AppBarComponentDispatch) {
        super(props);

        this.handleWeekDateChange = this.handleWeekDateChange.bind(this);
    }

    handleWeekDateChange(date: Date) {
        this.props.onWeekDateChange(date);
    }
    
    render() {
        return (
            <header className="appbar">
                <div className="appbar-userinfo">
                    <img src={this.props.user.photoURL ? this.props.user.photoURL : ""} />
                    <span>{this.props.user.displayName}</span>
                </div>
                <WeekPickerComponent
                        selectedStartDate={dateUtils.getStartOfWeek(this.props.weekDate, 1)}
                        onSelectedStartDateChanged={this.handleWeekDateChange}
                />
                <button 
                    type="button"
                    title="Logout"
                    onClick={this.props.onLogout}>
                    Logout
                </button>
            </header>
        );
    }
}