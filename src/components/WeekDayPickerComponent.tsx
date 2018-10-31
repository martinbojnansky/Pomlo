import * as React from 'react';
import idUtils from 'utils/idUtils';

export enum WeekDayPickerFirstDayOfWeek {
    SUNDAY = 0,
    MONDAY = 1
}

export interface WeekDayPickerComponentProps {   
    selectedDate: Date;
    firstDayOfWeek?: WeekDayPickerFirstDayOfWeek;
}

export interface WeekDayPickerComponentDispatch {
    onSelectedDateChanged: (date: Date) => void;
    onFormatDate?: (date: Date) => string;
}

export class WeekDayPickerComponent extends React.Component<WeekDayPickerComponentProps & WeekDayPickerComponentDispatch, {}> {    
    render() {
        return (
            <div className="weekday-picker">
                {getDaysOfWeek(this.props).map((day: Date) => {
                    return(
                        <label                
                            key={day.getDay()}>
                            <input 
                                type="radio" 
                                name={`weekday-picker-${idUtils.uuid()}`}
                                value={day.getDay()}
                                checked={day.getDay() === this.props.selectedDate.getDay()}
                                onChange={(e) => this.props.onSelectedDateChanged(day)}
                            />
                            <span>{this.props.onFormatDate ? this.props.onFormatDate(day) : day.toDateString()}</span>
                        </label>
                    );
                })}
            </div>
        );
    }
}

function getDaysOfWeek(props: WeekDayPickerComponentProps) {
    let days: Date[] = [],
    firstDayOfWeek = props.firstDayOfWeek ? props.firstDayOfWeek : WeekDayPickerFirstDayOfWeek.SUNDAY,
    selectedDay = props.selectedDate.getDay(),
    diff = selectedDay - firstDayOfWeek + (selectedDay === 0 && firstDayOfWeek === 1 ? 7: 0);

    for(let i = 0; i < 7; i++) {
        let day = new Date(props.selectedDate);
        day.setDate(props.selectedDate.getDate() - diff + i);
        days.push(day);
    }

    return days;
}