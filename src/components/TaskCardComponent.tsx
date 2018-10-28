import * as React from 'react';
import { StoreState } from 'states/storeState';
// import { Action } from 'actions/actions';
import { Task } from 'models/task';

export interface TaskCardComponentProps {
    task: Task;
}

export interface TaskCardComponentDispatch {
}

export class TaskCardComponent extends React.Component<TaskCardComponentProps & TaskCardComponentDispatch, StoreState> {
    render() {
        return (
            <div className="task-card" draggable={false}>
                <div className="task-card-body">
                    <label>
                        <input type="checkbox" readOnly={true} checked={this.props.task.completed}/>
                        <b>{this.props.task.name}</b>
                    </label>
                    <span>{this.props.task.description}</span>
                </div>
            </div>
        );
    }
}