import * as React from 'react';
import { Task } from 'models/task';
import { ModalComponent } from './ModalComponent';
import { WeekDayPickerComponent, WeekDayPickerFirstDayOfWeek } from './WeekDayPickerComponent';
import * as firebase from 'firebase';

export interface TaskModalComponentProps {
    task?: Task;
}

export interface TaskModalComponentDispatch {
    onClosed: () => void;
    onTaskUpdated: (task: Task) => void;
}

export class TaskModalComponent extends React.Component<TaskModalComponentProps & TaskModalComponentDispatch, {}> {    
    render() {
        if(this.props.task) {
            return (
                <ModalComponent
                    title={this.props.task.name}
                    isVisible={true}
                    isLightDismissEnabled={true}
                    onClosed={this.props.onClosed}
                    width="80vw"
                    height="80vh">
                    <form>
                        <div role="group">
                            <label>Name</label>
                            <input 
                                type="text" 
                                value={this.props.task.name}
                                onChange={(e) => this.props.onTaskUpdated({ ...this.props.task, name: e.target.value } as Task)}
                            />
                        </div>
                        <div role="group">
                            <label>Date</label>
                            <WeekDayPickerComponent
                                selectedDate={this.props.task.date.toDate()}
                                onSelectedDateChanged={(date) => this.props.onTaskUpdated({ ...this.props.task, date: firebase.firestore.Timestamp.fromDate(date) } as Task)}
                                firstDayOfWeek={WeekDayPickerFirstDayOfWeek.MONDAY}
                            />
                        </div>
                        <div role="group">
                            <label>Description</label>
                            <textarea 
                                value={this.props.task.description}
                                onChange={(e) => this.props.onTaskUpdated({ ...this.props.task, description: e.target.value } as Task)}
                            />
                        </div>
                        <div role="group">
                            <label>
                                <input 
                                    type="checkbox" 
                                    checked={this.props.task.completed}
                                    onChange={(e) => this.props.onTaskUpdated({ ...this.props.task, completed: e.target.checked } as Task)}
                                />
                                <span>Is Completed</span>
                            </label>
                        </div>
                    </form>
                </ModalComponent>
            );
        }
        else {
            return null;
        }
    }
}