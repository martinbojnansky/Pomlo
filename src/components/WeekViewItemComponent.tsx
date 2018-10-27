import * as React from 'react';
import { StoreState } from 'states/StoreState';
// import { Action } from 'actions/Actions';
import { Task } from 'models/Task';
import { TaskCardComponent } from 'components/TaskCardComponent';

export interface WeekViewItemComponentProps {
    name: string;
    tasks: Task[];
}

export interface WeekViewItemComponentDispatch {
}

export class WeekViewItemComponent extends React.Component<WeekViewItemComponentProps & WeekViewItemComponentDispatch, StoreState> {
    render() {
        return (
            <div className="weekview-item">
                <div className="weekview-item-header">
                    <p>{this.props.name}</p>
                </div>
                <ul className="weekview-item-list">
                    {this.props.tasks.map((task) => {
                        return (
                            <TaskCardComponent key={task.id} task={task} />
                        );
                    })}
                </ul>
            </div>
        );
    }
}