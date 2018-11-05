import * as React from 'react';
import dateUtils from 'utils/dateUtils';

export interface WeekPickerComponentProps {   
    selectedStartDate: Date;
}

export interface WeekPickerComponentDispatch {
    onSelectedStartDateChanged: (date: Date) => void;
    onFormatDate?: (date: Date) => string;
}

interface WeekPickerComponentState {
    startDate: Date;
}

export class WeekPickerComponent extends React.Component<WeekPickerComponentProps & WeekPickerComponentDispatch, WeekPickerComponentState> {    
    constructor(props: WeekPickerComponentProps & WeekPickerComponentDispatch) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handlePrevChange = this.handlePrevChange.bind(this);
        this.handleNextChange = this.handleNextChange.bind(this);
    }

    handleChange(diff: number) {
        let start = new Date(this.props.selectedStartDate);
        start.setDate(start.getDate() + diff);
        this.props.onSelectedStartDateChanged(start);
    }
    
    handlePrevChange() {
        this.handleChange(-7);
    }

    handleNextChange() {
        this.handleChange(7);
    }
    
    render() {
        return (
            <div className="week-picker">
                <button
                    type="button"
                    title="Previous"
                    onClick={this.handlePrevChange}
                >
                    &lsaquo;
                </button>
                <span>{dateUtils.toWeekDateString(dateUtils.getStartOfWeek(this.props.selectedStartDate, 1), 1)}</span>
                <button
                    type="button"
                    title="Next"
                    onClick={this.handleNextChange}
                >
                    &rsaquo;
                </button>
            </div>
        );
    }
}