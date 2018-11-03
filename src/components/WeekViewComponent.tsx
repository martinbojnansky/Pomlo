import * as React from 'react';
import { StoreState } from 'states/storeState';
import { Action } from 'actions/actions';
import { Task } from 'models/task';
import { WeekViewItemComponent } from './WeekViewItemComponent';

export interface WeekViewComponentProps {
    tasks: Task[];
}

export interface WeekViewComponentDispatch {
    onLoadTasks: () => Promise<Action>;
    onOpenTask: (id: string) => void;
    onCreateTask: (date?: Date) => Promise<Action>;
}

export class WeekViewComponent extends React.Component<WeekViewComponentProps & WeekViewComponentDispatch, StoreState> {
    componentWillMount() {
        this.props.onLoadTasks();
    }

    render() {
        return (
            <div className="weekview">
                <WeekViewItemComponent 
                    name="Backlog"
                    tasks={this.props.tasks}
                    onOpenTask={this.props.onOpenTask}
                    onCreateTask={this.props.onCreateTask}
                />
            </div>
        );
    }
}