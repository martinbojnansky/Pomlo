import * as React from 'react';
import { StoreState } from 'states/storeState';
// import { Action } from 'actions/actions';
import { Task } from 'models/task';
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
                <div className="weekview-item-list">
                    {this.props.tasks.map((task) => {
                        return (
                            <TaskCardComponent key={task.id} task={task} />
                        );
                    })}
                </div>
            </div>
        );
    }
}