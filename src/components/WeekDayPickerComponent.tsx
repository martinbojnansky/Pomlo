import * as React from 'react';
import idUtils from 'utils/idUtils';
import dateUtils from 'utils/dateUtils';

export interface WeekDayPickerComponentProps {   
    selectedDate: Date;
    firstDayOfWeek?: 0 | 1;
}

export interface WeekDayPickerComponentDispatch {
    onSelectedDateChanged: (date: Date) => void;
    onFormatDate?: (date: Date) => string;
}

export class WeekDayPickerComponent extends React.Component<WeekDayPickerComponentProps & WeekDayPickerComponentDispatch, {}> {    
    constructor(props: WeekDayPickerComponentProps & WeekDayPickerComponentDispatch) {
        super(props);
    }
    
    render() {
        return (
            <div className="weekday-picker">
                {getDaysOfWeek(this.props).map((day: Date) => {
                    let isChecked = day.getDay() === this.props.selectedDate.getDay();
                    return(
                        <label                 
                            key={day.getDay()}
                            className={isChecked ? 'selected' : '' }>
                            <input 
                                type="radio" 
                                name={`weekday-picker-${idUtils.uuid()}`}
                                value={day.getDay()}
                                checked={isChecked}
                                onChange={(e) => this.props.onSelectedDateChanged(day)}
                            />
                            <span>{this.props.onFormatDate ? this.props.onFormatDate(day) : dateUtils.toWeekDayString(day)}</span>
                        </label>
                    );
                })}
            </div>
        );
    }
}

function getDaysOfWeek(props: WeekDayPickerComponentProps) {
    let days: Date[] = [],
    firstDayOfWeek = props.firstDayOfWeek ? props.firstDayOfWeek : 0,
    selectedDay = props.selectedDate.getDay(),
    diff = selectedDay - firstDayOfWeek + (selectedDay === 0 && firstDayOfWeek === 1 ? 7: 0);

    for(let i = 0; i < 7; i++) {
        let day = new Date(props.selectedDate);
        day.setDate(props.selectedDate.getDate() - diff + i);
        days.push(day);
    }

    return days;
}