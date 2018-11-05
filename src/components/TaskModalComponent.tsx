import * as React from 'react';
import { Action } from 'actions/actions';
import { Task } from 'models/task';
import { ModalComponent } from './ModalComponent';
import { WeekDayPickerComponent } from './WeekDayPickerComponent';
import * as firebase from 'firebase';
import { WeekPickerComponent } from 'components/WeekPickerComponent';

export interface TaskModalComponentProps {
    task?: Task;
}

export interface TaskModalComponentDispatch {
    onClosed: () => void;
    onTaskChanged: (task: Task) => void;
    onTaskUpdated: (task: Task) => Promise<Action>;
}

export class TaskModalComponent extends React.Component<TaskModalComponentProps & TaskModalComponentDispatch, {}> {    
    constructor(props: TaskModalComponentProps & TaskModalComponentDispatch) {
        super(props);

        this.handleTaskChanged = this.handleTaskChanged.bind(this);
        this.handleTaskDateChanged = this.handleTaskDateChanged.bind(this);
        this.handleTaskUpdated = this.handleTaskUpdated.bind(this);
    }

    handleTaskChanged(e: any) {
        let task = { ...this.props.task } as Task;
        if(!task) return;
        
        switch(e.target.dataset['prop']) {
            case 'name':
                task.name = e.target.value;
                break;
            case 'description':
                task.description = e.target.value;
                break;
            case 'completed':
                task.completed = (e.target as HTMLInputElement).checked;
                break;
        }

        this.props.onTaskChanged(task);
    }

    handleTaskDateChanged(date: Date) {
        if(this.props.task) {
            let task = { ...this.props.task, date: firebase.firestore.Timestamp.fromDate(date) } as Task;
            this.props.onTaskChanged(task);
        }
    }
    
    handleTaskUpdated() {
        if(this.props.task) {
            this.props.onTaskUpdated(this.props.task);
        }
    }
    
    render() {
        if(this.props.task) {
            return (
                <ModalComponent
                    title={this.props.task.name}
                    isVisible={true}
                    isLightDismissEnabled={true}
                    onClosed={this.props.onClosed}
                    width="80vw"
                    headerContent={
                        <React.Fragment>
                            <span>{this.props.task.name}</span>
                            <button
                                title="Close"
                                onClick={this.props.onClosed}>
                                &times;
                            </button>
                        </React.Fragment>
                    }
                    >
                    <div role="form">
                        <div role="group">
                            <label>Name</label>
                            <input                            
                                data-prop="name"
                                type="text" 
                                value={this.props.task.name}
                                onChange={this.handleTaskChanged}
                                onBlur={this.handleTaskUpdated}
                            />
                        </div>
                        <div role="group">
                            <label>Date</label>
                            <WeekPickerComponent
                                selectedStartDate={this.props.task.date ? this.props.task.date.toDate() : new Date()}
                                onSelectedStartDateChanged={this.handleTaskDateChanged}
                            />
                            <WeekDayPickerComponent
                                selectedDate={this.props.task.date ? this.props.task.date.toDate() : new Date()}
                                onSelectedDateChanged={this.handleTaskDateChanged}
                                firstDayOfWeek={1}
                            />
                        </div>
                        <div role="group">
                            <label>Description</label>
                            <textarea 
                                data-prop="description"
                                value={this.props.task.description}
                                onChange={this.handleTaskChanged}
                                onBlur={this.handleTaskUpdated}
                            />
                        </div>
                        <div role="group">
                            <label>
                                <input 
                                    data-prop="completed"
                                    type="checkbox" 
                                    checked={this.props.task.completed}
                                    onChange={this.handleTaskChanged}
                                    onBlur={this.handleTaskUpdated}
                                />
                                <span>Is Completed</span>
                            </label>
                        </div>
                    </div>
                </ModalComponent>
            );
        }
        else {
            return null;
        }
    }
}