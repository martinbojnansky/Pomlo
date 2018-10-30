import * as React from 'react';
import { StoreState } from 'states/storeState';
// import { Action } from 'actions/actions';
import { Task } from 'models/task';

export interface TaskCardComponentProps {
    task: Task;
}

export interface TaskCardComponentDispatch {
    onClick: (id: string) => void;
}

export class TaskCardComponent extends React.Component<TaskCardComponentProps & TaskCardComponentDispatch, StoreState> {
    render() {
        return (
            <div 
                className="task-card" 
                draggable
                onClick={() => this.props.onClick(this.props.task.id)}>
                <div className="task-card-body">
                    <span>
                        <input type="checkbox" readOnly={true} checked={this.props.task.completed}/>
                        <b>{this.props.task.name}</b>
                    </span>
                    {/* <span>{this.props.task.description}</span> */}
                </div>
            </div>
        );
    }
}