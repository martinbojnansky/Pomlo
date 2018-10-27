import * as React from 'react';
import { StoreState } from 'states/StoreState';
// import { Action } from 'actions/Actions';
import { Task } from 'models/Task';

export interface TaskCardComponentProps {
    task: Task;
}

export interface TaskCardComponentDispatch {
}

export class TaskCardComponent extends React.Component<TaskCardComponentProps & TaskCardComponentDispatch, StoreState> {
    render() {
        return (
            <div className="task-card" draggable>
                <div className="task-card-body">
                    <label>
                        <input type="checkbox" readOnly={true} checked={this.props.task.completed}/>
                        <b>{this.props.task.name}</b>
                    </label>
                    {/* <span>{task.date}</span> */}
                    <span>{this.props.task.description}</span>
                </div>
                <div className="task-card-footer">
                </div>
            </div>
        );
    }
}