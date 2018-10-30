import * as React from 'react';
import { Task } from 'models/task';
import { ModalComponent } from './ModalComponent';
import { WeekDayPickerComponent } from './WeekDayPickerComponent';

export interface TaskModalComponentProps {
    task?: Task;
}

export interface TaskModalComponentDispatch {
    onClosed: () => void;
}

export class TaskModalComponent extends React.Component<TaskModalComponentProps & TaskModalComponentDispatch, {}> {    
    render() {
        if(this.props.task) {
            return (
                <ModalComponent
                    title={this.props.task.name}
                    isVisible={true}
                    onClosed={this.props.onClosed}
                    width="80vw"
                    height="80vh">
                    <p>
                        <input type="checkbox" checked={this.props.task.completed}/>
                        <input type="text" value={this.props.task.name}/>
                    </p>
                    <p>
                        <WeekDayPickerComponent
                            selectedDate={this.props.task.date.toDate()}
                            onSelectedDateChanged={() => {}}/>
                    </p>
                    <p>
                        <textarea value={this.props.task.description}/>
                    </p>
                </ModalComponent>
            );
        }
        else {
            return null;
        }
    }
}